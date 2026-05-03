import { motion } from 'framer-motion';

interface PackageCardProps {
  title: string;
  subtitle?: string;
  nights: number;
  days: number;
  priceFrom: string | number;
  imageUrl: string;
}

function PackageCard({ title, subtitle, nights, days, priceFrom, imageUrl }: PackageCardProps) {
  const scrollToEnquiry = () => {
    const element = document.getElementById('enquiry-form');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div 
      onClick={scrollToEnquiry} 
      className="block h-full w-full cursor-pointer transition-transform duration-300 active:scale-[0.98]"
    >
      <motion.div
        className="relative h-[400px] md:h-[580px] w-full overflow-hidden group bg-neutral-900 rounded-none shadow-2xl transition-all duration-500"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        whileHover={{ y: -10 }}
        viewport={{ once: true }}
      >
        {/* Background Image */}
        <motion.img
          src={imageUrl || "https://images.unsplash.com/photo-1506929113670-b4215a31804c?auto=format&fit=crop&w=600&q=80"}
          alt={title}
          onError={(e) => {
            (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1506929113670-b4215a31804c?auto=format&fit=crop&w=600&q=80";
          }}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
        />

        {/* Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent z-10 transition-opacity duration-500 group-hover:via-black/40" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-transparent z-10" />

        {/* Content Container */}
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-between py-8 px-6 md:py-12 md:px-8 text-center">

          {/* Top Label */}
          <div className="space-y-4 w-full">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="px-4 py-1.5 bg-white/10 backdrop-blur-md rounded-full inline-block border border-white/20"
            >
              <p className="text-[10px] font-bold tracking-[0.4em] text-white/90 uppercase">
                Curated Experience
              </p>
            </motion.div>

            <div className="flex flex-col items-center">
              <motion.h3
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-2xl sm:text-4xl md:text-5xl font-bold text-white tracking-tighter mb-2 transition-all duration-500 group-hover:scale-105"
              >
                {title}
              </motion.h3>
              {subtitle && (
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  className="text-white/80 text-sm md:text-lg italic mb-2"
                >
                  {subtitle}
                </motion.p>
              )}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="flex items-center gap-2 text-white/70 text-xs sm:text-sm font-medium tracking-wide"
              >
                <span>{nights}N / {days}D</span>
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                <span>Luxury Stay</span>
              </motion.div>
            </div>
          </div>

          {/* Bottom Info & CTA */}
          <div className="flex flex-col items-center w-full translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
            <div className="mb-4">
              <p className="text-white/50 text-[10px] font-bold uppercase tracking-[0.2em] mb-1">Pricing Starts At</p>
              <p className="text-2xl sm:text-4xl font-bold text-white tracking-tight">
                {typeof priceFrom === 'number' ? `₹${priceFrom.toLocaleString()}` : priceFrom}
              </p>
            </div>

            {/* Hover CTA Button */}
            <motion.div
              className="opacity-0 group-hover:opacity-100 transition-all duration-500 scale-90 group-hover:scale-100"
            >
              <div className="px-10 py-4 bg-amber-500 text-white text-[12px] font-bold uppercase tracking-[0.2em] rounded-none shadow-2xl hover:bg-amber-600 transition-colors">
                Enquire Now
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default PackageCard;
