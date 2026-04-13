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
  price: number;
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
  'grand-golden-triangle-luxury': {
    id: 'pkg_golden_tri_01',
    slug: 'grand-golden-triangle-luxury',
    title: 'Grand Golden Triangle Luxury Tour (10 Days)',
    nights: 9,
    days: 10,
    price: 44999,
    location: 'Delhi, Agra, Jaipur, Udaipur',
    rating: 4.8,
    reviews: 128,
    category: 'India',
    description: 'Experience the grandeur of India with a comprehensive 10-day journey covering the ultimate Golden Triangle and the serene lakes of Udaipur.',
    route: 'Delhi - Agra - Jaipur - Udaipur - Delhi',
    images: [
      'https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1548013146-72479768bbaa?auto=format&fit=crop&w=1200&q=80'
    ],
    highlights: ['Luxury 5-Star Accommodations', 'Guided Tours', 'Private Transfers', 'Themed Dinners', 'Elephant rides'],
    inclusions: [
      'Luxury 5-Star Accommodations',
      'Guided Tours: All major monuments with expert historians',
      'Private Transfers: Premium SUV with personalized chauffeur',
      'Meals: All breakfasts and themed dinners included',
      'Activities: Elephant rides, Boat cruises, and Folk performances'
    ],
    exclusions: [
      'Flight tickets (Domestic/International)',
      'Personal expenses and tips',
      'GST (5%) and TCS as applicable'
    ],
    itinerary: [
      { day: 1, title: 'Arrival in Delhi & Heritage Walk', activities: ['Arrival: Meet and greet with our travel director', 'Check-in: Grand luxury suite at any 5-star hotel', 'Leisure: Evening heritage walk in Old Delhi'] },
      { day: 2, title: 'Exploring the Capitals Magnificence', activities: ['Sightseeing: Jama Masjid, Red Fort, and Chandni Chowk', 'Drive-pass: Parliament House, Rashtrapati Bhavan, and India Gate', 'Dinner: Fusion dining at Connaught Place'] },
      { day: 3, title: 'Transition to the Abode of Love (Agra)', activities: ['Departure: Morning drive towards Agra via यमुना Expressway', 'Photography: Sunset at Mehtab Bagh overlooking the Taj Mahal', 'Stay: Luxury stay with a balcony view of the monument'] },
      { day: 4, title: 'Taj Mahal Sunrise & Fort Exploration', activities: ['Sunrise: Guided visit to the Taj Mahal at 6 AM', 'Heritage: Agra Fort and the exquisite Itmad-ud-Daulah (Baby Taj)', 'Craft: Visit to the local marble inlay artisans workshop'] },
      { day: 5, title: 'Fatehpur Sikri & The Pink City (Jaipur)', activities: ['History: Walking tour through the abandoned city of Fatehpur Sikri', 'Stop-over: Abhaneri Stepwells (Chand Baori)', 'Check-in: Traditional Haveli-turned-luxury-resort in Jaipur'] },
      { day: 6, title: 'The Royal Forts of Jaipur', activities: ['Experience: Fort visit with options of Jeep or Elephant ride', 'Monuments: Hawa Mahal, City Palace, and Jantar Mantar Observatory', 'Markets: Personalized shopping tour for gemstones and textiles'] },
      { day: 7, title: 'Journey to the City of Lakes (Udaipur)', activities: ['Travel: Morning drive through the lush Aravalli ranges', 'Photography: En-route stop at Ranakpur Jain Temples with 1444 pillars', 'Stay: Lakeview luxury rooms at Lake Pichola Waterfront'] },
      { day: 8, title: 'Udaipur - Venice of the East', activities: ['Sightseeing: City Palace, Jagdish Temple, and Saheliyon-ki-Bari', 'Leisure: Sunset boat cruise on the pristine Lake Pichola', 'Evening: Traditional Ghoomar dance performance at Bagore-ki-Haveli'] },
      { day: 9, title: 'Hidden Gems of Mewar', activities: ['Hike: Early morning hike to Monsoon Palace for panoramic views', 'Nature: Village stay experience on the outskirts of Udaipur', 'Relaxation: Spa and Wellness treatment at the resort'] },
      { day: 10, title: 'Final Departure & Shopping', activities: ['Final Day: Last-minute souvenir shopping at local artisanal centers', 'Departure: Transfer to Udaipur Airport for your flight to Delhi/Home'] }
    ]
  },
  'bali-ultimate': {
    id: 'pkg-bali-001',
    slug: 'bali-ultimate',
    title: 'Ultimate Bali Escape (9 Days)',
    nights: 8,
    days: 9,
    price: 34999,
    location: 'Bali, Indonesia',
    rating: 4.9,
    reviews: 215,
    category: 'International',
    description: 'A deeply immersive 9-day journey through the heart of Bali, from tropical beaches to sacred mountain temples.',
    route: 'Seminyak - Ubud - Lovina - Nusa Penida',
    images: [
      'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1552674605-db6ffd4facb5?auto=format&fit=crop&w=1200&q=80'
    ],
    highlights: ['Stay in luxury villas', 'Rice terrace tour', 'Private beach dinner'],
    inclusions: [
      'Luxury Villa Stay with Private Pool',
      'Daily Floating Breakfast & Candlelit Dinners',
      'Private Driver & Local Balinese Guide',
      'Spa Treatements: 2-hour Balinese full body massage',
      'Entrance: Skip-the-line to all temples'
    ],
    exclusions: [
      'Visa on Arrival',
      'International Flights',
      'Travel Insurance'
    ],
    itinerary: [
      { day: 1, title: 'Island Welcome & Beachside Sunset', activities: ['Arrival: VIP airport pick-up', 'Relax: Check-in to oceanfront villa', 'Sunset: Cocktails at Potato Head Beach Club'] },
      { day: 2, title: 'Seminyak Vibes & Coastal Charm', activities: ['Explore: Hidden beaches of Uluwatu', 'Temple: Visit the clifftop Uluwatu Temple', 'Performance: Kecak Fire Dance at dusk'] },
      { day: 3, title: 'Transition to the Cultural Heart (Ubud)', activities: ['Travel: Scenic drive through Balinese villages', 'Sightseeing: Tegenungan Waterfall and Batuan Temple', 'Stay: Eco-luxury jungle resort with infinity pool'] },
      { day: 4, title: 'Rice Terraces & Sacred Forests', activities: ['Nature: Early morning hike through Tegalalang Rice Terrace', 'Culture: Spiritual blessing ceremony at Tirta Empul Temple', 'Interaction: Visit the Ubud Monkey Forest'] },
      { day: 5, title: 'Sunrise Hike and Hot Springs', activities: ['Adventure: 3 AM hike to Mt. Batur for sunrise views', 'Recovery: Soak in natural volcanic hot springs', 'Leisure: Afternoon Balinese coffee and tea tasting'] },
      { day: 6, title: 'North Bali & Majestic Dolphins', activities: ['Travel: Journey to the black sand beaches of Lovina', 'Experience: Scenic stop at Pura Ulun Danu Bratan water temple', 'Stay: Private beach cottage in the north'] },
      { day: 7, title: 'Lovina Dolphins & Underwater World', activities: ['Sunrise: Traditional boat cruise to see wild dolphins', 'Diving: Snorkeling at Lovina Reef', 'Stop-over: Secret Garden of Sambangan waterfalls'] },
      { day: 8, title: 'Island Hopping (Nusa Penida)', activities: ['Travel: Fast boat to Nusa Penida island', 'Photography: Kelingking Beach (T-Rex Bay) and Broken Beach', 'Relax: Sunset at Crystal Bay'] },
      { day: 9, title: 'Final Farewell to Bali', activities: ['Final Day: Shopping for fine Balinese silver and handicrafts', 'Departure: Fast boat back to mainland and airport transfer'] }
    ]
  },
  'vietnam-adventure': {
    id: 'pkg-vietnam-001',
    slug: 'vietnam-adventure',
    title: 'Wonders of Vietnam & Halong Bay (12 Days)',
    nights: 11,
    days: 12,
    price: 49999,
    location: 'Vietnam',
    rating: 4.7,
    reviews: 185,
    category: 'International',
    description: 'A comprehensive 12-day odyssey from the bustling streets of Hanoi to the emerald waters of Halong Bay and the ancient charm of Hoi An.',
    route: 'Hanoi - Halong Bay - Hue - Hoi An - Ho Chi Minh',
    images: [
      'https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1504457047772-27fad17af652?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1509030450996-93cd56ae4762?auto=format&fit=crop&w=1200&q=80'
    ],
    highlights: ['Overnight Cruise', 'Ancient Town tour'],
    inclusions: [
      '5-Star Hotels & Luxury Cruise Stay',
      'Inter-city flights within Vietnam',
      'Expert English-speaking national guides',
      'All major meals with local delicacies',
      'Private Boat Tours & Cooking Classes'
    ],
    exclusions: ['International Flights', 'Visa processing', 'Tips and personal spend'],
    itinerary: [
      { day: 1, title: 'Historical Hanoi Welcome', activities: ['Arrival: Private car pick-up at Noi Bai Airport', 'Stay: Boutique hotel in the French Quarter', 'Evening: Traditional Water Puppet show'] },
      { day: 2, title: 'Legends of the Old Quarter', activities: ['Culture: Ho Chi Minh Mausoleum and Temple of Literature', 'Walk: Guided street food tour through Old Quarter alleys', 'Leisure: Evening walk around the serene Hoan Kiem Lake'] },
      { day: 3, title: 'Halong Bay - Emerald Waters', activities: ['Travel: Scenic drive to Halong Bay coast', 'Stay: Over-night stay on a luxury 5-star cruise junk-boat', 'Activities: Kayaking and cave exploration in Luon Cave'] },
      { day: 4, title: 'Halong Bay Sunrise to Hanoi', activities: ['Morning: Tai Chi on the deck at sunrise', 'Explore: Surprising Cave (Sung Sot Cave)', 'Travel: Return drive to Hanoi and evening at leisure'] },
      { day: 5, title: 'The Imperial City of Hue', activities: ['Flight: Quick morning flight to the ancient capital Hue', 'Heritage: Walking tour of the UNESCO Imperial Citadel', 'River: Dragon boat cruise on the Perfume River'] },
      { day: 6, title: 'Coastal Drive to Hoi An', activities: ['Experience: Drive over the majestic Hai Van Pass (Cloud Pass)', 'Monuments: Visit the Marble Mountains and Non Nuoc beach', 'Stay: Riverside luxury resort in Hoi An'] },
      { day: 7, title: 'Hoi An - Lantern City & Cooking', activities: ['Walk: Guided walk through the Japanese Bridge and ancient houses', 'Class: Hands-on Vietnamese cooking class in an organic garden', 'Magic: Evening lantern boat ride on the Thu Bon river'] },
      { day: 8, title: 'My Son Sanctuary & Rural Life', activities: ['History: Visit the Champa Kingdom temple ruins at My Son', 'Experience: Basket boat ride through coconut forests', 'Beach: Relaxing afternoon at An Bang Beach'] },
      { day: 9, title: 'Flight to Ho Chi Minh City', activities: ['Flight: Transfer to Da Nang Airport for a flight to Saigon', 'Sightseeing: War Remnants Museum and Re-unification Palace', 'Dining: Dinner cruise on the Saigon River'] },
      { day: 10, title: 'Cu Chi Tunnels & Saigon Streets', activities: ['History: Explore the underground tunnel system of Cu Chi', 'City: Visit the Notre Dame Cathedral and Central Post Office', 'Roof-top: Skydeck views for sunset'] },
      { day: 11, title: 'Mekong Delta - River Life', activities: ['River: Full day tour of the Mekong Delta and floating markets', 'Interaction: Visit local fruit orchards and honey bee farms', 'Experience: Traditional Mekong folk music and local lunch'] },
      { day: 12, title: 'Final Saigon Farewell', activities: ['Shopping: Last minute souvenirs at Ben Thanh Market', 'Departure: Transfer to Tan Son Nhat Airport for your flight home'] }
    ]
  },
  'dubai-luxury': {
    id: 'pkg-dubai-001',
    slug: 'dubai-luxury',
    title: 'Dubai & Abu Dhabi Royal Tour (8 Days)',
    nights: 7,
    days: 8,
    price: 65000,
    location: 'Dubai, UAE',
    rating: 4.6,
    reviews: 142,
    category: 'International',
    description: 'Experience the glitz and glamour of the UAE with a private royal tour of Dubai and Abu Dhabi.',
    route: 'Dubai - Abu Dhabi - Dubai',
    highlights: ['Burj Khalifa sunset', 'Desert Safari', 'Ferrari World'],
    images: ['https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=80'],
    inclusions: ['Luxury Stay', 'Desert Safari', 'Private Transfers', 'All theme park entry tickets'],
    exclusions: ['Visa', 'Airfare'],
    itinerary: [
      { day: 1, title: 'Arrival & Marina Cruise', activities: ['Arrival: VIP pick-up from DXB Airport', 'Check-in: Luxury city-center hotel', 'Evening: Dhow Cruise at Dubai Marina with International Buffet'] },
      { day: 2, title: 'Modern Dubai City Tour', activities: ['Sightseeing: Frame Dubai, Museum of the Future, and Burj Al Arab', 'Photography: Private beach access at Jumeirah', 'Sunset: Visit the 124th floor of Burj Khalifa at dusk'] },
      { day: 3, title: 'Desert Adventure & Bedouin Night', activities: ['Morning: Free for luxury shopping at Dubai Mall', 'Afternoon: 4x4 Dune Bashing and Sandboarding', 'Night: Traditional belly dance and BBQ dinner at desert camp'] },
      { day: 4, title: 'Abu Dhabi - The Capital Grandeur', activities: ['Travel: Inter-city transfer to Abu Dhabi', 'Monuments: Sheikh Zayed Grand Mosque and Emirates Palace', 'Experience: Qasr Al Watan (Presidential Palace) guided walk'] },
      { day: 5, title: 'Ferrari World & Yas Island', activities: ['Thrills: Full day access to Ferrari World or Warner Bros World', 'Beach: Relax at Yas Beach in the evening', 'Leisure: Stay at Yas Island luxury resort'] },
      { day: 6, title: 'Louvre Abu Dhabi & Heritage', activities: ['Art: Visit the Louvre Abu Dhabi museum', 'History: Heritage Village and Dates Market tour', 'Travel: Return drive to Dubai'] },
      { day: 7, title: 'The Palm & Aquaventure', activities: ['Water: Full day at Atlantis Aquaventure Waterpark', 'View: The View at The Palm for panoramic island views', 'Dinner: Fusion dining at The Pointe'] },
      { day: 8, title: 'Final Souvenirs & Departure', activities: ['Shop: Visit the Gold Souk and Spice Souk', 'Departure: Transfer to DXB Airport for your flight'] }
    ]
  },
  'himachal-paradise': {
    id: 'pkg-him-001',
    slug: 'himachal-paradise',
    title: 'Kinnaur & Spiti Valley Adventure (9 Days)',
    nights: 8,
    days: 9,
    price: 38500,
    location: 'Himachal Pradesh, India',
    rating: 4.9,
    reviews: 94,
    category: 'India',
    description: 'A rugged yet luxury expedition through the high-altitude deserts and lush valleys of Spiti and Kinnaur.',
    route: 'Shimla - Sangla - Kalpa - Kaza - Manali',
    highlights: ['Highest post office', 'Chandratal Lake', 'Monastery stay'],
    images: ['https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=1200&q=80'],
    inclusions: ['4x4 Vehicle', 'All Permits', 'Professional Guide', 'Oxygen support in vehicle'],
    exclusions: ['GST', 'Personal Spend'],
    itinerary: [
      { day: 1, title: 'Shimla - Gateway to the Himalayas', activities: ['Arrival: Pick-up from Chandigarh/Shimla', 'Walk: Evening stroll at Mall Road and Ridge', 'Stay: Heritage stay in Shimla'] },
      { day: 2, title: 'Journey to Sangla Valley', activities: ['Travel: Scenic drive along the Sutlej river', 'Views: Stop at Sarahan for Bhimakali Temple', 'Stay: Luxury riverview camps in Sangla'] },
      { day: 3, title: 'Chhitkul - Last Village on Border', activities: ['Exploration: Visit Chhitkul, the last Indian village', 'Trek: Short riverside walk along Baspa River', 'Leisure: Evening bonfire and local Kinnauri culture'] },
      { day: 4, title: 'Kalpa - Majestic Kinner Kailash', activities: ['Travel: Move towards Kalpa', 'Sightseeing: Suicide Point and Roghi Village', 'Photography: Sunset views of Kinner Kailash peak'] },
      { day: 5, title: 'Into the High Desert (Kaza)', activities: ['Adventure: Cross over to Spiti valley via Nako Lake', 'Stop-over: Visit Gue Monastery and the 500-year-old Mummy', 'Stay: High-altitude boutique homestay in Kaza'] },
      { day: 6, title: 'Key Monastery & Kibber Heights', activities: ['Spiritual: Visit the iconic Key Monastery', 'Altitude: Visit Kibber and Chicham bridge (Asia\'s highest)', 'Experience: Picnic lunch at the high mountains'] },
      { day: 7, title: 'Highest Points (Hikkim & Komic)', activities: ['Post: Send a postcard from Hikkim, the world\'s highest post office', 'Religion: Visit Langza Buddha Statue', 'Stay: Return to Kaza'] },
      { day: 8, title: 'Chandratal - The Moon Lake', activities: ['Travel: Journey towards Losar and Kunzum Pass', 'Hike: Short trek to the turquoise Chandratal Lake', 'Experience: Stargazing and camping under the milky way'] },
      { day: 9, title: 'Descent to Manali', activities: ['Travel: Cross Rohtang/Atal Tunnel to enter Manali', 'Departure: Final drop-off at Manali Volvo stand/Airport'] }
    ]
  },
  'kerala-luxury': {
    id: 'pkg-ker-001',
    slug: 'kerala-luxury',
    title: 'God\'s Own Country Retreat (7 Days)',
    nights: 6,
    days: 7,
    price: 32000,
    location: 'Kerala, India',
    rating: 4.7,
    reviews: 156,
    category: 'India',
    description: 'A tranquil 7-day journey through the tea gardens of Munnar and the backwaters of Alleppey.',
    route: 'Kochi - Munnar - Thekkady - Alleppey - Kochi',
    images: ['https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=1200&q=80'],
    highlights: ['Houseboat cruise', 'Tea plantation tour', 'Kathakali show'],
    inclusions: ['Premium Houseboat', 'Daily Breakfast', 'Private Car'],
    exclusions: ['Flights', 'GST'],
    itinerary: [
      { day: 1, title: 'Colonial Kochi Arrival', activities: ['Arrival: Pick-up from COK Airport', 'Stay: Boutique heritage hotel in Fort Kochi', 'Evening: Kathakali dance performance'] },
      { day: 2, title: 'Hill Station Escape (Munnar)', activities: ['Travel: Scenic drive past Cheyappara waterfalls', 'Stay: Luxury hilltop resort overlooking tea estates', 'Leisure: Evening walk in the spice market'] },
      { day: 3, title: 'Tea Gardens & Eravikulam', activities: ['Nature: Spot endangered Tahrs at Eravikulam National Park', 'Culture: Guided tour of the Tea Museum', 'Views: Sunset at Mattupetty Dam'] },
      { day: 4, title: 'Wild Thekkady (Periyar)', activities: ['Travel: Drive through rubber and cardamom plantations', 'Wildlife: Jungle safari and boat cruise in Periyar Lake', 'Action: Kalaripayattu martial arts show'] },
      { day: 5, title: 'Venice of the East (Alleppey)', activities: ['Travel: Move towards the backwaters', 'Stay: Check-in to a private luxury houseboat', 'Cruise: Overnight backwater cruise with traditional Kerala meals'] },
      { day: 6, title: 'Alleppey to Marari Beach', activities: ['Relax: Transfer to Marari beach resort', 'Leisure: Full day at the beach for rejuvenation', 'Stay: Luxury beach villa'] },
      { day: 7, title: 'Departure from Kochi', activities: ['Final shopping at Lulu Mall', 'Departure: Transfer to Kochi Airport'] }
    ]
  },
  'switzerland-dream': {
    id: 'pkg-switz-001',
    slug: 'switzerland-dream',
    title: 'Swiss Alps & Glacier Express (9 Days)',
    nights: 8,
    days: 9,
    price: 185000,
    location: 'Switzerland',
    rating: 4.8,
    reviews: 89,
    category: 'International',
    description: 'The ultimate Alpine experience featuring the Glacier Express and the peaks of Jungfraujoch.',
    route: 'Zurich - Lucerne - Interlaken - Zermatt - Geneva',
    images: ['https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=1200&q=80'],
    highlights: ['Jungfraujoch Peak', 'Mount Titlis', 'Glacier Express Train'],
    inclusions: ['Swiss Travel Pass (First Class)', '4-Star Hotels', 'Daily Breakfast', 'Mountain Excursions'],
    exclusions: ['Visa', 'Indian Dinners', 'Flights'],
    itinerary: [
      { day: 1, title: 'Zurich Arrival & Lakeside Luxury', activities: ['Arrival: Swiss airport welcome', 'Stay: Luxury city hotel', 'Leisure: Evening walk by Lake Zurich'] },
      { day: 2, title: 'Lucerne - The City of Lights', activities: ['Travel: Scenic train to Lucerne', 'Sightseeing: Chapel Bridge and Lion Monument', 'Cruise: Evening sunset cruise on Lake Lucerne'] },
      { day: 3, title: 'Mount Titlis Snow Adventure', activities: ['Adventure: World\'s first revolving cable car to Mt. Titlis', 'Activity: Ice Flyer and Glacier Cave exploration', 'Stay: Evening return to Lucerne'] },
      { day: 4, title: 'Interlaken - The Adventure Hub', activities: ['Travel: GoldenPass Line train to Interlaken', 'Stay: Chalet-style luxury resort', 'Adrenaline: Paragliding (Optional) or Harder Kulm views'] },
      { day: 5, title: 'Jungfraujoch - Top of Europe', activities: ['Experience: Cogwheel train to the highest station in Europe', 'View: Sphinx Observatory for Aletsch Glacier views', 'Return: Via Lauterbrunnen waterfalls'] },
      { day: 6, title: 'Zermatt & The Matterhorn', activities: ['Travel: Scenic train to car-free Zermatt', 'Experience: Gornergrat Railway for best Matterhorn views', 'Stay: Alpine boutique hotel'] },
      { day: 7, title: 'Glacier Express - Slowest Express', activities: ['Journey: Full day panoramic train journey to St. Moritz or Chur', 'Service: Gourmet 3-course lunch served at your seat', 'Stay: Luxury mountain retreat'] },
      { day: 8, title: 'Geneva - The Cosmopolitan', activities: ['Travel: High-speed train to Geneva', 'Sightseeing: Jet d\'Eau and United Nations Headquarters', 'Dining: Farewell Swiss fondue dinner'] },
      { day: 9, title: 'Final Departure', activities: ['Last minute Swiss chocolate shopping', 'Departure: Transfer to GVA Airport for your flight'] }
    ]
  },
  'maldives-retreat': {
    id: 'pkg-mald-001',
    slug: 'maldives-retreat',
    title: 'Maldives Overwater Sanctuary (6 Days)',
    nights: 5,
    days: 6,
    price: 95000,
    location: 'Maldives',
    rating: 4.9,
    reviews: 173,
    category: 'International',
    description: 'Pure luxury in the middle of the Indian Ocean with exclusive overwater villa stays.',
    route: 'Male - Private Island Resort - Male',
    images: ['https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=1200&q=80'],
    highlights: ['Overwater Villa', 'Snorkeling with turtles', 'Private Island Dinner'],
    inclusions: ['Speedboat Transfers', 'All Inclusive Meals', 'Overwater Villa with Pool'],
    exclusions: ['Airfare', 'Green Tax'],
    itinerary: [
      { day: 1, title: 'Paradise Arrival', activities: ['Arrival: Meet and greet at Velana Airport (Male)', 'Transfer: Thrilling speedboat/seaplane journey to resort', 'Stay: Check-in to Private Overwater Villa'] },
      { day: 2, title: 'Underwater Wonders', activities: ['Adventure: Guided snorkeling tour in the house reef', 'Kayaking: Paddle around the island lagoon', 'Relax: Sunset yoga on the beach'] },
      { day: 3, title: 'Island Hopping & Local Culture', activities: ['Experience: Visit a nearby local inhabited island', 'Fishing: Traditional Maldivian sunset line fishing', 'Dining: BBQ lunch on a sandbank'] },
      { day: 4, title: 'Wellness & Relaxation', activities: ['Spa: 90-minute aromatherapy massage at Overwater Spa', 'Luxury: Afternoon tea by the infinity pool', 'Movie: Moonlight cinema experience on the sand'] },
      { day: 5, title: 'Romance & Private Dining', activities: ['Leisure: Free day for water sports (Jet ski/Parasailing)', 'Night: Private 5-course candlelit dinner under the stars', 'Stay: Final night in the ocean suite'] },
      { day: 6, title: 'Final Sunrise & Farewell', activities: ['Morning: Sunrise breakfast on your villa deck', 'Departure: Speedboat transfer back to Male Airport'] }
    ]
  }
};
