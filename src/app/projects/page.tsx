import PageHero from "@/components/PageHero";
import ProjectsSection from "@/components/ProjectsSection";
import ServicesCTA from "@/components/ServicesCTA";
import PageLayout from "@/components/layout/PageLayout";
import Divider from "@/components/ui/Divider";

export default function Projects() {
  return (
    <PageLayout>
      <PageHero
        title="Projects"
        subtitle="Explore our portfolio of thoughtfully designed residential projects that blend innovation, functionality, and architectural excellence."
        imageSrc="/images/projects/hero/projectsHero.jpg"
        imageAlt="Innovative residential projects and modern architectural designs"
      />
      <ProjectsSection />
      <Divider variant="grey" />
      <ServicesCTA />
    </PageLayout>
  );
}
