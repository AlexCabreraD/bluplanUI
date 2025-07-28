import Image from "next/image";

const textContent = [
  {
    text: "Founded by three friends with a vision to simplify residential construction, we focus exclusively on design and permitting. Whether you're planning an ADU, home addition, remodel, or custom build, we deliver functional, personalized plans that move smoothly through the permitting process."
  },
  {
    text: "Permitting can be overwhelming. We handle it all—from architectural design to full permit submittals—so you don't have to worry about zoning laws, environmental rules, or shifting regulations."
  },
  {
    text: "Our approach is collaborative and intentional. Every plan starts with your vision and ends with a clear path to construction. With Bluplan, you get precision, transparency, and a team that's fully in your corner."
  },
  {
    text: "Let's design your future—stress-free. Reach out today for a free consultation.",
    className: "text-[32px] leading-[36px] text-[#009ce0] font-medium"
  }
];

export default function AboutSection1() {
  return (
    <section className="py-8 sm:py-12 lg:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Image */}
        <div className="mb-8 sm:mb-12 lg:mb-16">
          <Image
            src="/images/about/gallery/contact-us-hero.jpg"
            alt="About BluPlan Studio - Professional architectural team and design process"
            width={1200}
            height={400}
            className="w-full h-auto"
            priority
          />
        </div>

        {/* Text Content */}
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col lg:flex-row">
            {/* Left Column */}
            <div className="flex-1 lg:pr-6">
              <p className="text-sm sm:text-base text-gray-800 leading-relaxed mb-[18px]">
                {textContent[0].text}
              </p>
              <p className="text-sm sm:text-base text-gray-800 leading-relaxed">
                {textContent[2].text}
              </p>
            </div>
            
            {/* Right Column */}
            <div className="flex-1 lg:pl-6 mt-6 lg:mt-0">
              <p className="text-sm sm:text-base text-gray-800 leading-relaxed mb-[18px]">
                {textContent[1].text}
              </p>
              <p className="text-[32px] leading-[36px] text-[#009ce0] font-medium">
                {textContent[3].text}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}