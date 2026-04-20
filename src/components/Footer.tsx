import { motion } from 'framer-motion';
import { Phone, Mail, Instagram, Youtube, Linkedin,Facebook, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

function Footer() {

  return (
    <footer className="w-full">
      {/* 🧭 PRE-FOOTER (EXPERIENCE SECTION) */}
      <section className="relative h-[400px] md:h-[450px] w-full flex flex-col items-center justify-center overflow-hidden">
        {/* Background Layer */}
        <motion.div
          initial={{ scale: 1.1 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0 z-0"
        >
          <img
            src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1920&q=80"
            alt="Luxury Experience"
            className="w-full h-full object-cover"
          />
          {/* Dark Overlay with Grain Effect (mocked with opacity) */}
          <div className="absolute inset-0 bg-neutral-900/70 backdrop-blur-[2px]" />
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/p6-mini.png')]" />
        </motion.div>

        {/* Content Layer */}
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto flex flex-col items-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-xs md:text-sm font-bold tracking-[0.4em] text-white/60 uppercase mb-4"
          >Planning your next getaway?
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-2xl md:text-5xl lg:text-6xl font-bold text-white mb-8 md:mb-10 leading-tight"
          >
            Discover curated holiday experiences tailored for you
          </motion.h2>

          <Link to="/#enquiry-form">
            <motion.button
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(180,140,80,0.5)" }}
              className="bg-white text-neutral-900 px-10 py-4 rounded-full font-bold text-lg flex items-center gap-3 transition-all duration-300 mb-12 group"
            >
              Start Your Journey
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </motion.button>
          </Link>

          {/* 📞 FLOATING CONTACT CARDS */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-2xl">
            {/* Phone Card */}
            <motion.a
              href="tel:+91 9777906587 "
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              animate={{ y: [0, -5, 0] }}
              transition={{
                opacity: { duration: 0.6, delay: 0.5 },
                x: { duration: 0.6, delay: 0.5 },
                y: { repeat: Infinity, duration: 4, ease: "easeInOut" }
              }}
              whileHover={{ scale: 1.02, backgroundColor: "rgba(255,255,255,0.15)", filter: "brightness(1.2)" }}
              className="flex items-center gap-4 p-5 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-xl transition-all duration-300"
            >
              <div className="w-10 h-10 flex items-center justify-center bg-white/10 rounded-full">
                <Phone className="w-5 h-5 text-white" />
              </div>
              <span className="text-white font-medium tracking-wide">+91 9777906587 </span>
            </motion.a>

            {/* Email Card */}
            <motion.a
              href="mailto:eleqtholidays@gmail.com"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              animate={{ y: [0, 5, 0] }}
              transition={{
                opacity: { duration: 0.6, delay: 0.6 },
                x: { duration: 0.6, delay: 0.6 },
                y: { repeat: Infinity, duration: 3.5, ease: "easeInOut" }
              }}
              whileHover={{ scale: 1.02, backgroundColor: "rgba(255,255,255,0.15)", filter: "brightness(1.2)" }}
              className="flex items-center gap-4 p-4 md:p-5 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-xl transition-all duration-300"
            >
              <div className="w-10 h-10 flex items-center justify-center bg-white/10 rounded-full shrink-0">
                <Mail className="w-5 h-5 text-white" />
              </div>
              <span className="text-white font-medium tracking-wide break-all text-xs md:text-base">eleqtholidays@gmail.com</span>
            </motion.a>
          </div>
        </div>
      </section>

      {/* 🌙 FOOTER (CLEAN + PREMIUM) */}
      <section className="bg-[#0f0f0f] text-white pt-20 pb-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8 items-start">

            {/* LEFT: Logo / Brand Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h3 className="text-2xl font-bold tracking-tight">Eleqt Holidays & Leisure</h3>
              <p className="text-sm text-white/50 leading-relaxed font-light tracking-wide max-w-[380px]">
                Corporate Office: 11th Floor, Tower-A, Odisha Startup Incubation Centre (O-Hub), SEZ Road, Infocity, Chandaka Industrial Estate, Patia, Bhubaneswar, Odisha, 751024, India
              </p>
            </motion.div>

            {/* CENTER: Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex flex-col md:items-center space-y-4"
            >
              <div className="flex flex-col md:flex-row gap-6 md:gap-10 list-none">
                {[
                  { name: 'About', path: '/about' },

                  { name: 'Privacy Policy', path: '/privacy-policy' },
                  { name: 'Terms of Use', path: '/terms-of-use' },
                  { name: 'Guest Policy', path: '/guest-policy' },
                ].map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    className="text-[12px] font-bold uppercase tracking-widest text-white/50 hover:text-white transition-all relative group w-fit"
                  >
                    {link.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-amber-600 transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                ))}
              </div>
            </motion.div>

            {/* RIGHT: Social Icons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="flex gap-6 md:justify-end items-center"
            >
              {[
                { icon: Instagram, href: 'https://www.instagram.com/eleqtholidays.in/' },
                { icon: Linkedin, href: 'https://www.linkedin.com/company/eleqtholidays-in/' },
                { icon: Youtube, href: 'https://www.youtube.com/@EleqtHolidays/' },
                { icon: Facebook, href: 'https://www.facebook.com/eleqtholidays.in/' },
              ].map((social, idx) => (
                <motion.a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.15, color: "#b08d57", borderColor: "rgba(176, 141, 87, 0.5)" }}
                  className="p-3 border border-white/10 rounded-full hover:bg-white/5 transition-all duration-300 text-white/60"
                >
                  <social.icon size={20} strokeWidth={1.5} />
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* BOTTOM STRIP */}
          <div className="mt-20 pt-8 border-t border-white/5 text-center">
            <p className="text-[10px] md:text-xs text-white/30 tracking-[0.3em] uppercase">
              2025-2026 © Eleqt Holidays & Leisure | Psynuxsoftware Pvt Ltd. All Rights Reserved.
            </p>
          </div>
        </div>
      </section>
    </footer>
  );
}

export default Footer;
