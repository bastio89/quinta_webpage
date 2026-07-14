import type { Metadata } from "next";
import { ArticleLayout, Lead, Section, Note, Bullets } from "@/components/ArticleLayout";
import { CodeTabs } from "@/components/CodeTabs";
import { INSIGHTS } from "@/lib/insights";

const PATH = "/insights/quinta-openai-base-url";
const meta = INSIGHTS.find((i) => i.href === PATH)!;

export const metadata: Metadata = {
  title: meta.title,
  description: meta.excerpt,
  alternates: {
    canonical: PATH,
    languages: { de: PATH, en: "/en/insights/quinta-openai-base-url" },
  },
};

const BASE = "https://quinta.ihre-domain.example/v1";

const SETUP_TABS = [
  {
    label: "Python",
    code: `from openai import OpenAI

client = OpenAI(
    base_url="${BASE}",
    api_key="QUINTA_API_KEY",
)

response = client.chat.completions.create(
    model="llama-3.1-8b-instruct",
    messages=[{"role": "user", "content": "Hallo Quinta!"}],
)
print(response.choices[0].message.content)`,
  },
  {
    label: "Node.js / TypeScript",
    code: `import OpenAI from "openai";

const client = new OpenAI({
  baseURL: "${BASE}",
  apiKey: process.env.QUINTA_API_KEY,
});

const response = await client.chat.completions.create({
  model: "llama-3.1-8b-instruct",
  messages: [{ role: "user", content: "Hallo Quinta!" }],
});
console.log(response.choices[0].message.content);`,
  },
  {
    label: "cURL",
    code: `curl ${BASE}/chat/completions \\
  -H "Authorization: Bearer $QUINTA_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "model": "llama-3.1-8b-instruct",
    "messages": [{"role": "user", "content": "Hallo Quinta!"}]
  }'`,
  },
  {
    label: "LangChain",
    code: `from langchain_openai import ChatOpenAI

llm = ChatOpenAI(
    base_url="${BASE}",
    api_key="QUINTA_API_KEY",
    model="llama-3.1-8b-instruct",
)
print(llm.invoke("Hallo Quinta!").content)`,
  },
];

const ENV_TABS = [
  {
    label: ".env / Shell",
    code: `export OPENAI_BASE_URL="${BASE}"
export OPENAI_API_KEY="QUINTA_API_KEY"`,
  },
];

const VERIFY_TABS = [
  {
    label: "cURL",
    code: `curl ${BASE}/models \\
  -H "Authorization: Bearer $QUINTA_API_KEY"`,
  },
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
        title: "Wir binden Ihre Anwendungen mit Ihnen an.",
        text: "In der Demo stellen wir gemeinsam eine erste Anwendung auf Ihre Quinta-Instanz um — von der base_url bis zur ersten produktiven Antwort.",
      }}
    >
      <Lead>
        Quinta spricht dieselbe Sprache wie die OpenAI-API. Das heißt: Sie müssen Ihre Anwendungen
        nicht neu schreiben, um von einem Cloud-Dienst auf Ihre eigene, souveräne KI umzustellen. Es
        genügt, eine einzige Einstellung zu ändern — die <strong>base_url</strong>.
      </Lead>

      <Section heading="Das Prinzip: nur die Adresse ändert sich">
        <p>
          Jeder OpenAI-kompatible Client schickt seine Anfragen an eine base_url. Standardmäßig zeigt
          diese auf die Server von OpenAI. Setzen Sie die base_url stattdessen auf Ihre
          Quinta-Instanz, gehen dieselben Anfragen an Ihre eigene Infrastruktur — und werden dort von
          den Modellen beantwortet, die Sie auf Ihrer Hardware betreiben.
        </p>
        <p>Konkret ändern Sie nur zwei Werte:</p>
        <Bullets
          items={[
            "die base_url — sie zeigt auf den Endpunkt Ihrer Quinta-Instanz (endet auf /v1),",
            "den API-Schlüssel — den Ihr Quinta-Dashboard ausstellt, nicht den von OpenAI.",
          ]}
        />
        <p>
          Der Modellname stammt aus Ihrem Quinta-Katalog. Sonst bleibt Ihr Code unverändert — alle
          Aufrufe, Bibliotheken und Werkzeuge funktionieren weiter.
        </p>
      </Section>

      <Note>
        Zur Klarstellung: Sie leiten damit nicht Ihren OpenAI-Verkehr „durch“ Quinta. Sie ersetzen
        den Endpunkt — die Anfragen gehen an Quinta statt an OpenAI und werden von Ihren lokalen
        Modellen beantwortet. Kein Byte verlässt das Haus.
      </Note>

      <Section heading="Wo Sie base_url und Schlüssel finden">
        <p>
          Beide Werte stehen in Ihrem Quinta-Dashboard. Die Endpunkt-URL hat die Form
          <code> https://quinta.ihre-domain.example/v1</code> (Ihre tatsächliche Domain), der
          API-Schlüssel wird pro Nutzer oder Anwendung vergeben und lässt sich dort auch wieder
          entziehen.
        </p>
      </Section>

      <Section heading="In wenigen Zeilen umgestellt">
        <p>
          Wählen Sie Ihre Sprache oder Ihr Framework. Es ist jeweils dieselbe Umstellung — base_url
          und Schlüssel auf Quinta zeigen lassen:
        </p>
        <CodeTabs tabs={SETUP_TABS} />
      </Section>

      <Section heading="Ohne Codeänderung: über Umgebungsvariablen">
        <p>
          Wenn Sie den Code gar nicht anfassen möchten: Die offiziellen OpenAI-Bibliotheken (Python
          und Node) lesen die base_url und den Schlüssel automatisch aus Umgebungsvariablen. Setzen
          Sie diese, und Ihre bestehende Anwendung spricht mit Quinta — ohne eine Zeile Code zu
          ändern.
        </p>
        <CodeTabs tabs={ENV_TABS} />
        <p>
          Der genaue Variablenname kann je nach SDK abweichen; die offiziellen OpenAI-Bibliotheken
          nutzen <code>OPENAI_BASE_URL</code> und <code>OPENAI_API_KEY</code>.
        </p>
      </Section>

      <Section heading="Prüfen, ob es läuft">
        <p>
          Ein schneller Test: Fragen Sie die verfügbaren Modelle ab. Kommt eine Antwort von Ihrer
          Quinta-Instanz zurück, ist die Umstellung erfolgreich.
        </p>
        <CodeTabs tabs={VERIFY_TABS} />
      </Section>

      <Section heading="Was das für Ihre Daten bedeutet">
        <p>
          Ab dem Moment, in dem die base_url auf Quinta zeigt, verlassen Ihre Prompts und die
          Antworten Ihre Infrastruktur nicht mehr. Aus einem externen Cloud-Aufruf wird eine
          Anfrage, die vollständig unter Ihrer Kontrolle bleibt — die Grundlage für DSGVO, EU AI Act
          und NIS2. Dieselbe API, dieselben Werkzeuge, aber Ihre Daten bleiben bei Ihnen.
        </p>
      </Section>

      <Note>
        Die genauen Werte — Endpunkt-URL, API-Schlüssel und die verfügbaren Modellnamen — finden Sie
        in Ihrem Quinta-Dashboard. Bei der Einführung unterstützt Sie unser Team.
      </Note>
    </ArticleLayout>
  );
}
