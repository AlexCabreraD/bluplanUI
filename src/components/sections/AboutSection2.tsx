import { Atom, Eye, Target, TrendingUp } from "lucide-react";

const coreValues = [
  {
    icon: Atom,
    title: "Integrity",
    description:
      "We build trusted relationships with vendors and crews through integrity, respect, and accountability. Fair, timely payment and recognition of contributions are our standard. We do what's right—always—ensuring every project stays true to your vision, goals, and budget. With Bluplan, you can count on honesty, transparency, and the highest ethical standards.",
  },
  {
    icon: Eye,
    title: "Transparency",
    description:
      "We value clear, straightforward communication. We're upfront about costs, timelines, and challenges, so you're never left guessing. From scope to schedule, we aim to keep you informed and involved throughout the process. While no project is without its bumps, we don't hide behind fine print or vague updates. With Bluplan, you'll always know where things stand—because honest work deserves honest communication.",
  },
  {
    icon: Target,
    title: "Client Focused",
    description:
      "We start by understanding what matters most to you. Your goals, your budget, your timeline—they shape how we approach every phase of the project. We stay responsive, adaptable, and attentive, making sure your priorities are reflected in the work we do. It's about delivering results that align with your vision, and making the process as smooth and straightforward as possible.",
  },
  {
    icon: TrendingUp,
    title: "Continuous Improvement",
    description:
      "We're always looking for ways to do better—on the job and behind the scenes. At Bluplan, every project is a chance to learn, refine, and raise the bar. We stay open to feedback, adapt to new challenges, and invest in smarter tools and methods. It's not about chasing perfection—it's about showing up better every time, for our clients, our crews, and the work itself.",
  },
];

export default function AboutSection2() {
  return (
    <section className="py-8 sm:py-12 lg:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-[52px] lg:leading-[52px] font-bold text-black">
            Our Core Values
          </h2>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
          {coreValues.map((value, index) => {
            const IconComponent = value.icon;
            return (
              <div key={index} className="bg-gray-100 p-4 sm:p-6 lg:p-8">
                <div className="flex items-center mb-4 sm:mb-6">
                  <div className="mr-3 sm:mr-4 flex-shrink-0">
                    <IconComponent
                      size={32}
                      className="text-[#009ce0] sm:w-10 sm:h-10 lg:w-10 lg:h-10"
                      strokeWidth={1}
                    />
                  </div>
                  <h3 className="text-xl sm:text-2xl lg:text-[28px] lg:leading-[28px] font-light text-black">
                    {value.title}
                  </h3>
                </div>
                <p className="text-sm sm:text-base lg:text-[16px] lg:leading-[24px] font-light text-gray-800">
                  {value.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
