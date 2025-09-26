import PageHero from "@/components/PageHero";
import ServicesCTA from "@/components/ServicesCTA";
import PageLayout from "@/components/layout/PageLayout";
import ContactForm from "@/components/ui/ContactForm";
import Divider from "@/components/ui/Divider";

export default function ContactUs() {
  return (
    <PageLayout>
      <PageHero
        title="Contact Us"
        subtitle="Let's connect. Send us a general inquiry and a member of our team will get back to you shortly."
        imageSrc="/images/contact/hero/contact-us-hero.jpg"
        imageAlt="Contact BluPlan Studio - Get in touch with our architectural design team"
      />
      <ContactForm />
      <Divider variant="grey" />
      <ServicesCTA />
    </PageLayout>
  );
}
