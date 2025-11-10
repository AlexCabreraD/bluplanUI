import type { Project, HomeProject, FAQ } from "@/types";

/**
 * ========================================
 * PROJECTS DATA - CENTRALIZED SOURCE OF TRUTH
 * ========================================
 *
 * EDITING GUIDE:
 * 1. To add a new project: Copy an existing project object and modify all fields
 * 2. To remove a project: Delete the entire project object
 * 3. To edit content: Update the text fields below (title, description, features, etc.)
 * 4. Project images are located in: /public/images/projects/[project-name]/
 *
 * NOTE: This is a temporary solution. Eventually this will be managed via CRM.
 */
export const projects: Project[] = [
  // ========================================
  // PROJECT 1: 39th Street Residence
  // ========================================
  {
    id: "thirty-nine-street",
    title: "39th Street Residence",
    subtitle: "Modern urban living",

    // EDIT: Project specifications
    bedrooms: 3,
    bathrooms: 2,
    sqft: 1850,
    cars: 2,
    stories: 1,

    // EDIT: Images (first image is the thumbnail shown on cards)
    image: "/images/projects/thirty-nine/thirty-nine-1.jpg",
    heroImage: "/images/projects/thirty-nine/thirty-nine-1.jpg",
    galleryImages: [
      "/images/projects/thirty-nine/thirty-nine-1.jpg",
      "/images/projects/thirty-nine/thirty-nine-2.jpg",
      "/images/projects/thirty-nine/thirty-nine-3.jpg",
      "/images/projects/thirty-nine/thirty-nine-4.jpg",
      "/images/projects/thirty-nine/thirty-nine-5.jpg",
    ],

    // EDIT: Display information
    hoverName: "39th Street Residence",
    hoverAddress: "39th Street, Portland, OR",
    location: "Portland, OR",

    // EDIT: Project details
    category: "Residential",
    status: "Built",
    year: 2024,

    // EDIT: Project description (shown on detail page)
    description:
      "A thoughtfully designed modern residence featuring clean lines, abundant natural light, and an open floor plan. This home seamlessly blends contemporary aesthetics with functional living spaces, creating an ideal environment for modern family life.",

    // EDIT: Key features (bullet points shown on detail page)
    features: [
      "Open concept living area",
      "Natural light throughout",
      "Modern finishes",
      "Spacious bedrooms",
      "Contemporary design",
    ],

    // EDIT: Services provided
    services: ["Custom Design", "Construction Documents", "3D Modeling"],
  },

  // ========================================
  // PROJECT 2: Dean Street Home
  // ========================================
  {
    id: "dean-street",
    title: "Dean Street Home",
    subtitle: "Contemporary family residence",

    // EDIT: Project specifications
    bedrooms: 4,
    bathrooms: 3,
    sqft: 2400,
    cars: 2,
    stories: 1,

    // EDIT: Images (first image is the thumbnail shown on cards)
    image: "/images/projects/dean/dean-4.jpg",
    heroImage: "/images/projects/dean/dean-1.jpg",
    galleryImages: [
      "/images/projects/dean/dean-1.jpg",
      "/images/projects/dean/dean-2.jpg",
      "/images/projects/dean/dean-3.jpg",
      "/images/projects/dean/dean-4.jpg",
      "/images/projects/dean/dean-5.jpg",
    ],

    // EDIT: Display information
    hoverName: "Dean Street Home",
    hoverAddress: "Dean Street, Portland, OR",
    location: "Portland, OR",

    // EDIT: Project details
    category: "Residential",
    status: "Built",
    year: 2024,

    // EDIT: Project description (shown on detail page)
    description:
      "A spacious contemporary home designed for modern family living. This residence features thoughtful layouts, quality finishes, and versatile spaces that adapt to the needs of a growing family while maintaining a cohesive aesthetic throughout.",

    // EDIT: Key features (bullet points shown on detail page)
    features: [
      "Spacious family layout",
      "Quality craftsmanship",
      "Flexible living spaces",
      "Modern amenities",
      "Efficient floor plan",
    ],

    // EDIT: Services provided
    services: ["Custom Design", "Permit Management", "Construction Documents"],
  },

  // ========================================
  // PROJECT 3: Murray Street Residence
  // ========================================
  {
    id: "murray-street",
    title: "Murray Street Residence",
    subtitle: "Elegant modern design",

    // EDIT: Project specifications
    bedrooms: 3,
    bathrooms: 2,
    sqft: 2100,
    cars: 2,
    stories: 1,

    // EDIT: Images (first image is the thumbnail shown on cards)
    image: "/images/projects/murray/murray-1.jpg",
    heroImage: "/images/projects/murray/murray-1.jpg",
    galleryImages: [
      "/images/projects/murray/murray-1.jpg",
      "/images/projects/murray/murray-2.jpg",
      "/images/projects/murray/murray-3.jpg",
      "/images/projects/murray/murray-4.jpg",
      "/images/projects/murray/murray-5.png",
      "/images/projects/murray/murray-6.png",
    ],

    // EDIT: Display information
    hoverName: "Murray Street Residence",
    hoverAddress: "Murray Street, Portland, OR",
    location: "Portland, OR",

    // EDIT: Project details
    category: "Residential",
    status: "Built",
    year: 2023,

    // EDIT: Project description (shown on detail page)
    description:
      "An elegant single-story residence that emphasizes comfort and style. Designed with attention to detail, this home offers a perfect balance of private and communal spaces, ideal for both everyday living and entertaining.",

    // EDIT: Key features (bullet points shown on detail page)
    features: [
      "Single-story convenience",
      "Elegant design details",
      "Indoor-outdoor flow",
      "Premium finishes",
      "Thoughtful layout",
    ],

    // EDIT: Services provided
    services: ["Custom Design", "3D Modeling", "Permit Management", "Construction Documents"],
  },
];

/**
 * ========================================
 * HOME PAGE PROJECTS
 * ========================================
 *
 * These are shown in the scrolling carousel on the home page.
 * They are automatically derived from the main projects array above.
 *
 * EDITING: To change what shows on the home page, edit the main
 * projects array above. These will update automatically.
 */
export const homeProjects: HomeProject[] = [
  {
    id: "thirty-nine-street",
    title: "39th Street Residence",
    image: "/images/projects/thirty-nine/thirty-nine-1.jpg",
  },
  {
    id: "dean-street",
    title: "Dean Street Home",
    image: "/images/projects/dean/dean-3.jpg",
  },
  {
    id: "murray-street",
    title: "Murray Street Residence",
    image: "/images/projects/murray/murray-2.jpg",
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
