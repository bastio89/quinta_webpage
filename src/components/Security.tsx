import { KeyRound, FingerprintPattern, ShieldCheck, Building2, MapPinned, FileLock2, Gavel } from "lucide-react";

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
    title: "DSGVO von Grund auf",
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
            Bank- und Mandantengeheimnis, Betriebsgeheimnisse, DSGVO und EU AI Act — Quinta
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

        <div className="mx-auto mt-8 max-w-5xl rounded-2xl border border-gold-300 bg-gold-50 p-6 sm:p-8">
          <div className="flex items-start gap-4">
            <div className="inline-flex shrink-0 rounded-lg bg-gold-100 p-2.5 text-gold-700">
              <Gavel className="h-5 w-5" strokeWidth={1.75} />
            </div>
            <div>
              <h3 className="text-base font-semibold text-ink-950">
                Der EU AI Act ist keine Kür mehr, sondern Pflicht
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-800">
                Seit August 2024 gilt die EU-KI-Verordnung; die Pflichten für Hochrisiko- und
                GPAI-Systeme greifen stufenweise bis 2027 — inklusive Risikomanagement,
                Protokollierung, menschlicher Aufsicht und technischer Dokumentation. Viele
                Cloud-KI-Anbieter können diese Nachweise mangels Einsicht in die eigene
                Infrastruktur nicht lückenlos erbringen und schieben die Verantwortung
                vertraglich an ihre Kunden weiter. Weil Quinta vollständig auf Ihrer eigenen
                Hardware läuft, haben Sie selbst jederzeit Zugriff auf Audit-Trail,
                Modell-Herkunft und Zugriffskontrollen — die Grundlage für eine rechtssichere
                Dokumentation statt vager Zusicherungen.
              </p>
            </div>
          </div>
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
