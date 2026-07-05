export type GlossaryCategory = "regulation" | "architecture" | "economics" | "concept";

export type TermContent = {
  term: string;
  short: string; // Ein-Satz-Definition für die Übersicht
  body: string[]; // Absätze für die Detailseite
  related?: { label: string; href: string }[];
};

export type GlossaryEntry = {
  slug: string;
  category: GlossaryCategory;
  de: TermContent;
  en: TermContent;
};

export const CATEGORY_LABELS: Record<GlossaryCategory, { de: string; en: string }> = {
  regulation: { de: "Regulatorik", en: "Regulation" },
  architecture: { de: "Architektur", en: "Architecture" },
  economics: { de: "Wirtschaftlichkeit", en: "Economics" },
  concept: { de: "Grundbegriff", en: "Concept" },
};

export const GLOSSARY: GlossaryEntry[] = [
  {
    slug: "souveraene-ki",
    category: "concept",
    de: {
      term: "Souveräne KI",
      short:
        "KI, deren Daten, Modelle und Betrieb vollständig unter eigener Kontrolle bleiben — ohne Abhängigkeit von einem externen Anbieter.",
      body: [
        "Souveräne KI bedeutet, dass eine Organisation die volle Kontrolle über ihre KI behält: über die Daten, die verarbeitet werden, über die eingesetzten Modelle und über die Infrastruktur, auf der alles läuft. Kein Dritter kann auf die Daten zugreifen, den Dienst abschalten oder die Konditionen einseitig ändern.",
        "Der Gegenentwurf ist die Cloud-KI, bei der ein externer Anbieter Modelle, Betrieb und faktisch auch die Daten kontrolliert. Souveränität ist dabei kein Dogma, sondern eine bewusste Abwägung — besonders relevant, wenn personenbezogene oder geschäftskritische Daten im Spiel sind oder Regulatorik lückenlose Nachweise verlangt.",
        "Technisch wird Souveränität durch On-Premise-Betrieb erreicht: Die KI läuft auf eigener Hardware, die Daten verlassen die eigene Infrastruktur nicht. Genau hier setzt Quinta an — als Betriebsschicht, die aus eigener Hardware einen privaten, OpenAI-kompatiblen KI-Dienst macht.",
      ],
      related: [
        { label: "On-Premise-KI", href: "/glossar/on-premise-ki" },
        { label: "Datensouveränität", href: "/glossar/datensouveraenitaet" },
        { label: "DSGVO, Schrems II & CLOUD Act", href: "/insights/datensouveraenitaet-cloud-act" },
      ],
    },
    en: {
      term: "Sovereign AI",
      short:
        "AI whose data, models and operation stay fully under your own control — without dependence on an external provider.",
      body: [
        "Sovereign AI means an organisation retains full control over its AI: over the data it processes, over the models it runs, and over the infrastructure everything runs on. No third party can access the data, switch the service off, or change the terms unilaterally.",
        "The counter-model is cloud AI, where an external provider controls the models, the operation and effectively the data too. Sovereignty is not a dogma but a deliberate trade-off — especially relevant when personal or business-critical data is involved, or when regulation demands complete evidence.",
        "Technically, sovereignty is achieved through on-premise operation: the AI runs on your own hardware and the data never leaves your infrastructure. This is exactly where Quinta comes in — as an operating layer that turns your own hardware into a private, OpenAI-compatible AI service.",
      ],
      related: [
        { label: "On-premise AI", href: "/en/glossar/on-premise-ki" },
        { label: "Data sovereignty", href: "/en/glossar/datensouveraenitaet" },
        { label: "GDPR, Schrems II & CLOUD Act", href: "/en/insights/datensouveraenitaet-cloud-act" },
      ],
    },
  },
  {
    slug: "on-premise-ki",
    category: "concept",
    de: {
      term: "On-Premise-KI",
      short:
        "KI-Modelle, die auf der eigenen Hardware im eigenen Rechenzentrum laufen — statt als gemietete Cloud-API.",
      body: [
        "On-Premise-KI heißt, dass die Modelle auf Infrastruktur betrieben werden, die der Organisation gehört oder von ihr kontrolliert wird — im eigenen Rechenzentrum oder Serverraum. Anfragen verlassen das eigene Netz nicht.",
        "Der Unterschied zur Cloud liegt im Abrechnungs- und Kontrollmodell: On-Premise bedeutet einmalige Investition in Hardware plus laufenden Betrieb (CapEx), Cloud bedeutet nutzungsbasierte Miete (OpEx). Ab stetiger Last rechnet sich Eigenbetrieb häufig — und liefert nebenbei die Datensouveränität, die regulierte Branchen brauchen.",
        "Eine reine GPU im Serverraum ist aber noch keine betriebsfähige Plattform. Es fehlen Zugriffskontrolle, Orchestrierung, Modell-Lebenszyklus und Audit. Diese Betriebsschicht liefert Quinta.",
      ],
      related: [
        { label: "Souveräne KI", href: "/glossar/souveraene-ki" },
        { label: "On-Premise vs. Cloud: die Kostenrechnung", href: "/insights/on-premise-vs-cloud-kosten" },
        { label: "Kosten-Rechner", href: "/rechner" },
      ],
    },
    en: {
      term: "On-premise AI",
      short:
        "AI models that run on your own hardware in your own data centre — instead of as a rented cloud API.",
      body: [
        "On-premise AI means the models run on infrastructure the organisation owns or controls — in its own data centre or server room. Requests never leave the internal network.",
        "The difference from the cloud lies in the billing and control model: on-premise means a one-off investment in hardware plus running operation (CapEx), the cloud means usage-based rent (OpEx). From steady load, running it yourself often pays off — and delivers the data sovereignty regulated industries need as a by-product.",
        "But a bare GPU in the server room is not yet an operational platform. It lacks access control, orchestration, model lifecycle and audit. Quinta provides this operating layer.",
      ],
      related: [
        { label: "Sovereign AI", href: "/en/glossar/souveraene-ki" },
        { label: "On-premise vs. cloud: the cost calculation", href: "/en/insights/on-premise-vs-cloud-kosten" },
        { label: "Cost calculator", href: "/en/rechner" },
      ],
    },
  },
  {
    slug: "bounded-admission",
    category: "architecture",
    de: {
      term: "Bounded Admission",
      short:
        "Ein Prinzip, das nur so viele Anfragen zur gleichzeitigen Verarbeitung zulässt, wie das System sicher bewältigt — der Rest wartet geordnet statt abzustürzen.",
      body: [
        "Bounded Admission (begrenzte Zulassung) bezeichnet die kontrollierte Steuerung, wie viele Anfragen ein Inferenz-Server gleichzeitig annimmt. Statt jede eingehende Anfrage sofort in die Verarbeitung zu lassen, dosiert ein Gateway den Zufluss auf ein Maß, das die Hardware stabil hält.",
        "Der Effekt ist dramatisch: In Quintas Benchmark erreichte das Quinta-Gateway bei 512 gleichzeitigen Anfragen eine 18× höhere Erfolgsquote als vLLM pur — bei identischer Engine. Der Unterschied liegt nicht im Modell, sondern in der Warteschlange. Ohne Zulassungskontrolle kippt ein Server unter Last, weil er sich mit zu vielen parallelen Anfragen selbst blockiert.",
        "Bounded Admission ist damit kein Performance-Trick, sondern eine Frage der Betriebssicherheit: Ein System, das Überlast geordnet dosiert, bleibt vorhersehbar — statt genau dann auszufallen, wenn es am meisten gebraucht wird.",
      ],
      related: [
        { label: "Bounded Admission unter Last", href: "/insights/bounded-admission-last" },
        { label: "Quinta-Gateway", href: "/glossar/quinta-gateway" },
        { label: "Durchsatz", href: "/glossar/durchsatz" },
      ],
    },
    en: {
      term: "Bounded admission",
      short:
        "A principle that admits only as many requests for concurrent processing as the system can safely handle — the rest wait in an orderly queue instead of crashing.",
      body: [
        "Bounded admission describes the controlled steering of how many requests an inference server accepts at the same time. Instead of letting every incoming request into processing immediately, a gateway meters the inflow to a level that keeps the hardware stable.",
        "The effect is dramatic: in Quinta’s benchmark the Quinta gateway achieved an 18× higher success rate than plain vLLM at 512 concurrent requests — on the same engine. The difference is not the model, it is the queue. Without admission control a server buckles under load because it blocks itself with too many parallel requests.",
        "Bounded admission is therefore not a performance trick but a question of operational safety: a system that meters overload in an orderly way stays predictable — instead of failing exactly when it is needed most.",
      ],
      related: [
        { label: "Bounded admission under load", href: "/en/insights/bounded-admission-last" },
        { label: "Quinta gateway", href: "/en/glossar/quinta-gateway" },
        { label: "Throughput", href: "/en/glossar/durchsatz" },
      ],
    },
  },
  {
    slug: "quinta-gateway",
    category: "architecture",
    de: {
      term: "Quinta-Gateway",
      short:
        "Die Betriebsschicht vor der Inferenz-Engine: Sie steuert Zugriff, Warteschlange und Orchestrierung und macht aus einer nackten Engine einen belastbaren Dienst.",
      body: [
        "Das Quinta-Gateway sitzt zwischen den Anwendungen und der Inferenz-Engine (etwa vLLM). Es übernimmt genau die Aufgaben, die eine reine Engine nicht leistet: Zugriffskontrolle, Zulassungssteuerung (Bounded Admission), Orchestrierung mehrerer Knoten und die Protokollierung für Audit-Zwecke.",
        "Im Benchmark zeigt sich der Wert dieser Schicht: Bei 31.200 Anfragen und 512 gleichzeitigen Verbindungen erreichte das Quinta-Gateway eine 18× höhere Erfolgsquote als vLLM pur, bei einer Latenz von rund 56 ms — auf einer NVIDIA DGX Spark mit 128 GB. Die Engine war in beiden Fällen dieselbe; den Unterschied macht die Betriebsschicht.",
        "So wird aus einem Modell, das „im Prinzip läuft“, ein Dienst, der unter realer Last vorhersehbar bleibt — die Voraussetzung für den produktiven Einsatz in einer Organisation.",
      ],
      related: [
        { label: "Bounded Admission", href: "/glossar/bounded-admission" },
        { label: "vLLM", href: "/glossar/vllm" },
        { label: "Bounded Admission unter Last", href: "/insights/bounded-admission-last" },
      ],
    },
    en: {
      term: "Quinta gateway",
      short:
        "The operating layer in front of the inference engine: it steers access, queue and orchestration and turns a bare engine into a resilient service.",
      body: [
        "The Quinta gateway sits between the applications and the inference engine (such as vLLM). It takes on exactly the tasks a bare engine does not handle: access control, admission control (bounded admission), orchestration of multiple nodes and logging for audit purposes.",
        "The benchmark shows the value of this layer: across 31,200 requests and 512 concurrent connections the Quinta gateway achieved an 18× higher success rate than plain vLLM, at a latency of about 56 ms — on an NVIDIA DGX Spark with 128 GB. The engine was the same in both cases; the operating layer makes the difference.",
        "This turns a model that ‘runs in principle’ into a service that stays predictable under real load — the prerequisite for productive use in an organisation.",
      ],
      related: [
        { label: "Bounded admission", href: "/en/glossar/bounded-admission" },
        { label: "vLLM", href: "/en/glossar/vllm" },
        { label: "Bounded admission under load", href: "/en/insights/bounded-admission-last" },
      ],
    },
  },
  {
    slug: "vllm",
    category: "architecture",
    de: {
      term: "vLLM",
      short:
        "Eine quelloffene Hochleistungs-Engine, die große Sprachmodelle effizient ausführt — der Motor, nicht die Betriebsschicht.",
      body: [
        "vLLM ist eine weit verbreitete Open-Source-Inferenz-Engine für große Sprachmodelle. Ihr Kern ist effizientes Speicher- und Batch-Management, das viele Anfragen zugleich verarbeiten kann. Sie beantwortet die Frage „Wie führe ich ein Modell schnell aus?“.",
        "Was vLLM allein nicht beantwortet: Wer darf zugreifen? Was passiert bei Überlast? Wie werden mehrere Knoten orchestriert und Zugriffe protokolliert? Das sind Betriebsfragen — und genau dort setzt eine Schicht wie das Quinta-Gateway an.",
        "In Quintas Benchmark läuft in beiden Varianten dieselbe Engine. „vLLM pur“ steht dabei für den Betrieb ohne Zulassungssteuerung; der Vergleich zeigt, wie viel die Betriebsschicht darüber hinaus beiträgt.",
      ],
      related: [
        { label: "Quinta-Gateway", href: "/glossar/quinta-gateway" },
        { label: "Inferenz", href: "/glossar/inferenz" },
        { label: "Quinta im Vergleich", href: "/vergleich" },
      ],
    },
    en: {
      term: "vLLM",
      short:
        "An open-source high-performance engine that runs large language models efficiently — the motor, not the operating layer.",
      body: [
        "vLLM is a widely used open-source inference engine for large language models. At its core is efficient memory and batch management that can process many requests at once. It answers the question ‘how do I run a model fast?’.",
        "What vLLM alone does not answer: who is allowed to access it? What happens under overload? How are multiple nodes orchestrated and access logged? These are operational questions — and exactly where a layer like the Quinta gateway comes in.",
        "In Quinta’s benchmark the same engine runs in both variants. ‘Plain vLLM’ stands for operation without admission control; the comparison shows how much the operating layer adds on top.",
      ],
      related: [
        { label: "Quinta gateway", href: "/en/glossar/quinta-gateway" },
        { label: "Inference", href: "/en/glossar/inferenz" },
        { label: "Quinta compared", href: "/en/vergleich" },
      ],
    },
  },
  {
    slug: "inferenz",
    category: "concept",
    de: {
      term: "Inferenz",
      short:
        "Der Vorgang, bei dem ein trainiertes KI-Modell auf eine konkrete Anfrage antwortet — die eigentliche „Nutzung“ eines Modells.",
      body: [
        "Inferenz bezeichnet die Anwendung eines bereits trainierten Modells: Eine Anfrage geht hinein, das Modell berechnet eine Antwort. Im Gegensatz zum Training, das einmalig und sehr rechenintensiv ist, geschieht Inferenz millionenfach im laufenden Betrieb.",
        "Weil jede Nutzung Inferenz ist, bestimmt sie die laufenden Kosten und die Latenz eines KI-Dienstes. Bei Cloud-Anbietern wird Inferenz pro Token abgerechnet; im Eigenbetrieb bestimmt die Auslastung der Hardware den Preis pro Anfrage.",
        "Ein Inferenz-Server ist die Maschine, die diese Berechnungen ausführt — meist GPU-gestützt. Wie viele Anfragen er gleichzeitig stabil bewältigt, hängt weniger vom Modell als von der Betriebsschicht ab.",
      ],
      related: [
        { label: "Token", href: "/glossar/token" },
        { label: "Latenz", href: "/glossar/latenz" },
        { label: "vLLM", href: "/glossar/vllm" },
      ],
    },
    en: {
      term: "Inference",
      short:
        "The process in which a trained AI model responds to a concrete request — the actual ‘use’ of a model.",
      body: [
        "Inference denotes applying an already trained model: a request goes in, the model computes an answer. Unlike training, which is a one-off and very compute-intensive, inference happens millions of times in ongoing operation.",
        "Because every use is inference, it determines the running cost and the latency of an AI service. Cloud providers bill inference per token; when you run it yourself, hardware utilization determines the price per request.",
        "An inference server is the machine that performs these computations — usually GPU-backed. How many requests it handles stably at once depends less on the model than on the operating layer.",
      ],
      related: [
        { label: "Token", href: "/en/glossar/token" },
        { label: "Latency", href: "/en/glossar/latenz" },
        { label: "vLLM", href: "/en/glossar/vllm" },
      ],
    },
  },
  {
    slug: "token",
    category: "economics",
    de: {
      term: "Token",
      short:
        "Die kleinste Abrechnungs- und Verarbeitungseinheit eines Sprachmodells — grob ein Wortteil. Cloud-KI wird pro Token bezahlt.",
      body: [
        "Ein Token ist ein Textbaustein, den ein Sprachmodell verarbeitet — meist ein Wort, eine Silbe oder ein Satzzeichen. Als Faustregel entsprechen 1.000 Tokens etwa 750 Wörtern. Modelle rechnen und denken in Tokens, nicht in Wörtern.",
        "Für die Wirtschaftlichkeit ist der Token die entscheidende Größe: Cloud-Anbieter rechnen nutzungsbasiert je 1 Mio. Tokens ab, getrennt nach Eingabe (Input) und Ausgabe (Output). Günstige Modelle liegen im Bereich weniger Cent, leistungsstarke ein Vielfaches darüber.",
        "Diese Abrechnung macht Erfolg teuer: Je mehr ein Anwendungsfall genutzt wird, desto höher die Token-Rechnung. Im Eigenbetrieb entfällt diese nutzungsabhängige Kurve — dort zahlt man für Kapazität, nicht pro Token.",
      ],
      related: [
        { label: "Inferenz", href: "/glossar/inferenz" },
        { label: "On-Premise vs. Cloud: die Kostenrechnung", href: "/insights/on-premise-vs-cloud-kosten" },
        { label: "Kosten-Rechner", href: "/rechner" },
      ],
    },
    en: {
      term: "Token",
      short:
        "The smallest billing and processing unit of a language model — roughly a word fragment. Cloud AI is paid per token.",
      body: [
        "A token is a text building block a language model processes — usually a word, a syllable or a punctuation mark. As a rule of thumb, 1,000 tokens correspond to about 750 words. Models compute and ‘think’ in tokens, not words.",
        "For economics the token is the decisive measure: cloud providers bill usage-based per 1M tokens, split into input and output. Low-cost models sit in the range of a few cents, powerful ones several times higher.",
        "This billing makes success expensive: the more a use case is used, the higher the token bill. When you run it yourself this usage-dependent curve disappears — there you pay for capacity, not per token.",
      ],
      related: [
        { label: "Inference", href: "/en/glossar/inferenz" },
        { label: "On-premise vs. cloud: the cost calculation", href: "/en/insights/on-premise-vs-cloud-kosten" },
        { label: "Cost calculator", href: "/en/rechner" },
      ],
    },
  },
  {
    slug: "datensouveraenitaet",
    category: "regulation",
    de: {
      term: "Datensouveränität",
      short:
        "Die tatsächliche, durchsetzbare Kontrolle darüber, wer auf Daten zugreifen kann — nicht nur, wo sie liegen.",
      body: [
        "Datensouveränität bedeutet, dass eine Organisation nicht nur weiß, wo ihre Daten gespeichert sind, sondern durchsetzen kann, wer darauf zugreift. Der Speicherort allein genügt nicht: Entscheidend ist, welchem Rechtsraum und welchen Zugriffsrechten die Daten unterliegen.",
        "Das ist mehr als DSGVO-Konformität auf dem Papier. Ein europäisches Rechenzentrum eines US-Anbieters kann über den US CLOUD Act weiterhin US-Behördenzugriffen unterliegen — trotz „EU-Region“. Echte Souveränität heißt: Die Daten verlassen die eigene Kontrolle nie.",
        "On-Premise-Betrieb ist der technische Weg dorthin. Wenn die KI auf eigener Hardware läuft und Anfragen das eigene Netz nicht verlassen, gibt es keinen fremden Zugriffspunkt — die stärkste Ausgangslage für regulierte Daten.",
      ],
      related: [
        { label: "US CLOUD Act", href: "/glossar/us-cloud-act" },
        { label: "DSGVO, Schrems II & CLOUD Act", href: "/insights/datensouveraenitaet-cloud-act" },
        { label: "Souveräne KI", href: "/glossar/souveraene-ki" },
      ],
    },
    en: {
      term: "Data sovereignty",
      short:
        "The actual, enforceable control over who can access data — not just where it is stored.",
      body: [
        "Data sovereignty means an organisation not only knows where its data is stored but can enforce who accesses it. Location alone is not enough: what matters is which legal space and which access rights the data is subject to.",
        "This is more than GDPR compliance on paper. A European data centre run by a US provider can still be subject to US government access via the US CLOUD Act — despite an ‘EU region’. Real sovereignty means the data never leaves your own control.",
        "On-premise operation is the technical route there. When the AI runs on your own hardware and requests never leave your network, there is no external access point — the strongest starting position for regulated data.",
      ],
      related: [
        { label: "US CLOUD Act", href: "/en/glossar/us-cloud-act" },
        { label: "GDPR, Schrems II & CLOUD Act", href: "/en/insights/datensouveraenitaet-cloud-act" },
        { label: "Sovereign AI", href: "/en/glossar/souveraene-ki" },
      ],
    },
  },
  {
    slug: "eu-ai-act",
    category: "regulation",
    de: {
      term: "EU AI Act",
      short:
        "Die KI-Verordnung der EU, die KI-Systeme nach Risiko klassifiziert und für Hochrisiko-Anwendungen konkrete Pflichten festlegt.",
      body: [
        "Der EU AI Act ist die erste umfassende KI-Regulierung der Europäischen Union. Er ordnet KI-Systeme in Risikoklassen ein — von minimalem Risiko bis „verboten“ — und knüpft die Pflichten an diese Einstufung. Für Hochrisiko-Systeme gelten die strengsten Anforderungen.",
        "Eine zentrale Tranche der Pflichten für Hochrisiko-KI greift ab dem 2. August 2026. Dazu zählen Risikomanagement, technische Dokumentation, Protokollierung (Logging), menschliche Aufsicht und Transparenz. Als Hochrisiko gelten typischerweise Systeme, die über Menschen entscheiden — etwa bei Bewerbung, Kredit oder Zugang.",
        "Viele dieser Pflichten laufen auf Nachweisbarkeit hinaus: Man muss belegen können, wer wann welches Modell mit welchen Daten genutzt hat. Eine souveräne Betriebsschicht liefert genau diese Audit-Spur automatisch. (Keine Rechtsberatung.)",
      ],
      related: [
        { label: "Der EU AI Act und die Frist 2026", href: "/insights/eu-ai-act-frist-2026" },
        { label: "NIS2", href: "/glossar/nis2" },
        { label: "Compliance-Self-Check", href: "/check" },
      ],
    },
    en: {
      term: "EU AI Act",
      short:
        "The EU’s AI regulation that classifies AI systems by risk and sets concrete duties for high-risk applications.",
      body: [
        "The EU AI Act is the European Union’s first comprehensive AI regulation. It sorts AI systems into risk classes — from minimal risk to ‘prohibited’ — and ties the duties to that classification. High-risk systems face the strictest requirements.",
        "A central tranche of the duties for high-risk AI takes effect from 2 August 2026. These include risk management, technical documentation, logging, human oversight and transparency. High-risk typically covers systems that decide about people — such as in hiring, credit or access.",
        "Many of these duties come down to evidence: you must be able to show who used which model, when and with what data. A sovereign operating layer produces exactly this audit trail automatically. (Not legal advice.)",
      ],
      related: [
        { label: "The EU AI Act and the 2026 deadline", href: "/en/insights/eu-ai-act-frist-2026" },
        { label: "NIS2", href: "/en/glossar/nis2" },
        { label: "Compliance self-check", href: "/en/check" },
      ],
    },
  },
  {
    slug: "nis2",
    category: "regulation",
    de: {
      term: "NIS2",
      short:
        "Die EU-Richtlinie für Cybersicherheit, die Sicherheitspflichten auf viele Branchen ausweitet — mit Haftung der Geschäftsleitung.",
      body: [
        "NIS2 ist die überarbeitete EU-Richtlinie zur Netz- und Informationssicherheit. Sie erweitert den Kreis der betroffenen Organisationen deutlich: Neben „kritischen“ gelten nun auch viele „wichtige“ Einrichtungen quer durch Sektoren wie Energie, Gesundheit, Finanz, Verwaltung, digitale Dienste und Verkehr.",
        "Die Pflichten umfassen Risikomanagement, Meldewege für Vorfälle und technische Schutzmaßnahmen. Neu und folgenreich ist die persönliche Verantwortung der Geschäftsleitung: Sie haftet für die Umsetzung.",
        "Für den KI-Betrieb heißt das: Ein KI-System gehört zum Risikomanagement und muss abgesichert und nachvollziehbar betrieben werden. Wer KI in der Cloud eines Dritten betreibt, verlagert einen Teil dieses Risikos aus der eigenen Kontrolle. (Keine Rechtsberatung.)",
      ],
      related: [
        { label: "NIS2 und der KI-Betrieb", href: "/insights/nis2-ki-betrieb" },
        { label: "EU AI Act", href: "/glossar/eu-ai-act" },
        { label: "Compliance-Self-Check", href: "/check" },
      ],
    },
    en: {
      term: "NIS2",
      short:
        "The EU’s cybersecurity directive that extends security duties to many industries — with liability for management.",
      body: [
        "NIS2 is the revised EU directive on network and information security. It significantly widens the circle of affected organisations: alongside ‘critical’ ones, many ‘important’ entities across sectors such as energy, health, finance, administration, digital services and transport now fall in scope.",
        "The duties cover risk management, incident reporting channels and technical protective measures. New and consequential is the personal responsibility of management: it is liable for implementation.",
        "For running AI this means: an AI system is part of risk management and must be operated securely and traceably. Anyone running AI in a third party’s cloud shifts part of that risk out of their own control. (Not legal advice.)",
      ],
      related: [
        { label: "NIS2 and running AI", href: "/en/insights/nis2-ki-betrieb" },
        { label: "EU AI Act", href: "/en/glossar/eu-ai-act" },
        { label: "Compliance self-check", href: "/en/check" },
      ],
    },
  },
  {
    slug: "us-cloud-act",
    category: "regulation",
    de: {
      term: "US CLOUD Act",
      short:
        "Ein US-Gesetz, das US-Anbieter zur Herausgabe von Daten verpflichten kann — auch wenn diese in Europa gespeichert sind.",
      body: [
        "Der US CLOUD Act (Clarifying Lawful Overseas Use of Data Act) verpflichtet US-Unternehmen, auf Anordnung US-amerikanischer Behörden Daten herauszugeben, die sie kontrollieren — unabhängig davon, in welchem Land die Server stehen.",
        "Daraus folgt der zentrale Konflikt mit der DSGVO: Ein US-Anbieter, der Daten in einem europäischen Rechenzentrum speichert, kann trotzdem US-Zugriffsanordnungen unterliegen. Die „EU-Region“ verlagert den Speicherort, nicht die Rechtshoheit.",
        "Vermeiden lässt sich dieser Konflikt nur, indem Daten gar nicht erst in die Kontrolle eines dem CLOUD Act unterliegenden Anbieters gelangen — etwa durch On-Premise-Betrieb auf eigener Infrastruktur.",
      ],
      related: [
        { label: "Datensouveränität", href: "/glossar/datensouveraenitaet" },
        { label: "DSGVO, Schrems II & CLOUD Act", href: "/insights/datensouveraenitaet-cloud-act" },
      ],
    },
    en: {
      term: "US CLOUD Act",
      short:
        "A US law that can compel US providers to hand over data — even when it is stored in Europe.",
      body: [
        "The US CLOUD Act (Clarifying Lawful Overseas Use of Data Act) obliges US companies to hand over data they control on the order of US authorities — regardless of which country the servers are in.",
        "From this follows the central conflict with the GDPR: a US provider storing data in a European data centre can still be subject to US access orders. The ‘EU region’ moves the storage location, not the legal jurisdiction.",
        "This conflict can only be avoided by keeping data out of the control of a provider subject to the CLOUD Act in the first place — for example through on-premise operation on your own infrastructure.",
      ],
      related: [
        { label: "Data sovereignty", href: "/en/glossar/datensouveraenitaet" },
        { label: "GDPR, Schrems II & CLOUD Act", href: "/en/insights/datensouveraenitaet-cloud-act" },
      ],
    },
  },
  {
    slug: "openai-kompatible-api",
    category: "architecture",
    de: {
      term: "OpenAI-kompatible API",
      short:
        "Eine Schnittstelle, die dieselben Aufrufe versteht wie die OpenAI-API — bestehende Anwendungen laufen ohne Umbau weiter.",
      body: [
        "Eine OpenAI-kompatible API spricht dasselbe Protokoll wie die weit verbreitete Schnittstelle von OpenAI. Anwendungen, Bibliotheken und Tools, die für die OpenAI-API geschrieben wurden, funktionieren dadurch ohne Änderung — nur die Zieladresse wechselt.",
        "Der praktische Nutzen ist Wechselfreiheit: Wer seine KI auf eigene, souveräne Infrastruktur verlagert, muss seine Anwendungen nicht neu schreiben. Das senkt die Hürde für den Umstieg von der Cloud auf On-Premise erheblich und beugt Lock-in vor.",
        "Quinta stellt eine solche kompatible Schnittstelle bereit: Aus eigener Hardware wird ein privater, OpenAI-kompatibler KI-Dienst — nutzbar mit den Werkzeugen, die Teams ohnehin kennen.",
      ],
      related: [
        { label: "On-Premise-KI", href: "/glossar/on-premise-ki" },
        { label: "Souveräne KI", href: "/glossar/souveraene-ki" },
        { label: "Quinta im Vergleich", href: "/vergleich" },
      ],
    },
    en: {
      term: "OpenAI-compatible API",
      short:
        "An interface that understands the same calls as the OpenAI API — existing applications keep working without a rebuild.",
      body: [
        "An OpenAI-compatible API speaks the same protocol as OpenAI’s widely used interface. Applications, libraries and tools written for the OpenAI API therefore work unchanged — only the target address switches.",
        "The practical benefit is freedom to switch: anyone moving their AI onto their own sovereign infrastructure does not have to rewrite their applications. This substantially lowers the barrier to moving from cloud to on-premise and guards against lock-in.",
        "Quinta provides such a compatible interface: your own hardware becomes a private, OpenAI-compatible AI service — usable with the tools teams already know.",
      ],
      related: [
        { label: "On-premise AI", href: "/en/glossar/on-premise-ki" },
        { label: "Sovereign AI", href: "/en/glossar/souveraene-ki" },
        { label: "Quinta compared", href: "/en/vergleich" },
      ],
    },
  },
  {
    slug: "latenz",
    category: "architecture",
    de: {
      term: "Latenz",
      short:
        "Die Zeit zwischen Anfrage und Antwort — bei KI-Diensten ein entscheidendes Maß für die Nutzererfahrung.",
      body: [
        "Latenz ist die Verzögerung zwischen dem Absenden einer Anfrage und dem Eintreffen der Antwort, gemessen in Millisekunden. Bei interaktiven KI-Anwendungen entscheidet sie darüber, ob sich ein Dienst flüssig oder träge anfühlt.",
        "On-Premise-Betrieb hat hier einen strukturellen Vorteil: Wenn die Inferenz im eigenen Netz stattfindet, entfällt der Umweg über das öffentliche Internet zu einem entfernten Anbieter. In Quintas Benchmark lag die Latenz bei rund 56 ms — auch unter Last mit 512 gleichzeitigen Anfragen.",
        "Wichtig ist die Latenz unter Last, nicht im Leerlauf: Ein System, das einzeln schnell antwortet, aber unter vielen parallelen Anfragen einbricht, ist im Produktivbetrieb wenig wert. Genau hier zahlt die Betriebsschicht ein.",
      ],
      related: [
        { label: "Durchsatz", href: "/glossar/durchsatz" },
        { label: "Bounded Admission", href: "/glossar/bounded-admission" },
        { label: "Inferenz", href: "/glossar/inferenz" },
      ],
    },
    en: {
      term: "Latency",
      short:
        "The time between request and response — for AI services a decisive measure of user experience.",
      body: [
        "Latency is the delay between sending a request and the response arriving, measured in milliseconds. For interactive AI applications it decides whether a service feels fluid or sluggish.",
        "On-premise operation has a structural advantage here: when inference happens on your own network, the detour across the public internet to a remote provider disappears. In Quinta’s benchmark latency was about 56 ms — even under load with 512 concurrent requests.",
        "What matters is latency under load, not at idle: a system that answers quickly on its own but collapses under many parallel requests is of little value in production. This is exactly where the operating layer pays off.",
      ],
      related: [
        { label: "Throughput", href: "/en/glossar/durchsatz" },
        { label: "Bounded admission", href: "/en/glossar/bounded-admission" },
        { label: "Inference", href: "/en/glossar/inferenz" },
      ],
    },
  },
  {
    slug: "durchsatz",
    category: "architecture",
    de: {
      term: "Durchsatz",
      short:
        "Die Menge an Anfragen, die ein System in einer bestimmten Zeit erfolgreich verarbeitet — das Maß für Skalierbarkeit unter Last.",
      body: [
        "Durchsatz (Throughput) misst, wie viele Anfragen ein System pro Zeiteinheit erfolgreich bewältigt. Während Latenz die Geschwindigkeit einer einzelnen Antwort beschreibt, beschreibt Durchsatz die Kapazität für viele gleichzeitige Anfragen.",
        "Der entscheidende Punkt ist das Wort „erfolgreich“: Ein Server kann viele Anfragen annehmen und trotzdem einen großen Teil davon unter Last verlieren. In Quintas Benchmark verarbeitete das Quinta-Gateway bei 31.200 Anfragen und 512 gleichzeitigen Verbindungen eine 18× höhere Erfolgsquote als vLLM pur.",
        "Hoher Durchsatz bei gleichbleibend niedriger Latenz ist das Ziel — und er entsteht nicht durch mehr Rohleistung allein, sondern durch geordnete Zulassungssteuerung (Bounded Admission).",
      ],
      related: [
        { label: "Latenz", href: "/glossar/latenz" },
        { label: "Bounded Admission", href: "/glossar/bounded-admission" },
        { label: "Bounded Admission unter Last", href: "/insights/bounded-admission-last" },
      ],
    },
    en: {
      term: "Throughput",
      short:
        "The volume of requests a system successfully processes in a given time — the measure of scalability under load.",
      body: [
        "Throughput measures how many requests a system successfully handles per unit of time. Where latency describes the speed of a single response, throughput describes the capacity for many concurrent requests.",
        "The decisive word is ‘successfully’: a server can accept many requests and still lose a large share of them under load. In Quinta’s benchmark the Quinta gateway processed an 18× higher success rate than plain vLLM across 31,200 requests and 512 concurrent connections.",
        "High throughput at consistently low latency is the goal — and it comes not from raw power alone but from orderly admission control (bounded admission).",
      ],
      related: [
        { label: "Latency", href: "/en/glossar/latenz" },
        { label: "Bounded admission", href: "/en/glossar/bounded-admission" },
        { label: "Bounded admission under load", href: "/en/insights/bounded-admission-last" },
      ],
    },
  },
];

export function glossaryList(lang: "de" | "en") {
  return GLOSSARY.map((e) => ({
    slug: e.slug,
    category: e.category,
    categoryLabel: CATEGORY_LABELS[e.category][lang],
    ...e[lang],
  })).sort((a, b) => a.term.localeCompare(b.term, lang === "en" ? "en" : "de"));
}

export function getGlossaryEntry(slug: string) {
  return GLOSSARY.find((e) => e.slug === slug) ?? null;
}
