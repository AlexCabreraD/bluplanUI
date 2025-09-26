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
                  <h1 className="text-5xl font-bold text-black mb-2">39th Street</h1>
                  <p className="text-base text-gray-700 mb-8">City, ST</p>

                  {/* Practice and Services Line */}
                  <div className="flex items-start gap-x-16 mb-8">
                    <div className="text-sm text-gray-700">
                      <span className="font-semibold text-gray-900">Practice</span> — Lorem Ipsum
                    </div>
                    <div className="text-sm text-gray-700">
                      <span className="font-semibold text-gray-900">Services</span> — Lorem Ipsum,
                      Lorem Ipsum
                    </div>
                  </div>

                  {/* Divider Line */}
                  <div className="border-t border-gray-300 mb-8"></div>

                  {/* Description */}
                  <p className="text-base text-gray-700 leading-relaxed mb-12">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                    fugiat nulla pariatur.
                  </p>

                  {/* Divider Line */}
                  <div className="border-t border-gray-300 mb-8"></div>

                  {/* Features Section */}
                  <div>
                    <h3 className="text-base font-semibold text-gray-900 mb-8">Features</h3>
                    <div className="flex items-center gap-x-12">
                      <FeatureIcon type="bed" value={project.bedrooms} label="Bed" />
                      <FeatureIcon type="bath" value={project.bathrooms} label="Bath" />
                      <FeatureIcon type="sqft" value={project.sqft} label="ft²" />
                      <FeatureIcon type="story" value={2} label="Story" />
                    </div>
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
