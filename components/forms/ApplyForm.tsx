"use client";
import { useState, type FormEvent } from "react";
import type { Locale } from "@/content/types";
import s from "./ApplyForm.module.css";

type Kind = "carrier" | "career";

const FIELDS: Record<Kind, { key: string; ar: string; en: string; type?: string; required?: boolean; area?: boolean }[]> = {
  carrier: [
    { key: "company", ar: "اسم المنشأة", en: "Company name", required: true },
    { key: "name", ar: "اسم المسؤول", en: "Contact name", required: true },
    { key: "email", ar: "البريد الإلكتروني", en: "Email", type: "email", required: true },
    { key: "phone", ar: "رقم الجوال", en: "Mobile", type: "tel" },
    { key: "service", ar: "نوع الخدمة التي تقدمها", en: "Service you provide", required: true },
    { key: "coverage", ar: "نطاق التغطية (المدن/المناطق)", en: "Coverage (cities / regions)" },
    { key: "notes", ar: "نبذة عن القدرات والأسطول", en: "Notes on capability and fleet", area: true },
  ],
  career: [
    { key: "name", ar: "الاسم الكامل", en: "Full name", required: true },
    { key: "email", ar: "البريد الإلكتروني", en: "Email", type: "email", required: true },
    { key: "phone", ar: "رقم الجوال", en: "Mobile", type: "tel" },
    { key: "role", ar: "المجال أو الوظيفة المطلوبة", en: "Field or role", required: true },
    { key: "city", ar: "مدينة الإقامة", en: "City" },
    { key: "experience", ar: "سنوات الخبرة", en: "Years of experience" },
    { key: "notes", ar: "نبذة مختصرة ورابط السيرة الذاتية", en: "Short summary and a link to your CV", area: true },
  ],
};

export default function ApplyForm({ locale, kind }: { locale: Locale; kind: Kind }) {
  const L = locale;
  const t = (ar: string, en: string) => (L === "ar" ? ar : en);
  const [v, setV] = useState<Record<string, string>>({});
  const [state, setState] = useState<"idle" | "busy" | "done" | "error">("idle");
  const fields = FIELDS[kind];

  async function submit(e: FormEvent) {
    e.preventDefault();
    if (state === "busy") return;
    setState("busy");
    try {
      const r = await fetch("/api/leads", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          locale: L,
          contact: { name: v.name || "", company: v.company || "", email: v.email || "", phone: v.phone || "", notes: v.notes || "" },
          answers: [
            { q: "form", a: kind === "carrier" ? "انضمام كمقدم خدمة" : "طلب توظيف" },
            ...fields.filter((f) => !["name", "company", "email", "phone", "notes"].includes(f.key) && v[f.key]).map((f) => ({ q: f.ar, a: v[f.key] })),
          ],
          website: v.website || "",
        }),
      });
      setState(r.ok ? "done" : "error");
    } catch {
      setState("error");
    }
  }

  if (state === "done") {
    return (
      <div className={s.done} role="status">
        <span className={s.mark} aria-hidden="true" />
        <h3>{t("وصلنا طلبك.", "We have your submission.")}</h3>
        <p>
          {kind === "carrier"
            ? t("سيتواصل معك فريق التشغيل لمراجعة نطاق الخدمة والقدرات.", "Our operations team will be in touch to review the service scope and capability.")
            : t("سنراجع بياناتك ونعود إليك عند توفر فرصة مناسبة.", "We will review your details and come back to you when a suitable opening appears.")}
        </p>
      </div>
    );
  }

  return (
    <form className={s.form} onSubmit={submit} noValidate>
      <div className={s.grid}>
        {fields.map((f) => (
          <label key={f.key} className={f.area ? s.full : ""}>
            <span>
              {L === "ar" ? f.ar : f.en}
              {f.required ? <i aria-hidden="true"> *</i> : null}
            </span>
            {f.area ? (
              <textarea rows={4} value={v[f.key] || ""} onChange={(e) => setV({ ...v, [f.key]: e.target.value })} required={f.required} />
            ) : (
              <input type={f.type || "text"} value={v[f.key] || ""} onChange={(e) => setV({ ...v, [f.key]: e.target.value })} required={f.required} autoComplete="off" />
            )}
          </label>
        ))}
      </div>
      <input className={s.hp} tabIndex={-1} autoComplete="off" value={v.website || ""} onChange={(e) => setV({ ...v, website: e.target.value })} aria-hidden="true" />
      <div className={s.actions}>
        <button type="submit" className="btn" disabled={state === "busy"}>
          {state === "busy" ? t("جارٍ الإرسال…", "Sending…") : t("إرسال الطلب", "Submit")}
        </button>
        {state === "error" && <p className={s.err}>{t("تعذّر الإرسال. حاول مرة أخرى أو راسلنا مباشرة.", "Could not send. Please try again or email us directly.")}</p>}
      </div>
    </form>
  );
}
