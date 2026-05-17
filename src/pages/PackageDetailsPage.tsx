import { useState, useEffect, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Star,
  ChevronDown,
  ChevronUp,
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
  ThumbsUp,
  ThumbsDown,
  Shield,
  Clock,
  ArrowRight,
  MapPin
} from 'lucide-react';
import { useAuth } from '../lib/AuthContext';

// Define the interface for the package data to ensure strong typing and easy scalability
interface ItineraryDay {
  day: number;
  title: string;
  activities: string[];
}

interface AccommodationItem {
  city: string;
  nights: number;
  hotel: string;
  stars: number;
  meals: string;
  highlighted?: boolean;
}

interface SimilarPackage {
  title: string;
  nights: number;
  days: number;
  route: string;
  price: number;
  image: string;
}

interface ReviewItem {
  author: string;
  location: string;
  date: string;
  rating: number;
  positive: string;
  constructive?: string;
  reply?: {
    date: string;
    text: string;
  };
}

interface PackageData {
  title: string;
  nights: number;
  days: number;
  price: number;
  oldPrice: number;
  discount: string;
  route: string;
  images: string[];
  soldBy: {
    name: string;
    logoText: string;
    rating: number;
    reviewsCount: number;
    location: string;
  };
  itinerary: ItineraryDay[];
  accommodation: AccommodationItem[];
  inclusions: string[];
  exclusions: string[];
  otherDetails: string[];
  reviews: ReviewItem[];
}

// Full premium dataset for Sri Lanka (matching the screenshots)
const SRI_LANKA_PACKAGE: PackageData = {
  title: 'Sri Lanka Highlights: Kandy, Bentota & Colombo Adventure',
  nights: 3,
  days: 4,
  price: 15700,
  oldPrice: 16000,
  discount: '1% off',
  route: 'Kandy(1N) → Bentota(1N) → Colombo(1N)',
  images: [
    'https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?auto=format&fit=crop&w=1200&q=80', // Beautiful Sri Lanka coast
    'https://images.unsplash.com/photo-1546708973-b339540b5162?auto=format&fit=crop&w=1200&q=80', // Kandy Temple
    'https://images.unsplash.com/photo-1563189309-874ca7a47ab5?auto=format&fit=crop&w=1200&q=80', // Scenic Train Ride
  ],
  soldBy: {
    name: 'TGL Leisures',
    logoText: 'TGL',
    rating: 5.0,
    reviewsCount: 2,
    location: 'Travel agency in Colombo'
  },
  itinerary: [
    {
      day: 1,
      title: 'Arrival in Colombo & Transfer to Kandy',
      activities: [
        'Arrival at Colombo International Airport.',
        'Private transfer to Kandy (approximately 3-4 hours\' drive).',
        'Kandy Sightseeing: Visit the famous Temple of the Tooth, Kandy Lake, and Kandy Market.',
        'Evening traditional Sri Lankan dance performance.',
        'Overnight stay at a budget-friendly hotel in Kandy.'
      ]
    },
    {
      day: 2,
      title: 'Kandy to Bentota - Beach Day & Leisure',
      activities: [
        'Breakfast at the hotel, check out and drive to Bentota.',
        'Enroute visit the Pinnawala Elephant Orphanage (optional).',
        'Arrive in Bentota, check into your beach resort.',
        'Spend the afternoon relaxing on the golden beaches.',
        'Enjoy water sports at Madu River (banana boat, jet ski, etc.) at your own expense.',
        'Overnight stay at a beach-facing hotel in Bentota.'
      ]
    },
    {
      day: 3,
      title: 'Bentota to Colombo - City Exploration',
      activities: [
        'Breakfast at the hotel, check out and drive to Colombo.',
        'Explore Colombo: visit Galle Face Green, National Museum, and Independent Square.',
        'Shop at premium local markets like ODEL and House of Fashions.',
        'Enjoy the vibrant nightlife and street food at Colombo.',
        'Overnight stay at a premium hotel in Colombo.'
      ]
    },
    {
      day: 4,
      title: 'Departure from Colombo',
      activities: [
        'Breakfast at the hotel and check out.',
        'Free time for last-minute shopping.',
        'Transfer to Colombo International Airport for your departure flight.'
      ]
    }
  ],
  accommodation: [
    {
      city: 'Kandy',
      nights: 1,
      hotel: 'Hotel Casamara',
      stars: 3,
      meals: 'Breakfast Included'
    },
    {
      city: 'Bentota',
      nights: 1,
      hotel: 'Marina Bentota',
      stars: 3,
      meals: 'Breakfast Included',
      highlighted: true
    },
    {
      city: 'Colombo',
      nights: 1,
      hotel: 'Pearl City Hotel',
      stars: 3,
      meals: 'Breakfast Included'
    }
  ],
  inclusions: [
    'DBL or TPL sharing rooms at every location for 3 nights',
    'Meal plan is on BB basis (breakfast only)',
    'All transfers by fully air-conditioned vehicle for the entire trip on a private basis',
    'Daily 500ml x 2 bottles of drinking water per person',
    'All taxes and compulsory service charges',
    '24x7 assistant service'
  ],
  exclusions: [
    'International Airfare & Visa charges.',
    'Personal expenses like laundry, telephone calls, tips, bar bills, etc.',
    'Entrance fees to sightseeing places, temples, and national parks.',
    'Any water sports or optional activities at Madu River or Bentota Beach.',
    'Any other meals not specified in the inclusions list.'
  ],
  otherDetails: [
    'Standard check-in time is 14:00 hrs and check-out time is 12:00 hrs.',
    'A valid passport with at least 6 months validity from the date of travel is required.',
    'Rates are dynamic and subject to availability at the time of final confirmation.',
    'Any unused services or tours are non-refundable.'
  ],
  reviews: [
    {
      author: 'nepse nisha',
      location: 'Kathmandu',
      date: 'a year ago',
      rating: 5,
      positive: 'I truly appreciate TGL team\'s support, special thanks to Mr Manoj De Silva who helped us make our trip quite interesting and memorable. Srilanka is a fantastic destination to visit and definitely, the Sigiriya, an amazing experience to climb and the breathtaking views from the top, and also the visit to the Temple of the Tooth with a lake view in Kandy was unforgettable. The tour guide/Driver is',
      constructive: 'I personally felt that the planned destinations suggested to us could not be achieved in single day. So, we had to skip a few destinations to make our trip hassle free . So, I think this part shall be worked out by the team so that the tourist feels the overall trip comfortable and achievable as per the time schedule.',
      reply: {
        date: '02 May, 2025',
        text: 'Dear Ms. Nisha ,\n\nThank you for your lovely review!\nWe\'re delighted to hear you had a memorable journey exploring the beauty of Sri Lanka. Your kind words about our service mean a lot to us'
      }
    }
  ]
};

// Alternative premium package (Thailand) to demonstrate the dynamic capability requested
const THAILAND_PACKAGE: PackageData = {
  title: 'Thailand Getaway: Vibrant Bangkok & Pattaya Sunsets',
  nights: 4,
  days: 5,
  price: 24999,
  oldPrice: 26500,
  discount: '5% off',
  route: 'Pattaya(2N) → Bangkok(2N)',
  images: [
    'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=1200&q=80',
  ],
  soldBy: {
    name: 'Asia Journeys',
    logoText: 'AJ',
    rating: 4.8,
    reviewsCount: 14,
    location: 'Travel agency in Bangkok'
  },
  itinerary: [
    {
      day: 1,
      title: 'Arrival in Bangkok & Transfer to Pattaya',
      activities: [
        'Arrive at Suvarnabhumi Airport, Bangkok.',
        'Private transfer to Pattaya beach resort.',
        'Evening Alcazar Cabaret Show entry with premium seats.',
        'Overnight stay at a premium hotel in Pattaya.'
      ]
    },
    {
      day: 2,
      title: 'Pattaya Coral Island Tour by Speedboat',
      activities: [
        'Speedboat transfer to Coral Island (Koh Larn).',
        'Enjoy water activities: parasailing, sea walking, snorkeling.',
        'Seafood buffet lunch included on the beach.',
        'Return to Pattaya and spend evening at leisure.'
      ]
    },
    {
      day: 3,
      title: 'Transfer to Bangkok & Evening Dinner Cruise',
      activities: [
        'Breakfast, check out and drive to Bangkok.',
        'Check into your luxury city-center hotel.',
        'Evening luxury Chao Phraya Princess Dinner Cruise with live band.',
        'Overnight stay in Bangkok.'
      ]
    },
    {
      day: 4,
      title: 'Bangkok City Temple Tour & Shopping',
      activities: [
        'Visit the famous Wat Pho (Reclining Buddha) and Wat Traimit (Golden Buddha).',
        'Drop-off at premium malls: Siam Paragon or CentralWorld for shopping.',
        'Evening free to explore the night markets.'
      ]
    },
    {
      day: 5,
      title: 'Departure from Bangkok',
      activities: [
        'Breakfast, check out and transfer to airport for departure.'
      ]
    }
  ],
  accommodation: [
    {
      city: 'Pattaya',
      nights: 2,
      hotel: 'Golden Cliff Beach Resort',
      stars: 4,
      meals: 'Breakfast & Dinner Included',
      highlighted: true
    },
    {
      city: 'Bangkok',
      nights: 2,
      hotel: 'The Berkeley Hotel Pratunam',
      stars: 4,
      meals: 'Breakfast Included'
    }
  ],
  inclusions: [
    '4 nights luxury accommodation in 4-star hotels',
    'Daily buffet breakfast at hotels and 1 seafood lunch',
    'Roundtrip airport and city transfers on a private basis',
    'Coral Island tour with speedboat transfer',
    'Chao Phraya Dinner Cruise entry tickets',
    'Local English-speaking tour assistance'
  ],
  exclusions: [
    'International flights and tourist visa fees.',
    'Water activities fees at Coral Island (parasailing, etc.).',
    'Personal expenses, tips, and items not listed in inclusions.'
  ],
  otherDetails: [
    'Standard check-in time is 14:00 hrs.',
    'Visa-on-arrival assistance is available at the airport.'
  ],
  reviews: [
    {
      author: 'Rohit Sharma',
      location: 'Mumbai',
      date: '2 months ago',
      rating: 5,
      positive: 'Smooth transfer from Bangkok to Pattaya. The Coral Island speedboat ride was extremely thrilling, and the driver was friendly. High-quality stay!',
      reply: {
        date: '10 Mar, 2026',
        text: 'Dear Mr. Rohit,\n\nWe are delighted to hear you had a great experience in Pattaya!'
      }
    }
  ]
};

export default function PackageDetailsPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const { user } = useAuth();

  // Dynamic state to support multiple travel packages
  const [selectedPkgKey, setSelectedPkgKey] = useState<'sri-lanka' | 'thailand'>('sri-lanka');
  const pkg = selectedPkgKey === 'sri-lanka' ? SRI_LANKA_PACKAGE : THAILAND_PACKAGE;

  // UI state variables
  const [currentImg, setCurrentImg] = useState(0);
  const [policyTab, setPolicyTab] = useState<'inclusions' | 'exclusions' | 'other'>('inclusions');
  const [expandedDays, setExpandedDays] = useState<Record<number, boolean>>({ 1: true });

  const scrollRefSimilar = useRef<HTMLDivElement>(null);
  const scrollRefBrowse = useRef<HTMLDivElement>(null);

  // Sync image gallery on package change
  useEffect(() => {
    setCurrentImg(0);
    setExpandedDays({ 1: true });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [selectedPkgKey]);

  // Navigate to customize route
  const handleCustomization = () => {
    if (!user) {
      navigate('/login', { state: { from: location } });
    } else {
      navigate(`/customize/${selectedPkgKey === 'sri-lanka' ? 'sri-lanka-special' : 'thailand-special'}`);
    }
  };

  // Toggle itinerary accordion day
  const toggleDay = (day: number) => {
    setExpandedDays(prev => ({
      ...prev,
      [day]: !prev[day]
    }));
  };

  // Similar packages list
  const similarPackages: SimilarPackage[] = [
    {
      title: '5-Day Sri Lanka Tour: Kandy Temple Bentota Beaches Colombo Highlights',
      nights: 4,
      days: 5,
      route: 'Kandy(1N) → Bentota(2N) → Colombo(1N)',
      price: 19897,
      image: 'https://images.unsplash.com/photo-1546708973-b339540b5162?auto=format&fit=crop&w=600&q=80'
    },
    {
      title: 'Ancient Ruins & Coastal Charm: 4-Day Sri Lanka Adventure',
      nights: 3,
      days: 4,
      route: 'Sigiriya(1N) → Kandy(1N) → Colombo(1N)',
      price: 20290,
      image: 'https://images.unsplash.com/photo-1563189309-874ca7a47ab5?auto=format&fit=crop&w=600&q=80'
    },
    {
      title: '3N Ultimate Getaway to Sri Lanka',
      nights: 3,
      days: 4,
      route: 'Sigiriya(1N) → Colombo(1N) → Bentota(1N)',
      price: 20750,
      image: 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&w=600&q=80'
    },
    {
      title: 'Golden Triangle of Sri Lanka: Cultural & Scenic Wonders',
      nights: 5,
      days: 6,
      route: 'Kandy(2N) → Nuwara Eliya(1N) → Bentota(2N)',
      price: 24500,
      image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=600&q=80'
    }
  ];

  // Browse Other Packages category cards
  const categoryPackages = [
    {
      name: 'Sri Lanka Packages',
      image: 'https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?auto=format&fit=crop&w=400&q=80',
      count: '12 packages available'
    },
    {
      name: 'Thailand Packages',
      image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=400&q=80',
      count: '8 packages available'
    },
    {
      name: 'Maldives Packages',
      image: 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&w=400&q=80',
      count: '6 packages available'
    },
    {
      name: 'Central Asia Packages',
      image: 'https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=400&q=80',
      count: '5 packages available'
    }
  ];

  return (
    <div className="min-h-screen bg-white text-[#1f2937] font-sans antialiased pt-28 md:pt-36 pb-20">
      
      {/* 🌟 DYNAMIC PACKAGE SWITCHER BAR */}
      <div className="bg-[#f8f5ef] border-b border-gray-200 py-3 px-6 shadow-sm sticky top-[72px] md:top-[88px] z-50 transition-all duration-300">
        <div className="max-w-[1400px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold uppercase tracking-wider text-gray-500">Viewing Route:</span>
            <span className="text-sm font-semibold text-[#b08d57]">{pkg.title}</span>
          </div>
          
          <div className="flex items-center gap-3">
            <label htmlFor="package-select" className="text-xs font-bold text-gray-500 uppercase tracking-wider whitespace-nowrap">
              Switch Package Data:
            </label>
            <select
              id="package-select"
              value={selectedPkgKey}
              onChange={(e) => setSelectedPkgKey(e.target.value as any)}
              className="bg-white border border-gray-300 text-gray-800 text-xs font-bold rounded-lg px-3 py-1.5 focus:outline-none focus:ring-1 focus:ring-[#b08d57] focus:border-[#b08d57] cursor-pointer shadow-sm transition-all"
            >
              <option value="sri-lanka">Sri Lanka Adventure (3N/4D)</option>
              <option value="thailand">Thailand Getaway (4N/5D)</option>
            </select>
          </div>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 pt-8">
        
        {/* 🚀 TWO-COLUMN GRID LAYOUT */}
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          
          {/* ========================================================================= */}
          {/* LEFT COLUMN (65% width)                                                   */}
          {/* ========================================================================= */}
          <div className="w-full lg:w-[65%] space-y-8">
            
            {/* 📸 HERO IMAGE GALLERY */}
            <div className="relative rounded-xl overflow-hidden shadow-md group h-[300px] md:h-[520px] bg-gray-100 border border-gray-100">
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentImg}
                  src={pkg.images[currentImg]}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  alt={`${pkg.title} Gallery`}
                />
              </AnimatePresence>

              {/* Prev Overlay Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentImg(prev => (prev - 1 + pkg.images.length) % pkg.images.length);
                }}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 shadow-lg rounded-full flex items-center justify-center text-gray-800 opacity-0 group-hover:opacity-100 transition-all hover:bg-white hover:scale-105 active:scale-95"
              >
                <ChevronLeft size={20} />
              </button>

              {/* Next Overlay Button (matching screenshots) */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentImg(prev => (prev + 1) % pkg.images.length);
                }}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 shadow-lg rounded-full flex items-center justify-center text-gray-800 opacity-100 group-hover:opacity-100 transition-all hover:bg-white hover:scale-105 active:scale-95"
              >
                <ChevronRight size={20} />
              </button>

              {/* Slide Indicators dot overlays */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 bg-black/30 px-3 py-1.5 rounded-full backdrop-blur-sm">
                {pkg.images.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentImg(i)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      currentImg === i ? 'bg-white w-4' : 'bg-white/50 hover:bg-white/70'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* 📋 DETAILED ITINERARY SECTION */}
            <section id="itinerary" className="space-y-4 pt-2">
              <h2 className="text-2xl font-bold text-gray-900 tracking-tight flex items-center gap-2">
                Detailed Itinerary
              </h2>
              
              <div className="space-y-4">
                {pkg.itinerary.map((day) => {
                  const isOpen = !!expandedDays[day.day];
                  return (
                    <div
                      key={day.day}
                      className="rounded-lg border border-gray-200 overflow-hidden bg-white shadow-sm hover:border-gray-300 transition-all duration-300"
                    >
                      {/* Accordion Header */}
                      <div
                        onClick={() => toggleDay(day.day)}
                        className="p-5 flex items-center justify-between cursor-pointer select-none bg-white hover:bg-gray-50/50 transition-all duration-200"
                      >
                        <div className="flex items-center gap-4">
                          <div className="bg-[#fef2f4] text-[#ff4d6d] font-bold text-xs px-3.5 py-1.5 rounded-md tracking-wider">
                            Day {day.day}
                          </div>
                          <h4 className="font-bold text-base md:text-lg text-gray-800 hover:text-[#b08d57] transition-colors">
                            {day.title}
                          </h4>
                        </div>
                        <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center border border-gray-100 text-gray-500 hover:text-gray-900 transition-all">
                          {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                        </div>
                      </div>

                      {/* Accordion Content with smooth height animations */}
                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: 'easeInOut' }}
                            className="overflow-hidden border-t border-gray-100"
                          >
                            <div className="p-6 bg-white space-y-4">
                              <ul className="space-y-3">
                                {day.activities.map((act, index) => (
                                  <li key={index} className="flex items-start gap-3 text-gray-600 leading-relaxed">
                                    <div className="w-1.5 h-1.5 rounded-full bg-[#b08d57] shrink-0 mt-2.5" />
                                    <span className="text-[14px] md:text-[15px]">{act}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </section>

            {/* 🏨 ACCOMMODATION SECTION */}
            <section id="accommodation" className="space-y-4 pt-2">
              <h2 className="text-2xl font-bold text-gray-900 tracking-tight">
                Accommodation Details
              </h2>
              
              <div className="border border-gray-200 rounded-xl p-5 md:p-6 bg-white shadow-sm space-y-5">
                <div className="space-y-4">
                  {pkg.accommodation.map((item, index) => (
                    <div
                      key={index}
                      className={`p-4 rounded-lg border transition-all duration-300 ${
                        item.highlighted
                          ? 'bg-gray-50 border-gray-200 shadow-sm'
                          : 'bg-white border-transparent'
                      }`}
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                        <div>
                          <h4 className="font-bold text-gray-800 text-[15px] sm:text-base flex items-center gap-1.5">
                            {item.city}
                            <span className="text-gray-400 font-medium text-xs tracking-wide">
                              ({item.nights} {item.nights === 1 ? 'night' : 'nights'})
                            </span>
                          </h4>
                          <p className="text-sm text-gray-500 mt-1 flex flex-wrap items-center gap-1">
                            <span>{item.hotel}</span>
                            <span className="inline-flex items-center gap-0.5 bg-amber-50 text-amber-600 text-[11px] font-bold px-1.5 py-0.5 rounded border border-amber-100">
                              {item.stars}★ <Star size={10} fill="currentColor" className="inline" />
                            </span>
                            <span className="text-gray-300 mx-1">•</span>
                            <span className="text-gray-500 font-medium">with {item.meals}</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* 💳 Price card bottom inside Accommodation */}
                <div className="pt-6 border-t border-gray-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 text-xs text-gray-400 font-medium">
                      <span className="line-through">₹{pkg.oldPrice.toLocaleString()}</span>
                      <span className="bg-green-100 text-green-700 text-[10px] font-bold px-1.5 py-0.5 rounded border border-green-200 uppercase">
                        {pkg.discount}
                      </span>
                    </div>
                    <div className="flex items-baseline gap-1">
                      <span className="text-2xl font-black text-gray-900">₹{pkg.price.toLocaleString()}</span>
                      <span className="text-xs text-gray-500 font-semibold">/person</span>
                    </div>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={handleCustomization}
                    className="bg-gradient-to-r from-[#ff4d6d] to-[#ff3355] text-white px-8 py-3.5 rounded-lg font-bold text-sm shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-1.5"
                  >
                    Get Quotes
                    <ArrowRight size={14} />
                  </motion.button>
                </div>
              </div>
            </section>

            {/* 📜 PACKAGE POLICIES SECTION */}
            <section id="policies" className="space-y-4 pt-2">
              <h2 className="text-2xl font-bold text-gray-900 tracking-tight">
                Package Policies
              </h2>

              <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm">
                
                {/* Tabs Navigation Header */}
                <div className="flex border-b border-gray-200 bg-gray-50/50">
                  {[
                    { key: 'inclusions', label: 'Inclusions' },
                    { key: 'exclusions', label: 'Exclusions' },
                    { key: 'other', label: 'Other Details' }
                  ].map((tab) => (
                    <button
                      key={tab.key}
                      onClick={() => setPolicyTab(tab.key as any)}
                      className={`px-6 md:px-8 py-4 text-sm font-bold relative transition-all duration-300 border-r border-gray-200 ${
                        policyTab === tab.key
                          ? 'text-[#b08d57] bg-white'
                          : 'text-gray-400 hover:text-gray-600 bg-transparent'
                      }`}
                    >
                      {tab.label}
                      {policyTab === tab.key && (
                        <motion.div
                          layoutId="activePolicyBar"
                          className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#b08d57]"
                        />
                      )}
                    </button>
                  ))}
                </div>

                {/* Tab content list */}
                <div className="p-6 md:p-8 bg-white min-h-[220px]">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={policyTab}
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ul className="space-y-3.5">
                        {policyTab === 'inclusions' &&
                          pkg.inclusions.map((item, i) => (
                            <li key={i} className="flex gap-3 text-gray-600 text-[14px] md:text-[15px] leading-relaxed">
                              <div className="w-1.5 h-1.5 rounded-full bg-green-500 shrink-0 mt-2" />
                              <span>{item}</span>
                            </li>
                          ))}

                        {policyTab === 'exclusions' &&
                          pkg.exclusions.map((item, i) => (
                            <li key={i} className="flex gap-3 text-gray-600 text-[14px] md:text-[15px] leading-relaxed">
                              <div className="w-1.5 h-1.5 rounded-full bg-rose-500 shrink-0 mt-2" />
                              <span>{item}</span>
                            </li>
                          ))}

                        {policyTab === 'other' &&
                          pkg.otherDetails.map((item, i) => (
                            <li key={i} className="flex gap-3 text-gray-600 text-[14px] md:text-[15px] leading-relaxed">
                              <div className="w-1.5 h-1.5 rounded-full bg-[#b08d57] shrink-0 mt-2" />
                              <span>{item}</span>
                            </li>
                          ))}
                      </ul>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </section>

            {/* 🎯 SIMILAR PACKAGES SECTION */}
            <section className="space-y-5 pt-8 border-t border-gray-200">
              <div className="flex flex-col gap-1">
                <h2 className="text-2xl font-bold text-gray-900 tracking-tight">
                  Similar Packages
                </h2>
                <p className="text-xs md:text-sm text-gray-500 font-medium">
                  Compare quotes from upto 3 travel agents for free
                </p>
              </div>

              {/* Horizontal Scroll Containers */}
              <div className="relative group/scroll">
                <div
                  ref={scrollRefSimilar}
                  className="flex gap-5 overflow-x-auto no-scrollbar snap-x scroll-smooth pb-4 px-1"
                >
                  {similarPackages.map((item, i) => (
                    <div
                      key={i}
                      className="flex-none w-[280px] md:w-[320px] rounded-xl border border-gray-200 overflow-hidden bg-white shadow-sm hover:shadow-md hover:border-gray-300 transition-all duration-300 snap-start flex flex-col"
                    >
                      <div className="relative h-[180px] md:h-[200px] bg-gray-100 overflow-hidden">
                        <img
                          src={item.image}
                          className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                          alt={item.title}
                        />
                        <div className="absolute top-3 left-3 bg-white/95 px-3 py-1.5 rounded-full text-[10px] font-bold text-gray-800 shadow-md border border-white/50 tracking-wide uppercase">
                          {item.nights} Nights / {item.days} Days
                        </div>
                      </div>

                      <div className="p-4 flex-1 flex flex-col justify-between space-y-4">
                        <div className="space-y-2">
                          <h4 className="font-bold text-sm md:text-base text-gray-800 line-clamp-2 hover:text-[#b08d57] transition-colors leading-snug">
                            {item.title}
                          </h4>
                          <p className="text-xs text-gray-400 font-medium truncate flex items-center gap-1">
                            <MapPin size={12} className="text-[#b08d57]" />
                            {item.route}
                          </p>
                        </div>

                        <div className="pt-3 border-t border-gray-50 flex items-center justify-between">
                          <div className="flex flex-col">
                            <span className="text-xs text-gray-400 font-medium leading-none">Starting from</span>
                            <span className="text-base md:text-lg font-black text-gray-900 mt-1">
                              ₹{item.price.toLocaleString()}
                              <span className="text-[10px] text-gray-400 font-semibold">/person</span>
                            </span>
                          </div>

                          <button className="bg-gradient-to-r from-[#ff4d6d] to-[#ff3355] text-white px-4 py-2 rounded-lg font-bold text-xs shadow-sm hover:shadow-md transition-all flex items-center gap-1 group/btn">
                            Get Offers
                            <ChevronRight size={12} className="transition-transform group-hover/btn:translate-x-0.5" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Arrow Navigation (Hover Overlay) */}
                <button
                  onClick={() => scrollRefSimilar.current?.scrollBy({ left: 320, behavior: 'smooth' })}
                  className="absolute right-[-14px] top-[140px] z-10 w-9 h-9 bg-white shadow-xl rounded-full flex items-center justify-center border border-gray-150 text-gray-800 hover:bg-gray-50 opacity-0 group-hover/scroll:opacity-100 transition-all hover:scale-105 active:scale-95"
                >
                  <ChevronRight size={18} />
                </button>
              </div>

              {/* View All Packages button with hover fill animation */}
              <div className="flex justify-center pt-2">
                <button className="w-full sm:w-auto px-10 py-3.5 border border-[#b08d57] text-[#b08d57] font-bold rounded-lg hover:bg-[#b08d57] hover:text-white transition-all duration-300 text-sm tracking-wide uppercase">
                  View All Packages for {pkg.title.includes('Sri Lanka') ? 'Sri Lanka' : 'Thailand'}
                </button>
              </div>
            </section>

            {/* 🏝️ BROWSE MORE PACKAGES */}
            <section className="space-y-5 pt-8 border-t border-gray-200">
              <div className="flex flex-col gap-1">
                <h2 className="text-2xl font-bold text-gray-900 tracking-tight">
                  Browse More Packages
                </h2>
                <p className="text-xs md:text-sm text-gray-500 font-medium">
                  Compare quotes from upto 3 travel agents for free
                </p>
              </div>

              {/* Desktop Grid & Touch Drag mobile */}
              <div
                ref={scrollRefBrowse}
                className="flex gap-5 overflow-x-auto lg:grid lg:grid-cols-4 no-scrollbar pb-4"
              >
                {categoryPackages.map((cat, i) => (
                  <div
                    key={i}
                    className="flex-none w-[200px] lg:w-auto bg-white rounded-xl border border-gray-200 p-3 shadow-sm hover:shadow-md hover:border-gray-300 transition-all duration-300 flex flex-col space-y-3 cursor-pointer group"
                  >
                    <div className="h-[120px] rounded-lg overflow-hidden bg-gray-100">
                      <img
                        src={cat.image}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        alt={cat.name}
                      />
                    </div>
                    <div className="px-1 space-y-1">
                      <h4 className="font-bold text-sm text-gray-800 group-hover:text-[#b08d57] transition-colors truncate">
                        {cat.name}
                      </h4>
                      <p className="text-[11px] text-gray-400 font-bold uppercase tracking-wider">
                        {cat.count}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* ⭐ REVIEWS SECTION */}
            <section className="space-y-6 pt-8 border-t border-gray-200">
              <div className="flex flex-col gap-2 p-6 md:p-8 border border-gray-200 rounded-2xl shadow-sm bg-gray-50/50">
                
                {/* Agency Info Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-rose-50 flex items-center justify-center rounded-xl border border-rose-100 text-rose-500 font-black italic text-lg shadow-sm">
                      {pkg.soldBy.logoText}
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-gray-900 flex items-center gap-1.5">
                        {pkg.soldBy.name} Reviews
                        <ShieldCheck size={18} className="text-blue-500 fill-blue-50" />
                      </h3>
                      <p className="text-xs text-gray-400 font-medium">
                        {pkg.soldBy.location}
                      </p>
                    </div>
                  </div>
                  
                  <a
                    href="#view-profile"
                    onClick={(e) => e.preventDefault()}
                    className="text-xs font-bold text-[#b08d57] hover:underline uppercase tracking-widest sm:text-right"
                  >
                    View Profile
                  </a>
                </div>

                {/* Ratings Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t border-gray-150/60 mt-2">
                  
                  {/* Rating Block 1 (Holidify) */}
                  <div className="bg-white rounded-xl p-5 border border-gray-150 flex flex-col space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 bg-orange-50 rounded-full flex items-center justify-center text-orange-500 font-black text-[9px] border border-orange-100">
                        H
                      </div>
                      <span className="text-xs font-bold text-gray-700 tracking-wider">Holidify Rating</span>
                    </div>

                    <div className="flex items-baseline gap-2 pt-1">
                      <span className="text-3xl font-black text-gray-900 leading-none">
                        {pkg.soldBy.rating.toFixed(1)}
                      </span>
                      <div className="flex gap-0.5 text-amber-400">
                        {[1, 2, 3, 4, 5].map((s) => (
                          <Star key={s} size={13} fill="currentColor" stroke="none" />
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between text-[11px] text-gray-400 font-bold pt-2 border-t border-gray-50/50">
                      <span>{pkg.soldBy.reviewsCount} Rating & 1 Review</span>
                      <button className="text-[#b08d57] hover:underline">View Reviews</button>
                    </div>
                  </div>

                  {/* Rating Block 2 (Google) */}
                  <div className="bg-white rounded-xl p-5 border border-gray-150 flex flex-col space-y-2">
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24">
                        <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                        <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                        <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" />
                        <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.63l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                      </svg>
                      <span className="text-xs font-bold text-gray-700 tracking-wider">Google Rating</span>
                    </div>

                    <div className="flex items-baseline gap-2 pt-1">
                      <span className="text-3xl font-black text-gray-900 leading-none">5.0</span>
                      <div className="flex gap-0.5 text-amber-400">
                        {[1, 2, 3, 4, 5].map((s) => (
                          <Star key={s} size={13} fill="currentColor" stroke="none" />
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center justify-between text-[11px] text-gray-400 font-bold pt-2 border-t border-gray-50/50">
                      <span>Based on 2 Reviews</span>
                      <button className="text-[#b08d57] hover:underline">View Reviews</button>
                    </div>
                  </div>

                </div>
              </div>

              {/* Individual review list */}
              <div className="space-y-8 pl-1">
                {pkg.reviews.map((rev, i) => (
                  <div key={i} className="space-y-4">
                    
                    {/* Review Author Info */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gray-150 rounded-full flex items-center justify-center text-gray-500 font-bold text-sm uppercase border border-gray-200">
                          {rev.author.split(' ').map((n) => n[0]).join('')}
                        </div>
                        <div>
                          <h5 className="font-bold text-sm md:text-base text-gray-900 leading-none flex items-center gap-1.5">
                            {rev.author}
                            <span className="text-gray-300 font-medium">•</span>
                            <span className="text-gray-400 font-medium text-xs md:text-sm">{rev.location}</span>
                          </h5>
                          
                          <div className="flex items-center gap-2 mt-1.5">
                            <div className="flex gap-0.5 text-amber-400">
                              {[1, 2, 3, 4, 5].map((s) => (
                                <Star
                                  key={s}
                                  size={11}
                                  fill={s <= rev.rating ? 'currentColor' : 'none'}
                                  stroke="currentColor"
                                />
                              ))}
                            </div>
                            <span className="text-[11px] text-gray-400 font-semibold">{rev.date}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Review Comments text box */}
                    <div className="space-y-3 pl-1 text-[14px] md:text-[15px] leading-relaxed text-gray-700 font-medium">
                      
                      {/* Positive comment (Thumbs-up) */}
                      <div className="flex items-start gap-2.5">
                        <div className="w-5 h-5 rounded-full bg-green-50 text-green-600 flex items-center justify-center border border-green-100 shrink-0 mt-0.5">
                          <ThumbsUp size={11} fill="currentColor" />
                        </div>
                        <p>
                          {rev.positive} <span className="text-[#b08d57] font-semibold cursor-pointer">(Read More)</span>
                        </p>
                      </div>

                      {/* Constructive feedback (Thumbs-down) */}
                      {rev.constructive && (
                        <div className="flex items-start gap-2.5 pt-1">
                          <div className="w-5 h-5 rounded-full bg-gray-50 text-gray-500 flex items-center justify-center border border-gray-200 shrink-0 mt-0.5">
                            <ThumbsDown size={11} fill="currentColor" />
                          </div>
                          <p className="text-gray-500 font-normal">
                            {rev.constructive}
                          </p>
                        </div>
                      )}
                    </div>

                    {/* Styled Agency Speech Bubble Reply */}
                    {rev.reply && (
                      <div className="ml-8 md:ml-12 bg-gray-50 p-5 rounded-xl border border-gray-150/70 space-y-2 relative">
                        {/* Triangle Speech Bubble Tail */}
                        <div className="absolute top-[-10px] left-6 w-3 h-3 bg-[#fafafa] border-l border-t border-gray-150/70 rotate-45" />
                        
                        <div className="flex items-center justify-between text-xs font-bold">
                          <span className="text-gray-800">{pkg.soldBy.name} replied</span>
                          <span className="text-gray-400 font-semibold">{rev.reply.date}</span>
                        </div>
                        
                        <p className="text-xs text-gray-600 leading-relaxed font-medium whitespace-pre-line">
                          {rev.reply.text} <span className="text-[#b08d57] font-semibold cursor-pointer">(Read More)</span>
                        </p>
                      </div>
                    )}

                  </div>
                ))}
              </div>
            </section>

          </div>

          {/* ========================================================================= */}
          {/* STICKY RIGHT COLUMN (35% width)                                           */}
          {/* ========================================================================= */}
          <div className="w-full lg:w-[35%] lg:pl-4 space-y-6">
            
            {/* 📋 Package details metadata flow (only visible at the top, scrollable) */}
            <div className="space-y-4">
              
              {/* Badges */}
              <div className="flex flex-wrap gap-2">
                <span className="bg-gray-100 text-gray-600 text-[10px] md:text-[11px] font-bold px-3 py-1.5 rounded-full uppercase tracking-wider">
                  {pkg.nights} Nights / {pkg.days} Days
                </span>
                <span className="bg-gray-100 text-gray-600 text-[10px] md:text-[11px] font-bold px-3 py-1.5 rounded-full uppercase tracking-wider">
                  Fully Customisable
                </span>
              </div>

              {/* Main Title */}
              <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight tracking-tight">
                {pkg.title}
              </h1>

              {/* Route Path Text */}
              <p className="text-sm font-semibold text-[#b08d57] flex items-center gap-1.5">
                <MapPin size={14} />
                {pkg.route}
              </p>

              {/* Sold by section */}
              <div className="flex items-center gap-3 pt-1">
                <div className="w-10 h-10 bg-rose-50 flex items-center justify-center rounded-lg border border-rose-100 text-rose-500 font-bold text-xs uppercase shadow-sm">
                  {pkg.soldBy.logoText}
                </div>
                <div>
                  <div className="flex items-center gap-1">
                    <span className="text-xs text-gray-400 font-bold uppercase tracking-wider">Sold By:</span>
                    <a href="#agency" className="text-xs font-bold text-blue-600 hover:underline">
                      {pkg.soldBy.name}
                    </a>
                  </div>
                  <div className="flex items-center gap-1 mt-0.5">
                    <div className="flex text-amber-400 gap-0.5">
                      {[1, 2, 3, 4, 5].map((s) => (
                        <Star key={s} size={11} fill="currentColor" stroke="none" />
                      ))}
                    </div>
                    <span className="text-[11px] font-bold text-gray-500">
                      {pkg.soldBy.rating.toFixed(1)} ({pkg.soldBy.reviewsCount} reviews)
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* 💳 STICKY PRICING CARD */}
            <div className="lg:sticky lg:top-36 bg-white border border-gray-200 rounded-2xl p-6 md:p-8 space-y-6 shadow-sm hover:shadow-md transition-all duration-300">
              
              {/* Pricing breakdown */}
              <div className="space-y-1">
                <div className="flex items-baseline gap-2">
                  <span className="text-xs text-gray-400 font-semibold uppercase tracking-wider">Starting From</span>
                  <span className="text-3xl font-black text-gray-900 tracking-tight">
                    ₹{pkg.price.toLocaleString()}*
                  </span>
                </div>
                
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-400 line-through">
                    ₹{pkg.oldPrice.toLocaleString()}
                  </span>
                  <span className="bg-green-150 text-green-700 text-[10px] font-black px-2 py-0.5 rounded border border-green-200 uppercase tracking-wide">
                    {pkg.discount}
                  </span>
                </div>
              </div>

              {/* Get Customized Offers Main CTA Button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleCustomization}
                className="w-full bg-gradient-to-r from-[#ff4d6d] to-[#ff3355] hover:from-[#ff3355] hover:to-[#ff1a3d] text-white h-14 rounded-xl font-bold text-base transition-all flex items-center justify-center gap-2 shadow-md shadow-rose-100/50 uppercase tracking-wider"
              >
                Get Customized Offers
              </motion.button>

              <p className="text-[11px] text-gray-400 text-center font-bold uppercase tracking-wider px-2">
                Compare quotes from 3 agents and get best deals
              </p>

              {/* Safe features items footer */}
              <div className="pt-6 border-t border-gray-150/70 space-y-4">
                <div className="flex gap-3 text-gray-600 items-center">
                  <div className="w-8 h-8 rounded-full bg-[#f8f5ef] flex items-center justify-center shrink-0 border border-amber-100">
                    <Shield size={14} className="text-[#b08d57]" />
                  </div>
                  <p className="text-[11px] font-bold text-gray-500 uppercase tracking-widest leading-normal">
                    Eleqt Safe & Verified Booking
                  </p>
                </div>
                
                <div className="flex gap-3 text-gray-600 items-center">
                  <div className="w-8 h-8 rounded-full bg-[#f8f5ef] flex items-center justify-center shrink-0 border border-amber-100">
                    <Clock size={14} className="text-[#b08d57]" />
                  </div>
                  <p className="text-[11px] font-bold text-gray-500 uppercase tracking-widest leading-normal">
                    Quotes in under 24 hours
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>

      {/* 📱 MOBILE STICKY BOTTOM ACTIONS BAR */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-150 px-6 py-4.5 z-[100] shadow-[0_-10px_30px_rgba(0,0,0,0.08)]">
        <div className="flex items-center justify-between gap-4 max-w-lg mx-auto">
          <div className="flex flex-col">
            <span className="text-[9px] font-bold text-gray-400 uppercase tracking-widest">Starting From</span>
            <div className="flex items-center gap-2">
              <span className="text-xl font-black text-gray-900">₹{pkg.price.toLocaleString()}*</span>
              <span className="text-xs text-gray-400 line-through">₹{pkg.oldPrice.toLocaleString()}</span>
            </div>
          </div>
          
          <button
            onClick={handleCustomization}
            className="bg-gradient-to-r from-[#ff4d6d] to-[#ff3355] text-white px-6 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider shadow-md active:scale-95 transition-all"
          >
            Get Quotes
          </button>
        </div>
      </div>

    </div>
  );
}
