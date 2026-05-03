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
      <div className="max-w-7xl mx-auto px-4 md:px-10 flex items-center justify-between">

        {/* Left: Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <img src={Holidays} alt="logo" className='w-16 md:w-52 h-auto md:h-[70px] transition-transform duration-300' />
        </Link>

        {/* Right: Contact & Support */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex items-center gap-6 px-4 py-2 bg-gray-50 border border-gray-100 rounded-none">
            <a href="tel:+91 9777906587" className="flex items-center gap-2 text-gray-700 hover:text-amber-600 transition-colors">
              <Phone size={14} className="text-amber-600" />
              <span className="text-xs font-bold tracking-wider">+91 9777906587 </span>
            </a>
            <div className="w-px h-4 bg-gray-200" />
            <a href="mailto:packages@checkin.vacations" className="flex items-center gap-2 text-gray-700 hover:text-amber-600 transition-colors">
              <Mail size={14} className="text-amber-600" />
              <span className="text-xs font-bold tracking-wider">eleqtholidays@gmail.com</span>
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

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[110]"
            />
            
            {/* Mobile Menu Container - Adjusted to Drawer Style */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="fixed inset-y-0 right-0 w-[85%] max-w-[400px] h-screen bg-[#f8f5f0] shadow-2xl z-[120] p-8 flex flex-col overflow-y-auto"
            >
              <div className="flex justify-between items-center mb-12">
                {/* Re-adding logo for context in full-screen menu */}
                <img src={Holidays} alt="logo" className='w-32 h-auto' />
                <button
                  className="p-2 text-gray-900 transition-colors hover:text-amber-600"
                  onClick={() => setIsOpen(false)}
                >
                  <X size={28} />
                </button>
              </div>

              <div className="flex flex-col gap-10">
                {/* Navigation Links */}
                <div className="flex flex-col gap-6">
                  {[
                    { name: 'Home', path: '/' },
                    { name: 'About Us', path: '/about' }
                  
                  ].map((link) => (
                    <Link 
                      key={link.name}
                      to={link.path} 
                      onClick={() => setIsOpen(false)}
                      className="text-3xl font-bold text-gray-900 border-b border-gray-200 pb-2 hover:text-[#b08d57] transition-all duration-300"
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>

                {/* Contact Info */}
                <div className="flex flex-col gap-4 mt-4">
                  <a href="tel:+919777906587" className="flex items-center gap-4 p-4 bg-white border border-gray-100 shadow-sm">
                    <div className="w-12 h-12 bg-[#b08d57]/10 flex items-center justify-center text-[#b08d57] rounded-full">
                      <Phone size={24} />
                    </div>
                    <div>
                      <p className="text-[10px] text-gray-400 font-bold uppercase tracking-[0.2em]">Call Us</p>
                      <p className="font-bold text-gray-900 text-lg">+91 9777906587</p>
                    </div>
                  </a>
                  
                  <a href="mailto:eleqtholidays@gmail.com" className="flex items-center gap-4 p-4 bg-white border border-gray-100 shadow-sm">
                    <div className="w-12 h-12 bg-[#b08d57]/10 flex items-center justify-center text-[#b08d57] rounded-full">
                      <Mail size={24} />
                    </div>
                    <div>
                      <p className="text-[10px] text-gray-400 font-bold uppercase tracking-[0.2em]">Email Us</p>
                      <p className="font-bold text-gray-900 text-base break-all">eleqtholidays@gmail.com</p>
                    </div>
                  </a>
                </div>

                <Link
                  to="/contact"
                  onClick={() => setIsOpen(false)}
                  className="w-full bg-[#b08d57] text-white text-center font-bold uppercase tracking-[0.3em] py-5 mt-4 shadow-lg hover:bg-[#8e7246] transition-all"
                >
                  Plan My Trip
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default Navbar;

