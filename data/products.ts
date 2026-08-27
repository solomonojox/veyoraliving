export type RoomCategory =
  | "Living Room"
  | "Bedroom"
  | "Dining Room"
  | "Home Office"
  | "Outdoor";

export interface Product {
  id: string;
  slug: string;
  name: string;
  category: RoomCategory;
  price: number;
  compareAtPrice?: number;
  rating: number;
  reviewCount: number;
  images: string[];
  description: string;
  details: string[];
  dimensions: string;
  material: string;
  inStock: boolean;
}

const IMG = {
  livingHero:
    "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1200&auto=format&fit=crop",
  livingRoom:
    "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1200&auto=format&fit=crop",
  bedroom:
    "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?q=80&w=1200&auto=format&fit=crop",
  dining:
    "https://images.unsplash.com/photo-1615874959474-d609969a20ed?q=80&w=1200&auto=format&fit=crop",
  office:
    "https://images.unsplash.com/photo-1593476123561-9516f2097158?q=80&w=1200&auto=format&fit=crop",
  outdoor:
    "https://images.unsplash.com/photo-1600585152220-90363fe7e115?q=80&w=1200&auto=format&fit=crop",
};

export const PRODUCTS: Product[] = [
  {
    id: "p1",
    slug: "milano-sectional-sofa",
    name: "Milano Sectional Sofa",
    category: "Living Room",
    price: 2499,
    compareAtPrice: 2899,
    rating: 4.8,
    reviewCount: 214,
    images: [IMG.livingHero, IMG.livingRoom],
    description:
      "A deep, plush sectional built for slow Sunday mornings and full-house movie nights. Kiln-dried hardwood frame, high-resiliency foam cushions, and a family-friendly performance weave that resists stains and fading.",
    details: [
      "Kiln-dried hardwood frame for long-term stability",
      "High-resiliency foam with a fiber wrap for a soft, hotel-sofa feel",
      "Stain-resistant, family-friendly performance fabric",
      "Reversible chaise, configurable left or right",
      "Assembly required; white-glove delivery available at checkout",
    ],
    dimensions: '112"W x 68"D x 34"H',
    material: "Performance weave upholstery, solid hardwood frame",
    inStock: true,
  },
  {
    id: "p2",
    slug: "haven-accent-armchair",
    name: "Haven Accent Armchair",
    category: "Living Room",
    price: 899,
    rating: 4.6,
    reviewCount: 132,
    images: [IMG.livingRoom, IMG.livingHero],
    description:
      "A curved-back accent chair that pairs boucle-soft texture with a sculptural walnut frame. Equally at home as a reading nook chair or an extra seat pulled up to the coffee table.",
    details: [
      "Solid walnut legs with a hand-rubbed oil finish",
      "Boucle upholstery, removable cushion cover",
      "Gentle swivel base for easy conversation",
      "Spot clean only",
    ],
    dimensions: '30"W x 32"D x 31"H',
    material: "Boucle upholstery, solid walnut frame",
    inStock: true,
  },
  {
    id: "p3",
    slug: "aria-platform-bed",
    name: "Aria Platform Bed",
    category: "Bedroom",
    price: 1299,
    rating: 4.9,
    reviewCount: 187,
    images: [IMG.bedroom, IMG.livingRoom],
    description:
      "A low-profile platform bed with a channel-tufted upholstered headboard. No box spring needed &ndash; the slatted base supports your mattress directly for a cleaner, quieter sleep setup.",
    details: [
      "Channel-tufted upholstered headboard",
      "Solid wood slat support, no box spring required",
      "Under-bed clearance for storage bins",
      "Available in Queen, King and California King",
    ],
    dimensions: 'Queen: 64"W x 86"D x 45"H',
    material: "Linen-blend upholstery, engineered hardwood frame",
    inStock: true,
  },
  {
    id: "p4",
    slug: "willow-nightstand-set",
    name: "Willow Nightstand (Set of 2)",
    category: "Bedroom",
    price: 349,
    compareAtPrice: 429,
    rating: 4.5,
    reviewCount: 96,
    images: [IMG.bedroom, IMG.dining],
    description:
      "Two matching nightstands with soft-close drawers and a cord cutout at the back, so your charging cables stay tucked away instead of dangling off the edge.",
    details: [
      "Soft-close drawer glides",
      "Rear cable cutout for charging cords",
      "Solid wood top, engineered wood body",
      "Sold as a matching pair",
    ],
    dimensions: '22"W x 18"D x 24"H (each)',
    material: "Solid oak top, engineered wood body",
    inStock: false,
  },
  {
    id: "p5",
    slug: "camden-dining-table",
    name: "Camden Dining Table",
    category: "Dining Room",
    price: 1799,
    rating: 4.7,
    reviewCount: 154,
    images: [IMG.dining, IMG.office],
    description:
      "A substantial live-edge-inspired dining table built to host. Seats six comfortably, eight in a pinch, with a matte-sealed top that shrugs off everyday spills.",
    details: [
      "Solid acacia wood top with matte protective seal",
      "Seats 6&ndash;8 people",
      "Powder-coated black steel base",
      "Felt pads included to protect flooring",
    ],
    dimensions: '84"W x 38"D x 30"H',
    material: "Solid acacia wood, powder-coated steel base",
    inStock: true,
  },
  {
    id: "p6",
    slug: "solstice-dining-chair-set",
    name: "Solstice Dining Chair (Set of 2)",
    category: "Dining Room",
    price: 549,
    rating: 4.4,
    reviewCount: 88,
    images: [IMG.dining, IMG.livingRoom],
    description:
      "Woven cord seating over a solid wood frame &ndash; breathable, lightweight, and comfortable enough to linger at the table long after dinner's done.",
    details: [
      "Hand-woven natural cord seat",
      "Solid rubberwood frame",
      "Stackable for easy storage",
      "Sold as a set of 2 chairs",
    ],
    dimensions: '19"W x 22"D x 32"H (each)',
    material: "Woven cord seat, solid rubberwood frame",
    inStock: true,
  },
  {
    id: "p7",
    slug: "nordic-writing-desk",
    name: "Nordic Writing Desk",
    category: "Home Office",
    price: 749,
    rating: 4.6,
    reviewCount: 121,
    images: [IMG.office, IMG.dining],
    description:
      "A clean-lined desk with a built-in cable tray and two drawers, sized to fit a dual-monitor setup without swallowing the whole room.",
    details: [
      "Built-in cable management tray",
      "Two soft-close drawers",
      "Scratch-resistant laminate top",
      "Cutout for cable pass-through",
    ],
    dimensions: '55"W x 24"D x 30"H',
    material: "Laminate top, solid wood legs",
    inStock: true,
  },
  {
    id: "p8",
    slug: "ember-task-chair",
    name: "Ember Task Chair",
    category: "Home Office",
    price: 429,
    compareAtPrice: 499,
    rating: 4.3,
    reviewCount: 73,
    images: [IMG.office, IMG.livingHero],
    description:
      "Breathable mesh back, adjustable lumbar support, and a synchro-tilt mechanism built for full work days &ndash; without looking like it belongs in a call center.",
    details: [
      "Adjustable lumbar support and armrests",
      "Breathable mesh backrest",
      "Synchro-tilt mechanism with tension control",
      "Weight capacity: 275 lbs",
    ],
    dimensions: '26"W x 26"D x 38&ndash;42"H',
    material: "Mesh back, molded foam seat, aluminum base",
    inStock: true,
  },
  {
    id: "p9",
    slug: "marina-outdoor-lounge-set",
    name: "Marina Outdoor Lounge Set",
    category: "Outdoor",
    price: 2199,
    rating: 4.7,
    reviewCount: 64,
    images: [IMG.outdoor, IMG.livingHero],
    description:
      "A 4-piece outdoor lounge set in weather-resistant wicker with quick-dry cushions, built to stay outside through the whole season.",
    details: [
      "All-weather synthetic wicker",
      "Quick-dry foam cushions with removable covers",
      "Rust-resistant aluminum frame",
      "Includes 2 armchairs, 1 loveseat, 1 coffee table",
    ],
    dimensions: 'Loveseat: 58"W x 32"D x 28"H',
    material: "Synthetic wicker, aluminum frame",
    inStock: true,
  },
  {
    id: "p10",
    slug: "terra-outdoor-side-table",
    name: "Terra Outdoor Side Table",
    category: "Outdoor",
    price: 299,
    rating: 4.5,
    reviewCount: 41,
    images: [IMG.outdoor, IMG.dining],
    description:
      "A compact concrete-look side table that's actually lightweight fiber-cement &ndash; easy to move around the patio, hard enough to handle rain, sun and everything in between.",
    details: [
      "Weatherproof fiber-cement construction",
      "Lightweight despite the concrete look",
      "Non-slip rubber feet",
      "Wipes clean with just water",
    ],
    dimensions: '18"W x 18"D x 20"H',
    material: "Fiber-cement composite",
    inStock: true,
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return PRODUCTS.find((product) => product.slug === slug);
}

export function getRelatedProducts(product: Product, limit = 4): Product[] {
  return PRODUCTS.filter(
    (p) => p.category === product.category && p.id !== product.id
  ).slice(0, limit);
}

export const ROOM_CATEGORIES: RoomCategory[] = [
  "Living Room",
  "Bedroom",
  "Dining Room",
  "Home Office",
  "Outdoor",
];
