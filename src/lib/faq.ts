export type FaqItem = { q: string; a: string };

export const LANDING_FAQ: FaqItem[] = [
  {
    q: "Was heißt „souverän“ konkret?",
    a: "Alle Komponenten — Gateway, Daemon, Dashboard, Modell-Registry und Datenbank — laufen auf Ihrer Hardware, in Ihrem Netz. Es gibt keinen Cloud-Anteil, keine Telemetrie nach außen und keinen Anbieter, der Ihre Anfragen sieht.",
  },
  {
    q: "Welche Hardware brauchen wir?",
    a: "Von der einzelnen GPU-Workstation bis zu KI-Appliances der DGX-Spark-Klasse (z. B. Asus GX10). Quinta erkennt NVIDIA-, AMD- und Intel-GPUs automatisch; jeder weitere Rechner mit dem Daemon wird selbstständig Teil der Plattform.",
  },
  {
    q: "Welche Modelle können wir betreiben?",
    a: "Über vLLM den gesamten HuggingFace-Katalog — Llama, Mistral, Qwen, Gemma, DeepSeek und mehr. Ein leichtgewichtiger Modell-Runner steht für den einfachen Einstieg bereit. Der Lebenszyklus (Download, Start, Health-Check, Warmup) läuft automatisch.",
  },
  {
    q: "Was kostet der Betrieb?",
    a: "Hardware und Strom. Es gibt keine Token-Kosten und keine Cloud-Rechnung — die Nutzung ist unbegrenzt und das Budget planbar.",
  },
  {
    q: "Wie lange dauert die Einführung?",
    a: "Der Rollout auf vorhandene Hardware dauert Stunden, nicht Monate. Davor steht ein 30-minütiges Planungsgespräch zu Anwendungsfällen und Compliance-Rahmen.",
  },
  {
    q: "Müssen wir unsere Anwendungen umbauen?",
    a: "Nein. Quinta spricht die OpenAI-API (/v1/chat/completions, Embeddings, Rerank, Audio-Transkription, Responses-API). Bestehende Apps ändern base_url und API-Key — das ist der ganze Umstieg.",
  },
  {
    q: "Können wir parallel weiter Cloud-KI nutzen?",
    a: "Ja. Quinta betreibt Modelle auf Ihrer Hardware und ersetzt Cloud-APIs dort, wo Datenhoheit zählt. Unkritische Workloads können Sie unabhängig davon weiter in der Cloud laufen lassen — die Entscheidung liegt bei Ihnen.",
  },
  {
    q: "Wer steht hinter Quinta?",
    a: "Hinter Quinta steht twenty5ai — und Quinta ist unsere Eigenentwicklung. Die gesamte souveräne Plattform stammt aus eigener Hand: Gateway, Daemon, Registry, Dashboard, Zugriffskontrolle, Orchestrierung und der lückenlose Audit-Trail. Für die reine Modell-Ausführung setzen wir bewusst auf eine bewährte Open-Source-Engine (Apache 2.0), damit der gesamte offene Modell-Katalog nutzbar bleibt — alles, was Quinta ausmacht, ist Eigenentwicklung von twenty5ai.",
  },
];

export const LANDING_FAQ_EN: FaqItem[] = [
  {
    q: "What does “sovereign” actually mean?",
    a: "Every component — gateway, daemon, dashboard, model registry and database — runs on your hardware, in your network. There is no cloud portion, no telemetry to the outside and no provider that sees your requests.",
  },
  {
    q: "What hardware do we need?",
    a: "From a single GPU workstation to AI appliances of the DGX Spark class (e.g. Asus GX10). Quinta detects NVIDIA, AMD and Intel GPUs automatically; every additional machine running the daemon becomes part of the platform on its own.",
  },
  {
    q: "Which models can we run?",
    a: "Through vLLM the entire HuggingFace catalogue — Llama, Mistral, Qwen, Gemma, DeepSeek and more. A lightweight model runner is available for a simple start. The lifecycle (download, start, health check, warmup) runs automatically.",
  },
  {
    q: "What does operation cost?",
    a: "Hardware and electricity. There are no token costs and no cloud bill — usage is unlimited and the budget is predictable.",
  },
  {
    q: "How long does rollout take?",
    a: "Rollout onto existing hardware takes hours, not months. It is preceded by a 30-minute planning conversation about use cases and your compliance framework.",
  },
  {
    q: "Do we have to rebuild our applications?",
    a: "No. Quinta speaks the OpenAI API (/v1/chat/completions, embeddings, rerank, audio transcription, Responses API). Existing apps change base_url and API key — that is the entire switch.",
  },
  {
    q: "Can we keep using cloud AI in parallel?",
    a: "Yes. Quinta runs models on your hardware and replaces cloud APIs where data sovereignty matters. Non-critical workloads can keep running in the cloud, independently — the decision is yours.",
  },
  {
    q: "Who is behind Quinta?",
    a: "Behind Quinta stands twenty5ai — and Quinta is our own development. The entire sovereign platform is built in-house: gateway, daemon, registry, dashboard, access control, orchestration and the complete audit trail. For pure model execution we deliberately build on a proven open-source engine (Apache 2.0) so the whole open model catalogue stays available — everything that makes Quinta Quinta is twenty5ai's own development.",
  },
];
