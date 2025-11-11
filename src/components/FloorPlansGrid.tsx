import Image from "next/image";

export interface FloorPlan {
  id: string;
  title: string;
  details: string;
  bedrooms: number;
  bathrooms: number;
  sqft: number;
  image: string;
  size: "Light" | "Medium" | "Small" | "Compact";
}

const allFloorPlans: FloorPlan[] = [
  {
    id: "casita",
    title: "Casita",
    details: "1 Bed • 1 Bath • 425 ft²",
    bedrooms: 1,
    bathrooms: 1,
    sqft: 425,
    image: "/images/shared/floorplans/BP-Web-Home-Floor-Plans-Casita.png",
    size: "Compact",
  },
  {
    id: "nook",
    title: "Nook",
    details: "1 Bed • 1 Bath • 425 ft²",
    bedrooms: 1,
    bathrooms: 1,
    sqft: 425,
    image: "/images/shared/floorplans/BP-Web-Home-Floor-Plans-nook.png",
    size: "Compact",
  },
  {
    id: "retreat",
    title: "Retreat",
    details: "2 Bed • 1 Bath • 425 ft²",
    bedrooms: 2,
    bathrooms: 1,
    sqft: 425,
    image: "/images/shared/floorplans/BP-Web-Home-Floor-Plans-Retreat.png",
    size: "Small",
  },
  {
    id: "sequoia",
    title: "Sequoia",
    details: "3 Bed • 2 Bath • 425 ft²",
    bedrooms: 3,
    bathrooms: 2,
    sqft: 425,
    image: "/images/shared/floorplans/BP-Web-Home-Floor-Plans-sequoia.png",
    size: "Medium",
  },
  {
    id: "teak",
    title: "Teak",
    details: "3 Bed • 1 Bath • 425 ft²",
    bedrooms: 3,
    bathrooms: 1,
    sqft: 425,
    image: "/images/shared/floorplans/BP-Web-Home-Floor-Plans-teak.png",
    size: "Light",
  },
];

interface FloorPlansGridProps {
  floorPlans?: FloorPlan[];
  showLimit?: number;
  className?: string;
  cardClassName?: string;
}

export default function FloorPlansGrid({
  floorPlans = allFloorPlans,
  showLimit,
  className = "",
  cardClassName = "",
}: FloorPlansGridProps) {
  const displayPlans = showLimit ? floorPlans.slice(0, showLimit) : floorPlans;

  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 ${className}`}>
      {displayPlans.map(plan => (
        <div
          key={plan.id}
          className={`group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 ${cardClassName}`}
        >
          <div className="p-4 sm:p-6 bg-gradient-to-br from-gray-50 to-gray-100">
            <Image
              src={plan.image}
              alt={`${plan.title} floor plan`}
              width={400}
              height={300}
              className="w-full h-auto rounded-lg"
            />
          </div>
          <div className="p-4 sm:p-6 relative overflow-hidden">
            <div className="absolute inset-0 bg-[#009ce0] translate-y-full group-hover:translate-y-0 transition-transform duration-[175ms] ease-in-out"></div>
            <div className="relative z-10">
              <h3 className="text-base sm:text-lg font-semibold text-gray-900 group-hover:text-white mb-2 transition-colors duration-[175ms]">
                {plan.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-600 group-hover:text-white/90 transition-colors duration-[175ms]">
                {plan.details}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export { allFloorPlans };
