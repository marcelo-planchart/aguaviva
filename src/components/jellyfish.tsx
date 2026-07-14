import Image from "next/image";
import logo from "../../public/brand/aguaviva-logo.png";

type Props = {
  size?: number;
  /** "ink" renders the white line-art in near-black for light walls. */
  tone?: "ink" | "white";
  className?: string;
  float?: boolean;
  priority?: boolean;
};

export function Jellyfish({
  size = 40,
  tone = "ink",
  className = "",
  float = false,
  priority = false,
}: Props) {
  return (
    <Image
      src={logo}
      alt="Aguaviva jellyfish mark"
      width={size}
      height={size}
      priority={priority}
      className={[
        tone === "ink" ? "mark--ink" : "",
        float ? "jelly-float" : "",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    />
  );
}
