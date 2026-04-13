import React, { useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Compass, Home, Map, Sparkles, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

const About: React.FC = () => {
    const { scrollYProgress } = useScroll();
    const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const sections = [
        {
            text: "Founded in September 2025, Eleqt Holidays & Leisure was born with a clear vision: to redefine how modern travellers experience the world. More than just holidays, Eleqt is an expression of elegance, intention, and thoughtfully curated leisure.",
            image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1000&q=80", // Luxury Bus/Travel
            title: "Our Origin"
        },
        {
            text: "Built on the same philosophy that defines Eleqt Mobility, we believe travel should be seamless, refined, and deeply personal. Every journey is designed to blend comfort, authenticity, and immersive experiences into something truly meaningful.",
            image: "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=1000&q=80", // Serene shoreline
            title: "Our Philosophy"
        },
        {
            text: "At Eleqt Holidays & Leisure, we don’t just plan trips - we design moments that stay with you long after the journey ends. We craft personalized journeys across the world’s most inspiring destinations; from misty mountains and serene landscapes to vibrant cities and hidden gems, each experience is thoughtfully curated to reflect your story, your pace, and your dreams.",
            image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1000&q=80", // Misty Mountains
            title: "Designing Moments"
        },
        {
            text: "Our approach brings together handpicked stays, curated dining, seamless transfers, and immersive local experiences; all delivered with precision, care, and attention to detail. Every journey is crafted to feel effortless, allowing you to focus on the experience, not the logistics.",
            image: "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1000&q=80", // Luxury stay dinner
            title: "The Eleqt Approach"
        },
        {
            text: "Whether it’s a romantic escape, a soulful retreat, an international getaway, or an adventure-filled holiday, Eleqt transforms travel into a refined and memorable experience - where every detail is considered, and every journey feels truly yours.",
            image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1000&q=80", // Soulful retreat/Lake
            title: "Your Journey, Refined"
        }
    ];

    const experienceItems = [
        { icon: Map, title: "Personalized journeys" },
        { icon: Home, title: "Curated stays" },
        { icon: Compass, title: "Seamless travel" },
        { icon: Sparkles, title: "Immersive experiences" }
    ];

    return (
        <div className="min-h-screen bg-white">
            <Navbar />
            {/* 1. HERO SECTION */}
            <section className="relative h-[80vh] flex items-center justify-center overflow-hidden bg-black">
                <motion.div
                    style={{ y: y1 }}
                    className="absolute inset-0 z-0"
                >
                    <motion.img
                        src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=1920&q=80"
                        alt="Luxury Travel"
                        className="w-full h-[110%] object-cover"
                        initial={{ scale: 1.1 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 10, ease: "easeOut" }}
                    />
                    <div className="absolute inset-0 bg-black/40" />
                </motion.div>

                <div className="relative z-10 text-center px-6">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 tracking-tight"
                    >
                        About Us
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.3 }}
                        className="text-xl md:text-2xl text-white/90 font-light tracking-widest uppercase italic"
                    >
                        Crafting Experiences, Not Trips
                    </motion.p>
                </div>

                <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
                    <motion.div
                        animate={{ y: [0, 10, 0] }}
                        transition={{ repeat: Infinity, duration: 2 }}
                        className="w-0.5 h-12 bg-white/30 rounded-full overflow-hidden"
                    >
                        <motion.div
                            animate={{ y: [-48, 48] }}
                            transition={{ repeat: Infinity, duration: 2 }}
                            className="w-full h-1/2 bg-white"
                        />
                    </motion.div>
                </div>
            </section>

            {/* 2. STORY SECTIONS */}
            <div className="py-24 space-y-32 md:space-y-48">
                {sections.map((section, index) => (
                    <section key={index} className="max-w-7xl mx-auto px-6">
                        <div className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-12 lg:gap-24`}>
                            <motion.div
                                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.8 }}
                                className="w-full md:w-1/2 space-y-6"
                            >
                                <span className="text-amber-700 font-bold tracking-[0.2em] uppercase text-sm">{section.title}</span>
                                <p className="text-xl md:text-2xl text-gray-800 leading-relaxed font-light">
                                    {section.text}
                                </p>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 1 }}
                                className="w-full md:w-1/2 relative group"
                            >
                                <div className="aspect-[4/3] overflow-hidden rounded-2xl shadow-2xl">
                                    <motion.img
                                        whileHover={{ scale: 1.05 }}
                                        transition={{ duration: 0.6 }}
                                        src={section.image}
                                        alt={section.title}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                {/* Floating Premium UI Elements */}
                                <motion.div
                                    animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
                                    transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                                    className={`absolute -bottom-8 ${index % 2 === 0 ? '-right-8' : '-left-8'} hidden lg:block w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-xl z-20`}
                                >
                                    <img src={section.image} alt="detail" className="w-full h-full object-cover blur-[1px] opacity-80" />
                                </motion.div>
                            </motion.div>
                        </div>
                    </section>
                ))}
            </div>

            {/* 3. HIGHLIGHT STRIP */}
            <section className="relative py-32 md:py-48 overflow-hidden">
                <div className="absolute inset-0 bg-neutral-900" />
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(180,140,80,0.3)_0%,transparent_70%)]" />
                </div>

                <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
                    <motion.h2
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-3xl md:text-5xl lg:text-6xl font-serif italic text-white leading-tight"
                    >
                        “Because every journey has a story - we help you tell it beautifully.”
                    </motion.h2>
                    <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: "100px" }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="h-1 bg-amber-700 mx-auto mt-12"
                    />
                </div>
            </section>

            {/* 4. EXPERIENCE GRID */}
            <section className="py-32 bg-gray-50 px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">What Defines Eleqt</h2>
                        <div className="w-20 h-1 bg-amber-700 mx-auto" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                        {experienceItems.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                whileHover={{ y: -10, scale: 1.02 }}
                                className="flex flex-col items-center text-center p-8 bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group"
                            >
                                <div className="w-16 h-16 bg-amber-50 rounded-full flex items-center justify-center mb-6 group-hover:bg-amber-700 transition-colors duration-300">
                                    <item.icon className="w-8 h-8 text-amber-700 group-hover:text-white transition-colors duration-300" />
                                </div>
                                <h3 className="text-lg font-bold text-gray-900 uppercase tracking-wider">{item.title}</h3>
                            </motion.div>
                        ))}
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
                    <Link to="/">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-white text-neutral-900 px-10 py-4 rounded-full font-bold text-lg inline-flex items-center gap-3 transition-colors hover:bg-amber-50 group relative z-10 shadow-2xl"
                        >
                            Explore Packages
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                        </motion.button>
                    </Link>
                </motion.div>
            </section>

            {/* Floating Subtle Circles (Premium Touch) */}
            <div className="fixed inset-0 pointer-events-none z-[-1] opacity-50">
                <motion.div
                    animate={{ x: [0, 50, 0], y: [0, 80, 0] }}
                    transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
                    className="absolute top-1/4 left-10 w-24 h-24 rounded-full border border-amber-200/20"
                />
                <motion.div
                    animate={{ x: [0, -40, 0], y: [0, -100, 0] }}
                    transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
                    className="absolute bottom-1/4 right-20 w-48 h-48 rounded-full border border-amber-200/20"
                />
            </div>
        </div>
    );
};

export default About;
