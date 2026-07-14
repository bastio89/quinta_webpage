import type { Metadata } from "next";
import { ArticleLayout, Lead, Section, PullQuote, Note, Bullets } from "@/components/ArticleLayout";
import { INSIGHTS } from "@/lib/insights";

const PATH = "/insights/datensouveraenitaet-cloud-act";
const meta = INSIGHTS.find((i) => i.href === PATH)!;

export const metadata: Metadata = {
  title: meta.title,
  description: meta.excerpt,
  alternates: {
    canonical: PATH,
    languages: { de: PATH, en: "/en/insights/datensouveraenitaet-cloud-act" },
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
        title: "Souveränität, die nicht auf Zusicherungen beruht.",
        text: "Sehen Sie, wie Quinta Modelle vollständig in Ihrem Netz betreibt — ohne Transfer, ohne fremde Rechtshoheit.",
      }}
    >
      <Lead>
        Viele Teams glauben, das Problem sei gelöst, sobald ein Cloud-Anbieter eine „EU-Region“
        anbietet. Das ist ein Missverständnis — und ein teures, wenn eine Aufsichtsbehörde genauer
        hinschaut. Der Speicherort ist nur eine Hälfte der Frage. Die andere ist die Rechtsordnung,
        der der Anbieter unterliegt. Und die reist nicht mit dem Rechenzentrum nach Europa.
      </Lead>

      <Section heading="Zwei Fragen, die gern verwechselt werden">
        <p>
          Datensouveränität besteht aus zwei getrennten Fragen, die in Vertriebsgesprächen oft zu
          einer verschmelzen:
        </p>
        <Bullets
          items={[
            "Wo liegen die Daten physisch? — Das beantwortet die „EU-Region“. Sie ist notwendig, aber nicht hinreichend.",
            "Wessen Recht gilt für den Anbieter? — Das entscheidet, wer die Herausgabe der Daten verlangen kann. Und das hängt an der Konzernzugehörigkeit, nicht am Serverstandort.",
          ]}
        />
        <p>
          Ein US-Unternehmen bleibt US-Recht unterworfen, auch wenn seine Server in Frankfurt stehen.
          „Die Daten liegen in Europa“ beantwortet also nur die erste Frage — die zweite bleibt offen.
        </p>
      </Section>

      <Section heading="Schrems II: was das Urteil wirklich sagt">
        <p>
          Mit dem Schrems-II-Urteil (2020) hat der Europäische Gerichtshof den „Privacy Shield“ für
          Datenübermittlungen in die USA für ungültig erklärt. Der Kern der Begründung: Das
          US-Überwachungsrecht ermöglicht Zugriffe, gegen die Betroffene aus der EU keinen
          gleichwertigen Rechtsschutz haben. Das Schutzniveau war damit nicht „im Wesentlichen
          gleichwertig“, wie es die DSGVO verlangt.
        </p>
        <p>
          Standardvertragsklauseln blieben als Instrument zwar möglich — aber nicht als Formalie. Das
          Gericht verlangt eine Einzelfallprüfung und, wo nötig, zusätzliche Schutzmaßnahmen. Aus
          einem einmaligen Vertragsbaustein wird so eine laufende Nachweispflicht, die Sie bei jeder
          Übermittlung erbringen müssen.
        </p>
      </Section>

      <Section heading="Der CLOUD Act — und warum die EU-Tochter oft nicht hilft">
        <p>
          Der US CLOUD Act (2018) erlaubt US-Behörden, von US-Anbietern die Herausgabe von Daten zu
          verlangen — auch dann, wenn diese Daten auf Servern außerhalb der USA liegen. Maßgeblich ist
          die Kontrolle über die Daten, nicht ihr Standort. Eine europäische Tochtergesellschaft
          ändert daran wenig, solange die US-Muttergesellschaft rechtlich oder faktisch Zugriff
          organisieren kann. Hinzu kommen Überwachungsbefugnisse nach US-Recht, die sich gezielt an
          Anbieter elektronischer Kommunikation richten.
        </p>
        <p>
          Für besonders schützenswerte Daten entsteht so ein Risiko, das sich vertraglich kaum
          vollständig ausschließen lässt — weil es nicht aus dem Vertrag stammt, sondern aus dem
          Recht, dem der Anbieter unterliegt.
        </p>
      </Section>

      <Section heading="Und das neue Data Privacy Framework?">
        <p>
          Seit 2023 gibt es mit dem EU-US Data Privacy Framework einen Nachfolger für den Privacy
          Shield, der Übermittlungen an zertifizierte US-Unternehmen wieder erleichtert. Wer darauf
          baut, sollte zwei Dinge bedenken: Erstens gilt er nur für zertifizierte Empfänger unter
          bestimmten Bedingungen. Zweitens stand bereits sein Vorgänger nach wenigen Jahren vor
          Gericht — die Beständigkeit solcher Angemessenheitsbeschlüsse ist historisch begrenzt. Eine
          Datenstrategie, die auf der Fortdauer eines politischen Abkommens ruht, trägt ein
          Restrisiko, das sich nicht wegverhandeln lässt.
        </p>
      </Section>

      <Section heading="Warum Verschlüsselung das Problem nur teilweise löst">
        <p>
          „Wir verschlüsseln alles“ ist ein häufiges Gegenargument — und richtig, aber unvollständig.
          Verschlüsselung im Ruhezustand und beim Transport schützt gespeicherte Daten. Für KI-Inferenz
          reicht das nicht: Das Modell muss den Klartext Ihrer Anfrage verarbeiten, um zu antworten.
          In diesem Moment liegt der sensibelste Teil — der Inhalt Ihres Prompts — unverschlüsselt im
          System des Anbieters vor. Wer die Schlüssel verwaltet oder zur Laufzeit Zugriff hat, kann
          den Schutz aushebeln. Verschlüsselung verlagert das Vertrauensproblem, sie beseitigt es nicht.
        </p>
      </Section>

      <PullQuote>
        Datensouveränität ist nicht die Frage, wo Ihre Daten liegen. Es ist die Frage, wer sie
        herausverlangen kann — und nach wessen Recht.
      </PullQuote>

      <Section heading="Warum das bei KI besonders wiegt">
        <p>
          Bei klassischer Cloud-Nutzung übermitteln Sie oft Metadaten oder ruhende Dateien. Bei
          KI-Inferenz übermitteln Sie das Gegenteil: die aktive Verarbeitung Ihrer sensibelsten
          Inhalte. Prompts enthalten Mandantenakten, Konstruktionsdaten, Patientenbefunde,
          Vertragsentwürfe — genau das Material, das den EU-Rechtsraum nicht verlassen soll. Jede
          Anfrage an eine externe KI ist damit eine Übermittlung, die Sie rechtfertigen können müssen.
        </p>
      </Section>

      <Section heading="Souveränität heißt: kein Transfer">
        <p>
          Der sauberste Weg, das Übermittlungsproblem zu lösen, ist, es gar nicht erst entstehen zu
          lassen. Wenn Modelle vollständig auf Ihrer eigenen Hardware laufen, verlassen die Daten Ihre
          Rechtshoheit nie: kein Drittstaaten-Transfer, kein fremder Auftragsverarbeiter für die
          Inferenz, keine Abhängigkeit von der Verfügbarkeit eines externen Dienstes. Betroffenen- und
          Aufsichtsrechte lassen sich gegen die eigene Infrastruktur durchsetzen — nicht gegen eine
          Zusicherung von jenseits des Atlantiks.
        </p>
      </Section>

      <Section heading="Fragen, die Sie einem Anbieter stellen sollten">
        <Bullets
          items={[
            "Welchem Recht unterliegt Ihre Muttergesellschaft — und kann sie zur Herausgabe verpflichtet werden?",
            "Verarbeitet das Modell den Klartext meiner Prompts, und wer hat zur Laufzeit Zugriff darauf?",
            "Auf welche Rechtsgrundlage stützen Sie die Übermittlung, und welche zusätzlichen Schutzmaßnahmen setzen Sie um?",
            "Erhalte ich einen vollständigen, eigenen Audit-Trail — oder endet er an Ihrer Systemgrenze?",
            "Was passiert mit meiner Anwendung, wenn ein Angemessenheitsbeschluss erneut fällt?",
          ]}
        />
      </Section>

      <Note>
        Hinweis: Dieser Beitrag gibt die Rechtslage allgemein verständlich wieder und ist keine
        Rechtsberatung. Die Bewertung im Einzelfall — insbesondere zu Übermittlungen und geeigneten
        Schutzmaßnahmen — sollte mit fachkundiger Beratung erfolgen.
      </Note>
    </ArticleLayout>
  );
}
