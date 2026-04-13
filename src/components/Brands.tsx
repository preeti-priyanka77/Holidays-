import { motion } from 'framer-motion';
import SundayImg from '../assets/sunday.png';
import ClubhouseImg from '../assets/clubhouse.png';
import PaletteImg from '../assets/palette.png';
import BelvillaImg from '../assets/belvilla.png';
import DancenterImg from '../assets/dancenter.png';

const BRANDS = [
  {
    name: "Sunday hotels",
    subtitle: "Contemporary Lifestyle Hotels",
    image: SundayImg
  },
  {
    name: "Clubhouse",
    subtitle: "Lifestyle Hotels with Social Spaces",
    image: ClubhouseImg
  },
  {
    name: "Palette",
    subtitle: "",
    image: PaletteImg
  },
  {
    name: "Belvilla",
    subtitle: "",
    image: BelvillaImg
  },
  {
    name: "DanCenter",
    subtitle: "",
    image: DancenterImg
  }
];

function Brands() {
  return (
    <section className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <motion.div
          className="mb-16 md:mb-24"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-[10px] md:text-[11px] font-bold tracking-[0.5em] text-amber-600 uppercase mb-4">
            OUR CURATED BRANDS
          </p>
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 tracking-tighter max-w-2xl text-balance">
            Designed for Every <span className="text-gray-400 italic font-medium">Extraordinary</span> Stay
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-x-12 md:gap-y-20">
          {BRANDS.map((brand, index) => (
            <motion.div
              key={index}
              className="group cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="w-full h-[280px] md:h-[320px] overflow-hidden rounded-none shadow-xl transition-all duration-500 group-hover:shadow-2xl group-hover:-translate-y-2">
                <img
                  src={brand.image}
                  alt={brand.name}
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1436491865332-7a61a109c0f2?auto=format&fit=crop&w=600&q=80";
                  }}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
              </div>
              <div className="mt-8 px-4 text-center sm:text-left">
                <h3 className="text-2xl font-bold text-gray-900 tracking-tight transition-colors group-hover:text-amber-600">{brand.name}</h3>
                {brand.subtitle && (
                  <p className="text-sm font-medium text-gray-400 mt-2 tracking-wide uppercase">{brand.subtitle}</p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Brands;
