// Single source of truth for site copy & data.
// Edit here to update the site — components read from this file.

export const site = {
  name: "Aguaviva",
  domain: "aguaviva.ai",
  // Working tagline — grounded in the studio's own self-description.
  // (No locked tagline yet; easy to swap.)
  tagline: "A culture & growth studio",
  emailPrimary: "marcelo@aguaviva.ai",
  emailProduction: "ash@aguaviva.ai",
  locations: "Puerto Rico · Mexico City",
} as const;

export const nav = [
  { label: "Work", href: "#work" },
  { label: "Approach", href: "#approach" },
  { label: "Studio", href: "#studio" },
  { label: "Contact", href: "#contact" },
] as const;

export const hero = {
  eyebrow: "Culture & growth studio",
  // Gallery-title headline. "Current" = a water current, and being current.
  headline: "Brands with a current.",
  lead:
    "Aguaviva builds identities, cinematic websites, and cultural stories for a hand-picked few. Fewer things, made properly — a human voice over machine filler.",
  ctaPrimary: { label: "Let’s talk", href: "#contact" },
  ctaSecondary: { label: "See the work", href: "#work" },
} as const;

export type Project = {
  slug: string;
  title: string;
  client: string;
  category: string;
  year: string;
  blurb: string;
  // Organic accent used for the gallery plate until real imagery is dropped in.
  accent: string;
  accentSoft: string;
  href?: string;
};

export const projects: Project[] = [
  {
    slug: "zapatero",
    title: "Zapatero Films",
    client: "Kacho López",
    category: "Brand & Film",
    year: "2026",
    blurb:
      "A brand identity and a cultural-article website for a legendary Puerto Rican film house — an editorial archive of its work, from cinema to music video, told with journalistic weight.",
    accent: "#b4551f",
    accentSoft: "#f0d9c4",
  },
  {
    slug: "suelo",
    title: "Suelo",
    client: "suelo.mx",
    category: "Brand & Web",
    year: "2026",
    blurb:
      "Identity and a cinematic site that turns a personal restoration practice into a real-estate house — bilingual, image-forward, with an interactive experience for investors.",
    accent: "#9a6b3f",
    accentSoft: "#ecdcc6",
    href: "https://suelo.mx",
  },
  {
    slug: "veloce",
    title: "Veloce",
    client: "Power Sports PR",
    category: "Brand & Voice",
    year: "2025",
    blurb:
      "A full brand ecosystem for a Puerto Rican motorcycle marque — naming, a complete voice system built around “Va contigo,” and a site made to sell dealers, not units.",
    accent: "#1f4f7a",
    accentSoft: "#cfdcea",
  },
  {
    slug: "e19",
    title: "E19",
    client: "Elite Drafting & Design",
    category: "Brand & Web",
    year: "2025",
    blurb:
      "Brand and a lead-generating site for a glass-industry engineering firm — technical credibility made legible, with automated take-off tools as the hook.",
    accent: "#2b6f6a",
    accentSoft: "#cfe3e0",
  },
  {
    slug: "rainado",
    title: "Rainado",
    client: "Independent artist",
    category: "Art Direction",
    year: "2025",
    blurb:
      "A conceptual landing page that gathers an artist’s scattered links into a single, art-directed place — small in scope, precise in feeling.",
    accent: "#5b4b8a",
    accentSoft: "#d9d2ec",
  },
];

export const approach = {
  eyebrow: "Approach",
  headline: "Fewer things, made properly.",
  lead:
    "We work lean and senior — directing, not operating a machine. AI is for exploration; the final voice is human. We call it the maximum viable product: everything worth putting on the screen, and nothing that isn’t.",
  services: [
    {
      title: "Brand identity",
      body:
        "Logotype, sub-marks, type and color systems, and a functional brand book teams can actually use.",
    },
    {
      title: "Voice & strategy",
      body:
        "Bilingual positioning and voice guidelines — principles, lexicon, and the phrases a brand is allowed to own.",
    },
    {
      title: "Cinematic websites",
      body:
        "Image-forward, high-performance sites built like a piece of art — from a fast prototype to a real CMS.",
    },
    {
      title: "Cultural storytelling",
      body:
        "Scrolling, journalistic project pages with poetic density — work read as cultural impact, not commercial copy.",
    },
  ],
} as const;

export const studio = {
  eyebrow: "Studio",
  headline: "We say “we,” not “I.”",
  body: [
    "Aguaviva means living water — a jellyfish. The name is deliberate: something organic and adaptable, and, yes, the kind that stings. We are a small, senior team that would rather do a handful of things at a very high level than a lot of things at a middling one.",
    "We believe in the revenge of the humanities — that language, taste, and recorded human conversation are the real engine behind good work. We build for a hand-picked roster, and we want to give Latin American creative talent a way to make work that travels.",
  ],
  team: [
    { name: "Marcelo Planchart", role: "Direction & partnerships" },
    { name: "Ashton Stoop", role: "Production & systems" },
    { name: "Louis", role: "Design partner" },
  ],
} as const;

export const contact = {
  eyebrow: "Contact",
  headline: "Let’s make something with a pulse.",
  lead:
    "Tell us what you’re building. If it’s the right fit, we’ll make it properly.",
} as const;
