import jagannathImg from '../assets/images/jagannath.jpg';
import brajImg from '../assets/images/braj.jpg';
import ujjainImg from '../assets/images/ujjain.jpg';
import dodhamImg from '../assets/images/dodham.jpg';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { supabase } from '../lib/supabase';
import PackageCard from './PackageCard';
import { MOCK_PACKAGES } from '../data/mockPackages';

interface Package {
  id: string;
  title: string;
  subtitle?: string;
  nights: number;
  days: number;
  price_from: number | string;
  image_url: string;
  slug: string;
  destination_id: string;
}

interface Destination {
  id: string;
  name: string;
  category: 'india' | 'international';
}

function PackageSlider({ title, packages, destinations }: { title: string, packages: Package[], destinations: Destination[] }) {
  if (!packages || packages.length === 0) return null;

  return (
    <section className="py-8 md:py-16 w-full">
      <div className="max-w-7xl mx-auto px-4 md:px-10">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-4 md:gap-6 mb-6 md:mb-12"
        >
          <div>
            <h2 className="text-2xl md:text-5xl font-bold text-gray-900 tracking-tighter">
              {title}
            </h2>
            <div className="w-16 h-1.5 bg-amber-500 mt-2 md:mt-4 rounded-none" />
          </div>
         
        </motion.div>

        <div className="relative w-full">
          <div
            className="flex overflow-x-auto gap-3 md:gap-8 pb-8 no-scrollbar scroll-smooth px-4 md:px-0"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
            }}
          >
            {packages.map((pkg, idx) => (
              <motion.div
                key={pkg.id}
                className="flex-none w-[75%] max-w-[280px] md:w-[380px]"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <PackageCard
                  title={pkg.title}
                  nights={pkg.nights}
                  days={pkg.days}
                  priceFrom={pkg.price_from}
                  imageUrl={pkg.image_url}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function PackageGrid() {
  const [packages, setPackages] = useState<Package[]>([]);
  const [destinations, setDestinations] = useState<Destination[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const { data: pkgs, error: pkgError } = await supabase
          .from('packages')
          .select('*')
          .order('created_at');

        const { data: dests, error: destError } = await supabase
          .from('destinations')
          .select('*');

        if (pkgError || destError || !pkgs || pkgs.length === 0) {
          const mockPkgs: Package[] = Object.values(MOCK_PACKAGES).map(p => {
            const isIntl = /bali|vietnam|dubai|maldives|singapore|thailand|europe|switzerland|malaysia|almaty|japan/i.test(p.slug) ||
              /bali|vietnam|dubai|maldives|singapore|thailand|europe|switzerland|malaysia|almaty|japan/i.test(p.title);

            return {
              id: p.id,
              title: p.title,
              nights: p.nights,
              days: p.days,
              price_from: p.price,
              image_url: p.images[0],
              slug: p.slug,
              destination_id: isIntl ? 'international-1' : 'india-1'
            };
          });

          const mockDests: Destination[] = [
            { id: 'india-1', name: 'India', category: 'india' },
            { id: 'international-1', name: 'International', category: 'international' }
          ];

          setPackages(mockPkgs);
          setDestinations(mockDests);
        } else {
          setPackages(pkgs);
          setDestinations(dests || []);
        }
      } catch (err) {
        console.error('Fetch error:', err);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  const getPackageCategory = (pkg: Package) => {
    const dest = destinations.find((d) => d.id === pkg.destination_id);
    if (dest) return dest.category;
    const searchStr = (pkg.slug + ' ' + pkg.title).toLowerCase();
    const intlKeywords = ['bali', 'vietnam', 'dubai', 'maldives', 'singapore', 'thailand', 'europe', 'switzerland', 'malaysia', 'international', 'almaty', 'japan'];
    return intlKeywords.some(keyword => searchStr.includes(keyword)) ? 'international' : 'india';
  };

  const indiaPackages = packages.filter((pkg) => getPackageCategory(pkg) === 'india');
  const internationalPackages = packages.filter((pkg) => getPackageCategory(pkg) === 'international');

  return (
    <div id="packages" className="bg-white py-8 md:py-16 w-full">
      {loading && packages.length === 0 && (
        <div className="max-w-7xl mx-auto px-4 md:px-10 text-center py-10 md:py-20">
          <p className="text-gray-400 animate-pulse text-xl font-medium italic">Curating your next adventure...</p>
        </div>
      )}

      {!loading && packages.length > 0 && (
        <div className="space-y-0">
          {internationalPackages.length > 0 && (
            <PackageSlider
              title="Journeys across the world, redefined."
              packages={internationalPackages}
              destinations={destinations}
            />
          )}

          {indiaPackages.length > 0 && (
            <PackageSlider
              title="Experience the finest journeys across India"
              packages={indiaPackages}
              destinations={destinations}
            />
          )}

          {/* India Packages Extension */}
          <section className="py-8 md:py-16">
            <div className="max-w-7xl mx-auto px-4 md:px-10">
              <div className="mb-6 md:mb-12">
                <h2 className="text-2xl md:text-5xl font-bold text-gray-900 tracking-tighter">
                  More to Explore in <span className="text-amber-600 italic">India</span>
                </h2>
                <div className="w-16 h-1.5 bg-amber-500 mt-2 md:mt-4" />
              </div>
              <div className="flex gap-3 overflow-x-auto no-scrollbar scroll-smooth pb-8 px-4 md:px-0">
                {[
                  { title: "Divyadham", nights: 3, days: 4, priceFrom: "₹15,555/-*", imageUrl: brajImg, slug: "divyadham" },
                  { title: "Jagannath Dham", nights: 3, days: 4, priceFrom: "₹14,999/-*", imageUrl: jagannathImg, slug: "jagannath-dham" },
                  { title: "Brajyatra", nights: 3, days: 4, priceFrom: "₹15,555/-*", imageUrl: brajImg, slug: "brajyatra" },
                  { title: "Ujjain", nights: 3, days: 4, priceFrom: "₹12,999/-*", imageUrl: ujjainImg, slug: "ujjain" },
                  { title: "Kedarnath", nights: 3, days: 4, priceFrom: "₹15,999/-*", imageUrl: dodhamImg, slug: "kedarnath" },
                  { title: "Do Dham Yatra", subtitle: "(Kedarnath & Badrinath)", nights: 4, days: 5, priceFrom: "₹22,999/-*", imageUrl: dodhamImg, slug: "do-dham" },
                  { title: "Badrinath", nights: 3, days: 4, priceFrom: "₹15,999/-*", imageUrl: dodhamImg, slug: "badrinath" },
                  { title: "Char Dham Yatra", subtitle: "(Kedarnath, Badrinath, Yamunotri & Gangotri)", nights: 9, days: 10, priceFrom: "₹29,999/-*", imageUrl: jagannathImg, slug: "char-dham" }
                ].map((pkg, idx) => (
                  <motion.div
                    key={idx}
                    className="flex-none w-[75%] max-w-[280px] md:w-[380px]"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                  >
                    <PackageCard
                      title={pkg.title}
                      subtitle={pkg.subtitle}
                      nights={pkg.nights}
                      days={pkg.days}
                      priceFrom={pkg.priceFrom}
                      imageUrl={pkg.imageUrl}
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        </div>
      )}
    </div>
  );
}

export default PackageGrid;
