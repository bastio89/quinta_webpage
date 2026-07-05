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
    a: "Über vLLM den gesamten HuggingFace-Katalog — Llama, Mistral, Qwen, Gemma, DeepSeek und mehr. Ollama steht für den einfachen Einstieg bereit. Der Lebenszyklus (Download, Start, Health-Check, Warmup) läuft automatisch.",
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
    a: "Quinta ist eine Eigenentwicklung von twenty5ai. Der Inferenz-Motor basiert auf bewährter Open-Source-Technologie (Apache 2.0); die Verwaltungsebene — Gateway, Dashboard, Registry — ist eigene Entwicklung.",
  },
];
