import Image from "next/image";
import Link from "next/link";

import { sanityProjectToProject } from "@/lib/sanity-helpers";
import { formatNumber } from "@/lib/utils";
import type { Project } from "@/types";

import { getProjects } from "../../sanity/lib/fetch";

export default async function ProjectsSection() {
  const sanityProjects = await getProjects();
  const projects: Project[] = sanityProjects.map(sanityProjectToProject);

  return (
    <section className="py-8 sm:py-12 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {projects.length === 0 ? (
          <p className="text-gray-600 text-base sm:text-lg text-center py-12">
            No projects available at the moment. Check back soon!
          </p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {projects.map(project => (
              <Link
                key={project.id}
                href={`/projects/${project.id}`}
                className="bg-white group cursor-pointer block"
              >
                <div className="mb-3 sm:mb-4 relative overflow-hidden h-[380px] sm:h-[440px] md:h-[507px] bg-gray-100">
                  <Image
                    src={project.image}
                    alt={`${project.title} project`}
                    fill
                    unoptimized
                    className="object-cover object-center select-none pointer-events-none"
                    draggable={false}
                  />
                  <div className="absolute inset-0 bg-[rgba(15,20,37,0.5)] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
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
        )}
      </div>
    </section>
  );
}
