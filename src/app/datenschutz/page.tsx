import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = { title: "Datenschutz" };

export default function DatenschutzPage() {
  return (
    <>
      <Navbar />
      <main id="inhalt" tabIndex={-1} className="bg-stone-50 pb-24 pt-20">
        <div className="container-quinta max-w-2xl">
          <h1 className="text-display-sm font-semibold text-ink-900 sm:text-display-md">Datenschutzerklärung</h1>
          <p className="mt-2 text-sm text-ink-500">Informationen zur Verarbeitung Ihrer Daten</p>

          <div className="mt-10 space-y-10 text-sm leading-relaxed text-ink-700">
            <div>
              <h2 className="text-lg font-semibold text-ink-950">1. Datenschutz auf einen Blick</h2>
              <h3 className="mt-4 text-base font-semibold text-ink-900">Allgemeine Hinweise</h3>
              <p className="mt-2">
                Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren
                personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene
                Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
              </p>
              <h3 className="mt-4 text-base font-semibold text-ink-900">Datenerfassung auf dieser Website</h3>
              <p className="mt-2">
                <strong className="text-ink-900">Wer ist verantwortlich für die Datenerfassung auf dieser Website?</strong>
                <br />
                Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen
                Kontaktdaten können Sie dem Impressum dieser Website entnehmen.
              </p>
              <p className="mt-2">
                <strong className="text-ink-900">Wie erfassen wir Ihre Daten?</strong>
                <br />
                Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen — z. B.
                über unser Kontaktformular oder eine Demo-Anfrage per E-Mail. Andere Daten werden
                automatisch beim Besuch der Website durch unsere IT-Systeme erfasst (vor allem
                technische Daten wie Browser, Betriebssystem oder Uhrzeit des Seitenaufrufs).
              </p>
              <p className="mt-2">
                <strong className="text-ink-900">Wofür nutzen wir Ihre Daten?</strong>
                <br />
                Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu
                gewährleisten. Andere Daten können zur Analyse Ihres Nutzerverhaltens verwendet
                werden.
              </p>
              <p className="mt-2">
                <strong className="text-ink-900">Welche Rechte haben Sie bezüglich Ihrer Daten?</strong>
                <br />
                Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und
                Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben ausserdem
                ein Recht, die Berichtigung oder Löschung dieser Daten zu verlangen.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-ink-950">2. Hosting</h2>
              <h3 className="mt-4 text-base font-semibold text-ink-900">Externes Hosting</h3>
              <p className="mt-2">
                Diese Website wird extern gehostet. Die personenbezogenen Daten, die auf dieser
                Website erfasst werden, werden auf den Servern des Hosters gespeichert. Hierbei kann
                es sich v. a. um IP-Adressen, Kontaktanfragen, Meta- und Kommunikationsdaten,
                Vertragsdaten, Kontaktdaten, Namen, Websitezugriffe und sonstige Daten handeln.
              </p>
              <p className="mt-2">
                Das externe Hosting erfolgt zum Zwecke der Vertragserfüllung gegenüber unseren
                potenziellen und bestehenden Kunden (Art. 6 Abs. 1 lit. b DSGVO; Art. 31 DSG) und im
                Interesse einer sicheren, schnellen und effizienten Bereitstellung unseres
                Online-Angebots durch einen professionellen Anbieter (Art. 6 Abs. 1 lit. f DSGVO;
                Art. 31 Abs. 1 DSG).
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-ink-950">
                3. Allgemeine Hinweise und Pflichtinformationen
              </h2>
              <h3 className="mt-4 text-base font-semibold text-ink-900">Datenschutz</h3>
              <p className="mt-2">
                Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst.
                Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend den
                gesetzlichen Datenschutzvorschriften — insbesondere der EU-Datenschutz-Grundverordnung
                (DSGVO) sowie dem Schweizer Bundesgesetz über den Datenschutz (DSG) — sowie dieser
                Datenschutzerklärung.
              </p>
              <p className="mt-2">
                Wir weisen darauf hin, dass die Datenübertragung im Internet (z. B. bei der
                Kommunikation per E-Mail) Sicherheitslücken aufweisen kann. Ein lückenloser Schutz
                der Daten vor dem Zugriff durch Dritte ist nicht möglich.
              </p>
              <h3 className="mt-4 text-base font-semibold text-ink-900">Hinweis zur verantwortlichen Stelle</h3>
              <p className="mt-2">
                Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:
                <br />
                twenty5ai
                <br />
                Sebastian Oczachowski
                <br />
                Risistrasse 19
                <br />
                5737 Menziken, Schweiz
                <br />
                E-Mail:{" "}
                <a href="mailto:hello@twenty5ai.com" className="text-azul-700 underline underline-offset-2">
                  hello@twenty5ai.com
                </a>
              </p>
              <h3 className="mt-4 text-base font-semibold text-ink-900">Speicherdauer</h3>
              <p className="mt-2">
                Soweit innerhalb dieser Datenschutzerklärung keine speziellere Speicherdauer genannt
                wurde, verbleiben Ihre personenbezogenen Daten bei uns, bis der Zweck für die
                Datenverarbeitung entfällt.
              </p>
              <h3 className="mt-4 text-base font-semibold text-ink-900">Widerruf Ihrer Einwilligung</h3>
              <p className="mt-2">
                Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen Einwilligung
                möglich. Sie können eine bereits erteilte Einwilligung jederzeit widerrufen. Die
                Rechtmässigkeit der bis zum Widerruf erfolgten Datenverarbeitung bleibt vom Widerruf
                unberührt.
              </p>
              <h3 className="mt-4 text-base font-semibold text-ink-900">
                Beschwerderecht bei der zuständigen Aufsichtsbehörde
              </h3>
              <p className="mt-2">
                Im Falle von Verstössen gegen die DSGVO oder das Schweizer Datenschutzgesetz (DSG)
                steht den Betroffenen ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu —
                in der Schweiz beim Eidgenössischen Datenschutz- und Öffentlichkeitsbeauftragten
                (EDÖB), innerhalb der EU insbesondere in dem Mitgliedstaat ihres gewöhnlichen
                Aufenthalts, ihres Arbeitsplatzes oder des Orts des mutmasslichen Verstosses.
              </p>
              <h3 className="mt-4 text-base font-semibold text-ink-900">Recht auf Datenübertragbarkeit</h3>
              <p className="mt-2">
                Sie haben das Recht, Daten, die wir auf Grundlage Ihrer Einwilligung oder in
                Erfüllung eines Vertrags automatisiert verarbeiten, an sich oder an einen Dritten in
                einem gängigen, maschinenlesbaren Format aushändigen zu lassen.
              </p>
              <h3 className="mt-4 text-base font-semibold text-ink-900">Auskunft, Löschung und Berichtigung</h3>
              <p className="mt-2">
                Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit das Recht auf
                unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten, deren
                Herkunft und Empfänger und den Zweck der Datenverarbeitung und ggf. ein Recht auf
                Berichtigung oder Löschung dieser Daten.
              </p>
              <h3 className="mt-4 text-base font-semibold text-ink-900">Recht auf Einschränkung der Verarbeitung</h3>
              <p className="mt-2">
                Sie haben das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen
                Daten zu verlangen. Das Recht besteht u. a., wenn Sie die Richtigkeit Ihrer bei uns
                gespeicherten personenbezogenen Daten bestreiten, die Verarbeitung unrechtmässig
                geschah/geschieht, wir Ihre Daten nicht mehr benötigen, Sie sie jedoch zur Ausübung
                von Rechtsansprüchen benötigen, oder wenn Sie einen Widerspruch nach Art. 21 Abs. 1
                DSGVO bzw. den entsprechenden Bestimmungen des Schweizer DSG eingelegt haben.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-ink-950">4. Datenerfassung auf dieser Website</h2>
              <h3 className="mt-4 text-base font-semibold text-ink-900">Kontaktformular / Demo-Anfrage</h3>
              <p className="mt-2">
                Wenn Sie uns per Kontaktformular oder E-Mail Anfragen zukommen lassen, werden Ihre
                Angaben inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der
                Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben
                wir nicht ohne Ihre Einwilligung weiter.
              </p>
              <p className="mt-2">
                Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO
                sowie Art. 31 DSG, sofern Ihre Anfrage mit der Erfüllung eines Vertrags
                zusammenhängt oder zur Durchführung vorvertraglicher Massnahmen erforderlich ist.
              </p>
              <h3 className="mt-4 text-base font-semibold text-ink-900">Anfrage per E-Mail oder Telefon</h3>
              <p className="mt-2">
                Wenn Sie uns per E-Mail oder Telefon kontaktieren, wird Ihre Anfrage inklusive aller
                daraus hervorgehenden personenbezogenen Daten zum Zwecke der Bearbeitung Ihres
                Anliegens bei uns gespeichert und verarbeitet. Diese Daten verbleiben bei uns, bis
                Sie uns zur Löschung auffordern, Ihre Einwilligung widerrufen oder der Zweck für die
                Datenspeicherung entfällt.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-ink-950">
                5. Soziale Netzwerke und Drittanbieter-Integrationen
              </h2>
              <h3 className="mt-4 text-base font-semibold text-ink-900">LinkedIn</h3>
              <p className="mt-2">
                Wir unterhalten eine Unternehmensseite auf LinkedIn (LinkedIn Ireland Unlimited
                Company, Wilton Place, Dublin 2, Irland). Wenn Sie unsere LinkedIn-Unternehmensseite
                besuchen, verarbeitet LinkedIn als gemeinsamer Verantwortlicher personenbezogene
                Daten gemäss der{" "}
                <a
                  href="https://www.linkedin.com/legal/privacy-policy"
                  className="text-azul-700 underline underline-offset-2"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn-Datenschutzrichtlinie
                </a>
                . Wir haben keinen Einfluss auf Art und Umfang der dabei durch LinkedIn
                verarbeiteten Daten.
              </p>
              <p className="mt-2">
                Die Nutzung von LinkedIn erfolgt im Interesse einer angemessenen Darstellung unseres
                Unternehmens sowie der Kommunikation mit Interessenten und Kunden (Art. 6 Abs. 1
                lit. f DSGVO; Art. 31 Abs. 1 DSG).
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-ink-950">6. SSL- bzw. TLS-Verschlüsselung</h2>
              <p className="mt-2">
                Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung
                vertraulicher Inhalte eine SSL- bzw. TLS-Verschlüsselung. Eine verschlüsselte
                Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von „http://" auf
                „https://" wechselt und an dem Schloss-Symbol in Ihrer Browserzeile.
              </p>
            </div>

            <p className="text-xs text-ink-500">
              Stand: März 2026 ·{" "}
              <Link href="/" className="text-azul-700 underline underline-offset-2">
                Zurück zur Startseite
              </Link>
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
