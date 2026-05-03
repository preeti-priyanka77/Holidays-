import { motion } from 'framer-motion';
import { Globe, Briefcase, Phone, MapPin, Award } from 'lucide-react';

const features = [
  {
    icon: Globe,
    title: '50+ journeys crafted ',
  },
  {
    icon: Briefcase,
    title: 'Seamless 24/7 assistance ',
  },
  {
    icon: Phone,
    title: 'Premium stays, handpicked for you ',
  },
  {
    icon: MapPin,
    title: 'Expertly curated itineraries',
  },
  {
    icon: Award,
    title: 'Exceptional Values',
  },
];

function Features() {
  return (
    <section className="py-10 md:py-24 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-0 md:px-10">
        <div className="flex md:grid md:grid-cols-3 lg:grid-cols-5 overflow-x-auto md:overflow-x-visible no-scrollbar gap-0.5 md:gap-12 lg:gap-8 pb-4 md:pb-0 scroll-smooth px-4 md:px-0">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex-none w-[65%] max-w-[280px] md:w-auto md:max-w-none flex flex-col items-center text-center group">
              <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center mb-6 bg-white rounded-none shadow-lg border border-gray-100 transition-all duration-300 group-hover:bg-amber-500 group-hover:text-white group-hover:-translate-y-2">
                <feature.icon className="w-8 h-8 md:w-10 md:h-10" strokeWidth={1.5} />
              </div>
              <h3 className="text-[10px] md:text-sm font-bold text-gray-900 uppercase tracking-widest leading-relaxed">
                {feature.title}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
