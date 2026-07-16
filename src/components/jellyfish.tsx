type Props = {
  size?: number;
  /** "ink" renders the mark near-black for light walls; "white" for dark bands. */
  tone?: "ink" | "white";
  className?: string;
  float?: boolean;
  priority?: boolean;
};

// Inline line-art jellyfish — "aguaviva" / living water. Scalable, theme-aware.
export function Jellyfish({
  size = 40,
  tone = "ink",
  className = "",
  float = false,
}: Props) {
  const color = tone === "white" ? "#ffffff" : "#ededea";
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      stroke={color}
      strokeWidth={3.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      role="img"
      aria-label="Aguaviva jellyfish mark"
      className={[float ? "jelly-float" : "", className].filter(Boolean).join(" ")}
    >
      {/* bell dome */}
      <path d="M18 52 C18 29 37 15 50 15 C63 15 82 29 82 52" />
      {/* scalloped hem */}
      <path d="M18 52 q6 8 12 0 q6 8 12 0 q6 8 12 0 q6 8 12 0 q6 8 12 0" />
      {/* outer tentacles */}
      <path d="M30 54 C27 66 34 74 29 87" />
      <path d="M42 56 C39 68 46 77 41 89" />
      <path d="M58 56 C61 68 54 77 59 89" />
      <path d="M70 54 C73 66 66 74 71 87" />
      {/* inner tentacles */}
      <path d="M49 56 C47 65 51 72 49 80" />
      <path d="M61 55 C63 64 59 71 61 79" />
    </svg>
  );
}
