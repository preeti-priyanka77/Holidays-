import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ShieldCheck, Clock, MapPin, CreditCard, ChevronLeft } from 'lucide-react';
import { MOCK_PACKAGES, EnhancedPackage } from '../data/mockPackages';
import { useAuth } from '../lib/AuthContext';

function CustomizePackage() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const { user } = useAuth();
  const [pkg, setPkg] = useState<EnhancedPackage | null>(null);

  const [date, setDate] = useState('');
  const [travelers, setTravelers] = useState(2);
  const [requests, setRequests] = useState('');

  useEffect(() => {
    if (slug && MOCK_PACKAGES[slug]) {
      setPkg(MOCK_PACKAGES[slug]);
    } else {
      navigate('/');
    }
    if (!user) {
      navigate('/login');
    }
    window.scrollTo(0, 0);
  }, [slug, user, navigate]);

  if (!pkg) return null;

  const handleProceed = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/payment', { 
      state: { 
        pkg, 
        bookingDetails: { date, travelers, requests } 
      } 
    });
  };

  return (
    <div className="min-h-screen bg-[#f8f9fa] pt-24 pb-20">
      <div className="max-w-[1100px] mx-auto px-6">
        
        <button 
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-gray-500 hover:text-black font-bold mb-8 transition-colors group"
        >
          <ChevronLeft size={20} className="group-hover:-translate-x-1 transition-transform" /> Back to Package
        </button>

        <div className="flex flex-col lg:flex-row gap-10">
          
          <div className="w-full lg:w-[40%]">
             <motion.div 
               initial={{ opacity: 0, x: -20 }}
               animate={{ opacity: 1, x: 0 }}
               className="bg-white rounded-[32px] border border-gray-100 p-8 shadow-sm sticky top-28"
             >
                <div className="relative h-48 rounded-2xl overflow-hidden mb-6">
                   <img src={pkg.images[0]} className="w-full h-full object-cover" />
                   <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1.5 rounded-xl text-[11px] font-black tracking-tighter">
                      {pkg.nights} Nights / {pkg.days} Days
                   </div>
                </div>

                <h2 className="text-xl font-black text-[#212529] leading-tight mb-4">{pkg.title}</h2>
                <div className="space-y-4 mb-8">
                   <div className="flex items-start gap-3">
                      <MapPin size={18} className="text-blue-500 shrink-0 mt-0.5" />
                      <span className="text-sm font-bold text-gray-500 leading-relaxed">{pkg.route}</span>
                   </div>
                   <div className="flex items-center gap-3">
                      <Clock size={18} className="text-amber-500 shrink-0" />
                      <span className="text-sm font-bold text-gray-500">Instant Confirmation</span>
                   </div>
                </div>

                <div className="border-t border-gray-50 pt-6">
                   <div className="flex justify-between items-baseline mb-2">
                      <span className="text-gray-400 text-sm font-bold">Base Price</span>
                      <span className="text-xl font-black text-[#212529]">₹{pkg.price.toLocaleString()}</span>
                   </div>
                </div>
             </motion.div>
          </div>

          <div className="w-full lg:w-[60%]">
             <motion.div
               initial={{ opacity: 0, y: 30 }}
               animate={{ opacity: 1, y: 0 }}
               className="bg-white rounded-[40px] border border-gray-100 p-10 shadow-xl shadow-blue-900/5"
             >
                <div className="mb-10 text-center lg:text-left">
                   <h1 className="text-3xl font-black text-[#212529] mb-2 tracking-tighter">Customize Your Journey</h1>
                   <p className="text-gray-400 font-bold">Tell us your preferences for a perfect stay</p>
                </div>

                <form onSubmit={handleProceed} className="space-y-8">
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-2">
                         <label className="text-[11px] font-black text-gray-400 uppercase tracking-widest ml-1">Travel Date</label>
                         <input 
                            type="date" 
                            required
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                            className="w-full h-14 bg-gray-50 border border-gray-100 px-6 rounded-2xl outline-none focus:bg-white focus:border-[#0056b3] focus:ring-4 focus:ring-blue-50 transition-all font-bold text-gray-700"
                         />
                      </div>

                      <div className="space-y-2 text-left">
                         <label className="text-[11px] font-black text-gray-400 uppercase tracking-widest ml-1">No. of Travelers</label>
                         <select 
                            value={travelers}
                            onChange={(e) => setTravelers(parseInt(e.target.value))}
                            className="w-full h-14 bg-gray-50 border border-gray-100 px-6 rounded-2xl outline-none focus:bg-white focus:border-[#0056b3] focus:ring-4 focus:ring-blue-50 transition-all font-bold text-gray-700"
                         >
                            {[1,2,3,4,5,6,7,8].map(n => <option key={n} value={n}>{n} {n === 1 ? 'Traveler' : 'Travelers'}</option>)}
                         </select>
                      </div>
                   </div>

                   <div className="space-y-2">
                      <label className="text-[11px] font-black text-gray-400 uppercase tracking-widest ml-1">Special Requests (Optional)</label>
                      <textarea 
                        value={requests}
                        onChange={(e) => setRequests(e.target.value)}
                        rows={4}
                        placeholder="Ex: Birthday surprise, Food allergies..."
                        className="w-full bg-gray-50 border border-gray-100 px-6 py-4 rounded-2xl outline-none focus:bg-white focus:border-[#0056b3] transition-all font-bold text-gray-700 resize-none"
                      />
                   </div>

                   <div className="pt-6">
                      <button type="submit" className="w-full bg-[#0056b3] hover:bg-[#004494] text-white h-16 rounded-[24px] font-black text-lg flex items-center justify-center gap-3 transition-all hover:scale-[1.02] active:scale-[0.98] shadow-xl shadow-blue-100">
                         Proceed to Payment <CreditCard size={22} className="opacity-50" />
                      </button>
                      <div className="flex items-center justify-center gap-2 mt-6 text-green-600 font-bold text-[10px] uppercase tracking-[0.2em]">
                         <ShieldCheck size={16} /> 100% Safe & Secure Checkout
                      </div>
                   </div>
                </form>
             </motion.div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default CustomizePackage;
