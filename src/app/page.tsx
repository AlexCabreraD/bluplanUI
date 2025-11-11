import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import HeroSection from "@/components/sections/HeroSection";
import Section1 from "@/components/sections/Section1";
import Section2 from "@/components/sections/Section2";
import Section3 from "@/components/sections/Section3";
import Section4 from "@/components/sections/Section4";
import Section5 from "@/components/sections/Section5";
import { sanityFeaturedProjectToHomeProject } from "@/lib/sanity-helpers";

import { getFeaturedProjects } from "../../sanity/lib/fetch";

export default async function Home() {
  const sanityFeaturedProjects = await getFeaturedProjects();
  const homeProjects = sanityFeaturedProjects.map(sanityFeaturedProjectToHomeProject);

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 homeProjects={homeProjects} />
        <Section5 />
      </main>
      <Footer />
    </div>
  );
}
