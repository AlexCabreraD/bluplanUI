import PageLayout from "../../components/PageLayout";
import PageHero from "../../components/PageHero";
import ProjectsSection from "../../components/ProjectsSection";
import ServicesCTA from "../../components/ServicesCTA";
import Divider from "../../components/Divider";

export default function Projects() {
  return (
    <PageLayout>
      <PageHero
        title="Projects"
        subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."
        imageSrc="/images/projects/hero/projectsHero.jpg"
        imageAlt="Innovative residential projects and modern architectural designs"
      />
      <ProjectsSection />
      <Divider variant="grey" />
      <ServicesCTA />
    </PageLayout>
  );
}