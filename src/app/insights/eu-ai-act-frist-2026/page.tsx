import type { Metadata } from "next";
import {
  ArticleLayout,
  Lead,
  Section,
  SubHeading,
  Bullets,
  CardGrid,
  PullQuote,
  Note,
} from "@/components/ArticleLayout";
import { AiActCountdown } from "@/components/AiActCountdown";
import { INSIGHTS } from "@/lib/insights";

const PATH = "/insights/eu-ai-act-frist-2026";
const meta = INSIGHTS.find((i) => i.href === PATH)!;

export const metadata: Metadata = {
  title: meta.title,
  description: meta.excerpt,
  alternates: {
    canonical: PATH,
    languages: { de: PATH, en: "/en/insights/eu-ai-act-frist-2026" },
  },
};

export default function Page() {
  return (
    <ArticleLayout
      category="Compliance"
      title={meta.title}
      date={meta.date}
      readingMinutes={meta.readingMinutes}
      path={PATH}
      description={meta.excerpt}
      cta={{
        title: "Compliance, die auf Architektur beruht — nicht auf Papier.",
        text: "In der Demo zeigen wir, wie Audit-Trail, Modell-Herkunft und Zugriffskontrolle auf Ihrer eigenen Hardware zusammenspielen.",
      }}
    >
      <div className="rounded-lg border border-stone-200 bg-stone-100 px-6 py-8 sm:px-10">
        <AiActCountdown />
      </div>

      <div className="flex flex-col gap-4 text-md leading-relaxed text-ink-700">
        <Lead>
          Der EU AI Act wird in Stufen wirksam. Der 2. August 2026 markiert die Stufe, die für die
          meisten Unternehmen zählt: Ab diesem Datum wird eine zentrale Tranche der Verordnung
          anwendbar — darunter die Pflichten für viele Hochrisiko-KI-Systeme sowie der Governance-
          und Sanktionsrahmen.
        </Lead>
        <p>
          Wer KI produktiv einsetzt, sollte bis dahin nicht nur wissen,{" "}
          <em className="not-italic font-medium text-ink-900">welche</em> Systeme im Haus laufen,
          sondern auch nachweisen können,{" "}
          <em className="not-italic font-medium text-ink-900">wie</em> sie kontrolliert, protokolliert
          und verwaltet werden. Genau hier trennt sich nachweisbare Compliance von guten Absichten —
          und genau hier entscheidet die Architektur Ihres KI-Stacks darüber, ob eine Prüfung zur
          Formsache oder zum Problem wird.
        </p>
      </div>

      <Section heading="Der Zeitplan: warum gerade 2026">
        <p>
          Die Verordnung ist am 1. August 2024 in Kraft getreten, ihre Pflichten greifen aber
          gestaffelt über mehrere Jahre. Das ist bewusst so angelegt — und der Grund, warum der 2.
          August 2026 der Stichtag ist, den die meisten Organisationen im Kalender haben sollten:
        </p>
        <Bullets
          items={[
            "Ab dem 2. Februar 2025: Die verbotenen Praktiken (unannehmbares Risiko) gelten — bestimmte KI-Anwendungen sind untersagt.",
            "Ab dem 2. August 2025: Pflichten für Anbieter von KI-Modellen mit allgemeinem Verwendungszweck (GPAI) sowie Teile der Governance-Struktur.",
            "Ab dem 2. August 2026: Die Kernpflichten für Hochrisiko-KI-Systeme nach Anhang III sowie der Sanktionsrahmen werden vollständig anwendbar.",
            "Ab dem 2. August 2027: Die Pflichten für Hochrisiko-Systeme, die als Sicherheitsbauteil bereits regulierter Produkte gelten (Anhang I).",
          ]}
        />
        <p>
          Für den Regelfall — KI, die eigenständig in einem der Hochrisiko-Bereiche eingesetzt wird —
          ist damit 2026 die entscheidende Frist. 2027 betrifft primär Produkte, die ohnehin schon
          einer sektoralen Sicherheitsregulierung unterliegen.
        </p>
      </Section>

      <Section heading="Was am 2. August 2026 anwendbar wird">
        <p>Zu diesem Datum werden insbesondere relevant:</p>
        <Bullets
          items={[
            "Anforderungen an viele Hochrisiko-KI-Systeme (u. a. nach Anhang III der Verordnung).",
            "Transparenz-, Dokumentations- und Aufsichtspflichten für Anbieter und Betreiber.",
            "Der Sanktionsrahmen — bei Verstößen bis zu 15 Mio. € oder 3 % des weltweiten Jahresumsatzes, je nachdem, welcher Betrag höher ist.",
            "Nationale Marktüberwachung, Zuständigkeiten und die Behördenstruktur in den Mitgliedsstaaten.",
          ]}
        />
      </Section>

      <Section heading="Bin ich betroffen? Die vier Risikoklassen">
        <p>
          Der EU AI Act reguliert nicht „KI“ pauschal, sondern nach Risiko. Bevor Sie über Pflichten
          nachdenken, lohnt die Einordnung Ihrer Anwendungen in eine der vier Klassen:
        </p>
        <SubHeading>Unannehmbares Risiko</SubHeading>
        <p>
          Verbotene Praktiken — etwa manipulatives Verhalten oder bestimmte Formen des Social
          Scoring. Diese Systeme sind seit Februar 2025 untersagt.
        </p>
        <SubHeading>Hohes Risiko</SubHeading>
        <p>
          Systeme in sensiblen Bereichen wie kritischer Infrastruktur, Beschäftigung, Kreditvergabe,
          Bildung oder Justiz. Hier greift der volle Pflichtenkatalog — das ist die Klasse, um die es
          2026 geht.
        </p>
        <SubHeading>Begrenztes Risiko (Transparenz)</SubHeading>
        <p>
          Etwa Chatbots oder KI-erzeugte Inhalte. Kernpflicht ist Transparenz: Nutzer müssen wissen,
          dass sie mit einer KI interagieren oder dass Inhalte KI-generiert sind.
        </p>
        <SubHeading>Minimales Risiko</SubHeading>
        <p>
          Der Großteil heutiger Anwendungen. Weitgehend frei von neuen Pflichten — freiwillige
          Verhaltenskodizes bleiben möglich.
        </p>
        <p>
          Entscheidend: Dieselbe Technik kann je nach Einsatzzweck in unterschiedliche Klassen fallen.
          Nicht das Modell bestimmt die Einstufung, sondern der konkrete Anwendungsfall.
        </p>
      </Section>

      <Section heading="Die Pflichten für Hochrisiko-Systeme">
        <p>
          Fällt eine Anwendung in die Hochrisiko-Klasse, verlangt die Verordnung ein ganzes Bündel an
          Maßnahmen. Verkürzt gesagt geht es darum, das System über seinen gesamten Lebenszyklus
          beherrschbar und nachweisbar zu machen:
        </p>
        <Bullets
          items={[
            "Risikomanagement-System über den gesamten Lebenszyklus — kontinuierlich, nicht als einmalige Prüfung.",
            "Daten-Governance: Qualität, Relevanz und Repräsentativität der verwendeten Daten.",
            "Technische Dokumentation, die den Nachweis der Konformität ermöglicht.",
            "Automatische Protokollierung (Logging) der Ereignisse während des Betriebs — die Basis der Rückverfolgbarkeit.",
            "Transparenz und Informationsbereitstellung, damit Betreiber das System sachgerecht nutzen können.",
            "Wirksame menschliche Aufsicht — der Mensch muss eingreifen können.",
            "Angemessene Genauigkeit, Robustheit und Cybersicherheit.",
          ]}
        />
        <p>
          Diese Anforderungen lassen sich nicht nachträglich „aufkleben“. Sie setzen voraus, dass Sie
          Einblick in Ihr System haben — genau das, was bei einem geschlossenen Dienst Dritter oft
          fehlt.
        </p>
      </Section>

      <Section heading="Anbieter oder Betreiber — wer haftet wofür">
        <p>
          Die Verordnung unterscheidet Rollen. Ein häufiger Irrtum ist, die Verantwortung liege
          allein beim Anbieter des Modells:
        </p>
        <Bullets
          items={[
            "Anbieter (Provider) tragen die Hauptlast: Konformitätsbewertung, technische Dokumentation, Konformitätskennzeichnung.",
            "Betreiber (Deployer) — also Sie, wenn Sie KI produktiv einsetzen — haben eigene Pflichten: Nutzung gemäß Anleitung, Sicherstellung menschlicher Aufsicht, Überwachung des Betriebs und die Aufbewahrung der vom System erzeugten Protokolle.",
          ]}
        />
        <p>
          Wer ein Hochrisiko-System betreibt, kann sich also nicht vollständig auf den Anbieter
          verlassen — insbesondere die Protokoll- und Aufsichtspflichten liegen bei Ihnen. Und die
          erfüllt nur, wer die Protokolle auch besitzt.
        </p>
      </Section>

      <Section heading="Der Sanktionsrahmen">
        <p>
          Die Bußgelder sind gestaffelt und orientieren sich am jeweils höheren Wert aus Festbetrag
          und Umsatzanteil:
        </p>
        <Bullets
          items={[
            "Bis zu 35 Mio. € oder 7 % des weltweiten Jahresumsatzes — bei Verstößen gegen die verbotenen Praktiken.",
            "Bis zu 15 Mio. € oder 3 % — bei Verstößen gegen die sonstigen Pflichten (u. a. für Hochrisiko-Systeme).",
            "Bis zu 7,5 Mio. € oder 1 % — bei falschen oder unvollständigen Angaben gegenüber Behörden.",
          ]}
        />
        <p>
          Für kleinere Unternehmen gelten Obergrenzen, die dies berücksichtigen. Der Punkt bleibt: Die
          Größenordnung ist so gewählt, dass Nicht-Konformität ein Vorstandsthema wird, kein
          IT-Detail.
        </p>
      </Section>

      <PullQuote>
        Der Unterschied zwischen einer Demo und einem System, das eine Prüfung besteht, ist nicht das
        Modell. Es ist die Betriebsebene darum herum — Zugriff, Protokoll, Kontrolle.
      </PullQuote>

      <Section heading="Warum Cloud-KI hier zum Problem wird">
        <p>
          Die Verordnung verlangt Nachvollziehbarkeit: Wer hat wann welches Modell in welcher Version
          genutzt, unter welcher Aufsicht? Bei öffentlichen Cloud-KI-Diensten stoßen Sie in genau
          diese Fragen oft an eine Wand:
        </p>
        <Bullets
          items={[
            "Der Audit-Trail endet an der Systemgrenze des Anbieters — was dahinter passiert, sehen Sie nicht.",
            "Modell-Versionen können sich ändern, ohne dass Sie es steuern oder lückenlos dokumentieren können.",
            "Menschliche Aufsicht und Eingriffsmöglichkeiten sind durch das Produkt des Anbieters vorgegeben, nicht durch Sie.",
            "Datenhoheit: Besonders schützenswerte Daten sollen den EU-Rechtsraum nicht verlassen — ein Anbieter außerhalb dieser Rechtsordnung kann das nicht garantieren.",
          ]}
        />
        <p>
          Keine dieser Fragen ist unlösbar — aber sie sind deutlich leichter zu beantworten, wenn die
          Infrastruktur Ihnen gehört.
        </p>
      </Section>

      <Section heading="Was Souveränität konkret liefert">
        <p>
          On-Premise-Betrieb ist kein Selbstzweck — er liefert die Nachweise, die eine Prüfung
          verlangt, weil alles im eigenen Haus bleibt:
        </p>
        <CardGrid
          items={[
            { t: "Lückenloser Audit-Trail", d: "Jede Inferenz-Anfrage nachvollziehbar — die Grundlage jeder Dokumentation und Meldung." },
            { t: "Modell-Herkunft & Versionen", d: "Welches Modell, welche Version, welche Freigabe — jederzeit belegbar, weil Sie die Registry kontrollieren." },
            { t: "Rollen & Rechte (RBAC)", d: "Zugriff serverseitig durchgesetzt, nicht nur in der Oberfläche — die Basis für Aufsicht und Governance." },
            { t: "Datenresidenz", d: "Daten verlassen Ihre Rechtshoheit nie — kein Drittstaaten-Transfer, kein fremder Auftragsverarbeiter für die Inferenz." },
          ]}
        />
      </Section>

      <Section heading="Ihre Checkliste bis zur Frist">
        <Bullets
          items={[
            "Inventar erstellen: Welche KI-Systeme sind im Einsatz — und welche fallen in den Hochrisiko-Bereich?",
            "Rollen klären: Sind Sie bei einem System Anbieter, Betreiber oder beides? Welche Pflichten folgen daraus?",
            "Datenflüsse prüfen: Welche Daten verlassen bei Cloud-KI die eigene Rechtshoheit?",
            "Nachvollziehbarkeit sicherstellen: Gibt es einen lückenlosen Audit-Trail je Anfrage — und besitzen Sie ihn?",
            "Menschliche Aufsicht dokumentieren: Wer kann eingreifen, wie, und ist das belegt?",
            "Modell-Herkunft festhalten: Welche Modelle in welcher Version, mit welcher Freigabe?",
            "Governance verankern: Rollen, Rechte und Verantwortlichkeiten schriftlich fixieren — vor der Frist, nicht danach.",
          ]}
        />
      </Section>

      <div className="rounded-lg border border-stone-200 bg-stone-100 p-6">
        <p className="text-md leading-relaxed text-ink-800">
          Ob und wie der EU AI Act Sie betrifft, können Sie in fünf Fragen einordnen — zusammen mit
          NIS2 und DSGVO, ohne Anmeldung.
        </p>
        <a
          href="/check"
          className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-azul-600 hover:text-azul-700"
        >
          Zum Compliance-Self-Check →
        </a>
      </div>

      <Note>
        Hinweis: Dieser Beitrag gibt den Stand allgemein verständlich wieder und ist keine
        Rechtsberatung. Konkrete Fristen, Einstufungen und Pflichten hängen vom Einzelfall ab und
        sollten mit fachkundiger Beratung geprüft werden.
      </Note>
    </ArticleLayout>
  );
}
