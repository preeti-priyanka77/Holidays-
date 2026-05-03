import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const SECTIONS = [
    { id: 'conduct', title: '1. General Conduct' },
    { id: 'identification', title: '2. Identification & Protocol' },
    { id: 'occupancy', title: '3. Occupancy & Visitors' },
    { id: 'liability', title: '4. Damages & Liability' },
    { id: 'safety', title: '5. Safety & Prohibited Activities' }
];

function GuestPolicy() {
    const [activeSection, setActiveSection] = useState('conduct');

    useEffect(() => {
        window.scrollTo(0, 0);

        const handleScroll = () => {
            const scrollPosition = window.scrollY + 100;
            for (const section of SECTIONS) {
                const element = document.getElementById(section.id);
                if (element) {
                    const offsetTop = element.offsetTop;
                    const height = element.offsetHeight;
                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
                        setActiveSection(section.id);
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            window.scrollTo({
                top: element.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    };

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <div className="pt-32 pb-16 border-b border-gray-100">
                <div className="max-w-7xl mx-auto px-6 md:px-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-4xl md:text-6xl font-black text-gray-900 tracking-tighter mb-4">
                            Guest Policy
                        </h1>
                        <p className="text-gray-400 font-medium text-lg">Guiding Your Premium Travel Experience • Last Updated: April 01, 2026</p>
                    </motion.div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 md:px-10 py-16 relative">
                <div className="flex flex-col lg:flex-row gap-16">

                    {/* Sticky Sidebar ToC (Desktop Only) */}
                    <aside className="hidden lg:block w-72 sticky top-32 h-fit">
                        <nav className="space-y-2">
                            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 mb-6">Policy Chapters</p>
                            {SECTIONS.map((section) => (
                                <button
                                    key={section.id}
                                    onClick={() => scrollToSection(section.id)}
                                    className={`block w-full text-left py-2.5 text-sm font-bold transition-all border-l-2 pl-4 ${activeSection === section.id
                                        ? 'border-amber-500 text-amber-600'
                                        : 'border-transparent text-gray-400 hover:text-gray-900 hover:border-gray-200'
                                        }`}
                                >
                                    {section.title}
                                </button>
                            ))}
                        </nav>

                        <div className="mt-16 p-8 bg-gray-50 border border-gray-100 rounded-none text-center">
                            <p className="text-[10px] font-bold uppercase tracking-widest text-amber-600 mb-3">Questions?</p>
                            <p className="text-xs text-gray-500 font-medium leading-relaxed mb-6">For detailed inquiries regarding hotel protocols or special requests, please contact us.</p>
                            <Link to="/contact">
                                <button className="w-full py-3 bg-gray-900 text-white text-[10px] font-black uppercase tracking-widest hover:bg-amber-500 transition-colors rounded-none">
                                    Support Concierge
                                </button>
                            </Link>
                        </div>
                    </aside>

                    {/* Main Content Content */}
                    <main className="flex-1 max-w-3xl">
                        <div className="space-y-24 font-sans">

                            <motion.section
                                id="conduct"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="space-y-6"
                            >
                                <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">1. General Conduct</h2>
                                <div className="w-12 h-0.5 bg-amber-500/30" />
                                <p className="text-gray-600 leading-relaxed text-base font-medium">
                                    At <strong className="text-gray-900">Eleqt Holidays & Leisure</strong>, we strive to provide a serene and exclusive environment for all our travellers. Guests are expected to maintain décorum and respect the privacy of fellow travellers and local communities. Any behavior deemed disruptive or harmful may lead to immediate termination of the service without refund.
                                </p>
                            </motion.section>

                            <motion.section
                                id="identification"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="space-y-6"
                            >
                                <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">2. Identification & Protocol</h2>
                                <div className="w-12 h-0.5 bg-amber-500/30" />
                                <div className="space-y-4">
                                    <p className="text-gray-600 leading-relaxed text-base font-medium">
                                        As per government regulations, valid government-issued photo identification (Aadhar Card, PAN Card, Passport, or Driving License) is mandatory for all guests at the time of check-in. Foreign nationals must provide a valid Passport and Visa.
                                    </p>
                                    <p className="text-gray-600 leading-relaxed text-base font-medium">
                                        Standard check-in time is 2:00 PM and check-out is 11:00 AM, subject to specific hotel and destination policies.
                                    </p>
                                </div>
                            </motion.section>

                            <motion.section
                                id="occupancy"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="space-y-6"
                            >
                                <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">3. Occupancy & Visitors</h2>
                                <div className="w-12 h-0.5 bg-amber-500/30" />
                                <p className="text-gray-600 leading-relaxed text-base font-medium">
                                    Room occupancy is strictly limited to the number of guests registered at the time of booking. Extra guests or visitors are not permitted in guest rooms after 10:00 PM without prior authorization and additional charges.
                                </p>
                            </motion.section>

                            <motion.section
                                id="liability"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="space-y-6"
                            >
                                <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">4. Damages & Liability</h2>
                                <div className="w-12 h-0.5 bg-amber-500/30" />
                                <p className="text-gray-600 leading-relaxed text-base font-medium">
                                    Guests are responsible for any damages caused to the property of stay or transport vehicles during their journey. Eleqt Holidays & Leisure is not liable for personal belongings lost or damaged during the trip.
                                </p>
                            </motion.section>

                            <motion.section
                                id="safety"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="space-y-6"
                            >
                                <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">5. Safety & Prohibited Activities</h2>
                                <div className="w-12 h-0.5 bg-amber-500/30" />
                                <p className="text-gray-600 leading-relaxed text-base font-medium">
                                    Smoking is strictly prohibited in non-smoking rooms and enclosed transport vehicles. Possession or use of illegal substances, weapons, or engagement in unlawful activities is strictly forbidden and will be reported to appropriate authorities.
                                </p>
                            </motion.section>

                        </div>

                        <div className="mt-32 pt-16 border-t border-gray-100">
                            <p className="text-[10px] text-gray-400 font-bold uppercase tracking-[0.4em]">  2026 © ELEQT HOLIDAYS & LEISURE • M/S PSYNUXSOFTWARE PVT LTD</p>
                        </div>
                    </main>
                </div>
            </div>
        </div>
    );
}

export default GuestPolicy;
