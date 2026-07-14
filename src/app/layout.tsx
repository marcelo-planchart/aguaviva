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
    default: "Aguaviva — Boutique creative studio",
    template: "%s · Aguaviva",
  },
  description:
    "Aguaviva is a boutique creative studio. We build brands and campaigns with a human voice — fewer things, done properly.",
  openGraph: {
    title: "Aguaviva — Boutique creative studio",
    description:
      "A boutique creative studio building brands and campaigns with a human voice.",
    url: "https://aguaviva.ai",
    siteName: "Aguaviva",
    type: "website",
  },
  icons: {
    icon: "/brand/aguaviva-logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-wall text-ink">
        {children}
      </body>
    </html>
  );
}
