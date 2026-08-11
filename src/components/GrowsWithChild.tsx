import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, ArrowRight, BookOpen, Compass, Cpu, GraduationCap, Star } from 'lucide-react';

export default function GrowsWithChild() {
  const progressionSteps = [
    {
      id: 'early-explorers',
      ageGroup: 'Ages 2–5',
      title: 'Early Explorers',
      description: 'Curiosity-driven technology discovery through stories, visuals, play, and guided learning.',
      color: 'border-teal-200 bg-teal-50/50 text-teal-600',
      tagColor: 'bg-teal-100 text-teal-800 border-teal-200',
      icon: Compass,
      lineColor: 'border-teal-300',
      details: [
        'Interactive picture puzzles',
        'Visual shape & pattern matching',
        'Tech basics through stories',
        'Intro to mascot coaches Kobe & Chibi'
      ]
    },
    {
      id: 'young-innovators',
      ageGroup: 'Ages 6–12',
      title: 'Young Innovators',
      description: 'Foundational AI, digital literacy, cybersecurity awareness, creativity, and problem-solving.',
      color: 'border-purple-200 bg-purple-50/50 text-purple-600',
      tagColor: 'bg-purple-100 text-purple-800 border-purple-200',
      icon: Cpu,
      lineColor: 'border-purple-300',
      details: [
        'Visual block AI model training',
        'Internet safety guards & secret codes',
        'Interactive logic tree quizzes',
        'Creative design grids & vector arts'
      ]
    },
    {
      id: 'future-builders',
      ageGroup: 'Ages 13–18',
      title: 'Future Builders',
      description: 'Advanced AI, cybersecurity, innovation, entrepreneurship, portfolio development, and career readiness.',
      color: 'border-amber-200 bg-amber-50/50 text-amber-600',
      tagColor: 'bg-amber-100 text-amber-800 border-amber-200',
      icon: GraduationCap,
      lineColor: 'border-amber-300',
      details: [
        'Advanced Prompt engineering & LLM concepts',
        'Cybersecurity hygiene & phishing simulation',
        'Real-world portfolio website builder',
        'Core entrepreneurship & venture modeling'
      ]
    }
  ];

  return (
    <section id="grows-with-child-section" className="py-20 md:py-24 bg-white relative overflow-hidden font-sans border-b border-purple-50">
      {/* Decorative patterns */}
      <div className="absolute top-1/2 left-0 w-80 h-80 rounded-full bg-teal-400/5 blur-3xl pointer-events-none" />
      <div className="absolute top-1/4 right-0 w-80 h-80 rounded-full bg-purple-400/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Heading Tag */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-1.5 bg-[#FFD166]/15 text-slate-900 text-xxs font-black px-4.5 py-2 rounded-full border border-[#FFD166]/40 uppercase tracking-wider select-none font-sans"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#2EC4B6] shrink-0" />
            Curriculum Progression
          </motion.div>
          <h2 className="text-3xl md:text-5xl font-display font-black text-slate-900 tracking-tight leading-tight">
            Learning That{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-purple-600">
              Grows
            </span>{' '}
            With Your Child
          </h2>
          <p className="text-slate-500 text-sm md:text-base font-medium max-w-xl mx-auto">
            From playful discovery to serious future-proofing, CLATS adjusts dynamically to unleash your child's innate potential at every development phase.
          </p>
        </div>

        {/* Vertical progression visual */}
        <div className="max-w-4xl mx-auto relative pl-6 md:pl-0 mt-12">
          
          {/* Central vertical connecting line (hidden/shifted on mobile) */}
          <div className="absolute left-[29px] md:left-1/2 top-4 bottom-4 w-1 bg-gradient-to-b from-[#2EC4B6] via-[#B8A0FF] to-[#FFD166] rounded-full transform -translate-x-1/2 hidden md:block" />
          <div className="absolute left-[23px] top-4 bottom-4 w-1 bg-gradient-to-b from-[#2EC4B6] via-[#B8A0FF] to-[#FFD166] rounded-full md:hidden" />

          {progressionSteps.map((step, index) => {
            const Icon = step.icon;
            const isEven = index % 2 === 0;

            return (
              <div 
                key={step.id} 
                className={`relative mb-16 last:mb-0 grid grid-cols-1 md:grid-cols-12 gap-8 items-center ${
                  isEven ? 'md:text-right' : 'md:text-left'
                }`}
              >
                {/* Node marker point on the timeline line */}
                <div className="absolute left-[8px] md:left-1/2 top-1.5 md:top-1/2 transform md:-translate-x-1/2 md:-translate-y-1/2 z-20">
                  <div className={`w-8 h-8 rounded-full border-4 border-white shadow-md flex items-center justify-center ${
                    step.id === 'early-explorers' 
                      ? 'bg-[#2EC4B6]' 
                      : step.id === 'young-innovators' 
                      ? 'bg-purple-600' 
                      : 'bg-[#FFD166]'
                  } text-white`}>
                    <span className="text-xxs font-black">{index + 1}</span>
                  </div>
                </div>

                {/* Left Block: Render text coordinates depending on alignment */}
                <div className={`col-span-1 md:col-span-5 ${
                  isEven ? 'order-2 md:order-1' : 'order-2 md:col-start-8 md:order-2'
                }`}>
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? -20 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-40px' }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="space-y-4"
                  >
                    {/* Age pill */}
                    <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xxs font-black uppercase tracking-wider border select-none ${step.tagColor}`}>
                      {step.ageGroup}
                    </div>

                    <h3 className="text-xl md:text-2xl font-black text-slate-900 font-display">
                      {step.title}
                    </h3>
                    
                    <p className="text-slate-600 text-xs md:text-sm font-semibold leading-relaxed">
                      {step.description}
                    </p>

                    {/* Check items list */}
                    <ul className={`text-xxs font-bold text-slate-500 space-y-2 flex flex-col ${
                      isEven ? 'md:items-end' : 'md:items-start'
                    }`}>
                      {step.details.map((detail, dIdx) => (
                        <li key={dIdx} className="flex items-center gap-2">
                          {isEven && <span className="md:inline hidden text-teal-500">★</span>}
                          <span className={`${isEven ? 'md:text-right text-left' : 'text-left'}`}>{detail}</span>
                          {(!isEven || true) && <span className="md:hidden inline text-teal-500">★</span>}
                          {!isEven && <span className="md:inline hidden text-teal-500">★</span>}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </div>

                {/* Right Block: Decorative Icon Container on the opposite side */}
                <div className={`col-span-1 md:col-span-5 flex items-center ${
                  isEven ? 'order-1 md:order-2 md:col-start-8 justify-start' : 'order-1 md:order-1 justify-end'
                } hidden md:flex`}>
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.15 }}
                    className={`w-40 h-40 rounded-[2.5rem] border-2 flex items-center justify-center shadow-lg transform ${
                      index % 2 === 0 ? 'rotate-3 hover:rotate-0' : '-rotate-3 hover:rotate-0'
                    } transition-transform duration-300 ${step.color}`}
                  >
                    <Icon className="w-14 h-14" />
                  </motion.div>
                </div>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}
