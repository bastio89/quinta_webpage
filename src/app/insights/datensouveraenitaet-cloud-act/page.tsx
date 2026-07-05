import type { Metadata } from "next";
import { ArticleLayout, Lead, Section, PullQuote, Note } from "@/components/ArticleLayout";
import { INSIGHTS } from "@/lib/insights";

const PATH = "/insights/datensouveraenitaet-cloud-act";
const meta = INSIGHTS.find((i) => i.href === PATH)!;

export const metadata: Metadata = {
  title: meta.title,
  description: meta.excerpt,
  alternates: { canonical: PATH },
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
        title: "Souveränität, die nicht auf Zusicherungen beruht.",
        text: "Sehen Sie, wie Quinta Modelle vollständig in Ihrem Netz betreibt — ohne Transfer, ohne fremde Rechtshoheit.",
      }}
    >
      <Lead>
        Viele Teams glauben, das Problem sei gelöst, sobald ein Cloud-Anbieter eine „EU-Region"
        anbietet. Das ist ein Missverständnis. Der Speicherort ist nur eine Hälfte der Frage — die
        andere ist die Rechtsordnung, der der Anbieter unterliegt. Und die reist nicht mit dem
        Rechenzentrum nach Europa.
      </Lead>

      <Section heading="Das Missverständnis mit der EU-Region">
        <p>
          Ein europäisches Rechenzentrum ändert nichts an der Konzernzugehörigkeit des Anbieters.
          Ein US-Unternehmen bleibt US-Recht unterworfen — unabhängig davon, wo die Server stehen.
          „Die Daten liegen in Frankfurt" beantwortet also nicht die eigentliche Frage: Wer kann auf
          sie zugreifen, und nach welcher Rechtsordnung?
        </p>
      </Section>

      <Section heading="Schrems II und die Folgen">
        <p>
          Mit dem Schrems-II-Urteil (2020) hat der Europäische Gerichtshof den „Privacy Shield" für
          Datenübermittlungen in die USA gekippt. Standardvertragsklauseln bleiben zwar möglich,
          verlangen aber eine Einzelfallprüfung und zusätzliche Schutzmaßnahmen, wenn das Recht des
          Ziellandes den Schutz aushebeln kann. Aus einer Formalie wird damit eine laufende
          Nachweispflicht — die bei jeder Übermittlung neu zu erbringen ist.
        </p>
      </Section>

      <Section heading="Der CLOUD Act reicht über den Atlantik">
        <p>
          Der US CLOUD Act (2018) erlaubt US-Behörden, von US-Anbietern die Herausgabe von Daten zu
          verlangen — auch dann, wenn diese Daten auf Servern außerhalb der USA liegen. Der
          Speicherort in Europa schützt also nicht vor dem Zugriff. Für besonders schützenswerte
          Daten entsteht so ein Risiko, das sich vertraglich kaum vollständig ausschließen lässt.
        </p>
      </Section>

      <PullQuote>
        Datensouveränität ist nicht die Frage, wo Ihre Daten liegen. Es ist die Frage, wer sie
        herausverlangen kann — und nach wessen Recht.
      </PullQuote>

      <Section heading="Souveränität heißt: kein Transfer">
        <p>
          Der sauberste Weg, das Übermittlungsproblem zu lösen, ist, es gar nicht erst entstehen zu
          lassen. Wenn Modelle vollständig auf Ihrer eigenen Hardware laufen, verlassen die Daten
          Ihre Rechtshoheit nie: kein Drittstaaten-Transfer, kein fremder Auftragsverarbeiter für die
          Inferenz, keine Abhängigkeit von der Verfügbarkeit eines externen Dienstes. Betroffenen-
          und Aufsichtsrechte lassen sich gegen die eigene Infrastruktur durchsetzen — nicht gegen
          eine Zusicherung von jenseits des Atlantiks.
        </p>
      </Section>

      <Note>
        Hinweis: Dieser Beitrag gibt die Rechtslage allgemein verständlich wieder und ist keine
        Rechtsberatung. Die Bewertung im Einzelfall — insbesondere zu Übermittlungen und geeigneten
        Schutzmaßnahmen — sollte mit fachkundiger Beratung erfolgen.
      </Note>
    </ArticleLayout>
  );
}
