"use client";

import { useRef, useState } from "react";
import { ArrowRight } from "lucide-react";

type Lang = "de" | "en";

const T = {
  de: {
    heading: "Demo anfragen",
    intro: "Erzählen Sie uns kurz von Ihrem Vorhaben — wir melden uns innerhalb eines Werktags.",
    name: "Name",
    company: "Firma",
    email: "E-Mail",
    industry: "Branche",
    industryPlaceholder: "Bitte wählen",
    industries: ["Finanzen", "Gesundheitswesen", "Öffentliche Hand", "Recht", "Industrie", "Andere"],
    message: "Ihr Anliegen",
    messagePlaceholder: "Welchen Anwendungsfall haben Sie im Blick? Welche Infrastruktur nutzen Sie heute?",
    submit: "Anfrage per E-Mail senden",
    privacy:
      "Öffnet Ihr E-Mail-Programm mit vorausgefüllter Nachricht — es wird nichts an uns übertragen, bevor Sie selbst senden. Kein Tracking, kein Formular-Dienstleister.",
    fallback: "Lieber direkt schreiben?",
    subjectPrefix: "Demo-Anfrage",
    labels: { name: "Name", company: "Firma", email: "E-Mail", industry: "Branche", message: "Anliegen" },
  },
  en: {
    heading: "Request a demo",
    intro: "Tell us briefly about your plan — we'll get back to you within one business day.",
    name: "Name",
    company: "Company",
    email: "Email",
    industry: "Industry",
    industryPlaceholder: "Please choose",
    industries: ["Finance", "Healthcare", "Public sector", "Legal", "Industry", "Other"],
    message: "Your message",
    messagePlaceholder: "Which use case do you have in mind? What infrastructure do you run today?",
    submit: "Send request by email",
    privacy:
      "Opens your email client with a pre-filled message — nothing is sent to us until you send it yourself. No tracking, no form processor.",
    fallback: "Prefer to write directly?",
    subjectPrefix: "Demo request",
    labels: { name: "Name", company: "Company", email: "Email", industry: "Industry", message: "Message" },
  },
} as const;

const FIELD =
  "w-full rounded-sm border border-stone-300 bg-stone-0 px-3.5 py-2.5 text-sm text-ink-900 placeholder:text-ink-400 focus:border-azul-500 focus:outline-none focus:ring-2 focus:ring-azul-200";

export function DemoForm({ lang = "de" }: { lang?: Lang }) {
  const t = T[lang];
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [industry, setIndustry] = useState("");
  const [message, setMessage] = useState("");
  const linkRef = useRef<HTMLAnchorElement>(null);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `${t.subjectPrefix} — ${company || name || "twenty5ai"}`;
    const body = [
      `${t.labels.name}: ${name}`,
      `${t.labels.company}: ${company}`,
      `${t.labels.email}: ${email}`,
      `${t.labels.industry}: ${industry}`,
      "",
      `${t.labels.message}:`,
      message,
    ].join("\n");
    const mailto = `mailto:hello@twenty5ai.com?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
    // Über ein Anker-Element öffnen: gleiches Verhalten wie ein normaler mailto-Klick.
    const a = linkRef.current;
    if (a) {
      a.href = mailto;
      a.click();
    } else {
      window.location.href = mailto;
    }
  };

  return (
    <div className="rounded-2xl bg-stone-0 p-6 text-left shadow-pop sm:p-8">
      <h3 className="text-display-sm font-semibold text-ink-900">{t.heading}</h3>
      <p className="mt-2 text-sm leading-relaxed text-ink-600">{t.intro}</p>

      <form className="mt-6 flex flex-col gap-4" onSubmit={onSubmit}>
        <div className="grid gap-4 sm:grid-cols-2">
          <label className="flex flex-col gap-1.5">
            <span className="text-xs font-semibold text-ink-700">{t.name}</span>
            <input className={FIELD} value={name} onChange={(e) => setName(e.target.value)} required autoComplete="name" />
          </label>
          <label className="flex flex-col gap-1.5">
            <span className="text-xs font-semibold text-ink-700">{t.company}</span>
            <input className={FIELD} value={company} onChange={(e) => setCompany(e.target.value)} required autoComplete="organization" />
          </label>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <label className="flex flex-col gap-1.5">
            <span className="text-xs font-semibold text-ink-700">{t.email}</span>
            <input type="email" className={FIELD} value={email} onChange={(e) => setEmail(e.target.value)} required autoComplete="email" />
          </label>
          <label className="flex flex-col gap-1.5">
            <span className="text-xs font-semibold text-ink-700">{t.industry}</span>
            <select className={FIELD} value={industry} onChange={(e) => setIndustry(e.target.value)}>
              <option value="">{t.industryPlaceholder}</option>
              {t.industries.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          </label>
        </div>
        <label className="flex flex-col gap-1.5">
          <span className="text-xs font-semibold text-ink-700">{t.message}</span>
          <textarea
            className={`${FIELD} min-h-[110px] resize-y`}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder={t.messagePlaceholder}
          />
        </label>

        <button type="submit" className="btn btn-primary w-full">
          {t.submit}
          <ArrowRight className="h-4 w-4" />
        </button>
        <a ref={linkRef} data-mailto-target hidden aria-hidden tabIndex={-1} href="mailto:hello@twenty5ai.com">
          mailto
        </a>
      </form>

      <p className="mt-4 text-xs leading-relaxed text-ink-400">{t.privacy}</p>
      <p className="mt-2 text-xs text-ink-500">
        {t.fallback}{" "}
        <a href="mailto:hello@twenty5ai.com" className="font-medium text-azul-600 underline underline-offset-2">
          hello@twenty5ai.com
        </a>
      </p>
    </div>
  );
}
