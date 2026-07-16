import Link from "next/link";
import { Jellyfish } from "./jellyfish";
import { site, nav } from "@/content/site";

export function SiteFooter() {
  const year = 2026;
  return (
    <footer className="border-t border-line bg-wall">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-12 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-2.5">
          <Jellyfish size={22} tone="ink" />
          <span className="font-display text-lg tracking-tight">{site.name}</span>
          <span className="ml-2 text-sm text-ink-dim">{site.locations}</span>
        </div>

        <nav className="flex flex-wrap items-center gap-6">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-ink-dim transition-colors hover:text-ink"
            >
              {item.label}
            </Link>
          ))}
          <a
            href={`mailto:${site.emailPrimary}`}
            className="text-sm text-ink-dim transition-colors hover:text-ink"
          >
            {site.emailPrimary}
          </a>
        </nav>
      </div>
      <div className="mx-auto max-w-6xl px-6 pb-8">
        <p className="text-xs text-ink-dim">
          © {year} {site.name}. Agua viva. Bien hecho.
        </p>
      </div>
    </footer>
  );
}
