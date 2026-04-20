import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import { ChevronRight, CheckCircle2, Loader2 } from 'lucide-react';

const SLIDES = [
  {
    id: 1,
    title: "Bali – Sunset over serene shorelines",
    subtitle: "Explore Bali",
    price: "4N/5D starting at ₹79,999",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1920&q=80"
  },
  {
    id: 2,
    title: "Maldives – Luxury over-water villas",
    subtitle: "Explore Maldives",
    price: "3N/4D starting at ₹74,999",
    image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=1920&q=80"
  },
  {
    id: 3,
    title: "Kashmir – The Heaven on Earth",
    subtitle: "Explore Kashmir",
    price: "4N/5D starting at ₹24,999",
    image: "https://images.unsplash.com/photo-1566127444979-b3d2b654e3d7?auto=format&fit=crop&w=1920&q=80"
  }
];

function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const [formData, setFormData] = useState({
    name: '',
    destination: '',
    phone: '',
    email: '',
    region: 'IN +91'
  });

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = "https://images.unsplash.com/photo-1506929113670-b4215a31804c?auto=format&fit=crop&w=1920&q=80";
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';
      const response = await fetch(`${API_URL}/api/send-email`, {
        method: 'POST',

        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          destination: formData.destination,
          phone: `${formData.region} ${formData.phone}`,
          email: formData.email,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to send enquiry');
      }

      setIsSuccess(true);
      setFormData({ name: '', destination: '', phone: '', email: '', region: 'IN +91' });
      setErrorMessage(null);
      setTimeout(() => setIsSuccess(false), 5000);
    } catch (error) {
      console.error('Submission Error:', error);
      setErrorMessage('Unable to send enquiry. Please try again or contact us directly.');
      setTimeout(() => setErrorMessage(null), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div id="enquiry-form" className="relative w-full overflow-hidden bg-white">
      {/* Hero Content Section */}
      <div className="relative h-[80vh] md:h-screen w-full overflow-hidden">
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
                  <button
                    onClick={() => {
                      const element = window.innerWidth >= 1024
                        ? document.getElementById('form-section')
                        : document.getElementById('form-section-mobile');

                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                        const nameInputs = document.getElementsByName('name');
                        const targetInput = window.innerWidth >= 1024 ? nameInputs[0] : nameInputs[1];
                        if (targetInput) (targetInput as HTMLInputElement).focus();
                      }
                    }}
                    className="group flex items-center gap-3 bg-white text-black px-8 py-4 rounded-none font-bold uppercase text-[12px] tracking-[0.2em] transition-all hover:bg-amber-500 hover:text-white"
                  >
                    Explore Now
                    <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Floating Lead Form Overlay - DESKTOP ONLY */}
          <motion.div
            id="form-section"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
            className="hidden lg:block absolute right-12 top-1/5 -translate-y-1/2 w-[400px] z-50"
          >
            <div className="bg-white p-10 shadow-[0_20px_50px_rgba(0,0,0,0.15)] rounded-none border border-gray-100 relative">
              {isSuccess && (
                <div className="absolute inset-0 bg-white z-[60] flex flex-col items-center justify-center p-10 text-center">
                  <CheckCircle2 size={60} className="text-emerald-500 mb-4" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Enquiry Sent!</h3>
                  <p className="text-gray-500">Our experts will contact you within 24 hours.</p>
                </div>
              )}

              <h3 className="text-[#333] text-2xl font-bold leading-tight mb-8">
                Let’s design your next escape, together.
              </h3>

              {errorMessage && (
                <div className="mb-6 p-4 bg-red-50 border-l-4 border-red-500 text-red-700 text-sm">
                  {errorMessage}
                </div>
              )}


              <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
                <div className="relative">
                  <input
                    required
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Full name"
                    className="w-full bg-white border border-gray-300 px-5 py-2 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-amber-600 rounded-none transition-all text-base"
                  />
                </div>

                <div className="relative">
                  <select
                    required
                    name="destination"
                    value={formData.destination}
                    onChange={handleInputChange}
                    className="w-full bg-white border border-gray-300 px-5 py-2 text-gray-900 focus:outline-none focus:border-amber-600 rounded-none transition-all appearance-none text-base cursor-pointer"
                  >
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

                <div className="flex gap-3">
                  <div className="relative w-1/3">
                    <select
                      name="region"
                      value={formData.region}
                      onChange={handleInputChange}
                      className="w-full bg-white border border-gray-300 px-4 py-2 text-gray-900 focus:outline-none focus:border-amber-600 rounded-none appearance-none text-base"
                    >
                      <option>+91</option>
                      <option>+1</option>
                      <option>+44</option>
                      <option>+61</option>
                      <option>+60</option>
                      <option>+94</option>
                      <option>+49</option>
                      <option>+33</option>
                      <option>+65</option>
                      <option>+880</option>
                      <option>+966</option>
                      <option>+971</option>
                      <option>+965</option>
                      <option>+974</option>
                      <option>+968</option>
                      <option>+973</option>
                      <option>+7</option>
                    </select>
                  </div>
                  <div className="relative flex-1">
                    <input
                      required
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="Mobile number"
                      className="w-full bg-white border border-gray-300 px-5 py-2 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-amber-600 rounded-none transition-all text-base"
                    />
                  </div>
                </div>

                <div className="relative">
                  <input
                    required
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Email address"
                    className="w-full bg-white border border-gray-300 px-5 py-2 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-amber-600 rounded-none transition-all text-base"
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#8c6c3c] hover:bg-[#7a5e34] text-white font-bold py-3 text-lg shadow-xl shadow-amber-900/10 transition-all rounded-none mt-2 active:scale-[0.98] flex items-center justify-center gap-2"
                >
                  {isSubmitting ? <Loader2 className="animate-spin" size={20} /> : 'Submit'}
                </button>
                <p className="text-[11px] text-gray-500 text-center leading-relaxed pt-3">
                  Our travel experts will be in touch shortly to help you plan your journey.
                </p>
              </form>
            </div>
          </motion.div>
        </div>

        {/* Slider Indicators */}
        <div className="absolute bottom-12 left-10 md:left-auto md:right-10 z-30 flex items-center gap-4">
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

      {/* Mobile Form Section - Restored and Repositioned */}
      <div id="form-section-mobile" className="lg:hidden w-full bg-[#f8f5f0] px-6 py-16">
        <div className="max-w-md mx-auto">
          {isSuccess ? (
            <div className="flex flex-col items-center justify-center py-10 text-center">
              <CheckCircle2 size={60} className="text-emerald-500 mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Enquiry Sent!</h3>
              <p className="text-gray-500">Our experts will contact you within 24 hours.</p>
            </div>
          ) : (
            <>
              <h3 className="hidden md:block text-2xl font-bold mb-2 text-gray-900">Let’s design your next escape</h3>
              <p className="hidden md:block text-gray-500 text-sm mb-8 italic">Our travel experts will help you plan your perfect journey.</p>

              <form onSubmit={handleSubmit} className="space-y-5 bg-white p-8 shadow-xl border border-gray-100">
                <div className="space-y-1">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 ml-1">Full Name</label>
                  <input
                    required
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Ex. John Doe"
                    className="w-full bg-gray-50 border border-gray-200 px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-amber-600 transition-all"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 ml-1">Destination</label>
                  <select
                    required
                    name="destination"
                    value={formData.destination}
                    onChange={handleInputChange}
                    className="w-full bg-gray-50 border border-gray-200 px-4 py-3 text-gray-900 focus:outline-none focus:border-amber-600 transition-all appearance-none"
                  >

                    
                    <option value="">Choose Destination</option>
                    <option value="international">International</option>
                    <option value="india">India</option>
                    <option value="bali">Pilgrimage</option>
                    <option value="maldives">Honeymoon</option>
                    <option value="kashmir">Adventure</option>
                    <option value="international">Backpacking</option>
                    <option value="india">Beach Vacation</option>
                    <option value="india">Heritage</option>
                    <option value="india">Corporate</option>
                
                  </select>
                </div>

                <div className="grid grid-cols-3 gap-3">
                  <div className="col-span-1 space-y-1">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 ml-1">Code</label>
                    <select
                      name="region"
                      value={formData.region}
                      onChange={handleInputChange}
                      className="w-full bg-gray-50 border border-gray-200 px-3 py-3 text-gray-900 focus:outline-none appearance-none"
                    >
                      <option>+91</option>
                      <option>+1</option>
                      <option>+44</option>
                      <option>+61</option>
                      <option>+60</option>
                      <option>+94</option>
                      <option>+49</option>
                      <option>+33</option>
                      <option>+65</option>
                      <option>+880</option>
                      <option>+966</option>
                      <option>+971</option>
                      <option>+965</option>
                      <option>+974</option>
                      <option>+968</option>
                      <option>+973</option>
                      <option>+7</option>
                    </select>
                  </div>
                  <div className="col-span-2 space-y-1">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 ml-1">Mobile</label>
                    <input
                      required
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="Enter number"
                      className="w-full bg-gray-50 border border-gray-200 px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-amber-600 transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 ml-1">Email</label>
                  <input
                    required
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Ex. john@example.com"
                    className="w-full bg-gray-50 border border-gray-200 px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-amber-600 transition-all"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#8c6c3c] hover:bg-[#7a5e34] text-white font-bold py-4 uppercase tracking-widest text-[12px] shadow-xl shadow-amber-900/10 transition-all mt-4 active:scale-95 flex items-center justify-center gap-2"
                >
                  {isSubmitting ? <Loader2 className="animate-spin" size={20} /> : 'Submit Details'}
                </button>
                <p className="text-[11px] text-gray-500 text-center leading-relaxed pt-3">
                  Our travel experts will be in touch shortly to help you plan your journey.
                </p>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Hero;

