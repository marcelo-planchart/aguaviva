import Link from "next/link";
import { projects, type Project } from "@/content/site";

function Row({ project, index }: { project: Project; index: number }) {
  const inner = (
    <div className="group flex items-center justify-between gap-6 border-b border-line py-7 md:py-9">
      <div className="flex min-w-0 items-baseline gap-4 md:gap-6">
        <span className="text-xs tabular-nums text-ink-dim">
          {String(index + 1).padStart(2, "0")}
        </span>
        <span className="truncate font-display text-4xl uppercase tracking-tight text-ink-dim transition-colors duration-300 group-hover:text-ink md:text-6xl">
          {project.title}
        </span>
      </div>

      <div className="flex shrink-0 items-center gap-5">
        {project.image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={project.image}
            alt=""
            aria-hidden
            className="hidden h-14 w-24 object-cover object-right opacity-70 grayscale transition-all duration-300 group-hover:opacity-100 group-hover:grayscale-0 md:block"
            loading="lazy"
          />
        ) : null}
        <div className="hidden text-right sm:block">
          <div className="text-xs uppercase tracking-[0.16em] text-ink-dim">
            {project.category}
          </div>
          <div className="mt-1 text-xs tabular-nums text-ink-dim">
            {project.year} · {project.client}
          </div>
        </div>
        <span
          aria-hidden
          className="text-ink-dim transition-all duration-300 group-hover:translate-x-1 group-hover:text-ink"
        >
          →
        </span>
      </div>
    </div>
  );

  return project.href ? (
    <Link href={project.href} target="_blank" rel="noopener noreferrer" aria-label={project.title}>
      {inner}
    </Link>
  ) : (
    inner
  );
}

export function Work() {
  return (
    <section id="work" className="border-t border-line">
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <div className="mb-12 flex items-baseline justify-between">
          <p className="text-xs uppercase tracking-[0.28em] text-ink-dim">Trabajo</p>
          <p className="text-xs uppercase tracking-[0.28em] text-ink-dim tabular-nums">
            {String(projects.length).padStart(2, "0")} proyectos
          </p>
        </div>

        <ul className="border-t border-line">
          {projects.map((p, i) => (
            <li key={p.slug}>
              <Row project={p} index={i} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
