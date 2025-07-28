import PageLayout from "../../components/PageLayout";
import PageHero from "../../components/PageHero";
import AboutSection1 from "../../components/AboutSection1";
import AboutSection2 from "../../components/AboutSection2";
import ServicesCTA from "../../components/ServicesCTA";
import Divider from "../../components/Divider";

export default function AboutUs() {
  return (
    <PageLayout>
      <PageHero
        title="About Us"
        subtitle="We turn your building ideas into ready-to-build plans—fast, clear, and hassle-free."
        imageSrc="/images/about/hero/about-us-hero.jpg"
        imageAlt="About BluPlan Studio - Professional architectural team and design process"
      />
      <AboutSection1 />
      <AboutSection2 />
      <Divider variant="grey" />
      <ServicesCTA />
    </PageLayout>
  );
}