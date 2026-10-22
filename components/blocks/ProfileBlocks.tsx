"use client";
import Link from "next/link";
import type { Locale } from "@/content/types";
import { localePath } from "@/content/types";
import { useSite, px } from "@/components/SiteContext";
import { useInView } from "@/lib/hooks";
import StatBand from "@/components/stats/StatBand";
import { BarChart, DonutChart, LineChart } from "@/components/stats/Charts";
import ImageBand from "./ImageBand";
import SeeHow from "./SeeHow";
import Tracker from "@/components/tracking/Tracker";
import ApplyForm from "@/components/forms/ApplyForm";
import s from "./Profile.module.css";

export type BlockProps = { locale: Locale; b?: Record<string, unknown> };
type Tone = "white" | "paper" | "dark" | "graphite" | "tint";
const tone = (b: BlockProps["b"], d: Tone = "white") => String(b?.tone || d) as Tone;

function Head({ eyebrow, title, lead }: { eyebrow?: string; title?: string; lead?: string }) {
  if (!eyebrow && !title && !lead) return null;
  return (
    <div className="section-head">
      {eyebrow ? <p className="eyebrow" data-reveal>{eyebrow}</p> : null}
      {title ? <h2 className="h2" data-reveal style={{ ["--d" as string]: 80 }}>{title}</h2> : null}
      {lead ? <p className="lead muted" data-reveal style={{ ["--d" as string]: 140 }}>{lead}</p> : null}
    </div>
  );
}

/* ---------------- numbered card grid (capabilities · market position · vision 2030) ---------------- */
function NumberGrid({ items, locale: L, cols = 3 }: { items: { n?: string; en?: string; label: Record<string, string>; text?: Record<string, string> }[]; locale: Locale; cols?: number }) {
  return (
    <ul className={s.cards} style={{ ["--cols" as string]: cols }}>
      {items.map((it, i) => (
        <li key={it.en || i} className={s.card} data-reveal style={{ ["--d" as string]: i * 70 }}>
          <span className={s.cardN}>{it.n ?? String(i + 1).padStart(2, "0")}</span>
          {it.en ? <span className="mono">{it.en}</span> : null}
          <h3>{it.label[L]}</h3>
          {it.text ? <p>{it.text[L]}</p> : null}
        </li>
      ))}
    </ul>
  );
}

/* ---------------- image band ---------------- */
export function ImageBandBlock({ locale: L, b }: BlockProps) {
  return (
    <ImageBand
      image={String(b?.image || "facility-exterior")}
      locale={L}
      tone={String(b?.imageTone || "dark") === "light" ? "light" : "dark"}
      height={(String(b?.height || "mid") as "tall" | "mid" | "short")}
      eyebrow={px(b, "eyebrow", L, "")}
      title={px(b, "title", L, "")}
      lead={px(b, "lead", L, "")}
    />
  );
}

/* ---------------- see how we work ---------------- */
export function SeeHowBlock({ locale: L, b }: BlockProps) {
  return <SeeHow slug={String(b?.slug || "managed-logistics")} locale={L} />;
}

/* ---------------- stats ---------------- */
export function StatsBlock({ locale: L, b }: BlockProps) {
  const { stats } = useSite();
  const which = String(b?.source || "headline");
  const items = which === "performance" ? stats.performance : stats.headline;
  return (
    <StatBand
      items={items}
      locale={L}
      tone={tone(b, "dark") as "dark" | "graphite" | "paper" | "white" | "tint"}
      eyebrow={px(b, "eyebrow", L, "")}
      title={px(b, "title", L, "")}
      lead={px(b, "lead", L, "")}
    />
  );
}

/* ---------------- charts ---------------- */
export function ChartsBlock({ locale: L, b }: BlockProps) {
  const { stats } = useSite();
  const show = {
    volume: b?.showVolume !== false,
    mix: b?.showMix !== false,
    trend: b?.showTrend !== false,
  };
  return (
    <section className={`section ${tone(b, "paper")}`}>
      <div className="wrap">
        <Head eyebrow={px(b, "eyebrow", L, "PERFORMANCE")} title={px(b, "title", L, L === "ar" ? "التقارير ووضوح الأداء" : "Reporting and performance clarity")} lead={px(b, "lead", L, "")} />
        <div className={s.charts}>
          {show.volume && <BarChart locale={L} data={stats.volume.series} title={stats.volume.title[L]} note={stats.volume.note[L]} unit={stats.volume.unit[L]} placeholder={stats.volume.placeholder} />}
          {show.mix && <DonutChart locale={L} data={stats.mix.series} title={stats.mix.title[L]} note={stats.mix.note[L]} placeholder={stats.mix.placeholder} />}
          {show.trend && <LineChart locale={L} data={stats.trend.series} title={stats.trend.title[L]} note={stats.trend.note[L]} unit={stats.trend.unit[L]} placeholder={stats.trend.placeholder} />}
        </div>
      </div>
    </section>
  );
}

/* ---------------- mission grid (p.4) ---------------- */
export function MissionGridBlock({ locale: L, b }: BlockProps) {
  const { mission } = useSite();
  return (
    <section className={`section ${tone(b, "white")}`}>
      <div className="wrap">
        <Head eyebrow={px(b, "eyebrow", L, "OUR MISSION")} title={px(b, "title", L, L === "ar" ? "رسالتنا" : "Our mission")} />
        <p className={s.statement} data-reveal>{mission.statement[L]}</p>
        <ul className={s.quad}>
          {mission.grid.map((g, i) => (
            <li key={g.en} data-reveal style={{ ["--d" as string]: i * 80 }}>
              <span className="mono accent">{g.en}</span>
              <h3>{g.label[L]}</h3>
              <p>{g.text[L]}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ---------------- promise (p.7) ---------------- */
export function PromiseBlock({ locale: L, b }: BlockProps) {
  const { promise } = useSite();
  return (
    <section className={`section ${tone(b, "tint")}`}>
      <div className="wrap">
        <Head eyebrow={px(b, "eyebrow", L, promise.eyebrow[L])} title={px(b, "title", L, promise.headline[L])} lead={promise.text[L]} />
        <NumberGrid items={promise.items} locale={L} cols={4} />
      </div>
    </section>
  );
}

/* ---------------- capabilities (p.8) ---------------- */
export function CapabilitiesBlock({ locale: L, b }: BlockProps) {
  const { capabilities } = useSite();
  return (
    <section className={`section ${tone(b, "paper")}`}>
      <div className="wrap">
        <Head
          eyebrow={px(b, "eyebrow", L, "OPERATING CAPABILITIES")}
          title={px(b, "title", L, L === "ar" ? "قدراتنا التشغيلية" : "Our operating capabilities")}
          lead={px(b, "lead", L, L === "ar"
            ? "ترتكز عملياتنا على قدرات تشغيلية وتقنية متكاملة، تجمع الأصول والكوادر والأنظمة والإجراءات، لضمان جودة التنفيذ واستمرارية الخدمة والقدرة على الاستجابة لمتطلبات الأعمال."
            : "Our operations rest on integrated operating and technical capabilities — assets, people, systems and procedures — to ensure execution quality, service continuity and the ability to respond to business requirements.")}
        />
        <NumberGrid items={capabilities} locale={L} cols={3} />
      </div>
    </section>
  );
}

/* ---------------- what growth brings (p.10) ---------------- */
export function GrowthBlock({ locale: L, b }: BlockProps) {
  const { growth } = useSite();
  const [ref, inView] = useInView<HTMLDivElement>("0px 0px -15% 0px", true);
  return (
    <section className={`section ${tone(b, "white")}`}>
      <div className="wrap">
        <Head eyebrow={px(b, "eyebrow", L, "GROWTH")} title={px(b, "title", L, L === "ar" ? "ما يترتّب على نمو الأعمال" : "What growth brings with it")} />
        <ul className={s.pills}>
          {growth.drivers.map((d, i) => (
            <li key={d.en} data-reveal style={{ ["--d" as string]: i * 60 }}>
              <span className="mono">{d.en}</span>
              <strong>{d.label[L]}</strong>
            </li>
          ))}
        </ul>
        <p className={s.chainLead} data-reveal>{growth.line[L]}</p>
        <div ref={ref} className={s.chain} data-in={inView ? "" : undefined}>
          {growth.chain.map((c, i) => (
            <span key={c.en} className={s.chainNode} style={{ ["--d" as string]: i * 110 }}>
              {c.label[L]}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- market position (p.11) ---------------- */
export function MarketPositionBlock({ locale: L, b }: BlockProps) {
  const { marketPosition: m } = useSite();
  return (
    <section className={`section ${tone(b, "dark")}`}>
      <div className="wrap">
        <Head eyebrow={px(b, "eyebrow", L, m.eyebrow[L])} title={px(b, "title", L, m.headline[L])} lead={m.sub[L]} />
        <NumberGrid items={m.items} locale={L} cols={3} />
      </div>
    </section>
  );
}

/* ---------------- vision 2030 (p.12) ---------------- */
export function Vision2030Block({ locale: L, b }: BlockProps) {
  const { vision2030: v } = useSite();
  return (
    <section className={`section ${tone(b, "paper")}`}>
      <div className="wrap">
        <Head eyebrow={px(b, "eyebrow", L, "VISION 2030")} title={px(b, "title", L, v.title[L])} lead={v.body[L]} />
        <NumberGrid items={v.items} locale={L} cols={5} />
      </div>
    </section>
  );
}

/* ---------------- managed model split (p.26) ---------------- */
export function ManagedSplitBlock({ locale: L, b }: BlockProps) {
  const { managed: m } = useSite();
  return (
    <section className={`section ${tone(b, "dark")}`}>
      <div className="wrap">
        <Head eyebrow={px(b, "eyebrow", L, "MANAGED OPERATIONS")} title={px(b, "title", L, m.title[L])} lead={px(b, "lead", L, m.intro[L])} />
        <div className={s.split}>
          <div className={`${s.splitCol} ${s.splitOwn}`} data-reveal>
            <h3>{m.jedyan.label[L]}</h3>
            <ul>{m.jedyan.items.map((x, i) => <li key={i}>{x[L]}</li>)}</ul>
          </div>
          <div className={s.splitCol} data-reveal style={{ ["--d" as string]: 120 }}>
            <h3>{m.client.label[L]}</h3>
            <ul>{m.client.items.map((x, i) => <li key={i}>{x[L]}</li>)}</ul>
          </div>
        </div>
        <ol className={s.handoff} data-reveal>
          {m.chain.map((c, i) => (
            <li key={i}>
              <span>{c[L]}</span>
              {i < m.chain.length - 1 ? <i aria-hidden="true" /> : null}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* ---------------- clients and sectors (p.27) ---------------- */
export function ClientsSectorsBlock({ locale: L, b }: BlockProps) {
  const { clientTypes, sectors, sectorRule } = useSite();
  return (
    <section className={`section ${tone(b, "white")}`}>
      <div className="wrap">
        <Head
          eyebrow={px(b, "eyebrow", L, "CLIENTS & SECTORS")}
          title={px(b, "title", L, L === "ar" ? "عملاؤنا والقطاعات التي نخدمها" : "Our clients and the sectors we serve")}
          lead={px(b, "lead", L, sectorRule[L])}
        />
        <NumberGrid items={clientTypes} locale={L} cols={3} />
        <h3 className={s.subHead} data-reveal>{L === "ar" ? "القطاعات التي نخدمها" : "The sectors we serve"}</h3>
        <ul className={s.tags}>
          {sectors.map((x, i) => (
            <li key={x.en} data-reveal style={{ ["--d" as string]: i * 45 }}>{x.label[L]}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ---------------- how we help (p.28) ---------------- */
export function HelpMatrixBlock({ locale: L, b }: BlockProps) {
  const { helpMatrix } = useSite();
  return (
    <section className={`section ${tone(b, "tint")}`}>
      <div className="wrap">
        <Head
          eyebrow={px(b, "eyebrow", L, "HOW WE HELP")}
          title={px(b, "title", L, L === "ar" ? "كيف نساعد أعمالك" : "How we help your business")}
          lead={px(b, "lead", L, L === "ar"
            ? "نربط احتياجك التشغيلي بالخدمة المناسبة، ونحدد نطاق التنفيذ وفق طبيعة أعمالك، بما يحقق أثرًا واضحًا وقابلًا للقياس على كفاءة التشغيل."
            : "We connect your operating need to the right service and define the execution scope around your business, for a clear and measurable impact on operating efficiency.")}
        />
        <ol className={s.matrix}>
          <li className={s.matrixHead} aria-hidden="true">
            <span>{L === "ar" ? "الاحتياج التشغيلي" : "Operating need"}</span>
            <span>{L === "ar" ? "الخدمة المناسبة" : "The right service"}</span>
            <span>{L === "ar" ? "الأثر على الأعمال" : "Impact on the business"}</span>
          </li>
          {helpMatrix.map((row, i) => (
            <li key={i} data-reveal style={{ ["--d" as string]: i * 70 }}>
              <span className={s.mNeed}>{row.need[L]}</span>
              <Link className={s.mService} href={localePath(L, row.slug === "managed-logistics" ? "/solutions" : `/solutions/${row.slug}`)}>
                {row.service[L]}
                <i aria-hidden="true">→</i>
              </Link>
              <span className={s.mImpact}>{row.impact[L]}</span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* ---------------- quality & compliance (p.31) ---------------- */
export function ComplianceBlock({ locale: L, b }: BlockProps) {
  const { quality } = useSite();
  return (
    <section className={`section ${tone(b, "graphite")}`}>
      <div className="wrap">
        <Head eyebrow={px(b, "eyebrow", L, "QUALITY & COMPLIANCE")} title={px(b, "title", L, L === "ar" ? "الجودة والامتثال" : "Quality and compliance")} lead={quality.intro[L]} />
        <ul className={s.rules}>
          {quality.items.map((x, i) => (
            <li key={i} data-reveal style={{ ["--d" as string]: i * 70 }}>
              <strong>{x.label[L]}</strong>
              <span>{x.text[L]}</span>
            </li>
          ))}
        </ul>
        <div className={s.pair} data-reveal>
          <p><span className="mono accent">WHAT YOU RECEIVE</span>{quality.gets[L]}</p>
          <p><span className="mono accent">IMPACT</span>{quality.impact[L]}</p>
        </div>
      </div>
    </section>
  );
}

/* ---------------- tracking ---------------- */
export function TrackingBlock({ locale: L, b }: BlockProps) {
  // the dashboard stores repeatable fields as { value: string }
  const samples = (Array.isArray(b?.samples) ? (b!.samples as unknown[]) : [])
    .map((x) => (typeof x === "string" ? x : String((x as { value?: unknown })?.value ?? "")))
    .filter(Boolean);
  return (
    <section className={`section ${tone(b, "dark")}`}>
      <div className="wrap">
        <Head
          eyebrow={px(b, "eyebrow", L, "TRACK YOUR SHIPMENT")}
          title={px(b, "title", L, L === "ar" ? "تتبّع شحنتك" : "Track your shipment")}
          lead={px(b, "lead", L, L === "ar"
            ? "أدخل رقم الشحنة لعرض حالتها وتاريخ آخر تحديث لها."
            : "Enter your shipment number to see its status and when it was last updated.")}
        />
        <Tracker locale={L} samples={samples} />
      </div>
    </section>
  );
}

/* ---------------- join us (carrier / careers) ---------------- */
export function ApplyBlock({ locale: L, b }: BlockProps) {
  const kind = String(b?.kind || "carrier") as "carrier" | "career";
  return (
    <section className={`section ${tone(b, "white")}`}>
      <div className="wrap">
        <Head eyebrow={px(b, "eyebrow", L, kind === "carrier" ? "SERVICE PROVIDERS" : "CAREERS")} title={px(b, "title", L, "")} lead={px(b, "lead", L, "")} />
        <ApplyForm locale={L} kind={kind} />
      </div>
    </section>
  );
}
