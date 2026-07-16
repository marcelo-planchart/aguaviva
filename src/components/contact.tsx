import { Jellyfish } from "./jellyfish";
import { contact, site } from "@/content/site";

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-16 bg-deep text-wall">
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <div className="grid gap-12 md:grid-cols-12 md:items-end">
          <div className="md:col-span-8">
            <p className="mb-4 text-xs uppercase tracking-[0.22em] text-white/45">
              04 — {contact.eyebrow}
            </p>
            <h2 className="font-display text-5xl leading-[1.02] tracking-tight md:text-6xl">
              {contact.headline}
            </h2>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-white/60">
              {contact.lead}
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href={`mailto:${site.emailPrimary}`}
                className="bg-white px-7 py-3 text-sm font-semibold tracking-wide text-deep transition-opacity hover:opacity-80"
              >
                Hablemos
              </a>
              <a
                href={`mailto:${site.emailPrimary}`}
                className="text-sm text-white/70 underline-offset-4 hover:text-white hover:underline"
              >
                {site.emailPrimary}
              </a>
            </div>
          </div>

          <div className="hidden justify-end md:col-span-4 md:flex">
            <Jellyfish size={150} tone="white" float className="opacity-70" />
          </div>
        </div>
      </div>
    </section>
  );
}
