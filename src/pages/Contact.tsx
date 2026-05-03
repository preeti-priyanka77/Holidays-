import { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Send, CheckCircle2 } from 'lucide-react';

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
    <div className="min-h-screen bg-[#f8f5f0]">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="pt-20 md:pt-32 pb-12 md:pb-24"
      >
        <div className="max-w-7xl mx-auto px-4 md:px-10 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 lg:gap-24 items-start">
            
            {/* Left Column: Contact Info */}
            <div className="space-y-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <p className="text-[11px] font-bold tracking-[0.5em] text-[#b08d57] uppercase mb-4">
                  GET IN TOUCH
                </p>
                <h1 className="text-3xl md:text-7xl font-bold text-gray-900 tracking-tighter mb-6 md:mb-8 leading-[1.1]">
                  Let’s design your <br />
                  <span className="text-[#b08d57] italic font-medium">next escape</span>
                </h1>
                <p className="text-gray-500 text-lg leading-relaxed max-w-lg">
                  Looking for a personalized itinerary? Our travel experts are ready to curate your next extraordinary journey.
                </p>
              </motion.div>

              <div className="space-y-10">
                {[
                  { 
                    icon: Phone, 
                    title: "Call Us", 
                    value: "+91 9777906587",
                    href: "tel:+919777906587"
                  },
                  { 
                    icon: Mail, 
                    title: "Email", 
                    value: "eleqtholidays@gmail.com",
                    href: "mailto:eleqtholidays@gmail.com"
                  },
                  { 
                    icon: MapPin, 
                    title: "Visit Us", 
                    value: "Bhubaneswar, India",
                    href: "#"
                  }
                ].map((item, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + i * 0.1 }}
                    className="flex items-center gap-6 group"
                  >
                    <div className="w-14 h-14 rounded-full bg-white shadow-sm flex items-center justify-center border border-gray-100 group-hover:bg-[#b08d57] group-hover:text-white transition-all duration-300">
                      <item.icon size={22} strokeWidth={1.5} className="group-hover:scale-110 transition-transform" />
                    </div>
                    <div>
                      <h4 className="text-[10px] font-bold uppercase tracking-widest text-[#b08d57] mb-1">{item.title}</h4>
                      <a 
                        href={item.href} 
                        className="text-xl font-bold text-gray-900 group-hover:text-[#b08d57] transition-colors"
                      >
                        {item.value}
                      </a>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Right Column: Form */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 }}
              className="bg-white p-6 md:p-14 shadow-[0_30px_60px_rgba(0,0,0,0.05)] border border-[#e5e1da] rounded-none"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 tracking-tight mb-8 md:mb-10">Send a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6 md:space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-[#b08d57] ml-1">Full Name</label>
                    <input 
                      type="text" 
                      required 
                      value={name} 
                      onChange={(e) => setName(e.target.value)} 
                      placeholder="Your Name" 
                      className="w-full bg-[#fcfcfc] border-b border-[#e5e1da] py-4 px-1 focus:outline-none focus:border-[#b08d57] transition-all text-gray-900 font-medium placeholder:text-gray-300" 
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-[#b08d57] ml-1">Email Address</label>
                    <input 
                      type="email" 
                      required 
                      value={email} 
                      onChange={(e) => setEmail(e.target.value)} 
                      placeholder="hello@example.com" 
                      className="w-full bg-[#fcfcfc] border-b border-[#e5e1da] py-4 px-1 focus:outline-none focus:border-[#b08d57] transition-all text-gray-900 font-medium placeholder:text-gray-300" 
                    />
                  </div>
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-[#b08d57] ml-1">Message</label>
                  <textarea 
                    required 
                    rows={4} 
                    value={message} 
                    onChange={(e) => setMessage(e.target.value)} 
                    placeholder="Tell us about your dream trip..." 
                    className="w-full bg-[#fcfcfc] border-b border-[#e5e1da] py-4 px-1 focus:outline-none focus:border-[#b08d57] transition-all text-gray-900 font-medium placeholder:text-gray-300 resize-none" 
                  />
                </div>
                <button 
                  type="submit" 
                  disabled={isSent}
                  className="w-full bg-[#212121] hover:bg-[#b08d57] text-white h-16 rounded-none font-bold uppercase tracking-widest text-[12px] flex items-center justify-center gap-3 transition-all duration-300 active:scale-[0.98] shadow-lg"
                >
                  {isSent ? <><CheckCircle2 size={20} /> Request Sent</> : <>Send Inquiry <Send size={16} className="opacity-60" /></>}
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Contact;
