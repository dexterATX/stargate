// Comprehensive 2025 SEO Configuration
// Optimized for Local SEO, E-E-A-T, AI Overview, and Core Web Vitals

export const siteConfig = {
  // Business Identity
  name: "Stargate Custom Clean",
  legalName: "Stargate Custom Clean LLC",
  slogan: "Restore Your Property's Shine",
  tagline: "Professional Pressure Washing in Seminole, FL",

  // Primary Description (155-160 chars for meta)
  description:
    "Professional pressure washing services in Seminole, FL and Pinellas County. Expert driveway cleaning, house washing, roof cleaning & more. Licensed, insured, 5-star rated. Free estimates!",

  // Short Description (for social, mobile)
  shortDescription: "#1 Rated Pressure Washing in Seminole & Pinellas County, FL",

  // Extended Description (for about page, schema)
  extendedDescription:
    "Stargate Custom Clean is Pinellas County's premier exterior cleaning company, delivering exceptional pressure washing and soft wash services since 2020. Our certified technicians use state-of-the-art equipment and eco-friendly solutions to restore residential and commercial properties. From stubborn driveway stains to delicate roof cleaning, we guarantee professional results with 100% satisfaction.",

  // URLs
  url: "https://stargatecustomclean.com",

  // Contact Information (NAP - critical for local SEO)
  phone: "(352) 843-3425",
  phoneRaw: "+13528433425",
  email: "info@stargatecustomclean.com",

  // Physical Address (for Local Business schema)
  address: {
    street: "123 Main Street",
    city: "Seminole",
    state: "FL",
    stateFullName: "Florida",
    zip: "33772",
    country: "US",
    countryFullName: "United States",
  },

  // Geo Coordinates (for Local SEO & Maps)
  geo: {
    latitude: 27.8397,
    longitude: -82.7918,
    radiusMiles: 25, // Service radius in miles
    radiusMeters: 40234, // 25 miles in meters (for schema.org)
  },

  // Business Hours (for Schema & GMB)
  hours: {
    weekdays: "7:00 AM - 6:00 PM",
    saturday: "8:00 AM - 4:00 PM",
    sunday: "Closed",
    timezone: "America/New_York",
    openingHoursSpecification: [
      { dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "07:00", closes: "18:00" },
      { dayOfWeek: "Saturday", opens: "08:00", closes: "16:00" },
    ],
  },

  // Social Profiles (for Schema sameAs)
  social: {
    facebook: "https://facebook.com/stargatecustomclean",
    instagram: "https://instagram.com/stargatecustomclean",
    google: "https://g.page/stargatecustomclean",
    yelp: "https://yelp.com/biz/stargate-custom-clean-seminole",
    nextdoor: "https://nextdoor.com/pages/stargate-custom-clean-seminole-fl",
    youtube: "https://youtube.com/@stargatecustomclean",
  },

  // === 2025 SEO Keywords (Long-tail + Local + Intent-based) ===
  keywords: [
    // Primary Keywords (High Intent)
    "pressure washing Seminole FL",
    "pressure washing near me",
    "power washing Pinellas County",
    "pressure washing services Seminole",

    // Service-Specific Keywords
    "house washing Seminole FL",
    "driveway cleaning Seminole FL",
    "roof cleaning Seminole FL",
    "soft wash house cleaning Pinellas County",
    "pool deck cleaning Seminole",
    "paver cleaning Pinellas County",
    "fence cleaning Seminole FL",
    "commercial pressure washing Tampa Bay",

    // Location Keywords (Each City)
    "pressure washing Largo FL",
    "pressure washing Clearwater FL",
    "pressure washing St Petersburg FL",
    "pressure washing Indian Rocks Beach",
    "pressure washing Belleair FL",
    "pressure washing Palm Harbor FL",

    // Long-Tail Keywords (2025 Voice Search)
    "best pressure washing company near me",
    "how much does pressure washing cost in Florida",
    "professional driveway cleaning service",
    "safe roof cleaning soft wash",
    "eco-friendly pressure washing service",
    "same day pressure washing service",

    // Problem-Solution Keywords
    "remove black stains from roof",
    "clean mold off house exterior",
    "remove oil stains from driveway",
    "clean algae from pool deck",
    "restore faded pavers",

    // Seasonal Keywords
    "spring cleaning pressure wash",
    "hurricane prep home cleaning",
    "pre-sale house washing",
  ],

  // === Service Areas (Critical for Local SEO) ===
  serviceAreas: [
    {
      name: "Seminole",
      state: "FL",
      county: "Pinellas",
      zip: ["33772", "33776", "33777"],
      isPrimary: true,
      description: "Serving all of Seminole including residential neighborhoods and commercial districts",
    },
    {
      name: "Largo",
      state: "FL",
      county: "Pinellas",
      zip: ["33770", "33771", "33773", "33774", "33778", "33779"],
      isPrimary: true,
      description: "Complete pressure washing services throughout Largo",
    },
    {
      name: "Clearwater",
      state: "FL",
      county: "Pinellas",
      zip: ["33755", "33756", "33759", "33761", "33763", "33764", "33765", "33767"],
      isPrimary: true,
      description: "Professional cleaning for Clearwater homes and businesses",
    },
    {
      name: "St. Petersburg",
      state: "FL",
      county: "Pinellas",
      zip: ["33701", "33702", "33703", "33704", "33705", "33706", "33707", "33708", "33709", "33710", "33711", "33712", "33713", "33714", "33715", "33716"],
      isPrimary: true,
      description: "St. Pete's trusted pressure washing professionals",
    },
    {
      name: "Indian Rocks Beach",
      state: "FL",
      county: "Pinellas",
      zip: ["33785"],
      isPrimary: false,
      description: "Specialized coastal property cleaning for salt air damage",
    },
    {
      name: "Belleair",
      state: "FL",
      county: "Pinellas",
      zip: ["33756", "33786"],
      isPrimary: false,
      description: "Premium pressure washing for Belleair estates",
    },
    {
      name: "Dunedin",
      state: "FL",
      county: "Pinellas",
      zip: ["34697", "34698"],
      isPrimary: false,
      description: "Reliable pressure washing services in Dunedin",
    },
    {
      name: "Safety Harbor",
      state: "FL",
      county: "Pinellas",
      zip: ["34695"],
      isPrimary: false,
      description: "Expert exterior cleaning in Safety Harbor",
    },
    {
      name: "Palm Harbor",
      state: "FL",
      county: "Pinellas",
      zip: ["34683", "34684", "34685"],
      isPrimary: false,
      description: "Professional pressure washing throughout Palm Harbor",
    },
    {
      name: "Tarpon Springs",
      state: "FL",
      county: "Pinellas",
      zip: ["34688", "34689"],
      isPrimary: false,
      description: "Quality pressure washing in Tarpon Springs",
    },
  ],

  // === Services (Enhanced for Schema) ===
  services: [
    {
      id: "house-washing",
      title: "House Washing",
      shortTitle: "House Wash",
      description: "Restore your home's exterior with our safe soft wash technique that removes dirt, mold, mildew, and algae without damaging paint or siding.",
      longDescription: "Our professional house washing service uses a gentle soft wash technique specifically designed for residential exteriors. We safely remove years of built-up dirt, mold, mildew, algae, and pollution stains from vinyl, stucco, brick, and painted surfaces. Our eco-friendly cleaning solutions are safe for your landscaping and pets.",
      icon: "home",
      image: "/images/house-washing.jpg",
      price: {
        startingAt: 199,
        currency: "USD",
        unit: "per service",
        typical: "199-499",
      },
      duration: "2-4 hours",
      benefits: [
        "Increases curb appeal instantly",
        "Prevents costly damage from mold/mildew",
        "Safe soft wash technique",
        "Eco-friendly cleaning solutions",
        "Extends paint life 2-3 years",
      ],
      features: ["Soft wash technique", "Biodegradable detergents", "Full exterior coverage", "Gutter brightening included"],
      keywords: ["house washing", "soft wash", "exterior house cleaning", "home washing", "vinyl siding cleaning"],
    },
    {
      id: "driveway-cleaning",
      title: "Driveway & Concrete Cleaning",
      shortTitle: "Driveways",
      description: "Remove stubborn oil stains, tire marks, dirt, and grime from concrete driveways, sidewalks, and patios.",
      longDescription: "Transform your concrete surfaces with our professional driveway cleaning service. We use commercial-grade pressure washing equipment to blast away years of oil stains, tire marks, rust, dirt, and organic growth. Our surface cleaners provide even, streak-free results on driveways, sidewalks, garage floors, and patios.",
      icon: "car",
      image: "/images/driveway-cleaning.jpg",
      price: {
        startingAt: 149,
        currency: "USD",
        unit: "per service",
        typical: "149-349",
      },
      duration: "1-3 hours",
      benefits: [
        "Removes oil & rust stains",
        "Eliminates slippery algae",
        "Boosts property value",
        "Even, streak-free finish",
        "Prevents concrete deterioration",
      ],
      features: ["Hot water option", "Surface cleaner technology", "Oil stain treatment", "Sealing available"],
      keywords: ["driveway cleaning", "concrete cleaning", "pressure wash driveway", "sidewalk cleaning", "patio cleaning"],
    },
    {
      id: "roof-cleaning",
      title: "Roof Cleaning",
      shortTitle: "Roof Clean",
      description: "Safe soft wash roof cleaning removes black streaks, algae, and moss to extend your roof's lifespan.",
      longDescription: "Protect your biggest investment with our professional soft wash roof cleaning. Those ugly black streaks are actually Gloeocapsa Magma algae that feed on your shingles. Our gentle soft wash treatment kills algae, moss, and lichen at the root while preserving your roof's integrity. Recommended by shingle manufacturers.",
      icon: "roof",
      image: "/images/roof-cleaning.jpg",
      price: {
        startingAt: 299,
        currency: "USD",
        unit: "per service",
        typical: "299-599",
      },
      duration: "2-4 hours",
      benefits: [
        "Extends roof life 5-10 years",
        "Kills algae at the root",
        "Manufacturer-approved method",
        "Improves energy efficiency",
        "Prevents costly replacement",
      ],
      features: ["Low-pressure soft wash", "Algae treatment", "All roof types", "2-year warranty"],
      keywords: ["roof cleaning", "soft wash roof", "remove black streaks roof", "algae removal roof", "roof moss removal"],
    },
    {
      id: "pool-deck-cleaning",
      title: "Pool Deck Cleaning",
      shortTitle: "Pool Decks",
      description: "Make your pool area safe and beautiful with thorough cleaning of pool decks, pavers, and surrounding areas.",
      longDescription: "Create a pristine pool environment with our specialized pool deck cleaning service. We remove slippery algae, calcium deposits, sunscreen buildup, and dirt from concrete, pavers, travertine, and cool deck surfaces. Our cleaning makes your pool area safer for family and guests while restoring its original beauty.",
      icon: "pool",
      image: "/images/pool-deck-cleaning.jpg",
      price: {
        startingAt: 199,
        currency: "USD",
        unit: "per service",
        typical: "199-399",
      },
      duration: "2-3 hours",
      benefits: [
        "Eliminates slip hazards",
        "Removes calcium deposits",
        "Safe for all surfaces",
        "Pool-safe cleaning agents",
        "Restores original color",
      ],
      features: ["Non-toxic solutions", "Paver safe", "Travertine safe", "Same-day service"],
      keywords: ["pool deck cleaning", "paver cleaning pool", "travertine cleaning", "pool area pressure wash"],
    },
    {
      id: "fence-cleaning",
      title: "Fence & Gate Cleaning",
      shortTitle: "Fences",
      description: "Revitalize wood, vinyl, aluminum, and PVC fencing with expert cleaning that removes years of buildup.",
      longDescription: "Bring your fence back to life with our professional fence cleaning service. Whether you have a wood privacy fence turning gray, vinyl fencing covered in mildew, or aluminum gates with oxidation, we have the right technique and pressure settings to clean safely and effectively.",
      icon: "fence",
      image: "/images/fence-cleaning.jpg",
      price: {
        startingAt: 149,
        currency: "USD",
        unit: "per service",
        typical: "149-349",
      },
      duration: "1-3 hours",
      benefits: [
        "Restores natural wood color",
        "Removes mold & mildew",
        "Preps for staining/sealing",
        "Extends fence life",
        "All fence types",
      ],
      features: ["Adjustable pressure", "Wood brightening", "Stain prep available", "Gate cleaning included"],
      keywords: ["fence cleaning", "wood fence cleaning", "vinyl fence cleaning", "fence pressure washing"],
    },
    {
      id: "commercial-pressure-washing",
      title: "Commercial Pressure Washing",
      shortTitle: "Commercial",
      description: "Professional exterior cleaning for storefronts, parking lots, buildings, and multi-unit properties.",
      longDescription: "Maintain your business's professional image with our commercial pressure washing services. We serve retail stores, restaurants, office buildings, apartment complexes, HOAs, and industrial facilities. Flexible scheduling includes nights and weekends to minimize business disruption.",
      icon: "building",
      image: "/images/commercial-cleaning.jpg",
      price: {
        startingAt: 399,
        currency: "USD",
        unit: "per service",
        typical: "399-1500+",
      },
      duration: "4-8 hours",
      benefits: [
        "Improves customer perception",
        "ADA compliance (clean walkways)",
        "Flexible scheduling",
        "Multi-location discounts",
        "Maintenance contracts available",
      ],
      features: ["After-hours service", "Parking lot cleaning", "Graffiti removal", "Gum removal"],
      keywords: ["commercial pressure washing", "storefront cleaning", "parking lot cleaning", "building washing"],
    },
  ],

  // === Ratings & Reviews (Critical for E-E-A-T) ===
  rating: {
    value: 4.9,
    count: 500,
    source: "Google Reviews",
  },

  // Sample Reviews for Schema
  reviews: [
    {
      author: "Mike R.",
      location: "Seminole, FL",
      rating: 5,
      date: "2024-11-15",
      text: "Incredible job on our driveway and house. Looks brand new! Scott was professional, on time, and the price was very fair. Highly recommend!",
      service: "house-washing",
    },
    {
      author: "Sarah T.",
      location: "Largo, FL",
      rating: 5,
      date: "2024-10-28",
      text: "Finally got rid of those ugly black streaks on our roof. The soft wash technique was exactly what we needed. Our roof looks 10 years younger!",
      service: "roof-cleaning",
    },
    {
      author: "Jennifer M.",
      location: "St. Petersburg, FL",
      rating: 5,
      date: "2024-10-10",
      text: "They cleaned our commercial property and it looks brand new. Very thorough and professional. Will use again for sure!",
      service: "commercial-pressure-washing",
    },
    {
      author: "David K.",
      location: "Clearwater, FL",
      rating: 5,
      date: "2024-09-22",
      text: "Best pressure washing company we've ever used. They even cleaned areas we didn't ask for. Amazing attention to detail!",
      service: "driveway-cleaning",
    },
    {
      author: "Linda P.",
      location: "Indian Rocks Beach, FL",
      rating: 5,
      date: "2024-09-05",
      text: "Our pool deck was covered in algae and very slippery. Now it's safe and looks beautiful. Thank you Stargate!",
      service: "pool-deck-cleaning",
    },
  ],

  // === FAQs (For FAQ Schema & AI Overview) ===
  faqs: [
    {
      question: "How much does pressure washing cost in Seminole, FL?",
      answer: "Pressure washing costs in Seminole typically range from $149-$599 depending on the service. Driveway cleaning starts at $149, house washing starts at $199, and roof cleaning starts at $299. We provide free, no-obligation estimates for all projects.",
      category: "pricing",
    },
    {
      question: "Is soft washing safe for my roof?",
      answer: "Yes! Soft washing is the manufacturer-recommended method for cleaning asphalt shingle roofs. Unlike high-pressure washing, soft wash uses low pressure (similar to a garden hose) combined with specialized cleaning solutions to safely kill algae, mold, and mildew without damaging your shingles.",
      category: "services",
    },
    {
      question: "How often should I pressure wash my house?",
      answer: "In Florida's humid climate, we recommend house washing every 1-2 years to prevent mold, mildew, and algae buildup. Homes near the coast or in heavily wooded areas may need cleaning annually. Regular cleaning extends paint life and prevents costly damage.",
      category: "maintenance",
    },
    {
      question: "Do you offer free estimates?",
      answer: "Yes! We provide free, no-obligation estimates for all pressure washing services. You can call us at (352) 843-3425, fill out our online form, or text us photos for a quick quote. Most estimates are provided within 24 hours.",
      category: "pricing",
    },
    {
      question: "Are you licensed and insured?",
      answer: "Absolutely. Stargate Pressure Washing is fully licensed and insured in Florida. We carry comprehensive general liability insurance and workers' compensation coverage. We're happy to provide proof of insurance upon request.",
      category: "company",
    },
    {
      question: "What areas do you serve?",
      answer: "We serve all of Pinellas County including Seminole, Largo, Clearwater, St. Petersburg, Indian Rocks Beach, Belleair, Dunedin, Safety Harbor, Palm Harbor, and Tarpon Springs. We also serve parts of Hillsborough County upon request.",
      category: "service-area",
    },
    {
      question: "How long does pressure washing take?",
      answer: "Most residential services take 2-4 hours. A standard driveway takes 1-2 hours, house washing takes 2-4 hours, and roof cleaning takes 2-4 hours. Commercial projects vary based on size. We'll provide a time estimate with your quote.",
      category: "services",
    },
    {
      question: "Will pressure washing damage my plants?",
      answer: "We take great care to protect your landscaping. Before cleaning, we pre-wet plants and cover delicate vegetation. We use eco-friendly, biodegradable cleaning solutions that are safe for plants and pets when used as directed.",
      category: "safety",
    },
    {
      question: "Do you offer same-day service?",
      answer: "Yes! We offer same-day and next-day service for most residential projects, subject to availability. For urgent requests, call us directly at (352) 843-3425. We understand that sometimes you need your property cleaned quickly.",
      category: "scheduling",
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards (Visa, Mastercard, Amex, Discover), debit cards, checks, cash, and digital payments including Venmo and Zelle. Payment is due upon completion of service.",
      category: "pricing",
    },
  ],

  // === Process Steps (For HowTo Schema) ===
  process: [
    {
      step: 1,
      title: "Free Estimate",
      description: "Call, text, or submit our online form. We'll provide a detailed quote within 24 hours, often same-day.",
      icon: "phone",
    },
    {
      step: 2,
      title: "Schedule Service",
      description: "Pick a date and time that works for you. We offer flexible scheduling including weekends.",
      icon: "calendar",
    },
    {
      step: 3,
      title: "Professional Cleaning",
      description: "Our trained technicians arrive on time with commercial-grade equipment and eco-friendly solutions.",
      icon: "sparkles",
    },
    {
      step: 4,
      title: "Final Walkthrough",
      description: "We walk through the completed work with you to ensure 100% satisfaction before we leave.",
      icon: "check",
    },
  ],

  // === Trust Signals (E-E-A-T) ===
  trustSignals: {
    yearsInBusiness: new Date().getFullYear() - 2020,
    projectsCompleted: "2,500+",
    satisfaction: "100%",
    licensed: true,
    insured: true,
    bonded: false,
    certifications: [
      "PWNA Certified",
      "Soft Wash Systems Certified",
      "EPA Lead-Safe Certified",
    ],
    memberships: [
      "Better Business Bureau",
      "Seminole Chamber of Commerce",
      "UAMCC Member",
    ],
    guarantees: [
      "100% Satisfaction Guarantee",
      "Free Re-Clean if Not Satisfied",
      "No Hidden Fees",
      "Upfront Pricing",
    ],
  },

  // Price range for structured data
  priceRange: "$$",

  // Founded year
  foundingYear: 2020,

  // Owner/Founder (for E-E-A-T)
  founder: {
    name: "Scott Rodgers",
    title: "Owner & Operator",
    bio: "Scott founded Stargate Pressure Washing in 2020 with a commitment to providing exceptional exterior cleaning services to Pinellas County homeowners and businesses.",
  },
};

// Helper to get service area names only
export const getServiceAreaNames = () =>
  siteConfig.serviceAreas.map(area => area.name);

// Helper to get primary service areas
export const getPrimaryServiceAreas = () =>
  siteConfig.serviceAreas.filter(area => area.isPrimary);

export type SiteConfig = typeof siteConfig;
