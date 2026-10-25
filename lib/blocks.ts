import type { T } from "@/content/types";

/** Field kinds the dashboard knows how to render. */
export type Field =
  | { key: string; kind: "text" | "textarea"; label: T; localized?: boolean; hint?: T }
  | { key: string; kind: "plain"; label: T; hint?: T }
  | { key: string; kind: "bool"; label: T }
  | { key: string; kind: "link"; label: T }
  | { key: string; kind: "image"; label: T }
  | { key: string; kind: "images"; label: T }
  | { key: string; kind: "select"; label: T; options: { value: string; label: T }[] }
  | { key: string; kind: "items"; label: T; itemFields: Field[] };

export type BlockDef = {
  type: string;
  label: T;
  group: "hero" | "story" | "content" | "cta";
  note?: T;
  fields: Field[];
  /** blocks that read a shared collection — the dashboard links to the right editor */
  collection?: string;
  /** further shared lists the block reads — each gets its own edit link */
  moreCollections?: string[];
};

/** Preset 3D icons for the journey, operating-layer and cycle sections — keys match components/home/JourneyIcon3D. */
export const ICON_PRESETS: [string, string, string][] = [
  ["inbound", "استلام", "Inbound"], ["storage", "مستودع", "Warehouse"], ["order", "طلب", "Order"], ["pick", "انتقاء", "Pick"], ["pack", "تغليف", "Pack"],
  ["dispatch", "شاحنة", "Truck"], ["delivery", "موقع التسليم", "Delivery pin"], ["returns", "مرتجع", "Returns"], ["reporting", "تقارير", "Reporting"],
  ["inventory", "مخزون (رفوف)", "Inventory racks"], ["data", "بيانات (خوادم)", "Data"], ["demand", "طلب السوق (عربة)", "Demand cart"], ["customer", "العميل (منزل)", "Customer home"],
];

const L = (ar: string, en: string): T => ({ ar, en });
const text = (key: string, ar: string, en: string, kind: "text" | "textarea" = "text"): Field => ({ key, kind, label: L(ar, en), localized: true });
const plain = (key: string, ar: string, en: string): Field => ({ key, kind: "plain", label: L(ar, en) });
const TONES: Field = {
  key: "tone",
  kind: "select",
  label: L("لون الخلفية", "Background"),
  options: [
    { value: "white", label: L("أبيض", "White") },
    { value: "paper", label: L("رمادي فاتح", "Paper") },
    { value: "tint", label: L("برتقالي فاتح", "Tint") },
    { value: "graphite", label: L("رمادي داكن", "Graphite") },
    { value: "dark", label: L("أسود", "Ink") },
  ],
};

const IMAGE_OPTIONS: Field = {
  key: "image",
  kind: "select",
  label: L("الصورة (من الملف التعريفي)", "Image (from the company profile)"),
  options: [
    { value: "facility-exterior", label: L("واجهة المنشأة", "Facility exterior") },
    { value: "warehouse-tablet", label: L("مستودع — متابعة بالجهاز", "Warehouse — tablet") },
    { value: "forklift-signage", label: L("رافعة ولوحة الهوية", "Forklift and signage") },
    { value: "road-horizon", label: L("الطريق والأفق", "Road and horizon") },
    { value: "docks-air", label: L("أرصفة التحميل", "Loading docks") },
    { value: "vision2030-riyadh", label: L("الرياض ورؤية 2030", "Riyadh and Vision 2030") },
    { value: "team-tablet", label: L("فريق العمل", "The team") },
    { value: "services-truck-sunset", label: L("شاحنة عند الغروب", "Truck at sunset") },
    { value: "b2c-doorstep", label: L("تسليم للعميل النهائي", "Doorstep delivery") },
    { value: "b2c-packing", label: L("تجهيز وتغليف", "Packing") },
    { value: "b2b-dock-loading", label: L("تحميل الشحنات", "Dock loading") },
    { value: "road-trucks-mountain", label: L("شاحنات على الطريق", "Trucks on the road") },
    { value: "warehouse-racks", label: L("أرفف المستودع", "Warehouse racking") },
    { value: "pallet-dark", label: L("طبلية معدّة", "Prepared pallet") },
    { value: "intl-air-sea", label: L("شحن جوي وبحري", "Air and sea freight") },
    { value: "managed-handover", label: L("التشغيل المُدار", "Managed operations") },
    { value: "sectors-boxes", label: L("القطاعات", "Sectors") },
    { value: "scale-boxes", label: L("التوسّع", "Scaling") },
    { value: "quality-seal", label: L("الجودة والامتثال", "Quality and compliance") },
    { value: "readiness-worker", label: L("الجاهزية", "Readiness") },
    { value: "contact-night", label: L("تواصل معنا", "Contact") },
  ],
};

const SERVICE_SLUG: Field = {
  key: "slug",
  kind: "select",
  label: L("الخدمة", "Service"),
  options: [
    { value: "b2c-ecommerce", label: L("خدمات B2C والتجارة الإلكترونية", "B2C & e-commerce") },
    { value: "b2b-services", label: L("خدمات B2B", "B2B services") },
    { value: "road-transport", label: L("النقل البري", "Road transport") },
    { value: "warehousing-packaging", label: L("التخزين والتغليف", "Warehousing & packaging") },
    { value: "international-freight", label: L("الشحن الدولي", "International freight") },
    { value: "managed-logistics", label: L("التشغيل اللوجستي المؤسسي المُدار", "Managed enterprise logistics") },
  ],
};

const head = (): Field[] => [plain("eyebrow", "العنوان العلوي (إنجليزي)", "Eyebrow (Latin)"), text("title", "العنوان", "Heading"), text("lead", "النص التمهيدي", "Lead", "textarea")];

export const BLOCKS: BlockDef[] = [
  {
    type: "hero-flow",
    label: L("الواجهة الرئيسية المتحركة", "Animated hero"),
    group: "hero",
    note: L("واجهة الصفحة الرئيسية: الرسم المتحرك لقنوات الطلب + بطاقة حالة الطلب.", "Home hero: the animated demand-flow canvas plus the live order card."),
    fields: [
      plain("eyebrow", "العنوان العلوي (إنجليزي)", "Eyebrow (Latin)"),
      text("line1", "السطر الأول", "Headline line 1"),
      text("line2", "السطر الثاني (باللون البرتقالي)", "Headline line 2 (accent)"),
      text("support", "النص المساند", "Supporting text", "textarea"),
      text("primaryLabel", "زر رئيسي — النص", "Primary button label"),
      { key: "primaryHref", kind: "link", label: L("زر رئيسي — الرابط", "Primary button link") },
      text("secondaryLabel", "زر ثانوي — النص", "Secondary button label"),
      { key: "secondaryHref", kind: "link", label: L("زر ثانوي — الرابط", "Secondary button link") },
    ],
  },
  {
    type: "page-hero",
    label: L("واجهة صفحة داخلية", "Page hero"),
    group: "hero",
    fields: [
      plain("eyebrow", "العنوان العلوي (إنجليزي)", "Eyebrow (Latin)"),
      text("titleLine1", "العنوان — السطر الأول", "Title line 1"),
      text("titleLine2", "العنوان — السطر الثاني", "Title line 2"),
      text("lead", "النص التمهيدي", "Lead", "textarea"),
      { key: "showBlades", kind: "bool", label: L("إظهار الشفرات البرتقالية", "Show brand blades") },
    ],
  },
  { type: "operating-layer", label: L("طبقة التشغيل (الرسم الدائري)", "Operating layer diagram"), group: "story", collection: "operatingElements", moreCollections: ["operatingLayers"], fields: head() },
  { type: "commerce-journey", label: L("رحلة تشغيل الطلب (تفاعلية)", "Commerce operations journey"), group: "story", collection: "journey", fields: [plain("eyebrow", "العنوان العلوي", "Eyebrow"), text("title", "العنوان", "Heading")] },
  { type: "commerce-cycle", label: L("دورة تشغيل التجارة", "Commerce cycle"), group: "story", collection: "cycle", fields: [...head(), text("closing", "الجملة الختامية", "Closing line")] },
  { type: "why-exists", label: L("لماذا وُجدت جديان", "Why Jedyan exists"), group: "story", fields: [plain("eyebrow", "العنوان العلوي", "Eyebrow"), text("title", "العنوان", "Heading")] },
  { type: "solutions-rail", label: L("شريط الحلول الأفقي", "Solutions rail"), group: "content", collection: "solutions", fields: head() },
  { type: "solutions-index", label: L("قائمة الحلول التفصيلية", "Solutions list"), group: "content", collection: "solutions", fields: [TONES] },
  { type: "who-we-serve", label: L("من نخدم", "Who we serve"), group: "content", collection: "segments", fields: head() },
  { type: "sectors", label: L("القطاعات", "Sectors"), group: "content", collection: "sectors", fields: [...head(), { key: "showLink", kind: "bool", label: L("إظهار رابط صفحة القطاعات", "Show link to sectors page") }] },
  { type: "how-we-work", label: L("رحلة العميل (ست محطات)", "Client journey"), group: "story", collection: "clientJourney", fields: head() },
  { type: "visibility", label: L("التقنية ولوحة المؤشرات", "Technology & visibility"), group: "story", collection: "visibility", fields: head() },
  { type: "why-jedyan", label: L("لماذا جديان (الأسباب)", "Why Jedyan reasons"), group: "content", collection: "reasons", fields: [plain("eyebrow", "العنوان العلوي", "Eyebrow"), text("title", "العنوان", "Heading")] },
  {
    type: "closing",
    label: L("الخاتمة والدعوة للتواصل", "Closing statement"),
    group: "cta",
    fields: [
      plain("eyebrow", "العنوان العلوي", "Eyebrow"),
      text("titleLine1", "العنوان — السطر الأول", "Title line 1"),
      text("titleLine2", "العنوان — السطر الثاني", "Title line 2"),
      text("promise", "الوعد", "Promise", "textarea"),
      text("ctaText", "نص الدعوة", "CTA text"),
      text("primaryLabel", "زر رئيسي", "Primary button"),
      text("secondaryLabel", "زر ثانوي", "Secondary button"),
    ],
  },
  {
    type: "cta-band",
    label: L("شريط دعوة للتواصل", "CTA band"),
    group: "cta",
    fields: [text("title", "العنوان", "Heading"), text("text", "النص", "Text", "textarea"), text("ctaLabel", "نص الزر", "Button label"), { key: "ctaHref", kind: "link", label: L("رابط الزر", "Button link") }, TONES],
  },
  { type: "about-intro", label: L("تعريف الشركة", "About intro"), group: "content", fields: [plain("eyebrow", "العنوان العلوي", "Eyebrow"), text("title", "العنوان", "Heading"), text("sub", "السطر الفرعي", "Sub line"), text("p1", "الفقرة الأولى", "Paragraph 1", "textarea"), text("p2", "الفقرة الثانية", "Paragraph 2", "textarea"), text("p3", "الجملة الختامية", "Closing line"), TONES] },
  { type: "operating-layers", label: L("طبقات التشغيل الأربع", "Four operating layers"), group: "content", collection: "operatingLayers", fields: [...head(), text("note", "ملاحظة ختامية", "Closing note", "textarea"), TONES] },
  {
    type: "redefinitions",
    label: L("إعادات التعريف", "Brand redefinitions"),
    group: "content",
    fields: [
      plain("eyebrow", "العنوان العلوي", "Eyebrow"),
      text("title", "العنوان", "Heading"),
      { key: "items", kind: "items", label: L("العناصر", "Items"), itemFields: [text("from", "قبل", "From"), text("to", "بعد", "To"), text("text", "الشرح", "Text", "textarea")] },
      TONES,
    ],
  },
  {
    type: "quality-list",
    label: L("الجودة والالتزام", "Quality & compliance"),
    group: "content",
    fields: [...head(), { key: "items", kind: "items", label: L("العناصر", "Items"), itemFields: [text("title", "العنوان", "Title"), text("text", "الوصف", "Text", "textarea")] }, TONES],
  },
  { type: "star-note", label: L("جملة الجدي (النجم الثابت)", "Al-Jiddi note"), group: "content", fields: [text("text", "النص", "Text", "textarea"), TONES] },
  { type: "vision-mission", label: L("الرؤية والرسالة والغاية والوعد", "Vision, mission, purpose, promise"), group: "content", collection: "foundation", fields: [text("note", "ملاحظة تحت الرؤية", "Note under vision", "textarea"), TONES] },
  { type: "values-list", label: L("القيم", "Values"), group: "content", collection: "foundation", fields: [plain("eyebrow", "العنوان العلوي", "Eyebrow"), text("title", "العنوان", "Heading"), TONES] },
  { type: "pillars", label: L("ركائز العلامة الأربع", "Brand pillars"), group: "content", collection: "foundation", fields: [...head(), TONES] },
  { type: "rhythm", label: L("إيقاع التشغيل", "Operating rhythm"), group: "content", collection: "rhythm", fields: [plain("eyebrow", "العنوان العلوي", "Eyebrow"), text("title", "العنوان", "Heading"), text("note", "ملاحظة ختامية", "Closing note", "textarea"), TONES] },
  { type: "scale-modes", label: L("أنماط التوسّع", "Scalability modes"), group: "content", collection: "scaleModes", fields: [...head(), text("note", "ملاحظة ختامية", "Closing note", "textarea"), TONES] },
  { type: "carrier-visual", label: L("شبكة إدارة الناقلين (تفاعلية)", "Carrier orchestration"), group: "story", fields: [...head(), TONES] },
  { type: "contact-diagnosis", label: L("صفحة التواصل والتشخيص", "Contact & diagnosis"), group: "cta", collection: "diagnosis", fields: [plain("eyebrow", "العنوان العلوي", "Eyebrow"), text("title", "العنوان", "Heading"), text("sub", "النص التمهيدي", "Lead", "textarea"), { key: "steps", kind: "items", label: L("خطوات ما بعد الإرسال", "What happens next"), itemFields: [text("label", "الخطوة", "Step")] }] },
  { type: "rich-text", label: L("نص حر", "Rich text"), group: "content", fields: [plain("eyebrow", "العنوان العلوي", "Eyebrow"), text("title", "العنوان", "Heading"), text("body", "النص (كل سطر = فقرة)", "Body (one paragraph per line)", "textarea"), TONES] },
  { type: "feature-grid", label: L("شبكة عناصر", "Feature grid"), group: "content", fields: [...head(), { key: "items", kind: "items", label: L("العناصر", "Items"), itemFields: [plain("en", "تسمية إنجليزية", "Latin label"), text("title", "العنوان", "Title"), text("text", "الوصف", "Text", "textarea")] }, TONES] },
  { type: "media-text", label: L("صورة مع نص", "Image with text"), group: "content", fields: [plain("eyebrow", "العنوان العلوي", "Eyebrow"), text("title", "العنوان", "Heading"), text("body", "النص", "Body", "textarea"), { key: "image", kind: "image", label: L("الصورة", "Image") }, text("alt", "وصف الصورة", "Image alt"), { key: "imageSide", kind: "select", label: L("موضع الصورة", "Image side"), options: [{ value: "end", label: L("الجانب الخارجي", "Outer side") }, { value: "start", label: L("الجانب الداخلي", "Inner side") }] }, TONES] },
  { type: "quote", label: L("اقتباس", "Quote"), group: "content", fields: [text("text", "النص", "Quote", "textarea"), text("source", "المصدر", "Source"), TONES] },
  { type: "gallery", label: L("معرض صور", "Gallery"), group: "content", fields: [text("title", "العنوان", "Heading"), { key: "images", kind: "images", label: L("الصور", "Images") }, TONES] },
  /* ---------- final company profile ---------- */
  {
    type: "image-band",
    label: L("شريط صورة بعرض الشاشة", "Full-bleed image band"),
    group: "hero",
    note: L("يستخدم صور الملف التعريفي الرسمي. النص يظهر على الجانب المفتوح من الصورة.", "Uses the official company-profile artwork. Type sits on the open side of the frame."),
    fields: [
      IMAGE_OPTIONS,
      plain("eyebrow", "العنوان العلوي", "Eyebrow"),
      text("title", "العنوان", "Heading"),
      text("lead", "النص", "Lead", "textarea"),
      { key: "imageTone", kind: "select", label: L("لون النص", "Text tone"), options: [{ value: "dark", label: L("فاتح على داكن", "Light on dark") }, { value: "light", label: L("داكن على فاتح", "Dark on light") }] },
      { key: "height", kind: "select", label: L("الارتفاع", "Height"), options: [{ value: "tall", label: L("كبير", "Tall") }, { value: "mid", label: L("متوسط", "Medium") }, { value: "short", label: L("قصير", "Short") }] },
    ],
  },
  { type: "see-how", label: L("شاهد كيف نعمل (تفاعلي)", "See how we work"), group: "story", note: L("مراحل التشغيل للخدمة المختارة، بتقدّم تلقائي وإمكانية التنقل.", "The operating stages of the chosen service, auto-advancing and clickable."), fields: [SERVICE_SLUG] },
  {
    type: "stat-band",
    label: L("شريط الأرقام (عدّاد متحرك)", "Figures band"),
    group: "content",
    note: L("الأرقام الحالية توضيحية ويظهر عليها وسم «قيمة توضيحية». عدّلها من «الأرقام والمؤشرات».", "Current values are placeholders and show an \"Illustrative\" marker. Edit them under Figures."),
    collection: "stats",
    fields: [
      { key: "source", kind: "select", label: L("المجموعة", "Set"), options: [{ value: "headline", label: L("الأرقام الرئيسية", "Headline figures") }, { value: "performance", label: L("مؤشرات الأداء", "Performance indicators") }] },
      plain("eyebrow", "العنوان العلوي", "Eyebrow"),
      text("title", "العنوان", "Heading"),
      text("lead", "النص التمهيدي", "Lead", "textarea"),
      TONES,
    ],
  },
  {
    type: "charts",
    label: L("الرسوم البيانية", "Charts"),
    group: "content",
    collection: "stats",
    fields: [
      ...head(),
      { key: "showVolume", kind: "bool", label: L("رسم حجم الطلبات", "Order volume chart") },
      { key: "showMix", kind: "bool", label: L("رسم توزّع نطاق التشغيل", "Scope distribution chart") },
      { key: "showTrend", kind: "bool", label: L("رسم مستوى الخدمة", "Service level chart") },
      TONES,
    ],
  },
  { type: "mission-grid", label: L("الرسالة (ماذا / لمن / كيف / الأثر)", "Mission grid"), group: "content", collection: "mission", fields: [plain("eyebrow", "العنوان العلوي", "Eyebrow"), text("title", "العنوان", "Heading"), TONES] },
  { type: "promise", label: L("وعدنا لعملائنا", "Our promise"), group: "content", collection: "promise", fields: [plain("eyebrow", "العنوان العلوي", "Eyebrow"), text("title", "العنوان", "Heading"), TONES] },
  { type: "capabilities", label: L("قدراتنا التشغيلية", "Operating capabilities"), group: "content", collection: "capabilities", fields: [...head(), TONES] },
  { type: "growth", label: L("ما يترتّب على نمو الأعمال", "What growth brings"), group: "content", collection: "growth", fields: [plain("eyebrow", "العنوان العلوي", "Eyebrow"), text("title", "العنوان", "Heading"), TONES] },
  { type: "market-position", label: L("موقعنا في السوق", "Our market position"), group: "content", collection: "marketPosition", fields: [plain("eyebrow", "العنوان العلوي", "Eyebrow"), text("title", "العنوان", "Heading"), TONES] },
  { type: "vision-2030", label: L("دورنا في رؤية 2030", "Our role in Vision 2030"), group: "content", collection: "vision2030", fields: [plain("eyebrow", "العنوان العلوي", "Eyebrow"), text("title", "العنوان", "Heading"), TONES] },
  { type: "managed-split", label: L("التشغيل المُدار (ما تديره جديان / ما يحتفظ به العميل)", "Managed operations split"), group: "story", collection: "managed", fields: [plain("eyebrow", "العنوان العلوي", "Eyebrow"), text("title", "العنوان", "Heading"), text("lead", "النص التمهيدي", "Lead", "textarea"), TONES] },
  { type: "clients-sectors", label: L("عملاؤنا والقطاعات", "Clients and sectors"), group: "content", collection: "clientTypes", fields: [...head(), TONES] },
  { type: "help-matrix", label: L("كيف نساعد أعمالك (مصفوفة)", "How we help your business"), group: "content", collection: "helpMatrix", fields: [...head(), TONES] },
  { type: "compliance", label: L("الجودة والامتثال", "Quality and compliance"), group: "content", collection: "quality", fields: [plain("eyebrow", "العنوان العلوي", "Eyebrow"), text("title", "العنوان", "Heading"), TONES] },
  {
    type: "tracking",
    label: L("تتبّع الشحنة", "Shipment tracking"),
    group: "story",
    note: L("الواجهة جاهزة. يتم ربطها بنظام أودو بضبط متغيرات البيئة فقط دون تعديل برمجي.", "The interface is complete. It connects to Odoo through environment variables only — no code change."),
    fields: [
      plain("eyebrow", "العنوان العلوي", "Eyebrow"),
      text("title", "العنوان", "Heading"),
      text("lead", "النص التمهيدي", "Lead", "textarea"),
      { key: "samples", kind: "items", label: L("أرقام للتجربة (تُحذف بعد ربط أودو)", "Sample numbers (remove after the Odoo link)"), itemFields: [plain("value", "الرقم", "Number")] },
      TONES,
    ],
  },
  {
    type: "apply",
    label: L("نموذج انضمام (مقدم خدمة / توظيف)", "Join form (provider / careers)"),
    group: "cta",
    fields: [
      { key: "kind", kind: "select", label: L("نوع النموذج", "Form type"), options: [{ value: "carrier", label: L("الانضمام كمقدم خدمة", "Join as a service provider") }, { value: "career", label: L("الانضمام إلى الفريق", "Join the team") }] },
      plain("eyebrow", "العنوان العلوي", "Eyebrow"),
      text("title", "العنوان", "Heading"),
      text("lead", "النص التمهيدي", "Lead", "textarea"),
      TONES,
    ],
  },
];

export const blockDef = (type: string) => BLOCKS.find((b) => b.type === type);

export const GROUP_LABEL: Record<BlockDef["group"], T> = {
  hero: L("واجهات", "Heroes"),
  story: L("أقسام تفاعلية", "Interactive sections"),
  content: L("أقسام محتوى", "Content sections"),
  cta: L("دعوات للتواصل", "Calls to action"),
};

/** Collections editable from the dashboard, with the fields of a single item. */
export type CollectionDef = { key: string; label: T; note?: T; itemLabelKey: string; fields: Field[]; kind: "list" | "object" };

export const COLLECTIONS: CollectionDef[] = [
  {
    key: "solutions",
    label: L("الحلول (صفحات الخدمات)", "Solutions (service pages)"),
    note: L("كل عنصر هنا ينشئ صفحة خدمة كاملة على الموقع.", "Each item here generates a full service page."),
    itemLabelKey: "title",
    kind: "list",
    fields: [
      plain("slug", "الرابط (بالإنجليزية)", "URL slug"),
      plain("n", "الرقم", "Number"),
      plain("en", "الاسم الإنجليزي", "English name"),
      text("title", "الاسم", "Title"),
      text("headline", "الجملة المحورية", "Headline"),
      text("intro", "المقدمة", "Intro", "textarea"),
      text("problem", "المشكلة", "Problem", "textarea"),
      text("role", "دور جديان", "Jedyan's role", "textarea"),
      { key: "scope", kind: "items", label: L("نطاق الخدمة", "Scope"), itemFields: [text("value", "البند", "Item")] },
      { key: "stages", kind: "items", label: L("مراحل التشغيل", "Stages"), itemFields: [text("value", "المرحلة", "Stage")] },
      { key: "outputs", kind: "items", label: L("المخرجات", "Outputs"), itemFields: [text("value", "المخرج", "Output")] },
      { key: "kpis", kind: "items", label: L("مؤشرات الأداء", "KPIs"), itemFields: [text("value", "المؤشر", "KPI")] },
      text("tech", "التكامل التقني", "Technology", "textarea"),
      text("relation", "العلاقة بباقي المنظومة", "Relation to the system", "textarea"),
      text("cta", "نص زر التواصل", "CTA label"),
      { key: "visual", kind: "select", label: L("الرسم التفاعلي", "Interactive visual"), options: [
        { value: "bins", label: L("خريطة مواقع التخزين", "Bin map") },
        { value: "flow", label: L("خط التنفيذ", "Fulfillment line") },
        { value: "connect", label: L("خريطة الربط", "Event map") },
        { value: "carrier", label: L("شبكة الناقلين", "Carrier network") },
        { value: "returns", label: L("مسار المرتجعات", "Returns flow") },
        { value: "tower", label: L("طبقة التشغيل المُدار", "Managed layer") },
      ] },
    ],
  },
  { key: "sectors", label: L("القطاعات", "Sectors"), itemLabelKey: "label", kind: "list", fields: [plain("en", "الاسم الإنجليزي", "English name"), text("label", "الاسم", "Name"), text("profile", "سمات التشغيل (افصل بـ ·)", "Operating profile (separate with ·)")] },
  { key: "segments", label: L("شرائح العملاء", "Client segments"), itemLabelKey: "label", kind: "list", fields: [plain("en", "الاسم الإنجليزي", "English name"), text("label", "الاسم", "Name"), text("need", "ما يحتاجونه", "What they need", "textarea")] },
  { key: "journey", label: L("مراحل رحلة الطلب", "Order journey stages"), itemLabelKey: "label", kind: "list", fields: [plain("en", "الاسم الإنجليزي", "English name"), { key: "icon", kind: "select", label: L("الأيقونة ثلاثية الأبعاد", "3D icon"), options: [{ value: "", label: L("تلقائي", "Auto") }, ...ICON_PRESETS.map(([value, ar, en]) => ({ value, label: L(ar, en) })), { value: "none", label: L("بدون أيقونة", "No icon") }] }, { key: "image", kind: "image", label: L("صورة مخصصة بدل الأيقونة (اختياري)", "Custom image instead of icon (optional)") }, text("label", "الاسم", "Name"), text("status", "حالة الطلب", "Order status"), text("note", "الشرح", "Note", "textarea"), { key: "data", kind: "items", label: L("بيانات المرحلة", "Stage data"), itemFields: [text("value", "البند", "Item")] }] },
  { key: "cycle", label: L("دورة تشغيل التجارة", "Commerce cycle"), itemLabelKey: "label", kind: "list", fields: [plain("en", "الاسم الإنجليزي", "English name"), { key: "icon", kind: "select", label: L("الأيقونة ثلاثية الأبعاد", "3D icon"), options: [{ value: "", label: L("تلقائي", "Auto") }, ...ICON_PRESETS.map(([value, ar, en]) => ({ value, label: L(ar, en) })), { value: "none", label: L("بدون أيقونة", "No icon") }] }, { key: "image", kind: "image", label: L("صورة مخصصة بدل الأيقونة (اختياري)", "Custom image instead of icon (optional)") }, text("label", "الاسم", "Name"), text("note", "الشرح", "Note", "textarea")] },
  { key: "operatingElements", label: L("عناصر طبقة التشغيل", "Operating layer elements"), itemLabelKey: "label", kind: "list", fields: [plain("key", "المعرّف", "Key"), plain("en", "الاسم الإنجليزي", "English name"), { key: "icon", kind: "select", label: L("الأيقونة ثلاثية الأبعاد", "3D icon"), options: [{ value: "", label: L("تلقائي", "Auto") }, ...ICON_PRESETS.map(([value, ar, en]) => ({ value, label: L(ar, en) })), { value: "none", label: L("بدون أيقونة", "No icon") }] }, { key: "image", kind: "image", label: L("صورة مخصصة بدل الأيقونة (اختياري)", "Custom image instead of icon (optional)") }, text("label", "الاسم", "Name"), text("note", "الشرح", "Note", "textarea")] },
  { key: "operatingLayers", label: L("الطبقات الأربع", "The four layers"), itemLabelKey: "label", kind: "list", fields: [plain("en", "الاسم الإنجليزي", "English name"), { key: "icon", kind: "select", label: L("الأيقونة ثلاثية الأبعاد", "3D icon"), options: [{ value: "", label: L("تلقائي", "Auto") }, ...ICON_PRESETS.map(([value, ar, en]) => ({ value, label: L(ar, en) })), { value: "none", label: L("بدون أيقونة", "No icon") }] }, { key: "image", kind: "image", label: L("صورة مخصصة بدل الأيقونة (اختياري)", "Custom image instead of icon (optional)") }, text("label", "الاسم", "Name"), text("items", "المكوّنات", "Items")] },
  { key: "clientJourney", label: L("رحلة العميل", "Client journey"), itemLabelKey: "label", kind: "list", fields: [plain("en", "الاسم الإنجليزي", "English name"), text("label", "الاسم", "Name"), text("does", "ما نقوم به", "What we do", "textarea"), text("question", "سؤال العميل", "Client question"), plain("proof", "الدليل", "Evidence")] },
  { key: "rhythm", label: L("إيقاع التشغيل", "Operating rhythm"), itemLabelKey: "label", kind: "list", fields: [plain("en", "الاسم الإنجليزي", "English name"), text("label", "الاسم", "Name"), text("text", "الوصف", "Text", "textarea")] },
  { key: "scaleModes", label: L("أنماط التوسّع", "Scalability modes"), itemLabelKey: "label", kind: "list", fields: [plain("en", "الاسم الإنجليزي", "English name"), text("label", "الاسم", "Name"), text("text", "الوصف", "Text", "textarea")] },
  { key: "visibility", label: L("عناصر الرؤية التشغيلية", "Visibility items"), itemLabelKey: "label", kind: "list", fields: [plain("en", "الاسم الإنجليزي", "English name"), text("label", "الاسم", "Name")] },
  { key: "reasons", label: L("أسباب اختيار جديان", "Why Jedyan reasons"), itemLabelKey: "label", kind: "list", fields: [plain("en", "الاسم الإنجليزي", "English name"), text("label", "الاسم", "Name"), text("text", "الوصف", "Text", "textarea")] },
];

export const collectionDef = (key: string) => COLLECTIONS.find((c) => c.key === key);
