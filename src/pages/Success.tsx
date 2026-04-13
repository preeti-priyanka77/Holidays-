import { useEffect } from 'react';
import { useLocation, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle2, Calendar, MapPin, Share2, Download, Home, ArrowRight, Star } from 'lucide-react';
import { EnhancedPackage } from '../data/mockPackages';

function Success() {
  const location = useLocation();
  const navigate = useNavigate();
  const { pkg } = (location.state as { pkg: EnhancedPackage }) || {};

  useEffect(() => {
    if (!pkg) {
      navigate('/');
    }
    window.scrollTo(0, 0);
  }, [pkg, navigate]);

  if (!pkg) return null;

  const bookingId = `BK-${Math.floor(Math.random() * 90000) + 10000}`;

  return (
    <div className="min-h-screen bg-[#fcfcfc] flex items-center justify-center pt-32 pb-24 px-6 relative overflow-hidden">
      
      {/* Background celebration accents */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[800px] aspect-square bg-blue-50/50 rounded-full blur-[140px] pointer-events-none" />
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-[750px] w-full bg-white rounded-[48px] border border-gray-100 shadow-2xl shadow-blue-900/5 p-10 md:p-16 relative z-10 text-center"
      >
         <motion.div 
           initial={{ scale: 0 }}
           animate={{ scale: 1 }}
           transition={{ type: "spring", stiffness: 200, damping: 12, delay: 0.2 }}
           className="w-24 h-24 bg-green-50 text-green-500 rounded-[32px] flex items-center justify-center mx-auto mb-10 shadow-lg shadow-green-100"
         >
            <CheckCircle2 size={48} strokeWidth={2.5} />
         </motion.div>

         <div className="space-y-6 mb-12">
            <h1 className="text-4xl md:text-5xl font-black text-[#212529] tracking-tighter leading-tight">
               Your Booking is <br /> <span className="text-[#0056b3]">Confirmed!</span>
            </h1>
            <p className="text-gray-400 font-bold text-lg leading-relaxed max-w-md mx-auto">
               Pack your bags! Your dream journey to <strong>{pkg.title.split(':')[0]}</strong> has been successfully booked.
            </p>
         </div>

         <div className="bg-gray-50/50 border border-gray-100 rounded-[32px] p-8 md:p-10 mb-12 text-left grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="space-y-6">
               <div className="flex flex-col gap-1">
                  <span className="text-[10px] text-gray-400 font-black uppercase tracking-widest">Booking Identity</span>
                  <span className="text-2xl font-black text-[#212529] tracking-tight">{bookingId}</span>
               </div>
               <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-blue-500 shadow-sm">
                     <Calendar size={18} />
                  </div>
                  <div>
                     <p className="text-[10px] text-gray-400 font-bold uppercase leading-none mb-1">Travel Date</p>
                     <p className="text-xs font-black text-gray-700">Check Email for Details</p>
                  </div>
               </div>
               <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-red-500 shadow-sm">
                     <MapPin size={18} />
                  </div>
                  <div>
                     <p className="text-[10px] text-gray-400 font-bold uppercase leading-none mb-1">Destinations</p>
                     <p className="text-xs font-black text-gray-700 truncate">{pkg.route}</p>
                  </div>
               </div>
            </div>

            <div className="border-t md:border-t-0 md:border-l border-gray-100 pt-10 md:pt-0 md:pl-10 space-y-6">
               <div className="flex flex-col gap-1 text-center md:text-left">
                  <span className="text-[10px] text-gray-400 font-black uppercase tracking-widest leading-none mb-2">Member Points Earned</span>
                  <div className="flex items-center justify-center md:justify-start gap-2">
                     <div className="w-8 h-8 rounded-lg bg-amber-50 text-amber-500 flex items-center justify-center">
                        <Star size={16} fill="currentColor" />
                     </div>
                     <span className="text-xl font-black text-gray-800">+1,250 Pts</span>
                  </div>
               </div>
               <div className="flex gap-4">
                  <button className="flex-1 h-12 bg-white border border-gray-100 rounded-xl text-[11px] font-black uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-gray-50 transition-colors">
                     <Share2 size={16} /> Share
                  </button>
                  <button className="flex-1 h-12 bg-white border border-gray-100 rounded-xl text-[11px] font-black uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-gray-50 transition-colors">
                     <Download size={16} /> Save PDF
                  </button>
               </div>
            </div>
         </div>

         <div className="flex flex-col md:flex-row items-center gap-4">
            <Link 
              to="/profile" 
              className="w-full md:flex-1 bg-[#212529] text-white h-16 rounded-[24px] font-black text-sm uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-[#0056b3] transition-all"
            >
               Go to My Dashboard <ArrowRight size={20} className="opacity-40" />
            </Link>
            <Link 
              to="/" 
              className="w-full md:w-fit px-8 h-16 rounded-[24px] border border-gray-100 font-black text-sm uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-gray-50 transition-colors text-gray-500"
            >
               <Home size={18} /> Home
            </Link>
         </div>

         <p className="mt-12 text-[11px] text-gray-400 font-bold uppercase tracking-[0.3em]">
            Thank you for choosing ELEQT HOLIDAYS & LEISURE
         </p>
      </motion.div>
    </div>
  );
}

export default Success;
