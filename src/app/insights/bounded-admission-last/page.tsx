import type { Metadata } from "next";
import { ArticleLayout, Lead, Section, PullQuote, Note, Bullets } from "@/components/ArticleLayout";
import { INSIGHTS } from "@/lib/insights";

const PATH = "/insights/bounded-admission-last";
const meta = INSIGHTS.find((i) => i.href === PATH)!;

export const metadata: Metadata = {
  title: meta.title,
  description: meta.excerpt,
  alternates: {
    canonical: PATH,
    languages: { de: PATH, en: "/en/insights/bounded-admission-last" },
  },
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
        viele Anfragen gleichzeitig eintreffen. Warum das so ist, ist kein Zufall, sondern eine
        Eigenschaft von Warteschlangen. Und genau dort setzt die Betriebsschicht an.
      </Lead>

      <Section heading="Das Modell ist nicht das Problem — die Warteschlange ist es">
        <p>
          Ein Inferenz-Server nimmt standardmäßig jede Anfrage an. Unter moderater Last funktioniert
          das gut: Durchsatz und Latenz bleiben stabil, die GPU arbeitet in ihrem effizienten
          Bereich. Steigt die Zahl gleichzeitiger Anfragen aber über das, was die GPU verarbeiten
          kann, verändert sich das Verhalten schlagartig — nicht linear, sondern mit einem Knick.
        </p>
        <p>
          Der Grund ist einfache Warteschlangen-Logik: Solange Anfragen schneller ankommen, als sie
          abgearbeitet werden, wächst die Schlange. Und je länger die Schlange, desto länger wartet
          jede einzelne Anfrage. Kurz vor der Kapazitätsgrenze steigen die Latenzen nicht sanft,
          sondern steil an — der Server ist rechnerisch noch nicht „voll", fühlt sich für den Nutzer
          aber bereits an wie eingefroren.
        </p>
      </Section>

      <Section heading="Warum die Latenz explodiert, bevor die GPU voll ist">
        <p>
          Bei der LLM-Inferenz kommen mehrere Effekte zusammen, die den Knick verschärfen:
        </p>
        <Bullets
          items={[
            "Gemeinsamer Speicher: Jede laufende Anfrage belegt GPU-Speicher für ihren Kontext (KV-Cache). Zu viele gleichzeitige Anfragen führen zu Speicherdruck — Anfragen werden verdrängt oder abgebrochen.",
            "Batching hat Grenzen: Moderne Engines bündeln Anfragen für hohen Durchsatz. Über einer bestimmten Zahl sinkt aber die Antwortzeit pro Nutzer spürbar.",
            "Timeouts erzeugen Wiederholungen: Läuft eine Anfrage in einen Timeout, schickt der Client sie oft erneut — zusätzliche Last genau dann, wenn das System ohnehin überlastet ist.",
          ]}
        />
        <p>
          Das Ergebnis ist eine Rückkopplung: Überlast erzeugt Timeouts, Timeouts erzeugen
          Wiederholungen, Wiederholungen erzeugen mehr Überlast.
        </p>
      </Section>

      <Section heading="Was ohne Schutz passiert: die Kettenreaktion">
        <p>
          Ein ungeschützter Server hat gegen diese Rückkopplung kein Mittel. Er akzeptiert weiter jede
          Anfrage, bis der Speicher erschöpft ist oder die Warteschlange so lang wird, dass praktisch
          alle Anfragen in Timeouts laufen. Für den Nutzer ist der Unterschied zwischen „langsam" und
          „ausgefallen" dann verschwunden — beides fühlt sich gleich an. In verteilten Systemen kann
          ein überlasteter Knoten zudem weitere Knoten mitreißen, wenn Anfragen auf ihn umgeleitet
          werden.
        </p>
      </Section>

      <Section heading="Was „bounded admission“ bedeutet">
        <p>
          Das Gateway sitzt als Pförtner vor dem Modell und begrenzt, wie viele Anfragen gleichzeitig
          in die Inferenz gelassen werden. Statt den Server über seinen effizienten Arbeitsbereich
          hinaus zu überfluten, hält es ihn genau darin. Konkret:
        </p>
        <Bullets
          items={[
            "Zugangskontrolle (Admission): Nur so viele Anfragen gehen gleichzeitig in die Inferenz, wie die Hardware effizient bedienen kann.",
            "Begrenzte Warteschlange: Überzählige Anfragen warten kurz und definiert — nicht unbegrenzt.",
            "Kontrolliertes Abweisen (Load Shedding): Ist auch die Warteschlange voll, wird sauber und sofort abgewiesen, statt eine Anfrage minutenlang hängen zu lassen.",
            "Backpressure: Das Signal „gerade voll“ erreicht den Aufrufer schnell, sodass er sinnvoll reagieren kann.",
          ]}
        />
        <p>
          Fehler werden so abgefangen, bevor der Nutzer sie sieht — und der Server bleibt in dem
          Bereich, in dem er am schnellsten und zuverlässigsten arbeitet.
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

      <Section heading="Was die Zahlen bedeuten">
        <p>
          Unter Extremlast erreicht das Gateway eine 18× höhere Erfolgsquote als der blanke Server.
          „Erfolgsquote" meint dabei den Anteil der Anfragen, die eine gültige Antwort erhalten,
          statt in Timeout oder Fehler zu laufen. Wichtig: Es geht nicht darum, dass das Gateway
          schneller rechnet — die eigentliche Inferenz ist identisch. Es geht darum, dass es die Last
          so dosiert, dass die Anfragen, die durchgehen, auch tatsächlich beantwortet werden.
        </p>
        <p>
          Ebenso wichtig ist, was sich nicht ändert: Die Token-Rate pro Nutzer bleibt gleich. Die
          Betriebsschicht kostet also keine Generierungsleistung — sie sortiert nur, wer wann
          drankommt.
        </p>
      </Section>

      <Section heading="Warum ~56 ms der ganze Preis sind">
        <p>
          Diese Robustheit kostet praktisch keine Leistung. Die Plattform-Schicht fügt rund 56
          Millisekunden zusätzliche Erst-Latenz hinzu — den reinen Netzwerkweg durch das Gateway.
          Das ist ein einmaliger, kaum spürbarer Aufschlag beim ersten Zeichen, kein laufender
          Rechenaufwand. Sie bezahlen ihn einmal pro Anfrage und bekommen dafür ein System, das unter
          Extremlast nicht kippt.
        </p>
      </Section>

      <Section heading="Admission Control ist nicht Rate Limiting">
        <p>
          Beide begrenzen Anfragen — aber grundverschieden. Rate Limiting vergibt feste Kontingente
          pro Client (etwa „100 Anfragen pro Minute"), unabhängig davon, wie ausgelastet das System
          gerade ist. Admission Control richtet sich dynamisch nach der tatsächlichen Kapazität: Bei
          Reserve wird durchgelassen, bei Überlast dosiert. Ein reines Rate Limit schützt vor
          einzelnen Vielrednern, aber nicht vor dem Kollaps, wenn viele legitime Nutzer gleichzeitig
          kommen. Bounded Admission genau davor.
        </p>
      </Section>

      <PullQuote>
        Souveränität kostet keine Leistung — sie liefert sie. Dieselbe Engine, aber dosiert statt
        überflutet.
      </PullQuote>

      <Section heading="Warum das im Betrieb zählt">
        <p>
          Kapazitätsspitzen sind der Normalfall, nicht die Ausnahme: der Montagmorgen, die
          Quartalsauswertung, der Anwendungsfall, der intern plötzlich populär wird. Ein System, das
          genau dann zuverlässig bleibt, ist der Unterschied zwischen „KI im Pilotbetrieb" und „KI,
          auf die sich das Unternehmen verlässt". Und weil das Verhalten unter Last eine Eigenschaft
          der Betriebsschicht ist, nicht des Modells, bekommen Sie es unabhängig davon, welches
          Modell Sie morgen einsetzen.
        </p>
      </Section>

      <Note>
        Die genannten Werte stammen aus der Messung der zugrunde liegenden Engine (Quinta-Gateway vs.
        vLLM pur) und werden exakt so ausgewiesen — nicht gerundet und nicht verallgemeinert.
      </Note>
    </ArticleLayout>
  );
}
