/**
 * JEDYAN — site content.
 * Source of truth: JEDYAN_COMPANY_PROFILE_2026 + JEDYAN_BRAND_BLUEPRINT_V6.
 * Rule: nothing here may state a capability, figure, partner or integration that the
 * source files do not confirm. Items the Blueprint marks as "capability map" are worded
 * as scoped-per-account, never as live connectors.
 */
import type { T } from "./types";
import * as P from "./profile";

export const SITE_URL = "https://jedyan.sa";

export const company = {
  name: { ar: "جديان للخدمات اللوجستية", en: "Jedyan Logistics" },
  parent: { ar: "إحدى شركات صقر الجديان القابضة", en: "A Saqr Al-Jedyan Holding company" },
  country: { ar: "المملكة العربية السعودية", en: "Kingdom of Saudi Arabia" },
  email: "info@jedyan.sa",
  phoneDisplay: "+966 53 343 3292",
  phoneHref: "+966533433292",
  web: "jedyan.sa",
  instagram: "https://instagram.com/jedyan.sa",
  x: "https://x.com/jedyan_sa",
};

export const nav: { href: string; label: T }[] = [
  { href: "/", label: { ar: "الرئيسية", en: "Home" } },
  { href: "/about", label: { ar: "من نحن", en: "About" } },
  { href: "/solutions", label: { ar: "خدماتنا", en: "Services" } },
  { href: "/how-we-work", label: { ar: "كيف نعمل", en: "How we work" } },
  { href: "/sectors", label: { ar: "القطاعات", en: "Sectors" } },
  { href: "/why-jedyan", label: { ar: "لماذا جديان", en: "Why Jedyan" } },
  { href: "/track", label: { ar: "تتبّع شحنتك", en: "Track shipment" } },
  { href: "/contact", label: { ar: "تواصل معنا", en: "Contact" } },
];

export const messages = {
  bigIdea1: { ar: "نُحرّك ما هو أكبر من البضائع.", en: "We move more than goods." },
  bigIdea2: { ar: "نُحرّك الأعمال.", en: "We move business." },
  essence: { ar: "جاهزيةٌ تُبنى عليها الأعمال.", en: "Readiness businesses are built on." },
  promise: { ar: "لن تضطرّ إلى تأجيل نموّك بسبب عملياتك.", en: "You will never have to postpone growth because of your operations." },
  oneStatement: {
    ar: "جديان تدير ما يحدث بين الطلب ووصوله.",
    en: "Jedyan runs everything that happens between an order and its arrival.",
  },
  heroSupport: {
    ar: "شركة سعودية تقدّم حلولًا تشغيلية متكاملة — التخزين، وتجهيز الطلبات، والتغليف، وإدارة التوزيع، والمرتجعات — لتشغّل الشركات تجارتها بكفاءة وقابلية أعلى للتوسع.",
    en: "A Saudi company delivering integrated operations — warehousing, order fulfillment, packaging, distribution management and returns — so businesses run their commerce efficiently and scale with confidence.",
  },
  demandRule: { ar: "الطلب لا يجب أن ينتظر قدرة التشغيل.", en: "Demand should never wait for operating capacity." },
  category: { ar: "شريك منظومة تشغيل التجارة", en: "Commerce Operations Infrastructure Partner" },
};

/* ---------- Section 01: Operating layer ---------- */
export const operatingElements: { key: string; label: T; en: string; note: T }[] = [
  { key: "inventory", label: { ar: "المخزون", en: "Inventory" }, en: "INVENTORY", note: { ar: "استلام، فحص، تصنيف، تخزين، جرد وضبط.", en: "Receive, inspect, classify, store, count, adjust." } },
  { key: "order", label: { ar: "الطلب", en: "Order" }, en: "ORDER", note: { ar: "استقبال الطلب من القناة وإطلاقه للتنفيذ.", en: "Capture the order from its channel and release it." } },
  { key: "fulfillment", label: { ar: "التنفيذ", en: "Fulfillment" }, en: "FULFILLMENT", note: { ar: "انتقاء، تعبئة وتغليف، وتجهيز للشحن.", en: "Pick, pack and prepare for dispatch." } },
  { key: "distribution", label: { ar: "التوزيع", en: "Distribution" }, en: "DISTRIBUTION", note: { ar: "اختيار الناقل، إرسال، تتبّع، تسليم.", en: "Carrier selection, dispatch, tracking, delivery." } },
  { key: "returns", label: { ar: "المرتجعات", en: "Returns" }, en: "RETURNS", note: { ar: "استلام وفحص وقرار موثّق يعيد الدورة.", en: "Receive, inspect, and a documented decision." } },
  { key: "data", label: { ar: "البيانات", en: "Data" }, en: "DATA", note: { ar: "حالة الطلب، حالة المخزون، الاستثناءات، تقارير الأداء.", en: "Order status, stock status, exceptions, performance." } },
];

export const operatingLayers: { en: string; label: T; items: T }[] = [
  { en: "INVENTORY LAYER", label: { ar: "طبقة المخزون", en: "Inventory layer" }, items: { ar: "استلام · فحص · تصنيف · تخزين · جرد · ضبط المخزون", en: "Receive · Inspect · Classify · Store · Count · Adjust" } },
  { en: "ORDER LAYER", label: { ar: "طبقة الطلب", en: "Order layer" }, items: { ar: "استقبال الطلب · انتقاء · تعبئة وتغليف · تجهيز للشحن", en: "Order intake · Pick · Pack · Ready to ship" } },
  { en: "MOVEMENT LAYER", label: { ar: "طبقة الحركة", en: "Movement layer" }, items: { ar: "اختيار الناقل · إرسال · تتبّع · تسليم · معالجة المرتجعات", en: "Carrier selection · Dispatch · Track · Deliver · Returns" } },
  { en: "DATA LAYER", label: { ar: "طبقة البيانات", en: "Data layer" }, items: { ar: "حالة الطلب · حالة المخزون · الاستثناءات · تقارير الأداء", en: "Order status · Stock status · Exceptions · Performance" } },
];

/* ---------- Section 02: Commerce operations cycle ---------- */
export const cycle: { en: string; label: T; note: T }[] = [
  { en: "DEMAND", label: { ar: "طلب السوق", en: "Demand" }, note: { ar: "المبيعات تأتي من المتاجر والتطبيقات والمنصات والفروع — والتشغيل يجب أن يكون جاهزًا لها جميعًا.", en: "Sales arrive from stores, apps, marketplaces and branches — operations must be ready for all of them." } },
  { en: "INVENTORY", label: { ar: "المخزون", en: "Inventory" }, note: { ar: "مخزون واحد متزامن عبر القنوات، يبدأ دقيقًا من لحظة الاستلام.", en: "One synchronised stock across channels, accurate from the moment of receipt." } },
  { en: "ORDER", label: { ar: "الطلب", en: "Order" }, note: { ar: "كل طلب يدخل دورة تشغيل واحدة لها حالة معروفة في كل لحظة.", en: "Every order enters one operating cycle with a known status at every moment." } },
  { en: "FULFILLMENT", label: { ar: "التنفيذ", en: "Fulfillment" }, note: { ar: "انتقاء وتحقق وتغليف وتجهيز — إجراء واحد منظّم يقلّل الأخطاء ويسرّع الإغلاق.", en: "Pick, verify, pack, prepare — one organised routine that cuts errors and speeds closure." } },
  { en: "DISTRIBUTION", label: { ar: "التوزيع", en: "Distribution" }, note: { ar: "المسار المناسب لكل شحنة، ومتابعتها حتى التسليم أو معالجة الاستثناء.", en: "The right route for every shipment, followed through to delivery or exception handling." } },
  { en: "CUSTOMER", label: { ar: "العميل", en: "Customer" }, note: { ar: "التغليف والتسليم هما آخر ما يلمسه عميلك من علامتك.", en: "Packaging and delivery are the last things your customer touches of your brand." } },
  { en: "RETURNS", label: { ar: "المرتجعات", en: "Returns" }, note: { ar: "المرتجع جزء من دورة التجارة؛ نعيده إلى الدورة بقرار موثّق.", en: "A return is part of the commerce cycle; we bring it back with a documented decision." } },
  { en: "DATA", label: { ar: "البيانات", en: "Data" }, note: { ar: "البيانات تُغلق دورة التشغيل، وتهيّئ القرار للطلب التالي.", en: "Data closes the operating cycle and prepares the decision for the next order." } },
];

/* ---------- Commerce operations journey (9 stages) ---------- */
export const journey: { en: string; label: T; status: T; note: T; data: T[] }[] = [
  { en: "INBOUND", label: { ar: "استلام", en: "Inbound" }, status: { ar: "وصلت الشحنة الواردة", en: "Inbound shipment arrived" }, note: { ar: "دقة الاستلام هي أساس دقة المخزون وكفاءة كل ما يليها.", en: "Receiving accuracy is the foundation of stock accuracy and everything after it." }, data: [{ ar: "مطابقة الكميات", en: "Quantity match" }, { ar: "فحص الحالة", en: "Condition check" }, { ar: "توثيق الوارد", en: "Inbound record" }] },
  { en: "STORAGE", label: { ar: "تخزين", en: "Storage" }, status: { ar: "مُخزّن في موقع محدد", en: "Stored at a defined location" }, note: { ar: "لكل صنف موقع، ولكل حركة أثر.", en: "Every item has a location; every movement leaves a trace." }, data: [{ ar: "ترميز الأصناف", en: "SKU labelling" }, { ar: "موقع التخزين", en: "Bin location" }, { ar: "رصيد متاح", en: "Available balance" }] },
  { en: "ORDER", label: { ar: "طلب", en: "Order" }, status: { ar: "طلب جديد مُستلم", en: "New order received" }, note: { ar: "يبدأ التشغيل من حدث الطلب، لا من باب المستودع.", en: "Operations start at the order event, not at the warehouse door." }, data: [{ ar: "القناة", en: "Channel" }, { ar: "الأصناف المحجوزة", en: "Reserved items" }, { ar: "إطلاق للتنفيذ", en: "Released" }] },
  { en: "PICK", label: { ar: "انتقاء", en: "Pick" }, status: { ar: "قيد الانتقاء", en: "Picking" }, note: { ar: "انتقاء وتحقق من الصنف قبل أن يتحول الخطأ إلى شكوى.", en: "Pick and verify before an error becomes a complaint." }, data: [{ ar: "قائمة الانتقاء", en: "Pick list" }, { ar: "تحقق بالمسح", en: "Scan verification" }, { ar: "مطابقة الطلب", en: "Order match" }] },
  { en: "PACK", label: { ar: "تغليف", en: "Pack" }, status: { ar: "قيد التغليف", en: "Packing" }, note: { ar: "التغليف آخر ما يلمسه عميلك — يحمي الشحنة ويمثّل علامتك.", en: "Packaging is the last touch — it protects the shipment and carries your brand." }, data: [{ ar: "مواد التغليف", en: "Packaging" }, { ar: "مواد مضافة", en: "Inserts" }, { ar: "بوليصة الشحن", en: "Shipping label" }] },
  { en: "DISPATCH", label: { ar: "إرسال", en: "Dispatch" }, status: { ar: "سُلّم للناقل", en: "Handed to carrier" }, note: { ar: "هنا تُقاس السرعة: الطلب يُغلق بالحركة.", en: "This is where speed is measured: the order closes by moving." }, data: [{ ar: "الناقل المختار", en: "Selected carrier" }, { ar: "مسح التسليم", en: "Handover scan" }, { ar: "رقم التتبع", en: "Tracking number" }] },
  { en: "DELIVERY", label: { ar: "تسليم", en: "Delivery" }, status: { ar: "في الطريق إلى العميل", en: "Out for delivery" }, note: { ar: "الشحنة لها حالة معروفة في كل لحظة.", en: "The shipment has a known status at every moment." }, data: [{ ar: "حالة التتبع", en: "Tracking status" }, { ar: "إثبات التسليم", en: "Proof of delivery" }, { ar: "استثناء عند الحاجة", en: "Exception if needed" }] },
  { en: "RETURNS", label: { ar: "مرتجع", en: "Returns" }, status: { ar: "مرتجع قيد الفحص", en: "Return under inspection" }, note: { ar: "قيمة المرتجع في سرعة إعادته إلى الدورة.", en: "A return's value lies in how fast it re-enters the cycle." }, data: [{ ar: "سبب الإرجاع", en: "Return reason" }, { ar: "فحص الحالة", en: "Condition" }, { ar: "قرار موثّق", en: "Documented decision" }] },
  { en: "REPORTING", label: { ar: "تقارير", en: "Reporting" }, status: { ar: "أُغلقت الدورة", en: "Cycle closed" }, note: { ar: "التقرير يحوّل التشغيل إلى قرار.", en: "Reporting turns operations into decisions." }, data: [{ ar: "حالة الطلب", en: "Order status" }, { ar: "حالة المخزون", en: "Stock status" }, { ar: "مؤشرات الأداء", en: "KPIs" }] },
];

/* ---------- Section 03 ---------- */
export const whyExists = {
  title: P.whyExists.title,
  problem: P.whyExists.cards[0].text,
  role: P.whyExists.cards[1].text,
  outcome: P.whyExists.cards[2].text,
  line: P.whyExists.line,
};

/* ---------- Solutions ---------- */
export type Solution = {
  slug: string;
  n: string;
  en: string;
  title: T;
  /** short line under the title (the profile's own service sub-title) */
  headline: T;
  intro: T;
  scope: T[];
  /** "ما يحصل عليه العميل" */
  gets: T;
  /** "الأثر على أعماله" */
  impact: T;
  image: string;
  visual: "bins" | "flow" | "connect" | "carrier" | "returns" | "tower" | "globe";
  tone: "dark" | "paper" | "white" | "tint";
};

/** The five services of the final company profile, plus the managed-operations model. */
export const solutions: Solution[] = P.services.map((x) => ({
  slug: x.slug,
  n: x.n,
  en: x.en,
  title: x.title,
  headline: x.sub,
  intro: x.intro,
  scope: x.scope,
  gets: x.gets,
  impact: x.impact,
  image: x.image,
  visual: x.visual,
  tone: x.tone,
}));

export const segments: { en: string; label: T; need: T }[] = P.clientTypes.map((c) => ({
  en: c.en,
  label: c.label,
  need: { ar: "", en: "" },
}));

/* ---------- Sectors ---------- */
export const sectors: { en: string; label: T; profile: T }[] = P.sectors.map((x) => ({
  en: x.en,
  label: x.label,
  profile: { ar: "", en: "" },
}));

export const sectorRule = P.sectorsIntro;

/* ---------- How we work (client journey) ---------- */
export const clientJourney: { en: string; label: T; does: T; question: T; proof: string }[] = P.method.map((m) => ({
  en: m.en,
  label: m.label,
  does: m.text,
  question: { ar: "", en: "" },
  proof: m.n,
}));

export const rhythm: { en: string; label: T; text: T }[] = [
  { en: "DAILY", label: { ar: "التشغيل اليومي", en: "Daily operations" }, text: { ar: "تنفيذ الطلبات، متابعة الحالات، معالجة الاستثناء فور ظهوره.", en: "Order execution, status follow-up, exceptions handled as they appear." } },
  { en: "WEEKLY", label: { ar: "المتابعة الأسبوعية", en: "Weekly follow-up" }, text: { ar: "حالة المخزون، أحجام الطلبات، النقاط التي تحتاج تعديلًا.", en: "Stock status, order volumes, points that need adjustment." } },
  { en: "PERIODIC", label: { ar: "المراجعة الدورية", en: "Periodic review" }, text: { ar: "مراجعة الأداء، أسباب الانحراف، قرارات التحسين والتوسع.", en: "Performance review, root causes, improvement and scaling decisions." } },
];

export const scaleModes: { en: string; label: T; text: T }[] = P.scaleModes.map((x) => ({ en: x.en, label: x.label, text: x.text }));

export const visibility: { en: string; label: T }[] = [
  { en: "Order Visibility", label: { ar: "تتبّع حالة الطلبات", en: "Order visibility" } },
  { en: "Inventory Visibility", label: { ar: "تقارير المخزون", en: "Inventory visibility" } },
  { en: "Performance Monitoring", label: { ar: "مراقبة الأداء التشغيلي", en: "Performance monitoring" } },
  { en: "Delivery Reporting", label: { ar: "تقارير التسليم", en: "Delivery reporting" } },
  { en: "Operational KPIs", label: { ar: "مؤشرات أداء تدعم القرار", en: "Operational KPIs" } },
];

/* ---------- Why Jedyan ---------- */
export const reasons: { en: string; label: T; text: T }[] = P.reasons.map((r) => ({ en: r.en, label: r.label, text: r.text }));

/* ---------- Brand foundation (Blueprint V6) ---------- */
export const foundation = {
  purpose: P.about.intro,
  vision: P.vision.statement,
  mission: P.mission.statement,
  star: {
    ar: "يستمد الاسم معناه من «الجدي» — النجم الثابت الذي اهتدت به القوافل. الدليل الحقيقي ثابت، والمسافر هو من يتحرك.",
    en: "The name draws on Al-Jiddi — the fixed star caravans navigated by. The true guide stays fixed; the traveller is the one who moves.",
  },
  values: P.values.map((v) => ({ label: v.label, text: v.text })),
  pillars: P.vision.pillars.map((x) => ({ en: x.en, label: x.label, text: P.vision.body })),
};

/* ---------- Contact / diagnosis ---------- */
export const diagnosis = {
  title: { ar: "لنبدأ من تشخيص عمليتك.", en: "Let's start by diagnosing your operation." },
  sub: { ar: "أرسل لنا شكل طلبك وأصنافك وقنواتك، ونعود إليك بتصوّر تشغيلي أولي. لا نبدأ بالسعر — نبدأ بفهم شكل الطلب.", en: "Share your order profile, SKUs and channels, and we'll come back with an initial operating model. We don't start with price — we start by understanding your orders." },
  steps: [
    {
      id: "business",
      q: { ar: "ما نوع نشاطك؟", en: "What best describes your business?" },
      multi: false,
      options: [
        { ar: "متجر إلكتروني", en: "E-commerce store" },
        { ar: "علامة تجارية رقمية", en: "Digital brand" },
        { ar: "بائع على المنصات", en: "Marketplace seller" },
        { ar: "حساب مؤسسي / تجزئة", en: "Enterprise / retail" },
        { ar: "علامة إقليمية تدخل السعودية", en: "Regional brand entering KSA" },
        { ar: "موزّع B2B / B2C", en: "B2B / B2C distributor" },
      ],
    },
    {
      id: "volume",
      q: { ar: "كم طلبًا تعالج شهريًا تقريبًا؟", en: "Roughly how many orders per month?" },
      multi: false,
      options: [
        { ar: "أقل من 1,000", en: "Under 1,000" },
        { ar: "1,000 – 5,000", en: "1,000 – 5,000" },
        { ar: "5,000 – 20,000", en: "5,000 – 20,000" },
        { ar: "أكثر من 20,000", en: "Over 20,000" },
        { ar: "لم نبدأ بعد", en: "Not live yet" },
      ],
    },
    {
      id: "channels",
      q: { ar: "من أين تأتي طلباتك؟", en: "Where do your orders come from?" },
      multi: true,
      options: [
        { ar: "متجر إلكتروني", en: "Online store" },
        { ar: "تطبيق", en: "App" },
        { ar: "منصات بيع", en: "Marketplaces" },
        { ar: "فروع / تجزئة", en: "Branches / retail" },
        { ar: "طلبات جملة B2B", en: "B2B wholesale" },
      ],
    },
    {
      id: "products",
      q: { ar: "ما نوع منتجاتك؟", en: "What do you sell?" },
      multi: true,
      options: [
        { ar: "أزياء وأحذية", en: "Fashion & footwear" },
        { ar: "جمال وعناية", en: "Beauty & care" },
        { ar: "إلكترونيات", en: "Electronics" },
        { ar: "هدايا", en: "Gifts" },
        { ar: "قطع غيار", en: "Spare parts" },
        { ar: "سلع استهلاكية جافة", en: "Dry FMCG" },
        { ar: "اشتراكات وصناديق", en: "Subscriptions & boxes" },
        { ar: "أخرى", en: "Other" },
      ],
    },
    {
      id: "needs",
      q: { ar: "ما الذي تحتاج أن نتولاه؟", en: "What do you need us to run?" },
      multi: true,
      options: [
        { ar: "التخزين وإدارة المخزون", en: "Warehousing & inventory" },
        { ar: "تنفيذ الطلبات Fulfillment", en: "Fulfillment" },
        { ar: "الربط مع قنوات البيع", en: "Channel integration" },
        { ar: "التوزيع وإدارة الناقلين", en: "Distribution & carriers" },
        { ar: "المرتجعات", en: "Returns" },
        { ar: "تغليف وخدمات مضافة", en: "Packaging & VAS" },
        { ar: "تشغيل مُدار بالكامل", en: "Fully managed operations" },
      ],
    },
  ],
};
