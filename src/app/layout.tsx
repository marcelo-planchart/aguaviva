import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
  axes: ["opsz", "SOFT", "WONK"],
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://aguaviva.ai"),
  title: {
    default: "Aguaviva — Estudio de cultura y crecimiento",
    template: "%s · Aguaviva",
  },
  description:
    "Aguaviva es un estudio creativo boutique. Hacemos marcas y campañas con voz humana — menos cosas, bien hechas.",
  openGraph: {
    title: "Aguaviva — Estudio de cultura y crecimiento",
    description:
      "Un estudio creativo boutique que hace marcas y campañas con voz humana.",
    url: "https://aguaviva.ai",
    siteName: "Aguaviva",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${fraunces.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-wall text-ink">
        {children}
      </body>
    </html>
  );
}
