/**
 * "شاهد كيف نعمل" — the per-service walkthrough.
 * Every stage below is a step named in that service's own scope list in the company
 * profile. Nothing here adds a capability the profile does not state.
 */
import type { T } from "./types";

const t = (ar: string, en: string): T => ({ ar, en });

export type HowStage = { en: string; label: T; text: T };

export const howStages: Record<string, HowStage[]> = {
  "b2c-ecommerce": [
    { en: "CONNECT", label: t("الربط التقني", "Integration"), text: t("نربط المتجر أو المنصة بتدفق التشغيل، فتصل الطلبات دون إدخال يدوي.", "We connect the store or marketplace to the operating flow, so orders arrive without manual entry.") },
    { en: "STOCK", label: t("إدارة المخزون", "Inventory"), text: t("مخزونك داخل المستودع برصيد محدّث تقرأه القناة.", "Your stock sits in the warehouse with a current balance the channel reads.") },
    { en: "ORDER", label: t("استلام الطلب", "Order intake"), text: t("كل طلب يدخل دورة تشغيل واحدة لها حالة معروفة.", "Every order enters one operating cycle with a known status.") },
    { en: "PICK & PACK", label: t("الالتقاط والتغليف", "Pick and pack"), text: t("إلتقاط وتجهيز وتغليف الطلب وفق متطلبات علامتك.", "Picking, preparation and packing to your brand's requirements.") },
    { en: "DELIVERY", label: t("التوصيل", "Delivery"), text: t("إدارة الشحن والميل الأخير، مع خيارات توصيل في نفس اليوم أو خلال 2–3 ساعات.", "Shipping and last-mile management, with same-day or 2–3 hour options.") },
    { en: "COD", label: t("الدفع والتسويات", "Payment and settlement"), text: t("إدارة الدفع عند الاستلام (COD) والتسويات.", "Cash-on-delivery management and reconciliation.") },
    { en: "RETURNS", label: t("المرتجعات", "Returns"), text: t("استلام المرتجع وفحصه وإعادته إلى دورة المخزون.", "Returns received, inspected and brought back into the stock cycle.") },
    { en: "REPORTING", label: t("التقارير", "Reporting"), text: t("التقارير التشغيلية ومؤشرات الأداء تغلق الدورة.", "Operating reports and performance indicators close the cycle.") },
  ],
  "b2b-services": [
    { en: "RECEIVE", label: t("الاستلام والتخزين", "Receive and store"), text: t("استلام وتخزين وإدارة مخزون الشركات.", "Corporate inventory received, stored and managed.") },
    { en: "PREPARE", label: t("تجهيز طلبات الجملة", "Wholesale preparation"), text: t("تجهيز طلبات الجملة والتوريد وفق متطلبات واشتراطات جهة الاستلام.", "Wholesale and supply orders prepared to the receiving party's requirements.") },
    { en: "LOAD", label: t("الشحن الجزئي والكامل", "Part and full loads"), text: t("الشحن الجزئي LTL بالطبليات والكراتين، أو شحن كامل الحمولة FTL.", "LTL pallets and cartons, or FTL full loads.") },
    { en: "DISTRIBUTE", label: t("التوزيع", "Distribution"), text: t("التوزيع على الفروع ونقاط البيع والعملاء.", "Distribution to branches, points of sale and customers.") },
    { en: "PROOF", label: t("إثبات التسليم", "Proof of delivery"), text: t("مطابقة الكميات وتوثيق مستندات التسليم.", "Quantities matched and delivery documents recorded.") },
    { en: "REPORTING", label: t("التقارير", "Reporting"), text: t("تقارير تشغيلية ومؤشرات أداء لحركة التوريد.", "Operating reports and indicators for supply movement.") },
  ],
  "road-transport": [
    { en: "PLAN", label: t("التخطيط", "Planning"), text: t("النقل المجدول وفق خطط التوريد والتوزيع، أو النقل السريع والمستعجل عند الحاجة.", "Scheduled transport to supply and distribution plans, or express movement when needed.") },
    { en: "LOAD TYPE", label: t("نوع الحمولة", "Load type"), text: t("نقل كامل الحمولة FTL أو نقل الشحنات الجزئية LTL بحسب حجم الشحنة.", "FTL full loads or LTL part loads by shipment size.") },
    { en: "ROUTE", label: t("المسار", "Route"), text: t("النقل بين مدن ومناطق المملكة، والنقل الإقليمي عند الحاجة.", "Transport between the Kingdom's cities and regions, and regional movement when required.") },
    { en: "CONDITION", label: t("ظروف النقل", "Conditions"), text: t("النقل المبرد للأصناف التي تتطلب درجة حرارة محددة.", "Refrigerated transport for items that require a controlled temperature.") },
    { en: "DELIVER", label: t("التسليم", "Delivery"), text: t("التوصيل من الباب إلى الباب، مع متابعة الشحنة من التحميل حتى إثبات التسليم.", "Door-to-door delivery, with the shipment followed from loading to proof of delivery.") },
  ],
  "warehousing-packaging": [
    { en: "INBOUND", label: t("الاستلام", "Inbound"), text: t("استلام البضائع وفحصها وتوثيقها.", "Goods received, inspected and documented.") },
    { en: "PUT-AWAY", label: t("التخزين", "Put-away"), text: t("التخزين بالطبليات والأرفف والكرتون وفق طبيعة الأصناف، جافًا أو مبردًا.", "Pallet, rack and carton storage by item type, dry or chilled.") },
    { en: "INVENTORY", label: t("إدارة المخزون", "Inventory"), text: t("إدارة المخزون وحركة الأصناف، مع الجرد وتقارير حالة الأصناف.", "Inventory and item movement managed, with counts and item-status reporting.") },
    { en: "FULFILLMENT", label: t("التجهيز", "Fulfillment"), text: t("انتقاء وتجهيز الأصناف ضمن خدمات التجهيز Fulfillment.", "Picking and preparing items within fulfillment services.") },
    { en: "PACKAGING", label: t("التغليف", "Packaging"), text: t("التغليف المخصص حسب متطلبات العميل.", "Custom packaging to the client's requirements.") },
  ],
  "international-freight": [
    { en: "MODE", label: t("اختيار الوسيلة", "Mode"), text: t("الشحن الجوي الدولي، أو الشحن البحري بالحاويات الكاملة FCL أو الجزئية LCL.", "International air freight, or sea freight by full container (FCL) or part container (LCL).") },
    { en: "DOCUMENTS", label: t("الاستيراد والتصدير", "Import and export"), text: t("خدمات الاستيراد والتصدير وتنسيق مراحل الشحنة.", "Import and export services, with the shipment's stages coordinated.") },
    { en: "TRANSIT", label: t("المتابعة", "In transit"), text: t("متابعة الشحنات وتنسيق مراحلها من الاستلام وحتى الوصول.", "Shipments followed and their stages coordinated from collection to arrival.") },
    { en: "DOOR", label: t("التسليم", "Delivery"), text: t("التوصيل من الباب إلى الباب عند الوجهة.", "Door-to-door delivery at the destination.") },
  ],
  "managed-logistics": [
    { en: "SCOPE", label: t("نطاق التشغيل", "Operating scope"), text: t("نتفق على نطاق التشغيل الذي تديره جديان بمسؤولية واضحة.", "We agree the operating scope Jedyan manages under clear accountability.") },
    { en: "WAREHOUSE", label: t("التخزين وإدارة المخزون", "Warehousing and inventory"), text: t("إدارة التخزين والمخزون ضمن النطاق المتفق عليه.", "Warehousing and inventory managed within the agreed scope.") },
    { en: "ORDERS", label: t("تنفيذ وتجهيز الطلبات", "Fulfillment"), text: t("تنفيذ وتجهيز الطلبات حتى الجاهزية للحركة.", "Orders fulfilled and prepared to the point of movement.") },
    { en: "MOVE", label: t("النقل والتوزيع والشحن", "Transport and freight"), text: t("النقل والتوزيع داخل المملكة والشحن الدولي عند الحاجة.", "Transport and distribution inside the Kingdom, and international freight when required.") },
    { en: "COORDINATE", label: t("الربط والتنسيق", "Integration"), text: t("الربط والتنسيق التشغيلي بين الأطراف والأنظمة.", "Operational integration and coordination across parties and systems.") },
    { en: "REPORT", label: t("التقارير والأداء", "Reporting"), text: t("التقارير ومؤشرات الأداء، فيما يحتفظ العميل بقراراته التجارية.", "Reports and performance indicators, while the client keeps their commercial decisions.") },
  ],
};

export const howTitle = t("شاهد كيف نعمل", "See how we work");
export const howLead = t(
  "مراحل التشغيل كما تجري فعليًا داخل هذه الخدمة — اضغط أي مرحلة لعرض تفاصيلها.",
  "The operating stages as they actually run inside this service — select any stage to read it.",
);
