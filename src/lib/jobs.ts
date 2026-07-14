export type JobContent = {
  title: string;
  tagline: string; // Ein-Zeiler unter dem Titel / für die Karte
  summary: string; // Meta-Description + Karten-Text
  location: string;
  type: string; // Vollzeit / Full-time
  team: string;
  intro: string[];
  responsibilities: string[];
  requirements: string[];
  niceToHave?: string[];
  offer: string[];
  closing: string;
};

export type JobEntry = {
  slug: string;
  datePosted: string; // ISO
  employmentType: "FULL_TIME" | "PART_TIME" | "CONTRACTOR" | "INTERN";
  remote: boolean;
  de: JobContent;
  en: JobContent;
};

export const JOBS: JobEntry[] = [
  {
    slug: "onboarding-engineer",
    datePosted: "2026-07-14",
    employmentType: "FULL_TIME",
    remote: true,
    de: {
      title: "Onboarding Engineer (m/w/d)",
      tagline:
        "Du bringst Quinta beim Kunden zum Laufen — von der ersten GPU bis zum produktiven KI-Dienst.",
      summary:
        "Als Onboarding Engineer begleitest du regulierte Unternehmen bei der Einführung von Quinta auf ihrer eigenen Infrastruktur — technisch fundiert und nah am Kunden.",
      location: "Remote (Europa) · mit Reisen zu Kundenstandorten",
      type: "Vollzeit",
      team: "Customer Success",
      intro: [
        "twenty5ai baut mit Quinta die souveräne On-Premise-KI-Plattform für regulierte Branchen in Europa. Unsere Kunden betreiben KI auf ihrer eigenen Hardware — kein Byte verlässt das Haus. Damit das reibungslos gelingt, suchen wir jemanden, der genau diesen Moment verantwortet: die Einführung von Quinta beim Kunden.",
        "Als Onboarding Engineer bist du das Gesicht von Quinta nach dem Vertragsabschluss. Du installierst, konfigurierst und übergibst die Plattform — und sorgst dafür, dass aus „gekauft“ ein „läuft produktiv“ wird. Du arbeitest an der Schnittstelle von Technik und Kunde: nah an GPUs, Netzwerken und Compliance-Anforderungen, aber genauso nah an den Menschen, die Quinta täglich nutzen werden.",
      ],
      responsibilities: [
        "Du führst das technische Onboarding neuer Kunden durch: Installation von Gateway, Daemon und Registry auf der Infrastruktur des Kunden — von der Workstation bis zur Appliance der DGX-Klasse.",
        "Du konfigurierst Zugriffskontrolle (RBAC, SSO/SAML), Mandanten, Modelle und den automatischen Modell-Lebenszyklus passend zum Anwendungsfall.",
        "Du begleitest die ersten produktiven Anwendungsfälle und schulst die Teams des Kunden im täglichen Betrieb.",
        "Du bist erste technische Ansprechperson während der Einführung und übersetzt zwischen Kunde, Support und Produktentwicklung.",
        "Du dokumentierst und standardisierst Onboarding-Abläufe und hilfst, sie zu automatisieren — damit jedes weitere Onboarding schneller und runder wird.",
        "Du gibst Erkenntnisse aus dem Feld zurück ins Produkt und prägst mit, wie sich Quinta weiterentwickelt.",
      ],
      requirements: [
        "Fundierte Linux-Kenntnisse und Sicherheit auf der Kommandozeile; du fühlst dich in Server-, Netzwerk- und Container-Umgebungen zu Hause.",
        "Erfahrung mit dem Betrieb von Software beim Kunden oder im Rechenzentrum (z. B. als DevOps-, Systems-, Solutions- oder Implementation Engineer).",
        "Grundverständnis von GPUs, LLM-Inferenz und/oder KI-Infrastruktur — oder die klare Motivation, dich hier schnell einzuarbeiten.",
        "Du kommunizierst sicher mit technischen wie nicht-technischen Ansprechpartnern und erklärst Komplexes verständlich.",
        "Strukturierte, eigenverantwortliche Arbeitsweise und echte Kundenorientierung.",
        "Sehr gutes Deutsch und gutes Englisch; Reisebereitschaft zu Kundenstandorten innerhalb Europas.",
      ],
      niceToHave: [
        "Erfahrung mit Inferenz-Engines wie vLLM, mit CUDA oder GPU-Servern.",
        "Kenntnisse der KI-Regulatorik (EU AI Act, NIS2, DSGVO) oder Erfahrung in regulierten Branchen wie Finanzen, Gesundheit oder öffentlicher Hand.",
        "Erfahrung mit SSO/SAML-Integrationen (Entra ID, Okta), Monitoring (Prometheus) oder Infrastruktur-Automatisierung.",
      ],
      offer: [
        "Eine Schlüsselrolle in einem jungen europäischen Deep-Tech-Unternehmen mit einem Produkt, das echte Souveränität liefert — kein Hype, sondern Substanz.",
        "Direkter Draht zu Gründung und Produktentwicklung; deine Arbeit im Feld prägt das Produkt unmittelbar.",
        "Remote-first mit flexiblen Arbeitszeiten und moderner Hardware.",
        "Technisch anspruchsvolle Aufgaben an einer der spannendsten Fragen der Zeit: KI, die man selbst kontrolliert.",
        "Raum, den Onboarding-Bereich von Grund auf mitzugestalten und mit dem Unternehmen zu wachsen.",
      ],
      closing:
        "Du musst nicht jeden Punkt zu 100 % erfüllen. Wenn du den Kern der Rolle spannend findest und das Meiste mitbringst, freuen wir uns auf deine Nachricht.",
    },
    en: {
      title: "Onboarding Engineer (m/f/d)",
      tagline:
        "You get Quinta running at the customer — from the first GPU to a productive AI service.",
      summary:
        "As an Onboarding Engineer you guide regulated organizations through rolling out Quinta on their own infrastructure — technically grounded and close to the customer.",
      location: "Remote (Europe) · with travel to customer sites",
      type: "Full-time",
      team: "Customer Success",
      intro: [
        "With Quinta, twenty5ai is building the sovereign on-premise AI platform for regulated industries in Europe. Our customers run AI on their own hardware — not a single byte leaves the building. To make that seamless, we are looking for someone to own exactly that moment: rolling out Quinta at the customer.",
        "As an Onboarding Engineer you are the face of Quinta after the deal is signed. You install, configure and hand over the platform — turning „bought“ into „running in production“. You work at the intersection of technology and customer: close to GPUs, networks and compliance requirements, but just as close to the people who will use Quinta every day.",
      ],
      responsibilities: [
        "Run the technical onboarding of new customers: install gateway, daemon and registry on the customer's infrastructure — from a workstation to a DGX-class appliance.",
        "Configure access control (RBAC, SSO/SAML), tenants, models and the automated model lifecycle to fit the use case.",
        "Accompany the first production use cases and train the customer's teams for day-to-day operation.",
        "Be the first technical point of contact during rollout and translate between customer, support and product development.",
        "Document and standardize onboarding flows and help automate them — so every further onboarding gets faster and smoother.",
        "Feed field insights back into the product and help shape how Quinta evolves.",
      ],
      requirements: [
        "Solid Linux skills and confidence on the command line; you are at home in server, network and container environments.",
        "Experience running software at customers or in a data centre (e.g. as a DevOps, systems, solutions or implementation engineer).",
        "A basic understanding of GPUs, LLM inference and/or AI infrastructure — or a clear drive to get up to speed quickly.",
        "You communicate confidently with technical and non-technical stakeholders and explain complex things clearly.",
        "A structured, self-directed way of working and genuine customer focus.",
        "Fluent German and good English; willingness to travel to customer sites within Europe.",
      ],
      niceToHave: [
        "Experience with inference engines like vLLM, with CUDA or GPU servers.",
        "Knowledge of AI regulation (EU AI Act, NIS2, GDPR) or experience in regulated industries such as finance, healthcare or the public sector.",
        "Experience with SSO/SAML integrations (Entra ID, Okta), monitoring (Prometheus) or infrastructure automation.",
      ],
      offer: [
        "A key role in a young European deep-tech company with a product that delivers real sovereignty — substance, not hype.",
        "A direct line to founders and product development; your field work shapes the product directly.",
        "Remote-first with flexible hours and modern hardware.",
        "Technically demanding work at one of the most exciting questions of our time: AI you control yourself.",
        "Room to build the onboarding function from the ground up and grow with the company.",
      ],
      closing:
        "You don't need to tick every box. If the core of the role excites you and you bring most of it, we'd love to hear from you.",
    },
  },
  {
    slug: "freelance-software-engineer",
    datePosted: "2026-07-14",
    employmentType: "CONTRACTOR",
    remote: true,
    de: {
      title: "Freelance Software Engineer (m/w/d)",
      tagline:
        "Du entwickelst Quinta weiter — an der Plattform, die aus eigener Hardware einen souveränen KI-Dienst macht.",
      summary:
        "Als Freelance Engineer baust du an der Quinta-Plattform mit — Gateway, Orchestrierung, Dashboard und API. Remote, projektbasiert, mit direktem Draht zum Kernteam.",
      location: "Remote (Europa)",
      type: "Freelance / Projektbasis",
      team: "Produktentwicklung",
      intro: [
        "twenty5ai baut mit Quinta die souveräne On-Premise-KI-Plattform für regulierte Branchen. Die gesamte Betriebsschicht — Gateway, Daemon, Registry und Dashboard — ist Eigenentwicklung. Um schneller zu liefern, suchen wir erfahrene Freelancer, die uns projektbasiert bei der Weiterentwicklung unterstützen.",
        "Du arbeitest direkt am Kern des Produkts: an den Diensten, die Zugriff, Orchestrierung und Governance über KI-Modelle steuern. Als Freelancer bringst du Tempo und Erfahrung ein, arbeitest eng mit dem Kernteam und lieferst eigenständig Features von der Idee bis in die Produktion.",
      ],
      responsibilities: [
        "Du entwickelst Features und Verbesserungen an der Quinta-Plattform — von Backend-Diensten (Gateway, Orchestrierung, API) bis zum Verwaltungs-Dashboard.",
        "Du integrierst und optimierst die Anbindung an Inferenz-Engines wie vLLM und den automatischen Modell-Lebenszyklus.",
        "Du arbeitest an Zugriffskontrolle, Mandantenfähigkeit, Observability und Audit — den Funktionen, die Quinta für regulierte Branchen ausmachen.",
        "Du schreibst wartbaren, gut getesteten Code und dokumentierst deine Arbeit so, dass das Team darauf aufbauen kann.",
        "Du stimmst dich eng mit dem Kernteam ab und lieferst eigenständig von der Anforderung bis zum Release.",
      ],
      requirements: [
        "Mehrjährige Erfahrung in der Softwareentwicklung, idealerweise an verteilten Systemen, APIs oder infrastrukturnaher Software.",
        "Sicherer Umgang mit einem modernen Backend-Stack (z. B. Go, Python, Rust oder TypeScript/Node) sowie mit Linux, Containern und Git.",
        "Erfahrung, eigenständig und remote zu liefern — du strukturierst dich selbst und kommunizierst proaktiv.",
        "Qualitätsbewusstsein: Tests, saubere Schnittstellen, nachvollziehbare Commits.",
        "Gutes Deutsch oder Englisch in der Zusammenarbeit.",
      ],
      niceToHave: [
        "Erfahrung mit KI-/LLM-Infrastruktur, GPU-Servern oder Inferenz-Engines wie vLLM.",
        "Kenntnisse in der Frontend-Entwicklung (React/TypeScript) für das Dashboard.",
        "Erfahrung mit RBAC, SSO/SAML, Multi-Tenancy oder Observability (Prometheus).",
        "Hintergrund in regulierten oder sicherheitskritischen Umgebungen.",
      ],
      offer: [
        "Projektbasierte Zusammenarbeit mit klaren Zielen und viel Eigenverantwortung.",
        "Arbeit an einem technisch anspruchsvollen Produkt mit echter Substanz statt Wegwerf-Features.",
        "Direkter Draht zum Kernteam — kurze Wege, schnelle Entscheidungen.",
        "Voll remote und flexibel in der Zeiteinteilung.",
        "Faire, transparente Vergütung auf Tages- oder Stundenbasis.",
      ],
      closing:
        "Interessiert an einer projektbasierten Zusammenarbeit? Schick uns kurz dein Profil, deine Schwerpunkte und deine Verfügbarkeit — wir melden uns schnell.",
    },
    en: {
      title: "Freelance Software Engineer (m/f/d)",
      tagline:
        "You help develop Quinta — the platform that turns your own hardware into a sovereign AI service.",
      summary:
        "As a freelance engineer you build on the Quinta platform — gateway, orchestration, dashboard and API. Remote, project-based, with a direct line to the core team.",
      location: "Remote (Europe)",
      type: "Freelance / contract",
      team: "Product engineering",
      intro: [
        "With Quinta, twenty5ai builds the sovereign on-premise AI platform for regulated industries. The entire operating layer — gateway, daemon, registry and dashboard — is developed in-house. To ship faster, we're looking for experienced freelancers to support our development on a project basis.",
        "You work directly at the core of the product: on the services that control access, orchestration and governance over AI models. As a freelancer you bring speed and experience, work closely with the core team and deliver features independently from idea to production.",
      ],
      responsibilities: [
        "Develop features and improvements across the Quinta platform — from backend services (gateway, orchestration, API) to the management dashboard.",
        "Integrate and optimize the connection to inference engines like vLLM and the automated model lifecycle.",
        "Work on access control, multi-tenancy, observability and audit — the functions that make Quinta fit for regulated industries.",
        "Write maintainable, well-tested code and document your work so the team can build on it.",
        "Coordinate closely with the core team and deliver independently from requirement to release.",
      ],
      requirements: [
        "Several years of software engineering experience, ideally on distributed systems, APIs or infrastructure-adjacent software.",
        "Confidence with a modern backend stack (e.g. Go, Python, Rust or TypeScript/Node) as well as Linux, containers and Git.",
        "Experience delivering independently and remotely — you structure yourself and communicate proactively.",
        "A focus on quality: tests, clean interfaces, traceable commits.",
        "Good German or English for collaboration.",
      ],
      niceToHave: [
        "Experience with AI/LLM infrastructure, GPU servers or inference engines like vLLM.",
        "Frontend development skills (React/TypeScript) for the dashboard.",
        "Experience with RBAC, SSO/SAML, multi-tenancy or observability (Prometheus).",
        "A background in regulated or security-critical environments.",
      ],
      offer: [
        "Project-based collaboration with clear goals and a lot of ownership.",
        "Work on a technically demanding product with real substance, not throwaway features.",
        "A direct line to the core team — short paths, fast decisions.",
        "Fully remote and flexible in how you schedule your time.",
        "Fair, transparent compensation on a daily or hourly basis.",
      ],
      closing:
        "Interested in a project-based collaboration? Send us a short profile, your focus areas and your availability — we'll get back to you quickly.",
    },
  },
];

export function jobsList(lang: "de" | "en") {
  return JOBS.map((j) => ({ slug: j.slug, ...j[lang] })).sort((a, b) => a.title.localeCompare(b.title));
}

export function getJob(slug: string) {
  return JOBS.find((j) => j.slug === slug) ?? null;
}
