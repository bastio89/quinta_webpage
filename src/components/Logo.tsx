import { LogoMark } from "./LogoMark";
import { cn } from "@/lib/cn";

export function Logo({
  className,
  markClassName,
  tone = "dark",
}: {
  className?: string;
  markClassName?: string;
  /** "dark" = für helle Flächen (dunkler Text), "light" = für dunkle Flächen (heller Text) */
  tone?: "dark" | "light";
}) {
  return (
    <span className={cn("inline-flex items-center gap-2.5 select-none", className)}>
      <LogoMark
        className={cn(
          "h-7 w-7 shrink-0",
          tone === "dark" ? "text-azul-700" : "text-stone-50",
          markClassName,
        )}
      />
      <span
        className={cn(
          "font-sans text-[1.28rem] font-semibold tracking-[-0.02em]",
          tone === "dark" ? "text-ink-950" : "text-stone-50",
        )}
      >
        quinta
      </span>
    </span>
  );
}
