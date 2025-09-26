import Image from "next/image";

import { IMAGE_QUALITIES } from "@/lib/constants";
import { cn } from "@/lib/utils";

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  fill?: boolean;
  quality?: keyof typeof IMAGE_QUALITIES;
  priority?: boolean;
  className?: string;
  sizes?: string;
  objectFit?: "cover" | "contain" | "fill" | "none" | "scale-down";
  objectPosition?: string;
  placeholder?: "blur" | "empty";
  blurDataURL?: string;
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  width,
  height,
  fill = false,
  quality = "high",
  priority = false,
  className,
  sizes,
  objectFit = "cover",
  objectPosition = "center",
  placeholder = "empty",
  blurDataURL,
}) => {
  const imageProps = {
    src,
    alt,
    quality: IMAGE_QUALITIES[quality],
    priority,
    placeholder,
    ...(blurDataURL && { blurDataURL }),
    ...(sizes && { sizes }),
    className: cn("transition-opacity duration-300", className),
    style: {
      objectFit,
      objectPosition,
    },
  };

  if (fill) {
    return <Image {...imageProps} fill alt={alt} />;
  }

  if (!width || !height) {
    throw new Error("OptimizedImage: width and height are required when fill is false");
  }

  return <Image {...imageProps} width={width} height={height} alt={alt} />;
};

export default OptimizedImage;
