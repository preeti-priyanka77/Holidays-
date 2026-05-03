import { motion } from 'framer-motion';
import { Utensils, Bed, Car, Ship, Map, Activity } from 'lucide-react';

const CURATED_SERVICES = [
  {
    title: "Curated Dining",
    description: "Indulge in thoughtfully curated dining experiences",
    image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=800&q=80",
    icon: Utensils
  },
  {
    title: "Comfortable Stays",
    description: "Relax in thoughtfully selected, comfortable stays",
    image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80",
    icon: Bed
  },
  {
    title: "Seamless Transfers",
    description: "Seamless transfers, end to end",
    image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=800&q=80",
    icon: Car
  },
  {
    title: "Scenic Cruises",
    description: "Experience scenic cruise moments",
    image: "https://images.unsplash.com/photo-1506461883276-594a12b11cf3?auto=format&fit=crop&w=800&q=80",
    icon: Ship
  },
  {
    title: "Immersive Sightseeing",
    description: "Explore immersive sightseeing experiences",
    image: "https://images.unsplash.com/photo-1527631746610-bca00a040d60?auto=format&fit=crop&w=800&q=80",
    icon: Map
  },
  {
    title: "Curated Activities",
    description: "Enjoy carefully curated activities",
    image: "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=800&q=80",
    icon: Activity
  }
];

function Brands() {
  return (
    <section className="py-10 md:py-32 bg-[#fafaf9]">
      <div className="max-w-7xl mx-auto px-4 md:px-10">
        <motion.div
          className="mb-6 md:mb-24 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-[10px] md:text-[11px] font-bold tracking-[0.5em] text-[#b08d57] uppercase mb-4">
            OUR CURATED EXPERIENCES
          </p>
          <h2 className="text-2xl md:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tighter max-w-3xl mx-auto text-balance">
            Every detail, <span className="text-[#b08d57] italic font-medium">thoughtfully</span> designed for you
          </h2>
        </motion.div>

        <div className="flex md:grid md:grid-cols-3 overflow-x-auto md:overflow-x-visible no-scrollbar gap-4 md:gap-6 scroll-smooth px-4 md:px-0">
          {CURATED_SERVICES.map((service, index) => (
            <motion.div
              key={index}
              className="group relative cursor-pointer overflow-hidden aspect-[4/5] sm:aspect-[3/4] flex-shrink-0 w-[75%] max-w-[280px] md:w-full md:max-w-none"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <div className="absolute inset-0 z-0">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                {/* Initial Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80" />
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-[#b08d57]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              <div className="absolute inset-0 z-10 flex flex-col justify-end p-6 sm:p-10">
                <motion.div 
                  className="mb-4 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 text-white group-hover:bg-[#b08d57] group-hover:border-[#b08d57] transition-all duration-300"
                >
                  <service.icon size={22} strokeWidth={1.5} />
                </motion.div>
                
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight mb-2">
                  {service.title}
                </h3>
                <p className="text-white/70 text-sm leading-relaxed max-w-[240px] transform transition-all duration-500 group-hover:text-white">
                  {service.description}
                </p>
                
                {/* Decorative Line */}
                <div className="w-0 h-[1px] bg-white mt-6 group-hover:w-full transition-all duration-700 ease-out" />
              </div>

              {/* Shadow Effect */}
              <div className="absolute inset-0 rounded-none shadow-[inset_0_0_100px_rgba(0,0,0,0.2)] group-hover:shadow-[0_20px_40px_rgba(176,141,87,0.3)] transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Brands;
