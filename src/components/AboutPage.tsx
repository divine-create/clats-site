import React from 'react';
import { motion } from 'motion/react';
import { 
  Globe, Rocket, Users, GraduationCap, Cpu, Heart, Building, BookOpen, ChevronRight, HelpCircle, 
  Sparkles, CheckCircle, Smartphone, Flame, Award, Shield, Milestone 
} from 'lucide-react';

interface AboutPageProps {
  onNavigate: (path: string) => void;
  awardXP: (pts: number, actionId: string) => void;
}

export default function AboutPage({ onNavigate, awardXP }: AboutPageProps) {
  // CLATS core values data definitions
  const coreValues = [
    {
      id: 'safety',
      title: 'Safety-First & Privacy Protection',
      iconComponent: Shield,
      description: 'Zero advertisements, comprehensive parental controls, and offline resilience, all built to exceed global child safety standards.',
      color: 'border-slate-100 bg-white hover:border-teal-200 hover:shadow-md text-slate-900',
      iconColor: 'bg-[#2EC4B6]/10 text-[#2EC4B6]',
    },
    {
      id: 'accessibility',
      title: 'Accessibility & Low Bandwidth',
      iconComponent: Globe,
      description: 'Highly optimized, lightweight infrastructure ensures children on older devices or fluctuating networks can learn seamlessly without lag.',
      color: 'border-slate-100 bg-white hover:border-purple-200 hover:shadow-md text-slate-900',
      iconColor: 'bg-[#B8A0FF]/15 text-[#8A67F0]',
    },
    {
      id: 'gamified',
      title: 'Culturally-Anchored Engagement',
      iconComponent: Award,
      description: 'Engaging progress roadmaps and friendly mascot mentors that celebrate achievements using diverse, real-world contexts.',
      color: 'border-slate-100 bg-white hover:border-amber-200 hover:shadow-md text-slate-900',
      iconColor: 'bg-[#FFD166]/15 text-amber-600',
    },
    {
      id: 'empowerment',
      title: 'Active Constructive Play',
      iconComponent: Rocket,
      description: 'Transforming passive screen time into active, constructive engagement through logic modeling, creative coding, and secure design.',
      color: 'border-slate-100 bg-white hover:border-teal-200 hover:shadow-md text-slate-900',
      iconColor: 'bg-[#2EC4B6]/10 text-[#2EC4B6]',
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 space-y-24 animate-fadeIn font-sans">
      
      {/* HEADER HERO */}
      <section className="text-center max-w-3xl mx-auto space-y-6 pt-6">
        <div className="inline-flex items-center gap-1.5 bg-[#B8A0FF]/15 text-[#8A67F0] text-xs font-black px-4.5 py-2 rounded-full border border-[#B8A0FF]/25 uppercase tracking-wider select-none font-sans">
          <BookOpen className="w-3.5 h-3.5 text-[#8A67F0]" />
          Our Brand Story
        </div>
        <h1 className="text-4xl md:text-6xl font-display font-black text-slate-900 tracking-tight leading-[1.1]">
          Building The World's Future{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-purple-600">
            Tech Minds Today
          </span>
        </h1>
        <p className="text-slate-600 text-sm md:text-base leading-relaxed font-semibold max-w-xl mx-auto">
          CLATS was founded on a pivotal observation: children globally are spending more time on screens, yet remain passive consumers. Our mission is to transform passive screen time into an active, safety-first playground for future-tech innovation.
        </p>
      </section>

      {/* WHY CLATS EXISTS (THE PROBLEM BEING SOLVED / PHILOSOPHY) */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-teal-50/10 border border-teal-150 rounded-[3rem] p-8 md:p-12 shadow-sm">
        <div className="lg:col-span-7 space-y-6 text-left">
          <span className="text-[10px] font-mono tracking-widest text-teal-600 uppercase font-black">
            💡 The Future-Tech Learning Philosophy
          </span>
          <h2 className="text-3xl font-display font-black text-slate-900 tracking-tight leading-snug">
            Why CLATS Exists
          </h2>
          <div className="space-y-4 text-slate-600 text-sm md:text-[15px] leading-relaxed font-medium">
            <p>
              We live in a rapidly evolving digital era, yet millions of children worldwide still lack access to the structured, age-appropriate education required to confidently navigate and lead in a technology-driven landscape.
            </p>
            <p>
              While today's youth are surrounded by artificial intelligence and emerging software, traditional education often focuses on merely <em>using</em> technology. We believe children must learn to fundamentally understand it, create with it, and safely adapt to its continuous changes.
            </p>
            <p className="font-extrabold text-[#8A67F0] border-l-4 border-[#8A67F0] pl-4 italic">
              The future belongs to agile learners who can think critically, solve complex problems creatively, and design solutions with empathy.
            </p>
            <p>
              Through AI-driven personalized pathways, culturally inclusive gamification, and robust safety frameworks, CLATS empowers children globally to evolve from digital consumers into the next generation of visionary creators and responsible digital citizens.
            </p>
          </div>
        </div>
        <div className="lg:col-span-5 flex justify-center">
          <div className="w-full max-w-xs bg-white border border-teal-120 p-6 rounded-2xl shadow-xl space-y-4 transform rotate-1">
            <div className="w-10 h-10 bg-teal-50 rounded-xl flex items-center justify-center text-xl">
              💡
            </div>
            <h4 className="text-slate-950 font-extrabold text-[15px] font-display">
              CLATS Cognitive Shield
            </h4>
            <p className="text-slate-500 text-xs leading-relaxed font-medium text-left">
              "We safeguard young minds through proactive, guided training. Our proprietary ecosystem teaches children to confidently navigate digital risks, distinguish machine-generated content, and practice safe online habits."
            </p>
            <div className="flex gap-2 text-[10px] uppercase font-bold tracking-wider text-[#2EC4B6]">
              <span>✓ COPPA Certified</span>
              <span>✓ 0% Ads</span>
            </div>
          </div>
        </div>
      </section>

      {/* VISION 2030 COPIED PRECISELY FROM ORIGINAL SECTION */}
      <section id="vision-2030-section" className="relative overflow-hidden w-full px-6">
        <div className="absolute inset-0 bg-gradient-to-br from-[#2EC4B6]/5 via-white to-[#B8A0FF]/5 rounded-[3rem] pointer-events-none" />
        <div className="absolute -top-12 -left-12 w-64 h-64 rounded-full bg-[#2EC4B6]/5 blur-3xl pointer-events-none animate-pulse" />
        <div className="absolute -bottom-12 -right-12 w-72 h-72 rounded-full bg-[#B8A0FF]/5 blur-3xl pointer-events-none animate-pulse" />

        <div className="max-w-6xl mx-auto py-16 px-4 md:px-12 relative z-10 text-center space-y-8">
          <div className="inline-flex items-center gap-2 bg-[#2EC4B6]/10 text-[#2EC4B6] text-xs font-black px-4.5 py-2 rounded-full border border-[#2EC4B6]/20 uppercase tracking-widest">
            <span className="text-sm">🌍</span> Vision 2030
          </div>

          <h2 className="text-3xl md:text-5xl font-display font-black text-slate-900 tracking-tight leading-[1.1] max-w-4xl mx-auto">
            Building The World's Largest{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2EC4B6] to-[#8A67F0]">
              Future-Tech Learning Ecosystem
            </span>{' '}
            for Children
          </h2>

          <div className="bg-white/80 backdrop-blur-md border border-white/80 rounded-[2.5rem] p-6 md:p-12 shadow-xl shadow-slate-100/50 max-w-5xl mx-auto relative overflow-hidden group">
            <div className="absolute top-4 right-4 text-xs font-mono text-slate-300 pointer-events-none select-none">
              GRID // SCALE 2030_ECO
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center text-left">
              <div className="lg:col-span-7 space-y-6">
                <p className="text-[#2EC4B6] font-extrabold text-base md:text-lg leading-relaxed">
                  By 2030, CLATS aims to empower over 1 million children worldwide, equipping them with the knowledge, confidence, and technical fluency to thrive in an AI-driven economy.
                </p>
                <p className="text-slate-600 text-sm md:text-base leading-relaxed font-semibold">
                  We are building an accessible, highly scalable digital learning infrastructure. By blending advanced personalization, immersive gamification, and universal cultural relevance, we provide an unparalleled educational standard that transcends borders.
                </p>
                <p className="text-slate-600 text-sm md:text-base leading-relaxed font-semibold">
                  Our ultimate vision is absolute democratization of future-tech education. Regardless of geography or socioeconomic background, every child deserves the tools to build, lead, and shape the technologies of tomorrow.
                </p>

                <div className="pt-4 grid grid-cols-3 gap-4 border-t border-slate-100">
                  <div className="leading-none">
                    <span className="text-xl md:text-3xl font-black text-slate-900">1M+</span>
                    <p className="text-[10px] uppercase font-bold text-slate-400 mt-1">Kids Empowered</p>
                  </div>
                  <div className="leading-none">
                    <span className="text-xl md:text-3xl font-black text-slate-900">24</span>
                    <p className="text-[10px] uppercase font-bold text-slate-400 mt-1">Nations Reached</p>
                  </div>
                  <div className="leading-none">
                    <span className="text-xl md:text-3xl font-black text-slate-900">2030</span>
                    <p className="text-[10px] uppercase font-bold text-slate-400 mt-1">Target Horizon</p>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 flex justify-center">
                <div className="relative">
                  <div className="absolute -inset-4 rounded-full bg-gradient-to-tr from-[#2EC4B6]/20 to-[#B8A0FF]/20 animate-spin opacity-60" style={{ animationDuration: '12s' }} />
                  <div className="absolute -inset-1 rounded-full border border-dashed border-slate-200 animate-spin" style={{ animationDuration: '24s' }} />
                  
                  <div className="w-64 h-64 md:w-80 md:h-80 rounded-[2.5rem] bg-gradient-to-b from-teal-50 to-indigo-50 border-4 border-white flex flex-col items-center justify-center relative shadow-inner overflow-hidden">
                    <div className="absolute top-6 md:top-8 text-[7rem] md:text-[9rem] leading-none select-none animate-pulse">🌍</div>
                    
                    <div className="relative z-10 flex flex-col items-center justify-center bg-white/90 backdrop-blur-sm border border-white/50 px-4 py-3 rounded-2xl shadow-sm text-center mx-4 mt-20 md:mt-24">
                      <span className="text-xs uppercase font-black text-slate-800 tracking-widest leading-none">CLATS Global Hub</span>
                      <span className="text-[10px] font-mono text-purple-600 font-extrabold bg-purple-50 px-2 py-0.5 rounded-full border border-purple-100 mt-1.5 animate-pulse">Continental Reach</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CORE VALUES */}
      <section className="space-y-12">
        <div className="text-center max-w-xl mx-auto space-y-4">
          <span className="text-xxs font-black text-amber-600 bg-[#FFD166]/15 border border-[#FFD166]/30 px-3 py-1 rounded-full uppercase tracking-widest font-sans inline-block">
            🌟 Foundation Guidelines
          </span>
          <h2 className="text-3xl font-display font-black text-slate-900 tracking-tight leading-tight">
            Our Core Values
          </h2>
          <p className="text-slate-500 text-xs md:text-sm font-medium">
            At the heart of CLATS, four basic operational pillars decide how we formulate our curriculum roadmaps, screen graphics, and companion scripts.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {coreValues.map((value) => {
            const IconComponent = value.iconComponent;
            return (
              <div 
                key={value.id} 
                className={`p-6 md:p-8 rounded-[2rem] border transition-all duration-300 flex flex-col justify-start text-left space-y-5 ${value.color}`}
              >
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center border border-slate-100 ${value.iconColor}`}>
                  <IconComponent className="w-5 h-5 shrink-0" />
                </div>
                <div className="space-y-2">
                  <h4 className="text-slate-900 font-extrabold text-base font-display leading-tight">{value.title}</h4>
                  <p className="text-slate-500 text-xs font-semibold leading-relaxed font-sans">{value.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>


      {/* CALL TO ACTION LINK PATHWAYS */}
      <section className="text-center bg-gradient-to-r from-teal-500 to-purple-600 text-white rounded-[3rem] p-10 md:p-14 shadow-xl shadow-purple-500/10 space-y-6 relative overflow-hidden flex flex-col items-center">
        <div className="absolute inset-0 bg-grid opacity-[0.05] pointer-events-none" />
        <span className="text-xxs font-black text-teal-950 bg-teal-100 px-3.5 py-1 rounded-full uppercase tracking-widest">
          Explore Kids Curriculums
        </span>
        <h3 className="text-2xl md:text-4xl font-display font-black tracking-tight text-white max-w-xl mx-auto leading-tight">
          Ready to Discover Kobe & Chibi's Syllabus?
        </h3>
        <p className="text-white/80 text-xs md:text-sm font-semibold max-w-lg mx-auto">
          Our curriculum is dynamically structured around age cohorts, ensuring every child—from early explorers to future builders—learns at their precise conceptual level.
        </p>
        <button
          onClick={() => {
            awardXP(50, 'about_pathways_cta_clicked');
            onNavigate('/pathways');
          }}
          className="bg-white hover:bg-slate-50 text-slate-950 font-black text-xs md:text-sm uppercase tracking-wider px-8 py-4 rounded-2xl shadow-lg transition-transform hover:-translate-y-px cursor-pointer border-0 inline-flex items-center gap-1.5"
        >
          Explore Learning Pathways
          <ChevronRight className="w-4 h-4 text-purple-600 stroke-[2.5]" />
        </button>
      </section>

    </div>
  );
}
