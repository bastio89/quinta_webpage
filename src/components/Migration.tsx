import { Check } from "lucide-react";

export function Migration() {
  return (
    <section className="border-y border-mist-300 bg-mist-100 py-24 sm:py-32">
      <div className="container-quinta grid items-center gap-14 lg:grid-cols-2">
        <div>
          <p className="kicker text-sovereign-600">Migration</p>
          <h2 className="mt-4 text-balance text-3xl font-semibold tracking-[-0.02em] text-ink-950 sm:text-4xl">
            Zwei geänderte Zeilen.
            <br />
            Mehr ist es nicht.
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-mist-700">
            Jede Anwendung, die heute die OpenAI-API nutzt, funktioniert mit Quinta —
            ohne Code-Umbau. Nur <strong className="text-ink-900">Adresse</strong> und{" "}
            <strong className="text-ink-900">Schlüssel</strong> zeigen künftig auf Ihre
            eigene Infrastruktur statt auf die Cloud.
          </p>
          <ul className="mt-6 space-y-3">
            {[
              "Bestehende SDKs (Python, Node, LangChain, …) bleiben unverändert",
              "Chat, Embeddings, Reranking, Audio-Transkription, Responses-API",
              "Kein Vendor-Lock-in: Modelle & Hardware frei wählbar",
            ].map((text) => (
              <li key={text} className="flex items-start gap-2.5 text-sm text-ink-800">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-sovereign-600" strokeWidth={2.5} />
                {text}
              </li>
            ))}
          </ul>
        </div>

        <div className="overflow-hidden rounded-xl border border-ink-800 bg-ink-950 shadow-2xl shadow-ink-900/20">
          <div className="flex border-b border-white/10">
            <div className="flex-1 border-r border-white/10 px-4 py-2.5 font-mono text-xs text-mist-500">vorher.py</div>
            <div className="flex-1 px-4 py-2.5 font-mono text-xs text-sovereign-300">nachher.py</div>
          </div>
          <div className="grid grid-cols-1 divide-y divide-white/10 font-mono text-[12.5px] leading-relaxed sm:grid-cols-2 sm:divide-x sm:divide-y-0">
            <pre className="overflow-x-auto px-4 py-5 text-mist-300">
{`client = OpenAI(
  base_url=
   "https://api.openai.com/v1",
  api_key=
   "sk-openai-..."
)`}
            </pre>
            <pre className="overflow-x-auto px-4 py-5 text-mist-100">
{`client = OpenAI(
  base_url=
   "https://api.`}<span className="text-gold-300">firma</span>{`.de/v1",
  api_key=
   "`}<span className="text-gold-300">sk_quinta_...</span>{`"
)`}
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}
