import { approach } from "@/content/site";

export function Approach() {
  return (
    <section id="approach" className="scroll-mt-16 border-t border-line">
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <div className="grid gap-14 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="mb-4 text-xs uppercase tracking-[0.28em] text-ink-dim">
              {approach.eyebrow}
            </p>
            <h2 className="font-display text-4xl leading-tight tracking-tight md:text-5xl">
              {approach.headline}
            </h2>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-ink-dim">
              {approach.lead}
            </p>
          </div>

          <div className="md:col-span-7">
            <dl className="grid gap-px overflow-hidden border border-line bg-line sm:grid-cols-2">
              {approach.services.map((s) => (
                <div key={s.title} className="bg-wall-raised p-7">
                  <dt className="font-display text-2xl tracking-tight">{s.title}</dt>
                  <dd className="mt-3 text-[15px] leading-relaxed text-ink-dim">
                    {s.body}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
