import type { Metadata } from "next";
import { ArticleLayout, Lead, Section, PullQuote, Note, Bullets } from "@/components/ArticleLayout";
import { INSIGHTS } from "@/lib/insights";

const PATH = "/insights/on-premise-vs-cloud-kosten";
const meta = INSIGHTS.find((i) => i.href === PATH)!;

export const metadata: Metadata = {
  title: meta.title,
  description: meta.excerpt,
  alternates: {
    canonical: PATH,
    languages: { de: PATH, en: "/en/insights/on-premise-vs-cloud-kosten" },
  },
};

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
        Cloud-KI heißt mieten. On-Premise heißt besitzen. Beide Modelle haben ihre Berechtigung — die
        Frage ist nicht, welches billiger klingt, sondern ab welchem Punkt sich Besitz gegenüber
        Miete rechnet. Und diese Rechnung enthält mehr Posten, als die Token-Preisliste zeigt.
      </Lead>

      <Section heading="Mieten vs. besitzen">
        <p>
          Cloud-KI ist als laufende Betriebskosten (OpEx) attraktiv: kein Kapitaleinsatz, sofort
          startklar, Abrechnung pro Token. Für den ersten Prototyp ist das ideal — und genau das ist
          der psychologische Haken. Der niedrige Einstieg lässt die Gesamtkosten harmlos wirken,
          obwohl sie mit jeder produktiven Nutzung steigen.
        </p>
        <p>
          On-Premise dreht das um: Hardware und Strom sind planbare, weitgehend feste Kosten (CapEx
          plus Betrieb). Ob Sie eine Anwendung betreiben oder fünfzig, ob tausend Anfragen am Tag oder
          eine Million — der Preis ändert sich kaum. Sie zahlen für Kapazität, nicht für Nutzung. Das
          verschiebt das Risiko: weg von einer mit dem Erfolg wachsenden Rechnung, hin zu einer
          einmaligen Investitionsentscheidung.
        </p>
      </Section>

      <Section heading="Die fünf versteckten Kostenpositionen der Cloud">
        <p>Der reine Token-Preis ist selten der ganze Preis. Häufig übersehen werden:</p>
        <Bullets
          items={[
            "Wachstum als Kostentreiber: Erfolg skaliert die Rechnung. Gerade produktive, häufig genutzte Fälle werden am teuersten — Sie werden für Ihren eigenen Erfolg bestraft.",
            "Preishoheit beim Anbieter: Tarife, Modelle, Kontingente und Verfügbarkeit können sich ändern. Ihre Kalkulation hängt an fremden Entscheidungen, die Sie nicht steuern.",
            "Compliance-Aufwand für den Transfer: Jede Übermittlung an eine externe KI verlangt Rechtsgrundlage, Prüfung und Dokumentation — Aufwand, der in keiner Token-Preisliste steht.",
            "Nebenkosten des Betriebs: Datenabfluss, Monitoring, Vendor-Management und die Absicherung gegen Ausfälle oder Rate-Limits des Anbieters.",
            "Lock-in: Ein späterer Wechsel bedeutet Umbau statt Umzug — ein Kostenrisiko, das erst am Ende sichtbar wird, wenn es am teuersten ist.",
          ]}
        />
      </Section>

      <Section heading="Was On-Premise wirklich kostet — ehrlich">
        <p>
          Eigenbetrieb ist nicht gratis, und wer das behauptet, rechnet genauso einseitig wie die
          reine Token-Liste. Realistisch einzuplanen sind:
        </p>
        <Bullets
          items={[
            "Anschaffung der Hardware (CapEx) — die Investition, die über ihre Nutzungsdauer abgeschrieben wird.",
            "Strom und Kühlung — laufend, aber planbar und vom Nutzungsvolumen weitgehend entkoppelt.",
            "Betrieb und Wartung — der Aufwand, ein System am Laufen zu halten, Modelle zu aktualisieren, Ausfälle abzufangen.",
          ]}
        />
        <p>
          Genau am letzten Punkt setzt die Betriebsschicht an: Automatische Knoten-Registrierung, ein
          vollautomatischer Modell-Lebenszyklus und ein Dashboard senken den Betriebsaufwand, der bei
          nacktem Eigenbetrieb sonst am teuersten ist. Der Unterschied zwischen „eigene GPU im Keller“
          und „betriebsfähige Plattform“ ist genau dieser Aufwand.
        </p>
      </Section>

      <Section heading="Amortisation: eine Maschine, die Ihnen gehört, läuft weiter">
        <p>
          Bei Cloud-Abrechnung zahlen Sie pro Anfrage — jede Anfrage kostet, jede Nacht ohne Last
          kostet nichts, aber jede Lastspitze schlägt voll durch. Bei eigener Hardware ist es
          umgekehrt: Die Kapazität ist bezahlt, egal ob sie zu 20 % oder 90 % ausgelastet ist. Das
          bedeutet zweierlei. Ungenutzte Kapazität ist verlorenes Geld — aber jede zusätzliche Nutzung
          ist praktisch kostenlos. Wer viele Anwendungsfälle auf derselben Hardware bündelt, senkt den
          Preis pro Anfrage mit jeder neuen Nutzung. Auslastung ist damit der wichtigste Hebel der
          Wirtschaftlichkeit.
        </p>
      </Section>

      <PullQuote>
        Der Break-even ist kein fester Betrag, sondern ein Punkt: dort, wo aus einem Experiment
        stetige, planbare Last wird. Ab da zahlt Miete drauf.
      </PullQuote>

      <div className="rounded-lg border border-stone-200 bg-stone-100 p-6">
        <p className="text-md leading-relaxed text-ink-800">
          Wo dieser Punkt in Ihrem Fall liegt, können Sie selbst durchspielen — mit Volumen,
          Hardware und Tarif Ihrer Wahl.
        </p>
        <a
          href="/rechner"
          className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-azul-600 hover:text-azul-700"
        >
          Zum interaktiven Kosten-Rechner →
        </a>
      </div>

      <Section heading="Wann Cloud die richtige Wahl bleibt">
        <p>
          Souveränität ist kein Dogma, sondern eine Abwägung. Es gibt Fälle, in denen Miete das
          bessere Modell bleibt:
        </p>
        <Bullets
          items={[
            "Prototypen und einmalige Experimente, bei denen es auf Tempo statt auf Dauerbetrieb ankommt.",
            "Sehr geringe, sporadische Nutzung ohne stetige Last.",
            "Der Bedarf nach einem exotischen Spitzenmodell, das Sie nur selten und nicht auf eigener Hardware brauchen — sofern die Daten unkritisch sind.",
          ]}
        />
        <p>
          Der Punkt ist nicht „Cloud ist schlecht“, sondern: Miete und Besitz haben verschiedene
          Stärken. Souverän ist, die Wahl bewusst zu treffen — nicht, sie einem Anbieter zu überlassen.
        </p>
      </Section>

      <Section heading="Wann sich eigene Hardware rechnet">
        <Bullets
          items={[
            "Stetiges, wachsendes Volumen statt vereinzelter Aufrufe.",
            "Mehrere Anwendungsfälle, die dieselbe Kapazität teilen und die Auslastung erhöhen.",
            "Sensible Daten, bei denen der Cloud-Transfer ohnehin ausscheidet — dann ist On-Premise nicht Kür, sondern Voraussetzung.",
            "Planbarkeit als Ziel: ein festes Budget statt einer mit der Nutzung wachsenden Rechnung.",
          ]}
        />
      </Section>

      <Section heading="Häufige Denkfehler in der Kostenrechnung">
        <Bullets
          items={[
            "Nur den Token-Preis vergleichen und Transfer-, Compliance- und Betriebskosten ausblenden.",
            "Die Kosten eines Pilotprojekts als Dauerzustand behandeln — die reale Rechnung kommt mit der Skalierung.",
            "Wachstum ignorieren: Der Fall, der heute günstig ist, ist morgen der teuerste.",
            "Ungenutzte Kapazität als Verschwendung sehen, statt als bezahlten Spielraum für den nächsten Anwendungsfall.",
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
