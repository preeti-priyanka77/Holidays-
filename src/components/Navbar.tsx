import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, Mail } from 'lucide-react';
import Holidays from '../assets/Holidays.svg';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on navigation
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${isScrolled
        ? 'bg-white/40 backdrop-blur-xl shadow-lg border-b border-gray-100 py-2'
        : 'bg-white/40 backdrop-blur-sm py-2'
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between">

        {/* Left: Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <img src={Holidays} alt="logo" className='w-20 md:w-52 h-[70px] transition-transform duration-300' />
        </Link>

        {/* Right: Contact & Support */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex items-center gap-6 px-4 py-2 bg-gray-50 border border-gray-100 rounded-none">
            <a href="tel:83050-89097" className="flex items-center gap-2 text-gray-700 hover:text-amber-600 transition-colors">
              <Phone size={14} className="text-amber-600" />
              <span className="text-xs font-bold tracking-wider">83050-89097</span>
            </a>
            <div className="w-px h-4 bg-gray-200" />
            <a href="mailto:packages@checkin.vacations" className="flex items-center gap-2 text-gray-700 hover:text-amber-600 transition-colors">
              <Mail size={14} className="text-amber-600" />
              <span className="text-xs font-bold tracking-wider">packages@checkin.vacations</span>
            </a>
          </div>

          <Link
            to="/contact"
            className="bg-[#916a3b] text-white text-[12px] font-bold uppercase tracking-widest px-8 py-3 rounded-none hover:bg-[#7d5c33] transition-all shadow-md hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0"
          >
            Plan My Trip
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 text-gray-900 transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-y-0 right-0 w-[320px] bg-white shadow-2xl z-50 p-8 flex flex-col rounded-none"
          >
            <div className="px-6 py-10 flex flex-col gap-8">
              <div className="flex flex-col gap-4">
                <a href="tel:9218114966" className="flex items-center gap-4 p-4 bg-gray-50 rounded-none">
                  <div className="w-10 h-10 bg-[#916a3b]/10 flex items-center justify-center text-[#916a3b]">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Call Us</p>
                    <p className="font-bold text-gray-900 italic">92181-14966</p>
                  </div>
                </a>
                <a href="mailto:packages@checkin.vacations" className="flex items-center gap-4 p-4 bg-gray-50 rounded-none">
                  <div className="w-10 h-10 bg-[#916a3b]/10 flex items-center justify-center text-[#916a3b]">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Email Us</p>
                    <p className="font-bold text-gray-900">packages@checkin.vacations</p>
                  </div>
                </a>
              </div>
              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="w-full bg-[#916a3b] text-white text-center font-bold uppercase tracking-[0.2em] py-5 rounded-none shadow-lg"
              >
                Plan My Trip
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default Navbar;

