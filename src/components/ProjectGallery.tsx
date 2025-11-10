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

  const galleryImages = images.slice(1).filter(img => img && img.trim() !== "");

  const openViewer = (galleryIndex: number) => {
    setSelectedImageIndex(galleryIndex);
    setViewerOpen(true);
  };

  return (
    <>
      <div className="grid grid-cols-12 gap-3 sm:gap-4 lg:gap-6">
        {galleryImages[0] && (
          <div
            className="col-span-12 md:col-span-8 relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden group cursor-pointer"
            onClick={() => openViewer(0)}
          >
            <Image
              src={galleryImages[0]}
              alt={`${projectName} - Detail 1`}
              fill
              unoptimized
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center">
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-sm font-medium bg-black/50 px-4 py-2 rounded-full">
                Click to view
              </div>
            </div>
          </div>
        )}
        {galleryImages[1] && (
          <div
            className="col-span-12 md:col-span-4 relative h-[250px] sm:h-[300px] md:h-[500px] lg:h-[600px] overflow-hidden group cursor-pointer"
            onClick={() => openViewer(1)}
          >
            <Image
              src={galleryImages[1]}
              alt={`${projectName} - Detail 2`}
              fill
              unoptimized
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center">
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-sm font-medium bg-black/50 px-4 py-2 rounded-full">
                Click to view
              </div>
            </div>
          </div>
        )}

        {galleryImages[2] && (
          <div
            className="col-span-12 sm:col-span-6 relative h-[280px] sm:h-[350px] lg:h-[450px] overflow-hidden group cursor-pointer"
            onClick={() => openViewer(2)}
          >
            <Image
              src={galleryImages[2]}
              alt={`${projectName} - Detail 3`}
              fill
              unoptimized
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center">
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-sm font-medium bg-black/50 px-4 py-2 rounded-full">
                Click to view
              </div>
            </div>
          </div>
        )}
        {galleryImages[3] && (
          <div
            className="col-span-12 sm:col-span-6 relative h-[280px] sm:h-[350px] lg:h-[450px] overflow-hidden group cursor-pointer"
            onClick={() => openViewer(3)}
          >
            <Image
              src={galleryImages[3]}
              alt={`${projectName} - Detail 4`}
              fill
              unoptimized
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center">
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-sm font-medium bg-black/50 px-4 py-2 rounded-full">
                Click to view
              </div>
            </div>
          </div>
        )}

        {galleryImages[4] && (
          <div
            className="col-span-12 md:col-span-5 relative h-[250px] sm:h-[320px] lg:h-[400px] overflow-hidden group cursor-pointer"
            onClick={() => openViewer(4)}
          >
            <Image
              src={galleryImages[4]}
              alt={`${projectName} - Detail 5`}
              fill
              unoptimized
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center">
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-sm font-medium bg-black/50 px-4 py-2 rounded-full">
                Click to view
              </div>
            </div>
          </div>
        )}
        {galleryImages[5] && (
          <div
            className="col-span-12 md:col-span-7 relative h-[250px] sm:h-[320px] lg:h-[400px] overflow-hidden group cursor-pointer"
            onClick={() => openViewer(5)}
          >
            <Image
              src={galleryImages[5]}
              alt={`${projectName} - Detail 6`}
              fill
              unoptimized
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center">
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-sm font-medium bg-black/50 px-4 py-2 rounded-full">
                Click to view
              </div>
            </div>
          </div>
        )}
      </div>

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
