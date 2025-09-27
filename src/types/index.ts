// Core Application Types

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  bedrooms: number;
  bathrooms: number;
  sqft: number;
  cars: number;
  stories?: number;
  image: string;
  hoverName: string;
  hoverAddress: string;
  location: string;
  description: string;
  heroImage: string;
  galleryImages: string[];
  category?: string;
  status?: string;
  year?: number;
  features?: string[];
  services?: string[];
}

export interface HomeProject {
  id: string;
  title: string;
  image: string;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
}

export interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  message: string;
}

export interface FloorPlan {
  id: string;
  name: string;
  bedrooms: number;
  bathrooms: number;
  sqft: number;
  price: number;
  image: string;
  features: string[];
}

// Component Props Types
export interface PageHeroProps {
  title: string;
  subtitle: string;
  imageSrc: string;
  imageAlt: string;
}

export interface FeatureIconProps {
  type: "bed" | "bath" | "sqft" | "story";
  value: number;
  label: string;
}

export interface ProjectPageProps {
  params: Promise<{
    slug: string;
  }>;
}

// API Response Types
export interface ApiResponse<T> {
  data: T;
  success: boolean;
  message?: string;
}

export interface ApiError {
  message: string;
  code?: string;
  field?: string;
}

// UI Component Types
export interface ButtonProps {
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  loading?: boolean;
  className?: string;
}

export interface LoadingProps {
  size?: "sm" | "md" | "lg";
  className?: string;
}

export interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
}

// Navigation Types
export interface NavigationItem {
  label: string;
  href: string;
  children?: NavigationItem[];
}

// Form Types
export interface FormFieldProps {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  error?: string;
}

// SEO and Meta Types
export interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
}
