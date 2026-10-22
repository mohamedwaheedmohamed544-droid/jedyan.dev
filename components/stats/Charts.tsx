"use client";
import { useMemo } from "react";
import type { Locale, T } from "@/content/types";
import { useInView } from "@/lib/hooks";
import { placeholderChip } from "@/content/stats";
import s from "./Charts.module.css";

export type Point = { label: T; value: number; en?: string };

const nf = (n: number) => n.toLocaleString("en-US", { maximumFractionDigits: 1 });

function Frame({
  title,
  note,
  unit,
  placeholder,
  locale,
  children,
  wide,
}: {
  title?: string;
  note?: string;
  unit?: string;
  placeholder?: boolean;
  locale: Locale;
  children: React.ReactNode;
  wide?: boolean;
}) {
  return (
    <figure className={`${s.card} ${wide ? s.wide : ""}`}>
      <figcaption className={s.head}>
        <div>
          {title ? <h3 className={s.title}>{title}</h3> : null}
          {unit ? <p className={s.unit}>{unit}</p> : null}
        </div>
        {placeholder ? <span className={s.chip}>{placeholderChip[locale]}</span> : null}
      </figcaption>
      {children}
      {note ? <p className={s.note}>{note}</p> : null}
    </figure>
  );
}

/* ---------------- bars ---------------- */
export function BarChart({ data, locale, ...f }: { data: Point[]; locale: Locale; title?: string; note?: string; unit?: string; placeholder?: boolean }) {
  const [ref, inView] = useInView<HTMLDivElement>("0px 0px -12% 0px", true);
  const rows = data; // the grid mirrors itself in RTL — January stays the first cell
  const max = Math.max(...data.map((d) => d.value)) || 1;
  const peak = Math.max(...data.map((d) => d.value));
  return (
    <Frame locale={locale} wide {...f}>
      <div ref={ref} className={s.bars} data-in={inView ? "" : undefined}>
        {rows.map((d, i) => (
          <div key={d.en || i} className={s.barCol} style={{ ["--d" as string]: i * 55 }}>
            <span className={s.barVal}>{nf(d.value)}</span>
            <div className={s.barTrack}>
              <div className={`${s.bar} ${d.value === peak ? s.barPeak : ""}`} style={{ ["--h" as string]: `${(d.value / max) * 100}%` }} />
            </div>
            <span className={s.barLabel}>{d.label[locale]}</span>
          </div>
        ))}
      </div>
    </Frame>
  );
}

/* ---------------- donut ---------------- */
const SHADES = ["var(--orange)", "#ff8c3d", "#ffa66b", "#8b8a8f", "#c9c7c6"];

export function DonutChart({ data, locale, ...f }: { data: Point[]; locale: Locale; title?: string; note?: string; placeholder?: boolean }) {
  const [ref, inView] = useInView<HTMLDivElement>("0px 0px -12% 0px", true);
  const total = data.reduce((a, b) => a + b.value, 0) || 1;
  const R = 54;
  const C = 2 * Math.PI * R;
  const arcs = useMemo(() => {
    let off = 0;
    return data.map((d, i) => {
      const frac = d.value / total;
      const a = { d, len: frac * C, off, color: SHADES[i % SHADES.length] };
      off += frac * C;
      return a;
    });
  }, [data, total, C]);

  return (
    <Frame locale={locale} {...f}>
      <div ref={ref} className={s.donutWrap} data-in={inView ? "" : undefined}>
        <svg viewBox="0 0 140 140" className={s.donut} role="img" aria-label={f.title}>
          <circle cx="70" cy="70" r={R} fill="none" stroke="currentColor" strokeOpacity="0.12" strokeWidth="16" />
          <g transform="rotate(-90 70 70)">
            {arcs.map((a, i) => (
              <circle
                key={i}
                cx="70"
                cy="70"
                r={R}
                fill="none"
                stroke={a.color}
                strokeWidth="16"
                strokeDasharray={`${a.len} ${C}`}
                strokeDashoffset={-a.off}
                className={s.arc}
                style={{ ["--d" as string]: i * 140, ["--len" as string]: a.len }}
              />
            ))}
          </g>
        </svg>
        <ul className={s.legend}>
          {data.map((d, i) => (
            <li key={d.en || i}>
              <span className={s.dot} style={{ background: SHADES[i % SHADES.length] }} />
              <span className={s.legendLabel}>{d.label[locale]}</span>
              <span className={s.legendVal} dir="ltr">{nf((d.value / total) * 100)}%</span>
            </li>
          ))}
        </ul>
      </div>
    </Frame>
  );
}

/* ---------------- line ---------------- */
export function LineChart({ data, locale, ...f }: { data: Point[]; locale: Locale; title?: string; note?: string; unit?: string; placeholder?: boolean }) {
  const [ref, inView] = useInView<HTMLDivElement>("0px 0px -12% 0px", true);
  const rows = locale === "ar" ? [...data].reverse() : data;
  const W = 560, H = 200, P = 28;
  const vals = rows.map((d) => d.value);
  const min = Math.min(...vals), max = Math.max(...vals);
  const span = max - min || 1;
  const pts = rows.map((d, i) => {
    const x = P + (i * (W - P * 2)) / Math.max(1, rows.length - 1);
    const y = H - P - ((d.value - min) / span) * (H - P * 2);
    return [x, y] as const;
  });
  const path = pts.map((p, i) => `${i ? "L" : "M"}${p[0].toFixed(1)} ${p[1].toFixed(1)}`).join(" ");
  const area = `${path} L${pts[pts.length - 1][0].toFixed(1)} ${H - P} L${pts[0][0].toFixed(1)} ${H - P} Z`;

  return (
    <Frame locale={locale} {...f}>
      <div ref={ref} className={s.lineWrap} data-in={inView ? "" : undefined}>
        <svg viewBox={`0 0 ${W} ${H}`} className={s.line} role="img" aria-label={f.title}>
          <defs>
            <linearGradient id="jx-line-fill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="var(--orange)" stopOpacity="0.22" />
              <stop offset="100%" stopColor="var(--orange)" stopOpacity="0" />
            </linearGradient>
          </defs>
          {[0, 0.5, 1].map((g) => (
            <line key={g} x1={P} x2={W - P} y1={P + g * (H - P * 2)} y2={P + g * (H - P * 2)} stroke="currentColor" strokeOpacity="0.1" strokeWidth="1" />
          ))}
          <path d={area} fill="url(#jx-line-fill)" className={s.lineArea} />
          <path d={path} fill="none" stroke="var(--orange)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={s.linePath} />
          {pts.map((p, i) => (
            <g key={i} className={s.lineDot} style={{ ["--d" as string]: 500 + i * 110 }}>
              <circle cx={p[0]} cy={p[1]} r="4.5" fill="var(--orange)" />
              <text x={p[0]} y={p[1] - 12} textAnchor="middle" className={s.lineVal}>{nf(rows[i].value)}</text>
            </g>
          ))}
        </svg>
        <ul className={s.axis}>
          {rows.map((d, i) => (
            <li key={d.en || i}>{d.label[locale]}</li>
          ))}
        </ul>
      </div>
    </Frame>
  );
}
