import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  LayoutDashboard, 
  Briefcase, 
  Heart, 
  Settings, 
  LogOut, 
  User as UserIcon,
  ChevronRight,
  TrendingUp,
  Clock,
  CheckCircle2,
  Calendar,
  Users,
  Download,
  Trash2,
  Mail,
  Phone,
  Lock,
  Camera
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../lib/AuthContext';
import { useEffect } from 'react';

// --- MOCK DATA ---
const MOCK_BOOKINGS = [
  {
    id: 'BK-7721',
    title: 'Bali Ultimate Escape: Private Villa & Beach Tour',
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800&q=80',
    dates: 'Oct 12 - Oct 20, 2026',
    travelers: 2,
    price: 84500,
    status: 'Confirmed'
  },
  {
    id: 'BK-5510',
    title: 'Dubai Desert Safari & Burj Khalifa Luxury Experience',
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80',
    dates: 'Dec 05 - Dec 11, 2026',
    travelers: 3,
    price: 125000,
    status: 'Pending'
  }
];

const MOCK_SAVED = [
  {
    slug: 'vietnam-adventure',
    title: 'Vietnam: Ancient Cities & Ha Long Bay Cruise',
    image: 'https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=800&q=80',
    price: 62000,
  }
];

// --- SUB-COMPONENTS ---

function DashboardCard({ title, value, icon, color }: { title: string; value: string | number; icon: React.ReactNode; color: string }) {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className="bg-white p-6 rounded-[28px] border border-gray-100 shadow-sm flex items-center gap-5"
    >
       <div className={`w-14 h-14 rounded-2xl ${color} flex items-center justify-center shrink-0`}>
          {icon}
       </div>
       <div>
          <p className="text-xs font-black text-gray-400 uppercase tracking-widest leading-none mb-2">{title}</p>
          <p className="text-3xl font-black text-[#212529] tracking-tighter">{value}</p>
       </div>
    </motion.div>
  );
}

function BookingCard({ booking }: { booking: any }) {
  const statusColors: any = {
    Confirmed: 'bg-green-50 text-green-600',
    Pending: 'bg-amber-50 text-amber-600',
    Cancelled: 'bg-red-50 text-red-600'
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-[32px] border border-gray-100 p-6 flex flex-col md:flex-row gap-6 hover:shadow-xl hover:shadow-blue-900/5 transition-all group"
    >
       <div className="w-full md:w-[200px] h-[150px] rounded-2xl overflow-hidden shrink-0">
          <img src={booking.image} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
       </div>
       <div className="flex-1 flex flex-col justify-between">
          <div>
             <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                <span className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest ${statusColors[booking.status]}`}>
                   {booking.status}
                </span>
                <span className="text-[11px] font-bold text-gray-400 uppercase tracking-widest">ID: {booking.id}</span>
             </div>
             <h3 className="text-xl font-black text-[#212529] tracking-tight leading-snug mb-3">{booking.title}</h3>
             <div className="flex flex-wrap gap-6">
                <div className="flex items-center gap-2 text-gray-500">
                   <Calendar size={16} className="text-gray-300" />
                   <span className="text-sm font-bold">{booking.dates}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-500">
                   <Users size={16} className="text-gray-300" />
                   <span className="text-sm font-bold">{booking.travelers} Guests</span>
                </div>
             </div>
          </div>
          <div className="mt-6 pt-5 border-t border-gray-50 flex flex-wrap items-center justify-between gap-4">
             <div className="flex items-baseline gap-1">
                <span className="text-gray-400 text-xs font-bold">Total Paid:</span>
                <span className="text-xl font-black text-[#212529]">₹{booking.price.toLocaleString()}</span>
             </div>
             <div className="flex gap-3">
                <button className="h-10 px-5 rounded-xl border border-gray-100 text-sm font-bold text-gray-600 hover:bg-gray-50 transition-colors">
                   View Details
                </button>
                <button className="h-10 px-5 rounded-xl bg-blue-50 text-[#0056b3] text-sm font-black flex items-center gap-2 hover:bg-blue-100 transition-colors">
                   <Download size={16} /> Invoice
                </button>
             </div>
          </div>
       </div>
    </motion.div>
  );
}

// --- MAIN PAGE ---

function Profile() {
  const { user, logout, isLoading } = useAuth();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('Overview');

  useEffect(() => {
    if (!isLoading && !user) {
      navigate('/login');
    }
  }, [user, isLoading, navigate]);

  if (isLoading || !user) return null;

  const menuItems = [
    { id: 'Overview', icon: <LayoutDashboard size={20} /> },
    { id: 'My Bookings', icon: <Briefcase size={20} /> },
    { id: 'Saved Packages', icon: <Heart size={20} /> },
    { id: 'Account Settings', icon: <Settings size={20} /> },
  ];

  return (
    <div className="min-h-screen bg-[#fcfcfc] pt-24">
      <div className="max-w-[1400px] mx-auto px-6 h-full flex flex-col lg:flex-row gap-0 lg:gap-10">
        
        {/* LEFT SIDEBAR */}
        <aside className="w-full lg:w-[320px] lg:h-[calc(100vh-120px)] lg:sticky lg:top-28 pb-10">
           <div className="bg-white rounded-[40px] border border-gray-100 shadow-xl shadow-blue-900/5 h-full overflow-hidden flex flex-col">
              
              <div className="p-10 text-center border-b border-gray-50">
                 <div className="relative inline-block mb-6">
                    <img 
                      src={user.avatar} 
                      className="w-24 h-24 rounded-[32px] border-4 border-blue-50 shadow-md object-cover" 
                    />
                    <button className="absolute -bottom-2 -right-2 w-10 h-10 bg-[#212529] text-white rounded-2xl flex items-center justify-center border-4 border-white hover:scale-110 transition-transform">
                       <Camera size={16} />
                    </button>
                 </div>
                 <h2 className="text-xl font-black text-[#212529] mb-1">{user.name}</h2>
                 <p className="text-xs font-bold text-gray-400 truncate px-2">{user.email}</p>
              </div>

              <div className="flex-1 p-4 space-y-2 overflow-y-auto">
                 {menuItems.map((item) => (
                   <button 
                     key={item.id}
                     onClick={() => setActiveTab(item.id)}
                     className={`w-full flex items-center gap-4 px-6 py-4 rounded-2xl transition-all group ${
                       activeTab === item.id 
                         ? 'bg-[#0056b3] text-white shadow-lg shadow-blue-100' 
                         : 'text-gray-500 hover:bg-gray-50 hover:text-[#0056b3]'
                     }`}
                   >
                      <div className={activeTab === item.id ? 'text-white' : 'text-gray-300 group-hover:text-[#0056b3]'}>
                         {item.icon}
                      </div>
                      <span className="font-black text-[15px]">{item.id}</span>
                      {activeTab === item.id && (
                        <motion.div layoutId="activeInd" className="ml-auto"><ChevronRight size={18} /></motion.div>
                      )}
                   </button>
                 ))}
              </div>

              <div className="p-4 mt-auto">
                 <button 
                   onClick={logout}
                   className="w-full flex items-center gap-4 px-6 py-4 rounded-2xl text-red-500 font-black hover:bg-red-50 transition-colors group"
                 >
                    <LogOut size={20} className="text-red-300 group-hover:text-red-500" />
                    <span>Logout Account</span>
                 </button>
              </div>
           </div>
        </aside>

        {/* RIGHT CONTENT */}
        <main className="flex-1 pb-20">
           <AnimatePresence mode="wait">
              {activeTab === 'Overview' && (
                <motion.div
                  key="overview"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-10"
                >
                   <div className="flex items-center justify-between">
                      <h1 className="text-4xl font-black text-[#212529] tracking-tighter">Account <span className="text-[#0056b3]">Overview</span></h1>
                      <div className="hidden md:flex items-center gap-3 bg-white px-4 py-2 rounded-2xl border border-gray-100">
                         <TrendingUp size={16} className="text-green-500" />
                         <span className="text-xs font-black text-gray-400 uppercase tracking-widest">Premium Member</span>
                      </div>
                   </div>

                   <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <DashboardCard title="Total Trips" value={14} icon={<TrendingUp size={28} />} color="bg-blue-50 text-[#0056b3]" />
                      <DashboardCard title="Upcoming" value={2} icon={<Clock size={28} />} color="bg-amber-50 text-amber-500" />
                      <DashboardCard title="Completed" value={11} icon={<CheckCircle2 size={28} />} color="bg-green-50 text-green-500" />
                   </div>

                   <div className="space-y-6">
                      <div className="flex items-center justify-between">
                         <h2 className="text-xl font-black text-[#212529]">Recent Travel Activity</h2>
                         <button onClick={() => setActiveTab('My Bookings')} className="text-sm font-black text-[#0056b3] uppercase tracking-widest hover:underline">View All</button>
                      </div>
                      <div className="grid grid-cols-1 gap-6">
                         <BookingCard booking={MOCK_BOOKINGS[0]} />
                      </div>
                   </div>
                </motion.div>
              )}

              {activeTab === 'My Bookings' && (
                <motion.div
                  key="bookings"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-10"
                >
                   <h1 className="text-4xl font-black text-[#212529] tracking-tighter">My <span className="text-[#0056b3]">Bookings</span></h1>
                   <div className="space-y-6">
                      {MOCK_BOOKINGS.map(booking => (
                        <BookingCard key={booking.id} booking={booking} />
                      ))}
                   </div>
                </motion.div>
              )}

              {activeTab === 'Saved Packages' && (
                <motion.div
                  key="saved"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-10"
                >
                   <h1 className="text-4xl font-black text-[#212529] tracking-tighter">Saved <span className="text-[#ff4d6d]">Packages</span></h1>
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      {MOCK_SAVED.map(item => (
                        <motion.div 
                          key={item.slug}
                          whileHover={{ y: -8 }}
                          className="bg-white rounded-[32px] overflow-hidden border border-gray-100 shadow-sm relative group"
                        >
                           <div className="h-56 relative overflow-hidden">
                              <img src={item.image} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                              <button className="absolute top-5 right-5 w-10 h-10 bg-white/90 backdrop-blur rounded-2xl flex items-center justify-center text-red-500 shadow-lg hover:bg-red-500 hover:text-white transition-all">
                                 <Trash2 size={18} />
                              </button>
                           </div>
                           <div className="p-8">
                              <h3 className="text-xl font-black text-[#212529] leading-tight mb-4">{item.title}</h3>
                              <div className="flex items-center justify-between">
                                 <div className="flex flex-col">
                                    <span className="text-[10px] text-gray-400 font-black uppercase tracking-widest">Base Starting</span>
                                    <span className="text-2xl font-black text-[#212529]">₹{item.price.toLocaleString()}</span>
                                 </div>
                                 <button className="bg-[#212529] text-white px-6 py-3 rounded-xl font-black text-xs uppercase tracking-widest hover:bg-[#0056b3] transition-colors">
                                    Book Now
                                 </button>
                              </div>
                           </div>
                        </motion.div>
                      ))}
                   </div>
                </motion.div>
              )}

              {activeTab === 'Account Settings' && (
                <motion.div
                  key="settings"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-10"
                >
                   <h1 className="text-4xl font-black text-[#212529] tracking-tighter">Profile <span className="text-[#0056b3]">Settings</span></h1>
                   
                   <div className="bg-white rounded-[40px] border border-gray-100 p-10 shadow-xl shadow-blue-900/5">
                      <form className="grid grid-cols-1 md:grid-cols-2 gap-10">
                         <div className="space-y-6">
                            <h3 className="text-lg font-black text-[#212529] flex items-center gap-3">
                               <UserIcon size={20} className="text-blue-500" /> General Information
                            </h3>
                            <div className="space-y-4">
                               <div className="space-y-1">
                                  <label className="text-[11px] font-black text-gray-400 uppercase tracking-widest ml-1">Display Name</label>
                                  <div className="relative group">
                                     <UserIcon size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300 group-focus-within:text-[#0056b3] transition-colors" />
                                     <input type="text" defaultValue={user.name} className="w-full h-14 bg-gray-50/50 border border-gray-100 pl-12 pr-6 rounded-2xl outline-none focus:bg-white focus:border-[#0056b3] transition-all font-bold text-gray-700" />
                                  </div>
                               </div>
                               <div className="space-y-1">
                                  <label className="text-[11px] font-black text-gray-400 uppercase tracking-widest ml-1">Email Address</label>
                                  <div className="relative group">
                                     <Mail size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300 group-focus-within:text-[#0056b3] transition-colors" />
                                     <input type="email" defaultValue={user.email} className="w-full h-14 bg-gray-50/50 border border-gray-100 pl-12 pr-6 rounded-2xl outline-none focus:bg-white focus:border-[#0056b3] transition-all font-bold text-gray-700" />
                                  </div>
                               </div>
                               <div className="space-y-1">
                                  <label className="text-[11px] font-black text-gray-400 uppercase tracking-widest ml-1">Contact Phone</label>
                                  <div className="relative group">
                                     <Phone size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300 group-focus-within:text-[#0056b3] transition-colors" />
                                     <input type="text" placeholder="+91 91234 56789" className="w-full h-14 bg-gray-50/50 border border-gray-100 pl-12 pr-6 rounded-2xl outline-none focus:bg-white focus:border-[#0056b3] transition-all font-bold text-gray-700" />
                                  </div>
                               </div>
                            </div>
                         </div>

                         <div className="space-y-6">
                            <h3 className="text-lg font-black text-[#212529] flex items-center gap-3">
                               <Lock size={20} className="text-[#ff4d6d]" /> Change Password
                            </h3>
                            <div className="space-y-4">
                               <div className="space-y-1">
                                  <label className="text-[11px] font-black text-gray-400 uppercase tracking-widest ml-1">Current Password</label>
                                  <input type="password" placeholder="••••••••" className="w-full h-14 bg-gray-50/50 border border-gray-100 px-6 rounded-2xl outline-none focus:bg-white focus:border-[#ff4d6d] transition-all font-bold" />
                               </div>
                               <div className="space-y-1">
                                  <label className="text-[11px] font-black text-gray-400 uppercase tracking-widest ml-1">New Password</label>
                                  <input type="password" placeholder="••••••••" className="w-full h-14 bg-gray-50/50 border border-gray-100 px-6 rounded-2xl outline-none focus:bg-white focus:border-[#ff4d6d] transition-all font-bold" />
                               </div>
                            </div>
                            <div className="pt-4">
                               <p className="text-[11px] text-gray-400 font-bold leading-relaxed mb-6">Passwords must be at least 8 characters and include a special symbol.</p>
                               <button type="button" className="w-full bg-[#212529] text-white h-14 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-[#0056b3] transition-colors shadow-lg shadow-gray-200">
                                  Update Security info
                               </button>
                            </div>
                         </div>

                         <div className="md:col-span-2 pt-6 border-t border-gray-50 flex items-center justify-between">
                            <p className="text-xs text-gray-400 font-bold">Privacy: We never share your data with 3rd parties.</p>
                            <button type="submit" className="bg-[#0056b3] text-white px-12 h-16 rounded-[24px] font-black text-lg shadow-xl shadow-blue-100 hover:scale-[1.02] active:scale-[0.98] transition-all">
                               Save Account Profile
                            </button>
                         </div>
                      </form>
                   </div>
                </motion.div>
              )}
           </AnimatePresence>
        </main>

      </div>
    </div>
  );
}

export default Profile;
