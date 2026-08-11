import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Check, HelpCircle, ChevronDown, ChevronRight, Sparkles, ShieldCheck, CreditCard, Lock, User, Mail, Calendar, Key, AlertTriangle 
} from 'lucide-react';
import FoundingFamilyProgressCounter from './FoundingFamilyProgressCounter';

interface PricingPageProps {
  onNavigate: (path: string) => void;
  awardXP: (pts: number, actionId: string) => void;
}

export default function PricingPage({ onNavigate, awardXP }: PricingPageProps) {
  // Modal / Checkout flow toggle state
  const [showCheckoutModal, setShowCheckoutModal] = useState(false);
  const [openFaqId, setOpenFaqId] = useState<number | null>(1);

  // Mock Payment Form state
  const [cardName, setCardName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvv, setCvv] = useState('');
  const [email, setEmail] = useState('');
  const [childName, setChildName] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const pricingFaqs = [
    {
      id: 1,
      question: "Is pricing charged per parent or per child?",
      answer: "Pricing is charged per child to provide each learner with their own personalized learning journey, progress tracking, achievements, AI recommendations, and parent reporting.\n\nFor example:\n\n1 Child = 1 Subscription\n2 Children = 2 Subscriptions\n3 Children = 3 Subscriptions\n\nThis ensures every child receives an individual learning experience tailored to their age, interests, and progress."
    },
    {
      id: 2,
      question: "Is there a free trial?",
      answer: "Yes. Every new learner receives a 7-day free trial, giving them access to Modules 1 and 2 of the first learning pathway. This allows families to explore the CLATS experience before choosing a subscription plan."
    },
    {
      id: 3,
      question: "What happens after I join the Founding Families Program?",
      answer: "Once accepted into the Founding Families Program, you'll receive early access to CLATS before the public launch, opportunities to test new features, provide product feedback, enjoy priority onboarding, and unlock your exclusive lifetime discount on eligible monthly subscription plans after launch."
    }
  ];

  const handleCheckoutSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate payment process delay
    setTimeout(() => {
      awardXP(100, 'founding_family_mock_checkout_completed');
      setIsSubmitting(false);
      setShowCheckoutModal(false);
      onNavigate('/pricing/success');
    }, 1500);
  };

  // Helper auto-formatter for card number
  const handleCardNumberChange = (value: string) => {
    const cleanValue = value.replace(/\D/g, '').substring(0, 16);
    const formatted = cleanValue.replace(/(\d{4})(?=\d)/g, '$1 ');
    setCardNumber(formatted);
  };

  // Helper auto-formatter for expiry
  const handleExpiryChange = (value: string) => {
    const cleanValue = value.replace(/\D/g, '').substring(0, 4);
    if (cleanValue.length >= 2) {
      setExpiry(`${cleanValue.substring(0, 2)}/${cleanValue.substring(2, 4)}`);
    } else {
      setExpiry(cleanValue);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 space-y-20 animate-fadeIn font-sans bg-white text-black">
      
      {/* 1. HERO SECTION */}
      <section className="text-center max-w-4xl mx-auto space-y-6 pt-8">
        <span className="text-xxs font-black text-[#2EC4B6] bg-[#2EC4B6]/10 border border-[#2EC4B6]/20 px-3.5 py-1.5 rounded-full uppercase tracking-widest inline-block">
          CLATS Launch Offer
        </span>
        <h1 className="text-4xl md:text-5.5xl font-display font-black text-slate-900 tracking-tight leading-[1.1]">
          Flexible Learning Plans For Every{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2EC4B6] to-[#B8A0FF]">
            Future Builder
          </span>
        </h1>
        <p className="text-slate-800 text-sm md:text-lg font-bold max-w-2xl mx-auto leading-relaxed">
          Choose the learning experience that best fits your child's goals, learning style, and growth journey.
        </p>
        <p className="text-slate-500 text-xs md:text-sm max-w-xl mx-auto leading-relaxed">
          CLATS offers structured future-tech education designed to grow with children through personalized learning pathways, engaging projects, and real-world skill development.
        </p>
      </section>

      {/* 2. PRICING CARDS SECTION */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch pt-4">
        
        {/* Card 1: CLATS Basic */}
        <div className="bg-white rounded-[2rem] border-2 border-slate-100 hover:border-[#2EC4B6]/40 p-8 flex flex-col justify-between shadow-sm hover:shadow-md transition-all relative">
          <div className="space-y-6">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-xl font-black font-display text-slate-900">CLATS Basic</h3>
                <p className="text-[11px] text-slate-500 font-semibold mt-1">Self-paced explorers</p>
              </div>
              <span className="bg-[#2EC4B6]/10 text-[#2EC4B6] text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full border border-[#2EC4B6]/20 shadow-xxs">
                Coming Soon
              </span>
            </div>
            
            <div className="pt-2 border-t border-slate-100 space-y-1">
              <div className="flex items-baseline gap-2">
                <span className="text-xs text-slate-400 font-extrabold line-through">₦10,000</span>
                <span className="text-3xl font-black text-slate-900">₦6,000</span>
                <span className="text-xs text-slate-500 font-bold"> / Month</span>
              </div>
              <span className="inline-block text-[10px] font-black text-emerald-600 bg-emerald-50 border border-emerald-100/80 px-2.5 py-0.5 rounded-full">
                Launch Offer: ₦6,000 / Month
              </span>
            </div>

            <p className="text-xs text-slate-600 font-semibold leading-relaxed">
              For self-paced learners and families seeking affordable access to future-ready education.
            </p>

            <ul className="space-y-3 pt-4 border-t border-slate-50">
              {[
                "7-day free trial to complete Modules 1 & 2 of the first learning pathway before subscribing",
                "Full access to available learning pathways",
                "AI-powered personalized learning experience",
                "Interactive lessons and quizzes",
                "Gamified missions and rewards",
                "Kobe and Chibi learning companions",
                "AI-generated project feedback",
                "Digital certificates and badges"
              ].map((feat, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-700 font-medium">
                  <Check className="w-4 h-4 text-[#2EC4B6] shrink-0 stroke-[3.5] mt-0.5" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="pt-8">
            <button
              onClick={() => {
                awardXP(30, 'secure_founding_access_clicked');
                onNavigate('/founding-families');
              }}
              className="w-full bg-slate-950 hover:bg-slate-800 text-white font-black text-xs uppercase tracking-wider py-4 rounded-xl shadow-md transition-all cursor-pointer leading-none"
            >
              Secure Founding Family Access
            </button>
          </div>
        </div>

        {/* Card 2: CLATS Premium */}
        <div className="bg-white rounded-[2rem] border-2 border-[#B8A0FF]/30 hover:border-[#B8A0FF] p-8 flex flex-col justify-between shadow-md hover:shadow-lg transition-all relative">
          <div className="absolute top-0 right-1/2 translate-x-1/2 -translate-y-1/2 bg-[#B8A0FF] text-white text-[9px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full shadow-md z-1">
            Most Popular
          </div>
          
          <div className="space-y-6">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-xl font-black font-display text-slate-900">CLATS Premium</h3>
                <p className="text-[11px] text-purple-600 font-semibold mt-1">Mentor-guided creators</p>
              </div>
              <span className="bg-[#B8A0FF]/10 text-[#B8A0FF] text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full border border-[#B8A0FF]/25 shadow-xxs">
                Coming Soon
              </span>
            </div>

            <div className="pt-2 border-t border-slate-100">
              <span className="text-3xl font-black text-slate-900">₦22,000</span>
              <span className="text-xs text-slate-500 font-bold"> / Month</span>
            </div>

            <p className="text-xs text-slate-600 font-semibold leading-relaxed">
              For families seeking additional mentorship, accountability, and structured growth.
            </p>

            <ul className="space-y-3 pt-4 border-t border-slate-50">
              <li className="flex items-start gap-2.5 text-xs text-[#B8A0FF] font-extrabold uppercase tracking-wide">
                <span>⚡ Everything in Basic</span>
              </li>
              {[
                "Weekly Live Saturday Group Review Labs",
                "Mentor-guided project reviews",
                "Portfolio development support",
                "Monthly parent progress reports",
                "Enhanced learning analytics"
              ].map((feat, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-700 font-medium">
                  <Check className="w-4 h-4 text-[#B8A0FF] shrink-0 stroke-[3.5] mt-0.5" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="pt-8">
            <button
              onClick={() => {
                awardXP(20, 'premium_waitlist_clicked');
                onNavigate('/founding-families');
              }}
              className="w-full bg-gradient-to-r from-[#B8A0FF] to-purple-600 hover:opacity-90 text-white font-black text-xs uppercase tracking-wider py-4 rounded-xl shadow-md transition-all cursor-pointer leading-none"
            >
              Join Premium Waitlist
            </button>
          </div>
        </div>

        {/* Card 3: CLATS Elite Cohorts */}
        <div className="bg-white rounded-[2rem] border-2 border-slate-100 hover:border-[#2EC4B6]/40 p-8 flex flex-col justify-between shadow-sm hover:shadow-md transition-all relative">
          <div className="space-y-6">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-xl font-black font-display text-slate-900">CLATS Elite Cohorts</h3>
                <p className="text-[11px] text-slate-500 font-semibold mt-1">Intensive specialists</p>
              </div>
              <span className="bg-[#2EC4B6]/10 text-[#2EC4B6] text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full border border-[#2EC4B6]/20 shadow-xxs">
                Coming Soon
              </span>
            </div>

            <div className="pt-2 border-t border-slate-100">
              <span className="text-3xl font-black text-slate-900">₦40,000</span>
              <span className="text-xs text-slate-500 font-bold"> / 6-Week Sprint</span>
            </div>

            <p className="text-xs text-slate-600 font-semibold leading-relaxed">
              Advanced learners and teens pursuing specialized technology tracks.
            </p>

            <ul className="space-y-3 pt-4 border-t border-slate-50">
              {[
                "Intensive live cohort learning",
                "Specialized future-tech pathways",
                "One-on-one mentorship sessions",
                "Portfolio and project development",
                "Global innovation challenges",
                "Freelancing and career readiness exposure"
              ].map((feat, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-700 font-medium">
                  <Check className="w-4 h-4 text-[#2EC4B6] shrink-0 stroke-[3.5] mt-0.5" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="pt-8">
            <button
              onClick={() => {
                awardXP(20, 'elite_waitlist_clicked');
                onNavigate('/founding-families');
              }}
              className="w-full bg-slate-900 hover:bg-slate-800 text-white font-black text-xs uppercase tracking-wider py-4 rounded-xl shadow-md transition-all cursor-pointer leading-none"
            >
              Join Elite Waitlist
            </button>
          </div>
        </div>

      </section>

      {/* 3. FOUNDING FAMILY OFFER SECTION */}
      <section className="bg-gradient-to-br from-teal-50/40 via-white to-purple-50/40 border-2 border-[#2EC4B6]/30 rounded-[2.5rem] p-8 md:p-12 shadow-md max-w-5xl mx-auto relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#2EC4B6]/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#B8A0FF]/5 rounded-full blur-3xl pointer-events-none" />
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
          
          <div className="lg:col-span-7 space-y-6 text-left">
            <span className="bg-[#2EC4B6]/10 text-[#2EC4B6] text-[10px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full border border-[#2EC4B6]/25 inline-block">
              Founding Families Early Access Program
            </span>
            <div className="space-y-2">
              <h2 className="text-2xl md:text-3.5xl font-display font-black text-slate-900 tracking-tight leading-none">
                Founding Families Early Access Program
              </h2>
              <p className="text-slate-600 text-sm font-semibold pt-1">
                Join the first generation of families helping shape the future of CLATS.
              </p>
            </div>

            <div className="space-y-3.5 pt-3">
              <span className="text-xs uppercase font-extrabold tracking-wider text-slate-800 block">
                Founding Families receive:
              </span>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                {[
                  "Early platform access",
                  "Product testing opportunities",
                  "Product feedback opportunities",
                  "Priority onboarding",
                  "An additional lifetime 15% discount on eligible monthly subscription plans after launch"
                ].map((perk, n) => (
                  <div key={n} className="flex items-start gap-2 text-xs text-slate-750 font-medium">
                    <Check className="w-4 h-4 text-[#2EC4B6] stroke-[3.5] shrink-0 mt-0.5" />
                    <span>{perk}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 flex flex-wrap gap-4 items-center">
              <div className="px-4 py-2 rounded-xl bg-orange-50 border border-orange-200 text-orange-850 text-xxs font-black uppercase tracking-wider inline-flex items-center gap-1.5 shadow-sm">
                <span>🔥</span> Limited to 100 Families
              </div>
              <button
                onClick={() => {
                  awardXP(40, 'founding_early_program_access');
                  onNavigate('/founding-families');
                }}
                className="bg-[#2EC4B6] hover:bg-[#25baa8] text-slate-950 font-black text-xs uppercase tracking-widest px-6 py-3.5 rounded-2xl shadow-md cursor-pointer transition-all border-none flex items-center gap-1 leading-none"
              >
                Secure Early Access Slots
                <ChevronRight className="w-4 h-4 stroke-[3]" />
              </button>
            </div>
          </div>

          {/* Connected live counter */}
          <div className="lg:col-span-5 w-full">
            <FoundingFamilyProgressCounter capacity={100} />
          </div>

        </div>
      </section>

      {/* 4. PARTNER PRICING SECTION */}
      <section className="bg-slate-50 border border-slate-150 rounded-[2.5rem] p-8 md:p-12 text-center max-w-4xl mx-auto space-y-6 relative overflow-hidden shadow-sm select-none">
        <h3 className="text-2xl md:text-3xl font-display font-black text-slate-950">
          Looking To Partner With CLATS?
        </h3>
        <p className="text-slate-600 text-sm font-bold max-w-xl mx-auto">
          We also provide customized pricing and deployment models for:
        </p>

        <div className="flex flex-wrap justify-center gap-2.5 max-w-2xl mx-auto pt-2">
          {[
            "Private Schools",
            "Educational Institutions",
            "NGOs",
            "Government Agencies",
            "CSR Programs",
            "Community Learning Initiatives"
          ].map((inst, index) => (
            <span 
              key={index} 
              className="px-4.5 py-2 rounded-xl bg-white border border-slate-200 text-slate-800 text-xxs font-black uppercase tracking-wider shadow-xxs block"
            >
              {inst}
            </span>
          ))}
        </div>

        <div className="pt-6">
          <button
            onClick={() => {
              awardXP(30, 'explore_pricing_partnerships_clicked');
              onNavigate('/partnerships');
            }}
            className="bg-slate-950 hover:bg-slate-800 text-white font-black text-xs uppercase tracking-wider px-8 py-4 rounded-xl shadow-md transition-all cursor-pointer border-none inline-flex items-center gap-1.5"
          >
            Explore Partnership Opportunities
            <ChevronRight className="w-4 h-4 text-[#2EC4B6] stroke-[2.5]" />
          </button>
        </div>
      </section>

      {/* 5. PRICING FAQs SECTION */}
      <section className="max-w-3xl mx-auto space-y-8 text-left">
        <div className="text-center space-y-2">
          <h3 className="text-2xl md:text-3.5xl font-display font-black text-slate-900 tracking-tight">
            Pricing FAQ
          </h3>
          <p className="text-slate-500 text-xs font-semibold uppercase tracking-wider">
            Have pricing questions? Let's get them answered.
          </p>
        </div>

        <div className="space-y-4">
          {pricingFaqs.map((faq) => {
            const isOpen = openFaqId === faq.id;
            return (
              <div 
                key={faq.id}
                className={`bg-white rounded-2xl border-2 transition-all overflow-hidden ${
                  isOpen ? 'border-[#2EC4B6] shadow-sm' : 'border-slate-100 hover:border-slate-200'
                }`}
              >
                <button
                  onClick={() => setOpenFaqId(isOpen ? null : faq.id)}
                  className="w-full flex items-center justify-between p-5 text-left outline-none cursor-pointer"
                >
                  <span className="text-slate-950 font-extrabold text-xs md:text-sm font-display tracking-tight leading-tight">
                    {faq.question}
                  </span>
                  <ChevronDown className={`w-4 h-4 text-slate-400 shrink-0 transform transition-transform duration-300 ${
                    isOpen ? 'rotate-180 text-[#2EC4B6]' : 'rotate-0'
                  }`} />
                </button>

                {isOpen && (
                  <div className="p-5 pt-0 border-t border-slate-50/50">
                    <p className="text-slate-700 text-xs md:text-sm leading-relaxed font-medium pt-3 whitespace-pre-line">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* 6. PREMIUM DEMO CHECKOUT MODAL FLOW */}
      <AnimatePresence>
        {showCheckoutModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop spacer click toggle */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowCheckoutModal(false)}
              className="absolute inset-0 bg-slate-950/60 backdrop-blur-sm"
            />

            {/* Modal Body container */}
            <motion.div 
              initial={{ scale: 0.95, y: 15, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.95, y: 15, opacity: 0 }}
              className="bg-white rounded-[2.5rem] border-2 border-[#2EC4B6]/30 shadow-2xl w-full max-w-lg relative overflow-hidden z-10 max-h-[90vh] overflow-y-auto"
            >
              {/* Top Accent line */}
              <div className="h-2.5 bg-gradient-to-r from-[#2EC4B6] via-[#B8A0FF] to-[#2EC4B6]" />

              {/* Developer Note Alert Banner */}
              <div className="bg-amber-50 border-b border-amber-100 px-6 py-3.5 flex gap-2 text-[10px] leading-relaxed font-bold text-amber-900 select-none">
                <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <span className="font-extrabold text-amber-955 block">🔧 INTERNAL DEVELOPER NOTE:</span>
                  The checkout flow is currently a demonstration-only experience used for validation, presentations, and investor demonstrations. No real payment processing should occur until Payment integration is implemented.
                </div>
              </div>

              <div className="p-6 md:p-8 space-y-6">
                
                {/* Header info */}
                <div className="space-y-1.5 text-left">
                  <h3 className="text-xl font-black font-display text-slate-900 flex items-center gap-2">
                    <ShieldCheck className="w-5.5 h-5.5 text-[#2EC4B6]" />
                    Secure Your Founding Family Slot
                  </h3>
                  <p className="text-slate-500 text-xs font-semibold leading-relaxed">
                    Join the CLATS Founding Families Program and help shape the future of technology education for children.
                  </p>
                </div>

                {/* Price Summary container */}
                <div className="p-4.5 rounded-2xl bg-teal-50/40 border border-[#2EC4B6]/25 text-left space-y-1">
                  <span className="text-[10px] font-mono tracking-wider uppercase text-[#2EC4B6] font-extrabold block">
                    Founding Family Early Access Price
                  </span>
                  <div className="flex justify-between items-baseline">
                    <span className="text-3xl font-black text-slate-900">₦5,100</span>
                    <span className="text-[9px] font-extrabold uppercase text-slate-400 bg-white border px-2 py-0.5 rounded">
                      Promo Code Applied
                    </span>
                  </div>
                  <p className="text-xxs text-slate-500 font-bold italic pt-0.5">
                    This reflects the 15% Founding Family discount on the CLATS Basic Plan.
                  </p>
                </div>

                {/* Mock Form */}
                <form onSubmit={handleCheckoutSubmit} className="space-y-4 text-left">
                  
                  {/* Email and Child Fields grouped */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Email Address</label>
                      <div className="relative">
                        <Mail className="absolute left-3.5 top-3 w-4 h-4 text-slate-400 stroke-[2.2]" />
                        <input
                          type="email"
                          required
                          placeholder="parent@example.com"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="w-full bg-slate-50 border-2 border-slate-200 py-2.5 pl-10 pr-4 rounded-xl text-slate-905 outline-none focus:border-[#2EC4B6] focus:bg-white text-xs font-semibold transition-all"
                        />
                      </div>
                    </div>

                    <div className="space-y-1">
                      <label className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Child's Name</label>
                      <div className="relative">
                        <User className="absolute left-3.5 top-3 w-4 h-4 text-slate-400 stroke-[2.2]" />
                        <input
                          type="text"
                          required
                          placeholder="e.g. Kobe Jnr"
                          value={childName}
                          onChange={(e) => setChildName(e.target.value)}
                          className="w-full bg-slate-50 border-2 border-slate-200 py-2.5 pl-10 pr-4 rounded-xl text-slate-905 outline-none focus:border-[#2EC4B6] focus:bg-white text-xs font-semibold transition-all"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Cardholder Name */}
                  <div className="space-y-1">
                    <label className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Cardholder Name</label>
                    <div className="relative">
                      <User className="absolute left-3.5 top-3 w-4 h-4 text-slate-400 stroke-[2.2]" />
                      <input
                        type="text"
                        required
                        placeholder="John Doe"
                        value={cardName}
                        onChange={(e) => setCardName(e.target.value)}
                        className="w-full bg-slate-50 border-2 border-slate-200 py-2.5 pl-10 pr-4 rounded-xl text-slate-905 outline-none focus:border-[#2EC4B6] focus:bg-white text-xs font-semibold transition-all"
                      />
                    </div>
                  </div>

                  {/* Card Number */}
                  <div className="space-y-1">
                    <label className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Card Number</label>
                    <div className="relative">
                      <CreditCard className="absolute left-3.5 top-3 w-4 h-4 text-slate-400 stroke-[2.2]" />
                      <input
                        type="text"
                        required
                        placeholder="0000 0000 0051 0000"
                        value={cardNumber}
                        onChange={(e) => handleCardNumberChange(e.target.value)}
                        className="w-full bg-slate-50 border-2 border-slate-200 py-2.5 pl-10 pr-4 rounded-xl text-slate-905 outline-none focus:border-[#2EC4B6] focus:bg-white text-xs font-semibold transition-all"
                      />
                    </div>
                  </div>

                  {/* Expiry and CVV grouped */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Expiry Date</label>
                      <div className="relative">
                        <Calendar className="absolute left-3.5 top-3 w-4 h-4 text-slate-400 stroke-[2.2]" />
                        <input
                          type="text"
                          required
                          placeholder="MM/YY"
                          value={expiry}
                          onChange={(e) => handleExpiryChange(e.target.value)}
                          className="w-full bg-slate-50 border-2 border-slate-200 py-2.5 pl-10 pr-4 rounded-xl text-slate-905 outline-none focus:border-[#2EC4B6] focus:bg-white text-xs font-semibold transition-all"
                        />
                      </div>
                    </div>

                    <div className="space-y-1">
                      <label className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">CVV</label>
                      <div className="relative">
                        <Key className="absolute left-3.5 top-3 w-4 h-4 text-slate-400 stroke-[2.2]" />
                        <input
                          type="password"
                          required
                          maxLength={3}
                          placeholder="123"
                          value={cvv}
                          onChange={(e) => setCvv(e.target.value.replace(/\D/g, ''))}
                          className="w-full bg-slate-50 border-2 border-slate-200 py-2.5 pl-10 pr-4 rounded-xl text-slate-905 outline-none focus:border-[#2EC4B6] focus:bg-white text-xs font-semibold transition-all"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Padlock status support */}
                  <div className="flex gap-2 items-center text-slate-450 text-[10px] font-bold py-1 select-none">
                    <Lock className="w-3.5 h-3.5 text-slate-400" />
                    <span>256-Bit SSL Secured Interactive Sandbox Payment Encryption</span>
                  </div>

                  {/* CTAs */}
                  <div className="flex gap-3 pt-3">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="flex-1 bg-[#2EC4B6] disabled:bg-teal-400 text-slate-950 font-black text-xs uppercase tracking-wider py-4 rounded-xl shadow-lg transition-all cursor-pointer border-none flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-slate-950 border-t-transparent rounded-full animate-spin" />
                          <span>Processing Sandbox...</span>
                        </>
                      ) : (
                        <span>Pay ₦5,100</span>
                      )}
                    </button>
                    <button
                      type="button"
                      onClick={() => setShowCheckoutModal(false)}
                      className="px-6 py-4 bg-slate-150 hover:bg-slate-200 text-slate-700 font-black text-xs uppercase tracking-wider rounded-xl transition-all cursor-pointer border-none"
                    >
                      Cancel
                    </button>
                  </div>

                </form>

              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
