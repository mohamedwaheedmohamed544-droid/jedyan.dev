"use client";
import { useEffect, useRef, useState } from "react";
import type { Locale, T } from "@/content/types";
import { useInView, useReducedMotion } from "@/lib/hooks";
import { placeholderChip } from "@/content/stats";
import s from "./StatBand.module.css";

export type StatItem = { key: string; value: number; suffix?: string; decimals?: number; label: T; note?: T; placeholder?: boolean };

const fmt = (n: number, d: number) => n.toLocaleString("en-US", { minimumFractionDigits: d, maximumFractionDigits: d });
const ease = (t: number) => 1 - Math.pow(1 - t, 3);

/** Counts from 0 to `to` once the element enters the viewport. Respects reduced motion. */
function useCountUp(to: number, run: boolean, decimals = 0, ms = 1400) {
  const [v, setV] = useState(0);
  const reduced = useReducedMotion();
  const done = useRef(false);
  useEffect(() => {
    if (!run || done.current) return;
    done.current = true;
    if (reduced) { setV(to); return; }
    const t0 = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const p = Math.min(1, (now - t0) / ms);
      setV(to * ease(p));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [run, to, reduced, ms]);
  return fmt(v, decimals);
}

function Stat({ item, locale, i }: { item: StatItem; locale: Locale; i: number }) {
  const [ref, inView] = useInView<HTMLLIElement>("0px 0px -15% 0px", true);
  const shown = useCountUp(item.value, inView, item.decimals ?? 0, 1200 + i * 120);
  return (
    <li ref={ref} className={s.item} data-in={inView ? "" : undefined} style={{ ["--d" as string]: i * 90 }}>
      <p className={s.value}>
        <span className={s.num} dir="ltr">{shown}</span>
        {item.suffix ? <span className={s.suffix} dir="ltr">{item.suffix}</span> : null}
      </p>
      <p className={s.label}>{item.label[locale]}</p>
      {item.note ? <p className={s.note}>{item.note[locale]}</p> : null}
      {item.placeholder ? <span className={s.chip}>{placeholderChip[locale]}</span> : null}
    </li>
  );
}

export default function StatBand({
  items,
  locale,
  title,
  lead,
  eyebrow,
  tone = "dark",
}: {
  items: StatItem[];
  locale: Locale;
  title?: string;
  lead?: string;
  eyebrow?: string;
  tone?: "dark" | "graphite" | "paper" | "white" | "tint";
}) {
  if (!items?.length) return null;
  return (
    <section className={`section ${tone} ${s.section}`}>
      <div className="wrap">
        {(eyebrow || title || lead) && (
          <div className="section-head">
            {eyebrow ? <p className="eyebrow" data-reveal>{eyebrow}</p> : null}
            {title ? <h2 className="h2" data-reveal style={{ ["--d" as string]: 80 }}>{title}</h2> : null}
            {lead ? <p className="lead" data-reveal style={{ ["--d" as string]: 140 }}>{lead}</p> : null}
          </div>
        )}
        <ul className={s.grid}>
          {items.map((it, i) => (
            <Stat key={it.key} item={it} locale={locale} i={i} />
          ))}
        </ul>
      </div>
    </section>
  );
}
