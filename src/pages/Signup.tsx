import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Mail, Lock, User, CheckCircle2, ArrowRight } from 'lucide-react';
import { useAuth } from '../lib/AuthContext';

function Signup() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    login(email, name);
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-[#fcfcfc] flex items-center justify-center px-6 py-20 relative overflow-hidden">
      <div className="absolute top-[-10%] left-[-10%] w-1/2 h-1/2 bg-red-50/50 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-1/2 h-1/2 bg-blue-50/50 rounded-full blur-[120px] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-[480px] bg-white/70 backdrop-blur-xl border border-white p-10 rounded-[32px] shadow-2xl relative z-10"
      >
        <div className="text-center mb-8">
           <Link to="/" className="inline-flex items-center gap-2 mb-4 group">
              <div className="w-10 h-10 bg-[#ff4d6d] rounded-xl flex items-center justify-center text-white font-black text-xl shadow-lg shadow-red-200 group-hover:scale-110 transition-transform">
                E
              </div>
              <span className="text-xl font-black text-[#212529] tracking-tighter">ELEQT</span>
           </Link>
           <h1 className="text-[28px] font-black text-[#212529] leading-tight mb-2">Create Your Account</h1>
           <p className="text-sm font-bold text-gray-400">Join the world of premium travel experiences</p>
        </div>

        <form onSubmit={handleSignup} className="space-y-5">
           <div className="space-y-1">
              <label className="text-[11px] font-black text-gray-400 uppercase ml-1 tracking-widest">Full Name</label>
              <div className="relative group">
                 <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300 group-focus-within:text-[#ff4d6d] transition-colors">
                    <User size={18} />
                 </div>
                 <input type="text" required value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter your name" className="w-full h-14 bg-white border border-gray-100 pl-12 pr-4 rounded-2xl outline-none focus:border-[#ff4d6d] transition-all font-medium" />
              </div>
           </div>

           <div className="space-y-1">
              <label className="text-[11px] font-black text-gray-400 uppercase ml-1 tracking-widest">Email Address</label>
              <div className="relative group">
                 <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300 group-focus-within:text-[#ff4d6d] transition-colors">
                    <Mail size={18} />
                 </div>
                 <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" className="w-full h-14 bg-white border border-gray-100 pl-12 pr-4 rounded-2xl outline-none focus:border-[#ff4d6d] transition-all font-medium" />
              </div>
           </div>

           <div className="space-y-1">
              <label className="text-[11px] font-black text-gray-400 uppercase ml-1 tracking-widest">Password</label>
              <div className="relative group">
                 <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300 group-focus-within:text-[#ff4d6d] transition-colors">
                    <Lock size={18} />
                 </div>
                 <input type="password" required value={password} onChange={(e) => setPassword(e.target.value)} placeholder="••••••••" className="w-full h-14 bg-white border border-gray-100 pl-12 pr-4 rounded-2xl outline-none focus:border-[#ff4d6d] transition-all font-medium" />
              </div>
           </div>

           <button type="submit" className="w-full bg-[#ff4d6d] hover:bg-[#ff3355] text-white h-14 rounded-2xl font-black text-[15px] flex items-center justify-center gap-2 group transition-all shadow-lg shadow-red-50">
              Create My Account <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
           </button>
        </form>

        <p className="text-center mt-8 text-sm font-bold text-gray-400">
           Already have an account? <Link to="/login" className="text-[#0056b3] hover:underline font-black">Login</Link>
        </p>
      </motion.div>
    </div>
  );
}

export default Signup;
