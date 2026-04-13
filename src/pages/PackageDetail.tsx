import { useState, useEffect, useRef } from 'react';
import Navbar from '../components/Navbar';
import { useParams, useLocation, useNavigate, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
   Star,
   ChevronDown,
   ShieldCheck,
   Check,
   ThumbsUp,
   ShieldIcon,
   Info,
   ChevronLeft,
   ChevronRight,
   MapPin,
   Clock,
   Zap,
   Coffee,
   Utensils,
   Maximize2
} from 'lucide-react';
import { useAuth } from '../lib/AuthContext';
import { MOCK_PACKAGES, EnhancedPackage } from '../data/mockPackages';

function PackageDetail() {
   const { slug } = useParams<{ slug: string }>();
   const location = useLocation();
   const navigate = useNavigate();
   const { user } = useAuth();
   const [pkg, setPkg] = useState<EnhancedPackage | null>(null);
   const [activeTab, setActiveTab] = useState('Overview');
   const [currentImg, setCurrentImg] = useState(0);
   const [expandedDay, setExpandedDay] = useState<number | null>(1);
   const [policyTab, setPolicyTab] = useState('Inclusions');
   const scrollRef = useRef<HTMLDivElement>(null);

   useEffect(() => {
      if (slug && MOCK_PACKAGES[slug]) {
         setPkg(MOCK_PACKAGES[slug]);
      }
      window.scrollTo(0, 0);
   }, [slug]);

   if (!pkg) return <div className="pt-32 text-center font-bold text-gray-400">Loading package details...</div>;

   const handleCustomization = () => {
      if (!user) {
         navigate('/login', { state: { from: location } });
      } else {
         navigate(`/customize/${pkg.slug}`);
      }
   };

   const navTabs = ['Overview', 'Itinerary', 'Stay & Meals', 'Policies', 'Reviews'];
   const similarPackages = Object.values(MOCK_PACKAGES).filter(p => p.slug !== pkg.slug).slice(0, 6);

   const policies = {
      'Inclusions': pkg.inclusions,
      'Exclusions': pkg.exclusions,
      'Cancellation': [
         'Cancellation received more than 30 days prior to departure: 25% of the total package cost.',
         'Cancellation received between 20 to 30 days prior to departure: 50% of the total package cost.',
         'Cancellation received within 20 days prior to departure: 100% of the total package cost.'
      ],
      'Payment': [
         'A booking fee of 25% is required at the time of reservation.',
         'Balance payment must be cleared 20 days before departure.',
         'Multiple payment modes like UPI, Credit Card, and Bank Transfer are accepted.'
      ]
   };

   const reviewsList = [
      {
         name: 'PAPADIMITRIOU PANTELIS',
         location: 'Trip to Kerala',
         date: '3 months ago',
         rating: 5,
         comment: 'Everything was wonderful, organization, communication, hotels,car driver was impeccable as were the tour guides in each city.',
         avatar: 'PP',
         images: ['https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&q=80&w=200', 'https://images.unsplash.com/photo-1602216056096-3cc40cc683b3?auto=format&fit=crop&q=80&w=200'],
         reply: 'Dear Sir, Greetings from Sulekha Tours!! Thank you very much for taking out time to write us the feedback about our services.. Glad to note that you enjoyed through out the trip and like our (Read More)'
      },
      {
         name: 'Vinod Rams',
         location: 'Edmonds',
         date: 'a year ago',
         rating: 5,
         comment: 'My two cousins and I had a great five day Kerala tour, the five star hotels were excellent, each with their own character. And the activities were interesting and even challenging...',
         avatar: 'VR',
         reply: 'Dear Mr. Vinod, Thank you for your kind feedback. Your Feed back is very important for us.'
      }
   ];

   return (
      <>
         <Navbar />
         <div className="min-h-screen bg-white font-['Inter',sans-serif]">

            {/* 🔝 TOP NAVIGATION TABS */}
            <div className="bg-white border-b border-gray-100  sticky top-0 z-[60] shadow-sm">
               <div className="max-w-[1200px] mx-auto px-6">
                  <div className="flex gap-8 overflow-x-auto no-scrollbar">
                     {navTabs.map((tab) => (
                        <button
                           key={tab}
                           onClick={() => {
                              setActiveTab(tab);
                              const element = document.getElementById(tab.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-'));
                              if (element) {
                                 const offset = 100;
                                 const bodyRect = document.body.getBoundingClientRect().top;
                                 const elementRect = element.getBoundingClientRect().top;
                                 const elementPosition = elementRect - bodyRect;
                                 const offsetPosition = elementPosition - offset;

                                 window.scrollTo({
                                    top: offsetPosition,
                                    behavior: 'smooth'
                                 });
                              }
                           }}
                           className={`py-4 text-[14px] font-medium whitespace-nowrap relative transition-all ${activeTab === tab ? 'text-[#ff4d6d] font-semibold' : 'text-gray-500 hover:text-gray-900'
                              }`}
                        >
                           {tab}
                           {activeTab === tab && (
                              <motion.div
                                 layoutId="tabUnderline"
                                 className="absolute bottom-[-1px] left-0 right-0 h-[3px] bg-[#ff4d6d] rounded-t-full"
                              />
                           )}
                        </button>
                     ))}
                  </div>
               </div>
            </div>

            <div className="max-w-[1200px] mx-auto px-4 md:px-6 pt-6 pb-24">
               <div className="flex flex-col lg:flex-row gap-6 items-start">

                  {/* 70% LEFT COLUMN */}
                  <div className="lg:w-[68%] w-full space-y-8">

                     {/* 📸 HERO SECTION */}
                     <section id="overview" className="space-y-4">
                        <div className="relative rounded-[20px] overflow-hidden shadow-md group h-[340px] md:h-[450px] bg-gray-50">
                           <AnimatePresence mode="wait">
                              <motion.img
                                 key={currentImg}
                                 src={pkg.images[currentImg]}
                                 initial={{ opacity: 0 }}
                                 animate={{ opacity: 1 }}
                                 exit={{ opacity: 0 }}
                                 className="w-full h-full object-cover"
                              />
                           </AnimatePresence>

                           {/* Image Navigation */}
                           <button
                              onClick={(e) => { e.stopPropagation(); setCurrentImg((prev) => (prev - 1 + pkg.images.length) % pkg.images.length); }}
                              className="absolute left-4 top-1/2 -translate-y-1/2 w-9 h-9 bg-white/90 shadow-lg rounded-full flex items-center justify-center text-gray-800 opacity-0 group-hover:opacity-100 transition-all hover:bg-white"
                           >
                              <ChevronLeft size={18} />
                           </button>
                           <button
                              onClick={(e) => { e.stopPropagation(); setCurrentImg((prev) => (prev + 1) % pkg.images.length); }}
                              className="absolute right-4 top-1/2 -translate-y-1/2 w-9 h-9 bg-white/90 shadow-lg rounded-full flex items-center justify-center text-gray-800 opacity-0 group-hover:opacity-100 transition-all hover:bg-white"
                           >
                              <ChevronRight size={18} />
                           </button>
                        </div>

                        <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                           <div className="space-y-2 flex-1">
                              <div className="flex flex-wrap gap-2">
                                 <span className="bg-gray-100 text-gray-600 text-[11px] font-bold px-3 py-1 rounded-full">{pkg.nights} Nights / {pkg.days} Days</span>
                                 <span className="bg-gray-100 text-gray-600 text-[11px] font-bold px-3 py-1 rounded-full">Fully Customisable</span>
                              </div>
                              <h1 className="text-[28px] md:text-[32px] font-bold text-[#333] leading-[1.1] tracking-tight line-clamp-2">
                                 {pkg.title}
                              </h1>
                              <p className="text-[14px] font-medium text-gray-500">
                                 {pkg.route.split(' - ').join(' → ')}
                              </p>

                              {/* Seller Info */}
                              <div className="flex items-center gap-3 pt-2">
                                 <div className="w-11 h-11 bg-orange-50 flex items-center justify-center rounded-lg border border-orange-100 shrink-0">
                                    <span className="text-orange-500 font-black italic text-xl">iek</span>
                                 </div>
                                 <div className="space-y-0.5">
                                    <p className="text-[13px] font-bold text-gray-800">
                                       Sold By: <span className="text-[#3d81bb] hover:underline cursor-pointer">Sulekha Tours Private Limited</span>
                                       <ShieldCheck size={14} className="inline ml-1 text-[#3d81bb]" />
                                    </p>
                                    <div className="flex items-center gap-1.5">
                                       <Star size={14} fill="#fcc419" stroke="#fcc419" />
                                       <span className="text-[13px] font-bold text-gray-800">4.8</span>
                                       <span className="text-[12px] text-gray-400 font-medium">(68 reviews)</span>
                                    </div>
                                 </div>
                              </div>
                           </div>

                           {/* Desktop Price Sidebar Link */}
                           <div className="hidden lg:block w-[1px] h-24 bg-gray-100 mx-4" />

                           <div className="lg:hidden bg-[#f8f9fa] p-4 rounded-xl space-y-4">
                              <div className="flex items-baseline justify-between">
                                 <div className="flex items-baseline gap-2">
                                    <span className="text-[13px] text-gray-500">Starting From</span>
                                    <span className="text-[24px] font-black">₹{pkg.price.toLocaleString()}*</span>
                                    <span className="text-[14px] text-gray-400 line-through">₹{(pkg.price + 2000).toLocaleString()}</span>
                                    <span className="bg-green-100 text-green-700 text-[10px] font-black px-2 py-0.5 rounded uppercase">9% off</span>
                                 </div>
                              </div>
                              <button onClick={handleCustomization} className="w-full bg-[#ff4d6d] hover:bg-[#ff3355] text-white h-[48px] rounded-xl font-bold text-[16px] transition-all active:scale-[0.98]">
                                 Get Customized Offers
                              </button>
                           </div>
                        </div>
                     </section>

                     {/* 📋 ITINERARY */}
                     <section id="itinerary" className="space-y-6">
                        <h2 className="text-[22px] font-bold text-[#333]">Detailed Itinerary</h2>
                        <div className="space-y-4">
                           {pkg.itinerary.map((day, idx) => (
                              <div
                                 key={idx}
                                 className="rounded-lg border border-gray-200 overflow-hidden bg-white hover:bg-gray-50/30 transition-all shadow-sm"
                              >
                                 <div
                                    onClick={() => setExpandedDay(expandedDay === day.day ? null : day.day)}
                                    className="p-4 flex items-center justify-between cursor-pointer"
                                 >
                                    <div className="flex items-center gap-4">
                                       <div className="bg-[#fef2f4] text-[#ff4d6d] font-bold text-[13px] px-3 py-1 rounded-md">Day {day.day}</div>
                                       <h4 className="font-bold text-[15px] text-gray-800">{day.title}</h4>
                                    </div>
                                    <ChevronDown size={18} className={`text-gray-400 transition-transform ${expandedDay === day.day ? 'rotate-180' : ''}`} />
                                 </div>

                                 <AnimatePresence>
                                    {expandedDay === day.day && (
                                       <motion.div
                                          initial={{ height: 0, opacity: 0 }}
                                          animate={{ height: 'auto', opacity: 1 }}
                                          exit={{ height: 0, opacity: 0 }}
                                          className="overflow-hidden"
                                       >
                                          <div className="px-6 pb-6 pt-2 border-t border-gray-50">
                                             <ul className="space-y-3 list-none">
                                                {day.activities.map((act, i) => (
                                                   <li key={i} className="flex gap-3 text-gray-700 leading-7 text-[15px]">
                                                      <div className="w-1.5 h-1.5 rounded-full bg-gray-400 shrink-0 mt-[13px]" />
                                                      <div className="flex flex-col gap-2">
                                                         <span className="font-medium">{act.split(':')[0]}</span>
                                                         {act.includes(':') && (
                                                            <ul className="ml-4 space-y-2 list-none">
                                                               {act.split(':')[1].split(',').map((item, j) => (
                                                                  <li key={j} className="flex items-center gap-2 text-[14px] text-gray-500">
                                                                     <div className="w-1 h-1 rounded-full border border-gray-300 shrink-0" />
                                                                     {item.trim()}
                                                                  </li>
                                                               ))}
                                                            </ul>
                                                         )}
                                                      </div>
                                                   </li>
                                                ))}
                                             </ul>
                                             {idx === 0 && <p className="mt-4 text-[14px] text-gray-500 border-t border-gray-50 pt-4">Overnight stay in the hotel.</p>}
                                          </div>
                                       </motion.div>
                                    )}
                                 </AnimatePresence>
                              </div>
                           ))}
                        </div>
                     </section>

                     {/* 🏨 STAY & MEALS */}
                     <section id="stay-&-meals" className="space-y-6 pt-4">
                        <h2 className="text-[22px] font-bold text-[#333]">Accommodation Details</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                           {[
                              { city: 'Delhi', nights: 2, hotel: 'Hotel Star Palace or Similar', stars: 2, meals: 'No Meals Included' },
                              { city: 'Agra', nights: 1, hotel: 'Hotel Taj Plaza', stars: 2, meals: 'No Meals Included', highlighted: true },
                              { city: 'Jaipur', nights: 2, hotel: 'Nahargarh Haveli Jaipur', stars: 2, meals: 'No Meals Included' }
                           ].map((item, i) => (
                              <div key={i} className="border border-gray-200 rounded-xl p-5 flex flex-col shadow-sm bg-white hover:shadow-md transition-all">
                                 <div className="space-y-5 flex-1">
                                    <div className={`space-y-4 ${item.highlighted ? '' : ''}`}>
                                       <div className={`space-y-1 ${item.highlighted ? 'p-3 bg-gray-50 rounded-lg -mx-1' : ''}`}>
                                          <h4 className="font-bold text-[15px]">{item.city} <span className="text-gray-400 font-medium text-[13px]">({item.nights} nights)</span></h4>
                                          <div className="text-[13px] text-gray-500 leading-relaxed">
                                             {item.hotel} ({item.stars}<Star size={11} fill="#ffc107" stroke="#ffc107" className="inline mb-0.5" />)
                                             <p className="mt-1 font-medium">{item.meals}</p>
                                          </div>
                                       </div>
                                    </div>
                                 </div>

                                 <div className="mt-10 pt-6 border-t border-gray-50">
                                    <div className="flex flex-col gap-1 mb-6">
                                       <div className="flex items-center gap-1.5 leading-none">
                                          <span className="text-[14px] font-medium text-gray-400 line-through">₹20,500</span>
                                          <span className="text-[11px] font-bold text-green-600 bg-green-50 px-1.5 py-0.5 rounded">9% off</span>
                                       </div>
                                       <p className="text-[22px] font-black text-gray-900 leading-none">₹18,500 <span className="text-[13px] font-medium text-gray-500">/person</span></p>
                                    </div>
                                    <button className="w-full bg-[#ff4d6d] text-white py-3 rounded-xl font-bold text-[14px] hover:bg-[#ff3355] transition-all shadow-sm active:scale-[0.98]">Get Quotes</button>
                                 </div>
                              </div>
                           ))}
                        </div>
                     </section>

                     {/* 📜 POLICIES */}
                     <section id="policies" className="space-y-6 pt-4">
                        <h2 className="text-[22px] font-bold text-[#333]">Package Policies</h2>
                        <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
                           <div className="flex border-b border-gray-100 bg-[#fcfcfc]">
                              {Object.keys(policies).map((tab) => (
                                 <button
                                    key={tab}
                                    onClick={() => setPolicyTab(tab as any)}
                                    className={`px-8 py-4 text-[14px] font-bold relative transition-all ${policyTab === tab ? 'text-[#3d81bb] bg-white' : 'text-gray-400 hover:text-gray-600'
                                       }`}
                                 >
                                    {tab}
                                    {policyTab === tab && (
                                       <motion.div layoutId="policyBar" className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#3d81bb]" />
                                    )}
                                 </button>
                              ))}
                           </div>
                           <div className="p-8 max-w-3xl">
                              <ul className="space-y-3">
                                 {(policies[policyTab as keyof typeof policies] || []).map((policy, i) => (
                                    <li key={i} className="flex gap-4 text-gray-600 text-[15px] leading-relaxed">
                                       <div className="w-1.5 h-1.5 rounded-full bg-[#3d81bb] shrink-0 mt-[10px]" />
                                       <span>{policy}</span>
                                    </li>
                                 ))}
                              </ul>
                           </div>
                        </div>
                     </section>

                     {/* ⭐ REVIEWS */}
                     <section id="reviews" className="space-y-8 pt-4">
                        <div className="flex flex-col gap-6 p-6 md:p-8 border border-gray-200 rounded-[20px] shadow-sm bg-[#fafafa]">
                           <div className="flex items-center justify-between">
                              <div className="flex items-center gap-3">
                                 <div className="w-11 h-11 bg-orange-50 flex items-center justify-center rounded-lg border border-orange-100 shrink-0">
                                    <span className="text-orange-500 font-black italic text-xl">iek</span>
                                 </div>
                                 <div>
                                    <h3 className="font-bold text-[18px] text-gray-900 flex items-center gap-1.5">
                                       Sulekha Tours Private Limited Reviews
                                       <ShieldCheck size={18} className="text-[#3d81bb] fill-blue-50" />
                                    </h3>
                                    <p className="text-[13px] text-gray-500 font-medium">Travel agency in New Delhi • <span className="text-[#3d81bb] cursor-pointer hover:underline">View Profile</span></p>
                                 </div>
                              </div>
                           </div>

                           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
                              <div className="space-y-3">
                                 {[5, 4, 3, 2, 1].map(stars => (
                                    <div key={stars} className="flex items-center gap-3">
                                       <span className="text-[13px] font-bold text-gray-400 w-2">{stars}</span>
                                       <Star size={13} fill="#ffc107" stroke="#ffc107" />
                                       <div className="flex-1 h-[7px] bg-gray-200 rounded-full overflow-hidden">
                                          <div
                                             className="bg-green-500 h-full"
                                             style={{ width: stars === 5 ? '85%' : stars === 4 ? '12%' : '0' }}
                                          />
                                       </div>
                                       <span className="text-[11px] text-gray-400 font-bold w-16 whitespace-nowrap">{stars === 5 ? '56 Ratings' : stars === 4 ? '11 Ratings' : '0 Ratings'}</span>
                                    </div>
                                 ))}
                              </div>

                              <div className="flex flex-col items-center justify-center text-center space-y-1">
                                 <div className="flex items-center gap-2 mb-1">
                                    <div className="w-6 h-6 bg-red-50 rounded-full flex items-center justify-center text-red-600 font-black text-[10px] border border-red-100">H</div>
                                    <span className="text-[14px] font-bold text-gray-800">Holidify Rating</span>
                                 </div>
                                 <p className="text-[32px] font-black leading-none text-gray-900">4.8</p>
                                 <div className="flex gap-0.5">
                                    {[1, 2, 3, 4, 5].map(s => <Star key={s} size={15} fill="#fcc419" stroke="#fcc419" />)}
                                 </div>
                                 <p className="text-[12px] text-gray-500 font-medium pt-1">68 Ratings & 68 Reviews</p>
                                 <button className="text-[12px] text-[#3d81bb] font-bold mt-1">View Reviews</button>
                              </div>

                              <div className="flex flex-col items-center justify-center text-center space-y-1 border-l border-gray-100">
                                 <div className="flex items-center gap-2 mb-1">
                                    <svg className="w-5 h-5" viewBox="0 0 24 24"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" /><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" /><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" /><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.63l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" /></svg>
                                    <span className="text-[14px] font-bold text-gray-800">Google Rating</span>
                                 </div>
                                 <p className="text-[32px] font-black leading-none text-gray-900">4.0</p>
                                 <div className="flex gap-0.5">
                                    {[1, 2, 3, 4, 5].map(s => <Star key={s} size={15} fill={s <= 4 ? "#fcc419" : "#e0e0e0"} stroke={s <= 4 ? "#fcc419" : "#e0e0e0"} />)}
                                 </div>
                                 <p className="text-[12px] text-gray-500 font-medium pt-1">Based on 3 Reviews</p>
                                 <button className="text-[12px] text-[#3d81bb] font-bold mt-1">View Reviews</button>
                              </div>
                           </div>
                        </div>

                        <div className="space-y-12 pl-2">
                           {reviewsList.map((review, i) => (
                              <div key={i} className="space-y-4">
                                 <div className="flex items-center justify-between">
                                    <div className="space-y-1">
                                       <div className="flex items-center gap-3">
                                          <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-500 font-bold text-[14px] uppercase border border-gray-200">
                                             {review.avatar}
                                          </div>
                                          <div>
                                             <h5 className="font-bold text-[15px] text-gray-900 leading-none">
                                                {review.name} <span className="text-gray-400 font-medium mx-1">•</span> <span className="text-gray-400 font-medium">{review.location}</span>
                                             </h5>
                                             <div className="flex items-center gap-2 mt-1.5">
                                                <div className="flex gap-0.5">
                                                   {[1, 2, 3, 4, 5].map(s => <Star key={s} size={13} fill="#fcc419" stroke="#fcc419" />)}
                                                </div>
                                                <span className="text-[12px] text-gray-400 font-medium">{review.date}</span>
                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                 </div>

                                 <div className="space-y-3">
                                    <p className="text-[15px] text-gray-700 leading-relaxed font-medium">
                                       {review.comment}
                                    </p>
                                    {review.images && (
                                       <div className="flex gap-3 pt-2">
                                          {review.images.map((img, idx) => (
                                             <img key={idx} src={img} className="w-24 h-24 object-cover rounded-lg border border-gray-200 cursor-pointer hover:opacity-90 transition-all shadow-sm" alt="Review" />
                                          ))}
                                       </div>
                                    )}
                                 </div>

                                 {review.reply && (
                                    <div className="ml-10 bg-gray-50 p-5 rounded-xl border border-gray-100 space-y-2 relative">
                                       <div className="absolute top-[-10px] left-6 w-3 h-3 bg-gray-50 border-l border-t border-gray-100 rotate-45" />
                                       <p className="text-[13px] font-bold text-gray-800">Sulekha Tours Private Limited replied <span className="text-gray-400 font-medium ml-1">23 Dec, 2025</span></p>
                                       <p className="text-[13px] text-gray-600 leading-relaxed font-medium">{review.reply}</p>
                                    </div>
                                 )}
                              </div>
                           ))}
                        </div>
                     </section>

                     {/* 🎯 SIMILAR PACKAGES */}
                     <section className="space-y-6 pt-12 border-t border-gray-100 pb-12">
                        <div className="flex flex-col gap-1">
                           <h2 className="text-[22px] font-bold text-[#333]">Similar Packages</h2>
                           <p className="text-[13px] text-gray-500">Compare quotes from upto 3 travel agents for free</p>
                        </div>

                        <div className="relative group">
                           <div
                              ref={scrollRef}
                              className="flex gap-6 overflow-x-auto no-scrollbar snap-x scroll-smooth pb-4 px-1"
                           >
                              {similarPackages.map((p, i) => (
                                 <Link to={`/package/${p.slug}`} key={i} className="flex-none w-[300px] group/card snap-start">
                                    <div className="relative h-[230px] rounded-[16px] overflow-hidden mb-3 shadow-md bg-gray-100">
                                       <img src={p.images[0]} className="w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-110" />
                                       <div className="absolute top-3 left-3 bg-white px-3 py-1.5 rounded-full text-[11px] font-black text-gray-800 shadow-lg border border-white/50">
                                          {p.nights} Nights / {p.days} Days
                                       </div>
                                    </div>
                                    <div className="space-y-1.5 px-1 pb-4">
                                       <h4 className="font-bold text-[16px] text-gray-900 group-hover/card:text-[#ff4d6d] transition-colors truncate">{p.title}</h4>
                                       <p className="text-[13px] text-gray-500 font-medium line-clamp-1">{p.route.split(' - ').join(' → ')}</p>
                                       <p className="text-[18px] font-black text-gray-900 pt-1">₹{p.price.toLocaleString()} <span className="text-[13px] font-medium text-gray-400">/person</span></p>
                                    </div>
                                 </Link>
                              ))}
                           </div>

                           <div className="absolute right-[-12px] top-[100px] z-10 opacity-0 group-hover:opacity-100 transition-all">
                              <button
                                 onClick={() => scrollRef.current?.scrollBy({ left: 320, behavior: 'smooth' })}
                                 className="w-10 h-10 bg-white shadow-xl rounded-full flex items-center justify-center text-gray-800 hover:bg-gray-50 border border-gray-100"
                              >
                                 <ChevronRight size={20} />
                              </button>
                           </div>
                        </div>

                        <div className="flex justify-center pt-4">
                           <button className="px-10 py-3 border border-[#3d81bb] text-[#3d81bb] font-bold rounded-lg hover:bg-blue-50 transition-all text-[15px]">
                              View All Packages For {pkg.location}
                           </button>
                        </div>
                     </section>

                  </div>

                  {/* 🎯 30% RIGHT STICKY SIDEBAR */}
                  <div className="lg:w-[32%] w-full">
                     <div className="sticky top-[100px] bg-white border border-gray-200 rounded-2xl p-6 md:p-8 space-y-5 shadow-sm">
                        <div className="flex flex-col gap-1.5">
                           <div className="flex items-baseline gap-2 overflow-hidden">
                              <span className="text-[13px] text-gray-500 whitespace-nowrap">Starting From</span>
                              <span className="text-[26px] font-black text-gray-900 leading-none">₹{pkg.price.toLocaleString()}*</span>
                              <span className="text-[15px] text-gray-400 line-through leading-none">₹{(pkg.price + 2000).toLocaleString()}</span>
                              <span className="bg-green-100 text-green-700 text-[10px] font-black px-1.5 py-0.5 rounded leading-none shrink-0 border border-green-200 uppercase">9% off</span>
                           </div>
                        </div>

                        <motion.button
                           whileHover={{ scale: 1.02 }}
                           whileTap={{ scale: 0.98 }}
                           onClick={handleCustomization}
                           className="w-full bg-[#ff4d6d] hover:bg-[#ff3355] text-white h-[52px] rounded-xl font-bold text-[18px] transition-all flex items-center justify-center gap-2 shadow-lg shadow-red-100/50"
                        >
                           Get Customized Offers
                        </motion.button>

                        <p className="text-[12px] text-gray-500 text-center font-medium leading-tight px-2">
                           Compare quotes from 3 agents and get best deals
                        </p>

                        <div className="pt-4 border-t border-gray-100 space-y-4">
                           <div className="flex gap-3 text-gray-600">
                              <ShieldIcon size={18} className="shrink-0 text-blue-500" />
                              <p className="text-[12px] font-medium leading-relaxed">Holidify Safe & Verified Booking</p>
                           </div>
                           <div className="flex gap-3 text-gray-600">
                              <Clock size={18} className="shrink-0 text-blue-500" />
                              <p className="text-[12px] font-medium leading-relaxed">Quotes in under 24 hours</p>
                           </div>
                        </div>
                     </div>
                  </div>

               </div>
            </div>
         </div>
         <style dangerouslySetInnerHTML={{
            __html: `
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}} />
      </>
   );
}

export default PackageDetail;
