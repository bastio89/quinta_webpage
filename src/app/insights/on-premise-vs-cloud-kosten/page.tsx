import type { Metadata } from "next";
import { Check } from "lucide-react";
import { ArticleLayout, Lead, Section, PullQuote, Note } from "@/components/ArticleLayout";
import { INSIGHTS } from "@/lib/insights";

const PATH = "/insights/on-premise-vs-cloud-kosten";
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
        title: "Rechnen wir Ihren Fall gemeinsam durch.",
        text: "In der Demo schauen wir auf Ihr Volumen, Ihre Hardware und Ihre Anwendungsfälle — und was der Eigenbetrieb konkret bedeutet.",
      }}
    >
      <Lead>
        Cloud-KI heißt mieten. On-Premise heißt besitzen. Beide Modelle haben ihre Berechtigung —
        die Frage ist nicht, welches billiger klingt, sondern ab welchem Punkt sich Besitz gegenüber
        Miete rechnet. Und diese Rechnung enthält mehr Posten, als die Token-Preisliste zeigt.
      </Lead>

      <Section heading="Mieten vs. besitzen">
        <p>
          Cloud-KI ist als Betriebskosten (OpEx) attraktiv: kein Kapitaleinsatz, sofort startklar,
          Abrechnung pro Token. Für den ersten Prototyp ist das ideal. Der Haken zeigt sich mit der
          Nutzung: Jede weitere Anwendung, jeder produktive Workload erhöht die Rechnung — und die
          Kosten wachsen genau dann, wenn KI in Ihrem Unternehmen erfolgreich wird.
        </p>
        <p>
          On-Premise dreht das um: Hardware und Strom sind planbare, weitgehend feste Kosten. Ob Sie
          eine Anwendung betreiben oder fünfzig, ob tausend Anfragen am Tag oder eine Million — der
          Preis ändert sich kaum. Sie zahlen für Kapazität, nicht für Nutzung.
        </p>
      </Section>

      <Section heading="Was die Token-Rechnung verschweigt">
        <p>Der reine Token-Preis ist selten der ganze Preis. Häufig übersehen werden:</p>
        <Bullets
          items={[
            "Preishoheit beim Anbieter: Tarife, Modelle und Verfügbarkeit können sich ändern — Ihre Kalkulation hängt an fremden Entscheidungen.",
            "Wachstum als Kostentreiber: Erfolg skaliert die Rechnung. Gerade produktive, häufig genutzte Fälle werden am teuersten.",
            "Nebenkosten: Datenabfluss, zusätzliche Sicherheits- und Compliance-Maßnahmen für den Cloud-Transfer, Vendor-Management.",
            "Lock-in: Ein späterer Wechsel bedeutet Umbau statt Umzug — ein Kostenrisiko, das erst am Ende sichtbar wird.",
          ]}
        />
      </Section>

      <Section heading="Was On-Premise kostet — ehrlich">
        <p>
          Eigenbetrieb ist nicht gratis. Realistisch einzuplanen sind die Anschaffung der Hardware
          (CapEx), Strom und Kühlung, sowie Betrieb und Wartung. Genau hier setzt die Betriebsschicht
          an: Automatische Knoten-Registrierung, Modell-Lebenszyklus und ein Dashboard senken den
          Betriebsaufwand, der bei nacktem Eigenbetrieb sonst am teuersten ist.
        </p>
      </Section>

      <PullQuote>
        Der Break-even ist kein fester Betrag, sondern ein Punkt: dort, wo aus einem Experiment
        stetige, planbare Last wird. Ab da zahlt Miete drauf.
      </PullQuote>

      <Section heading="Wann sich eigene Hardware rechnet">
        <Bullets
          items={[
            "Stetiges, wachsendes Volumen statt vereinzelter Aufrufe.",
            "Mehrere Anwendungsfälle, die dieselbe Kapazität teilen.",
            "Sensible Daten, bei denen der Cloud-Transfer ohnehin ausscheidet.",
            "Planbarkeit als Ziel: ein festes Budget statt einer mit der Nutzung wachsenden Rechnung.",
          ]}
        />
      </Section>

      <Note>
        Hinweis: Die Gegenüberstellung beschreibt die Kostenmodelle, nicht konkrete Preise. Was der
        Eigenbetrieb in Ihrem Fall bedeutet, hängt von Hardware, Volumen und Anwendungsfällen ab und
        wird individuell ermittelt.
      </Note>
    </ArticleLayout>
  );
}
