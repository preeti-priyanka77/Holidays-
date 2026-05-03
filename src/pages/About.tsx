import { motion, useScroll, useTransform } from 'framer-motion';
import { Compass, Mountain, Palmtree, Building2, Gem, Map, Shield, Users, Star } from 'lucide-react';
import { useRef } from 'react';

const ease = [0.16, 1, 0.3, 1];

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, ease }
};

const EXPERIENCE_ITEMS = [
  { icon: Mountain, title: "Misty Mountains", desc: "Serene mountain escapes curated for peace." },
  { icon: Palmtree, title: "Serene Landscapes", desc: "Handpicked locations with breathtaking views." },
  { icon: Building2, title: "Vibrant Cities", desc: "Urban exploration with a touch of elegance." },
  { icon: Gem, title: "Hidden Gems", desc: "Off-the-beaten-path immersive experiences." },
  { icon: Compass, title: "Personalized Pace", desc: "Your journey, your rhythm, your story." },
  { icon: Map, title: "Curated Discovery", desc: "Thoughtfully designed moments across the globe." }
];

const STATS = [
  { value: "199+", label: "Exquisite Destinations" },
  { value: "100+", label: "Happy Travelers" },
  { value: "149+", label: "Expert Guides" }
];

function About() {
  const heroRef = useRef(null);
  const stripRef = useRef(null);

  const { scrollYProgress: heroScroll } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const heroImageY = useTransform(heroScroll, [0, 1], ["0%", "20%"]);

  const { scrollYProgress: stripScroll } = useScroll({
    target: stripRef,
    offset: ["start end", "end start"]
  });

  const stripImageY = useTransform(stripScroll, [0, 1], ["-10%", "10%"]);

  return (
    <div className="min-h-screen bg-white selection:bg-[#b08d57] selection:text-white">

      {/* 1. HERO SECTION (Split Layout) */}
      <section ref={heroRef} className="relative h-auto lg:h-[80vh] flex flex-col lg:flex-row overflow-hidden pt-16 lg:pt-0">
        <div className="w-full lg:w-1/2 flex items-center justify-center px-4 md:px-6 lg:px-20 bg-[#fdfcfb] z-10 py-8 lg:py-0">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease }}
            className="max-w-xl"
          >
            <span className="text-[#b08d57] font-bold tracking-[0.4em] uppercase text-xs mb-6 block">Our Legacy</span>
            <h1 className="text-3xl md:text-7xl font-serif text-neutral-900 leading-[1.1] mb-6 md:mb-8">
              About <span className="italic text-[#b08d57]">Us</span>
            </h1>
            <p className="text-lg md:text-xl text-neutral-600 leading-relaxed font-light">
              Founded in September 2025, <span className="text-neutral-900 font-medium">Eleqt Holidays & Leisure</span> was born with a clear vision: to redefine how modern travellers experience the world. More than just holidays, Eleqt is an expression of elegance, intention, and thoughtfully curated leisure.
            </p>
          </motion.div>
        </div>
        <div className="w-full lg:w-1/2 relative overflow-hidden h-[40vh] lg:h-auto">
          <motion.div style={{ y: heroImageY }} className="absolute inset-0 scale-110">
            <img
              src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&q=80&w=1200"
              alt="Luxury Travel"
              className="w-full h-full object-cover"
            />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#fdfcfb] via-transparent to-transparent lg:block hidden" />
          <div className="absolute inset-0 bg-neutral-900/10" />
        </div>
      </section>

      {/* 2. PHILOSOPHY (Story Flow - Right Image) */}
      <section className="py-8 md:py-24 px-4 md:px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-16 lg:gap-24">
          <div className="w-full md:w-1/2 space-y-8 order-2 md:order-1">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease }}
              className="max-w-xl"
            >
              <span className="text-[#b08d57] font-bold tracking-widest uppercase text-xs mb-4 block">Philosophy</span>
              <h2 className="text-3xl md:text-5xl font-serif text-neutral-900 leading-tight mb-6">
                Built on Intention.
              </h2>
              <p className="text-lg text-neutral-600 leading-relaxed">
                Built on the same philosophy that defines Eleqt Mobility, we believe travel should be seamless, refined, and deeply personal. Every journey is designed to blend comfort, authenticity, and immersive experiences into something truly meaningful.
              </p>
              <div className="h-px w-24 bg-[#b08d57]/30 mt-8" />
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease }}
            className="w-full md:w-1/2 order-1 md:order-2"
          >
            <div className="relative aspect-[16/10] rounded-2xl overflow-hidden shadow-2xl shadow-neutral-200">
              <img
                src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80&w=1000"
                alt="Refined Travel"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. EXPERIENCE GRID (Highlight Section) */}
      <section className="py-8 md:py-24 px-4 md:px-6 bg-[#f9f7f4]">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-10 md:mb-16">
            <span className="text-[#b08d57] font-bold tracking-widest uppercase text-xs mb-4 block">The Experience</span>
            <h2 className="text-3xl md:text-5xl font-serif text-neutral-900">Curated Moments</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {EXPERIENCE_ITEMS.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1, ease }}
                whileHover={{ y: -10 }}
                className="bg-white p-6 md:p-10 group transition-all duration-500 hover:shadow-xl hover:shadow-neutral-200/50"
              >
                <div className="w-14 h-14 bg-neutral-50 rounded-full flex items-center justify-center mb-6 md:mb-8 group-hover:bg-[#b08d57] transition-colors duration-500">
                  <item.icon className="w-6 h-6 text-[#b08d57] group-hover:text-white transition-colors duration-500" />
                </div>
                <h3 className="text-xl font-bold text-neutral-900 mb-4">{item.title}</h3>
                <p className="text-neutral-500 leading-relaxed font-light">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. IMMERSIVE STRIP (Parallax) */}
      <section ref={stripRef} className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <motion.div style={{ y: stripImageY }} className="absolute inset-0 scale-125">
          <img
            src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=1920"
            alt="Immersive Ocean"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-neutral-900/60" />
        </motion.div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <motion.p
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease }}
            className="text-3xl md:text-5xl text-white font-serif leading-tight italic"
          >
            "At Eleqt Holidays & Leisure, we don’t just plan trips - we design moments that stay with you long after the journey ends."
          </motion.p>
        </div>
      </section>

      {/* 5. APPROACH (Story Flow - Left Image) */}
      <section className="py-8 md:py-24 px-4 md:px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-16 lg:gap-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease }}
            className="w-full md:w-1/2"
          >
            <div className="relative aspect-[16/10] rounded-2xl overflow-hidden shadow-2xl shadow-neutral-200">
              <img
                src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&q=80&w=1000"
                alt="Precision Approach"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
          <div className="w-full md:w-1/2 space-y-8">
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease }}
              className="max-w-xl"
            >
              <span className="text-[#b08d57] font-bold tracking-widest uppercase text-xs mb-4 block">Our Approach</span>
              <h2 className="text-3xl md:text-5xl font-serif text-neutral-900 leading-tight mb-6">
                Art of Precision.
              </h2>
              <p className="text-lg text-neutral-600 leading-relaxed">
                Our approach brings together handpicked stays, curated dining, seamless transfers, and immersive local experiences; all delivered with precision, care, and attention to detail. Every journey is crafted to feel effortless, allowing you to focus on the experience, not the logistics.
              </p>
              <div className="h-px w-24 bg-[#b08d57]/30 mt-8" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 6. CLOSING STORY */}
      <section className="py-8 md:py-24 px-4 md:px-6 bg-neutral-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#b08d57]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <motion.div {...fadeInUp}>
              <p className="text-xl md:text-2xl text-neutral-700 font-light leading-relaxed">
                Whether it’s a romantic escape, a soulful retreat, an international getaway, or an adventure-filled holiday, Eleqt transforms travel into a refined and memorable experience - where every detail is considered, and every journey feels truly yours.
              </p>
            </motion.div>
          </div>

          {/* 5.5 STATISTICS SECTION */}
          <div className="max-w-5xl mx-auto mb-16">
            <div className="flex md:grid md:grid-cols-3 gap-4 md:gap-8 overflow-x-auto md:overflow-visible pb-8 md:pb-0 scrollbar-hide [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden px-4 md:px-20">
              {STATS.map((stat, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: idx * 0.1, ease }}
                  whileHover={{ scale: 1.05 }}
                  className="flex-shrink-0 w-[70%] max-w-[240px] md:w-full bg-white rounded-lg shadow-sm border border-neutral-100 p-6 md:p-8 text-center transition-transform duration-300"
                >
                  <div className="text-3xl md:text-4xl font-bold text-[#b08d57]">{stat.value}</div>
                  <p className="text-sm text-gray-600 mt-2 uppercase tracking-widest font-medium">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.3, ease }}
              className="pt-12 border-t border-neutral-200 flex flex-col items-center"
            >
              <p className="text-2xl md:text-3xl text-[#b08d57] font-serif italic mb-8">
                Because every journey has a story - we help you tell it beautifully.
              </p>
              <div className="w-16 h-1 bg-[#b08d57]/20 rounded-full" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 7. CTA STRIP (Subtle) */}
      <section className="pb-16 px-6">
        <div className="max-w-7xl mx-auto h-px bg-neutral-100" />
      </section>
    </div>
  );
}

export default About;
