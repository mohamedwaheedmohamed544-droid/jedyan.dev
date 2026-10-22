"use client";
import { useState, type FormEvent } from "react";
import type { Locale } from "@/content/types";
import s from "./Tracker.module.css";

type Step = { code: string; done: boolean; at?: string };
type Result =
  | { found: false; ref: string; reason: "not-found" | "unavailable" }
  | { found: true; ref: string; status: string; updatedAt: string; origin?: string; destination?: string; service?: string; steps: Step[] };

const STEP_LABEL: Record<string, { ar: string; en: string }> = {
  received: { ar: "تم الاستلام", en: "Received" },
  processing: { ar: "قيد التجهيز", en: "Processing" },
  ready: { ar: "جاهزة للإرسال", en: "Ready to dispatch" },
  in_transit: { ar: "في الطريق", en: "In transit" },
  out_for_delivery: { ar: "خارجة للتوصيل", en: "Out for delivery" },
  delivered: { ar: "تم التسليم", en: "Delivered" },
};

const STATUS_LABEL: Record<string, { ar: string; en: string }> = {
  ...STEP_LABEL,
  exception: { ar: "تحتاج متابعة", en: "Needs follow-up" },
  returned: { ar: "مرتجعة", en: "Returned" },
};

const fmtDate = (iso: string, L: Locale) => {
  if (!iso) return "";
  const d = new Date(iso.replace(" ", "T"));
  if (Number.isNaN(d.getTime())) return iso;
  return new Intl.DateTimeFormat(L === "ar" ? "ar-SA-u-ca-gregory-nu-latn" : "en-GB", {
    dateStyle: "medium",
    timeStyle: "short",
    timeZone: "Asia/Riyadh",
  }).format(d);
};

export default function Tracker({ locale, samples = [] }: { locale: Locale; samples?: string[] }) {
  const L = locale;
  const t = (ar: string, en: string) => (L === "ar" ? ar : en);
  const [ref, setRef] = useState("");
  const [busy, setBusy] = useState(false);
  const [res, setRes] = useState<Result | null>(null);

  async function submit(e: FormEvent) {
    e.preventDefault();
    const v = ref.trim();
    if (!v || busy) return;
    setBusy(true);
    setRes(null);
    try {
      const r = await fetch("/api/track", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ ref: v }),
      });
      setRes((await r.json()) as Result);
    } catch {
      setRes({ found: false, ref: v, reason: "unavailable" });
    } finally {
      setBusy(false);
    }
  }

  const exception = res?.found && (res.status === "exception" || res.status === "returned");
  const activeIdx = res?.found ? res.steps.filter((x) => x.done).length - 1 : -1;

  return (
    <div className={s.wrap}>
      <form className={s.form} onSubmit={submit}>
        <label className={s.label} htmlFor="track-ref">
          {t("رقم الشحنة أو رقم التتبع", "Shipment or tracking number")}
        </label>
        <div className={s.row}>
          <input
            id="track-ref"
            className={s.input}
            value={ref}
            onChange={(e) => setRef(e.target.value)}
            placeholder="JD-10045821"
            autoComplete="off"
            spellCheck={false}
            dir="ltr"
            inputMode="text"
            maxLength={64}
          />
          <button type="submit" className={s.btn} disabled={busy || !ref.trim()}>
            {busy ? t("جارٍ البحث…", "Searching…") : t("تتبّع", "Track")}
          </button>
        </div>
        <p className={s.hint}>
          {t(
            "ستجد رقم التتبع في رسالة تأكيد الشحن أو في إشعار التسليم.",
            "You will find the tracking number in your dispatch confirmation or delivery notice.",
          )}
        </p>
        {samples.length > 0 && (
          <p className={s.samples}>
            <span>{t("للتجربة:", "Try:")}</span>
            {samples.slice(0, 3).map((x) => (
              <button key={x} type="button" onClick={() => setRef(x)} dir="ltr">{x}</button>
            ))}
          </p>
        )}
      </form>

      <div className={s.panel} aria-live="polite">
        {!res && (
          <p className={s.idle}>
            {t(
              "ستظهر حالة الشحنة ومراحلها هنا بمجرد البحث.",
              "The shipment's status and stages will appear here as soon as you search.",
            )}
          </p>
        )}

        {res && !res.found && (
          <div className={s.empty}>
            <span className={s.emptyMark} aria-hidden="true" />
            <h3>{res.reason === "unavailable" ? t("تعذّر الوصول إلى بيانات التتبع", "Tracking data is unavailable") : t("لم نعثر على هذا الرقم", "We couldn't find that number")}</h3>
            <p>
              {res.reason === "unavailable"
                ? t("خدمة التتبع غير متاحة مؤقتًا. تواصل معنا وسنتابع الشحنة مباشرة.", "The tracking service is temporarily unavailable. Contact us and we will follow the shipment directly.")
                : t("تأكد من الرقم كما ورد في إشعار الشحن، أو تواصل معنا وسنتحقق منه.", "Check the number as it appears in your dispatch notice, or contact us and we will verify it.")}
            </p>
          </div>
        )}

        {res?.found && (
          <div className={`${s.result} ${exception ? s.resultWarn : ""}`}>
            <header className={s.head}>
              <div>
                <p className={s.refLine} dir="ltr">{res.ref}</p>
                <p className={s.status}>{STATUS_LABEL[res.status]?.[L] ?? res.status}</p>
              </div>
              <dl className={s.meta}>
                {res.destination && (
                  <div>
                    <dt>{t("الوجهة", "Destination")}</dt>
                    <dd>{res.destination}</dd>
                  </div>
                )}
                {res.service && (
                  <div>
                    <dt>{t("الخدمة", "Service")}</dt>
                    <dd dir="ltr">{res.service}</dd>
                  </div>
                )}
                <div>
                  <dt>{t("آخر تحديث", "Last update")}</dt>
                  <dd>{fmtDate(res.updatedAt, L)}</dd>
                </div>
              </dl>
            </header>

            {exception ? (
              <p className={s.warnText}>
                {t(
                  "هذه الشحنة تحتاج متابعة من فريق التشغيل. تواصل معنا بالرقم أعلاه وسنوافيك بالحالة.",
                  "This shipment needs follow-up from the operations team. Contact us with the number above and we will update you.",
                )}
              </p>
            ) : (
              <ol className={s.steps} style={{ ["--n" as string]: res.steps.length }}>
                {res.steps.map((st, i) => (
                  <li key={st.code} className={`${st.done ? s.done : ""} ${i === activeIdx ? s.current : ""}`} style={{ ["--d" as string]: i * 110 }}>
                    <span className={s.dot} aria-hidden="true" />
                    <span className={s.stepLabel}>{STEP_LABEL[st.code]?.[L] ?? st.code}</span>
                  </li>
                ))}
              </ol>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
