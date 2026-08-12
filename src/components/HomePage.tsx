import React from 'react';
import { 
  Sparkles, Star, ChevronRight, CheckCircle, Mail, Phone, Heart, Lock, Users, X 
} from 'lucide-react';
import { motion } from 'motion/react';
import ProblemSection from './ProblemSection';
import SolutionSection from './SolutionSection';
import GrowsWithChild from './GrowsWithChild';
import LearningAcademies from './LearningAcademies';
import HowItWorks from './HowItWorks';
import MascotCard from './MascotCard';
import FoundingFamilyProgressCounter from './FoundingFamilyProgressCounter';
import ParentFeatures from './ParentFeatures';

interface HomePageProps {
  onNavigate: (path: string) => void;
  onOpenPortal: () => void;
  awardXP: (pts: number, actionId: string) => void;
  setUserXP: React.Dispatch<React.SetStateAction<number>>;
  setHasInteractedWithHero: React.Dispatch<React.SetStateAction<boolean>>;
  setHasVisitedMascots: React.Dispatch<React.SetStateAction<boolean>>;
  hasVisitedMascots: boolean;
  slotsJoined?: number;
}

export default function HomePage({
  onNavigate,
  onOpenPortal,
  awardXP,
  setHasInteractedWithHero,
  setHasVisitedMascots,
  hasVisitedMascots,
  slotsJoined = 45
}: HomePageProps) {
  // Offical mascot avatars
  const kobeAvatar = '/assets/images/kobe_boy_character_avatar_1780168907812.png';
  const chibiAvatar = '/assets/images/chibi_girl_character_avatar_1780169038873.png';

  const [showHeroVideo, setShowHeroVideo] = React.useState(false);

  return (
    <div className="animate-fadeIn">
      {/* 1. HERO SECTION */}
      <section className="relative pt-12 pb-20 md:py-24 overflow-hidden bg-gradient-to-b from-[#f5f8ff] via-[#ffffff] to-[#fafbff]">
        {/* Glow Spheres Decor */}
        <div className="absolute top-1/4 left-10 w-96 h-96 rounded-full bg-teal-400/5 blur-3xl pointer-events-none" />
        <div className="absolute top-1/3 right-10 w-96 h-96 rounded-full bg-purple-400/5 blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-6 space-y-6 md:space-y-8 text-center lg:text-left">
            
            {/* Playful Floating XP Incentive */}
            <div className="inline-flex items-center gap-1.5 bg-teal-50 text-teal-700 text-[10px] sm:text-xs font-bold px-4 py-2 rounded-full border border-teal-100 uppercase tracking-widest font-sans max-w-xl mx-auto lg:mx-0 text-center">
              <Sparkles className="w-3.5 h-3.5 text-teal-600 animate-pulse shrink-0" />
              🌍 Empowering Global youth with AI, coding, and cybersecurity skills.
            </div>
            
            {/* Primary Display Title */}
            <h1 className="text-4xl md:text-6xl font-display font-black tracking-tight text-slate-900 leading-[1.1]">
              Turn Screen Time Into{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-purple-600">
                Future-Ready Skills
              </span>
            </h1>

            {/* SaaS description for parent trust */}
            <div className="space-y-4 max-w-xl mx-auto lg:mx-0 text-left">
              <p className="text-slate-650 text-slate-600 text-sm md:text-base leading-relaxed font-semibold text-center lg:text-left">
                CLATS is a gamified educational platform that turns everyday screen time into powerful skill-building. We equip children (ages 2–18) with essential skills in AI, coding, and digital citizenship—all while giving parents and schools real-time insights into their progress.
              </p>
              
              <div className="flex flex-col items-center lg:items-start">
                <ul className="space-y-3.5 text-xs md:text-sm text-slate-700 font-extrabold font-sans text-left inline-block">
                  <li className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-teal-50 flex items-center justify-center border border-teal-100 shrink-0 mt-0.5">
                      <Sparkles className="w-3 h-3 text-teal-600" />
                    </div>
                    <span><strong>Built for Everyone:</strong> No prior tech experience needed.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-indigo-50 flex items-center justify-center border border-indigo-100 shrink-0 mt-0.5">
                      <Star className="w-3 h-3 text-indigo-600" />
                    </div>
                    <span><strong>Data-Friendly:</strong> Lightweight streaming optimized for low bandwidth.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-purple-50 flex items-center justify-center border border-purple-100 shrink-0 mt-0.5">
                      <Heart className="w-3 h-3 text-purple-600" />
                    </div>
                    <span><strong>Adaptive Learning:</strong> A curriculum that evolves from preschool to university prep.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button
                onClick={() => {
                  setHasInteractedWithHero(true);
                  awardXP(100, 'hero_get_started_clicked');
                  window.open('https://app.clats.org/', '_blank', 'noopener,noreferrer');
                  onOpenPortal();
                }}
                className="w-full sm:w-auto text-center bg-teal-500 text-white hover:bg-teal-400 font-extrabold text-sm px-8 py-4.5 rounded-2xl shadow-xl shadow-teal-500/20 hover:shadow-teal-500/35 transform hover:-translate-y-0.5 transition-all cursor-pointer border-0"
              >
                Start Your Child's Journey
              </button>
              <button
                onClick={() => {
                  setHasInteractedWithHero(true);
                  awardXP(100, 'hero_founding_clicked');
                  onNavigate('/founding-families');
                }}
                className="w-full sm:w-auto text-center bg-white border-2 border-purple-100 hover:border-purple-300 text-purple-700 hover:text-purple-800 font-extrabold text-sm px-8 py-4 rounded-2xl shadow-sm transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                Become a Founding Family
                <ChevronRight className="w-4 h-4 text-purple-500" />
              </button>
            </div>

            {/* B2B / Trust Banner */}
            <div className="pt-6 border-t border-slate-100 flex flex-wrap items-center justify-center lg:justify-start gap-y-3 gap-x-6 text-[11px] sm:text-[13px] text-slate-500 font-bold select-none font-sans uppercase tracking-wider">
              <span className="flex items-center gap-1.5 text-[#2EC4B6]">
                <CheckCircle className="w-3.5 h-3.5 shrink-0" />
                Trusted by modern educators
              </span>
              <span className="text-slate-200">|</span>
              <span className="flex items-center gap-1.5">
                <CheckCircle className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                100% Safe Ad-Free Space
              </span>
              <span className="text-slate-200">|</span>
              <span className="flex items-center gap-1.5">
                <CheckCircle className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                Gamified Quizzes
              </span>
              <span className="text-slate-200">|</span>
              <span className="flex items-center gap-1.5">
                <CheckCircle className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                Safe for Children
              </span>
            </div>

          </div>

          {/* Right Illustration Column */}
          <div className="lg:col-span-6 flex items-center justify-center">
            <div className="relative group max-w-lg md:max-w-xl">
              
              {/* Decorative radial circles representing paths */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-teal-400 to-purple-400 opacity-15 blur-xl group-hover:opacity-20 transition-all duration-700 pointer-events-none" />
              
              {/* Floating Star coins badges */}
              <div className="absolute -top-6 -left-6 bg-white border border-purple-100 p-3 rounded-2xl flex items-center gap-2.5 shadow-xl select-none animate-[bounce_3.5s_infinite]">
                <div className="w-6.5 h-6.5 bg-amber-400 rounded-full flex items-center justify-center">
                  <Star className="w-3.5 h-3.5 text-slate-950 fill-amber-500 stroke-[2.5]" />
                </div>
                <div className="leading-none text-left">
                  <span className="text-[10px] text-amber-600 font-black font-display uppercase tracking-wider">PLATFORM LIVE</span>
                  <p className="text-[9px] text-slate-400 block uppercase font-extrabold mt-0.5">Explore & Gain Stars</p>
                </div>
              </div>

              {/* Floating Access Code Badge */}
              <div className="absolute -bottom-6 -right-6 bg-white border border-purple-100 p-3.5 rounded-2xl flex items-center gap-2.5 shadow-xl select-none animate-[bounce_4.5s_infinite]">
                <div className="w-7 h-7 bg-purple-50 rounded-full flex items-center justify-center text-purple-750">
                  <Lock className="w-3.5 h-3.5 text-purple-600" />
                </div>
                <div className="leading-none text-left">
                  <span className="text-[10px] text-purple-600 font-bold block">Safe Virtual Guard</span>
                  <p className="text-[9px] text-slate-400 block uppercase font-extrabold mt-0.5">Privacy Protected</p>
                </div>
              </div>

              {/* Generated Illustration Frame element */}
              <div className="relative rounded-3xl overflow-hidden border-2 border-purple-50 shadow-lg bg-[#ffffff] p-1.5 group w-full">
                {/* The image is always rendered to maintain natural height/aspect-ratio */}
                <img
                  src="/assets/images/clats_kids_hero_illustration_1780169484342.png"
                  alt="CLATS"
                  referrerPolicy="no-referrer"
                  className={`w-full h-auto object-cover rounded-2xl transform scale-[1.01] transition-transform duration-700 ${
                    showHeroVideo ? 'opacity-0 pointer-events-none' : 'group-hover:scale-105'
                  }`}
                />

                {showHeroVideo ? (
                  <div className="absolute inset-1.5 rounded-2xl overflow-hidden bg-slate-950 z-10">
                    <iframe
                      src="https://www.youtube.com/embed/bHDcP9ao4wk?rel=0&autoplay=1&mute=0"
                      title="CLATS Lesson Demo Video"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                      className="absolute inset-0 w-full h-full border-0 rounded-2xl"
                    />
                    {/* Close / Return to Image Button */}
                    <button
                      onClick={() => setShowHeroVideo(false)}
                      className="absolute top-3 right-3 w-8 h-8 rounded-full bg-slate-950/80 hover:bg-slate-900 border border-white/10 flex items-center justify-center text-white cursor-pointer transition-colors shadow-md z-20 border-none animate-fadeIn"
                      title="Close Video"
                    >
                      <X className="w-4 h-4 text-white" />
                    </button>
                  </div>
                ) : (
                  /* Floating Video Play Overlay */
                  <button
                    onClick={() => {
                      setShowHeroVideo(true);
                      awardXP(50, 'hero_video_clicked');
                    }}
                    className="absolute inset-1.5 bg-slate-950/20 group-hover:bg-slate-950/40 flex items-center justify-center transition-all duration-300 cursor-pointer border-0 rounded-2xl"
                  >
                    <div className="w-16 h-16 rounded-full bg-white text-teal-600 flex items-center justify-center shadow-2xl transform group-hover:scale-110 transition-transform duration-300 border-2 border-teal-100">
                      <svg className="w-6 h-6 fill-current translate-x-0.5" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                    <span className="absolute bottom-6 bg-slate-950/80 text-white font-extrabold text-xs px-4 py-2 rounded-xl backdrop-blur-sm border border-white/10 uppercase tracking-wider shadow-md transform group-hover:translate-y-[-4px] transition-transform duration-300">
                      Play Lesson Demo 🎬
                    </span>
                  </button>
                )}
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* 2. THE CURRENT EDTECH CHALLENGE (PROBLEM SECTION) */}
      <ProblemSection />

      {/* 3. CLATS ADVANTAGE (SOLUTION SECTION) */}
      <SolutionSection />

      {/* 4. LEARNING THAT GROWS WITH YOUR CHILD PREVIEW */}
      <div className="relative bg-white pb-10">
        <GrowsWithChild />
        <div className="max-w-7xl mx-auto px-6 text-center -mt-8 pb-12 relative z-20">
          <button
            onClick={() => {
              awardXP(40, 'home_grows_learn_more');
              onNavigate('/pathways');
            }}
            className="inline-flex items-center gap-2 bg-[#B8A0FF] hover:bg-[#a185fc] text-slate-950 font-black text-xs uppercase tracking-wider px-8 py-4 rounded-2xl shadow-lg shadow-purple-500/10 cursor-pointer border-0 transition-all font-sans"
          >
            Explore Complete Learning Pathways
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* 5. FUTURE-TECH LEARNING ACADEMIES PREVIEW */}
      <div className="relative bg-gradient-to-b from-[#fafbff] to-white pb-10">
        <LearningAcademies />
        <div className="max-w-7xl mx-auto px-6 text-center -mt-8 pb-12 relative z-20">
          <button
            onClick={() => {
              awardXP(40, 'home_academies_learn_more');
              onNavigate('/pathways');
            }}
            className="inline-flex items-center gap-2 bg-[#2EC4B6] hover:bg-[#25B4A6] text-slate-950 font-black text-xs uppercase tracking-wider px-8 py-4 rounded-2xl shadow-lg shadow-teal-500/10 cursor-pointer border-0 transition-all font-sans"
          >
            Browse Modules, Lessons & Syllabus
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>


      {/* 6. GAMIFIED ROADMAP */}
      <HowItWorks />

      <ParentFeatures />

      {/* 7. KOBE & CHIBI PREVIEW */}
      <section 
        id="mascots-section" 
        onClick={() => {
          if (!hasVisitedMascots) {
            setHasVisitedMascots(true);
            awardXP(150, 'mascots_tab_visited');
          }
        }}
        className="py-20 bg-gradient-to-b from-white to-[#fafbff] relative"
      >
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center max-w-xl mx-auto mb-12 space-y-3">
            <span className="text-xs font-bold text-teal-600 bg-teal-500/10 border border-teal-500/15 px-3.5 py-1.5 rounded-full uppercase tracking-wider font-display">
              Meet our Mascot Companions
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-black text-slate-900 tracking-tight leading-tight">
              Kobe & Chibi Space Guide
            </h2>
            <p className="text-slate-500 text-xs md:text-sm font-medium">
              We guide children using friendly, highly expressive visual characters! Tap on a mentor's profile button below to ask about safety rules or tech missions.
            </p>
          </div>

          <MascotCard initialMascot="Kobe" />
        </div>
      </section>

      {/* 8. FOUNDING FAMILIES PREVIEW */}
      <section id="waitlist-section" className="py-24 bg-[#fafbff] border-t border-slate-100">
        <div className="max-w-5xl mx-auto px-6 space-y-8">
          
          {/* Become a CLATS Founding Family Horizontal Card */}
          <div className="bg-white border border-[#2EC4B6]/25 rounded-[3rem] p-8 md:p-12 shadow-xl relative overflow-hidden text-left font-sans">
            {/* Very light turquoise gradient glow in one corner */}
            <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-[#2EC4B6]/5 blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-[#B8A0FF]/5 blur-3xl pointer-events-none" />

            <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-stretch">
              
              {/* Left Side */}
              <div className="md:col-span-7 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2.5 items-center">
                    {/* Small Badge: EARLY ACCESS PROGRAM in light purple pill */}
                    <span className="text-[10px] font-black tracking-widest text-[#8A67F0] bg-[#B8A0FF]/15 px-3.5 py-1.5 rounded-full uppercase border border-[#B8A0FF]/25 font-sans">
                      EARLY ACCESS PROGRAM
                    </span>
                    {/* Early Access Badge (Yellow accent allowed) */}
                    <span className="text-[10px] font-sans font-extrabold text-[#9A7D0A] bg-amber-500/10 border border-amber-500/20 px-3.5 py-1.5 rounded-full uppercase tracking-wider flex items-center gap-1.5">
                      <span className="h-1.5 w-1.5 rounded-full bg-amber-500 animate-[pulse_1s_infinite]" />
                      Limited Slots
                    </span>
                  </div>

                  <h3 className="text-3xl md:text-4xl font-display font-black text-slate-900 tracking-tight leading-tight">
                    Become a CLATS Founding Family
                  </h3>
                  <h4 className="text-base md:text-lg font-bold text-slate-600 leading-snug">
                    Help Shape the Future of Technology Education for Children
                  </h4>

                  <div className="space-y-4 $10 text-slate-500 text-xs md:text-sm font-semibold leading-relaxed">
                    <p>
                      Join an exclusive community of forward-thinking parents helping build The World's next generation of creators, innovators, and problem-solvers.
                    </p>
                    <p>
                      As a CLATS Founding Family, you'll receive early access to our learning platform, opportunities to test new features, and a direct voice in shaping the future of children's AI and technology education.
                    </p>
                  </div>
                </div>

                {/* Live Access Callout Block */}
                <div className="bg-emerald-500/5 border border-emerald-300/30 p-5 rounded-2xl space-y-2 text-left">
                  <span className="text-[10px] font-mono tracking-wider font-extrabold text-emerald-700 uppercase block">
                    ⚡ PLATFORM IS LIVE
                  </span>
                  <p className="text-slate-600 text-xs font-semibold leading-relaxed">
                    Direct self-registration is now active! Launch the app today to create your child's profile and start learning future-ready technology skills.
                  </p>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4.5 pt-2">
                  <a
                    href="https://app.clats.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => {
                      awardXP(100, 'waitlist_registration_completed');
                    }}
                    className="bg-[#2EC4B6] hover:bg-[#25b5a7] text-slate-950 font-black text-xs uppercase tracking-wider px-8 py-4 px-7 rounded-2xl shadow-lg shadow-[#2EC4B6]/15 hover:shadow-[#2EC4B6]/30 transition-all cursor-pointer border-0 inline-flex items-center justify-center gap-2 no-underline text-center"
                  >
                    Launch Live App →
                  </a>
                  <button
                    onClick={() => onNavigate('/founding-families')}
                    className="text-slate-500 hover:text-slate-800 font-extrabold text-xs uppercase tracking-wider transition-colors py-3 underline cursor-pointer text-center bg-transparent border-none"
                  >
                    Learn About Supporter Perks
                  </button>
                </div>
              </div>

              {/* Right Side */}
              <div className="md:col-span-5">
                <div className="h-full bg-slate-50 border border-slate-100/80 rounded-[2.5rem] p-6.5 p-6 flex flex-col justify-between relative overflow-hidden shadow-xs hover:border-[#2EC4B6]/15 transition-all">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#B8A0FF]/5 rounded-full blur-2xl pointer-events-none" />
                  <div className="space-y-4">
                    <div className="w-10 h-10 rounded-xl bg-[#2EC4B6]/10 flex items-center justify-center text-[#2EC4B6]">
                      <Sparkles className="w-5 h-5" />
                    </div>
                    <h5 className="text-xl font-display font-black text-slate-900 tracking-tight leading-snug">
                      Building Tomorrow's Tech Minds Today
                    </h5>
                    <p className="text-slate-500 text-[15px] font-semibold leading-relaxed">
                      We prepare children to confidently learn, build, and lead with artificial intelligence and emerging software.
                    </p>
                  </div>
                  
                  <div className="mt-8 border-t border-slate-150/60 pt-6 space-y-3.5">
                    <div className="flex items-center gap-2.5 $10 text-slate-600 text-xs font-bold leading-none">
                      <CheckCircle className="w-4 h-4 text-[#2EC4B6] shrink-0" />
                      <span>Curriculum Grounded in Safety</span>
                    </div>
                    <div className="flex items-center gap-2.5 $10 text-slate-600 text-xs font-bold leading-none">
                      <CheckCircle className="w-4 h-4 text-[#2EC4B6] shrink-0" />
                      <span>Active Constructive Pathways</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Realtime Supabase connected Founding Family Progress Counter */}
          <FoundingFamilyProgressCounter />

        </div>
      </section>

      {/* 11. CONTACT PREVIEW CARD */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6 text-center space-y-6">
          <div className="max-w-xl mx-auto space-y-3">
            <span className="text-xxs font-black text-[#8A67F0] bg-purple-50 px-3 py-1.5 rounded-full uppercase tracking-widest border border-purple-100">
              Contact Desk Teaser
            </span>
            <h3 className="text-xl md:text-2xl font-display font-black text-slate-900 tracking-tight">
              Have Specific Questions?
            </h3>
            <p className="text-slate-500 text-xs md:text-sm font-medium">
              We'd love to hear from parents, teachers, and curious explorers alike. Hit our message terminal to write to our team directly.
            </p>
          </div>
          <button
            onClick={() => onNavigate('/contact')}
            className="inline-flex items-center gap-1.5 bg-slate-950 hover:bg-slate-800 text-white font-extrabold text-xs uppercase tracking-widest px-8 py-4 rounded-2xl transition-all cursor-pointer"
          >
            Send Us A Message
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </section>
    </div>
  );
}
