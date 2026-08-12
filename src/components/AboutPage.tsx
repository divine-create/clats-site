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
      description: 'Strictly zero ads, family-controlled parameters, and offline-resilience complying with global child safety frameworks.',
      color: 'border-slate-100 bg-white hover:border-teal-200 hover:shadow-md text-slate-900',
      iconColor: 'bg-[#2EC4B6]/10 text-[#2EC4B6]',
    },
    {
      id: 'accessibility',
      title: 'Accessibility & Low Bandwidth',
      iconComponent: Globe,
      description: 'Custom optimized asset weights ensuring toddlers on older smartphones or fluctuating networks can learn lag-free.',
      color: 'border-slate-100 bg-white hover:border-purple-200 hover:shadow-md text-slate-900',
      iconColor: 'bg-[#B8A0FF]/15 text-[#8A67F0]',
    },
    {
      id: 'gamified',
      title: 'Culturally-Anchored Engagement',
      iconComponent: Award,
      description: 'High-retention progress roadmaps and lovely mascot mentors celebrating achievements using Global contexts.',
      color: 'border-slate-100 bg-white hover:border-amber-200 hover:shadow-md text-slate-900',
      iconColor: 'bg-[#FFD166]/15 text-amber-600',
    },
    {
      id: 'empowerment',
      title: 'Active Constructive Play',
      iconComponent: Rocket,
      description: 'Transforming passive screen distraction into active logic modeling, security posture design, and prompt creation.',
      color: 'border-slate-100 bg-white hover:border-teal-200 hover:shadow-md text-slate-900',
      iconColor: 'bg-[#2EC4B6]/10 text-[#2EC4B6]',
    }
  ];

  // Chronic list timelines
  const timelineMilestones = [
    {
      year: '2025 and Ongoing',
      title: 'Conceptual Seed & Child Screen Safety Research',
      desc: 'Formulation of digital protection rules, pedagogical models, and research on safe tech adoption for children across the Global continent.'
    },
    {
      year: 'Early 2026',
      title: 'Kobe & Chibi Space Guide Designs',
      desc: 'Creation of expressive companion coach sprites (Kobe & Chibi) and the layout of our five cornerstone digital syllabus pillars.'
    },
    {
      year: 'Mid 2026 (Now)',
      title: 'Production Phase: Platform Launch & Live Portal Access',
      desc: 'Initiating direct public platform registration and preparing database layers, local mock sandboxes, and early adopter surveys.'
    },
    {
      year: 'Late 2026',
      title: 'Interactive Block-Syllabus Beta portal',
      desc: 'Launches exclusive sandbox accounts for founding family cohort, revealing immersive visual AI logs and secure password simulators.'
    },
    {
      year: '2027 & Beyond',
      title: 'Multi-lingual Global Reach expansion',
      desc: 'Deploying optimized localized language features and partnering closely with school districts to teach digital safety at scale.'
    }
  ];

  // SDG alignments
  const sdgAlignments = [
    {
      number: 'SDG 4',
      title: 'Quality Education',
      iconComponent: GraduationCap,
      desc: 'CLATS expands access to age-appropriate, engaging, and personalized future-tech education by introducing children to digital literacy, artificial intelligence, cybersecurity, creativity, and problem-solving through structured learning pathways.'
    },
    {
      number: 'SDG 8',
      title: 'Decent Work & Economic Growth',
      iconComponent: Building,
      desc: 'CLATS helps prepare young learners for future opportunities by developing foundational technology, innovation, leadership, communication, and career-readiness skills that support long-term participation in the digital economy.'
    },
    {
      number: 'SDG 9',
      title: 'Industry, Innovation & Infrastructure',
      iconComponent: Cpu,
      desc: 'CLATS promotes innovation by introducing children to emerging technologies and fostering a culture of creativity, experimentation, and technology-driven problem solving from an early age.'
    },
    {
      number: 'SDG 10',
      title: 'Reduced Inequalities',
      iconComponent: Users,
      desc: 'CLATS aims to reduce digital opportunity gaps by making future-tech learning more accessible and understandable for children from diverse backgrounds, helping more young people participate in the opportunities created by the digital age.'
    },
    {
      number: 'SDG 17',
      title: 'Partnerships for the Goals',
      iconComponent: Heart,
      desc: 'CLATS collaborates with parents, educators, schools, technology organizations, community groups, and development partners to expand access to future-ready learning experiences and create greater impact together.'
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
          CLATS was born out of a simple observation: Global toddlers are increasingly glued to screens, but they are consuming, not creating. We are here to transform screen time into a safety-first future-tech playground.
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
              Global is home to one of the world's fastest-growing youth populations, yet many children still have limited access to structured, age-appropriate learning experiences that prepare them for a rapidly evolving digital future.
            </p>
            <p>
              Today's children are growing up surrounded by artificial intelligence, digital platforms, and emerging technologies. However, most educational experiences focus on teaching them how to use technology rather than how to understand it, create with it, and adapt as it changes.
            </p>
            <p className="font-extrabold text-[#8A67F0] border-l-4 border-[#8A67F0] pl-4 italic">
              The future belongs to learners who can think critically, solve problems creatively, embrace change, and continuously learn.
            </p>
            <p>
              Through personalized pathways, gamified learning experiences, learning companions, and future-tech education, CLATS helps children develop the confidence, adaptability, and skills needed to become creators, innovators, and responsible digital citizens.
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
              "We shield child awareness through safe training. They learn how to tell the difference between machine generated illustrations, safe code, and bad web scams."
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
                  By 2030, CLATS aims to empower over 1 million children across Global with the knowledge, confidence, and skills to thrive in an AI-driven world.
                </p>
                <p className="text-slate-650 text-slate-600 text-sm md:text-base leading-relaxed font-semibold">
                  Through personalized learning, gamification, accessibility, and culturally relevant education, CLATS will help children move beyond consuming technology to understanding it, creating with it, and shaping the future through it.
                </p>
                <p className="text-slate-650 text-slate-600 text-sm md:text-base leading-relaxed font-semibold">
                  Our vision is to ensure that every child, regardless of background, location, or socioeconomic status has access to world-class future-tech education that prepares them for the opportunities of tomorrow.
                </p>

                <div className="pt-4 grid grid-cols-3 gap-4 border-t border-slate-100">
                  <div className="leading-none">
                    <span className="text-xl md:text-3xl font-black text-slate-900">1M+</span>
                    <p className="text-[10px] uppercase font-bold text-slate-400 mt-1">Kids Empowered</p>
                  </div>
                  <div className="leading-none">
                    <span className="text-xl md:text-3xl font-black text-slate-900">24</span>
                    <p className="text-[10px] uppercase font-bold text-slate-400 mt-1">Global Nations</p>
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
                      <span className="text-xs uppercase font-black text-slate-800 tracking-widest leading-none">CLATS Global hub</span>
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

      {/* CHRONOLOGY TIMELINE */}
      <section className="space-y-16">
        <div className="text-center max-w-xl mx-auto space-y-4">
          <span className="text-xxs font-black text-[#8A67F0] bg-purple-50 border border-purple-150 px-3 py-1 rounded-full uppercase tracking-widest font-sans inline-block">
            📈 Dynamic Chronology
          </span>
          <h2 className="text-3xl font-display font-black text-slate-900 tracking-tight">
            Timeline of CLATS
          </h2>
          <p className="text-slate-500 text-xs md:text-sm font-medium">
            Tracing our journey from early educational ideology to continental deployment and multi-language school expansions.
          </p>
        </div>

        <div className="max-w-3xl mx-auto relative pl-4 md:pl-0">
          {/* Vertical path line */}
          <div className="absolute left-[20px] md:left-1/2 top-4 bottom-4 w-1 bg-gradient-to-b from-[#2EC4B6] via-[#B8A0FF] to-[#FFD166] rounded-full transform -translate-x-1/2 hidden md:block" />
          <div className="absolute left-[15px] top-4 bottom-4 w-1 bg-gradient-to-b from-[#2EC4B6] via-[#B8A0FF] to-[#FFD166] rounded-full md:hidden" />

          <div className="space-y-12">
            {timelineMilestones.map((item, index) => {
              const isEven = index % 2 === 0;
              return (
                <div key={index} className={`relative flex flex-col md:grid md:grid-cols-12 md:gap-8 items-center ${isEven ? 'md:text-right' : 'md:text-left'}`}>
                  
                  {/* Timeline point indicator */}
                  <div className="absolute left-[15px] md:left-1/2 top-1.5 md:top-1/2 transform -translate-x-1/2 md:-translate-y-1/2 z-10 w-4 h-4 rounded-full bg-slate-950 border-4 border-white" />

                  {/* Date marker block */}
                  <div className={`col-span-1 md:col-span-5 ${isEven ? 'order-1 md:text-right text-left pl-10 md:pl-0' : 'order-1 md:col-start-8 pl-10 md:pl-0'}`}>
                    <div className="space-y-1.5">
                      <span className="inline-block px-3 py-1 rounded-xl bg-slate-950 text-white font-mono text-xs font-black select-none">
                        {item.year}
                      </span>
                      <h4 className="text-slate-900 font-extrabold text-sm md:text-base font-display">{item.title}</h4>
                      <p className="text-slate-500 text-xs font-semibold leading-relaxed leading-normal">{item.desc}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Sustainable Development Goals (SDG) ALIGNMENT */}
      <section className="space-y-12">
        <div className="text-center max-w-xl mx-auto space-y-4">
          <span className="text-[#2EC4B6] text-xxs font-black bg-teal-50 border border-teal-150 px-3 py-1 rounded-full uppercase tracking-widest font-sans inline-block">
            🌱 United Nations Accord
          </span>
          <h2 className="text-3xl font-display font-black text-slate-900 tracking-tight">
            SDG Alliance Alignment
          </h2>
          <p className="text-slate-500 text-xs md:text-sm font-semibold leading-relaxed">
            CLATS aligns its mission with the United Nations Sustainable Development Goals (SDGs) by helping children develop future-ready skills, digital confidence, and lifelong learning habits in an increasingly technology-driven world.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {sdgAlignments.map((sdg) => {
            const Icon = sdg.iconComponent;
            return (
              <div 
                key={sdg.number} 
                className="p-5 border border-slate-100 bg-white hover:border-purple-200 shadow-sm hover:shadow-md transition-all rounded-2xl flex flex-col justify-between text-left space-y-4 font-sans"
              >
                <div className="flex justify-between items-center pb-2 border-b border-slate-100">
                  <span className="text-purple-600 font-extrabold text-[12px] font-mono tracking-wider">{sdg.number}</span>
                  <div className="p-1.5 bg-purple-50 rounded-lg text-purple-600">
                    <Icon className="w-4 h-4" />
                  </div>
                </div>
                <div className="space-y-2">
                  <h4 className="text-slate-900 font-extrabold text-[13px] font-display min-h-[36px] leading-tight">{sdg.title}</h4>
                  <p className="text-slate-500 text-[11px] leading-relaxed font-semibold font-sans">{sdg.desc}</p>
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
          We organize our curriculum academies dynamically around age cohorts so toddlers and teenagers learn at their precise conceptual levels.
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
