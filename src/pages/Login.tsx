import { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Mail, Lock, ArrowRight, Github } from 'lucide-react';
import { useAuth } from '../lib/AuthContext';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    login(email, email.split('@')[0]);
    const from = (location.state as any)?.from?.pathname || "/";
    navigate(from, { replace: true });
  };

  return (
    <div className="min-h-screen bg-[#fcfcfc] flex items-center justify-center px-6 py-20 relative overflow-hidden">
      <div className="absolute top-[-10%] left-[-10%] w-1/2 h-1/2 bg-blue-50/50 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-1/2 h-1/2 bg-red-50/50 rounded-full blur-[120px] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-[440px] bg-white/70 backdrop-blur-xl border border-white p-6 sm:p-10 rounded-[32px] shadow-2xl shadow-blue-900/5 relative z-10"
      >
        <div className="text-center mb-8">
           <Link to="/" className="inline-flex items-center gap-2 mb-6 group">
              <div className="w-10 h-10 bg-[#ff4d6d] rounded-xl flex items-center justify-center text-white font-black text-xl shadow-lg shadow-red-200 group-hover:scale-110 transition-transform">
                E
              </div>
              <span className="text-xl font-black text-[#212529] tracking-tighter">ELEQT</span>
           </Link>
           <h1 className="text-[28px] font-black text-[#212529] leading-tight mb-2">Welcome Back</h1>
           <p className="text-sm font-bold text-gray-400">Continue your journey with Eleqt Holidays</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-5">
           <div className="space-y-1">
              <label className="text-[11px] font-black text-gray-400 uppercase ml-1 tracking-widest">Email Address</label>
              <div className="relative group">
                 <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300 group-focus-within:text-[#0056b3] transition-colors">
                    <Mail size={18} />
                 </div>
                 <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" className="w-full h-14 bg-white border border-gray-100 pl-12 pr-4 rounded-2xl outline-none focus:border-[#0056b3] transition-all font-medium text-[15px]" />
              </div>
           </div>

           <div className="space-y-1">
              <div className="flex items-center justify-between ml-1">
                <label className="text-[11px] font-black text-gray-400 uppercase tracking-widest">Password</label>
                <button type="button" className="text-[11px] font-black text-[#0056b3] hover:underline">Forgot?</button>
              </div>
              <div className="relative group">
                 <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300 group-focus-within:text-[#0056b3] transition-colors">
                    <Lock size={18} />
                 </div>
                 <input type="password" required value={password} onChange={(e) => setPassword(e.target.value)} placeholder="••••••••" className="w-full h-14 bg-white border border-gray-100 pl-12 pr-4 rounded-2xl outline-none focus:border-[#0056b3] transition-all font-medium" />
              </div>
           </div>

           <button type="submit" className="w-full bg-[#0056b3] hover:bg-[#004494] text-white h-14 rounded-2xl font-black text-[15px] flex items-center justify-center gap-2 group transition-all shadow-lg shadow-blue-100">
              Login to Account <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
           </button>
        </form>

        <p className="text-center mt-8 text-sm font-bold text-gray-400">
           Don't have an account? <Link to="/signup" className="text-[#0056b3] hover:underline font-black">Sign Up</Link>
        </p>
      </motion.div>
    </div>
  );
}

export default Login;
