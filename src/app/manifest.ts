import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Quinta — Souveräne On-Premise-KI",
    short_name: "Quinta",
    description: "Die souveräne On-Premise-KI-Plattform von twenty5ai. Kein Byte verlässt das Haus.",
    start_url: "/",
    display: "standalone",
    background_color: "#0c1120",
    theme_color: "#f8f6f1",
    lang: "de",
    icons: [
      { src: "/icon.svg", sizes: "any", type: "image/svg+xml" },
      { src: "/apple-icon", sizes: "180x180", type: "image/png" },
    ],
  };
}
