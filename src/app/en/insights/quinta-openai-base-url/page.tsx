import type { Metadata } from "next";
import { ArticleLayout, Lead, Section, Note, Bullets } from "@/components/ArticleLayout";
import { CodeTabs } from "@/components/CodeTabs";
import { INSIGHTS_EN } from "@/lib/insights";

const PATH = "/en/insights/quinta-openai-base-url";
const meta = INSIGHTS_EN.find((i) => i.href === PATH)!;

export const metadata: Metadata = {
  title: meta.title,
  description: meta.excerpt,
  alternates: {
    canonical: PATH,
    languages: { de: "/insights/quinta-openai-base-url", en: PATH },
  },
};

const BASE = "https://quinta.your-domain.example/v1";

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
    messages=[{"role": "user", "content": "Hello Quinta!"}],
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
  messages: [{ role: "user", content: "Hello Quinta!" }],
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
    "messages": [{"role": "user", "content": "Hello Quinta!"}]
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
print(llm.invoke("Hello Quinta!").content)`,
  },
];

const ENV_TABS = [
  {
    label: ".env / shell",
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
      lang="en"
      category={meta.category}
      title={meta.title}
      date={meta.date}
      readingMinutes={meta.readingMinutes}
      path={PATH}
      description={meta.excerpt}
      cta={{
        title: "We'll connect your applications with you.",
        text: "In the demo we switch a first application to your Quinta instance together — from the base_url to the first production response.",
      }}
    >
      <Lead>
        Quinta speaks the same language as the OpenAI API. That means you don't have to rewrite your
        applications to move from a cloud service to your own sovereign AI. It's enough to change one
        setting — the <strong>base_url</strong>.
      </Lead>

      <Section heading="The principle: only the address changes">
        <p>
          Every OpenAI-compatible client sends its requests to a base_url. By default that points to
          OpenAI's servers. Point the base_url at your Quinta instance instead, and the same requests
          go to your own infrastructure — answered there by the models you run on your hardware.
        </p>
        <p>In concrete terms you change just two values:</p>
        <Bullets
          items={[
            "the base_url — pointing to your Quinta instance's endpoint (ending in /v1),",
            "the API key — issued by your Quinta dashboard, not OpenAI's.",
          ]}
        />
        <p>
          The model name comes from your Quinta catalogue. Otherwise your code stays unchanged — all
          calls, libraries and tools keep working.
        </p>
      </Section>

      <Note>
        To be clear: you are not routing your OpenAI traffic „through“ Quinta. You replace the
        endpoint — requests go to Quinta instead of OpenAI and are answered by your local models. Not
        a single byte leaves the building.
      </Note>

      <Section heading="Where to find the base_url and key">
        <p>
          Both values are in your Quinta dashboard. The endpoint URL has the form
          <code> https://quinta.your-domain.example/v1</code> (your actual domain); the API key is
          issued per user or application and can be revoked there too.
        </p>
      </Section>

      <Section heading="Switched in a few lines">
        <p>
          Pick your language or framework. It's the same change every time — point the base_url and
          key at Quinta:
        </p>
        <CodeTabs tabs={SETUP_TABS} lang="en" />
      </Section>

      <Section heading="No code change: via environment variables">
        <p>
          If you'd rather not touch the code at all: the official OpenAI libraries (Python and Node)
          read the base_url and key automatically from environment variables. Set them, and your
          existing application talks to Quinta — without changing a line of code.
        </p>
        <CodeTabs tabs={ENV_TABS} lang="en" />
        <p>
          The exact variable name can differ by SDK; the official OpenAI libraries use{" "}
          <code>OPENAI_BASE_URL</code> and <code>OPENAI_API_KEY</code>.
        </p>
      </Section>

      <Section heading="Check that it works">
        <p>
          A quick test: query the available models. If a response comes back from your Quinta
          instance, the switch was successful.
        </p>
        <CodeTabs tabs={VERIFY_TABS} lang="en" />
      </Section>

      <Section heading="What this means for your data">
        <p>
          From the moment the base_url points to Quinta, your prompts and the responses no longer
          leave your infrastructure. An external cloud call becomes a request that stays entirely
          under your control — the basis for GDPR, the EU AI Act and NIS2. Same API, same tools, but
          your data stays with you.
        </p>
      </Section>

      <Note>
        The exact values — endpoint URL, API key and the available model names — are in your Quinta
        dashboard. Our team supports you during rollout.
      </Note>
    </ArticleLayout>
  );
}
