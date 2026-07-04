import { cn } from "@/lib/cn";

export function Wordmark({
  size = 24,
  onDark = false,
  byline = false,
  className,
}: {
  size?: number;
  onDark?: boolean;
  byline?: boolean;
  className?: string;
}) {
  return (
    <span className={cn("inline-flex flex-col gap-0.5", className)}>
      <span
        className={cn(
          "font-display font-bold leading-none tracking-[-0.03em]",
          onDark ? "text-on-dark" : "text-ink-900",
        )}
        style={{ fontSize: size }}
      >
        quinta<span className={onDark ? "text-azul-400" : "text-azul-600"}>.</span>
      </span>
      {byline && (
        <span
          className={cn(
            "font-sans uppercase tracking-[0.08em]",
            onDark ? "text-on-dark-muted" : "text-ink-400",
          )}
          style={{ fontSize: Math.max(9, Math.round(size * 0.32)) }}
        >
          von twenty
          <span className={cn("font-bold", onDark ? "text-azul-400" : "text-azul-600")}>5</span>ai
        </span>
      )}
    </span>
  );
}
