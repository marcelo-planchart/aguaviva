import { SiteHeader } from "@/components/site-header";
import { Hero } from "@/components/hero";
import { Work } from "@/components/work";
import { Approach } from "@/components/approach";
import { Studio } from "@/components/studio";
import { Contact } from "@/components/contact";
import { SiteFooter } from "@/components/site-footer";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <Work />
        <Approach />
        <Studio />
        <Contact />
      </main>
      <SiteFooter />
    </>
  );
}
