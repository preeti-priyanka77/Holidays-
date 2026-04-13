import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Mail, MapPin, Send, Globe, Instagram, Twitter, Facebook, CheckCircle2 } from 'lucide-react';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSent(true);
    setTimeout(() => setIsSent(false), 5000);
  };

  return (
    <div className="min-h-screen bg-[#fcfcfc] pt-32 pb-24 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[40%] h-[40%] bg-blue-50/40 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[30%] h-[30%] bg-red-50/40 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr,1.4fr] gap-20">
           
           <div className="space-y-12">
              <div>
                 <motion.h1 initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="text-5xl md:text-6xl font-black text-[#212529] tracking-tighter mb-4">
                   Get In <br /> <span className="text-[#0056b3]">Touch</span>
                 </motion.h1>
                 <p className="text-gray-400 font-bold text-lg leading-relaxed">
                   Looking for a personalized itinerary? We're here to help you curate your next masterpiece.
                 </p>
              </div>

              <div className="space-y-8">
                 {[
                   { icon: <Phone className="text-blue-500" />, title: "Call Us", value: "+91 83050 89097" },
                   { icon: <Mail className="text-red-500" />, title: "Email", value: "packages@checkin.vacations" },
                   { icon: <MapPin className="text-green-500" />, title: "Visit Us", value: "New Delhi, India" }
                 ].map((item, i) => (
                   <div key={i} className="flex items-start gap-6 group">
                      <div className="w-14 h-14 rounded-2xl bg-white shadow-xl flex items-center justify-center border border-gray-50 group-hover:bg-[#0056b3] group-hover:text-white transition-all">
                         {item.icon}
                      </div>
                      <div>
                         <h4 className="text-gray-400 font-black uppercase text-[10px] tracking-widest mb-1">{item.title}</h4>
                         <p className="text-[20px] font-black text-[#212529] leading-none group-hover:text-[#0056b3] transition-colors">{item.value}</p>
                      </div>
                   </div>
                 ))}
              </div>
           </div>

           <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="bg-white rounded-[40px] p-12 border border-gray-50 shadow-2xl shadow-blue-900/5">
              <h2 className="text-3xl font-black text-[#212529] tracking-tight mb-8 text-center lg:text-left">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <input type="text" required value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" className="w-full h-14 bg-gray-50 border border-gray-100 px-6 rounded-2xl outline-none focus:bg-white focus:border-[#0056b3] transition-all font-bold" />
                    <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" className="w-full h-14 bg-gray-50 border border-gray-100 px-6 rounded-2xl outline-none focus:bg-white focus:border-[#0056b3] transition-all font-bold" />
                 </div>
                 <textarea required rows={5} value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Message" className="w-full bg-gray-50 border border-gray-100 px-6 py-4 rounded-2xl outline-none focus:bg-white focus:border-[#0056b3] transition-all font-bold resize-none" />
                 <button type="submit" className="w-full bg-[#0056b3] hover:bg-[#004494] text-white h-16 rounded-[24px] font-black text-lg flex items-center justify-center gap-3 transition-all hover:scale-[1.02] shadow-xl shadow-blue-100">
                    {isSent ? <><CheckCircle2 size={24} /> Sent!</> : <>Send Inquiry <Send size={20} className="opacity-60" /></>}
                 </button>
              </form>
           </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
