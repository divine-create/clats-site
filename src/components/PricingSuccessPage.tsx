import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, Home, ArrowRight, ShieldAlert } from 'lucide-react';

interface PricingSuccessPageProps {
  onNavigate: (path: string) => void;
  awardXP: (pts: number, actionId: string) => void;
}

export default function PricingSuccessPage({ onNavigate, awardXP }: PricingSuccessPageProps) {
  
  useEffect(() => {
    // Award bonus XP for discovering the sandbox success page!
    awardXP(50, 'viewed_pricing_success_page');
  }, []);

  return (
    <div className="min-h-[75vh] flex items-center justify-center font-sans bg-white text-black px-6 py-12 select-none">
      
      {/* Container Card */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.96, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="max-w-xl w-full text-center space-y-8 bg-slate-50/50 border border-slate-150 p-8 md:p-12 rounded-[2.5rem] shadow-md relative"
      >
        {/* Decorative ambient blobs */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-[#2EC4B6]/5 rounded-full blur-2xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#B8A0FF]/5 rounded-full blur-2xl pointer-events-none" />

        {/* 1. SUCCESS ICON */}
        <div className="flex justify-center select-none relative z-10">
          <motion.div 
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', stiffness: 200, damping: 15 }}
            className="w-20 h-20 bg-teal-50 border border-teal-150 rounded-[1.75rem] flex items-center justify-center text-[#2EC4B6] shadow-md shadow-teal-50/50"
          >
            <CheckCircle2 className="w-10 h-10 stroke-[2.2]" />
          </motion.div>
        </div>

        {/* 2. TEXT HEADLINES */}
        <div className="space-y-3 relative z-10">
          <h1 className="text-3xl md:text-4xl font-display font-black text-slate-900 tracking-tight leading-none">
            Payment Successful!
          </h1>
          <p className="text-purple-650 text-purple-700 text-sm font-extrabold max-w-md mx-auto">
            Welcome to the CLATS Early Access Program.
          </p>
          <p className="text-slate-500 text-xs md:text-sm font-semibold max-w-md mx-auto leading-relaxed pt-2">
            Thank you for joining the first generation of families helping shape the future of technology education.
          </p>
          <p className="text-slate-500 text-xs md:text-sm font-semibold max-w-md mx-auto leading-relaxed">
            Our team will contact you with updates, onboarding information, and early access opportunities.
          </p>
        </div>

        {/* 3. INTERACTIVE REDIRECTION CTAs */}
        <div className="flex flex-col sm:flex-row gap-3 pt-2 max-w-md mx-auto relative z-10">
          <button
            onClick={() => onNavigate('/')}
            className="flex-1 bg-slate-950 hover:bg-slate-800 text-white font-black text-xs uppercase tracking-wider py-4 rounded-xl shadow-md transition-all cursor-pointer flex items-center justify-center gap-2 border-none"
          >
            <Home className="w-4 h-4 text-[#2EC4B6]" />
            Return Home
          </button>
          
          <button
            onClick={() => onNavigate('/pathways')}
            className="flex-1 bg-[#2EC4B6] hover:bg-[#25baa8] text-slate-950 font-black text-xs uppercase tracking-wider py-4 rounded-xl shadow-md transition-all cursor-pointer flex items-center justify-center gap-1.5 border-none"
          >
            Explore Learning Pathways
            <ArrowRight className="w-4 h-4 stroke-[3]" />
          </button>
        </div>

        {/* 4. INTERNAL DEVELOPER DISCLAIMER BANNER */}
        <div className="pt-6 border-t border-slate-100 relative z-10">
          <div className="bg-amber-50 rounded-2xl p-4 flex gap-2.5 text-left text-xxs font-bold text-amber-900 select-none">
            <ShieldAlert className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
            <p className="leading-relaxed">
              <span className="font-extrabold uppercase $10 block">Internal Developer Note:</span>
              The checkout flow is currently a demonstration-only experience used for validation, presentations, and investor demonstrations. No real payment processing should occur until Payment integration is implemented.
            </p>
          </div>
        </div>

      </motion.div>

    </div>
  );
}
