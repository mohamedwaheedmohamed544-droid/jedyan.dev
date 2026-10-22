/**
 * Placeholder operating figures.
 *
 * The final company profile contains NO quantitative figures. Every number below is a
 * design placeholder approved by the client for layout and rhythm only. Each one carries
 * `placeholder: true`, which renders a visible "قيمة توضيحية" marker on the page, and all
 * of them are editable from the dashboard (لوحة التحكم ← الأرقام والمؤشرات).
 *
 * To publish real figures: replace the values and set `placeholder: false` on each item —
 * the marker disappears automatically and nothing else needs to change.
 */
import type { T } from "./types";

const t = (ar: string, en: string): T => ({ ar, en });

export type Stat = {
  key: string;
  value: number;
  /** shown after the number, e.g. "+" or "%" or "m²" */
  suffix?: string;
  /** decimals to animate to (0 = integer) */
  decimals?: number;
  label: T;
  note?: T;
  placeholder: boolean;
};

/** Headline figures — home page band */
export const headlineStats: Stat[] = [
  { key: "warehouse-area", value: 45000, suffix: "m²", label: t("مساحات تخزين تشغيلية", "Operating warehouse space"), placeholder: true },
  { key: "orders-monthly", value: 180000, suffix: "+", label: t("طلب شهريًا", "Orders per month"), placeholder: true },
  { key: "cities", value: 38, suffix: "", label: t("مدينة ضمن التغطية", "Cities covered"), placeholder: true },
  { key: "fleet", value: 120, suffix: "+", label: t("مركبة نقل وتوزيع", "Transport and distribution vehicles"), placeholder: true },
];

/** Service-level figures — used on the performance / reporting section */
export const performanceStats: Stat[] = [
  { key: "on-time", value: 98.4, decimals: 1, suffix: "%", label: t("تسليم ضمن الموعد", "On-time delivery"), placeholder: true },
  { key: "stock-accuracy", value: 99.6, decimals: 1, suffix: "%", label: t("دقة المخزون", "Inventory accuracy"), placeholder: true },
  { key: "same-day", value: 94, suffix: "%", label: t("إرسال في نفس اليوم", "Same-day dispatch"), placeholder: true },
  { key: "returns-cycle", value: 24, suffix: "h", label: t("دورة معالجة المرتجع", "Returns processing cycle"), placeholder: true },
];

export type ChartSeries = { label: T; value: number; en?: string };

/** Bar chart — monthly order volume shape */
export const volumeChart: { title: T; note: T; unit: T; placeholder: boolean; series: ChartSeries[] } = {
  title: t("حجم الطلبات عبر السنة", "Order volume across the year"),
  note: t("يوضح الرسم شكل الموسمية التي يستوعبها نموذج التشغيل.", "The chart shows the seasonality the operating model absorbs."),
  unit: t("ألف طلب", "thousand orders"),
  placeholder: true,
  series: [
    { en: "JAN", label: t("يناير", "Jan"), value: 112 },
    { en: "FEB", label: t("فبراير", "Feb"), value: 104 },
    { en: "MAR", label: t("مارس", "Mar"), value: 138 },
    { en: "APR", label: t("أبريل", "Apr"), value: 126 },
    { en: "MAY", label: t("مايو", "May"), value: 131 },
    { en: "JUN", label: t("يونيو", "Jun"), value: 119 },
    { en: "JUL", label: t("يوليو", "Jul"), value: 142 },
    { en: "AUG", label: t("أغسطس", "Aug"), value: 158 },
    { en: "SEP", label: t("سبتمبر", "Sep"), value: 166 },
    { en: "OCT", label: t("أكتوبر", "Oct"), value: 181 },
    { en: "NOV", label: t("نوفمبر", "Nov"), value: 224 },
    { en: "DEC", label: t("ديسمبر", "Dec"), value: 198 },
  ],
};

/** Donut — share of operating scope by service */
export const mixChart: { title: T; note: T; placeholder: boolean; series: ChartSeries[] } = {
  title: t("توزّع نطاق التشغيل", "Distribution of operating scope"),
  note: t("نسب توضيحية لتوزيع الأحجام على الخدمات.", "Illustrative shares of volume across services."),
  placeholder: true,
  series: [
    { en: "B2C", label: t("خدمات B2C والتجارة الإلكترونية", "B2C and e-commerce"), value: 38 },
    { en: "B2B", label: t("خدمات B2B", "B2B services"), value: 26 },
    { en: "ROAD", label: t("النقل البري", "Road transport"), value: 18 },
    { en: "WAREHOUSE", label: t("التخزين والتغليف", "Warehousing and packaging"), value: 12 },
    { en: "FREIGHT", label: t("الشحن الدولي", "International freight"), value: 6 },
  ],
};

/** Line — service level trend */
export const trendChart: { title: T; note: T; unit: T; placeholder: boolean; series: ChartSeries[] } = {
  title: t("مستوى الخدمة عبر الأرباع", "Service level by quarter"),
  note: t("منحنى توضيحي لاستقرار مستوى الخدمة مع نمو الأحجام.", "An illustrative curve showing service level holding as volume grows."),
  unit: t("% تسليم ضمن الموعد", "% on-time delivery"),
  placeholder: true,
  series: [
    { en: "Q1", label: t("الربع الأول", "Q1"), value: 95.2 },
    { en: "Q2", label: t("الربع الثاني", "Q2"), value: 96.4 },
    { en: "Q3", label: t("الربع الثالث", "Q3"), value: 97.1 },
    { en: "Q4", label: t("الربع الرابع", "Q4"), value: 98.4 },
  ],
};

export const placeholderNote = t(
  "قيمة توضيحية — تُستبدل بالأرقام التشغيلية المعتمدة.",
  "Illustrative value — to be replaced with approved operating figures.",
);

export const placeholderChip = t("قيمة توضيحية", "Illustrative");
