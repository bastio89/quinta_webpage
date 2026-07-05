import type { Metadata } from "next";
import { ArticleLayout, Lead, Section, PullQuote, Note } from "@/components/ArticleLayout";
import { INSIGHTS } from "@/lib/insights";

const PATH = "/insights/bounded-admission-last";
const meta = INSIGHTS.find((i) => i.href === PATH)!;

export const metadata: Metadata = {
  title: meta.title,
  description: meta.excerpt,
  alternates: { canonical: PATH },
};

const STATS = [
  { value: "18×", label: "höhere Erfolgsquote unter Extremlast", accent: true },
  { value: "~56 ms", label: "zusätzliche Erst-Latenz", accent: false },
  { value: "512", label: "gleichzeitige Anfragen im Test", accent: false },
];

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
        title: "Ziehen Sie das Netzwerkkabel — sie antwortet weiter.",
        text: "In der Demo zeigen wir das Verhalten unter Last live: dieselbe Engine, ein anderes Ergebnis am Limit.",
      }}
    >
      <Lead>
        Zwischen einer Demo und einem Produktionssystem liegt selten das Modell. Es liegt die Last.
        Ein blanker Inferenz-Server liefert im Leerlauf beeindruckende Zahlen — und kippt, sobald
        viele Anfragen gleichzeitig eintreffen. Genau dort setzt die Betriebsschicht an.
      </Lead>

      <Section heading="Das Modell ist nicht das Problem — die Warteschlange ist es">
        <p>
          Ein Inferenz-Server nimmt standardmäßig jede Anfrage an. Unter moderater Last funktioniert
          das gut. Steigt die Zahl gleichzeitiger Anfragen über das, was die GPU effizient
          verarbeiten kann, wächst die Warteschlange schneller, als sie abgebaut wird: Die Latenzen
          explodieren, Anfragen laufen in Timeouts, und im schlimmsten Fall reißt der überlastete
          Dienst weitere Anfragen mit — eine Kettenreaktion, die der Nutzer als Ausfall erlebt.
        </p>
      </Section>

      <Section heading="Was „bounded admission“ bedeutet">
        <p>
          Das Gateway sitzt als Pförtner vor dem Modell und begrenzt, wie viele Anfragen gleichzeitig
          in die Inferenz gelassen werden. Statt den Server über seinen effizienten Arbeitsbereich
          hinaus zu überfluten, hält es ihn genau darin — überzählige Anfragen werden dosiert,
          gestaffelt oder kontrolliert abgewiesen, bevor sie Schaden anrichten. Fehler werden
          abgefangen, ehe der Nutzer sie sieht.
        </p>
      </Section>

      <div className="rounded-lg bg-ink-900 px-6 py-8 sm:px-10">
        <div className="grid gap-8 sm:grid-cols-3">
          {STATS.map((s) => (
            <div key={s.label} className="flex flex-col gap-1.5">
              <span
                className={
                  "text-display-md font-semibold tabular-nums " +
                  (s.accent ? "text-azul-400" : "text-on-dark")
                }
              >
                {s.value}
              </span>
              <span className="text-xs leading-relaxed text-on-dark-muted">{s.label}</span>
            </div>
          ))}
        </div>
        <p className="mt-6 text-xs leading-relaxed text-on-dark-muted">
          Benchmark der zugrunde liegenden Engine, gemessen auf NVIDIA DGX Spark (128 GB): 31.200
          Requests, bis 512 gleichzeitige Anfragen, Quinta-Gateway gegen vLLM pur.
        </p>
      </div>

      <Section heading="Warum ~56 ms der ganze Preis sind">
        <p>
          Diese Robustheit kostet praktisch keine Leistung. Die Plattform-Schicht fügt rund 56
          Millisekunden zusätzliche Erst-Latenz hinzu — den reinen Netzwerkweg durch das Gateway. Die
          Token-Rate pro Nutzer bleibt identisch. Sie bezahlen einen einmaligen, kaum spürbaren
          Aufschlag beim ersten Zeichen und bekommen dafür ein System, das unter Extremlast eine 18×
          höhere Erfolgsquote erreicht als der blanke Server.
        </p>
      </Section>

      <PullQuote>
        Souveränität kostet keine Leistung — sie liefert sie. Dieselbe Engine, aber dosiert statt
        überflutet.
      </PullQuote>

      <Section heading="Warum das im Betrieb zählt">
        <p>
          Kapazitätsspitzen sind der Normalfall, nicht die Ausnahme: der Montagmorgen, die
          Quartalsauswertung, der virale Anwendungsfall. Ein System, das genau dann zuverlässig
          bleibt, ist der Unterschied zwischen „KI im Pilotbetrieb" und „KI, auf die sich das
          Unternehmen verlässt".
        </p>
      </Section>

      <Note>
        Die genannten Werte stammen aus der Messung der zugrunde liegenden Engine (Quinta-Gateway
        vs. vLLM pur) und werden exakt so ausgewiesen — nicht gerundet und nicht verallgemeinert.
      </Note>
    </ArticleLayout>
  );
}
