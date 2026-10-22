import { notFound } from "next/navigation";
import { guard } from "@/lib/guard";
import { getSite } from "@/lib/content";
import { collectionDef } from "@/lib/blocks";
import CollectionEditor from "@/components/admin/CollectionEditor";
import JsonEditor from "@/components/admin/JsonEditor";

export const dynamic = "force-dynamic";

const FREEFORM: Record<string, { title: string; note: string }> = {
  messages: { title: "الرسائل الأساسية للعلامة", note: "كل حقل هنا يظهر في أكثر من مكان على الموقع." },
  foundation: { title: "الرؤية والرسالة والقيم والركائز", note: "تحتاج اعتماد الإدارة قبل النشر." },
  diagnosis: { title: "نموذج التشخيص", note: "الأسئلة والخيارات في صفحة التواصل." },
  whyExists: { title: "لماذا وُجدت جديان", note: "المشكلة، الدور، النتيجة، والجملة الختامية." },
  sectorRule: { title: "قاعدة القطاعات", note: "النص الذي يشرح كيف يختلف التشغيل حسب القطاع." },
  about: { title: "من نحن", note: "تعريف الشركة وصقر الجديان القابضة — من الملف التعريفي النهائي." },
  mission: { title: "الرسالة", note: "نص الرسالة + ماذا نقدّم / لمن نقدّمها / كيف نقدّمها / ما الأثر." },
  vision: { title: "الرؤية", note: "نص الرؤية والركائز الثلاث ومؤشرات الصفحة." },
  promise: { title: "وعدنا لعملائنا", note: "«جاهزيةٌ تُبنى عليها أعمالكم» والبنود الأربعة." },
  capabilities: { title: "القدرات التشغيلية", note: "العناصر السبعة كما وردت في الملف التعريفي." },
  growth: { title: "ما يترتّب على نمو الأعمال", note: "محرّكات النمو وسلسلة التشغيل." },
  marketPosition: { title: "موقعنا في السوق", note: "العناصر الستة." },
  vision2030: { title: "دورنا في رؤية 2030", note: "المحاور الخمسة." },
  managed: { title: "التشغيل اللوجستي المؤسسي المُدار", note: "ما تديره جديان وما يحتفظ به العميل." },
  clientTypes: { title: "أنواع العملاء", note: "الفئات الست التي نخدمها." },
  helpMatrix: { title: "كيف نساعد أعمالك", note: "الاحتياج ← الخدمة ← الأثر." },
  method: { title: "آلية العمل معنا", note: "المراحل الست." },
  quality: { title: "الجودة والامتثال", note: "البنود الخمسة وما يحصل عليه العميل والأثر." },
  stats: { title: "الأرقام والمؤشرات", note: "كل رقم هنا توضيحي الآن. عدّل القيمة ثم اجعل placeholder = false ليختفي وسم «قيمة توضيحية» من الموقع." },
};

export default async function CollectionPage({ params }: { params: Promise<{ key: string }> }) {
  await guard();
  const { key } = await params;
  const site = await getSite();
  const data = (site as unknown as Record<string, unknown>)[key];
  const def = collectionDef(key);
  if (def) return <CollectionEditor def={def} items={(data as Record<string, unknown>[]) || []} />;
  if (FREEFORM[key]) return <JsonEditor dataKey={key} title={FREEFORM[key].title} note={FREEFORM[key].note} value={data} />;
  notFound();
}
