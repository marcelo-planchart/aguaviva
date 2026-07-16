import Link from "next/link";
import { Jellyfish } from "./jellyfish";
import { nav, site, hero } from "@/content/site";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-line/70 bg-wall/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link href="#top" className="flex items-center gap-2.5" aria-label={site.name}>
          <Jellyfish size={26} tone="ink" priority />
          <span className="font-display text-xl tracking-tight">{site.name}</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-ink-dim transition-colors hover:text-ink"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href={hero.ctaPrimary.href}
          className="bg-ink px-4 py-2 text-sm font-medium tracking-wide text-wall transition-opacity hover:opacity-80"
        >
          {hero.ctaPrimary.label}
        </Link>
      </div>
    </header>
  );
}
