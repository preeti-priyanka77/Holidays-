import { motion } from 'framer-motion';
import { Globe, Briefcase, Phone, MapPin, Award } from 'lucide-react';

const features = [
  {
    icon: Globe,
    title: '1 lakh+ guests served',
  },
  {
    icon: Briefcase,
    title: '24 x 7 concierge services',
  },
  {
    icon: Phone,
    title: 'Handpicked Premium Stays',
  },
  {
    icon: MapPin,
    title: 'Expert designed itinerary',
  },
  {
    icon: Award,
    title: 'Best Prices guarantee',
  },
];

function Features() {
  return (
    <section className="py-24 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-12 lg:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center text-center group"
            >
              <div className="w-20 h-20 flex items-center justify-center mb-6 bg-white rounded-none shadow-lg border border-gray-100 transition-all duration-300 group-hover:bg-amber-500 group-hover:text-white group-hover:-translate-y-2">
                <feature.icon className="w-10 h-10" strokeWidth={1.5} />
              </div>
              <h3 className="text-sm font-bold text-gray-900 uppercase tracking-widest leading-relaxed">
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

