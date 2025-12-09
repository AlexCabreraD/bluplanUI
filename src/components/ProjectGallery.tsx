"use client";

import Image from "next/image";
import { useState } from "react";

import ImageViewer from "./ui/ImageViewer";

interface ProjectGalleryProps {
  images: string[];
  projectName: string;
}

export default function ProjectGallery({ images, projectName }: ProjectGalleryProps) {
  const [viewerOpen, setViewerOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [showAllImages, setShowAllImages] = useState(false);

  const galleryImages = images.filter(img => img && img.trim() !== "");
  const displayedImages = showAllImages ? galleryImages : galleryImages.slice(0, 6);
  const hasMoreImages = galleryImages.length > 6;
  const remainingImagesCount = galleryImages.length - 6;

  const openViewer = (galleryIndex: number) => {
    setSelectedImageIndex(galleryIndex);
    setViewerOpen(true);
  };

  const getImageLayout = (index: number) => {
    const patternIndex = index % 6;

    switch (patternIndex) {
      case 0:
        return {
          colSpan: "col-span-12 md:col-span-8",
          height: "h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px]",
        };
      case 1:
        return {
          colSpan: "col-span-12 md:col-span-4",
          height: "h-[250px] sm:h-[300px] md:h-[500px] lg:h-[600px]",
        };
      case 2:
      case 3:
        return {
          colSpan: "col-span-12 sm:col-span-6",
          height: "h-[280px] sm:h-[350px] lg:h-[450px]",
        };
      case 4:
        return {
          colSpan: "col-span-12 md:col-span-5",
          height: "h-[250px] sm:h-[320px] lg:h-[400px]",
        };
      case 5:
        return {
          colSpan: "col-span-12 md:col-span-7",
          height: "h-[250px] sm:h-[320px] lg:h-[400px]",
        };
      default:
        return {
          colSpan: "col-span-12 sm:col-span-6",
          height: "h-[280px] sm:h-[350px] lg:h-[450px]",
        };
    }
  };

  const renderImage = (image: string, index: number) => {
    const layout = getImageLayout(index);

    return (
      <div
        key={`gallery-image-${index}`}
        className={`${layout.colSpan} relative ${layout.height} overflow-hidden
          group cursor-pointer`}
        onClick={() => openViewer(index)}
      >
        <Image
          src={image}
          alt={`${projectName} - Image ${index + 1}`}
          fill
          unoptimized
          className="object-cover"
        />
        <div
          className="absolute inset-0 bg-[rgba(15,20,37,0.5)] opacity-0
            group-hover:opacity-100 transition-opacity duration-300
            flex items-center justify-center"
        >
          <div className="text-white text-sm font-medium">Click to view</div>
        </div>
      </div>
    );
  };

  return (
    <>
      <div className="grid grid-cols-12 gap-3 sm:gap-4 lg:gap-6">
        {displayedImages.map((image, index) => renderImage(image, index))}
      </div>

      {/* Load More Images Button */}
      {hasMoreImages && !showAllImages && (
        <div className="mt-8 flex justify-center">
          <button
            onClick={() => setShowAllImages(true)}
            className="px-6 py-3 bg-[#009ce0] text-white font-semibold rounded-lg hover:bg-[#0088cc] transition-colors duration-300 shadow-md hover:shadow-lg"
          >
            Load More Images ({remainingImagesCount})
          </button>
        </div>
      )}

      <ImageViewer
        images={galleryImages}
        initialIndex={selectedImageIndex}
        isOpen={viewerOpen}
        onClose={() => setViewerOpen(false)}
        altPrefix={projectName}
      />
    </>
  );
}
