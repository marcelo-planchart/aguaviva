import Link from "next/link";
import { Jellyfish } from "./jellyfish";
import { hero } from "@/content/site";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      {/* Organic "current": a soft, disciplined gradient wash behind the mark. */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 -top-32 h-[38rem] w-[38rem] rounded-full opacity-60 blur-3xl"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, rgba(127,227,209,0.35), rgba(15,111,99,0.10) 55%, transparent 72%)",
        }}
      />

      <div className="relative mx-auto grid max-w-6xl gap-12 px-6 pb-24 pt-20 md:grid-cols-12 md:pb-32 md:pt-28">
        <div className="md:col-span-8">
          <p className="mb-6 flex items-center gap-3 text-xs uppercase tracking-[0.22em] text-ink-dim">
            <span className="h-px w-8 bg-line" />
            {hero.eyebrow}
          </p>

          <h1 className="font-display text-6xl leading-[0.95] tracking-tight sm:text-7xl md:text-8xl">
            {hero.headline}
          </h1>

          <p className="mt-8 max-w-xl text-lg leading-relaxed text-ink-dim">
            {hero.lead}
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link
              href={hero.ctaPrimary.href}
              className="rounded-full bg-tide px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-tide-deep"
            >
              {hero.ctaPrimary.label}
            </Link>
            <Link
              href={hero.ctaSecondary.href}
              className="rounded-full border border-line px-6 py-3 text-sm font-medium text-ink transition-colors hover:border-ink"
            >
              {hero.ctaSecondary.label}
            </Link>
          </div>
        </div>

        <div className="hidden items-start justify-end md:col-span-4 md:flex">
          <Jellyfish size={200} tone="ink" float className="opacity-80" />
        </div>
      </div>
    </section>
  );
}
