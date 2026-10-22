"use client";
import Link from "next/link";
import type { Locale } from "@/content/types";
import { localePath } from "@/content/types";
import type { Solution } from "@/content/site";
import { useSite } from "@/components/SiteContext";
import PageHero from "@/components/ui/PageHero";
import CtaBand from "@/components/ui/CtaBand";
import Glyph from "@/components/solutions/Glyph";
import ImageBand from "@/components/blocks/ImageBand";
import SeeHow from "@/components/blocks/SeeHow";
import { BinsVisual, FlowVisual, ConnectVisual, CarrierVisual, ReturnsVisual, TowerVisual, GlobeVisual } from "@/components/solutions/Visuals";
import JsonLd from "@/components/ui/JsonLd";

import s from "./SolutionPage.module.css";

const VIS = { bins: BinsVisual, flow: FlowVisual, connect: ConnectVisual, carrier: CarrierVisual, returns: ReturnsVisual, tower: TowerVisual, globe: GlobeVisual };

/**
 * One information model per service — scope, what the client receives, the impact on the
 * business — but a different composition each time: the ground colour, the side the diagram
 * sits on and the photographic band all follow the service's own character in the profile.
 */
export default function SolutionPage({ locale, slug }: { locale: Locale; slug: string }) {
  const L = locale;
  const { solutions, settings } = useSite();
  const SITE_URL = settings.seo.siteUrl;
  const x = solutions.find((v) => v.slug === slug) as Solution;
  const i = solutions.indexOf(x);
  const Visual = VIS[x.visual] ?? FlowVisual;
  const wide = x.visual === "carrier" || x.visual === "connect";
  const t = (ar: string, en: string) => (L === "ar" ? ar : en);
  const others = solutions.filter((v) => v.slug !== slug);

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: x.title[L],
          serviceType: x.en,
          description: x.intro[L],
          areaServed: { "@type": "Country", name: "Saudi Arabia" },
          provider: { "@type": "Organization", name: L === "ar" ? "جديان للخدمات اللوجستية" : "Jedyan Logistics", url: SITE_URL },
          url: SITE_URL + localePath(L, `/solutions/${x.slug}`),
        }}
      />

      <PageHero
        locale={L}
        eyebrow={`${x.n} · ${x.en.toUpperCase()}`}
        title={[x.title[L]]}
        lead={x.intro[L]}
        crumbs={[{ href: "/solutions", label: t("خدماتنا", "Services") }, { href: `/solutions/${x.slug}`, label: x.title[L] }]}
      >
        <p className={s.headline} data-reveal style={{ ["--d" as string]: 420 }}>{x.headline[L]}</p>
      </PageHero>

      {/* the service's own frame from the company profile */}
      <ImageBand
        image={x.image}
        locale={L}
        tone={x.tone === "dark" ? "dark" : "light"}
        height="mid"
        eyebrow={t("ما يحصل عليه العميل", "What the client receives").toUpperCase()}
        title={x.gets[L]}
        priority
      />

      {/* scope */}
      <section className={`section ${x.tone}`}>
        <div className={`wrap ${s.scopeGrid}`}>
          <div className={s.scopeHead}>
            <span className="eyebrow">SCOPE</span>
            <h2 className="h2" data-reveal>{t("نطاق الخدمة", "Service scope")}</h2>
            <Glyph type={x.visual} className={s.glyph} />
          </div>
          <ul className={s.scope}>
            {x.scope.map((sc, k) => (
              <li key={k} data-reveal style={{ ["--d" as string]: k * 40 }}>
                <span className="mono">{String(k + 1).padStart(2, "0")}</span>{sc[L]}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* the mechanism, drawn */}
      {wide ? (
        <section className="section--tight paper">
          <div className="wrap" data-reveal><Visual locale={L} /></div>
        </section>
      ) : (
        <section className={`section ${i % 2 ? "white" : "paper"}`}>
          <div className={`wrap ${s.twoCol} ${i % 2 ? s.flip : ""}`}>
            <div className={s.pr}>
              <div data-reveal>
                <span className="mono accent">IMPACT</span>
                <h2 className="h3">{t("الأثر على أعماله", "The impact on the business")}</h2>
                <p>{x.impact[L]}</p>
              </div>
              <div data-reveal style={{ ["--d" as string]: 100 }}>
                <span className="mono muted">WHAT YOU RECEIVE</span>
                <h2 className="h3">{t("ما يحصل عليه العميل", "What the client receives")}</h2>
                <p>{x.gets[L]}</p>
              </div>
            </div>
            <div className={s.visualCol} data-reveal><Visual locale={L} /></div>
          </div>
        </section>
      )}

      {/* see how we work — stage by stage */}
      <SeeHow slug={x.slug} locale={L} />

      {wide && (
        <section className="section white">
          <div className={`wrap ${s.pr}`}>
            <div data-reveal>
              <span className="mono muted">WHAT YOU RECEIVE</span>
              <h2 className="h3">{t("ما يحصل عليه العميل", "What the client receives")}</h2>
              <p>{x.gets[L]}</p>
            </div>
            <div data-reveal style={{ ["--d" as string]: 100 }}>
              <span className="mono accent">IMPACT</span>
              <h2 className="h3">{t("الأثر على أعماله", "The impact on the business")}</h2>
              <p>{x.impact[L]}</p>
            </div>
          </div>
        </section>
      )}

      {/* the rest of the system */}
      <section className="section white">
        <div className={`wrap ${s.relation}`}>
          <div>
            <span className="eyebrow">ONE SYSTEM</span>
            <h2 className="h2" data-reveal>{t("بقية خدمات جديان", "The rest of the Jedyan system")}</h2>
            <p className="lead muted" data-reveal>
              {t(
                "يمكن التعاقد على كل خدمة بشكل مستقل أو دمجها ضمن نموذج تشغيلي مصمم وفق احتياجات أعمال كل عميل.",
                "Each service can be contracted on its own or combined into an operating model designed around each client's business.",
              )}
            </p>
          </div>
          <ul className={s.others}>
            {others.map((o) => (
              <li key={o.slug}>
                <Link href={localePath(L, `/solutions/${o.slug}`)}>
                  <span className="mono">{o.n}</span>
                  <strong>{o.title[L]}</strong>
                  <span aria-hidden="true" className={s.go}>→</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand
        locale={L}
        title={t("لنصمّم هذا الجزء من عمليتك.", "Let's design this part of your operation.")}
        text={t("نبدأ بدراسة الاحتياج وطبيعة العمليات ومتطلبات التشغيل — ثم نقترح نموذج الخدمة.", "We start by studying the need, the nature of operations and the operating requirements — then propose the service model.")}
        cta={t("تواصل معنا", "Contact us")}
      />
    </>
  );
}
