"use client";
import Image from "next/image";
import type { Locale } from "@/content/types";
import { useInView } from "@/lib/hooks";
import s from "./ImageBand.module.css";

/**
 * A full-bleed band built on the company-profile artwork.
 * The profile compositions place the photograph on one side and leave the other open for
 * type — which is exactly how the printed profile reads in Arabic. For English the image is
 * mirrored so the open side follows the reading direction. On narrow screens a focal crop of
 * the same frame is used and the type sits over a scrim.
 */
export default function ImageBand({
  image,
  locale,
  eyebrow,
  title,
  lead,
  tone = "dark",
  priority,
  children,
  height = "tall",
}: {
  image: string;
  locale: Locale;
  eyebrow?: string;
  title?: string;
  lead?: string;
  tone?: "dark" | "light";
  priority?: boolean;
  children?: React.ReactNode;
  height?: "tall" | "mid" | "short";
}) {
  const [ref, inView] = useInView<HTMLElement>("0px 0px -10% 0px", true);
  return (
    <section ref={ref} className={`${s.band} ${s[height]} ${tone === "light" ? s.light : s.dark}`} data-in={inView ? "" : undefined}>
      <div className={s.media} aria-hidden="true">
        <Image
          className={`${s.imgWide} ${locale === "en" ? s.flip : ""}`}
          src={`/img/${image}-wide.webp`}
          alt=""
          fill
          sizes="100vw"
          priority={priority}
        />
        <Image className={s.imgFocal} src={`/img/${image}-focal.webp`} alt="" fill sizes="100vw" priority={priority} />
        <span className={s.scrim} />
      </div>
      <div className={`wrap ${s.inner}`}>
        <div className={s.copy}>
          {eyebrow ? <p className={`eyebrow ${s.eyebrow}`}>{eyebrow}</p> : null}
          {title ? <h2 className={s.title}>{title}</h2> : null}
          {lead ? <p className={s.lead}>{lead}</p> : null}
          {children}
        </div>
      </div>
    </section>
  );
}
