"use client";

import { X, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

interface ImageViewerProps {
  images: string[];
  initialIndex: number;
  isOpen: boolean;
  onClose: () => void;
  altPrefix?: string;
}

export default function ImageViewer({
  images,
  initialIndex,
  isOpen,
  onClose,
  altPrefix = "Image",
}: ImageViewerProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [isLoading, setIsLoading] = useState(true);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const minSwipeDistance = 50;

  const goToNext = useCallback(() => {
    setIsLoading(true);
    setCurrentIndex(prev => (prev + 1) % images.length);
  }, [images.length]);

  const goToPrevious = useCallback(() => {
    setIsLoading(true);
    setCurrentIndex(prev => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  useEffect(() => {
    setCurrentIndex(initialIndex);
  }, [initialIndex]);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      } else if (e.key === "ArrowLeft") {
        goToPrevious();
      } else if (e.key === "ArrowRight") {
        goToNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, currentIndex, onClose, goToPrevious, goToNext]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      goToNext();
    } else if (isRightSwipe) {
      goToPrevious();
    }
  };

  if (!isOpen) return null;

  const currentImage = images[currentIndex];
  if (!currentImage) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 animate-in fade-in duration-200"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-50 p-2 text-white hover:bg-white/10 rounded-full transition-colors duration-200"
        aria-label="Close image viewer"
      >
        <X size={32} />
      </button>

      <div className="absolute top-4 left-4 z-50 px-4 py-2 bg-black/50 text-white text-sm rounded-full">
        {currentIndex + 1} / {images.length}
      </div>

      {images.length > 1 && (
        <button
          onClick={e => {
            e.stopPropagation();
            goToPrevious();
          }}
          className="absolute left-4 z-50 p-3 text-white hover:bg-white/10 rounded-full transition-colors duration-200 hidden sm:block"
          aria-label="Previous image"
        >
          <ChevronLeft size={40} />
        </button>
      )}

      {images.length > 1 && (
        <button
          onClick={e => {
            e.stopPropagation();
            goToNext();
          }}
          className="absolute right-4 z-50 p-3 text-white hover:bg-white/10 rounded-full transition-colors duration-200 hidden sm:block"
          aria-label="Next image"
        >
          <ChevronRight size={40} />
        </button>
      )}

      <div
        className="relative w-full h-full max-w-7xl max-h-[90vh] mx-auto px-4 sm:px-16 flex items-center justify-center"
        onClick={e => e.stopPropagation()}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-12 h-12 border-4 border-white/30 border-t-white rounded-full animate-spin"></div>
          </div>
        )}

        <div className="relative w-full h-full">
          <Image
            src={currentImage}
            alt={`${altPrefix} ${currentIndex + 1}`}
            fill
            className="object-contain"
            quality={100}
            unoptimized
            onLoad={() => setIsLoading(false)}
          />
        </div>
      </div>

      {images.length > 1 && (
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-50 px-4 py-2 bg-black/50 text-white text-sm rounded-full sm:hidden">
          Swipe to navigate
        </div>
      )}
    </div>
  );
}
