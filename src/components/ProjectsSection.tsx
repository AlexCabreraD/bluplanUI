import Link from "next/link";

import OptimizedImage from "@/components/ui/OptimizedImage";
import { projects } from "@/lib/data";
import { formatNumber } from "@/lib/utils";

export default function ProjectsSection() {
  return (
    <section className="py-8 sm:py-12 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {projects.map(project => (
            <Link
              key={project.id}
              href={`/projects/${project.id}`}
              className="bg-white group cursor-pointer block"
            >
              <div className="mb-3 sm:mb-4 relative overflow-hidden h-[250px] sm:h-[280px] md:h-[300px] bg-gray-100">
                <OptimizedImage
                  src={project.image}
                  alt={`${project.title} project`}
                  width={400}
                  height={300}
                  className="w-full h-full object-cover object-center"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-[rgba(15,20,37,0.5)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end text-white p-4 sm:p-6">
                  <h4 className="text-lg sm:text-xl font-bold mb-1">{project.hoverName}</h4>
                  <p className="text-xs sm:text-sm font-light">{project.hoverAddress}</p>
                </div>
              </div>
              <div>
                <h3 className="text-base sm:text-lg text-black mb-1">
                  <span className="font-bold">{project.title}</span> — {project.subtitle}
                </h3>
                <p className="text-xs sm:text-sm text-gray-700">
                  {project.bedrooms} Bed • {project.bathrooms} Bath • {formatNumber(project.sqft)}{" "}
                  ft²
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
