import PageHero from "../../components/PageHero";
import PageLayout from "../../components/PageLayout";
import ServicesCTA from "../../components/ServicesCTA";
import ServicesSection1 from "../../components/ServicesSection1";

export default function Services() {
  return (
    <PageLayout>
      <PageHero
        title="Services"
        subtitle="Smart design, clear planning, and homes built around your life."
        imageSrc="/images/services/hero/serviceHero.jpg"
        imageAlt="Modern architectural interior with clean lines and professional design"
      />
      <ServicesSection1 />
      <ServicesCTA />
    </PageLayout>
  );
}
