import { Jellyfish } from "./jellyfish";
import { studio } from "@/content/site";

export function Studio() {
  return (
    <section id="studio" className="scroll-mt-16 border-t border-line">
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <p className="mb-4 text-xs uppercase tracking-[0.22em] text-ink-dim">
          03 — {studio.eyebrow}
        </p>

        <div className="grid gap-14 md:grid-cols-12">
          <div className="md:col-span-7">
            <h2 className="font-display text-4xl leading-tight tracking-tight md:text-5xl">
              {studio.headline}
            </h2>
            <div className="mt-8 space-y-6 text-lg leading-relaxed text-ink-dim">
              {studio.body.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>

          <div className="md:col-span-5">
            <div className="flex items-start justify-between">
              <h3 className="text-xs uppercase tracking-[0.2em] text-ink-dim">Equipo</h3>
              <Jellyfish size={44} tone="ink" className="opacity-60" />
            </div>
            <ul className="mt-6 divide-y divide-line border-y border-line">
              {studio.team.map((m) => (
                <li key={m.name} className="flex items-baseline justify-between gap-4 py-4">
                  <span className="font-display text-xl tracking-tight">{m.name}</span>
                  <span className="text-right text-sm text-ink-dim">{m.role}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
