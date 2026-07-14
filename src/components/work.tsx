import Link from "next/link";
import { projects, type Project } from "@/content/site";

function Plate({ project, featured = false }: { project: Project; featured?: boolean }) {
  const inner = (
    <article
      className={[
        "group relative flex flex-col overflow-hidden rounded-2xl border border-line bg-wall-raised transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_-32px_rgba(20,24,26,0.35)]",
        featured ? "md:col-span-2" : "",
      ].join(" ")}
    >
      {/* Gallery frame — organic accent wash stands in for real imagery. */}
      <div
        className={featured ? "relative aspect-[16/9]" : "relative aspect-[4/3]"}
        style={{
          background: `radial-gradient(120% 120% at 15% 0%, ${project.accentSoft} 0%, #faf8f4 60%)`,
        }}
      >
        <div
          aria-hidden
          className="absolute inset-0 opacity-90 mix-blend-multiply"
          style={{
            background: `radial-gradient(80% 100% at 85% 100%, ${project.accent}33 0%, transparent 60%)`,
          }}
        />
        <div className="absolute inset-0 flex items-end p-6">
          <span
            className="font-display text-4xl leading-none tracking-tight md:text-5xl"
            style={{ color: project.accent }}
          >
            {project.title}
          </span>
        </div>
        <span className="absolute right-5 top-5 text-xs uppercase tracking-[0.18em] text-ink-dim">
          {project.year}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="mb-3 flex items-center gap-2 text-xs uppercase tracking-[0.16em] text-ink-dim">
          <span>{project.category}</span>
          <span className="text-line">/</span>
          <span>{project.client}</span>
        </div>
        <p className="text-[15px] leading-relaxed text-ink-dim">{project.blurb}</p>
        {project.href ? (
          <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-tide">
            Visit site
            <span aria-hidden className="transition-transform group-hover:translate-x-0.5">
              →
            </span>
          </span>
        ) : null}
      </div>
    </article>
  );

  return project.href ? (
    <Link href={project.href} target="_blank" rel="noopener noreferrer" className={featured ? "md:col-span-2" : ""}>
      {inner}
    </Link>
  ) : (
    inner
  );
}

export function Work() {
  const [featured, ...rest] = projects;
  return (
    <section id="work" className="scroll-mt-16 border-t border-line">
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <div className="mb-14 flex items-end justify-between gap-6">
          <div>
            <p className="mb-4 text-xs uppercase tracking-[0.22em] text-ink-dim">
              01 — Selected work
            </p>
            <h2 className="font-display text-4xl tracking-tight md:text-5xl">
              A hand-picked few.
            </h2>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <Plate project={featured} featured />
          {rest.map((p) => (
            <Plate key={p.slug} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
