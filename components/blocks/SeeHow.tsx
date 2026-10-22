"use client";
import { useEffect, useRef, useState } from "react";
import type { Locale } from "@/content/types";
import { howStages, howTitle, howLead, type HowStage } from "@/content/how";
import { useInView, useReducedMotion } from "@/lib/hooks";
import s from "./SeeHow.module.css";

const DWELL = 4200;

/** A small diagram that re-draws per stage — the same marks the brand uses elsewhere. */
function StageMark({ i, total, active }: { i: number; total: number; active: boolean }) {
  const pts = Array.from({ length: total }, (_, k) => {
    const a = (-Math.PI / 2) + (k / total) * Math.PI * 2;
    return [60 + Math.cos(a) * 38, 60 + Math.sin(a) * 38] as const;
  });
  return (
    <svg viewBox="0 0 120 120" className={s.mark} aria-hidden="true">
      <circle cx="60" cy="60" r="38" fill="none" stroke="currentColor" strokeOpacity="0.14" strokeWidth="1" />
      {pts.map((p, k) => (
        <line key={k} x1="60" y1="60" x2={p[0]} y2={p[1]} stroke="currentColor" strokeOpacity={k === i ? 0.0 : 0.08} strokeWidth="1" />
      ))}
      <line
        x1="60"
        y1="60"
        x2={pts[i][0]}
        y2={pts[i][1]}
        stroke="var(--orange)"
        strokeWidth="2"
        strokeLinecap="round"
        className={s.needle}
      />
      {pts.map((p, k) => (
        <circle key={k} cx={p[0]} cy={p[1]} r={k === i ? 5 : 2.5} fill={k === i ? "var(--orange)" : "currentColor"} fillOpacity={k === i ? 1 : 0.22} className={s.node} />
      ))}
      <circle cx="60" cy="60" r={active ? 4 : 3} fill="var(--orange)" />
    </svg>
  );
}

export default function SeeHow({ slug, locale, stages }: { slug?: string; locale: Locale; stages?: HowStage[] }) {
  const list = stages ?? (slug ? howStages[slug] : undefined);
  const [i, setI] = useState(0);
  const [auto, setAuto] = useState(true);
  const [ref, inView] = useInView<HTMLElement>("0px 0px -20% 0px");
  const reduced = useReducedMotion();
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (!list) return;
    if (!auto || !inView || reduced) {
      if (timer.current) clearInterval(timer.current);
      return;
    }
    timer.current = setInterval(() => setI((v) => (v + 1) % list.length), DWELL);
    return () => { if (timer.current) clearInterval(timer.current); };
  }, [auto, inView, reduced, list]);

  if (!list?.length) return null;
  const cur = list[i];

  return (
    <section
      ref={ref}
      className={`section graphite ${s.section}`}
      aria-labelledby={`how-${slug ?? "x"}`}
      onMouseEnter={() => setAuto(false)}
      onMouseLeave={() => setAuto(true)}
    >
      <div className="wrap">
        <div className="section-head">
          <p className="eyebrow" data-reveal>SEE HOW WE WORK</p>
          <h2 id={`how-${slug ?? "x"}`} className="h2" data-reveal style={{ ["--d" as string]: 70 }}>{howTitle[locale]}</h2>
          <p className="lead" data-reveal style={{ ["--d" as string]: 130 }}>{howLead[locale]}</p>
        </div>

        <div className={s.body}>
          <div className={s.visual}>
            <StageMark i={i} total={list.length} active={inView} />
            <p className={s.counter} dir="ltr">
              <span>{String(i + 1).padStart(2, "0")}</span>
              <span className={s.of}>/{String(list.length).padStart(2, "0")}</span>
            </p>
          </div>

          <div className={s.panel}>
            <p className="mono" key={`e${i}`}>{cur.en}</p>
            <h3 key={`t${i}`}>{cur.label[locale]}</h3>
            <p className={s.text} key={`x${i}`}>{cur.text[locale]}</p>
          </div>
        </div>

        <ol className={s.track} role="tablist" aria-label={howTitle[locale]}>
          {list.map((st, k) => (
            <li key={st.en}>
              <button
                type="button"
                role="tab"
                aria-selected={k === i}
                className={k === i ? s.on : k < i ? s.past : ""}
                onClick={() => { setI(k); setAuto(false); }}
                onFocus={() => setAuto(false)}
              >
                <span className={s.dot} />
                <span className={s.tabLabel}>{st.label[locale]}</span>
              </button>
              {k === i && !reduced && auto && inView ? <span className={s.progress} style={{ ["--ms" as string]: `${DWELL}ms` }} /> : null}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
