import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  CreditCard, 
  ShieldCheck, 
  Lock, 
  ChevronLeft, 
  Banknote,
  Smartphone,
  Info,
  CircleDashed,
  ArrowRight
} from 'lucide-react';
import { EnhancedPackage } from '../data/mockPackages';

function Payment() {
  const location = useLocation();
  const navigate = useNavigate();
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState('card');

  const { pkg, bookingDetails } = (location.state as { pkg: EnhancedPackage, bookingDetails: any }) || {};

  useEffect(() => {
    if (!pkg) {
      navigate('/');
    }
    window.scrollTo(0, 0);
  }, [pkg, navigate]);

  if (!pkg) return null;

  const handlePayment = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      navigate('/success', { state: { pkg } });
    }, 2500);
  };

  const methods = [
    { id: 'card', name: 'Credit/Debit Card', icon: <CreditCard /> },
    { id: 'upi', name: 'UPI Payment', icon: <Smartphone /> },
    { id: 'netbanking', name: 'Net Banking', icon: <Banknote /> }
  ];

  return (
    <div className="min-h-screen bg-[#f8f9fa] pt-24 pb-24 relative overflow-hidden">
      
      <AnimatePresence>
        {isProcessing && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-white/90 backdrop-blur-md flex flex-col items-center justify-center text-center p-10"
          >
             <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }} className="mb-8 text-[#0056b3]">
                <CircleDashed size={64} strokeWidth={3} />
             </motion.div>
             <h2 className="text-3xl font-black text-[#212529] mb-4">Verifying Transaction</h2>
             <p className="text-gray-400 font-bold max-w-sm">Please do not refresh the page or click back button. Securely connecting with your bank...</p>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="max-w-[1100px] mx-auto px-6 relative z-10">
        <button 
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-gray-500 hover:text-black font-bold mb-10 transition-colors group"
        >
          <ChevronLeft size={20} className="group-hover:-translate-x-1 transition-transform" /> Modify Booking info
        </button>

        <div className="flex flex-col lg:flex-row gap-12">
           
           {/* LEFT: Payment Form */}
           <div className="flex-1 space-y-10">
              <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="space-y-6">
                 <h1 className="text-4xl font-black text-[#212529] tracking-tighter">Secure <span className="text-[#0056b3]">Checkout</span></h1>
                 <div className="p-4 bg-blue-50 border border-blue-100 rounded-2xl flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[#0056b3] text-white flex items-center justify-center shrink-0">
                       <Lock size={18} />
                    </div>
                    <p className="text-xs text-[#0056b3] font-bold leading-relaxed">
                       Your payment data is fully encrypted and processed via <strong>256-bit Secure Gateway</strong>. We never store card details.
                    </p>
                 </div>
              </motion.div>

              <div className="space-y-6">
                 <h3 className="text-[11px] font-black text-gray-400 uppercase tracking-widest ml-1">Choose Payment Method</h3>
                 <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {methods.map((m) => (
                      <button 
                         key={m.id}
                         onClick={() => setPaymentMethod(m.id)}
                         className={`p-6 rounded-[28px] border-2 flex flex-col items-center gap-4 transition-all ${
                            paymentMethod === m.id 
                              ? 'border-[#0056b3] bg-white shadow-xl shadow-blue-900/5' 
                              : 'border-transparent bg-white/50 hover:bg-white hover:shadow-lg'
                         }`}
                      >
                         <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 ${paymentMethod === m.id ? 'bg-[#0056b3] text-white' : 'bg-gray-100 text-gray-400'}`}>
                            {m.icon}
                         </div>
                         <span className={`text-[12px] font-black uppercase tracking-widest text-center ${paymentMethod === m.id ? 'text-[#0056b3]' : 'text-gray-400'}`}>
                            {m.name}
                         </span>
                      </button>
                    ))}
                 </div>
              </div>

              {paymentMethod === 'card' && (
                <motion.form 
                  initial={{ opacity: 0, y: 10 }} 
                  animate={{ opacity: 1, y: 0 }}
                  onSubmit={handlePayment} 
                  className="bg-white rounded-[40px] p-10 border border-gray-100 shadow-xl shadow-blue-900/5 space-y-8"
                >
                   <div className="space-y-1">
                      <label className="text-[11px] font-black text-gray-400 uppercase tracking-widest ml-1">Card Number</label>
                      <div className="relative">
                         <div className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center gap-2">
                            <div className="w-8 h-5 bg-gray-100 rounded-sm" />
                            <div className="w-8 h-5 bg-gray-100 rounded-sm" />
                         </div>
                         <input type="text" placeholder="XXXX XXXX XXXX XXXX" className="w-full h-14 bg-gray-50/50 border border-gray-100 px-6 rounded-2xl outline-none focus:bg-white focus:border-[#0056b3] transition-all font-bold text-gray-700" />
                      </div>
                   </div>

                   <div className="grid grid-cols-2 gap-8">
                      <div className="space-y-1">
                         <label className="text-[11px] font-black text-gray-400 uppercase tracking-widest ml-1">Expiry Date</label>
                         <input type="text" placeholder="MM/YY" className="w-full h-14 bg-gray-50/50 border border-gray-100 px-6 rounded-2xl outline-none focus:bg-white focus:border-[#0056b3] transition-all font-bold text-gray-700 text-center" />
                      </div>
                      <div className="space-y-1">
                         <label className="text-[11px] font-black text-gray-400 uppercase tracking-widest ml-1">CVV / CVC</label>
                         <div className="relative">
                            <input type="password" placeholder="•••" className="w-full h-14 bg-gray-50/50 border border-gray-100 px-6 rounded-2xl outline-none focus:bg-white focus:border-[#0056b3] transition-all font-bold text-gray-700 text-center" />
                            <Info size={14} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-300" />
                         </div>
                      </div>
                   </div>

                   <div className="pt-6">
                      <button type="submit" className="w-full bg-[#212529] hover:bg-[#0056b3] text-white h-16 rounded-[24px] font-black text-lg flex items-center justify-center gap-3 transition-all hover:scale-[1.02] shadow-xl shadow-gray-100 active:scale-[0.98]">
                         Complete Payment <ArrowRight size={22} className="opacity-40" />
                      </button>
                      <div className="mt-6 flex items-center justify-center gap-4 opacity-30 grayscale hover:grayscale-0 transition-all">
                         <div className="w-10 h-6 bg-blue-900 rounded-sm" />
                         <div className="w-10 h-6 bg-orange-600 rounded-sm" />
                         <div className="w-10 h-6 bg-red-600 rounded-sm" />
                      </div>
                   </div>
                </motion.form>
              )}
           </div>

           {/* RIGHT: Order Summary */}
           <div className="lg:w-[350px]">
              <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="bg-[#212529] rounded-[40px] p-10 text-white shadow-2xl relative overflow-hidden sticky top-28">
                 <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none" />
                 
                 <h2 className="text-xl font-black mb-8 flex items-center gap-3 tracking-tighter">
                   <div className="w-2 h-8 bg-blue-500 rounded-full" /> Order Summary
                 </h2>

                 <div className="space-y-6 mb-10 pb-10 border-b border-white/5">
                    <div>
                       <p className="text-[10px] text-gray-500 font-black uppercase tracking-widest mb-1">Package Selected</p>
                       <p className="text-sm font-bold text-white leading-relaxed line-clamp-2">{pkg.title}</p>
                    </div>
                    <div className="grid grid-cols-2 gap-6">
                       <div>
                          <p className="text-[10px] text-gray-500 font-black uppercase tracking-widest mb-1">Guests</p>
                          <p className="text-sm font-bold text-white">{bookingDetails?.travelers} Travelers</p>
                       </div>
                       <div>
                          <p className="text-[10px] text-gray-500 font-black uppercase tracking-widest mb-1">Travel Date</p>
                          <p className="text-sm font-bold text-white">{bookingDetails?.date || 'To be selected'}</p>
                       </div>
                    </div>
                 </div>

                 <div className="space-y-4 mb-10">
                    <div className="flex justify-between items-center text-sm font-bold">
                       <span className="text-gray-500">Package Price</span>
                       <span>₹{pkg.price.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between items-center text-sm font-bold">
                       <span className="text-gray-500">Booking Fees</span>
                       <span className="text-blue-400">FREE</span>
                    </div>
                    <div className="flex justify-between items-center text-sm font-bold">
                       <span className="text-gray-500">IGST (18%)</span>
                       <span>₹{Math.round(pkg.price * 0.18).toLocaleString()}</span>
                    </div>
                 </div>

                 <div className="flex justify-between items-baseline pt-4">
                    <span className="text-lg font-black tracking-tight text-blue-400">Total Payable</span>
                    <span className="text-3xl font-black tracking-tighter">₹{(pkg.price + (pkg.price * 0.18)).toLocaleString()}</span>
                 </div>
              </motion.div>

              <div className="mt-8 p-6 bg-white rounded-3xl border border-gray-100 flex items-start gap-4">
                 <ShieldCheck size={24} className="text-green-500 shrink-0" />
                 <p className="text-[10px] text-gray-400 font-bold uppercase tracking-tight leading-relaxed">
                   Free cancellation up to 48 hours before check-in. Full protection under our <strong>Trip Shield™</strong> policy.
                 </p>
              </div>
           </div>

        </div>
      </div>
    </div>
  );
}

export default Payment;
