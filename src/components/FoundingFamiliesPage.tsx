import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { 
  Rocket, Target, Users, Gift, FlaskConical, Trophy, TreeDeciduous, Award, 
  Sparkles, ChevronRight, CheckCircle, Smartphone, Mail, ShieldCheck, MapPin, AlertCircle, Send, Heart 
} from 'lucide-react';
import WaitlistForm from './WaitlistForm';
import FoundingFamilyProgressCounter from './FoundingFamilyProgressCounter';

interface FoundingFamiliesPageProps {
  onNavigate: (path: string) => void;
  awardXP: (pts: number, actionId: string) => void;
  slotsJoined?: number;
  setSlotsJoined?: React.Dispatch<React.SetStateAction<number>>;
}

export default function FoundingFamiliesPage({ 
  onNavigate, 
  awardXP, 
  slotsJoined = 45, 
  setSlotsJoined 
}: FoundingFamiliesPageProps) {
  const remainingSlots = Math.max(0, 100 - slotsJoined);

  const benefits = [
    {
      title: 'Early Access to New Learning Academies',
      desc: 'Explore new AI and future-tech learning experiences before public release.',
      icon: Rocket,
      color: 'text-[#2EC4B6] bg-[#2EC4B6]/10 border border-[#2EC4B6]/20'
    },
    {
      title: 'Shape the Future of CLATS',
      desc: 'Your feedback will directly influence platform features, learning activities, games, and future curriculum development.',
      icon: Target,
      color: 'text-purple-600 bg-purple-50 border border-purple-100'
    },
    {
      title: 'Founding Families Community',
      desc: "Join a special network of pioneering parents passionate about preparing children for an AI-driven future.",
      icon: Users,
      color: 'text-indigo-600 bg-indigo-50 border border-indigo-100'
    },
    {
      title: 'Founder Pricing Benefits',
      desc: 'Receive exclusive early supporter pricing opportunities and future loyalty rewards as CLATS grows.',
      icon: Gift,
      color: 'text-amber-600 bg-amber-50 border border-amber-100'
    },
    {
      title: 'Priority Access to New Features',
      desc: 'Get first access to new courses, learning modules, games, events, and platform updates before general users.',
      icon: FlaskConical,
      color: 'text-blue-600 bg-blue-50 border border-blue-100'
    },
    {
      title: 'Recognition as a CLATS Pioneer',
      desc: 'Be recognized as one of the families who helped shape CLATS during its earliest stages.',
      icon: Trophy,
      color: 'text-yellow-600 bg-yellow-50 border border-yellow-100'
    },
    {
      title: 'Founding Family Legacy Wall',
      desc: 'Eligible families may choose to be featured on our future digital Founding Families Wall, celebrating those who believed in the mission from the beginning.',
      icon: TreeDeciduous,
      color: 'text-emerald-500 bg-emerald-50 border border-emerald-105'
    },
    {
      title: 'Founding Family Digital Badge',
      desc: "Receive an exclusive digital badge recognizing your contribution to helping build tomorrow's tech minds today.",
      icon: Award,
      color: 'text-pink-600 bg-pink-50 border border-pink-101'
    }
  ];

  const recognitionBenefits = [
    'Listed on the CLATS pioneer digital credits board within the app dashboard.',
    'Invites to quarterly online child tech forums with founders and educators.',
    'VIP beta access for up to 3 additional cousins or family friends later on.',
    'Lifetime "Founding Supporter" status on user billing cycles.'
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 space-y-20 animate-fadeIn font-sans">
      
      {/* HEADER SECTION */}
      <section className="text-center max-w-3xl mx-auto space-y-5 pt-6">
        <span className="text-xxs font-black text-[#8A67F0] bg-purple-50 border border-purple-150 px-3.5 py-1.5 rounded-full uppercase tracking-widest inline-block select-none">
          🌟 Early Access Legacy Cohort
        </span>
        <h1 className="text-4xl md:text-6xl font-display font-black text-slate-900 tracking-tight leading-[1.1]">
          Become a CLATS{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-purple-600">
            Founding Family
          </span>
        </h1>
        <p className="text-slate-600 text-sm md:text-base leading-relaxed font-semibold max-w-xl mx-auto">
          Help shape the future of AI education for children in Africa. Join an exclusive cohort of early adoptive families giving child screen protection a positive direction!
        </p>
      </section>

      {/* LIVE SUPABASE CONNECTED PROGRESS COUNTER */}
      <FoundingFamilyProgressCounter />

      {/* DETAILED EARLY BENEFIT GRID */}
      <section className="space-y-12">
        <div className="text-center max-w-xl mx-auto space-y-4">
          <h3 className="text-2xl font-display font-black text-slate-900 tracking-tight leading-tight">
            Exclusive Founding Family Benefits
          </h3>
          <p className="text-slate-500 text-xs md:text-sm font-medium">
            Pioneers receive special, durable accolades, price immunities, and direct roadmap representation as our digital learnware scales globally.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((b, idx) => {
            const Icon = b.icon;
            return (
              <div
                key={idx}
                className="bg-white border border-slate-150 rounded-[2rem] p-6 shadow-sm flex flex-col justify-between text-left space-y-4 font-sans"
              >
                <div>
                  <div className={`w-11 h-11 rounded-2xl flex items-center justify-center border ${b.color} mb-4`}>
                    <Icon className="w-4.5 h-4.5 shrink-0" />
                  </div>
                  <h4 className="text-slate-900 font-black text-[15px] font-display mb-1.5 leading-snug">
                    {b.title}
                  </h4>
                  <p className="text-slate-550 text-slate-500 text-xxs font-semibold leading-relaxed leading-normal">
                    {b.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* WAITLIST REGISTRATION PORTAL */}
      <section id="waitlist-sect" className="relative">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-teal-400/5 blur-3xl pointer-events-none" />
        
        <div className="space-y-8">
          <div className="text-center max-w-xl mx-auto space-y-3">
            <h3 className="text-2xl font-display font-black text-slate-900 tracking-tight leading-normal">
              Register Your Household
            </h3>
            <p className="text-slate-500 text-xs md:text-sm font-medium">
              Provide your details below to submit your Founding Family credentials. We process queues manually and will write to you via safe electronic mail.
            </p>
          </div>

          <WaitlistForm 
            onSubmitWaitlist={(item) => {
              if (setSlotsJoined) {
                setSlotsJoined((prev: number) => Math.min(prev + 1, 100));
              }
              awardXP(150, 'waitlist_registration_completed');
            }} 
          />
        </div>
      </section>

      {/* RECOGNITION BENEFIT MATRIX */}
      <section className="bg-slate-50 border border-slate-150 p-8 md:p-12 rounded-[3rem] text-left max-w-4xl mx-auto font-sans grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
        <div className="md:col-span-7 space-y-5">
          <span className="text-xxs font-black text-teal-605 text-teal-600 bg-teal-50 border border-teal-120 px-3.5 py-1 rounded-full uppercase tracking-widest leading-none">
            ⭐ Legacy Recognition Matrix
          </span>
          <h4 className="text-slate-900 font-extrabold text-lg md:text-xl font-display">
            Permanent Supporter Attributes
          </h4>
          <p className="text-slate-650 text-slate-600 text-xs md:text-sm font-semibold leading-relaxed">
            Pioneers represent the foundation of our child protect mandate. Our tech division guarantees you receive persistent priority configurations:
          </p>
          
          <div className="space-y-3 text-xxs font-bold text-slate-700">
            {recognitionBenefits.map((item, idx) => (
              <div key={idx} className="flex gap-2 items-start">
                <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <span className="leading-relaxed">{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="md:col-span-5 flex justify-end">
          <div className="w-full max-w-xs bg-white border border-slate-200 p-6 rounded-2xl shadow-xl flex flex-col items-center text-center space-y-4">
            <div className="w-10 h-10 bg-[#FFD166]/15 rounded-full flex items-center justify-center text-[#FFD166]">
              <ShieldCheck className="w-5 h-5 stroke-[2.5]" />
            </div>
            <h5 className="text-slate-950 font-black text-xs font-display">
              CLATS Legacy Board Invitation
            </h5>
            <p className="text-slate-500 text-[10px] leading-relaxed font-semibold">
              "We thank you for protecting children aged 2–18 with proper internet skills and digital safety structures from the earliest days."
            </p>
            <span className="text-[9px] font-mono font-bold text-slate-400 bg-slate-50 border border-slate-100 px-2 py-0.5 rounded">
              SEID // FF_BOARD_COH_1
            </span>
          </div>
        </div>
      </section>

    </div>
  );
}
