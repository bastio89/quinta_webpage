import type { Metadata } from "next";
import { Check } from "lucide-react";
import { ArticleLayout, Lead, Section, PullQuote, Note } from "@/components/ArticleLayout";
import { INSIGHTS } from "@/lib/insights";

const PATH = "/insights/nis2-ki-betrieb";
const meta = INSIGHTS.find((i) => i.href === PATH)!;

export const metadata: Metadata = {
  title: meta.title,
  description: meta.excerpt,
  alternates: { canonical: PATH },
};

function Bullets({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-col gap-2.5">
      {items.map((t) => (
        <li key={t} className="flex items-start gap-2.5 text-md leading-relaxed text-ink-700">
          <Check className="mt-1 h-4 w-4 flex-none text-azul-600" strokeWidth={2.25} />
          <span>{t}</span>
        </li>
      ))}
    </ul>
  );
}

export default function Page() {
  return (
    <ArticleLayout
      category={meta.category}
      title={meta.title}
      date={meta.date}
      readingMinutes={meta.readingMinutes}
      path={PATH}
      description={meta.excerpt}
      cta={{
        title: "Ein KI-Stack, der in Ihre Sicherheitszone passt.",
        text: "Sehen Sie, wie Zugriffskontrolle, Audit-Trail und Betrieb im eigenen Netz auf NIS2 einzahlen.",
      }}
    >
      <Lead>
        Der EU AI Act bekommt die Aufmerksamkeit — doch für viele Unternehmen ist NIS2 die
        Regulatorik, die den KI-Betrieb genauso direkt betrifft. Sie erweitert die
        Cybersicherheitspflichten auf deutlich mehr Branchen und nimmt die Geschäftsleitung
        ausdrücklich in die Verantwortung.
      </Lead>

      <Section heading="Was NIS2 verlangt">
        <p>
          Die NIS2-Richtlinie hebt das Sicherheitsniveau für „wesentliche" und „wichtige"
          Einrichtungen an und weitet den Kreis der betroffenen Sektoren erheblich aus. Im Kern
          stehen Pflichten, die auch für den Betrieb von KI relevant sind:
        </p>
        <Bullets
          items={[
            "Risikomanagement für die eingesetzten Systeme — inklusive Zugriffskontrolle und Zugangsmanagement.",
            "Sicherheit der Lieferkette: auch die Abhängigkeit von externen Dienstleistern zählt dazu.",
            "Meldepflichten bei Sicherheitsvorfällen, mit engen Fristen.",
            "Rechenschaft der Geschäftsleitung — Sicherheit ist Chefsache, nicht delegierbar.",
          ]}
        />
      </Section>

      <Section heading="KI als Teil Ihrer Angriffsfläche und Lieferkette">
        <p>
          Ein KI-Dienst in einer fremden Cloud ist aus NIS2-Sicht zweierlei: eine zusätzliche
          Abhängigkeit in der Lieferkette und eine Erweiterung der Angriffsfläche, in die Sie nur
          begrenzt Einsicht haben. Fällt der Dienst aus oder ändert der Anbieter die Bedingungen,
          tragen Sie das Risiko — ohne die Kontrolle zu besitzen, die die Richtlinie einfordert.
        </p>
      </Section>

      <PullQuote>
        NIS2 fragt nicht, ob Ihre KI funktioniert. Sie fragt, ob Sie nachweisen können, wer sie
        kontrolliert, absichert und im Ernstfall wiederherstellt.
      </PullQuote>

      <Section heading="Wie On-Premise-Betrieb einzahlt">
        <p>
          Der Betrieb in der eigenen Sicherheitszone bringt genau die Kontrolle, die NIS2 verlangt:
        </p>
        <Bullets
          items={[
            "Zugriffskontrolle über SSO und RBAC, serverseitig durchgesetzt.",
            "Nachvollziehbare Administration und ein lückenloser Audit-Trail für die Vorfallsdokumentation.",
            "Keine Abhängigkeit von der Verfügbarkeit eines externen KI-Dienstes.",
            "Eine reduzierte, überschaubare Lieferkette — der KI-Dienst gehört Ihnen, nicht einem Dritten.",
          ]}
        />
      </Section>

      <Note>
        Hinweis: Dieser Beitrag gibt den Rahmen allgemein verständlich wieder und ist keine
        Rechtsberatung. Ob und wie NIS2 auf Ihre Organisation anwendbar ist und welche Maßnahmen
        konkret erforderlich sind, sollte fachkundig geprüft werden.
      </Note>
    </ArticleLayout>
  );
}
