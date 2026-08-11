import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Bot, Lock, Palette, Rocket, X, CheckCircle, ChevronRight, Compass } from 'lucide-react';

export default function LearningAcademies() {
  const [selectedAcademy, setSelectedAcademy] = useState<any | null>(null);

  const academies = [
    {
      id: 'ai-emerging',
      title: 'AI & Emerging Technologies',
      emoji: '🤖',
      shortDesc: 'Explore AI, machine learning concepts, prompt engineering, generative AI, blockchain foundations, and future technologies.',
      gradient: 'from-teal-500 to-teal-600',
      borderClass: 'border-teal-200 hover:border-teal-400 group-hover:shadow-teal-100',
      iconBg: 'bg-teal-50 text-teal-600',
      icon: Bot,
      courseCount: '6 Modules',
      xpReward: '+200 XP',
      features: [
        'How Machine Brains Think (Visual Models)',
        'Prompt Engineering Crafting for Kids',
        'Intro to Neural Networks using Shapes',
        'Generative Art & Visual Reasoning Labs',
        'Future Blockchain & Decentered Systems basics',
        'The Ethics of Code & AI Accountability'
      ]
    },
    {
      id: 'digital-citizenship',
      title: 'Digital Citizenship & Cybersecurity',
      emoji: '🔒',
      shortDesc: 'Build digital confidence, internet safety awareness, privacy protection, and responsible technology habits.',
      gradient: 'from-rose-500 to-rose-600',
      borderClass: 'border-rose-200 hover:border-rose-400 group-hover:shadow-rose-100',
      iconBg: 'bg-rose-50 text-rose-600',
      icon: Lock,
      courseCount: '8 Modules',
      xpReward: '+250 XP',
      features: [
        'Malicious Link Spotting (Phishing Scams)',
        'Secret Encrypted Password Forts',
        'Adware Guards & Anti-cookies Training',
        'Respectful Chat Guidelines for Children',
        'Private Cloud Locks & Data Sovereignty',
        'Healthy Tech Habits & Focus Breaks'
      ]
    },
    {
      id: 'design-creation',
      title: 'Design & Creation',
      emoji: '🎨',
      shortDesc: 'Develop creativity through design thinking, storytelling, visual communication, and digital project creation.',
      gradient: 'from-purple-500 to-purple-600',
      borderClass: 'border-purple-200 hover:border-purple-400 group-hover:shadow-purple-100',
      iconBg: 'bg-purple-50 text-purple-600',
      icon: Palette,
      courseCount: '5 Modules',
      xpReward: '+180 XP',
      features: [
        'Beautiful Vector Shapes & Grids',
        'Visual Design Thinking & Problem Maps',
        'Creative Digital Storytelling Pages',
        'Animation Loops & Screen Coordinates',
        'Safe UI Design for Kid Applications',
        'Color Harmonies & Contrast Checking'
      ]
    },
    {
      id: 'innovation-career',
      title: 'Innovation & Career Readiness',
      emoji: '🚀',
      shortDesc: 'Learn leadership, teamwork, entrepreneurship, portfolio-building, and future career skills.',
      gradient: 'from-amber-500 to-amber-600',
      borderClass: 'border-amber-200 hover:border-amber-400 group-hover:shadow-amber-100',
      iconBg: 'bg-amber-50 text-amber-600',
      icon: Rocket,
      courseCount: '7 Modules',
      xpReward: '+220 XP',
      features: [
        'Teamwork Basics in Virtual Labs',
        'Youth Entrepreneurship & Venture Maps',
        'Creative Digital Portfolio Building',
        'Interactive Pitching Workshops',
        'Real-world Problem Solving Frameworks',
        'Future Outlook: Emerging Job Paths'
      ]
    },
    {
      id: 'adaptability-learning',
      title: 'Adaptability & Lifelong Learning',
      emoji: '🧭',
      shortDesc: 'Prepare children to thrive in a rapidly changing world by developing critical thinking, curiosity, resilience, learning agility, and problem-solving skills.',
      gradient: 'from-blue-500 to-indigo-600',
      borderClass: 'border-blue-200 hover:border-blue-400 group-hover:shadow-blue-100',
      iconBg: 'bg-blue-50 text-blue-600',
      icon: Compass,
      courseCount: '6 Modules',
      xpReward: '+300 XP',
      features: [
        'Critical Thinking',
        'Curiosity & Exploration',
        'Learning Agility',
        'Technology Confidence',
        'Problem Solving',
        'Growth Mindset'
      ]
    }
  ];

  const handleLearnMore = (academy: any) => {
    setSelectedAcademy(academy);
  };

  const handleClose = () => {
    setSelectedAcademy(null);
  };

  return (
    <section id="learning-academies-section" className={`py-20 md:py-24 bg-gradient-to-b from-[#fafbff] to-white relative overflow-hidden font-sans border-b border-purple-55 ${selectedAcademy ? 'z-[999999]' : 'z-10'}`}>
      {/* Decorative radial circles */}
      <div className="absolute top-1/3 left-10 w-96 h-96 rounded-full bg-[#2EC4B6]/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 right-10 w-96 h-96 rounded-full bg-purple-500/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold tracking-widest text-[#8A67F0] uppercase bg-purple-50 border border-purple-150 px-3.5 py-1.5 rounded-full select-none">
            ⭐ Knowledge Pillars
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-black text-slate-900 tracking-tight leading-tight">
            Future-Tech{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-purple-600">
              Learning Academies
            </span>
          </h2>
          <p className="text-slate-500 text-sm md:text-base font-medium">
            Explore our core curriculum academies, specialized in training tomorrow's technical minds and global leaders.
          </p>
        </div>

        {/* Academies Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {academies.map((academy) => {
            const Icon = academy.icon;
            
            return (
              <motion.div
                key={academy.id}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className={`bg-white border rounded-[2.5rem] p-7 transition-all duration-300 relative overflow-hidden flex flex-col justify-between shadow-sm group hover:shadow-xl hover:bg-neutral-50/50 ${academy.borderClass}`}
              >
                {/* Visual subtle grid in background */}
                <div className="absolute inset-0 bg-grid opacity-[0.01] pointer-events-none" />

                <div className="space-y-5">
                  
                  {/* Card Header indicators */}
                  <div className="flex justify-between items-center text-slate-400 select-none">
                    <span className="text-[9px] font-mono font-bold px-2 py-0.5 rounded bg-slate-50 border border-slate-100 flex items-center gap-1 text-slate-500">
                      <Sparkles className="w-2.5 h-2.5 text-amber-500" />
                      {academy.courseCount}
                    </span>
                    <span className="text-[10px] font-bold text-teal-600 font-mono bg-teal-50 px-1.5 py-0.5 rounded-full">
                      {academy.xpReward}
                    </span>
                  </div>

                  {/* Icon Panel */}
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-105 duration-300 ${academy.iconBg}`}>
                    <Icon className="w-5.5 h-5.5 stroke-[2.2]" />
                  </div>

                  {/* Body Textual Elements */}
                  <div className="space-y-2">
                    <h3 className="text-slate-900 font-black text-lg tracking-tight leading-tight group-hover:text-purple-600 transition-colors font-display">
                      {academy.title}
                    </h3>
                    <p className="text-slate-500 text-xs leading-relaxed font-semibold">
                      {academy.shortDesc}
                    </p>
                  </div>

                </div>

                {/* Learn More Button & CTA link */}
                <div className="pt-6 mt-6 border-t border-slate-50 flex items-center justify-between select-none">
                  <button
                    type="button"
                    onClick={() => handleLearnMore(academy)}
                    className="text-xxs font-black text-slate-800 uppercase tracking-widest bg-slate-50 hover:bg-gradient-to-r hover:from-teal-500 hover:to-purple-600 hover:text-white px-4.5 py-2.5 rounded-xl border border-slate-200 shadow-sm transition-all cursor-pointer flex items-center gap-1"
                  >
                    Learn More
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${academy.iconBg}`}>
                    {React.createElement(academy.icon, { className: "w-4 h-4" })}
                  </div>
                </div>

              </motion.div>
            );
          })}
        </div>

        {/* Modal Backdrop & Dialog for Learn More */}
        <AnimatePresence>
          {selectedAcademy && (
            <div className="fixed inset-0 z-[999999] flex items-center justify-center p-3 sm:p-4 md:p-6">
              {/* Overlay background */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={handleClose}
                className="absolute inset-0 bg-slate-950/60 backdrop-blur-sm pointer-events-auto"
              />

              {/* Popup Window Container */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 15 }}
                className="bg-white border border-slate-150 rounded-[1.75rem] shadow-[0_25px_60px_rgba(0,0,0,0.22)] p-5 sm:p-7 w-full max-w-[436px] max-h-[85vh] overflow-y-auto relative z-10 font-sans text-left"
              >
                
                {/* Colored visual header */}
                <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${selectedAcademy.gradient}`} />

                {/* Close Button top-right corner */}
                <button
                  type="button"
                  onClick={handleClose}
                  className="absolute top-4 right-4 w-7 h-7 rounded-full bg-slate-100 hover:bg-slate-200 border border-slate-200 flex items-center justify-center text-slate-500 hover:text-slate-900 transition-colors cursor-pointer outline-none p-0"
                >
                  <X className="w-3.5 h-3.5 stroke-[2.5]" />
                </button>

                <div className="space-y-5 pt-2">
                  
                  {/* Headline Title */}
                  <div className="flex items-center gap-3">
                    <div className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 ${selectedAcademy.iconBg}`}>
                      {React.createElement(selectedAcademy.icon, { className: "w-5 h-5 shrink-0 stroke-[2.2]" })}
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg font-black text-slate-900 font-display tracking-tight pr-6 leading-tight">
                        {selectedAcademy.title}
                      </h3>
                      <span className="text-[10px] font-mono font-bold text-teal-600 bg-teal-50 px-2 py-0.5 rounded-full mt-1 inline-block">
                        Earns {selectedAcademy.xpReward}
                      </span>
                    </div>
                  </div>

                  {/* Summary paragraph */}
                  <p className="text-slate-500 text-xs font-semibold leading-relaxed">
                    {selectedAcademy.shortDesc}
                  </p>

                  {/* Sub-features or curriculum syllabus list */}
                  <div className="space-y-3 bg-slate-50 rounded-2xl p-4 border border-slate-100">
                    <span className="text-[9px] uppercase font-bold tracking-wider text-slate-400 block font-mono">
                      📚 Featured Syllabus Labs & Modules
                    </span>
                    <div className="space-y-2 text-xs font-bold $10 text-slate-700">
                      {selectedAcademy.features.map((feat: string, idx: number) => (
                        <div key={idx} className="flex gap-2 items-start text-left bg-white p-2.5 rounded-xl border border-slate-100 shadow-sm">
                          <CheckCircle className="w-3.5 h-3.5 text-[#2EC4B6] shrink-0 mt-0.5" />
                          <span className="leading-normal font-sans text-slate-600">{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA Buttons */}
                  <div className="flex flex-col sm:flex-row gap-2 pt-1 font-sans">
                    <a
                      href="#waitlist-section"
                      onClick={handleClose}
                      className="flex-1 text-center bg-[#2EC4B6] hover:bg-[#25B4A6] text-slate-950 font-black text-xs uppercase tracking-wider py-3.5 px-4 rounded-xl shadow-md transition-colors cursor-pointer flex items-center justify-center gap-1 border-0"
                    >
                      <span>Join Academy Waitlist</span>
                      <ChevronRight className="w-3.5 h-3.5 shrink-0" />
                    </a>
                    <button
                      type="button"
                      onClick={handleClose}
                      className="px-5 py-3.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-extrabold text-xs uppercase tracking-wider rounded-xl transition-colors cursor-pointer border border-slate-200"
                    >
                      Close
                    </button>
                  </div>

                </div>

              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
