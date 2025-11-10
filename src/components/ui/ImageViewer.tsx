"use client";

import { X, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useCallback, useEffect, useState, useRef } from "react";

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
  const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set());
  const touchStartRef = useRef<number | null>(null);
  const touchEndRef = useRef<number | null>(null);

  const minSwipeDistance = 50;

  const goToNext = useCallback(() => {
    setCurrentIndex(prev => (prev + 1) % images.length);
  }, [images.length]);

  const goToPrevious = useCallback(() => {
    setCurrentIndex(prev => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  useEffect(() => {
    setCurrentIndex(initialIndex);
    setLoadedImages(new Set([initialIndex]));
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
  }, [isOpen, onClose, goToPrevious, goToNext]);

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

  useEffect(() => {
    if (!isOpen) return;

    const preloadImage = (index: number) => {
      if (index >= 0 && index < images.length && images[index]) {
        const img = new window.Image();
        img.src = images[index];
      }
    };

    const nextIndex = (currentIndex + 1) % images.length;
    const prevIndex = (currentIndex - 1 + images.length) % images.length;

    preloadImage(nextIndex);
    preloadImage(prevIndex);
  }, [currentIndex, images, isOpen]);

  const handleImageLoad = useCallback((index: number) => {
    setLoadedImages(prev => new Set(prev).add(index));
  }, []);

  const onTouchStart = useCallback((e: React.TouchEvent) => {
    touchEndRef.current = null;
    touchStartRef.current = e.targetTouches[0].clientX;
  }, []);

  const onTouchMove = useCallback((e: React.TouchEvent) => {
    touchEndRef.current = e.targetTouches[0].clientX;
  }, []);

  const onTouchEnd = useCallback(() => {
    if (!touchStartRef.current || !touchEndRef.current) return;

    const distance = touchStartRef.current - touchEndRef.current;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      goToNext();
    } else if (isRightSwipe) {
      goToPrevious();
    }
  }, [goToNext, goToPrevious, minSwipeDistance]);

  if (!isOpen) return null;

  const currentImage = images[currentIndex];
  if (!currentImage) return null;

  const isCurrentImageLoaded = loadedImages.has(currentIndex);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/95"
      onClick={onClose}
      style={{ willChange: "opacity" }}
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-50 p-2 text-white hover:bg-white/10 rounded-full transition-colors duration-150"
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
          className="absolute left-4 z-50 p-3 text-white hover:bg-white/10 rounded-full transition-colors duration-150 hidden sm:block"
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
          className="absolute right-4 z-50 p-3 text-white hover:bg-white/10 rounded-full transition-colors duration-150 hidden sm:block"
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
        {!isCurrentImageLoaded && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-12 h-12 border-4 border-white/30 border-t-white rounded-full animate-spin"></div>
          </div>
        )}

        <div className="relative w-full h-full" style={{ willChange: "transform" }}>
          <Image
            src={currentImage}
            alt={`${altPrefix} ${currentIndex + 1}`}
            fill
            className="object-contain"
            quality={100}
            unoptimized
            priority
            onLoad={() => handleImageLoad(currentIndex)}
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
