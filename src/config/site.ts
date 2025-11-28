export const siteConfig = {
  name: "Stargate Pressure Washing",
  legalName: "Stargate Pressure Washing LLC",
  description:
    "Professional pressure washing services in Seminole, FL and surrounding Pinellas County areas. Expert driveway cleaning, house washing, roof cleaning, and more. Licensed & insured. Free estimates!",
  shortDescription: "Professional Pressure Washing in Seminole, FL",
  url: "https://stargatepressurewashing.com",
  phone: "(352) 843-3425",
  phoneRaw: "+13528433425",
  email: "info@stargatepressurewashing.com",
  address: {
    street: "123 Main Street",
    city: "Seminole",
    state: "FL",
    stateFullName: "Florida",
    zip: "33772",
    country: "US",
  },
  geo: {
    latitude: 27.8397,
    longitude: -82.7918,
  },
  hours: {
    weekdays: "7:00 AM - 6:00 PM",
    saturday: "8:00 AM - 4:00 PM",
    sunday: "Closed",
  },
  social: {
    facebook: "https://facebook.com/stargatepressurewashing",
    instagram: "https://instagram.com/stargatepressurewashing",
    google: "https://g.page/stargatepressurewashing",
  },
  // SEO Keywords
  keywords: [
    "pressure washing Seminole FL",
    "power washing Pinellas County",
    "house washing Seminole",
    "driveway cleaning Largo FL",
    "roof cleaning Clearwater",
    "pressure washing near me",
    "soft wash house cleaning",
    "commercial pressure washing Tampa Bay",
    "pool deck cleaning",
    "exterior cleaning services",
  ],
  serviceAreas: [
    "Seminole",
    "Largo",
    "Clearwater",
    "St. Petersburg",
    "Pinellas Park",
    "Indian Rocks Beach",
    "Belleair",
    "Dunedin",
    "Safety Harbor",
    "Palm Harbor",
    "Tarpon Springs",
  ],
  services: [
    {
      id: "house-washing",
      title: "House Washing",
      description: "Restore your home's exterior with our soft wash technique",
      icon: "home",
    },
    {
      id: "driveway-cleaning",
      title: "Driveway Cleaning",
      description: "Remove oil stains, dirt, and grime from concrete surfaces",
      icon: "car",
    },
    {
      id: "roof-cleaning",
      title: "Roof Cleaning",
      description: "Safe soft wash cleaning to remove algae and extend roof life",
      icon: "roof",
    },
    {
      id: "pool-deck",
      title: "Pool Deck Cleaning",
      description: "Make your pool area safe and beautiful again",
      icon: "pool",
    },
    {
      id: "fence-cleaning",
      title: "Fence Cleaning",
      description: "Revitalize wood, vinyl, or aluminum fencing",
      icon: "fence",
    },
    {
      id: "commercial",
      title: "Commercial Services",
      description: "Storefronts, parking lots, and building exteriors",
      icon: "building",
    },
  ],
  // Ratings for structured data
  rating: {
    value: 4.9,
    count: 500,
  },
  // Price range for structured data
  priceRange: "$$",
  // Founded year
  foundingYear: 2020,
};

export type SiteConfig = typeof siteConfig;
