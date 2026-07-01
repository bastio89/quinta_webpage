import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = { title: "AGB" };

export default function AgbPage() {
  return (
    <>
      <Navbar />
      <main className="bg-mist-50 pb-24 pt-40">
        <div className="container-quinta max-w-2xl">
          <h1 className="text-3xl font-semibold tracking-[-0.02em] text-ink-950">
            Allgemeine Geschäftsbedingungen (AGB)
          </h1>
          <p className="mt-2 text-sm text-mist-600">
            twenty5ai, Sebastian Oczachowski, Risistrasse 19, 5737 Menziken, Schweiz
          </p>

          <div className="mt-10 space-y-8 text-sm leading-relaxed text-mist-700">
            <div>
              <h2 className="text-base font-semibold text-ink-950">1. Geltungsbereich</h2>
              <p className="mt-2">
                Diese Allgemeinen Geschäftsbedingungen (AGB) gelten für alle Verträge zwischen
                twenty5ai, Sebastian Oczachowski (nachfolgend „twenty5ai") und seinen Kunden über
                die Lieferung, Installation, Konfiguration und Wartung von Software — insbesondere
                der KI-Infrastrukturplattform Quinta — sowie über damit verbundene Beratungs- und
                Supportleistungen. Abweichende Bedingungen des Kunden werden nur anerkannt, wenn
                twenty5ai ihrer Geltung ausdrücklich schriftlich zugestimmt hat.
              </p>
            </div>

            <div>
              <h2 className="text-base font-semibold text-ink-950">2. Vertragsabschluss</h2>
              <p className="mt-2">
                Angebote von twenty5ai sind freibleibend. Ein Vertrag kommt erst durch die
                schriftliche Bestätigung von twenty5ai oder durch den Beginn der Leistungserbringung
                zustande. Mündliche Nebenabreden bedürfen zu ihrer Wirksamkeit der schriftlichen
                Bestätigung.
              </p>
            </div>

            <div>
              <h2 className="text-base font-semibold text-ink-950">3. Leistungsumfang</h2>
              <p className="mt-2">
                Umfang und Inhalt der zu erbringenden Leistungen ergeben sich aus der jeweiligen
                individuellen Offerte bzw. dem Leistungsverzeichnis. twenty5ai ist berechtigt,
                Leistungen ganz oder teilweise durch Dritte (Subunternehmer) erbringen zu lassen.
              </p>
            </div>

            <div>
              <h2 className="text-base font-semibold text-ink-950">4. Mitwirkungspflichten des Kunden</h2>
              <p className="mt-2">
                Der Kunde stellt twenty5ai die für die Leistungserbringung erforderlichen
                Informationen, Zugänge und Ressourcen (z. B. Hardware, Netzwerkzugang) rechtzeitig
                und vollständig zur Verfügung. Verzögerungen, die auf mangelnde Mitwirkung des Kunden
                zurückzuführen sind, gehen nicht zulasten von twenty5ai.
              </p>
            </div>

            <div>
              <h2 className="text-base font-semibold text-ink-950">5. Preise und Zahlungsbedingungen</h2>
              <p className="mt-2">
                Sofern nicht anders vereinbart, gelten die in der Offerte genannten Stundensätze von
                CHF 175.– (Standard) bzw. CHF 145.– (reduzierter Satz für Wartung/Support) zzgl. der
                gesetzlichen Mehrwertsteuer. Rechnungen sind, sofern nicht anders vereinbart,
                innerhalb von 15 Tagen ab Rechnungsdatum ohne Abzug zur Zahlung fällig.
              </p>
              <p className="mt-2">
                Bei Zahlungsverzug ist twenty5ai berechtigt, Verzugszinsen gemäss den gesetzlichen
                Bestimmungen zu verlangen und weitere Leistungen bis zur vollständigen Bezahlung
                offener Rechnungen zurückzuhalten.
              </p>
            </div>

            <div>
              <h2 className="text-base font-semibold text-ink-950">6. Lizenzen und Nutzungsrechte</h2>
              <p className="mt-2">
                Die Open-Core-Komponenten von Quinta werden unter der Apache-2.0-Lizenz
                bereitgestellt. Für Business- und Enterprise-Editionen räumt twenty5ai dem Kunden
                ein nicht ausschliessliches, nicht übertragbares Nutzungsrecht für die Dauer des
                jeweiligen Lizenzvertrags ein. Eine Weitergabe an Dritte bedarf der vorherigen
                schriftlichen Zustimmung von twenty5ai.
              </p>
            </div>

            <div>
              <h2 className="text-base font-semibold text-ink-950">7. Laufzeit und Kündigung</h2>
              <p className="mt-2">
                Verträge mit wiederkehrenden Leistungen (z. B. Business- und Enterprise-Lizenzen)
                laufen auf unbestimmte Zeit, sofern nicht anders vereinbart. Nach Ablauf des ersten
                Vertragsjahres kann der Vertrag von beiden Parteien mit einer Frist von 6 Monaten
                auf das Ende eines Kalenderjahres ordentlich gekündigt werden. Das Recht zur
                ausserordentlichen Kündigung aus wichtigem Grund bleibt vorbehalten.
              </p>
            </div>

            <div>
              <h2 className="text-base font-semibold text-ink-950">8. Gewährleistung</h2>
              <p className="mt-2">
                twenty5ai gewährleistet, dass die erbrachten Leistungen im Zeitpunkt der Übergabe
                den vereinbarten Spezifikationen entsprechen. Mängel sind unverzüglich schriftlich
                zu rügen. Im Übrigen richtet sich die Gewährleistung nach den Bestimmungen des
                Schweizerischen Obligationenrechts.
              </p>
            </div>

            <div>
              <h2 className="text-base font-semibold text-ink-950">9. Haftung</h2>
              <p className="mt-2">
                twenty5ai haftet nur für Schäden, die auf grober Fahrlässigkeit oder Vorsatz
                beruhen. Die Haftung für leichte Fahrlässigkeit sowie für indirekte Schäden,
                Folgeschäden und entgangenen Gewinn wird, soweit gesetzlich zulässig,
                ausgeschlossen. Die Haftung ist der Höhe nach auf die vom Kunden für die betroffene
                Leistung bezahlte Vergütung beschränkt.
              </p>
            </div>

            <div>
              <h2 className="text-base font-semibold text-ink-950">10. Datenschutz und Datensicherheit</h2>
              <p className="mt-2">
                Beide Parteien verpflichten sich zur Einhaltung der anwendbaren
                Datenschutzbestimmungen (insbesondere DSG und, soweit anwendbar, DSGVO). Nähere
                Angaben zur Datenverarbeitung im Rahmen dieser Website finden sich in der{" "}
                <Link href="/datenschutz" className="text-sovereign-700 underline underline-offset-2">
                  Datenschutzerklärung
                </Link>
                .
              </p>
            </div>

            <div>
              <h2 className="text-base font-semibold text-ink-950">11. Geheimhaltung</h2>
              <p className="mt-2">
                Die Parteien verpflichten sich, alle im Rahmen der Zusammenarbeit erlangten
                vertraulichen Informationen der jeweils anderen Partei geheim zu halten und nicht an
                Dritte weiterzugeben, soweit keine gesetzliche Offenlegungspflicht besteht.
              </p>
            </div>

            <div>
              <h2 className="text-base font-semibold text-ink-950">12. Höhere Gewalt</h2>
              <p className="mt-2">
                Keine Partei haftet für die Nichterfüllung ihrer Verpflichtungen, soweit diese auf
                Umständen höherer Gewalt beruht, die ausserhalb ihres Einflussbereichs liegen.
              </p>
            </div>

            <div>
              <h2 className="text-base font-semibold text-ink-950">13. Abtretung</h2>
              <p className="mt-2">
                Der Kunde darf Rechte und Pflichten aus dem Vertrag nur mit vorheriger schriftlicher
                Zustimmung von twenty5ai an Dritte übertragen.
              </p>
            </div>

            <div>
              <h2 className="text-base font-semibold text-ink-950">14. Änderungen der AGB</h2>
              <p className="mt-2">
                twenty5ai behält sich vor, diese AGB mit Wirkung für die Zukunft anzupassen. Über
                wesentliche Änderungen wird der Kunde rechtzeitig in geeigneter Form informiert.
              </p>
            </div>

            <div>
              <h2 className="text-base font-semibold text-ink-950">15. Teilnichtigkeit</h2>
              <p className="mt-2">
                Sollten einzelne Bestimmungen dieser AGB unwirksam sein oder werden, bleibt die
                Wirksamkeit der übrigen Bestimmungen davon unberührt.
              </p>
            </div>

            <div>
              <h2 className="text-base font-semibold text-ink-950">16. Referenzen</h2>
              <p className="mt-2">
                twenty5ai ist berechtigt, den Kunden als Referenz zu nennen, sofern der Kunde dem
                nicht ausdrücklich widerspricht.
              </p>
            </div>

            <div>
              <h2 className="text-base font-semibold text-ink-950">17. Anwendbares Recht und Gerichtsstand</h2>
              <p className="mt-2">
                Es gilt ausschliesslich Schweizer Recht unter Ausschluss des UN-Kaufrechts.
                Ausschliesslicher Gerichtsstand für sämtliche Streitigkeiten aus oder im
                Zusammenhang mit diesem Vertrag ist Menziken AG, Schweiz.
              </p>
            </div>

            <div>
              <h2 className="text-base font-semibold text-ink-950">18. Schlussbestimmungen</h2>
              <p className="mt-2">
                Diese AGB stellen zusammen mit der jeweiligen individuellen Offerte die vollständige
                Vereinbarung zwischen den Parteien dar. Änderungen und Ergänzungen bedürfen der
                Schriftform.
              </p>
              <p className="mt-4">
                Menziken, im März 2026
                <br />
                Sebastian Oczachowski, twenty5ai
              </p>
            </div>

            <p className="text-xs text-mist-500">
              Stand: März 2026 ·{" "}
              <Link href="/" className="text-sovereign-700 underline underline-offset-2">
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
