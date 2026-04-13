import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { ChevronRight } from 'lucide-react';

const SLIDES = [
  {
    id: 1,
    title: "Bali – Sunset over serene shorelines",
    subtitle: "Explore Bali",
    price: "6N/7D starting at ₹42,000",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1920&q=80"
  },
  {
    id: 2,
    title: "Maldives – Luxury over-water villas",
    subtitle: "Explore Maldives",
    price: "4N/5D starting at ₹85,000",
    image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=1920&q=80"
  },
  {
    id: 3,
    title: "Kashmir – The Heaven on Earth",
    subtitle: "Explore Kashmir",
    price: "5N/6D starting at ₹24,500",
    image: "https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&w=1920&q=80"
  }
];

function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = "https://images.unsplash.com/photo-1506929113670-b4215a31804c?auto=format&fit=crop&w=1920&q=80";
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <motion.img
            src={SLIDES[currentSlide].image}
            alt={SLIDES[currentSlide].title}
            onError={handleImageError}
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 6, ease: "easeOut" }}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent z-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10" />
        </motion.div>
      </AnimatePresence>

      <div className="relative z-20 h-full w-full max-w-7xl mx-auto px-6 md:px-10 flex items-center">
        {/* Content Section - Left Aligned */}
        <div className="w-full lg:w-3/5">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={{
                visible: { transition: { staggerChildren: 0.1 } },
                hidden: { transition: { staggerChildren: 0.05, staggerDirection: -1 } }
              }}
              className="text-white"
            >
              <motion.h2
                variants={{
                  visible: { opacity: 0.8, y: 0 },
                  hidden: { opacity: 0, y: 20 }
                }}
                className="text-[12px] md:text-sm font-bold uppercase tracking-[0.4em] mb-4 text-amber-500"
              >
                {SLIDES[currentSlide].subtitle}
              </motion.h2>
              <motion.h1
                variants={{
                  visible: { opacity: 1, y: 0 },
                  hidden: { opacity: 0, y: 40 }
                }}
                className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-[1.1] tracking-tighter max-w-2xl"
              >
                {SLIDES[currentSlide].title}
              </motion.h1>

              <motion.div
                variants={{
                  visible: { opacity: 1, scale: 1 },
                  hidden: { opacity: 0, scale: 0.9 }
                }}
                className="inline-flex flex-col md:flex-row items-start md:items-center gap-6 backdrop-blur-xl bg-white/10 border border-white/20 rounded-none p-6 md:p-8 shadow-2xl"
              >
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-white/60 mb-1">Pricing Plan</p>
                  <p className="text-xl md:text-2xl font-bold italic">{SLIDES[currentSlide].price}</p>
                </div>
                <div className="h-[1px] md:h-12 w-full md:w-[1px] bg-white/20" />
                <button className="group flex items-center gap-3 bg-white text-black px-8 py-4 rounded-none font-bold uppercase text-[12px] tracking-[0.2em] transition-all hover:bg-amber-500 hover:text-white">
                  Explore Now
                  <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Floating Lead Form Overlay - ABSOLUTE POSITIONED ON RIGHT */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
          className="hidden lg:block absolute right-10 top-40 -translate-y-1/2 w-[420px] z-50 pointer-events-auto"
        >
          <div className="bg-white p-10 shadow-[0_20px_50px_rgba(0,0,0,0.15)] rounded-none border border-gray-100 relative">
            <h3 className="text-[#333] text-2xl font-bold leading-tight mb-8">
             Let’s design your next escape, together.
            </h3>

            <form className="space-y-5">
              {/* Full Name */}
              <div className="relative">
                <input
                  type="text"
                  placeholder="Full name"
                  className="w-full bg-white border border-gray-300 px-5 py-1 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-gray-500 rounded-none transition-all text-base"
                />
              </div>

              {/* Destinations */}
              <div className="relative">
                <select className="w-full bg-white border border-gray-300 px-5 py-1 text-gray-900 focus:outline-none focus:border-gray-500 rounded-none transition-all appearance-none text-base cursor-pointer">
                  <option value="">Destinations</option>
                  <option value="bali">Bali</option>
                  <option value="maldives">Maldives</option>
                  <option value="kashmir">Kashmir</option>
                  <option value="international">International</option>
                  <option value="india">India</option>
                </select>
                <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none">
                  <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>

              {/* Region & Mobile Number */}
              <div className="flex gap-3">
                <div className="relative w-1/3">
                  <span className="absolute -top-2.5 left-3 bg-white px-2 text-[10px] font-bold text-gray-500 uppercase z-10">Region</span>
                  <select className="w-full bg-white border border-gray-300 px-4 py-2 text-gray-900 focus:outline-none focus:border-gray-500 rounded-none appearance-none text-base">
                    <option>IN +91</option>
                    <option>US +1</option>
                    <option>UK +44</option>
                  </select>
                  <div className="absolute right-3 top-5 -translate-y-1/2 pointer-events-none">
                    <svg className="w-3 h-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
                <div className="relative flex-1">
                  <input
                    type="tel"
                    placeholder="Mobile number"
                    className="w-full bg-white border border-gray-300 px-5 py-2 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-gray-500 rounded-none transition-all text-base"
                  />
                </div>
              </div>

              {/* Email Address */}
              <div className="relative">
                <input
                  type="email"
                  placeholder="Email address"
                  className="w-full bg-white border border-gray-300 px-5 py-1 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-gray-500 rounded-none transition-all text-base"
                />
              </div>

              {/* Disclaimer */}
              <p className="text-[12px] text-gray-500 leading-relaxed pt-2">
                Thank you for your details. Our travel experts will be in touch shortly to help you plan your journey.
              </p>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-[#8c6c3c] hover:bg-[#7a5e34] text-white font-bold py-1 text-lg shadow-xl shadow-amber-900/10 transition-all rounded-none mt-2 active:scale-[0.98]"
              >
                Submit
              </button>
            </form>
          </div>
        </motion.div>
      </div>

      {/* Mobile Form Section - Improved Design */}
      <div className="lg:hidden w-full bg-white px-6 py-12 relative z-30">
        <div className="max-w-md mx-auto">
          <h3 className="text-2xl font-bold mb-2 text-gray-900">Let’s design your next escape</h3>
          <p className="text-gray-500 text-sm mb-8 italic">Our travel experts will help you plan your perfect journey.</p>
          
          <form className="space-y-4">
            <div className="space-y-1">
              <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 ml-1">Full Name</label>
              <input
                type="text"
                placeholder="Ex. John Doe"
                className="w-full bg-gray-50 border border-gray-200 px-4 py-3 text-gray-900 placeholder-gray-400 rounded-lg focus:outline-none focus:border-[#8c6c3c] transition-all"
              />
            </div>
            
            <div className="grid grid-cols-3 gap-3">
              <div className="col-span-1 space-y-1">
                <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 ml-1">Code</label>
                <select className="w-full bg-gray-50 border border-gray-200 px-3 py-3 text-gray-900 rounded-lg focus:outline-none appearance-none">
                  <option>+91</option>
                  <option>+1</option>
                  <option>+44</option>
                </select>
              </div>
              <div className="col-span-2 space-y-1">
                <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 ml-1">Mobile Number</label>
                <input
                  type="tel"
                  placeholder="Enter number"
                  className="w-full bg-gray-50 border border-gray-200 px-4 py-3 text-gray-900 placeholder-gray-400 rounded-lg focus:outline-none focus:border-[#8c6c3c] transition-all"
                />
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 ml-1">Email Address</label>
              <input
                type="email"
                placeholder="Ex. john@example.com"
                className="w-full bg-gray-50 border border-gray-200 px-4 py-3 text-gray-900 placeholder-gray-400 rounded-lg focus:outline-none focus:border-[#8c6c3c] transition-all"
              />
            </div>

            <button className="w-full bg-[#8c6c3c] hover:bg-[#7a5e34] text-white font-bold py-4 rounded-lg uppercase tracking-widest text-[12px] shadow-xl shadow-amber-900/10 transition-all mt-4 active:scale-95">
              Submit Details
            </button>
            <p className="text-[10px] text-gray-400 text-center mt-4">
              *Our experts will contact you within 24 hours.
            </p>
          </form>
        </div>
      </div>

      {/* Slider Indicators */}
      <div className="absolute bottom-12 right-10 z-30 flex items-center gap-4">
        {SLIDES.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className="group relative py-4 focus:outline-none"
          >
            <div className={`h-[2px] transition-all duration-500 ${currentSlide === index ? 'w-12 bg-amber-500' : 'w-6 bg-white/30 group-hover:bg-white/60'}`} />
          </button>
        ))}
      </div>
    </div>
  );
}

export default Hero;
