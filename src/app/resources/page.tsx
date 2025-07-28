import Accordion from "../../components/Accordion";
import Divider from "../../components/Divider";
import PageHero from "../../components/PageHero";
import PageLayout from "../../components/PageLayout";
import ResponsiveContainer from "../../components/ResponsiveContainer";
import ServicesCTA from "../../components/ServicesCTA";
import { generalFaqData, financingFaqData, permittingFaqData } from "../../data/faqData";

const FAQ_SECTIONS = [
  {
    title: "Frequently Asked Questions",
    data: generalFaqData,
  },
  {
    title: "Top 5 ADU Financing Questions (California)",
    data: financingFaqData,
  },
  {
    title: "Top 5 ADU Permitting & Building Questions (California)",
    data: permittingFaqData,
  },
] as const;

const FaqSection = ({
  title,
  data,
  isLast = false,
}: {
  title: string;
  data: typeof generalFaqData;
  isLast?: boolean;
}) => (
  <section
    className={`
    w-full 
    py-8 sm:py-12 lg:py-16 
    ${!isLast ? "border-b border-gray-100 sm:border-none" : ""}
  `}
  >
    <ResponsiveContainer>
      <Accordion title={title} qas={data} />
    </ResponsiveContainer>
  </section>
);

export default function Resources() {
  return (
    <PageLayout>
      <PageHero
        title="Resources"
        subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."
        imageSrc="/images/resources/hero/resources-hero.jpg"
        imageAlt="BluPlan Studio resources and architectural design guides"
      />

      <div className="bg-white">
        {FAQ_SECTIONS.map((section, index) => (
          <FaqSection
            key={section.title}
            title={section.title}
            data={section.data}
            isLast={index === FAQ_SECTIONS.length - 1}
          />
        ))}
      </div>

      <Divider variant="grey" />
      <ServicesCTA />
    </PageLayout>
  );
}
