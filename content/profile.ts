/**
 * JEDYAN — content transcribed from the FINAL company profile (JEDYAN_Profile, 34 pp).
 * Rule unchanged: nothing here states a capability, figure, partner or integration the
 * profile does not confirm. Every quantitative value lives in `stats` and is flagged
 * `placeholder: true` until the client supplies real operating figures.
 */
import type { T } from "./types";

const t = (ar: string, en: string): T => ({ ar, en });

/* ---------- Who we are (p.3) ---------- */
export const about = {
  intro: t(
    "جديان للخدمات اللوجستية شركة سعودية، تقدّم منظومة تشغيل تجمع التخزين وإدارة المخزون وتنفيذ الطلبات والتغليف والنقل والتوزيع والشحن، في عمليات مترابطة تدعمها التقنيات الحديثة، وتُدار بمسؤولية واحدة، برؤية لوجستية صُممت لمستقبل الأعمال.",
    "Jedyan Logistics is a Saudi company delivering one operating system that brings together warehousing, inventory management, order fulfillment, packaging, transport, distribution and freight — interconnected operations supported by modern technology, run under a single accountability, with a logistics vision built for the future of business.",
  ),
  holding: {
    name: t("صقر الجديان القابضة", "Saqr Al-Jedyan Holding"),
    text: t(
      "مجموعة سعودية تستثمر وتعمل في قطاعات متعددة، وتبني أعمالًا تقوم على الخبرة والكفاءة والاستدامة، بما يواكب تطور السوق ويسهم في مستهدفات رؤية المملكة 2030.",
      "A Saudi group that invests and operates across multiple sectors, building businesses on experience, efficiency and sustainability in step with market development and the targets of Saudi Vision 2030.",
    ),
  },
  arm: {
    name: t("جديان للخدمات اللوجستية", "Jedyan Logistics"),
    text: t(
      "الذراع اللوجستي للمجموعة، تأسست لتمنح الشركات قدرة تشغيلية متكاملة تجمع الموارد والخبرة والتقنية في منظومة واحدة، وترتقي بكفاءة سلاسل الإمداد من التخزين حتى التسليم.",
      "The group's logistics arm, established to give businesses an integrated operating capability that brings resources, experience and technology into one system, raising supply-chain efficiency from storage to delivery.",
    ),
  },
};

/* ---------- Mission (p.4) ---------- */
export const mission = {
  statement: t(
    "تقديم خدمات لوجستية متكاملة وموثوقة بكفاءة تشغيلية إستثنائية وشفافية في الأداء والتقارير، بما يمكّن عملاءنا من النمو والتوسّع بثقة، لتصبح اللوجستيات مساحةً للإمكان لا حدًا للطموح.",
    "To deliver integrated, dependable logistics services with exceptional operating efficiency and transparency in performance and reporting — enabling our clients to grow and expand with confidence, so logistics becomes a space of possibility rather than a limit on ambition.",
  ),
  grid: [
    {
      en: "WHAT",
      label: t("ماذا نقدّم", "What we deliver"),
      text: t(
        "خدمات لوجستية متكاملة تغطي التخزين وإدارة المخزون وتنفيذ الطلبات والتغليف والنقل والتوزيع والشحن داخل المملكة وخارجها.",
        "Integrated logistics covering warehousing, inventory, order fulfillment, packaging, transport, distribution and freight inside the Kingdom and beyond.",
      ),
    },
    {
      en: "FOR WHOM",
      label: t("لمن نقدّمها", "Who we serve"),
      text: t(
        "للشركات والمؤسسات والعلامات التجارية والمتاجر الإلكترونية والموزعين والمستوردين والمصدرين، وفق طبيعة أعمال كل عميل ومتطلباته التشغيلية.",
        "Companies, institutions, brands, online stores, distributors, importers and exporters — shaped to each client's business and operating requirements.",
      ),
    },
    {
      en: "HOW",
      label: t("كيف نقدّمها", "How we deliver"),
      text: t(
        "بعمليات مترابطة وأنظمة موثوقة وإجراءات تشغيل واضحة، مدعومة بالتتبع وقياس الأداء لضمان الدقة والكفاءة في كل مرحلة.",
        "Interconnected operations, dependable systems and clear operating procedures, supported by tracking and performance measurement to ensure accuracy at every stage.",
      ),
    },
    {
      en: "IMPACT",
      label: t("ما الأثر", "The impact"),
      text: t(
        "رفع كفاءة العمليات، وتعزيز وضوح الأداء، وتوفير قدرة تشغيلية مرنة تمكّن عملاءنا من التركيز على تطوير أعمالهم والتوسع بثقة.",
        "Higher operational efficiency, clearer performance, and a flexible operating capability that lets clients focus on developing their business and expanding with confidence.",
      ),
    },
  ],
};

/* ---------- Vision (p.5) ---------- */
export const vision = {
  statement: t("أن نكون معيارًا للكفاءة في التشغيل اللوجستي.", "To be the benchmark for efficiency in logistics operations."),
  body: t(
    "نسعى إلى بناء منظومة لوجستية سعودية موثوقة تمنح الشركات القدرة التشغيلية اللازمة للنمو داخل المملكة والتوسّع منها، وتُسهم في تعزيز مكانة المملكة كمركز لوجستي إقليمي ودولي.",
    "We are building a dependable Saudi logistics system that gives companies the operating capability to grow inside the Kingdom and expand from it, strengthening Saudi Arabia's position as a regional and international logistics hub.",
  ),
  pillars: [
    { en: "READINESS", label: t("جاهزية تشغيلية", "Operational readiness") },
    { en: "STANDARDS", label: t("كفاءة بمعايير عالمية", "Efficiency to global standards") },
    { en: "PARTNERSHIP", label: t("شريك استراتيجي موثوق", "A trusted strategic partner") },
  ],
  markers: [
    t("سلامة العمليات", "Operational safety"),
    t("دقة التسليم", "Delivery accuracy"),
    t("كفاءة التشغيل", "Operating efficiency"),
    t("متابعة فورية", "Real-time follow-up"),
    t("رضا العملاء", "Client satisfaction"),
  ],
};

/* ---------- Values (p.6) ---------- */
export const values: { n: string; en: string; label: T; text: T }[] = [
  {
    n: "01",
    en: "COMPLIANCE & GOVERNANCE",
    label: t("الامتثال والحوكمة", "Compliance & governance"),
    text: t(
      "الالتزام بالمتطلبات التنظيمية وتطبيق حوكمة واضحة تعزز الانضباط والمساءلة في جميع مراحل التشغيل.",
      "Meeting regulatory requirements and applying clear governance that reinforces discipline and accountability at every operating stage.",
    ),
  },
  {
    n: "02",
    en: "OPERATIONAL EFFICIENCY",
    label: t("الكفاءة التشغيلية", "Operational efficiency"),
    text: t(
      "إدارة الموارد والوقت والعمليات بكفاءة، لتحقيق أعلى مستويات الأداء والحد من الهدر التشغيلي.",
      "Managing resources, time and processes efficiently to reach the highest levels of performance and reduce operational waste.",
    ),
  },
  {
    n: "03",
    en: "TRANSPARENCY",
    label: t("الشفافية", "Transparency"),
    text: t(
      "توفير بيانات وتقارير واضحة تتيح لعملائنا رؤية أدق لعملياتهم، وتدعم اتخاذ قرارات أكثر فاعلية.",
      "Clear data and reporting that give clients a sharper view of their operations and support more effective decisions.",
    ),
  },
  {
    n: "04",
    en: "LONG-TERM PARTNERSHIP",
    label: t("الشراكة طويلة الأمد", "Long-term partnership"),
    text: t(
      "نحرص على شراكات طويلة الأمد، نبنيها على الثقة والالتزام، وننمّيها لتحقيق قيمة مستدامة ومشتركة.",
      "We build long-term partnerships on trust and commitment, and grow them into sustainable, shared value.",
    ),
  },
  {
    n: "05",
    en: "TECHNOLOGY LEADERSHIP",
    label: t("الريادة التقنية", "Technology leadership"),
    text: t(
      "نوظّف التقنيات الحديثة في تطوير عملياتنا ورفع كفاءتها، ونواكب أفضل الممارسات في القطاع اللوجستي.",
      "We apply modern technology to develop and sharpen our operations, keeping pace with best practice in the logistics sector.",
    ),
  },
];

/* ---------- Promise to clients (p.7) ---------- */
export const promise = {
  eyebrow: t("وعدنا لعملائنا", "Our promise"),
  headline: t("جاهزيةٌ تُبنى عليها أعمالكم", "Readiness your business is built on"),
  text: t(
    "نلتزم بأن تجد أعمالك القدرة التشغيلية جاهزة عند الحاجة، وأن تكون حالة عملياتك واضحة في أي وقت، وأن يتوسّع التشغيل مع نموّك دون إعادة بناء.",
    "We commit that your business finds operating capacity ready when it is needed, that the state of your operations is clear at any moment, and that operations scale with your growth without being rebuilt.",
  ),
  items: [
    { n: "01", label: t("قدرة تشغيلية جاهزة", "Ready operating capacity"), text: t("نوفر الموارد والقدرات التشغيلية اللازمة لمواكبة حجم أعمالكم ومتطلبات المواسم وفترات الذروة.", "We provide the resources and capacity to match your volumes, seasons and peak periods.") },
    { n: "02", label: t("تنفيذ موثوق", "Dependable execution"), text: t("نطبق إجراءات منضبطة ومؤشرات أداء واضحة تضمن استقرار الخدمة وجودة التنفيذ.", "Disciplined procedures and clear performance indicators that keep service stable and execution sound.") },
    { n: "03", label: t("وضوح تشغيلي", "Operational clarity"), text: t("نوفر بيانات وتقارير ومؤشرات أداء تمنحكم رؤية واضحة لحالة العمليات ومستويات الخدمة.", "Data, reports and indicators that give you a clear view of operations and service levels.") },
    { n: "04", label: t("قابلية للتوسّع", "Built to scale"), text: t("نوسع قدراتنا التشغيلية بما يواكب نمو أعمالكم دون الحاجة إلى إعادة بناء منظومتكم التشغيلية.", "We expand capacity in step with your growth, with no need to rebuild your operating system.") },
  ],
};

/* ---------- Operating capabilities (p.8) ---------- */
export const capabilities: { n: string; en: string; label: T; text: T }[] = [
  { n: "01", en: "FACILITIES", label: t("المرافق والمستودعات", "Facilities & warehouses"), text: t("نوفر مستودعات ومراكز تخزين وتجهيز مجهزة لإدارة عمليات الاستلام والتخزين والمخزون والتجهيز والإرسال بكفاءة.", "Warehouses and fulfillment centres equipped to run receiving, storage, inventory, preparation and dispatch efficiently.") },
  { n: "02", en: "FLEET & COVERAGE", label: t("الأسطول والتغطية التشغيلية", "Fleet & operating coverage"), text: t("نمتلك وندير أسطولًا متنوعًا من الشاحنات ومركبات النقل والتوزيع، يتيح لنا خدمة متطلبات النقل والشحن والتوزيع داخل المملكة وخارجها.", "We own and run a varied fleet of trucks and distribution vehicles, serving transport, freight and distribution requirements inside the Kingdom and beyond.") },
  { n: "03", en: "PEOPLE", label: t("الكوادر والخبرة التشغيلية", "People & operating experience"), text: t("نمتلك كفاءات وطنية وكوادر إدارية وتشغيلية مؤهلة، تستند إلى خبرات طويلة في إدارة وتشغيل مختلف الأنشطة اللوجستية.", "National talent and qualified operating and management teams, drawing on long experience across logistics activities.") },
  { n: "04", en: "SYSTEMS", label: t("الأنظمة والتقنيات", "Systems & technology"), text: t("نستخدم أنظمة وتقنيات حديثة لإدارة المخزون والطلبات والعمليات، بما يعزز دقة البيانات وكفاءة التنفيذ وإمكانية التتبع.", "Modern systems for inventory, orders and operations, raising data accuracy, execution efficiency and traceability.") },
  { n: "05", en: "INTEGRATION", label: t("التكامل والربط التقني", "Integration & connectivity"), text: t("نتيح التكامل والربط مع أنظمة العملاء وقنوات البيع والأطراف ذات العلاقة، بما يضمن تدفق البيانات وترابط العمليات.", "Integration with client systems, sales channels and related parties, so data flows and operations stay connected.") },
  { n: "06", en: "GOVERNANCE", label: t("الإجراءات والحوكمة", "Procedures & governance"), text: t("نطبق إجراءات تشغيل موثقة وضوابط حوكمة واضحة، تحدد المسؤوليات والصلاحيات وتدعم الامتثال وانضباط التنفيذ.", "Documented operating procedures and clear governance that define responsibilities and support compliance and disciplined execution.") },
  { n: "07", en: "DATA", label: t("البيانات وقياس الأداء", "Data & performance"), text: t("نقدم بيانات وتقارير ومؤشرات أداء واضحة، تتيح متابعة العمليات وقياس مستويات الخدمة ودعم اتخاذ القرار.", "Clear data, reports and indicators that let operations be followed, service levels measured and decisions supported.") },
];

/* ---------- Why Jedyan exists (p.9) ---------- */
export const whyExists = {
  title: t(
    "وُجدت جديان لتمنح الشركات جاهزية لوجستية دون الحاجة إلى بناء منظومة تشغيل كاملة داخلها.",
    "Jedyan exists to give businesses logistics readiness without building a full operating system in-house.",
  ),
  cards: [
    { en: "THE CHALLENGE", label: t("التحـدي", "The challenge"), text: t("مع نمو الأعمال، تتوزّع المسؤوليات بين المخزون، والطلبات، والتغليف، والنقل، والمرتجعات والتقارير؛ فتزداد التعقيدات ويصبح التشغيل عبئًا على الإدارة.", "As a business grows, responsibility spreads across stock, orders, packaging, transport, returns and reporting; complexity compounds and operations become a burden on management.") },
    { en: "WHAT CHANGES", label: t("ما الذي نغيّره", "What we change"), text: t("تتولى جديان إدارة هذه المنظومة كطبقة تشغيل موحّدة؛ تربط مراحل الطلب، وتدير التنفيذ، وتتحمّل مسؤولية التشغيل حتى الإغلاق.", "Jedyan runs this system as one unified operating layer: connecting the stages of an order, managing execution and owning operations through to closure.") },
    { en: "THE VALUE", label: t("القيمة", "The value"), text: t("يحصل عملاؤنا على قدرة لوجستية جاهزة ومرنة، تمنحهم وضوحًا أكبر في التشغيل، وتتيح لهم توجيه مواردهم وتركيزهم نحو أعمالهم الأساسية.", "Clients gain a ready, flexible logistics capability, greater clarity in operations, and the freedom to direct resources and focus to their core business.") },
  ],
  line: t("ننقل تعقيد التشغيل إلينا، لتبقى أمامك مساحة أكبر للأعمال.", "We take on the complexity of operations, so you keep more space for business."),
};

/* ---------- What growth brings (p.10) ---------- */
export const growthDrivers: { en: string; label: T }[] = [
  { en: "CHANNELS", label: t("قنوات بيع أكثر", "More sales channels") },
  { en: "SKUS", label: t("أصناف أكثر", "More SKUs") },
  { en: "PEAKS", label: t("مواسم وذروات", "Seasons and peaks") },
  { en: "ORDERS", label: t("طلبات أكثر", "More orders") },
  { en: "RETURNS", label: t("مرتجعات أكثر", "More returns") },
  { en: "DATA", label: t("بيانات أكثر", "More data") },
];

export const growthChain: { en: string; label: T }[] = [
  { en: "INVENTORY", label: t("إدارة المخزون", "Inventory management") },
  { en: "ORDERS", label: t("تنفيذ الطلبات", "Order fulfillment") },
  { en: "PACKAGING", label: t("التغليف والتجهيز", "Packaging & preparation") },
  { en: "TRANSPORT", label: t("النقل والتوزيع", "Transport & distribution") },
  { en: "REPORTING", label: t("التقارير", "Reporting") },
  { en: "RETURNS", label: t("إدارة المرتجعات", "Returns management") },
];

export const growthLine = t(
  "المجالات التي تحتاج فيها الشركات إلى بنية تشغيلية موثوقة ومنظومة واحدة تربط مراحل التشغيل",
  "Where businesses need a dependable operating structure and one system that connects the stages of operations",
);

/* ---------- Market position (p.11) ---------- */
export const marketPosition = {
  eyebrow: t("موقعنا في السوق", "Our position"),
  headline: t("شريـك تشغيـل لوجستي متكامـل", "An integrated logistics operating partner"),
  sub: t("يجمع قدرات التشغيل تحت إدارة واحدة", "Bringing operating capabilities under one management"),
  items: [
    { n: "01", label: t("نطاق متكامل للخدمات", "An integrated service scope"), text: t("نجمع التخزين وتنفيذ الطلبات والتغليف والنقل والتوزيع والشحن ضمن نطاق لوجستي متكامل يخدم احتياجات الأعمال.", "We bring warehousing, fulfillment, packaging, transport, distribution and freight into one integrated scope.") },
    { n: "02", label: t("نموذج تشغيل متكامل", "An integrated operating model"), text: t("نربط مراحل التشغيل والموارد والأنظمة والإجراءات ضمن نموذج موحّد يضمن انسيابية العمليات ووحدة المسؤولية.", "We connect stages, resources, systems and procedures in one model that keeps operations fluid and accountability single.") },
    { n: "03", label: t("تشغيل مصمم للأعمال", "Operations designed around the business"), text: t("نصمم آلية التشغيل وفق طبيعة نشاط العميل وحجم عملياته ومتطلباته، بما يحقق ملاءمة أكبر لاحتياجات كل عمل.", "We design the operating model around each client's activity, volumes and requirements.") },
    { n: "04", label: t("تغطية متعددة الاحتياجات", "Coverage across needs"), text: t("نخدم احتياجات B2B وB2C من خلال قدرات تشغيلية تمتد عبر مراحل متعددة من سلسلة الإمداد.", "We serve B2B and B2C needs through capabilities that span multiple stages of the supply chain.") },
    { n: "05", label: t("تقنية ووضوح تشغيلي", "Technology and operational clarity"), text: t("نوظف الأنظمة والربط التقني والبيانات لرفع كفاءة العمليات وإتاحة رؤية أوضح للأداء.", "We apply systems, integration and data to raise efficiency and make performance clearer.") },
    { n: "06", label: t("شراكة قابلة للتوسع", "A partnership that scales"), text: t("نوفر نموذجًا تشغيليًا يتكيف مع تغير أحجام الأعمال ومتطلباتها دون الحاجة إلى بناء قدرات لوجستية داخلية.", "An operating model that adapts to changing volumes and requirements without building in-house logistics.") },
  ],
};

/* ---------- Vision 2030 (p.12) ---------- */
export const vision2030 = {
  title: t("دورنا في رؤية المملكة 2030", "Our role in Saudi Vision 2030"),
  body: t(
    "ينسجم نموذج أعمال جديان مع مستهدفات رؤية المملكة 2030، من خلال تطوير القدرات اللوجستية، وتمكين التجارة، ورفع كفاءة سلاسل الإمداد، بما يسهم في تعزيز مكانة المملكة كمركز لوجستي عالمي.",
    "Jedyan's business model is aligned with the targets of Saudi Vision 2030 — developing logistics capabilities, enabling trade and raising supply-chain efficiency, contributing to the Kingdom's position as a global logistics hub.",
  ),
  items: [
    { en: "SECTOR", label: t("دعم تطوير قطاع الخدمات اللوجستية", "Developing the logistics sector"), text: t("نسهم في تطوير قدرات تشغيلية محلية تدعم كفاءة الخدمات اللوجستية وتطور القطاع.", "We help develop local operating capabilities that support efficiency and sector growth.") },
    { en: "E-COMMERCE", label: t("تمكين التجارة الإلكترونية", "Enabling e-commerce"), text: t("نوفر قدرات التخزين والتنفيذ والتوصيل التي تدعم نمو التجارة الإلكترونية وتطور عملياتها.", "We provide the storage, fulfillment and delivery capability that supports e-commerce growth.") },
    { en: "SUPPLY CHAINS", label: t("رفع كفاءة سلاسل الإمداد", "Raising supply-chain efficiency"), text: t("نرفع كفاءة العمليات اللوجستية من خلال تكامل التشغيل والتقنية والبيانات وتقليل الهدر التشغيلي.", "We raise efficiency through integrated operations, technology and data, and by cutting operational waste.") },
    { en: "TRADE LINKS", label: t("تعزيز الربط التجاري", "Strengthening trade links"), text: t("ندعم حركة البضائع داخل المملكة وعبر الحدود من خلال خدمات النقل والشحن وربط الأسواق.", "We support the movement of goods inside the Kingdom and across borders through transport, freight and market connectivity.") },
    { en: "LOCAL CONTENT", label: t("المحتوى المحلي والكوادر الوطنية", "Local content and national talent"), text: t("نستثمر في الكفاءات الوطنية ونطوّر الخبرات التشغيلية المتخصصة في القطاع اللوجستي.", "We invest in national talent and develop specialised operating expertise in the sector.") },
  ],
};

/* ---------- Services (p.13–26) ---------- */
export type Service = {
  slug: string;
  n: string;
  en: string;
  title: T;
  sub: T;
  intro: T;
  scope: T[];
  gets: T;
  impact: T;
  image: string;
  visual: "flow" | "connect" | "carrier" | "bins" | "globe" | "tower";
  tone: "dark" | "paper" | "white" | "tint";
};

export const services: Service[] = [
  {
    slug: "b2c-ecommerce",
    n: "01",
    en: "B2C & E-commerce",
    title: t("خدمات B2C", "B2C services"),
    sub: t("وحلول التجارة الإلكترونية", "and e-commerce solutions"),
    intro: t(
      "ندير العمليات اللوجستية للمتاجر الإلكترونية والعلامات التجارية التي تبيع مباشرة للمستهلك، بدءًا من الربط التقني مع قنوات البيع وإدارة المخزون، من إستلام الطلبات مرورًا بتنفيذ الطلبات وتجهيزها، وصولًا إلى التوصيل للعميل النهائي وإدارة المرتجعات.",
      "We run logistics for online stores and direct-to-consumer brands — from technical integration with sales channels and inventory management, through order intake, fulfillment and preparation, to last-mile delivery and returns management.",
    ),
    scope: [
      t("إدارة الطلبات والمخزون", "Order and inventory management"),
      t("الربط التقني مع المتاجر والمنصات الإلكترونية", "Technical integration with stores and marketplaces"),
      t("إلتقاط وتجهيز وتغليف الطلبات", "Picking, preparation and packing"),
      t("إدارة الشحن والتوصيل للميل الأخير للعميل النهائي", "Shipping and last-mile delivery management"),
      t("خيارات توصيل مرنة (توصيل في نفس اليوم — توصيل خلال 2 - 3 ساعات)", "Flexible delivery options (same-day — 2–3 hour delivery)"),
      t("إدارة الدفع عند الاستلام (COD) والتسويات", "Cash-on-delivery (COD) management and reconciliation"),
      t("استلام المرتجعات وفحصها وإعادتها إلى دورة المخزون", "Returns receipt, inspection and restocking"),
      t("التقارير التشغيلية ومؤشرات الأداء", "Operating reports and performance indicators"),
    ],
    gets: t("منظومة تشغيل كاملة للمتجر الإلكتروني من استلام الطلب حتى التسليم والمرتجع.", "A complete operating system for the online store, from order intake to delivery and return."),
    impact: t("تفرّغ فريق العميل للتسويق وتطوير المنتج بدلاً عن إدارة العمليات اليومية.", "The client's team is freed for marketing and product development instead of day-to-day operations."),
    image: "b2c-doorstep",
    visual: "flow",
    tone: "paper",
  },
  {
    slug: "b2b-services",
    n: "02",
    en: "B2B Services",
    title: t("خدمات B2B", "B2B services"),
    sub: t("لدعم سلاسل الإمداد بين الشركات", "supporting business-to-business supply chains"),
    intro: t(
      "ندير العمليات اللوجستية بين الشركات، من تخزين وتجهيز طلبات الجملة إلى نقل الشحنات وتوزيعها على الفروع ونقاط البيع والعملاء، بما يدعم انسيابية سلاسل الإمداد واستمرارية التوريد.",
      "We run business-to-business logistics — from warehousing and preparing wholesale orders to moving shipments and distributing them to branches, points of sale and customers, keeping supply chains fluid and supply continuous.",
    ),
    scope: [
      t("استلام وتخزين وإدارة مخزون الشركات", "Corporate inventory receipt, storage and management"),
      t("تجهيز طلبات الجملة والتوريد", "Wholesale and supply order preparation"),
      t("التجهيز وفق متطلبات واشتراطات جهة الاستلام", "Preparation to the receiving party's requirements"),
      t("الشحن الجزئي LTL (طبليات وكراتين)", "LTL part-load shipping (pallets and cartons)"),
      t("شحن كامل الحمولة FTL", "FTL full-load shipping"),
      t("التوزيع على الفروع ونقاط البيع والعملاء", "Distribution to branches, points of sale and customers"),
      t("مطابقة الكميات وتوثيق مستندات التسليم", "Quantity matching and delivery documentation"),
      t("تقارير تشغيلية ومؤشرات أداء", "Operating reports and performance indicators"),
    ],
    gets: t("إدارة أكثر انضباطًا لحركة التوريد، من المخزون وتجهيز الطلبات إلى التوزيع وإثبات التسليم.", "More disciplined management of supply movement, from stock and order preparation to distribution and proof of delivery."),
    impact: t("سلاسل إمداد أكثر استقرارًا وانسيابية، تمنح أعماله مساحة أكبر للنمو وتحقيق الربحية.", "More stable, fluid supply chains that give the business more room to grow and to be profitable."),
    image: "b2b-dock-loading",
    visual: "connect",
    tone: "white",
  },
  {
    slug: "road-transport",
    n: "03",
    en: "Road Transport",
    title: t("النقل البري", "Road transport"),
    sub: t("للشحنات الجزئية والكاملة", "for part and full loads"),
    intro: t(
      "نوفر خدمات نقل بري مرنة للشحنات الجزئية والكاملة عبر شبكة تشغيل تغطي مختلف مناطق المملكة، مع إدارة حركة الشحنة ومتابعتها من لحظة التحميل حتى التسليم وإثباته.",
      "Flexible road transport for part and full loads across an operating network covering the regions of the Kingdom, with shipment movement managed and followed from loading to delivery and its proof.",
    ),
    scope: [
      t("نقل كامل الحمولة FTL", "FTL full-load transport"),
      t("نقل الشحنات الجزئية LTL", "LTL part-load transport"),
      t("النقل المجدول وفق خطط التوريد والتوزيع", "Scheduled transport to supply and distribution plans"),
      t("النقل السريع والمستعجل", "Express and urgent transport"),
      t("التوصيل من الباب إلى الباب", "Door-to-door delivery"),
      t("النقل بين مدن ومناطق المملكة", "Transport between the Kingdom's cities and regions"),
      t("النقل الإقليمي", "Regional transport"),
      t("النقل المبرد", "Refrigerated transport"),
    ],
    gets: t("خيارات نقل تناسب أحجام الشحنات ومساراتها، مع متابعة موثقة لحركة الشحنة حتى التسليم.", "Transport options matched to shipment size and route, with documented tracking through to delivery."),
    impact: t("انتظام حركة التوريد والتوزيع، وتحسين التخطيط للشحن والاستلام.", "Regular supply and distribution movement, and better planning for dispatch and receipt."),
    image: "road-trucks-mountain",
    visual: "carrier",
    tone: "dark",
  },
  {
    slug: "warehousing-packaging",
    n: "04",
    en: "Warehousing & Packaging",
    title: t("التخزين والتغليف", "Warehousing & packaging"),
    sub: t("وإدارة المخزون والتجهيز", "with inventory management and fulfillment"),
    intro: t(
      "نوفر خدمات التخزين والتغليف وإدارة المخزون، بدءًا من استلام الأصناف وتنظيمها داخل المستودعات، وحتى تجهيزها وتغليفها، مع إدارة الجرد وتوفير تقارير دقيقة ومحدثة عن حالة المخزون.",
      "Warehousing, packaging and inventory management — from receiving items and organising them inside the warehouse through to preparation and packing, with stock counts and accurate, current reporting on inventory status.",
    ),
    scope: [
      t("استلام البضائع وفحصها وتوثيقها", "Goods receipt, inspection and documentation"),
      t("إدارة المخزون وحركة الأصناف", "Inventory management and item movement"),
      t("التخزين بالطبليات والأرفف والكرتون وفق طبيعة الأصناف", "Pallet, rack and carton storage by item type"),
      t("خدمات التجهيز Fulfillment", "Fulfillment services"),
      t("انتقاء وتجهيز الأصناف", "Picking and preparation"),
      t("التغليف المخصص حسب متطلبات العميل", "Custom packaging to client requirements"),
      t("التخزين الجاف والمبرد", "Dry and chilled storage"),
      t("تقارير المخزون وحالة الأصناف", "Inventory and item-status reporting"),
    ],
    gets: t("بيانات مخزون دقيقة ومحدّثة، وخدمات تجهيز وتغليف داخل الموقع.", "Accurate, current inventory data, with preparation and packing services on site."),
    impact: t("رفع دقة المخزون، وتقليل الفروقات والهدر، وتحسين جاهزية الأصناف للتنفيذ والتوزيع.", "Higher stock accuracy, fewer discrepancies and less waste, and items better prepared for execution and distribution."),
    image: "warehouse-racks",
    visual: "bins",
    tone: "tint",
  },
  {
    slug: "international-freight",
    n: "05",
    en: "International Freight",
    title: t("الشحن الدولي", "International freight"),
    sub: t("جوًا وبحرًا", "by air and sea"),
    intro: t(
      "ندير وننسق عمليات الشحن الدولي جوًا وبحرًا، لربط أعمال عملائنا بالأسواق والوجهات الدولية، مع متابعة الشحنات وتنسيق مراحلها من الاستلام وحتى الوصول.",
      "We manage and coordinate international air and sea freight, connecting our clients' business to international markets and destinations, with shipments followed and their stages coordinated from collection to arrival.",
    ),
    scope: [
      t("الشحن الجوي الدولي", "International air freight"),
      t("الشحن البحري بالحاويات الكاملة FCL", "FCL full-container sea freight"),
      t("الشحن البحري بالحاويات الجزئية LCL", "LCL part-container sea freight"),
      t("خدمات الاستيراد والتصدير", "Import and export services"),
      t("التوصيل من الباب إلى الباب", "Door-to-door delivery"),
    ],
    gets: t("خيارات شحن دولي متعددة تُختار وفق طبيعة البضاعة والوجهة والمدة والتكلفة، مع متابعة واضحة لحركة الشحنة.", "Multiple freight options chosen by cargo type, destination, transit time and cost, with clear visibility of shipment movement."),
    impact: t("مرونة أكبر في الوصول إلى أسواق التوريد والتصدير، ودعم توسع الأعمال عبر الوجهات الدولية.", "Greater flexibility reaching supply and export markets, supporting expansion across international destinations."),
    image: "intl-air-sea",
    visual: "globe",
    tone: "white",
  },
];

/* ---------- Managed enterprise logistics (p.25–26) ---------- */
export const managed = {
  slug: "managed-logistics",
  title: t("التشغيل اللوجستي المؤسسي المُدار", "Managed enterprise logistics"),
  intro: t(
    "نموذج شراكة للشركات والمؤسسات التي ترغب في إسناد إدارة عملياتها اللوجستية إلى جديان، مع احتفاظ العميل بملكية المنتج والعلامة التجارية وقراراته الاستراتيجية وعلاقته بالسوق، فيما نتولى إدارة نطاق التشغيل المتفق عليه بمسؤولية واضحة.",
    "A partnership model for companies that wish to entrust the management of their logistics operations to Jedyan, while the client retains ownership of the product, the brand, their strategic decisions and their relationship with the market — and we manage the agreed operating scope under clear accountability.",
  ),
  jedyan: {
    label: t("مـا تديـره جديـان", "What Jedyan manages"),
    items: [
      t("التخزين وإدارة المخزون", "Warehousing and inventory"),
      t("تنفيذ وتجهيز الطلبات", "Order fulfillment and preparation"),
      t("النقل والتوزيع", "Transport and distribution"),
      t("الشحن الدولي", "International freight"),
      t("الربط والتنسيق التشغيلي", "Integration and operational coordination"),
      t("التقارير ومؤشرات الأداء", "Reports and performance indicators"),
    ],
  },
  client: {
    label: t("مسؤولية العميل وما يحتفظ به", "What the client owns and keeps"),
    items: [
      t("ملكية المنتج", "Product ownership"),
      t("العلامة التجارية", "The brand"),
      t("الاستراتيجية التجارية", "Commercial strategy"),
      t("سياسات وأسعار البيع", "Pricing and sales policy"),
      t("العلاقة مع العملاء والأسواق", "The relationship with customers and markets"),
      t("القرارات التجارية", "Commercial decisions"),
    ],
  },
  chain: [t("أعمال العميل", "Client's business"), t("تشغيل جديان", "Jedyan operations"), t("العميل النهائي", "End customer")],
};

/* ---------- Clients & sectors (p.27) ---------- */
export const clientTypes: { n: string; en: string; label: T }[] = [
  { n: "01", en: "COMPANIES", label: t("الشركات والمؤسسات", "Companies and institutions") },
  { n: "02", en: "ONLINE STORES", label: t("المتاجر الإلكترونية", "Online stores") },
  { n: "03", en: "BRANDS", label: t("العلامات التجارية", "Brands") },
  { n: "04", en: "MARKETPLACE SELLERS", label: t("بائعو المنصات", "Marketplace sellers") },
  { n: "05", en: "IMPORT / EXPORT", label: t("المستوردون والمصدّرون", "Importers and exporters") },
  { n: "06", en: "DISTRIBUTORS", label: t("الموزّعون", "Distributors") },
];

export const sectors: { en: string; label: T }[] = [
  { en: "FASHION & FOOTWEAR", label: t("الأزياء والأحذية", "Fashion and footwear") },
  { en: "BEAUTY & CARE", label: t("الجمال والعناية", "Beauty and personal care") },
  { en: "ELECTRONICS", label: t("الإلكترونيات", "Electronics") },
  { en: "FOOD & FMCG", label: t("الأغذية والمنتجات الاستهلاكية", "Food and consumer goods") },
  { en: "SPARE PARTS", label: t("قطع الغيار", "Spare parts") },
  { en: "E-COMMERCE", label: t("التجارة الإلكترونية", "E-commerce") },
  { en: "CAMPAIGNS & EVENTS", label: t("الحملات والفعاليات", "Campaigns and events") },
  { en: "GIFTS & PROMO", label: t("الهدايا والمنتجات الترويجية", "Gifts and promotional products") },
];

export const sectorsIntro = t(
  "نخدم شركات تعتمد على كفاءة التشغيل اللوجستي في نمو أعمالها، ونصمم نموذج الخدمة وفق طبيعة نشاط كل عميل، وقنوات بيعه، وحجم عملياته ومتطلباته التشغيلية.",
  "We serve companies whose growth depends on logistics efficiency, and design the service model around each client's activity, sales channels, volumes and operating requirements.",
);

/* ---------- How we help your business (p.28) ---------- */
export const helpMatrix: { need: T; service: T; slug: string; impact: T }[] = [
  { need: t("تشغيل متجر إلكتروني بالكامل", "Running a full online store"), service: t("خدمات B2C والتجارة الإلكترونية", "B2C and e-commerce services"), slug: "b2c-ecommerce", impact: t("تشغيل الطلبات من الاستلام حتى التسليم.", "Orders run from receipt through to delivery.") },
  { need: t("خدمة الفروع ونقاط البيع", "Serving branches and points of sale"), service: t("خدمات B2B", "B2B services"), slug: "b2b-services", impact: t("انتظام التوريد واستقرار تدفق المنتجات إلى الفروع ونقاط البيع.", "Regular supply and a steady flow of product to branches and points of sale.") },
  { need: t("نقل شحنات بأحجام ومسارات مختلفة", "Moving shipments of different sizes and routes"), service: t("النقل البري", "Road transport"), slug: "road-transport", impact: t("خيارات FTL وLTL والنقل المبرد بما يرفع كفاءة التخطيط للنقل والتوزيع.", "FTL, LTL and refrigerated options that raise planning efficiency for transport and distribution.") },
  { need: t("تخزين وإدارة مخزون", "Storing and managing inventory"), service: t("التخزين والتغليف", "Warehousing and packaging"), slug: "warehousing-packaging", impact: t("دقة أعلى للمخزون وجاهزية أكبر للتجهيز والتنفيذ مع رؤية واضحة للأرصدة.", "Higher stock accuracy and readiness for preparation and execution, with a clear view of balances.") },
  { need: t("استيراد أو تصدير بضائع", "Importing or exporting goods"), service: t("الشحن الدولي", "International freight"), slug: "international-freight", impact: t("وصول أكثر تنافسية إلى أسواق التوريد والتصدير مع تنسيق ومتابعة حركة الشحنات.", "More competitive access to supply and export markets, with shipment movement coordinated and followed.") },
  { need: t("جهة واحدة لإدارة اللوجستيات", "A single party to manage logistics"), service: t("التشغيل اللوجستي المؤسسي الشامل", "Managed enterprise logistics"), slug: "managed-logistics", impact: t("مسؤولية تشغيلية موحدة ورؤية أداء أشمل من متعدد جهات الإدارة والتنسيق.", "Unified operational accountability and a fuller performance view than multiple managing parties.") },
];

/* ---------- Method (p.29) ---------- */
export const method: { n: string; en: string; label: T; text: T }[] = [
  { n: "01", en: "ASSESS", label: t("التقييم", "Assess"), text: t("دراسة الاحتياج وطبيعة العمليات ومتطلبات التشغيل.", "Studying the need, the nature of operations and the operating requirements.") },
  { n: "02", en: "DESIGN", label: t("تصميم الحل", "Design"), text: t("تحديد نطاق الخدمة ونموذج التشغيل وآليات التنفيذ المناسبة.", "Defining the service scope, the operating model and the right execution mechanisms.") },
  { n: "03", en: "INTEGRATE", label: t("الربط التقني", "Integrate"), text: t("ربط الأنظمة وقنوات البيع وضمان انسيابية وتكامل البيانات.", "Connecting systems and sales channels, ensuring data flows and integrates.") },
  { n: "04", en: "SET UP", label: t("التهيئة", "Set up"), text: t("إعداد الموارد والمخزون والأنظمة والإجراءات اللازمة لبدء التشغيل.", "Preparing the resources, stock, systems and procedures needed to start.") },
  { n: "05", en: "OPERATE", label: t("التشغيل", "Operate"), text: t("إدارة العمليات ومتابعة التنفيذ وقياس الأداء وإصدار التقارير.", "Managing operations, following execution, measuring performance and issuing reports.") },
  { n: "06", en: "SCALE", label: t("التوسّع", "Scale"), text: t("تطوير القدرات ونطاق الخدمات بما يواكب نمو أعمال العميل.", "Developing capability and service scope in step with the client's growth.") },
];

export const methodLine = t(
  "منهجية تشغيل تبدأ بفهم الاحتياج، وتستمر بقياس الأداء وتطوير الخدمة مع نمو الأعمال.",
  "An operating method that begins with understanding the need and continues by measuring performance and developing the service as the business grows.",
);

/* ---------- Scalability (p.30) ---------- */
export const scaleModes: { n: string; en: string; label: T; text: T }[] = [
  { n: "01", en: "STEADY STATE", label: t("التشغيل الاعتيادي", "Steady state"), text: t("نوفر القدرة التشغيلية المناسبة للحجم المعتاد للأعمال، مع متابعة الأداء والتقارير بصورة منتظمة.", "We provide capacity suited to normal business volume, with regular performance follow-up and reporting.") },
  { n: "02", en: "GROWTH", label: t("مرحلة النمو", "Growth stage"), text: t("نرفع القدرة التشغيلية تدريجيًا بما يواكب زيادة الطلبات والأصناف واتساع نطاق العمليات.", "We raise capacity gradually in step with more orders, more items and a wider operating scope.") },
  { n: "03", en: "SEASONAL PEAK", label: t("الذروة الموسمية", "Seasonal peak"), text: t("نعزز الموارد والقدرات التشغيلية لفترات محددة لاستيعاب المواسم والحملات والارتفاع المؤقت في حجم الطلب.", "We reinforce resources and capacity for defined periods to absorb seasons, campaigns and temporary demand spikes.") },
  { n: "04", en: "HIGH VOLUME", label: t("الأحجام الكبيرة", "High volume"), text: t("نعيد مواءمة الموارد والمساحات والقدرات التشغيلية لاستيعاب الأحجام المرتفعة واستدامة كفاءة التنفيذ.", "We realign resources, space and capacity to absorb high volumes and sustain execution efficiency.") },
];

export const scaleIntro = t(
  "نُكيّف القدرات التشغيلية والموارد وفق تغير حجم الأعمال والطلب، بما يتيح استيعاب النمو والذروات الموسمية والارتفاعات الكبيرة في الأحجام دون الحاجة إلى إعادة بناء نموذج التشغيل.",
  "We adapt capacity and resources as business volume and demand change, absorbing growth, seasonal peaks and large increases in volume without rebuilding the operating model.",
);

/* ---------- Quality & compliance (p.31) ---------- */
export const quality = {
  intro: t(
    "نلتزم بإجراءات تشغيل موثّقة واتفاقيات مستوى خدمة تتوافق مع الأنظمة المعمول بها في المملكة.",
    "We commit to documented operating procedures and service-level agreements that comply with the regulations in force in the Kingdom.",
  ),
  items: [
    { label: t("ضبط الجودة", "Quality control"), text: t("نقاط فحص محدّدة داخل مراحل العملية قبل خروج الشحنة.", "Defined inspection points inside the process before a shipment leaves.") },
    { label: t("إدارة المخاطر التشغيلية", "Operational risk management"), text: t("رصد الانحرافات ومعالجتها قبل وصولها إلى العميل.", "Deviations detected and resolved before they reach the client.") },
    { label: t("حماية الشحنات", "Shipment protection"), text: t("تغليف ومناولة وفق حدود الوزن والأبعاد وطبيعة الصنف.", "Packing and handling within weight, dimension and item-type limits.") },
    { label: t("استمرارية الأعمال", "Business continuity"), text: t("إجراءات بديلة تضمن استمرار التشغيل عند الطوارئ.", "Fallback procedures that keep operations running in emergencies.") },
    { label: t("الامتثال النظامي", "Regulatory compliance"), text: t("التوافق مع أنظمة النقل والتخزين وتعليمات الجهات المختصة.", "Alignment with transport and storage regulations and the instructions of the competent authorities.") },
  ],
  gets: t("مستوى خدمة ثابت وقابل للقياس في جميع مراحل التشغيل.", "A consistent, measurable service level across every operating stage."),
  impact: t("انخفاض المخاطر التشغيلية وثبات جودة الخدمة مع نمو الأحجام.", "Lower operational risk and steady service quality as volumes grow."),
};

/* ---------- Why Jedyan (p.32) ---------- */
export const reasons: { n: string; en: string; label: T; text: T }[] = [
  { n: "01", en: "PEOPLE & EXPERIENCE", label: t("الكوادر والخبرة", "People and experience"), text: t("نمتلك كوادر وطنية ومهنية بخبرات متراكمة في إدارة العمليات اللوجستية وسلاسل الإمداد، تجمع المعرفة التشغيلية بفهم متطلبات السوق.", "National and professional teams with accumulated experience in logistics and supply-chain operations, combining operating knowledge with an understanding of market requirements.") },
  { n: "02", en: "CAPABILITIES", label: t("الإمكانات والمقدرات التشغيلية", "Operating capabilities"), text: t("نوظف مرافق ومستودعات وأسطولًا وأنظمة وموارد تشغيلية تتيح لنا إدارة نطاقات متعددة من الأعمال بكفاءة وجاهزية.", "Facilities, warehouses, fleet, systems and operating resources that let us run multiple scopes of business efficiently and readily.") },
  { n: "03", en: "GOVERNANCE", label: t("الحوكمة والانضباط التشغيلي", "Governance and operational discipline"), text: t("نعتمد إجراءات وضوابط تشغيل واضحة تعزز الامتثال وتحدد المسؤوليات، وتدعم جودة التنفيذ وإمكانية قياس الأداء.", "Clear operating procedures and controls that reinforce compliance, define responsibilities and support execution quality and measurable performance.") },
  { n: "04", en: "SERVICE SCOPE", label: t("نطاق خدمات واسع", "A wide service scope"), text: t("نجمع التخزين والتجهيز والنقل والتوزيع والشحن ضمن نطاق خدمات يتيح للعميل إدارة احتياجات متعددة عبر جهة واحدة.", "Warehousing, preparation, transport, distribution and freight in one scope, so a client manages multiple needs through a single party.") },
  { n: "05", en: "TECHNOLOGY & DATA", label: t("التقنية ووضوح البيانات", "Technology and data clarity"), text: t("نوظف الأنظمة والربط التقني لإتاحة بيانات وتقارير تمنح العميل رؤية أوضح للمخزون والطلبات والشحنات والأداء.", "Systems and integration that surface data and reports giving the client a clearer view of stock, orders, shipments and performance.") },
  { n: "06", en: "MARKET KNOWLEDGE", label: t("المعرفة بالسوق السعودي", "Saudi market knowledge"), text: t("نجمع المعرفة بالسوق ومتطلباته التشغيلية والتنظيمية مع خبرة عملية تدعم تنفيذ الخدمات بما يتوافق مع طبيعة الأعمال في المملكة.", "Market knowledge and its operating and regulatory requirements, with practical experience that supports delivery in line with how business works in the Kingdom.") },
];

/* ---------- Contact (p.34) ---------- */
export const contact = {
  eyebrow: t("تواصل معنا", "Contact us"),
  headline: t("جاهزون لتشغيل أعمالك", "Ready to run your operations"),
  text: t(
    "للاستفسار أو مناقشة احتياجاتكم اللوجستية، يسعدنا التعرف على طبيعة أعمالكم ومتطلبات التشغيل، وتحديد نطاق الخدمة المناسب لها.",
    "For enquiries or to discuss your logistics requirements, we would be glad to learn about your business and operating needs and define the right service scope for them.",
  ),
};
