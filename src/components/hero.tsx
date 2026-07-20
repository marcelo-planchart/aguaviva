import Link from "next/link";
import { JellyfishSting } from "./jellyfish-sting";
import { hero } from "@/content/site";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-6 pb-20 pt-16 md:grid-cols-12 md:gap-12 md:pb-28 md:pt-24">
        <div className="md:col-span-7">
          <p className="mb-6 flex items-center gap-3 text-xs uppercase tracking-[0.26em] text-ink-dim">
            <span className="h-px w-8 bg-line" />
            {hero.eyebrow}
          </p>

          <h1 className="font-display text-6xl leading-[0.95] tracking-tight sm:text-7xl md:text-8xl">
            {hero.headline}
          </h1>

          <p className="mt-8 max-w-md text-lg leading-relaxed text-ink-dim">
            {hero.lead}
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link
              href={hero.ctaPrimary.href}
              className="bg-ink px-7 py-3 text-sm font-medium tracking-wide text-wall transition-opacity hover:opacity-80"
            >
              {hero.ctaPrimary.label}
            </Link>
            <Link
              href={hero.ctaSecondary.href}
              className="border border-line px-7 py-3 text-sm font-medium tracking-wide text-ink transition-colors hover:border-ink hover:bg-ink hover:text-wall"
            >
              {hero.ctaSecondary.label}
            </Link>
          </div>
        </div>

        <div className="flex flex-col items-center md:col-span-5">
          <div className="h-[300px] w-full max-w-sm sm:h-[380px]">
            <JellyfishSting />
          </div>
          <p className="mt-1 text-[11px] uppercase tracking-[0.28em] text-ink-dim">
            Haz clic — pica
          </p>
        </div>
      </div>
    </section>
  );
}
