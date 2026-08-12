// Fuente única de copy y datos del sitio.
// Edita aquí para actualizar el sitio — los componentes leen de este archivo.

export const site = {
  name: "Aguaviva",
  domain: "aguaviva.ai",
  // Frase de trabajo — basada en cómo el estudio se describe a sí mismo.
  tagline: "Estudio de cultura y crecimiento",
  emailPrimary: "marcelo@aguaviva.ai",
  emailProduction: "ash@aguaviva.ai",
  locations: "Puerto Rico · Ciudad de México",
} as const;

export const nav = [
  { label: "Trabajo", href: "#work" },
  { label: "Estudio", href: "#studio" },
  { label: "Contacto", href: "#contact" },
] as const;

export const hero = {
  eyebrow: "Estudio de cultura y crecimiento",
  // Título tipo galería. "Corriente" = corriente de agua, y estar en la corriente.
  headline: "Marcas con corriente.",
  lead:
    "En Aguaviva hacemos identidades, sitios cinematográficos e historias culturales para unos pocos, escogidos a mano. Menos cosas, bien hechas — voz humana por encima del relleno de máquina.",
  ctaPrimary: { label: "Hablemos", href: "#contact" },
  ctaSecondary: { label: "Ver el trabajo", href: "#work" },
} as const;

export type Project = {
  slug: string;
  title: string;
  client: string;
  category: string;
  year: string;
  blurb: string;
  // Acento orgánico para el plate de la galería mientras no hay imagen real.
  accent: string;
  accentSoft: string;
  href?: string;
  // Still real opcional. Ruta local ("/work/zapatero.jpg") o URL completa.
  // Cuando existe, reemplaza el plate de color. Se suelta uno por proyecto.
  image?: string;
  imageAlt?: string;
  // Video opcional. Ruta local ("/work/veloce.mp4") o URL completa.
  // Cuando existe, reemplaza a la imagen: se reproduce en silencio, en loop.
  // Usa `image` como poster (primer fotograma) mientras carga.
  video?: string;
  videoAlt?: string;
};

export const projects: Project[] = [
  {
    slug: "rainao",
    title: "Rainao",
    client: "Artista independiente",
    category: "Dirección de arte",
    year: "2025",
    blurb:
      "Una landing conceptual que junta los links dispersos de un artista en un solo lugar, con dirección de arte — pequeña en alcance, precisa en sensación.",
    accent: "#5b4b8a",
    accentSoft: "#d9d2ec",
  },
  {
    slug: "catori",
    title: "Catori",
    client: "Joyería",
    category: "Marca y web",
    year: "2026",
    blurb:
      "Refresh de marca y una experiencia web a medida para una casa de joyería ética — oro, plata y bronce 100% reciclados. Un mundo visual entre lo místico y lo premium; una transformación digital para su flagship de e-commerce.",
    accent: "#7a6a34",
    accentSoft: "#e6dcbf",
  },
  {
    slug: "zapatero",
    title: "Zapatero Films",
    client: "Kacho López",
    category: "Marca y cine",
    year: "2026",
    blurb:
      "Identidad de marca y un sitio-artículo cultural para una casa de cine puertorriqueña legendaria — un archivo editorial de su obra, del cine al video musical, contado con peso periodístico.",
    accent: "#b4551f",
    accentSoft: "#f0d9c4",
    image: "/work/zapatero.jpg",
    imageAlt: "Fotograma de El Apagón — un retrato de personaje con luz cálida",
  },
  {
    slug: "veloce",
    title: "Veloce",
    client: "Power Sports PR",
    category: "Marca y voz",
    year: "2025",
    blurb:
      "Un ecosistema de marca completo para una marca puertorriqueña de motoras — naming, un sistema de voz entero alrededor de “Va contigo”, y un sitio hecho para vender dealers, no unidades.",
    accent: "#1f4f7a",
    accentSoft: "#cfdcea",
    // Suelta el still real de Veloce en public/work/veloce.jpg y descomenta:
    // image: "/work/veloce.jpg",
    // imageAlt: "Motora Veloce — still de estudio",
    // O suelta un clip corto en silencio en public/work/veloce.mp4 y descomenta.
    // `image` (arriba) sirve de poster mientras carga el video.
    // video: "/work/veloce.mp4",
    // videoAlt: "Motora Veloce — clip de estudio",
  },
];

export const approach = {
  eyebrow: "Enfoque",
  headline: "Menos cosas, bien hechas.",
  lead:
    "Trabajamos con un equipo chico y senior — dirigimos, no operamos una máquina. La IA es para explorar; la voz final es humana. Le decimos el producto viable máximo: todo lo que vale la pena poner en pantalla, y nada que no.",
  services: [
    {
      title: "Identidad de marca",
      body:
        "Logotipo, submarcas, sistemas de tipografía y color, y un brand book funcional que el equipo de verdad puede usar.",
    },
    {
      title: "Voz y estrategia",
      body:
        "Posicionamiento y guías de voz bilingües — principios, léxico, y las frases que una marca tiene permitido adueñarse.",
    },
    {
      title: "Sitios cinematográficos",
      body:
        "Sitios con la imagen al frente, de alto rendimiento, hechos como una pieza de arte — del prototipo rápido a un CMS real.",
    },
    {
      title: "Narrativa cultural",
      body:
        "Páginas de proyecto tipo artículo, con densidad poética — trabajo que se lee como impacto cultural, no como copy comercial.",
    },
  ],
} as const;

export const studio = {
  eyebrow: "Estudio",
  headline: "Decimos “nosotros”, no “yo”.",
  body: [
    "Aguaviva quiere decir agua viva — una medusa. El nombre es a propósito: algo orgánico y adaptable, y sí, de las que pican. Somos un equipo chico y senior que prefiere hacer un puñado de cosas a nivel altísimo antes que un montón a medias.",
    "Creemos en la revancha de las humanidades — que el lenguaje, el gusto y la conversación humana grabada son el motor real detrás del buen trabajo. Construimos para un roster escogido a mano, y queremos darle al talento creativo latinoamericano una forma de hacer trabajo que viaje.",
  ],
  team: [
    { name: "Marcelo Planchart", role: "Dirección y alianzas" },
    { name: "Ashton Stoop", role: "Producción y sistemas" },
    { name: "Louis", role: "Socio de diseño" },
  ],
} as const;

export const contact = {
  eyebrow: "Contacto",
  headline: "Hagamos algo con pulso.",
  lead:
    "Cuéntanos qué estás construyendo. Si hace fit, lo hacemos bien.",
} as const;
