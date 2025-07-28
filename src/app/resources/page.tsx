import PageLayout from "../../components/PageLayout";
import PageHero from "../../components/PageHero";
import ServicesCTA from "../../components/ServicesCTA";
import Divider from "../../components/Divider";

export default function Resources() {
  return (
    <PageLayout>
      <PageHero
        title="Resources"
        subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."
        imageSrc="/images/resources/hero/resources-hero.jpg"
        imageAlt="BluPlan Studio resources and architectural design guides"
      />
      <Divider variant="grey" />
      <ServicesCTA />
    </PageLayout>
  );
}