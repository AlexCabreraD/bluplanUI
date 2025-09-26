import FloorPlansSection from "@/components/FloorPlansSection";
import PageHero from "@/components/PageHero";
import ServicesCTA from "@/components/ServicesCTA";
import PageLayout from "@/components/layout/PageLayout";

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
