import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';

const SECTIONS = [
  { id: 'introduction', title: 'Introduction' },
  { id: 'information-collect', title: '1. Information We Collect' },
  { id: 'how-we-use', title: '2. How We Use Your Information' },
  { id: 'sharing-info', title: '3. Sharing of Information' },
  { id: 'data-security', title: '4. Data Security' },
  { id: 'data-retention', title: '5. Data Retention' },
  { id: 'additional-disclosure', title: 'Information Sharing' },
  { id: 'security-measures', title: 'Information Security' },
  { id: 'policy-changes', title: 'Changes to Privacy Policy' }
];

function PrivacyPolicy() {
  const [activeSection, setActiveSection] = useState('introduction');

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
        top: element.offsetTop - 100,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <div className="pt-32 pb-16 bg-neutral-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-black text-gray-900 tracking-tighter mb-4">
              Privacy Policy
            </h1>
            <p className="text-gray-400 font-medium text-lg italic tracking-widest uppercase">Eleqt Holidays & Leisure • Premium Travel Experiences</p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-10 py-24 relative">
        <div className="flex flex-col lg:flex-row gap-20">

          {/* Sticky Sidebar ToC (Desktop Only) */}
          <aside className="hidden lg:block w-72 sticky top-32 h-fit">
            <nav className="space-y-1">
              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-amber-700 mb-8">Legal Framework</p>
              {SECTIONS.map((section) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className={`block w-full text-left py-3 text-sm font-bold transition-all border-l-2 pl-6 ${activeSection === section.id
                    ? 'border-amber-600 text-amber-700 bg-amber-50/50'
                    : 'border-transparent text-gray-400 hover:text-gray-900 hover:border-gray-200'
                    }`}
                >
                  {section.title}
                </button>
              ))}
            </nav>
          </aside>

          {/* Main Content */}
          <main className="flex-1 max-w-4xl">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="space-y-6"
            >

              {/* Introduction */}
              <section id="introduction" className="space-y-8">
                <div className="space-y-6 text-gray-700 leading-8 text-[17px] font-light">
                  <p>
                    The terms "We" / "Us" / "Our"/ “Company” individually and collectively refer to M/s Psynuxsoftware Pvt Ltd, the parent company that owns and operates "Eleqt Holidays & Leisure", and the terms "You" / "Your" / "Yourself" refer to the individual accessing or using our services through the website or Mobile Application (“Platform”).
                  </p>
                  <p>
                    This Privacy Policy is an electronic record in the form of an electronic contract formed under the Information Technology Act, 2000, and the rules made thereunder, and the amended provisions of electronic documents/records in various statutes as amended by the Information Technology Act, 2000. This Privacy Policy does not require any physical, electronic, or digital signature.
                  </p>
                  <p>
                    This is a legally binding document between You and the Company (both terms defined above). The terms of this Privacy Policy will be effective upon Your acceptance of the same (directly or indirectly in electronic form, by using the Company’s “Website” or by the Mobile Application) and will govern the relationship between You and the Company for Your use of the Website.
                  </p>
                  <p>
                    This document is published and shall be construed following the provisions of the Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011, under the Information Technology Act, 2000, which require publishing of the Privacy Policy for collection, use, storage, and transfer of sensitive personal data or information.
                  </p>
                  <p>
                    Please read this Privacy Policy carefully. By using the Website, you indicate that you understand, agree, and consent to this Privacy Policy. If you do not agree with the terms of this Privacy Policy, please do not use the Website.
                  </p>
                  <p>
                    By providing Us with Your Information or by making use of the facilities provided by Us, you hereby give consent to the collection, storage, processing, and transfer of any or all of your “Personal Information” and “Non-Personal Information” by Us as specified under this Privacy Policy. You further agree that such collection, use, storage, and transfer of Your Information shall not cause any loss or wrongful gain to You or any other person.
                  </p>
                </div>
              </section>

              <hr className="border-gray-100" />

              {/* 1. Information We Collect */}
              <section id="information-collect" className="space-y-10">
                <h2 className="text-3xl font-bold text-gray-900 tracking-tight">1. Information We Collect</h2>
                <p className="text-gray-700 leading-8 text-[17px] font-light">
                  To avail of certain Services on Our Website, users may be required to provide certain information, namely:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  <div className="space-y-2">
                    <h3 className="text-lg font-bold text-amber-800 uppercase tracking-widest">User Information</h3>
                    <ul className="space-y-2 text-gray-600 font-light list-disc pl-5">
                      <li>Your name</li>
                      <li>Your mobile number</li>
                      <li>Your email address</li>
                      <li>Any Identification details (if required)</li>
                    </ul>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-lg font-bold text-amber-800 uppercase tracking-widest">Travel Information</h3>
                    <ul className="space-y-2 text-gray-600 font-light list-disc pl-5">
                      <li>Your travel preferences</li>
                      <li>Your itineraries/ tour plans</li>
                      <li>Your booking details</li>
                      <li>Any special requests</li>
                    </ul>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-lg font-bold text-amber-800 uppercase tracking-widest">Payment Information</h3>
                    <ul className="space-y-2 text-gray-600 font-light list-disc pl-5">
                      <li>Transaction details (processed securely via third-party providers)</li>
                    </ul>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-lg font-bold text-amber-800 uppercase tracking-widest">Technical Information</h3>
                    <ul className="space-y-2 text-gray-600 font-light list-disc pl-5">
                      <li>Your IP address</li>
                      <li>Your browser type</li>
                      <li>Your device information</li>
                      <li>Website usage data</li>
                    </ul>
                  </div>
                </div>
              </section>

              <hr className="border-gray-100" />

              {/* 2. How We Use */}
              <section id="how-we-use" className="space-y-8">
                <h2 className="text-3xl font-bold text-gray-900 tracking-tight">2. How We Use Your Information</h2>
                <div className="space-y-4">
                  <p className="text-gray-700 leading-8 text-[17px] font-light">Your information is used to:</p>
                  <ul className="space-y-3 text-gray-700 font-light list-disc pl-5">
                    <li>To process bookings and deliver travel services</li>
                    <li>To communicate confirmations, updates, and support</li>
                    <li>To personalize your travel experience</li>
                    <li>To improve our services and website functionality</li>
                    <li>To share relevant offers, promotions, or updates (only where applicable)</li>
                  </ul>
                </div>
              </section>

              <hr className="border-gray-100" />

              {/* 3. Sharing of Information */}
              <section id="sharing-info" className="space-y-8">
                <h2 className="text-3xl font-bold text-gray-900 tracking-tight">3. Sharing of Information</h2>
                <div className="space-y-4">
                  <p className="text-gray-700 leading-8 text-[17px] font-light">We may share your information with:</p>
                  <ul className="space-y-3 text-gray-700 font-light list-disc pl-5">
                    <li>Hotels, airlines, transport providers, and travel partners</li>
                    <li>Payment gateways and financial institutions</li>
                    <li>Service providers assisting in operations and communication</li>
                  </ul>
                  <p className="text-gray-600 italic font-medium pt-4 bg-neutral-50 p-6 border-l-4 border-amber-600">
                    All data sharing is strictly limited to fulfilling your travel requirements and improving service delivery.
                  </p>
                </div>
              </section>

              <hr className="border-gray-100" />

              {/* 4. Data Security */}
              <section id="data-security" className="space-y-8">
                <h2 className="text-3xl font-bold text-gray-900 tracking-tight">4. Data Security</h2>
                <div className="space-y-6">
                  <p className="text-gray-700 leading-8 text-[17px] font-light">
                    We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, misuse, or disclosure. Including:
                  </p>
                  <ul className="space-y-4 text-gray-700 font-light list-disc pl-5">
                    <li>Secure servers and restricted access</li>
                    <li>Encryption and internal safeguards</li>
                  </ul>
                </div>
              </section>

              <hr className="border-gray-100" />

              {/* 5. Data Retention */}
              <section id="data-retention" className="space-y-8">
                <h2 className="text-3xl font-bold text-gray-900 tracking-tight">5. Data Retention</h2>
                <div className="space-y-6">
                  <p className="text-gray-700 leading-8 text-[17px] font-light">
                    We retain your information only for as long as necessary to:
                  </p>
                  <ul className="space-y-4 text-gray-700 font-light list-disc pl-5">
                    <li>Fulfil the bookings and services</li>
                    <li>Comply with legal and regulatory requirements</li>
                    <li>Resolve disputes and enforce agreements</li>
                  </ul>
                  <p className="text-gray-700 leading-8 text-[17px] font-light pt-6">
                    The Information supplied by the users enables us to improve Our Services and provide you with the most user-friendly experience.
                  </p>
                  <p className="text-gray-700 leading-8 text-[17px] font-light">
                    Any information will not be considered sensitive if it is freely available and accessible in the public domain or is furnished under the Right to Information Act, 2005, or any other law for the time being in force.
                  </p>
                  <p className="text-gray-700 leading-8 text-[17px] font-light">
                    In addition to any Personal Information or other information that You choose to submit to Us, our third-party service provider and we may use a variety of technologies that automatically (or passively) collect certain information whenever You visit or interact with the Services (“Usage Information”). This Usage Information may include the browser that you are using, the URL that referred you to Our Services, and all of the areas within Our Services that you visit and interact with, among other information.
                  </p>
                  <p className="text-gray-700 leading-8 text-[17px] font-light">
                    All required information is service-dependent, and we may use the above-said Information We Collect to maintain, protect, and improve Our Services and for developing new services. We will use the Personal Information you have chosen to provide us for the purpose for which you provided it. We will not use it for any other purpose without your consent. We might, on occasion, use this information to notify you of any important changes or any special promotions that may be of interest to you. You can opt out of receiving such material at any time by emailing us and asking to be removed from the notification or mailing list.
                  </p>
                </div>
              </section>

              <hr className="border-gray-100" />

              {/* Information Sharing Disclosure */}
              <section id="additional-disclosure" className="space-y-8">
                <h2 className="text-3xl font-bold text-gray-900 tracking-tight">Information Sharing</h2>
                <div className="space-y-6 text-gray-700 leading-8 text-[17px] font-light">
                  <p>
                    There will be occasions when it will be necessary for Us to disclose Your Personal Information to third parties. We may be required to disclose Your Personal Information to third parties to provide the Services You have requested. However, the disclosure will only be made where it is necessary to fulfil the purpose for which you disclosed Your Personal Information. Other than as stated above, we do not disclose Personal Information that You may give Us to any organisation or person outside Our Company unless You have authorized Us to do so.
                  </p>
                  <p>
                    We will share the sensitive Personal Information with any third party without obtaining the prior consent of the User in the following limited circumstances:
                  </p>
                  <ul className="space-y-4 text-gray-700 font-light list-disc pl-5">
                    <li>
                      When it is requested or required by law or by any court or governmental agency or authority to disclose, for verification of identity, or the prevention, detection, investigation, including cyber incidents, or for prosecution and punishment of offences. These disclosures are made in good faith and in the belief that such disclosure is reasonably necessary for enforcing these Terms, for complying with the applicable laws and regulations.
                    </li>
                    <li>
                      We propose to share such information within its group companies and officers and employees of such group companies for the purpose of processing Personal Information on its behalf. We also ensure that these recipients of such information agree to process such information based on our instructions and in compliance with this Privacy Policy and any other appropriate confidentiality and security measures.
                    </li>
                  </ul>
                </div>
              </section>

              <hr className="border-gray-100" />

              {/* Information Security Measures */}
              <section id="security-measures" className="space-y-8">
                <h2 className="text-3xl font-bold text-gray-900 tracking-tight">Information Security</h2>
                <div className="space-y-6 text-gray-700 leading-8 text-[17px] font-light">
                  <p>
                    We take appropriate security measures to protect against unauthorised access to or unauthorised alteration, disclosure or destruction of data. These include internal reviews of our data collection, storage and processing practices and security measures, including appropriate encryption and physical security measures to guard against unauthorized access to systems where we store personal data.
                  </p>
                  <p>
                    All information gathered on Our Website is securely stored within our controlled database. The database is stored on servers secured behind a firewall; access to the servers is password-protected and strictly limited. However, as effective as our security measures are, no security system is impenetrable. We cannot guarantee the security of our database, nor can we guarantee that the information you supply will not be intercepted while being transmitted to Us over the Internet.
                  </p>
                </div>
              </section>

              <hr className="border-gray-100" />

              {/* Changes to Privacy Policy */}
              <section id="policy-changes" className="space-y-8 pb-20">
                <h2 className="text-3xl font-bold text-gray-900 tracking-tight">Changes to Privacy Policy</h2>
                <div className="space-y-6 text-gray-700 leading-8 text-[17px] font-light">
                  <p>
                    From time to time, we may amend or update this Privacy Policy. When this occurs, we will post the new version of the Privacy Policy on Our Website. You can periodically review this Privacy Policy so that you remain informed as to how we are protecting Your Personal Information.
                  </p>
                </div>
              </section>

            </motion.div>

            {/* Footer Contact Strip */}
            <div className="mt-20 p-12 bg-neutral-900 text-white rounded-2xl shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-64 h-64 bg-amber-600/10 rounded-full blur-3xl group-hover:bg-amber-600/20 transition-all duration-700" />
              <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10 text-center md:text-left">
                <div>
                  <h4 className="text-2xl font-bold mb-3 tracking-tight">Privacy Concierge</h4>
                  <p className="text-gray-400 font-light text-lg">Have questions about your data? Our team is dedicated to your security.</p>
                </div>
                <a
                  href="mailto:privacy@eleqt.com"
                  className="bg-white text-gray-900 px-10 py-4 rounded-full font-black uppercase text-[12px] tracking-[0.2em] hover:bg-amber-600 hover:text-white transition-all transform hover:scale-105 active:scale-95 shadow-xl"
                >
                  Contact Security Team
                </a>
              </div>
            </div>

            <div className="mt-16 text-center">
              <p className="text-[10px] text-gray-400 font-bold uppercase tracking-[0.4em]">
                © 2026 ELEQT HOLIDAYS & LEISURE • OPERATED BY M/S PSYNUXSOFTWARE PVT LTD
              </p>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default PrivacyPolicy;
