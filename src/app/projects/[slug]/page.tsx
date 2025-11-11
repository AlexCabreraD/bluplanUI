import { notFound } from "next/navigation";

import ProjectGallery from "@/components/ProjectGallery";
import ServicesCTA from "@/components/ServicesCTA";
import PageLayout from "@/components/layout/PageLayout";
import ErrorBoundary from "@/components/ui/ErrorBoundary";
import FeatureIcon from "@/components/ui/FeatureIcon";
import OptimizedImage from "@/components/ui/OptimizedImage";
import { sanityProjectToProject } from "@/lib/sanity-helpers";
import type { ProjectPageProps } from "@/types";

import { getProjectBySlug, getProjectSlugs } from "../../../../sanity/lib/fetch";

export async function generateStaticParams() {
  const slugs = await getProjectSlugs();
  return slugs.map((slug: string) => ({
    slug,
  }));
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;

  const sanityProject = await getProjectBySlug(slug);

  if (!sanityProject) {
    notFound();
  }

  const project = sanityProjectToProject(sanityProject);

  return (
    <ErrorBoundary>
      <PageLayout>
        {/* Hero Section */}
        <section className="relative bg-white">
          {/* Full-width hero image */}
          <div className="relative w-full h-[50vh] sm:h-[60vh] lg:h-[70vh] min-h-[400px] sm:min-h-[500px] lg:min-h-[600px]">
            <OptimizedImage
              src={project.heroImage}
              alt={project.hoverName}
              fill
              className="object-cover"
              priority
              quality="high"
              sizes="100vw"
              objectFit="cover"
              objectPosition="center"
            />
          </div>

          {/* White Content Card Overlay */}
          <div className="relative -mt-16 sm:-mt-24 lg:-mt-32 z-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-[832px] mx-auto">
                <div className="bg-white px-4 sm:px-8 lg:px-[60px] pt-6 sm:pt-8 lg:pt-[40px] pb-6 sm:pb-8 lg:pb-12">
                  {/* Project Title */}
                  <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-black mb-2 leading-tight">
                    {project.hoverName}
                  </h1>
                  <p className="text-sm sm:text-base text-gray-700 mb-6 sm:mb-8">
                    {project.location}
                  </p>

                  {/* Practice and Services Line */}
                  <div className="flex flex-col sm:flex-row sm:items-start gap-y-3 sm:gap-x-8 lg:gap-x-16 mb-6 sm:mb-8">
                    <div className="text-xs sm:text-sm text-gray-700">
                      <span className="font-semibold text-gray-900">Category</span> —{" "}
                      {project.category || "Residential"}
                    </div>
                    {project.services && (
                      <div className="text-xs sm:text-sm text-gray-700">
                        <span className="font-semibold text-gray-900">Services</span> —{" "}
                        {project.services.join(", ")}
                      </div>
                    )}
                  </div>

                  {/* Divider Line */}
                  <div className="border-t border-gray-300 mb-6 sm:mb-8"></div>

                  {/* Description */}
                  <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-8 sm:mb-12">
                    {project.description}
                  </p>

                  {/* Divider Line */}
                  <div className="border-t border-gray-300 mb-6 sm:mb-8"></div>

                  {/* Features Section */}
                  <div>
                    <h3 className="text-sm sm:text-base font-semibold text-gray-900 mb-6 sm:mb-8">
                      Specifications
                    </h3>
                    <div className="grid grid-cols-2 sm:flex sm:items-center gap-4 sm:gap-6 lg:gap-8 xl:gap-12 mb-6 sm:mb-8">
                      <FeatureIcon type="bed" value={project.bedrooms} label="Bed" />
                      <FeatureIcon type="bath" value={project.bathrooms} label="Bath" />
                      <FeatureIcon type="sqft" value={project.sqft} label="ft²" />
                      {project.stories && (
                        <FeatureIcon type="story" value={project.stories} label="Story" />
                      )}
                    </div>

                    {/* Project Features */}
                    {project.features && project.features.length > 0 && (
                      <div>
                        <h4 className="text-xs sm:text-sm font-semibold text-gray-900 mb-3 sm:mb-4">
                          Key Features
                        </h4>
                        <ul className="text-xs sm:text-sm text-gray-700 space-y-2">
                          {project.features.map((feature, index) => (
                            <li key={`feature-${index}`} className="flex items-start">
                              <span className="w-1.5 h-1.5 bg-[#009ce0] rounded-full mr-3 flex-shrink-0 mt-1.5"></span>
                              <span className="flex-1">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Artistic Gallery Section */}
        <section className="bg-white py-12 sm:py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Gallery Grid - Asymmetric Layout */}
            <ProjectGallery images={project.galleryImages} projectName={project.hoverName} />
          </div>
        </section>

        <ServicesCTA />
      </PageLayout>
    </ErrorBoundary>
  );
}
