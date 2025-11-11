import { groq } from "next-sanity";

// Project queries
export const projectsQuery = groq`
  *[_type == "project"] | order(publishedAt desc) {
    _id,
    title,
    subtitle,
    "slug": slug.current,
    hoverName,
    hoverAddress,
    location,
    description,
    category,
    status,
    year,
    bedrooms,
    bathrooms,
    sqft,
    cars,
    stories,
    thumbnailImage,
    heroImage,
    galleryImages,
    features,
    services,
    featured,
    featuredImage,
    publishedAt
  }
`;

export const projectBySlugQuery = groq`
  *[_type == "project" && slug.current == $slug][0] {
    _id,
    title,
    subtitle,
    "slug": slug.current,
    hoverName,
    hoverAddress,
    location,
    description,
    category,
    status,
    year,
    bedrooms,
    bathrooms,
    sqft,
    cars,
    stories,
    thumbnailImage,
    heroImage,
    galleryImages,
    features,
    services,
    publishedAt
  }
`;

export const featuredProjectsQuery = groq`
  *[_type == "project" && featured == true] | order(publishedAt desc) {
    _id,
    title,
    "slug": slug.current,
    featuredImage,
    thumbnailImage
  }
`;

export const projectSlugsQuery = groq`
  *[_type == "project"].slug.current
`;

// FAQ queries
export const faqsQuery = groq`
  *[_type == "faq"] | order(order asc) {
    _id,
    question,
    answer,
    order
  }
`;
