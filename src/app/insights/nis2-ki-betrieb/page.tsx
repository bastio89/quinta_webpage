import type { Metadata } from "next";
import { ArticleLayout, Lead, Section, PullQuote, Note, Bullets } from "@/components/ArticleLayout";
import { INSIGHTS } from "@/lib/insights";

const PATH = "/insights/nis2-ki-betrieb";
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
        title: "Ein KI-Stack, der in Ihre Sicherheitszone passt.",
        text: "Sehen Sie, wie Zugriffskontrolle, Audit-Trail und Betrieb im eigenen Netz auf NIS2 einzahlen.",
      }}
    >
      <Lead>
        Der EU AI Act bekommt die Aufmerksamkeit — doch für viele Unternehmen ist NIS2 die
        Regulatorik, die den KI-Betrieb genauso direkt betrifft. Sie erweitert die
        Cybersicherheitspflichten auf deutlich mehr Branchen, verlangt konkrete Maßnahmen und nimmt
        die Geschäftsleitung ausdrücklich in die Verantwortung. Wer KI in Produktion betreibt, führt
        damit ein weiteres kritisches System ein — und muss es entsprechend absichern.
      </Lead>

      <Section heading="Was NIS2 ist und wen es betrifft">
        <p>
          NIS2 ist die überarbeitete EU-Richtlinie zur Netz- und Informationssicherheit. Gegenüber
          der Vorgängerin weitet sie den Kreis der betroffenen Organisationen erheblich aus und
          unterscheidet zwei Kategorien:
        </p>
        <Bullets
          items={[
            "„Wesentliche“ Einrichtungen — etwa Energie, Verkehr, Bankwesen, Gesundheit, digitale Infrastruktur.",
            "„Wichtige“ Einrichtungen — u. a. Teile von Industrie, Post- und Kurierdiensten, Lebensmitteln, Chemie, Forschung, digitale Anbieter.",
          ]}
        />
        <p>
          Ob eine Organisation erfasst ist, hängt von Sektor und Größe ab. Der Kreis reicht deutlich
          über klassische Betreiber kritischer Infrastruktur hinaus — viele mittelständische
          Unternehmen fallen erstmals darunter. Die Umsetzung in nationales Recht war europaweit für
          Herbst 2024 vorgesehen; die konkrete Ausgestaltung erfolgt über die Mitgliedsstaaten.
        </p>
      </Section>

      <Section heading="Die Mindestmaßnahmen im Risikomanagement">
        <p>
          NIS2 verlangt keine vagen „Bemühungen", sondern einen konkreten Katalog technischer und
          organisatorischer Maßnahmen. Für den KI-Betrieb besonders relevant sind darunter:
        </p>
        <Bullets
          items={[
            "Risikoanalyse und Konzepte für die Sicherheit der Informationssysteme.",
            "Bewältigung von Sicherheitsvorfällen (Erkennung, Reaktion, Wiederherstellung).",
            "Aufrechterhaltung des Betriebs — Backup, Notfallmanagement, Krisenreaktion.",
            "Sicherheit der Lieferkette, einschließlich der Beziehungen zu Dienstleistern.",
            "Zugriffskontrolle, Konzepte für den Einsatz von Kryptografie und, wo angebracht, Multi-Faktor-Authentifizierung.",
            "Maßnahmen zur Bewertung der Wirksamkeit — Sicherheit muss überprüfbar sein, nicht nur behauptet.",
          ]}
        />
      </Section>

      <Section heading="KI als Teil Ihrer Angriffsfläche und Lieferkette">
        <p>
          Ein KI-Dienst in einer fremden Cloud ist aus NIS2-Sicht zweierlei: eine zusätzliche
          Abhängigkeit in der Lieferkette und eine Erweiterung der Angriffsfläche, in die Sie nur
          begrenzt Einsicht haben. Fällt der Dienst aus, ändert der Anbieter die Bedingungen oder wird
          er selbst kompromittiert, tragen Sie das Risiko — ohne die Kontrolle zu besitzen, die die
          Richtlinie einfordert. Und weil KI-Anfragen sensible Inhalte verarbeiten, wird der KI-Dienst
          schnell zu einem der schützenswertesten Elemente Ihrer Architektur.
        </p>
      </Section>

      <Section heading="Meldepflichten: die Uhr läuft in Stunden">
        <p>
          Ein zentrales Element von NIS2 sind gestufte Meldepflichten bei erheblichen Vorfällen — mit
          engen Fristen:
        </p>
        <Bullets
          items={[
            "Eine erste Frühwarnung ist unverzüglich, spätestens binnen 24 Stunden nach Kenntnis zu übermitteln.",
            "Eine ausführlichere Meldung folgt regelmäßig binnen 72 Stunden.",
            "Ein Abschlussbericht ist typischerweise innerhalb eines Monats vorzulegen.",
          ]}
        />
        <p>
          Diese Fristen setzen voraus, dass Sie einen Vorfall überhaupt erkennen und rekonstruieren
          können. Ohne durchgängige Protokollierung über den gesamten KI-Stack ist das kaum leistbar —
          und an einer fremden Systemgrenze endet Ihre Sicht.
        </p>
      </Section>

      <Section heading="Geschäftsleitungshaftung: Sicherheit ist Chefsache">
        <p>
          Der vielleicht schärfste Hebel von NIS2: Die Verantwortung liegt ausdrücklich bei der
          Leitungsebene. Geschäftsführung und Vorstand müssen die Risikomanagement-Maßnahmen billigen,
          ihre Umsetzung überwachen und können bei Verstößen persönlich in die Verantwortung genommen
          werden. Zudem sind Schulungspflichten vorgesehen. Cybersicherheit ist damit kein Thema, das
          sich vollständig an die IT delegieren lässt — und der Betrieb eines unkontrollierten
          KI-Dienstes wird zu einer Frage, die die Leitungsebene beantworten können muss.
        </p>
      </Section>

      <PullQuote>
        NIS2 fragt nicht, ob Ihre KI funktioniert. Sie fragt, ob Sie nachweisen können, wer sie
        kontrolliert, absichert und im Ernstfall wiederherstellt.
      </PullQuote>

      <Section heading="Wie On-Premise-Betrieb auf die Maßnahmen einzahlt">
        <p>
          Der Betrieb in der eigenen Sicherheitszone bringt genau die Kontrolle, die NIS2 verlangt —
          und lässt sich Punkt für Punkt auf den Maßnahmenkatalog abbilden:
        </p>
        <Bullets
          items={[
            "Zugriffskontrolle über SSO und RBAC, serverseitig durchgesetzt — direkt auf die geforderten Zugriffs- und Authentifizierungsmaßnahmen.",
            "Lückenloser Audit-Trail — die Grundlage für Vorfallserkennung, Rekonstruktion und fristgerechte Meldung.",
            "Reduzierte Lieferkette: Der KI-Dienst gehört Ihnen, nicht einem Dritten — weniger externe Abhängigkeit, weniger Angriffsfläche.",
            "Betriebskontrolle: keine Abhängigkeit von der Verfügbarkeit eines externen KI-Dienstes; Notfall- und Wiederherstellungskonzepte greifen im eigenen Haus.",
          ]}
        />
      </Section>

      <Section heading="NIS2 und EU AI Act: zwei Regularien, ein Stack">
        <p>
          NIS2 und der EU AI Act adressieren unterschiedliche Ziele — Cybersicherheit hier,
          KI-Governance dort — aber sie verlangen überlappende Fähigkeiten: Zugriffskontrolle,
          Nachvollziehbarkeit, Audit, Betriebskontrolle. Wer seinen KI-Stack einmal souverän aufstellt,
          zahlt auf beide gleichzeitig ein. Ein lückenloser Audit-Trail etwa ist zugleich Nachweis für
          die KI-Dokumentation und Grundlage der Vorfallsmeldung. Doppelte Regulatorik heißt nicht
          zwangsläufig doppelter Aufwand — wenn die Architektur stimmt.
        </p>
      </Section>

      <Note>
        Hinweis: Dieser Beitrag gibt den Rahmen allgemein verständlich wieder und ist keine
        Rechtsberatung. Ob und wie NIS2 auf Ihre Organisation anwendbar ist und welche Maßnahmen
        konkret erforderlich sind, sollte fachkundig geprüft werden.
      </Note>
    </ArticleLayout>
  );
}
