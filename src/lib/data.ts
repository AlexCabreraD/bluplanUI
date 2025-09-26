import type { Project, HomeProject, FAQ } from "@/types";

/**
 * Projects data - centralized source of truth
 */
export const projects: Project[] = [
  {
    id: "project1",
    title: "Practice",
    subtitle: "Lorem ipsum",
    bedrooms: 3,
    bathrooms: 2,
    sqft: 425,
    cars: 2,
    image: "/images/home/gallery/BP-Web-Home-Projects1.png",
    hoverName: "39th Street",
    hoverAddress: "Placeholder Address, City, State",
    location: "City, ST",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    heroImage: "/images/projects/hero/39th-street-hero.png",
    galleryImages: [
      "/images/home/gallery/BP-Web-Home-Projects1.png",
      "/images/projects/gallery/39th-street-bedroom.png",
      "/images/home/gallery/BP-Web-Home-Projects3.png",
      "/images/home/gallery/BP-Web-Home-Projects1.png",
      "/images/home/gallery/BP-Web-Home-Projects2.png",
      "/images/home/gallery/BP-Web-Home-Projects3.png",
    ],
  },
  {
    id: "project2",
    title: "Practice",
    subtitle: "Lorem ipsum",
    bedrooms: 2,
    bathrooms: 1,
    sqft: 425,
    cars: 1,
    image: "/images/home/gallery/BP-Web-Home-Projects2.png",
    hoverName: "North G Street",
    hoverAddress: "Placeholder Address, City, State",
    location: "City, ST",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    heroImage: "/images/projects/hero/39th-street-hero.png",
    galleryImages: [
      "/images/home/gallery/BP-Web-Home-Projects2.png",
      "/images/projects/gallery/39th-street-bedroom.png",
      "/images/home/gallery/BP-Web-Home-Projects3.png",
      "/images/home/gallery/BP-Web-Home-Projects2.png",
      "/images/home/gallery/BP-Web-Home-Projects1.png",
      "/images/home/gallery/BP-Web-Home-Projects3.png",
    ],
  },
  {
    id: "project3",
    title: "Practice",
    subtitle: "Lorem ipsum",
    bedrooms: 3,
    bathrooms: 2,
    sqft: 425,
    cars: 2,
    image: "/images/home/gallery/BP-Web-Home-Projects3.png",
    hoverName: "Dean Dr",
    hoverAddress: "Placeholder Address, City, State",
    location: "City, ST",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    heroImage: "/images/projects/hero/39th-street-hero.png",
    galleryImages: [
      "/images/home/gallery/BP-Web-Home-Projects3.png",
      "/images/projects/gallery/39th-street-bedroom.png",
      "/images/home/gallery/BP-Web-Home-Projects2.png",
      "/images/home/gallery/BP-Web-Home-Projects3.png",
      "/images/home/gallery/BP-Web-Home-Projects1.png",
      "/images/home/gallery/BP-Web-Home-Projects2.png",
    ],
  },
];

/**
 * Home page projects - derived from main projects data
 */
export const homeProjects: HomeProject[] = [
  {
    id: "project1",
    title: "39th Street",
    image: "/images/home/gallery/BP-Web-Home-Projects1.png",
  },
  {
    id: "project2",
    title: "North G Street",
    image: "/images/home/gallery/BP-Web-Home-Projects2.png",
  },
  {
    id: "project3",
    title: "Dean Dr",
    image: "/images/home/gallery/BP-Web-Home-Projects3.png",
  },
  {
    id: "project1", // Reusing for demo
    title: "Excepteur occaecat",
    image: "/images/home/gallery/BP-Web-Home-Projects4.png",
  },
];

/**
 * FAQ data
 */
export const faqData: FAQ[] = [
  {
    id: "faq-1",
    question: "What services does BluPlan Studio offer?",
    answer:
      "We specialize in turning residential visions into fully detailed, ready to build projects. Our services include architectural design, planning, and project development.",
  },
  {
    id: "faq-2",
    question: "How long does a typical project take?",
    answer:
      "Project timelines vary depending on scope and complexity. Most residential projects take 8-16 weeks from initial consultation to final plans.",
  },
  {
    id: "faq-3",
    question: "Do you provide construction services?",
    answer:
      "We focus on the design and planning phase. However, we can recommend trusted construction partners in your area.",
  },
];

/**
 * Data access functions
 */
export function getProjectById(id: string): Project | undefined {
  return projects.find(project => project.id === id);
}

export function getProjectsByCategory(_category?: string): Project[] {
  // For future categorization
  return projects;
}

export function getFeaturedProjects(limit = 3): Project[] {
  return projects.slice(0, limit);
}

export function getHomeProjects(): HomeProject[] {
  return homeProjects;
}

export function getFAQs(): FAQ[] {
  return faqData;
}
