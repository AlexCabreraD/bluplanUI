import { notFound } from "next/navigation";

import ServicesCTA from "@/components/ServicesCTA";
import PageLayout from "@/components/layout/PageLayout";
import ErrorBoundary from "@/components/ui/ErrorBoundary";
import FeatureIcon from "@/components/ui/FeatureIcon";
import OptimizedImage from "@/components/ui/OptimizedImage";
import { getProjectById } from "@/lib/data";
import type { ProjectPageProps } from "@/types";

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;

  const project = getProjectById(slug);

  if (!project) {
    notFound();
  }

  return (
    <ErrorBoundary>
      <PageLayout>
        {/* Hero Section */}
        <section className="relative bg-white">
          {/* Full-width hero image */}
          <div className="relative w-full h-[70vh] min-h-[600px]">
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
          <div className="relative -mt-32 z-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-[832px] mx-auto">
                <div className="bg-white px-[60px] pt-[40px] pb-[60px]">
                  {/* Project Title */}
                  <h1 className="text-5xl font-bold text-black mb-2">{project.hoverName}</h1>
                  <p className="text-base text-gray-700 mb-8">{project.location}</p>

                  {/* Practice and Services Line */}
                  <div className="flex items-start gap-x-16 mb-8">
                    <div className="text-sm text-gray-700">
                      <span className="font-semibold text-gray-900">Category</span> —{" "}
                      {project.category || "Residential"}
                    </div>
                    {project.services && (
                      <div className="text-sm text-gray-700">
                        <span className="font-semibold text-gray-900">Services</span> —{" "}
                        {project.services.join(", ")}
                      </div>
                    )}
                  </div>

                  {/* Divider Line */}
                  <div className="border-t border-gray-300 mb-8"></div>

                  {/* Description */}
                  <p className="text-base text-gray-700 leading-relaxed mb-12">
                    {project.description}
                  </p>

                  {/* Divider Line */}
                  <div className="border-t border-gray-300 mb-8"></div>

                  {/* Features Section */}
                  <div>
                    <h3 className="text-base font-semibold text-gray-900 mb-8">Specifications</h3>
                    <div className="flex items-center gap-x-12 mb-8">
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
                        <h4 className="text-sm font-semibold text-gray-900 mb-4">Key Features</h4>
                        <ul className="text-sm text-gray-700 space-y-2">
                          {project.features.map((feature, index) => (
                            <li key={`feature-${index}`} className="flex items-center">
                              <span className="w-1.5 h-1.5 bg-[#009ce0] rounded-full mr-3 flex-shrink-0"></span>
                              {feature}
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

        {/* Full-Width Image Gallery */}
        <section className="bg-white">
          {/* Large Single Image */}
          <div className="relative w-full mb-2">
            <OptimizedImage
              src={project.galleryImages[1]}
              alt={`${project.hoverName} - Gallery Image 1`}
              width={1920}
              height={1080}
              className="w-full h-auto object-cover"
              quality="high"
              sizes="100vw"
            />
          </div>

          {/* Two Column Grid - CTA Box Width */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-2 mb-2">
              <div className="relative h-[640px]">
                <OptimizedImage
                  src={project.galleryImages[2]}
                  alt={`${project.hoverName} - Gallery Image 2`}
                  fill
                  className="object-cover"
                  quality="high"
                />
              </div>
              <div className="relative h-[640px]">
                <OptimizedImage
                  src={project.galleryImages[3]}
                  alt={`${project.hoverName} - Gallery Image 3`}
                  fill
                  className="object-cover"
                  quality="high"
                />
              </div>
            </div>

            {/* Final Image - Full Size */}
            <div className="relative w-full">
              <OptimizedImage
                src={project.galleryImages[4]}
                alt={`${project.hoverName} - Gallery Image 4`}
                width={1920}
                height={1080}
                className="w-full h-auto object-cover"
                quality="high"
                sizes="(max-width: 1280px) 100vw, 1280px"
              />
            </div>
          </div>
        </section>

        <ServicesCTA />
      </PageLayout>
    </ErrorBoundary>
  );
}
