import Link from "next/link";
import { guard } from "@/lib/guard";
import { COLLECTIONS } from "@/lib/blocks";
import { getSite } from "@/lib/content";

/** Documents from the final company profile, edited as structured text. */
const PROFILE_DOCS: { key: string; title: string; note: string }[] = [
  { key: "stats", title: "الأرقام والمؤشرات", note: "كل رقم هنا توضيحي الآن ويظهر عليه وسم «قيمة توضيحية». غيّر القيمة ثم اجعل placeholder = false ليختفي الوسم." },
  { key: "about", title: "من نحن", note: "تعريف الشركة وصقر الجديان القابضة." },
  { key: "mission", title: "الرسالة", note: "النص + ماذا نقدّم / لمن نقدّمها / كيف نقدّمها / ما الأثر." },
  { key: "vision", title: "الرؤية", note: "نص الرؤية والركائز الثلاث." },
  { key: "promise", title: "وعدنا لعملائنا", note: "«جاهزيةٌ تُبنى عليها أعمالكم» والبنود الأربعة." },
  { key: "capabilities", title: "القدرات التشغيلية", note: "العناصر السبعة." },
  { key: "growth", title: "ما يترتّب على نمو الأعمال", note: "محرّكات النمو وسلسلة التشغيل." },
  { key: "marketPosition", title: "موقعنا في السوق", note: "العناصر الستة." },
  { key: "vision2030", title: "دورنا في رؤية 2030", note: "المحاور الخمسة." },
  { key: "managed", title: "التشغيل اللوجستي المؤسسي المُدار", note: "ما تديره جديان وما يحتفظ به العميل." },
  { key: "clientTypes", title: "أنواع العملاء", note: "الفئات الست." },
  { key: "helpMatrix", title: "كيف نساعد أعمالك", note: "الاحتياج ← الخدمة ← الأثر." },
  { key: "method", title: "آلية العمل معنا", note: "المراحل الست." },
  { key: "quality", title: "الجودة والامتثال", note: "البنود الخمسة." },
];

export const dynamic = "force-dynamic";

export default async function ContentHome() {
  await guard();
  const site = await getSite();
  const counts = site as unknown as Record<string, unknown[]>;
  return (
    <>
      <div className="a-head">
        <div>
          <h1>المحتوى والقوائم</h1>
          <p>هذه القوائم تُغذّي الأقسام التفاعلية في كل الصفحات — عدّلها مرة واحدة فتتغير أينما ظهرت.</p>
        </div>
      </div>
      <div className="a-list">
        {COLLECTIONS.map((c) => (
          <Link key={c.key} href={`/admin/content/${c.key}`} className="a-item">
            <div>
              <b>{c.label.ar}</b>
              <div className="a-sub">{c.note?.ar || `${Array.isArray(counts[c.key]) ? counts[c.key].length : 0} عنصر`}</div>
            </div>
            <span className="a-spacer" />
            <span className="a-pill muted mono">{c.key}</span>
            <span className="a-btn ghost sm">تحرير</span>
          </Link>
        ))}
        {PROFILE_DOCS.map((d) => (
          <Link key={d.key} href={`/admin/content/${d.key}`} className="a-item">
            <div><b>{d.title}</b><div className="a-sub">{d.note}</div></div>
            <span className="a-spacer" />
            <span className="a-pill muted mono">{d.key}</span>
            <span className="a-btn ghost sm">تحرير</span>
          </Link>
        ))}
        <Link href="/admin/content/messages" className="a-item">
          <div><b>الرسائل الأساسية للعلامة</b><div className="a-sub">الفكرة الكبرى، الجوهر، الوعد، التصنيف — تظهر في الواجهة والفوتر وصفحات عدة.</div></div>
          <span className="a-spacer" /><span className="a-btn ghost sm">تحرير</span>
        </Link>
        <Link href="/admin/content/foundation" className="a-item">
          <div><b>الرؤية والرسالة والقيم والركائز</b><div className="a-sub">تظهر في صفحة رؤية جديان وصفحة لماذا جديان.</div></div>
          <span className="a-spacer" /><span className="a-btn ghost sm">تحرير</span>
        </Link>
        <Link href="/admin/content/diagnosis" className="a-item">
          <div><b>نموذج التشخيص (أسئلة صفحة التواصل)</b><div className="a-sub">الأسئلة والخيارات التي يملؤها العميل قبل إرسال الطلب.</div></div>
          <span className="a-spacer" /><span className="a-btn ghost sm">تحرير</span>
        </Link>
        <Link href="/admin/content/whyExists" className="a-item">
          <div><b>لماذا وُجدت جديان (المشكلة / الدور / النتيجة)</b><div className="a-sub">قسم أساسي في الصفحة الرئيسية.</div></div>
          <span className="a-spacer" /><span className="a-btn ghost sm">تحرير</span>
        </Link>
      </div>
    </>
  );
}
