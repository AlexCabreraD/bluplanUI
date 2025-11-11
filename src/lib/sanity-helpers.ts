import type { Project, HomeProject, FAQ } from "@/types";
import type { SanityProject, SanityFeaturedProject, SanityFAQ } from "@/types/sanity";

import { urlForImage } from "../../sanity/lib/image";

/**
 * Convert Sanity project to app Project type
 */
export function sanityProjectToProject(sanityProject: SanityProject): Project {
  return {
    id: sanityProject.slug,
    title: sanityProject.title,
    subtitle: sanityProject.subtitle,
    bedrooms: sanityProject.bedrooms,
    bathrooms: sanityProject.bathrooms,
    sqft: sanityProject.sqft,
    cars: sanityProject.cars,
    stories: sanityProject.stories,
    image: urlForImage(sanityProject.thumbnailImage).url(),
    hoverName: sanityProject.hoverName,
    hoverAddress: sanityProject.hoverAddress,
    location: sanityProject.location,
    description: sanityProject.description,
    heroImage: urlForImage(sanityProject.heroImage).url(),
    galleryImages: sanityProject.galleryImages.map(img => urlForImage(img).url()),
    category: sanityProject.category,
    status: sanityProject.status,
    year: sanityProject.year,
    features: sanityProject.features,
    services: sanityProject.services,
  };
}

/**
 * Convert Sanity featured project to HomeProject type
 */
export function sanityFeaturedProjectToHomeProject(
  sanityProject: SanityFeaturedProject
): HomeProject {
  const imageSource = sanityProject.featuredImage || sanityProject.thumbnailImage;
  return {
    id: sanityProject.slug,
    title: sanityProject.title,
    image: urlForImage(imageSource).url(),
  };
}

/**
 * Convert Sanity FAQ to app FAQ type
 */
export function sanityFAQToFAQ(sanityFAQ: SanityFAQ): FAQ {
  return {
    id: sanityFAQ._id,
    question: sanityFAQ.question,
    answer: sanityFAQ.answer,
  };
}
