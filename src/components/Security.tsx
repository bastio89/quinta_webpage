import {
  KeyRound,
  FingerprintPattern,
  ShieldCheck,
  Building2,
  MapPinned,
  FileLock2,
  Gavel,
  AlertTriangle,
  Scale,
  ClipboardCheck,
  Check,
} from "lucide-react";
import { AiActCountdown } from "./AiActCountdown";

const LOGIN_METHODS = [
  { icon: KeyRound, title: "Passwort", text: "Der Standard-Login-Weg." },
  { icon: ShieldCheck, title: "2-Faktor (TOTP)", text: "Zahlencode per Authenticator-App." },
  { icon: FingerprintPattern, title: "Passkeys", text: "Anmeldung per Fingerabdruck oder Face-ID, ganz ohne Passwort." },
  { icon: Building2, title: "SSO / SAML", text: "Anmeldung über Ihr Firmen-Login, z. B. Entra ID oder Okta." },
];

const PILLARS = [
  {
    icon: MapPinned,
    title: "Datenhoheit",
    text: "Modelle laufen auf Ihrer eigenen Hardware — in Ihrem Rechenzentrum, nicht in einer fremden Cloud.",
  },
  {
    icon: FileLock2,
    title: "DSGVO & DSG von Grund auf",
    text: "Keine Datenweitergabe an Dritte, kein Training fremder Modelle mit Ihren Daten.",
  },
  {
    icon: ShieldCheck,
    title: "Rollen & Rechte",
    text: "Feingranulares RBAC serverseitig und clientseitig durchgesetzt — nicht nur in der Oberfläche versteckt.",
  },
  {
    icon: Gavel,
    title: "EU AI Act-tauglich",
    text: "Lückenloser Audit-Trail, nachvollziehbare Modell-Deployments und menschliche Kontrolle erfüllen die Dokumentations- und Transparenzpflichten für Hochrisiko-KI-Systeme — dort, wo viele Cloud-Anbieter mangels Einsicht in ihre eigene Infrastruktur an Grenzen stossen.",
  },
];

const AI_ACT_CARDS = [
  {
    icon: AlertTriangle,
    kicker: "Compliance",
    title: "Compliance-Krise",
    text: "Der 2. August 2026 ist das Datum, das jeder CIO kennen sollte. Die Hochrisiko-Pflichten des EU AI Act greifen dann vollständig. Jetzt ist die Zeit, den eigenen KI-Stack darauf vorzubereiten.",
    points: [
      "Hochrisiko-KI-Systeme müssen bis 2. August 2026 konform sein",
      "Bußgelder bis zu 15 Mio. € oder 3 % des weltweiten Jahresumsatzes",
      "Ihr aktueller Cloud-KI-Stack erfüllt die Anforderungen oft nicht",
      "Quinta unterstützt Compliance durch Architektur, nicht nur durch Papier",
    ],
  },
  {
    icon: Scale,
    kicker: "Rechtslage",
    title: "Rechtliche Lage",
    text: "Besonders schützenswerte DSGVO-Daten sollen den EU-Rechtsraum nicht verlassen. US-Cloud-Anbieter unterliegen einer anderen Rechtsordnung — Ihre Daten bleiben dort nicht zwingend nur Ihre.",
    points: [
      "Daten verlassen die EU-Rechtshoheit nie",
      "Kein Zugriffsrisiko durch den US CLOUD Act",
      "Volle Kontrolle über Auftragsverarbeiter",
      "Rechtshoheit bleibt bei Ihrer Organisation",
    ],
  },
  {
    icon: ClipboardCheck,
    kicker: "Audit",
    title: "Auditbereit?",
    text: "Nur nachweisbar konforme KI-Infrastruktur besteht eine Prüfung. Wir helfen Ihnen, diesen Stand vor der Frist zu erreichen — nicht erst danach.",
    points: [
      "Lückenloser Audit-Trail zu jeder Inferenz-Anfrage",
      "Modell-Herkunft und Versionsprotokollierung",
      "Rollenbasierte Zugriffskontrolle fest eingebaut",
      "Auditbereit ab dem ersten Tag",
    ],
  },
];


export function Security() {
  return (
    <section id="sicherheit" className="bg-mist-50 py-24 sm:py-32">
      <div className="container-quinta">
        <div className="mx-auto max-w-2xl text-center">
          <p className="kicker text-sovereign-600">Sicherheit &amp; Compliance</p>
          <h2 className="mt-4 text-balance text-3xl font-semibold tracking-[-0.02em] text-ink-950 sm:text-4xl">
            Enterprise-tauglich, weil es sein muss
          </h2>
          <p className="mt-4 text-balance text-lg leading-relaxed text-mist-700">
            Bank- und Mandantengeheimnis, Betriebsgeheimnisse, DSGVO, DSG und EU AI Act — Quinta
            ist für Daten und Anwendungsfälle gebaut, die eine lückenlos nachweisbare
            Governance verlangen.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-5xl gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {PILLARS.map((p) => (
            <div key={p.title} className="card-surface p-6">
              <div className="inline-flex rounded-lg bg-sovereign-50 p-2.5 text-sovereign-700">
                <p.icon className="h-5 w-5" strokeWidth={1.75} />
              </div>
              <h3 className="mt-4 text-base font-semibold text-ink-950">{p.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-mist-700">{p.text}</p>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-16 max-w-5xl">
          <div className="text-center">
            <h3 className="text-balance text-2xl font-semibold tracking-[-0.02em] text-ink-950 sm:text-3xl">
              DSGVO- &amp; EU AI Act-konforme KI-Infrastruktur
            </h3>
            <div className="mt-8">
              <AiActCountdown />
            </div>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-3">
            {AI_ACT_CARDS.map((c, i) => (
              <div
                key={c.title}
                className={
                  "card-surface p-6" +
                  (i === 1 ? " border-sovereign-300 ring-1 ring-sovereign-200" : "")
                }
              >
                <div className="inline-flex rounded-lg bg-sovereign-50 p-2.5 text-sovereign-700">
                  <c.icon className="h-5 w-5" strokeWidth={1.75} />
                </div>
                <p className="mt-4 kicker text-sovereign-600">{c.kicker}</p>
                <h4 className="mt-1 text-base font-semibold text-ink-950">{c.title}</h4>
                <p className="mt-2 text-sm leading-relaxed text-mist-700">{c.text}</p>
                <ul className="mt-5 space-y-2.5">
                  {c.points.map((point) => (
                    <li key={point} className="flex items-start gap-2 text-sm text-mist-700">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-sovereign-600" strokeWidth={2} />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <p className="mt-6 text-center text-xs leading-relaxed text-mist-500">
            Weil Quinta vollständig auf Ihrer eigenen Hardware läuft, haben Sie selbst jederzeit
            Zugriff auf Audit-Trail, Modell-Herkunft und Zugriffskontrollen — die Grundlage für
            eine rechtssichere Dokumentation statt vager Zusicherungen von Drittanbietern.
          </p>
        </div>

        <div className="mx-auto mt-8 max-w-5xl rounded-2xl border border-ink-800 bg-ink-950 p-8 text-mist-50 sm:p-10">
          <h3 className="text-center text-lg font-semibold sm:text-left">
            Vier Login-Methoden, beliebig kombinierbar
          </h3>
          <div className="mt-7 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {LOGIN_METHODS.map((m) => (
              <div key={m.title}>
                <m.icon className="h-5 w-5 text-gold-400" strokeWidth={1.75} />
                <p className="mt-3 text-sm font-semibold">{m.title}</p>
                <p className="mt-1 text-xs leading-relaxed text-mist-400">{m.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
