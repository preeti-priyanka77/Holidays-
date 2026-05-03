import almatyImg from '../assets/images/almaty.jpg';
import europeImg from '../assets/images/europe.jpg';

export interface ItineraryDay {
  day: number;
  title: string;
  activities: string[];
}

export interface EnhancedPackage {
  id: string;
  slug: string;
  title: string;
  nights: number;
  days: number;
  price: number | string;
  location: string;
  rating: number;
  reviews: number;
  category: string;
  description: string;
  route: string;
  images: string[];
  itinerary: ItineraryDay[];
  highlights: string[];
  inclusions: string[];
  exclusions: string[];
}

export const MOCK_PACKAGES: Record<string, EnhancedPackage> = {
  'thailand-special': {
    id: 'pkg-thai-001',
    slug: 'thailand-special',
    title: 'Thailand',
    nights: 4,
    days: 5,
    price: '₹64,999/-*',
    location: 'Thailand',
    rating: 4.8,
    reviews: 156,
    category: 'International',
    description: 'Explore the vibrant city life and pristine beaches of Thailand.',
    route: 'Bangkok - Pattaya',
    images: ['https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80'],
    highlights: ['Temple Tours', 'Coral Island', 'Floating Market'],
    inclusions: ['4-Star Hotels', 'Daily Breakfast', 'Private Transfers', 'Sightseeing'],
    exclusions: ['Flights', 'Visa Fees', 'Personal Expenses'],
    itinerary: [{ day: 1, title: 'Arrival in Bangkok', activities: ['Meet & Greet', 'Transfer to Hotel', 'Evening at Leisure'] }]
  },
  'vietnam-special': {
    id: 'pkg-vietnam-001',
    slug: 'vietnam-special',
    title: 'Vietnam',
    nights: 4,
    days: 5,
    price: '₹84,999/-*',
    location: 'Vietnam',
    rating: 4.7,
    reviews: 185,
    category: 'International',
    description: 'Experience the rich culture and stunning landscapes of Vietnam.',
    route: 'Hanoi - Halong Bay',
    images: ['https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=1200&q=80'],
    highlights: ['Halong Bay Cruise', 'Old Quarter Walk', 'Local Cuisine'],
    inclusions: ['Luxury Stay', 'Halong Bay Cruise', 'Guided Tours', 'Internal Flights'],
    exclusions: ['International Airfare', 'Visa', 'Tips'],
    itinerary: [{ day: 1, title: 'Hanoi Arrival', activities: ['Transfer to Hotel', 'Water Puppet Show'] }]
  },
  'almaty-special': {
    id: 'pkg-almaty-001',
    slug: 'almaty-special',
    title: 'Almaty',
    nights: 5,
    days: 6,
    price: '₹1,49,999/-*',
    location: 'Kazakhstan',
    rating: 4.6,
    reviews: 98,
    category: 'International',
    description: 'The greenest city in Central Asia, Almaty offers stunning mountain views and modern charm.',
    route: 'Almaty - Charyn Canyon - Big Almaty Lake',
    images: [almatyImg],
    highlights: ['Charyn Canyon', 'Big Almaty Lake', 'Medeu Skating Rink'],
    inclusions: ['Premium Hotels', 'Cable Car Rides', 'Private Guide', 'All Meals'],
    exclusions: ['International Flights', 'Personal Expenses'],
    itinerary: [{ day: 1, title: 'Welcome to Almaty', activities: ['Arrival', 'Hotel Check-in', 'Evening City Tour'] }]
  },
  'japan-special': {
    id: 'pkg-japan-001',
    slug: 'japan-special',
    title: 'Japan',
    nights: 7,
    days: 8,
    price: '₹3,49,999/-',
    location: 'Japan',
    rating: 4.9,
    reviews: 142,
    category: 'International',
    description: 'A perfect blend of tradition and modernity.',
    route: 'Tokyo - Kyoto - Osaka',
    images: ['https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1200&q=80'],
    highlights: ['Mount Fuji', 'Bullet Train Experience', 'Temple Stay'],
    inclusions: ['Swiss Pass (JR Pass)', '5-Star Stays', 'Cultural Workshops'],
    exclusions: ['International Flights', 'Visa', 'Lunch'],
    itinerary: [{ day: 1, title: 'Arrival in Tokyo', activities: ['Transfer to Shinjuku', 'Neon District Tour'] }]
  },
  'europe-disneyland': {
    id: 'pkg-europe-001',
    slug: 'europe-disneyland',
    title: 'Europe (with Disneyland)',
    nights: 10,
    days: 11,
    price: '₹5,25,999/-*',
    location: 'France, Switzerland, Germany',
    rating: 4.9,
    reviews: 215,
    category: 'International',
    description: 'The ultimate family vacation covering the best of Europe and the magic of Disneyland.',
    route: 'Paris - Disneyland - Lucerne - Zurich',
    images: [europeImg],
    highlights: ['Disneyland Paris', 'Eiffel Tower', 'Swiss Alps'],
    inclusions: ['Luxury Hotels', 'Disneyland Tickets', 'Alpine Passes', 'Private Transfers'],
    exclusions: ['Flights', 'Visa', 'TCS (India)'],
    itinerary: [{ day: 1, title: 'Paris Arrival', activities: ['Check-in', 'Seine River Cruise'] }]
  },
  'himachal-paradise': {
    id: 'pkg-him-001',
    slug: 'himachal-paradise',
    title: 'Himachal',
    nights: 5,
    days: 6,
    price: '₹19,999/-*',
    location: 'Himachal Pradesh, India',
    rating: 4.8,
    reviews: 156,
    category: 'India',
    description: 'Experience the magic of snow-capped mountains and lush valleys.',
    route: 'Shimla - Manali',
    images: ['https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=1200&q=80'],
    highlights: ['Mall Road', 'Rohtang Pass', 'Solang Valley'],
    inclusions: ['Hotels with View', 'Breakfast & Dinner', 'Private Car'],
    exclusions: ['GST', 'Personal Spend'],
    itinerary: [{ day: 1, title: 'Arrival in Shimla', activities: ['Check-in', 'Mall Road Evening Walk'] }]
  },
  'sikkim-special': {
    id: 'pkg-sikkim-001',
    slug: 'sikkim-special',
    title: 'Sikkim',
    nights: 6,
    days: 7,
    price: '₹24,999/-*',
    location: 'Sikkim, India',
    rating: 4.7,
    reviews: 124,
    category: 'India',
    description: 'Enchanting landscapes and spiritual monasteries await you in Sikkim.',
    route: 'Gangtok - Tsomgo Lake - Lachen',
    images: ['https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=1200&q=80'],
    highlights: ['Tsomgo Lake', 'Gurudongmar Lake', 'Rumtek Monastery'],
    inclusions: ['Boutique Stays', 'All Permits', 'Private 4x4'],
    exclusions: ['GST', 'Lunch'],
    itinerary: [{ day: 1, title: 'Gangtok Arrival', activities: ['Transfer from Siliguri', 'Leisure Evening'] }]
  },
  'goa-special': {
    id: 'pkg-goa-001',
    slug: 'goa-special',
    title: 'Goa',
    nights: 3,
    days: 4,
    price: '₹17,999/-*',
    location: 'Goa, India',
    rating: 4.8,
    reviews: 210,
    category: 'India',
    description: 'Relax on the golden beaches and enjoy the vibrant nightlife of Goa.',
    route: 'North Goa - South Goa',
    images: ['https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&w=1200&q=80'],
    highlights: ['Baga Beach', 'Old Goa Churches', 'Dudhsagar Cataracts'],
    inclusions: ['Beach Resort Stay', 'Breakfast & Dinner', 'Airport Transfers'],
    exclusions: ['GST', 'Personal Expenses'],
    itinerary: [{ day: 1, title: 'Arrive in Goa', activities: ['Transfer to Resort', 'Sunset Beach Walk'] }]
  },
  'kerala-luxury': {
    id: 'pkg-ker-001',
    slug: 'kerala-luxury',
    title: 'Kerala',
    nights: 5,
    days: 6,
    price: '₹24,999/-*',
    location: 'Kerala, India',
    rating: 4.7,
    reviews: 156,
    category: 'India',
    description: 'A tranquil journey through the tea gardens and backwaters.',
    route: 'Munnar - Alleppey',
    images: ['https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=1200&q=80'],
    highlights: ['Houseboat Stay', 'Tea Estates', 'Spice Gardens'],
    inclusions: ['Premium Houseboat', 'Daily Breakfast', 'Private Car'],
    exclusions: ['GST', 'Tips'],
    itinerary: [{ day: 1, title: 'Kochi Arrival', activities: ['Transfer to Munnar', 'Spice Garden Visit'] }]
  },
  'kashmir-paradise': {
    id: 'pkg-kash-001',
    slug: 'kashmir-paradise',
    title: 'Kashmir',
    nights: 4,
    days: 5,
    price: '₹24,999/-*',
    location: 'Jammu & Kashmir, India',
    rating: 4.9,
    reviews: 178,
    category: 'India',
    description: 'Heaven on Earth - explore the beauty of Dal Lake and Gulmarg.',
    route: 'Srinagar - Gulmarg - Pahalgam',
    images: ['https://images.unsplash.com/photo-1598091383021-15ddea10925d?auto=format&fit=crop&w=1200&q=80'],
    highlights: ['Shikara Ride', 'Gondola Ride', 'Houseboat Stay'],
    inclusions: ['Luxury Houseboat', 'Hotels', 'All Meals', 'Private Chauffeur'],
    exclusions: ['GST', 'Personal Laundry'],
    itinerary: [{ day: 1, title: 'Arrival in Srinagar', activities: ['Shikara Ride', 'Houseboat Check-in'] }]
  }
};
