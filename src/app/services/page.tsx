import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ServicesHero from "../../components/ServicesHero";
import ServicesSection1 from "../../components/ServicesSection1";
import ServicesCTA from "../../components/ServicesCTA";

export default function Services() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <ServicesHero />
        <ServicesSection1 />
        <ServicesCTA />
      </main>
      <Footer />
    </div>
  );
}