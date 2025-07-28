import PageLayout from "../../components/PageLayout";
import PageHero from "../../components/PageHero";
import ServicesCTA from "../../components/ServicesCTA";
import Divider from "../../components/Divider";

export default function ContactUs() {
  return (
    <PageLayout>
      <PageHero
        title="Contact Us"
        subtitle="Let's connect. Send us a general inquiry and a member of our team will get back to you shortly."
        imageSrc="/images/contact/hero/contact-us-hero.jpg"
        imageAlt="Contact BluPlan Studio - Get in touch with our architectural design team"
      />
      <Divider variant="grey" />
      <ServicesCTA />
    </PageLayout>
  );
}