import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main className="container-quinta flex min-h-[60vh] flex-col items-center justify-center py-24 text-center">
        <div className="font-mono text-sm uppercase tracking-[0.08em] text-azul-600">Fehler 404</div>
        <h1 className="mt-4 text-display-md font-semibold text-ink-900 sm:text-display-lg">
          Diese Seite ist nicht zu Hause.
        </h1>
        <p className="mt-5 max-w-md text-lg leading-relaxed text-ink-700">
          Die Adresse existiert nicht (mehr). Ihre Daten sind sicher — nur diese Seite haben wir
          nicht gefunden.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link href="/" className="btn btn-primary">
            Zur Startseite
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link href="/vergleich" className="btn btn-secondary">
            Zum Vergleich
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
