import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = { title: "Impressum" };

export default function ImpressumPage() {
  return (
    <>
      <Navbar />
      <main id="inhalt" tabIndex={-1} className="bg-stone-50 pb-24 pt-20">
        <div className="container-quinta max-w-2xl">
          <h1 className="text-display-sm font-semibold text-ink-900 sm:text-display-md">Impressum</h1>
          <p className="mt-2 text-sm text-ink-500">
            Angaben gemäss schweizerischem Obligationenrecht (OR) und § 5 TMG
          </p>

          <div className="mt-10 space-y-8 text-sm leading-relaxed text-ink-700">
            <div>
              <h2 className="text-base font-semibold text-ink-950">Anbieter</h2>
              <p className="mt-2">
                twenty5ai
                <br />
                Sebastian Oczachowski
                <br />
                Risistrasse 19
                <br />
                5737 Menziken
                <br />
                Schweiz
              </p>
            </div>

            <div>
              <h2 className="text-base font-semibold text-ink-950">Kontakt</h2>
              <p className="mt-2">
                Telefon:{" "}
                <a href="tel:+41762035747" className="text-azul-700 underline underline-offset-2">
                  +41 76 203 57 47
                </a>
                <br />
                E-Mail:{" "}
                <a href="mailto:hello@twenty5ai.com" className="text-azul-700 underline underline-offset-2">
                  hello@twenty5ai.com
                </a>
                <br />
                Website:{" "}
                <a
                  href="https://www.twenty5ai.com"
                  className="text-azul-700 underline underline-offset-2"
                  target="_blank"
                  rel="noreferrer"
                >
                  www.twenty5ai.com
                </a>
              </p>
            </div>

            <div>
              <h2 className="text-base font-semibold text-ink-950">Inhaber</h2>
              <p className="mt-2">
                Sebastian Oczachowski (Einzelunternehmen, nicht im Handelsregister eingetragen)
              </p>
            </div>

            <div>
              <h2 className="text-base font-semibold text-ink-950">Verantwortlich für den Inhalt</h2>
              <p className="mt-2">
                Verantwortlich für den Inhalt gemäss Art. 18 Abs. 2 DSG (Schweiz) bzw. § 18 Abs. 2
                MStV (Deutschland):
                <br />
                Sebastian Oczachowski, Risistrasse 19, 5737 Menziken
              </p>
            </div>

            <div>
              <h2 className="text-base font-semibold text-ink-950">Anwendbares Recht</h2>
              <p className="mt-2">
                Für Kunden mit Sitz in der Schweiz gelten die Bestimmungen des Schweizerischen
                Obligationenrechts (OR). Gerichtsstand ist Menziken AG, Schweiz.
              </p>
              <p className="mt-2">
                Für Kunden mit Sitz in Deutschland oder Österreich gelten ergänzend die
                Anforderungen des Telemediengesetzes (TMG) und des Medienstaatsvertrags (MStV).
                Es gilt schweizerisches Recht unter Ausschluss des UN-Kaufrechts.
              </p>
            </div>

            <div>
              <h2 className="text-base font-semibold text-ink-950">EU-Streitschlichtung</h2>
              <p className="mt-2">
                Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS)
                bereit:{" "}
                <a
                  href="https://ec.europa.eu/consumers/odr"
                  className="text-azul-700 underline underline-offset-2"
                  target="_blank"
                  rel="noreferrer"
                >
                  ec.europa.eu/consumers/odr
                </a>
                . Unsere E-Mail-Adresse finden Sie oben im Impressum.
              </p>
            </div>

            <div>
              <h2 className="text-base font-semibold text-ink-950">Verbraucherstreitbeilegung</h2>
              <p className="mt-2">
                Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
                Verbraucherschlichtungsstelle teilzunehmen.
              </p>
            </div>

            <div>
              <h2 className="text-base font-semibold text-ink-950">Haftung für Inhalte</h2>
              <p className="mt-2">
                Als Diensteanbieter sind wir gemäss den gesetzlichen Bestimmungen des
                schweizerischen Obligationenrechts (OR) sowie — soweit anwendbar — nach § 7 Abs. 1
                TMG für eigene Inhalte auf diesen Seiten verantwortlich. Eine Verpflichtung zur
                Überwachung übermittelter oder gespeicherter fremder Informationen besteht nicht.
              </p>
              <p className="mt-2">
                Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den
                allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist
                jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich.
                Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte
                umgehend entfernen.
              </p>
            </div>

            <div>
              <h2 className="text-base font-semibold text-ink-950">Haftung für Links</h2>
              <p className="mt-2">
                Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir
                keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine
                Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige
                Anbieter oder Betreiber der Seiten verantwortlich.
              </p>
              <p className="mt-2">
                Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne
                konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von
                Rechtsverletzungen werden wir derartige Links umgehend entfernen.
              </p>
            </div>

            <div>
              <h2 className="text-base font-semibold text-ink-950">Urheberrecht</h2>
              <p className="mt-2">
                Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten
                unterliegen dem anwendbaren Urheberrecht (URG in der Schweiz, UrhG in Deutschland
                und Österreich). Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der
                Verwertung ausserhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen
                Zustimmung des jeweiligen Autors bzw. Erstellers.
              </p>
              <p className="mt-2">
                Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die
                Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche
                gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam
                werden, bitten wir um einen entsprechenden Hinweis.
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
