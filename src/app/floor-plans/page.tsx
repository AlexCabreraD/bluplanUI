import FloorPlansSection from "../../components/FloorPlansSection";
import PageHero from "../../components/PageHero";
import PageLayout from "../../components/PageLayout";
import ServicesCTA from "../../components/ServicesCTA";

export default function FloorPlans() {
  return (
    <PageLayout>
      <PageHero
        title="Floor Plans"
        subtitle="Innovative, functional, and personalized residential design solutions."
        imageSrc="/images/floors/floorsHero.jpg"
        imageAlt="Modern architectural floor plan design and residential layout"
      />
      <FloorPlansSection showFilters={true} />
      <ServicesCTA />
    </PageLayout>
  );
}
