import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const TESTIMONIALS = [
  {
    rating: "5.0",
    text: "My trip to Thailand with CheckIn Vacations was incredibly smooth. The cab services were always on time and the drivers were very courteous. Their constant assistance throughout the journey made the entire experience completely hassle-free.",
    name: "Mr. Amit Tiwari"
  },
  {
    rating: "5.0",
    text: "Kerala was a beautiful experience, made even better by CheckIn Vacations. The hotel stay was comfortable with excellent service and views. The team handled every request with care and ensured a pleasant, memorable holiday.",
    name: "Ms. Diksha Maheshwari"
  },
  {
    rating: "4.5",
    text: "The sightseeing in Dubai was perfectly planned and covered at a comfortable pace. Every attraction was well-coordinated, and the CheckIn Vacations team stayed connected throughout, making the trip fantastic and stress-free.",
    name: "Mr. Jitendra Singh"
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
      className="relative py-24 px-6 md:px-10 bg-cover bg-center overflow-hidden"
      style={{
        backgroundImage: 'url(https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=1920&q=80)'
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
          className="mb-14"
        >
          <p className="text-white/70 text-[11px] font-bold uppercase tracking-[0.4em] mb-3">
            TESTIMONIALS
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            Creating Happy Holidays for 10+ years
          </h2>
          <p className="text-white/80 text-lg font-medium">Hear from our past travellers</p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12"
        >
          {TESTIMONIALS.map((t, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -10 }}
              className="bg-white p-8 shadow-2xl rounded-none flex flex-col justify-between h-full group transition-all duration-300"
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
