import { type SVGProps } from "react";

type LogoMarkProps = SVGProps<SVGSVGElement> & {
  /** Zeigt den Kupfer-Akzent (Schlussstein) an. Auf sehr kleinen Größen (Favicon) besser aus. */
  accent?: boolean;
};

/**
 * Die Quinta-Bildmarke.
 *
 * Motiv: ein geschlossener Torbogen in einem Gewölbe-Quadrat — die Enclave.
 * Der Bogen ist die Tür nach innen, der Schweif macht daraus ein "Q":
 * "Alles kommt an, nichts verlässt das Haus."
 *
 * Nutzt `currentColor` für den Körper, damit die Marke sich per `text-*`
 * Utility einfärben lässt (z. B. weiß auf dunklem Grund, Azul auf hell).
 */
export function LogoMark({ accent = true, className, ...props }: LogoMarkProps) {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label="Quinta"
      {...props}
    >
      <mask id="quinta-arch-mask" maskUnits="userSpaceOnUse" x="0" y="0" width="40" height="40">
        <rect x="0" y="0" width="40" height="40" fill="white" />
        <path d="M14 31.5V20.5C14 16.9101 16.9101 14 20.5 14C24.0899 14 27 16.9101 27 20.5V31.5H14Z" fill="black" />
      </mask>

      <g mask="url(#quinta-arch-mask)">
        <rect x="3" y="3" width="34" height="34" rx="11" fill="currentColor" />
      </g>

      {/* Schweif: macht aus dem Torbogen ein "Q" und markiert die Ecke, an der nichts hinausgeht */}
      <rect
        x="24.5"
        y="24.5"
        width="6.4"
        height="15.5"
        rx="3.2"
        fill="currentColor"
        transform="rotate(45 27.7 32.25)"
      />

      {accent && <circle cx="20.5" cy="13.6" r="1.7" className="fill-copper-500" />}
    </svg>
  );
}
