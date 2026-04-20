import { motion } from 'framer-motion';
import { Shield, MapPin, Users, Globe, Compass, Star, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const STATS = [
    { label: 'Exquisite Destinations', value: '50+' },
    { label: 'Happy Travelers', value: '10K+' },
    { label: 'Expert Guides', value: '100+' },
    { label: 'Years of Excellence', value: '12+' },
];

const VALUES = [
    {
        icon: Shield,
        title: 'Safety First',
        desc: 'Your security is our absolute priority. From vetted transport to premium stays, we ensure every detail of your journey is safe and seamless.'
    },
    {
        icon: Compass,
        title: 'Curated Discovery',
        desc: 'We don’t just book trips; we craft experiences. Every itinerary is handpicked to offer a blend of luxury, culture, and hidden gems.'
    },
    {
        icon: Users,
        title: 'Personalized Care',
        desc: 'Our travel experts are available 24/7, providing tailored support and ensuring your holiday is exactly how you envisioned it.'
    }
];

function About() {
    return (
        <div className="min-h-screen bg-white">
            {/* 1. HERO SECTION (Minimalist & Premium) */}
            <section className="pt-40 pb-20 px-6 bg-neutral-50 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
                    <img src="https://www.transparenttextures.com/patterns/p6-mini.png" alt="" className="w-full h-full object-cover" />
                </div>
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16 relative z-10">
                    <div className="md:w-1/2 space-y-8">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <span className="text-xs md:text-sm font-bold tracking-[0.4em] text-amber-600 uppercase mb-4 block">Our Legacy</span>
                            <h1 className="text-4xl md:text-7xl font-bold text-neutral-900 leading-[1.1] tracking-tighter">
                                Redefining the Art of <br />
                                <span className="text-amber-700 italic">Travel & Leisure</span>
                            </h1>
                            <p className="mt-8 text-lg text-neutral-500 leading-relaxed font-light max-w-lg">
                                Eleqt Holidays & Leisure is more than a travel agency. We are creators of memories, curators of luxury, and your trusted partner in exploring the world's most breathtaking horizons.
                            </p>
                        </motion.div>
                    </div>
                    <div className="md:w-1/2 relative">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1 }}
                            className="rounded-3xl overflow-hidden shadow-2xl relative z-10"
                        >
                            <img
                                src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1200&q=80"
                                alt="Luxury Bus Travel"
                                className="w-full h-[400px] object-cover"
                            />
                        </motion.div>
                        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-amber-500/10 rounded-full blur-3xl" />
                    </div>
                </div>
            </section>

            {/* 2. STATS SECTION */}
            <section className="py-20 border-y border-neutral-100">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
                        {STATS.map((stat, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                            >
                                <h3 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-2 tracking-tight">{stat.value}</h3>
                                <p className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-neutral-400">{stat.label}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3. CORE VALUES SECTION */}
            <section className="py-32 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-24 space-y-4">
                        <h2 className="text-3xl md:text-5xl font-bold text-neutral-900 tracking-tight">Built on Trust, <span className="text-amber-700 italic">Driven by Excellence</span></h2>
                        <div className="w-20 h-1 bg-amber-500 mx-auto" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {VALUES.map((value, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.2 }}
                                className="group p-10 bg-white border border-neutral-100 rounded-3xl hover:shadow-2xl hover:border-amber-100 transition-all duration-500"
                            >
                                <div className="w-16 h-16 bg-amber-50 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-amber-600 transition-colors duration-500">
                                    <value.icon className="w-8 h-8 text-amber-600 group-hover:text-white transition-colors duration-500" />
                                </div>
                                <h3 className="text-xl font-bold text-neutral-900 mb-4">{value.title}</h3>
                                <p className="text-neutral-500 leading-relaxed font-light">{value.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. MISSION & VISION (Split Layout) */}
            <section className="py-32 bg-neutral-900 text-white relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
                    <img src="https://www.transparenttextures.com/patterns/cubes.png" alt="" className="w-full h-full object-cover" />
                </div>
                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                        <div className="space-y-12">
                            <div className="space-y-4">
                                <h2 className="text-4xl font-bold tracking-tight">Our Mission</h2>
                                <p className="text-neutral-400 text-xl font-light leading-relaxed">
                                    To provide unparalleled travel experiences that combine luxury, comfort, and authenticity, ensuring every traveler returns with a heart full of stories and a soul refreshed.
                                </p>
                            </div>
                            <div className="space-y-4">
                                <h2 className="text-4xl font-bold tracking-tight">Our Vision</h2>
                                <p className="text-neutral-400 text-xl font-light leading-relaxed">
                                    To be the global benchmarks for curated travel, recognized for our commitment to quality, personalized service, and sustainable exploration.
                                </p>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-6">
                            <div className="space-y-6">
                                <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    className="h-64 rounded-3xl overflow-hidden shadow-2xl"
                                >
                                    <img src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=600&q=80" alt="Travel" className="w-full h-full object-cover" />
                                </motion.div>
                                <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    className="h-48 rounded-3xl overflow-hidden shadow-2xl"
                                >
                                    <img src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80" alt="Travel" className="w-full h-full object-cover" />
                                </motion.div>
                            </div>
                            <div className="space-y-6 pt-12">
                                <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    className="h-48 rounded-3xl overflow-hidden shadow-2xl"
                                >
                                    <img src="https://images.unsplash.com/photo-1530789253488-b413832bd17b?auto=format&fit=crop&w=600&q=80" alt="Travel" className="w-full h-full object-cover" />
                                </motion.div>
                                <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    className="h-64 rounded-3xl overflow-hidden shadow-2xl"
                                >
                                    <img src="https://images.unsplash.com/photo-1506929113670-b4215a31804c?auto=format&fit=crop&w=600&q=80" alt="Travel" className="w-full h-full object-cover" />
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. FINAL CTA SECTION */}
            <section className="py-32 px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto bg-neutral-900 rounded-3xl p-12 md:p-20 text-center relative overflow-hidden"
                >
                    <div className="absolute top-0 right-0 w-64 h-64 bg-amber-700/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-amber-900/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl" />

                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 relative z-10">Start Your Journey With Us</h2>
                    <Link to="/#enquiry-form">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-white text-neutral-900 px-10 py-4 rounded-full font-bold text-lg inline-flex items-center gap-3 transition-colors hover:bg-amber-50 group relative z-10 shadow-2xl"
                        >
                            Start Your Journey
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                        </motion.button>
                    </Link>
                </motion.div>
            </section>

            {/* Floating Subtle Circles (Premium Touch) */}
            <div className="fixed bottom-10 right-10 flex flex-col gap-4 z-50">
                {/* Scroll hint or subtle social could go here */}
            </div>
        </div>
    );
}

export default About;
