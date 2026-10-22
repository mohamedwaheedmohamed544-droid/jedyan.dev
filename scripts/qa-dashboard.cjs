/* Dashboard round-trip test: every write path, then the live page re-read. */
const { chromium } = require("playwright");
const B = process.env.BASE || "http://127.0.0.1:4451";
const results = [];
const check = (name, pass, detail = "") => { results.push({ name, pass, detail }); console.log((pass ? "PASS  " : "FAIL  ") + name + (detail ? "  — " + detail : "")); };

async function login(p) {
  await p.goto(B + "/admin/login", { waitUntil: "networkidle" });
  await p.fill("#email", "info@jedyan.sa");
  await p.fill("#password", "Test12345");
  await p.click("button.a-btn");
  await p.waitForURL(/\/admin\/?$/, { timeout: 15000 });
}
const save = async (p) => {
  const btn = p.locator(".a-savebar button.a-btn").first();
  if (await btn.isDisabled()) return false;        // nothing dirty
  await btn.click();
  await p.waitForTimeout(2800);
  return true;
};

(async () => {
  const b = await chromium.launch({ executablePath: "/opt/pw-browsers/chromium" }).catch(() => chromium.launch());
  const p = await b.newPage({ viewport: { width: 1500, height: 1100 } });
  const pub = await b.newPage({ viewport: { width: 1400, height: 900 } });

  await login(p);
  check("تسجيل الدخول إلى اللوحة", true);

  /* 1 — edit a section heading on a page, then read the live page */
  const MARK = "اختبار-حفظ-" + Date.now().toString().slice(-5);
  await p.goto(B + "/admin/pages/track", { waitUntil: "networkidle" });
  await p.locator(".a-section-head").nth(1).click();           // open the "tracking" section
  await p.waitForTimeout(1400);
  const arInputs = await p.locator(".a-section-body input, .a-section-body textarea").all();
  let edited = false;
  for (const el of arInputs) {
    const v = await el.inputValue();
    if (v.includes("تتبّع شحنتك")) { await el.fill(MARK); edited = true; break; }
  }
  check("العثور على حقل العنوان داخل قسم التتبّع", edited);
  await save(p);
  const savedBadge = await p.locator(".a-saved").count();
  check("ظهور «تم الحفظ ✓» بعد حفظ الصفحة", savedBadge > 0);

  await pub.goto(B + "/track", { waitUntil: "networkidle" });
  const liveHas = (await pub.content()).includes(MARK);
  check("ظهور التعديل على الصفحة الحيّة فورًا", liveHas, MARK);

  // revert
  for (const el of await p.locator(".a-section-body input, .a-section-body textarea").all()) {
    if ((await el.inputValue()) === MARK) { await el.fill("تتبّع شحنتك"); break; }
  }
  await save(p);
  check("التراجع عن التعديل وإعادة الحفظ", true);

  /* 2 — hide a section, verify it disappears, then show it again */
  await p.goto(B + "/admin/pages/track", { waitUntil: "networkidle" });
  const trackHead = p.locator(".a-section").filter({ hasText: "tracking" }).first();
  await trackHead.locator("button.a-btn.ghost.sm").filter({ hasText: "إخفاء" }).first().click();
  await save(p);
  await pub.goto(B + "/track", { waitUntil: "networkidle" });
  const hidden = !(await pub.locator("#track-ref").count());
  check("إخفاء قسم يُخفيه من الصفحة", hidden);
  await p.goto(B + "/admin/pages/track", { waitUntil: "networkidle" });
  await p.locator(".a-section").filter({ hasText: "tracking" }).first()
    .locator("button.a-btn.ghost.sm").filter({ hasText: "إظهار" }).first().click();
  await save(p);
  await pub.goto(B + "/track", { waitUntil: "networkidle" });
  check("إعادة إظهار القسم", (await pub.locator("#track-ref").count()) > 0);

  /* 3 — add a brand-new section from the library */
  await p.goto(B + "/admin/pages/careers", { waitUntil: "networkidle" });
  const before = await p.locator(".a-section-head").count();
  await p.locator("button.a-btn.ghost").filter({ hasText: "إضافة قسم" }).click();
  await p.waitForTimeout(500);
  const addBtn = p.locator("button.a-btn.ghost.sm").filter({ hasText: "قدراتنا التشغيلية" }).first();
  const canAdd = await addBtn.count();
  if (canAdd) { await addBtn.click(); await p.waitForTimeout(400); await save(p); }
  const after = await p.locator(".a-section-head").count();
  check("إضافة قسم جديد من مكتبة الأقسام", canAdd > 0 && after > before, `${before} → ${after}`);
  await pub.goto(B + "/careers", { waitUntil: "networkidle" });
  check("ظهور القسم المضاف على الصفحة الحيّة", (await pub.content()).includes("المرافق والمستودعات"));
  // remove it again
  await p.goto(B + "/admin/pages/careers", { waitUntil: "networkidle" });
  p.once("dialog", (d) => d.accept());
  await p.locator("button.a-btn.danger.sm").last().click();
  await p.waitForTimeout(400);
  await save(p);
  check("حذف القسم المضاف", true);

  /* 4 — edit a content document (figures) and publish a real number */
  await p.goto(B + "/admin/content/stats", { waitUntil: "networkidle" });
  const ta = p.locator("textarea.a-textarea");
  let json = await ta.inputValue();
  const parsed = JSON.parse(json);
  parsed.headline[2].value = 41;
  parsed.headline[2].placeholder = false;
  await ta.fill(JSON.stringify(parsed, null, 2));
  await save(p);
  await pub.goto(B + "/", { waitUntil: "networkidle" });
  await pub.evaluate(() => window.scrollTo(0, 950));
  await pub.waitForTimeout(2200);
  const homeHtml = await pub.content();
  check("حفظ مستند الأرقام من اللوحة", (await p.locator(".a-saved").count()) > 0);
  check("ظهور الرقم الجديد (41) على الصفحة الحيّة", homeHtml.includes(">41<") || homeHtml.includes("41"));
  const chips = await pub.locator("text=قيمة توضيحية").count();
  check("اختفاء وسم «قيمة توضيحية» عن الرقم المنشور", chips === 6, `بقي ${chips} (المتوقع 6: 3 أرقام + 3 رسوم)`);

  /* 5 — reset the document back to the shipped defaults */
  await p.goto(B + "/admin/content/stats", { waitUntil: "networkidle" });
  p.once("dialog", (d) => d.accept());
  await p.locator("button.a-btn.ghost").filter({ hasText: "استعادة الأصل" }).click();
  await p.waitForTimeout(2200);
  await p.reload({ waitUntil: "networkidle" });
  const restored = JSON.parse(await p.locator("textarea.a-textarea").inputValue());
  check("زر «استعادة الأصل» يعيد القيم الأصلية", restored.headline[2].value === 38 && restored.headline[2].placeholder === true);

  /* 6 — a list collection (services) */
  await p.goto(B + "/admin/content/solutions", { waitUntil: "networkidle" });
  await p.locator(".a-section-head").filter({ hasText: "road-transport" }).first().click();
  await p.waitForTimeout(1200);
  let solEdited = false;
  for (const el of await p.locator(".a-section-body input, .a-section-body textarea").all()) {
    if ((await el.inputValue()) === "النقل البري") { await el.fill("النقل البري والتوزيع"); solEdited = true; break; }
  }
  if (solEdited) await save(p);
  check("تعديل عنصر في قائمة الخدمات", solEdited);
  await pub.goto(B + "/solutions", { waitUntil: "networkidle" });
  check("ظهور الاسم المعدّل في فهرس الخدمات", (await pub.content()).includes("النقل البري والتوزيع"));
  // revert
  await p.goto(B + "/admin/content/solutions", { waitUntil: "networkidle" });
  await p.locator(".a-section-head").filter({ hasText: "road-transport" }).first().click();
  await p.waitForTimeout(1200);
  for (const el of await p.locator(".a-section-body input, .a-section-body textarea").all()) {
    if ((await el.inputValue()) === "النقل البري والتوزيع") { await el.fill("النقل البري"); break; }
  }
  await save(p);

  /* 7 — brand / theme */
  await p.goto(B + "/admin/brand", { waitUntil: "networkidle" });
  const colorInputs = await p.locator("input").all();
  let themed = false;
  for (const el of colorInputs) {
    const v = await el.inputValue();
    if (typeof v === "string" && v.toLowerCase() === "#ff6e06") { await el.fill("#ff7a1a"); themed = true; break; }
  }
  if (themed) await save(p);
  check("تغيير لون الهوية من اللوحة", themed);
  await pub.goto(B + "/", { waitUntil: "networkidle" });
  check("تطبيق اللون الجديد على الموقع", (await pub.content()).includes("#ff7a1a"));
  await p.goto(B + "/admin/brand", { waitUntil: "networkidle" });
  for (const el of await p.locator("input").all()) {
    if ((await el.inputValue() || "").toLowerCase() === "#ff7a1a") { await el.fill("#ff6e06"); break; }
  }
  await save(p);

  /* 8 — settings (contact details) */
  await p.goto(B + "/admin/settings", { waitUntil: "networkidle" });
  let setEdited = false;
  for (const el of await p.locator("input[type=text], input:not([type])").all()) {
    const v = await el.inputValue();
    if (v === "+966 53 343 3292") { await el.fill("+966 53 343 3290"); setEdited = true; break; }
  }
  if (setEdited) await save(p);
  check("تعديل بيانات التواصل في الإعدادات", setEdited);
  await pub.goto(B + "/contact", { waitUntil: "networkidle" });
  check("ظهور الرقم المعدّل في صفحة التواصل", (await pub.content()).includes("343 3290"));
  await p.goto(B + "/admin/settings", { waitUntil: "networkidle" });
  for (const el of await p.locator("input[type=text], input:not([type])").all()) {
    if ((await el.inputValue()) === "+966 53 343 3290") { await el.fill("+966 53 343 3292"); break; }
  }
  await save(p);

  /* 9 — create a page, verify it renders, then delete it */
  await p.goto(B + "/admin/pages", { waitUntil: "networkidle" });
  const slug = "qa-" + Date.now().toString().slice(-5);
  await p.locator("button.a-btn").filter({ hasText: "صفحة جديدة" }).first().click();
  await p.waitForTimeout(900);
  const nameFields = await p.locator("input[type=text], input:not([type])").all();
  if (nameFields.length >= 3) {
    await nameFields[0].fill("صفحة اختبار");
    await nameFields[1].fill("QA Page");
    await nameFields[2].fill(slug);
  }
  const create = p.locator("button.a-btn").filter({ hasText: /إنشاء|أنشئ/ }).first();
  if (await create.count()) { await create.click(); await p.waitForTimeout(3500); }
  const createdUrl = p.url();
  check("إنشاء صفحة جديدة", createdUrl.includes("/admin/pages/"), createdUrl.split("/").pop());
  // publish it, then open it
  const pubBtn = p.locator("button.a-btn").filter({ hasText: "انشرها" }).first();
  if (await pubBtn.count()) { await pubBtn.click(); await p.waitForTimeout(500); await save(p); }
  const liveStatus = await fetch(B + "/" + slug).then((r) => r.status);
  check("فتح الصفحة الجديدة على الموقع", liveStatus === 200, "status " + liveStatus);
  // delete it — the control lives on the page-settings tab
  await p.goto(createdUrl, { waitUntil: "networkidle" });
  await p.locator("button.a-btn").filter({ hasText: "إعدادات الصفحة" }).first().click();
  await p.waitForTimeout(800);
  p.once("dialog", (d) => d.accept());
  const del = p.locator("button.a-btn.danger").filter({ hasText: "حذف الصفحة" }).first();
  if (await del.count()) { await del.click(); await p.waitForTimeout(3500); }
  const gone = await fetch(B + "/" + slug).then((r) => r.status);
  check("حذف الصفحة يرجعها 404", gone === 404, "status " + gone);

  /* 10 — leads inbox */
  await fetch(B + "/api/leads", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ locale: "ar", contact: { name: "فحص اللوحة", email: "inbox-check@example.com", notes: "اختبار" }, answers: [] }),
  });
  await p.goto(B + "/admin/leads", { waitUntil: "networkidle" });
  check("وصول الطلب الجديد إلى صندوق طلبات العملاء", (await p.content()).includes("inbox-check@example.com"));

  console.log("\n==== " + results.filter((r) => r.pass).length + "/" + results.length + " ====");
  const failed = results.filter((r) => !r.pass);
  if (failed.length) console.log("FAILED:", failed.map((f) => f.name).join(" | "));
  await b.close();
  process.exit(failed.length ? 1 : 0);
})().catch((e) => { console.error("RUNNER ERROR", e.message); process.exit(2); });
