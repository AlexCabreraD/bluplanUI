import type { Project, HomeProject, FAQ } from "@/types";

/**
 * Projects data - centralized source of truth
 */
export const projects: Project[] = [
  {
    id: "modern-2br-adu",
    title: "Modern 2BR ADU",
    subtitle: "Sleek accessory dwelling unit",
    bedrooms: 2,
    bathrooms: 2,
    sqft: 800,
    cars: 1,
    stories: 1,
    image: "/images/home/gallery/BP-Web-Home-Projects1.png",
    hoverName: "Modern 2BR ADU",
    hoverAddress: "Backyard Addition, Portland, OR",
    location: "Portland, OR",
    description:
      "A contemporary accessory dwelling unit featuring an open-concept design, modern finishes, and efficient use of space. Perfect for rental income or multi-generational living with sustainable design elements and smart home technology integration.",
    heroImage: "/images/projects/hero/39th-street-hero.png",
    galleryImages: [
      "/images/home/gallery/BP-Web-Home-Projects1.png",
      "/images/projects/gallery/39th-street-bedroom.png",
      "/images/home/gallery/BP-Web-Home-Projects3.png",
      "/images/home/gallery/BP-Web-Home-Projects1.png",
      "/images/home/gallery/BP-Web-Home-Projects2.png",
      "/images/home/gallery/BP-Web-Home-Projects3.png",
    ],
    category: "ADU",
    status: "Built",
    year: 2024,
    features: [
      "Open concept living",
      "Energy efficient design",
      "Modern kitchen",
      "Private entrance",
    ],
    services: ["Custom Design", "Permit Management", "3D Modeling"],
  },
  {
    id: "craftsman-3br-home",
    title: "Craftsman 3BR Home",
    subtitle: "Classic family residence",
    bedrooms: 3,
    bathrooms: 2,
    sqft: 1850,
    cars: 2,
    stories: 1,
    image: "/images/home/gallery/BP-Web-Home-Projects2.png",
    hoverName: "Craftsman Family Home",
    hoverAddress: "Maple Street, Seattle, WA",
    location: "Seattle, WA",
    description:
      "A beautifully designed craftsman-style home with traditional details and modern amenities. Features include hardwood floors, built-in cabinetry, and a spacious kitchen that seamlessly blends classic charm with contemporary functionality.",
    heroImage: "/images/projects/hero/39th-street-hero.png",
    galleryImages: [
      "/images/home/gallery/BP-Web-Home-Projects2.png",
      "/images/projects/gallery/39th-street-bedroom.png",
      "/images/home/gallery/BP-Web-Home-Projects3.png",
      "/images/home/gallery/BP-Web-Home-Projects2.png",
      "/images/home/gallery/BP-Web-Home-Projects1.png",
      "/images/home/gallery/BP-Web-Home-Projects3.png",
    ],
    category: "Single Family",
    status: "Built",
    year: 2023,
    features: ["Craftsman details", "Hardwood floors", "Built-in storage", "Covered front porch"],
    services: ["Custom Design", "Construction Documents", "Feasibility Study"],
  },
  {
    id: "urban-1br-loft",
    title: "Urban 1BR Loft",
    subtitle: "Downtown living redefined",
    bedrooms: 1,
    bathrooms: 1,
    sqft: 650,
    cars: 0,
    stories: 1,
    image: "/images/home/gallery/BP-Web-Home-Projects3.png",
    hoverName: "Urban Loft",
    hoverAddress: "Downtown District, San Francisco, CA",
    location: "San Francisco, CA",
    description:
      "A sleek urban loft designed for city living. Features floor-to-ceiling windows, modern appliances, and smart storage solutions to maximize the compact space while maintaining a luxurious feel in the heart of the city.",
    heroImage: "/images/projects/hero/39th-street-hero.png",
    galleryImages: [
      "/images/home/gallery/BP-Web-Home-Projects3.png",
      "/images/projects/gallery/39th-street-bedroom.png",
      "/images/home/gallery/BP-Web-Home-Projects2.png",
      "/images/home/gallery/BP-Web-Home-Projects3.png",
      "/images/home/gallery/BP-Web-Home-Projects1.png",
      "/images/home/gallery/BP-Web-Home-Projects2.png",
    ],
    category: "Urban",
    status: "In Progress",
    year: 2024,
    features: ["Floor-to-ceiling windows", "Smart storage", "Modern appliances", "City views"],
    services: ["Custom Design", "3D Modeling", "Permit Management"],
  },
  {
    id: "luxury-4br-estate",
    title: "Luxury 4BR Estate",
    subtitle: "Elegant family compound",
    bedrooms: 4,
    bathrooms: 3,
    sqft: 3200,
    cars: 3,
    stories: 2,
    image: "/images/home/gallery/BP-Web-Home-Projects4.png",
    hoverName: "Luxury Estate",
    hoverAddress: "Hill View Drive, Austin, TX",
    location: "Austin, TX",
    description:
      "An expansive luxury home featuring high-end finishes, multiple living areas, and outdoor entertainment spaces. Designed for those who appreciate both comfort and style, with attention to every detail from the grand foyer to the resort-style backyard.",
    heroImage: "/images/projects/hero/39th-street-hero.png",
    galleryImages: [
      "/images/home/gallery/BP-Web-Home-Projects4.png",
      "/images/projects/gallery/39th-street-bedroom.png",
      "/images/home/gallery/BP-Web-Home-Projects3.png",
      "/images/home/gallery/BP-Web-Home-Projects1.png",
      "/images/home/gallery/BP-Web-Home-Projects2.png",
      "/images/home/gallery/BP-Web-Home-Projects3.png",
    ],
    category: "Luxury",
    status: "Built",
    year: 2023,
    features: [
      "High-end finishes",
      "Multiple living areas",
      "Outdoor entertainment",
      "Master suite",
    ],
    services: ["Custom Design", "Construction Documents", "3D Modeling", "Permit Management"],
  },
];

/**
 * Home page projects - derived from main projects data
 */
export const homeProjects: HomeProject[] = [
  {
    id: "modern-2br-adu",
    title: "Modern 2BR ADU",
    image: "/images/home/gallery/BP-Web-Home-Projects1.png",
  },
  {
    id: "craftsman-3br-home",
    title: "Craftsman Family Home",
    image: "/images/home/gallery/BP-Web-Home-Projects2.png",
  },
  {
    id: "urban-1br-loft",
    title: "Urban Loft",
    image: "/images/home/gallery/BP-Web-Home-Projects3.png",
  },
  {
    id: "luxury-4br-estate",
    title: "Luxury Estate",
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
