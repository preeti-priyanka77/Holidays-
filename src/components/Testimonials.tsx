import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const TESTIMONIALS = [
  {
    rating: "5.0",
    text: "Our CharDham Yatra with Eleqt was an unforgettable spiritual journey made effortless by their excellent service. From well-organized transportation to punctual and polite drivers, every aspect was handled with great care. Their continuous support throughout the trip ensured a smooth and worry-free experience, allowing us to focus entirely on the journey. It's truly a seamless and enriching pilgrimage experience.",
    name: "Mrs. Dipti Mayee Tripathy"
  },
  {
    rating: "5.0",
    text: "I recently completed a spiritually enriching journey covering Nilamadhab Kantilo, Vaishno Devi Nayagarh, and Ayodhya Ram Mandir (Fategarh), and I must appreciate the outstanding service provided by Eleqt.The entire trip was seamless; right from punctual pickup to safe and comfortable travel across destinations. The driver was professional, courteous, and well-aware of temple routes, ensuring smooth darshan without unnecessary delays.ed for anyone planning pilgrimage tours or long-distance spiritual travel in Odisha and beyond.",
    name: "Dr. Satya Sundar Brahmachari (Astrologer & Gen AI Founder)"
  },
  {
    rating: "4.5",
    text: "Our recent trip to Hong Kong & China with Eleqt was handled exceptionally well. What makes it even more impressive is that the entire trip was arranged seamlessly within just 48 hours. From timely cab arrangements to the on-ground support, every detail was managed with precision and care. What truly stood out was the constant support and coordination throughout the journey, ensuring everything remained smooth and stress-free. Despite a tight schedule, the experience felt seamless and well-organized, allowing us to focus entirely on our work commitments. Eleqt’s attention to detail and reliability made a significant difference. Overall, it was a comfortable, efficient, and hassle-free travel experience. We would definitely recommend Eleqt to anyone looking for well-managed and dependable travel services.",
    name: "Mr. Bibekananda Jena (Entrepreneur)"
  }
];

function Testimonials() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as const }
    }
  };

  return (
    <section
      className="relative py-10 md:py-24 px-4 md:px-10 bg-cover bg-center overflow-hidden"
      style={{
        backgroundImage: 'url(https://images.unsplash.com/photo-1539635278303-d4002c07eae3?auto=format&fit=crop&w=1920&q=80)'
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30 z-0" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-6 md:mb-14"
        >
          <p className="text-white/70 text-[11px] font-bold uppercase tracking-[0.4em] mb-3">
            CLIENT EXPERIENCES
          </p>
          <h2 className="text-2xl md:text-5xl font-bold text-white mb-2 md:mb-4 tracking-tight">
            Real journeys. Real stories.
          </h2>
          <p className="text-white/80 text-lg font-medium"> Discover their journeys with Eleqt</p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex md:grid overflow-x-auto md:overflow-x-visible no-scrollbar gap-4 md:gap-8 mt-6 md:mt-12 scroll-smooth px-4 md:px-0"
        >
          {TESTIMONIALS.map((t, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -10 }}
              className="bg-white p-6 md:p-8 shadow-2xl rounded-none flex flex-col justify-between group transition-all duration-300 flex-shrink-0 w-[85%] md:w-full min-h-[480px] md:min-h-0 h-full"
            >
              <div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  className="mb-6"
                >
                  <Quote className="w-12 h-12 text-gray-200 fill-gray-100" />
                </motion.div>

                {/* Rating Stars */}
                <div className="flex items-center gap-2 mb-6">
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className={`w-4 h-4 ${i < Math.floor(parseFloat(t.rating)) ? 'text-emerald-500 fill-emerald-500' : 'text-gray-200'}`}
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-2xl font-bold text-gray-900 tracking-tight">{t.rating}</span>
                </div>

                <p className="text-gray-600 mb-10 text-base leading-relaxed font-medium">
                  {t.text}
                </p>
              </div>

              <div className="mt-auto">
                <p className="font-bold text-gray-900 text-lg tracking-tight">
                  {t.name}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Testimonials;
