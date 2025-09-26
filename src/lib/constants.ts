// Application Constants

export const SITE_CONFIG = {
  name: "BluPlan Studio",
  description: "Turning residential visions into fully detailed, ready to build projects.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://bluplanstudio.com",
  logo: "/images/logo.png",
} as const;

export const CONTACT_INFO = {
  email: "info@bluplanstudio.com",
  phone: "+1 (555) 123-4567",
  address: "123 Architecture Lane, Design City, DC 12345",
} as const;

export const NAVIGATION_ITEMS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about-us" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Floor Plans", href: "/floor-plans" },
  { label: "Resources", href: "/resources" },
  { label: "Contact", href: "/contact-us" },
] as const;

export const FEATURE_ICONS = {
  bed: "bed",
  bath: "bath",
  sqft: "sqft",
  story: "story",
} as const;

export const BREAKPOINTS = {
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
  "2xl": "1536px",
} as const;

export const ANIMATION_DURATIONS = {
  fast: 150,
  normal: 300,
  slow: 500,
} as const;

export const IMAGE_QUALITIES = {
  low: 75,
  medium: 85,
  high: 95,
} as const;
