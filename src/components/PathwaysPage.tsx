import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Sparkles, Bot, Lock, Palette, Rocket, X, CheckCircle, ChevronRight, GraduationCap, 
  BookOpen, Terminal, Shield, MessageSquare, Compass, Eye, Filter 
} from 'lucide-react';

interface PathwaysPageProps {
  onNavigate: (path: string) => void;
  onOpenPortal: () => void;
  awardXP: (pts: number, actionId: string) => void;
}

export default function PathwaysPage({ onNavigate, onOpenPortal, awardXP }: PathwaysPageProps) {
  const [selectedAcademyId, setSelectedAcademyId] = useState('ai-emerging');
  const [selectedAgeCohort, setSelectedAgeCohort] = useState('young-innovators');

  const ageCohorts = [
    { id: 'early-explorers', name: 'Early Explorers', ages: 'Ages 2–5', icon: Compass, color: 'text-teal-600' },
    { id: 'young-innovators', name: 'Young Innovators', ages: 'Ages 6–12', icon: Bot, color: 'text-purple-600' },
    { id: 'future-builders', name: 'Future Builders', ages: 'Ages 13–18', icon: GraduationCap, color: 'text-amber-600' }
  ];

  const cohortsData: Record<string, {
    academies: Array<{
      id: string;
      title: string;
      iconComponent: any;
      shortDesc: string;
      status: string;
      statusColor: string;
      overview?: string;
      outcomes?: string[];
      whyMatters?: string;
      modules: Array<{
        moduleTitle: string;
        lessons: string[];
        status: 'Active' | 'Locked';
        note?: string;
      }>;
    }>;
  }> = {
    'early-explorers': {
      academies: [
        {
          id: 'ai-emerging',
          title: 'AI & SMART TECHNOLOGY',
          iconComponent: Bot,
          shortDesc: 'Meet friendly AI helpers, discover smart things at home, and learn how machines recognize patterns.',
          status: '🚀 Previewable',
          statusColor: 'bg-teal-500/10 text-teal-700 border-teal-200',
          modules: [
            {
              moduleTitle: 'Technology Around Me',
              lessons: [
                'What is Technology?',
                'Smart Things Around Us',
                'Technology at Home',
                'Technology at School',
                'Technology Adventure Quiz'
              ],
              status: 'Active'
            },
            {
              moduleTitle: 'Meet AI Friends',
              lessons: [
                'Meet Kobe',
                'Meet Chibi',
                'AI Can Help People',
                'AI Helpers Everywhere',
                'My AI Adventure'
              ],
              status: 'Active'
            },
            {
              moduleTitle: 'Learning With AI',
              lessons: [
                'AI Can See',
                'AI Can Listen',
                'AI Can Talk',
                'AI Can Learn Patterns',
                'AI Fun Challenge'
              ],
              status: 'Active'
            }
          ]
        },
        {
          id: 'digital-citizenship',
          title: 'SAFE DIGITAL HABITS',
          iconComponent: Shield,
          shortDesc: 'Understand screen-time habits, online kindness, and when to ask parents for safe device play.',
          status: '🚀 Previewable',
          statusColor: 'bg-indigo-500/10 text-indigo-700 border-indigo-200',
          modules: [
            {
              moduleTitle: 'My Digital World',
              lessons: [
                'Asking Before Using Devices',
                'Good Screen Time',
                'Kindness Online',
                'Safe Videos',
                'Healthy Tech Habits'
              ],
              status: 'Active'
            }
          ]
        },
        {
          id: 'design-creation',
          title: 'CREATIVITY & PLAY',
          iconComponent: Palette,
          shortDesc: 'Explore beautiful colors, safe digital drawing, musical sounds, and story adventures.',
          status: '🚀 Previewable',
          statusColor: 'bg-purple-500/10 text-purple-700 border-purple-200',
          modules: [
            {
              moduleTitle: 'Creative Explorer',
              lessons: [
                'Colors and Shapes',
                'Digital Drawing',
                'Story Adventures',
                'Music and Sounds',
                'Creative Challenge'
              ],
              status: 'Active'
            }
          ]
        },
        {
          id: 'adaptability-learning',
          title: 'ADAPTABILITY & LIFELONG LEARNING',
          iconComponent: Compass,
          shortDesc: 'Develop critical thinking, curiosity, resilience, learning agility, and problem-solving skills to thrive in a rapidly changing world.',
          status: '🚀 Previewable',
          statusColor: 'bg-blue-500/10 text-blue-700 border-blue-200',
          overview: "Technology will continue to evolve, industries will transform, and entirely new careers will emerge throughout our children's lives. The most valuable skill of the future is not mastering a single technology—it is the ability to learn, adapt, and solve problems as the world changes. The Adaptability & Lifelong Learning Pathway helps learners develop the mindset, confidence, and learning habits needed to navigate future opportunities and challenges successfully.",
          outcomes: [
            "Think critically and independently",
            "Develop curiosity and a love for learning",
            "Build resilience when facing challenges",
            "Learn how to learn effectively",
            "Become confident exploring new technologies",
            "Adapt to changing environments",
            "Solve problems creatively",
            "Develop a lifelong growth mindset",
            "Become self-directed learners"
          ],
          whyMatters: "Rather than preparing children for one specific technology, this pathway prepares them to confidently learn any technology that emerges throughout their lives. At this early stage, everything should feel like discovery.",
          modules: [
            {
              moduleTitle: 'Curious Explorers',
              lessons: [
                'Lesson 1: Why Asking Questions Matters (Children learn that asking questions helps us discover new things.)',
                "Lesson 2: Let's Discover Together (Exploring the world around us through observation and conversation.)",
                'Lesson 3: Finding Patterns Around Us (Recognizing shapes, colors, sounds, and repeating patterns.)',
                'Lesson 4: Trying New Things (Building confidence to explore unfamiliar activities and experiences.)',
                'Lesson 5: Curiosity Challenge (Interactive challenge where children investigate and solve simple discovery tasks.)'
              ],
              status: 'Active'
            },
            {
              moduleTitle: 'Learning Adventures',
              lessons: [
                'Lesson 1: Learning Every Day (Understanding that learning happens everywhere.)',
                'Lesson 2: Mistakes Help Us Grow (Introducing mistakes as part of learning.)',
                'Lesson 3: Exploring New Ideas (Encouraging imagination and experimentation.)',
                'Lesson 4: Working Together (Learning from parents, friends, and teachers.)',
                'Lesson 5: Adventure Quest (Guided activity combining curiosity, teamwork, and discovery.)'
              ],
              status: 'Active'
            }
          ]
        }
      ]
    },
    'young-innovators': {
      academies: [
        {
          id: 'ai-emerging',
          title: 'AI & EMERGING TECHNOLOGIES',
          iconComponent: Bot,
          shortDesc: 'Explore AI history, what makes smart machines work, phone/gaming apps, and future tech careers.',
          status: '🚀 Previewable',
          statusColor: 'bg-teal-500/10 text-teal-700 border-teal-200',
          modules: [
            {
              moduleTitle: 'AI Foundations',
              lessons: [
                'History of Technology',
                'History of AI',
                'What is AI?',
                'AI vs Humans',
                'Smart Machines',
                'AI Around Us',
                'Benefits of AI',
                'Risks of AI'
              ],
              status: 'Active'
            },
            {
              moduleTitle: 'AI in Everyday Life',
              lessons: [
                'AI in Phones',
                'AI in Games',
                'AI in Schools',
                'AI in Healthcare',
                'AI in Transportation',
                'AI in Shopping',
                'AI in Global'
              ],
              status: 'Active'
            },
            {
              moduleTitle: 'Learning With AI Tools',
              lessons: [
                'What is Generative AI?',
                'Talking to AI',
                'Writing Better Prompts',
                'AI for Homework',
                'AI for Creativity',
                'Responsible AI Use'
              ],
              status: 'Active'
            },
            {
              moduleTitle: 'Future Technology Explorer',
              lessons: [
                'What is Blockchain?',
                'Digital Ownership',
                'Virtual Worlds',
                'Future Jobs',
                'Becoming an Innovator'
              ],
              status: 'Active'
            }
          ]
        },
        {
          id: 'digital-citizenship',
          title: 'DIGITAL CITIZENSHIP & CYBERSECURITY',
          iconComponent: Shield,
          shortDesc: 'Master password safety, protecting device data, and safe smart browsing rules online.',
          status: '🚀 Previewable',
          statusColor: 'bg-indigo-500/10 text-indigo-700 border-indigo-200',
          modules: [
            {
              moduleTitle: 'Digital Literacy',
              lessons: [
                'Understanding Devices',
                'Internet Basics',
                'Websites vs Apps',
                'Search Skills',
                'Digital Communication'
              ],
              status: 'Active'
            },
            {
              moduleTitle: 'Cyber Safety',
              lessons: [
                'Passwords',
                'Online Strangers',
                'Scams',
                'Protecting Information',
                'Safe Browsing'
              ],
              status: 'Active'
            }
          ]
        },
        {
          id: 'design-creation',
          title: 'DESIGN & CREATION',
          iconComponent: Palette,
          shortDesc: 'Learn the principles of graphic design, colors, creative poster making, and digital art tools.',
          status: '🚀 Previewable',
          statusColor: 'bg-purple-500/10 text-purple-700 border-purple-200',
          modules: [
            {
              moduleTitle: 'Design Basics',
              lessons: [
                'What is Design?',
                'Colors and Creativity',
                'Storytelling Through Design',
                'Poster Creation',
                'Digital Creativity Project'
              ],
              status: 'Active'
            }
          ]
        },
        {
          id: 'adaptability-learning',
          title: 'ADAPTABILITY & LIFELONG LEARNING',
          iconComponent: Compass,
          shortDesc: 'Build logic, active resilience, technology self-confidence, and continuous learning patterns.',
          status: '🚀 Previewable',
          statusColor: 'bg-blue-500/10 text-blue-700 border-blue-200',
          overview: "Technology will continue to evolve, industries will transform, and entirely new careers will emerge throughout our children's lives. The most valuable skill of the future is not mastering a single technology—it is the ability to learn, adapt, and solve problems as the world changes. The Adaptability & Lifelong Learning Pathway helps learners develop the mindset, confidence, and learning habits needed to navigate future opportunities and challenges successfully.",
          outcomes: [
            "Think critically and independently",
            "Develop curiosity and a love for learning",
            "Build resilience when facing challenges",
            "Learn how to learn effectively",
            "Become confident exploring new technologies",
            "Adapt to changing environments",
            "Solve problems creatively",
            "Develop a lifelong growth mindset",
            "Prepare for future careers and industries"
          ],
          whyMatters: "Artificial Intelligence, Blockchain, Robotics, Quantum Computing, Biotechnology, and countless future innovations will continue reshaping society. Rather than preparing children for one specific technology, this pathway prepares them to confidently learn any technology that emerges throughout their lives.",
          modules: [
            {
              moduleTitle: 'Thinking Like an Innovator',
              lessons: [
                'Lesson 1: Critical Thinking Basics - Learning how to think carefully before making decisions.',
                'Lesson 2: Asking Better Questions - Using questions to understand problems and find solutions.',
                'Lesson 3: Learning From Mistakes - Viewing mistakes as opportunities to improve.',
                'Lesson 4: Solving Everyday Problems - Applying logical thinking to real-life situations.',
                'Lesson 5: Innovation Challenge - Interactive mission requiring learners to solve a practical problem.'
              ],
              status: 'Active'
            },
            {
              moduleTitle: 'Technology Confidence',
              lessons: [
                'Lesson 1: Trying New Tools - Building confidence when using unfamiliar technologies.',
                'Lesson 2: Learning New Skills - Understanding how skills are developed over time.',
                'Lesson 3: Digital Confidence - Navigating technology independently and responsibly.',
                'Lesson 4: Building Resilience - Overcoming setbacks and continuing to learn.',
                'Lesson 5: Confidence Quest - Project-based challenge requiring learners to use a new tool.'
              ],
              status: 'Active'
            },
            {
              moduleTitle: 'Becoming a Lifelong Learner',
              lessons: [
                'Lesson 1: Learning How to Learn - Introduction to effective learning strategies.',
                'Lesson 2: Setting Learning Goals - Creating realistic learning objectives.',
                'Lesson 3: Staying Curious - Maintaining motivation and exploration habits.',
                'Lesson 4: Exploring New Ideas - Applying curiosity to new topics and technologies.',
                'Lesson 5: Growth Mindset Challenge - Interactive project demonstrating continuous improvement.'
              ],
              status: 'Active'
            }
          ]
        }
      ]
    },
    'future-builders': {
      academies: [
        {
          id: 'ai-emerging',
          title: 'AI & EMERGING TECHNOLOGIES',
          iconComponent: Bot,
          shortDesc: 'Deep-dive into Machine learning, Generative AI engineering, Prompt strategies, Web3 ecosystems, and AI products.',
          status: '🚀 Previewable',
          statusColor: 'bg-teal-500/10 text-teal-700 border-teal-200',
          modules: [
            {
              moduleTitle: 'AI Foundations',
              lessons: [
                'Evolution of Technology',
                'History of AI',
                'Machine Learning',
                'Deep Learning',
                'Neural Networks',
                'AI Systems'
              ],
              status: 'Active'
            },
            {
              moduleTitle: 'Generative AI',
              lessons: [
                'Generative AI',
                'Prompt Engineering',
                'AI Research',
                'AI Productivity',
                'AI Creativity',
                'AI Ethics'
              ],
              status: 'Active'
            },
            {
              moduleTitle: 'Building With AI',
              lessons: [
                'AI Products',
                'AI Agents',
                'AI Automation',
                'AI Workflows',
                'AI Startup Ideas',
                'AI Capstone'
              ],
              status: 'Active'
            },
            {
              moduleTitle: 'Blockchain & Web3',
              lessons: [
                'Blockchain Fundamentals',
                'Smart Contracts',
                'Digital Assets',
                'Web3 Ecosystems',
                'Future Digital Economies'
              ],
              status: 'Active'
            }
          ]
        },
        {
          id: 'digital-citizenship',
          title: 'DIGITAL CITIZENSHIP & CYBERSECURITY',
          iconComponent: Shield,
          shortDesc: 'Master advanced cybersecurity frameworks, privacy principles, threat signals, and ethical coding norms.',
          status: '🚀 Previewable',
          statusColor: 'bg-indigo-500/10 text-indigo-700 border-indigo-200',
          modules: [
            {
              moduleTitle: 'Cybersecurity Foundations',
              lessons: [
                'Cybersecurity Basics',
                'Privacy',
                'Threat Detection',
                'Phishing',
                'Data Protection',
                'Ethical Technology'
              ],
              status: 'Active'
            }
          ]
        },
        {
          id: 'design-creation',
          title: 'DESIGN & CREATION',
          iconComponent: Palette,
          shortDesc: 'Explore dynamic user interfaces (UI), user experience (UX) maps, and professional tool mockups.',
          status: '🚀 Previewable',
          statusColor: 'bg-purple-500/10 text-purple-700 border-purple-200',
          modules: [
            {
              moduleTitle: 'Product Design',
              lessons: [
                'Design Thinking',
                'User Research',
                'UI Design',
                'UX Design',
                'Product Prototyping'
              ],
              status: 'Active'
            }
          ]
        },
        {
          id: 'innovation-career',
          title: 'INNOVATION & CAREER READINESS',
          iconComponent: Rocket,
          shortDesc: 'Assemble high-level portfolios, grasp LinkedIn/branding basics, and tackle real leadership enterprise models.',
          status: '🚀 Previewable',
          statusColor: 'bg-amber-500/10 text-amber-700 border-amber-200',
          modules: [
            {
              moduleTitle: 'Future Careers (Ages 17–18 Only)',
              lessons: [
                'Technology Careers',
                'Building a Portfolio',
                'LinkedIn Basics',
                'Personal Branding',
                'Networking',
                'Career Planning'
              ],
              status: 'Active',
              note: 'Note: This module is specifically designed for older learners preparing for higher education, internships, entrepreneurship, and early career opportunities.'
            },
            {
              moduleTitle: 'Entrepreneurship & Leadership (Ages 13–18)',
              lessons: [
                'Leadership',
                'Communication',
                'Teamwork',
                'Startup Thinking',
                'Business Models',
                'Innovation Project'
              ],
              status: 'Active'
            }
          ]
        },
        {
          id: 'adaptability-learning',
          title: 'ADAPTABILITY & LIFELONG LEARNING',
          iconComponent: Compass,
          shortDesc: 'Prepare learners for higher education, entrepreneurship, emerging industries, and future careers by mastering adaptability.',
          status: '🚀 Previewable',
          statusColor: 'bg-blue-500/10 text-blue-700 border-blue-200',
          overview: "Technology will continue to evolve, industries will transform, and entirely new careers will emerge throughout our children's lives. The most valuable skill of the future is not mastering a single technology—it is the ability to learn, adapt, and solve problems as the world changes. The Adaptability & Lifelong Learning Pathway helps learners develop the mindset, confidence, and learning habits needed to navigate future opportunities and challenges successfully.",
          outcomes: [
            "Think critically and independently",
            "Develop curiosity and a love for learning",
            "Build resilience when facing challenges",
            "Learn how to learn effectively",
            "Become confident exploring new technologies",
            "Adapt to changing environments",
            "Solve problems creatively",
            "Develop a lifelong growth mindset",
            "Prepare for future careers and industries",
            "Become self-directed learners"
          ],
          whyMatters: "Artificial Intelligence, Blockchain, Robotics, Quantum Computing, Biotechnology, and countless future innovations will continue reshaping society. Rather than preparing children for one specific technology, this pathway prepares them to confidently learn any technology that emerges throughout their lives. It serves as the foundation that connects all CLATS pathways.",
          modules: [
            {
              moduleTitle: 'Learning Agility',
              lessons: [
                'Lesson 1: How Learning Works - Understanding memory, focus, and skill development.',
                'Lesson 2: Learning Faster - Techniques for accelerated learning and knowledge retention.',
                'Lesson 3: Self-Directed Learning - Taking ownership of personal development.',
                'Lesson 4: Growth Mindset - Developing resilience and long-term learning habits.',
                'Lesson 5: Learning Challenge - Practical challenge requiring independent skill acquisition.'
              ],
              status: 'Active'
            },
            {
              moduleTitle: 'Future Adaptability',
              lessons: [
                'Lesson 1: Technology Changes Quickly - Understanding technological disruption.',
                'Lesson 2: Emerging Fields - Exploring future industries and opportunities.',
                'Lesson 3: Problem-Solving Frameworks - Structured approaches to solving complex problems.',
                'Lesson 4: Adaptability in Action - Case studies of innovators and changemakers.',
                'Lesson 5: Future Readiness Project - Real-world project focused on navigating uncertainty.'
              ],
              status: 'Active'
            },
            {
              moduleTitle: 'Strategic Thinking & Innovation',
              lessons: [
                'Lesson 1: Systems Thinking - Understanding how systems and technologies interact.',
                'Lesson 2: Decision Making - Making informed decisions in uncertain situations.',
                'Lesson 3: Innovation Mindsets - Thinking creatively about future opportunities.',
                'Lesson 4: Leadership Through Change - Leading teams during transformation.',
                'Lesson 5: Innovation Capstone - Design and present a solution to a future challenge.'
              ],
              status: 'Active'
            }
          ]
        }
      ]
    }
  };

  const currentCohort = cohortsData[selectedAgeCohort] || cohortsData['young-innovators'];
  const academies = currentCohort.academies;
  const activeAcademyObj = academies.find(a => a.id === selectedAcademyId) || academies[0];
  const activeSyllabus = activeAcademyObj?.modules || [];

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 space-y-20 animate-fadeIn font-sans">
      
      {/* PAGE HEADER */}
      <section className="text-center max-w-3xl mx-auto space-y-5 pt-6">
        <span className="text-xxs font-black text-[#8A67F0] bg-purple-50 border border-purple-150 px-3.5 py-1.5 rounded-full uppercase tracking-widest inline-block select-none">
          ⭐ Complete Curriculum
        </span>
        <h1 className="text-4xl md:text-6xl font-display font-black text-slate-900 tracking-tight leading-[1.1]">
          Explore Our{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-purple-600">
            Learning Pathways
          </span>
        </h1>
        <p className="text-slate-600 text-sm md:text-base leading-relaxed font-semibold max-w-xl mx-auto">
          We customize digital courses to empower different age cohorts. Discover academies, key modules, and lesson listings without login credentials!
        </p>
      </section>

      {/* HORIZONTAL AGE COHORT FILTER */}
      <section className="space-y-6">
        <div className="text-center space-y-1.5">
          <p className="text-[10px] font-mono tracking-widest text-[#2EC4B6] uppercase font-black">
            ✦ Filter by Age Cohort Progression
          </p>
          <span className="text-xs text-slate-400 font-bold font-sans">Toggle cohorts below to adapt the modules</span>
        </div>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-3 max-w-3xl mx-auto">
          {ageCohorts.map((cohort) => {
            const Icon = cohort.icon;
            const isSelected = selectedAgeCohort === cohort.id;
            return (
              <button
                key={cohort.id}
                onClick={() => {
                  awardXP(20, `cohort_filter_${cohort.id}`);
                  setSelectedAgeCohort(cohort.id);
                  const targetCohort = cohortsData[cohort.id];
                  if (targetCohort && targetCohort.academies.length > 0) {
                    const hasAcad = targetCohort.academies.some((a) => a.id === selectedAcademyId);
                    if (!hasAcad) {
                      setSelectedAcademyId(targetCohort.academies[0].id);
                    }
                  }
                }}
                className={`w-full sm:w-auto px-6 py-4 rounded-2xl border-2 flex items-center justify-between sm:justify-start gap-3 transition-all cursor-pointer font-sans ${
                  isSelected 
                    ? 'border-slate-950 bg-slate-950 text-white shadow-xl scale-[1.03]' 
                    : 'border-slate-200/80 bg-white text-slate-800 hover:border-slate-300'
                }`}
              >
                <div className="flex items-center gap-3">
                  <Icon className={`w-4.5 h-4.5 ${isSelected ? 'text-teal-400' : cohort.color}`} />
                  <div className="text-left font-sans">
                    <span className="text-xs font-black block leading-none">{cohort.name}</span>
                    <span className={`text-[9px] font-bold uppercase tracking-wider block mt-1 ${isSelected ? 'text-slate-300' : 'text-slate-400'}`}>
                      {cohort.ages}
                    </span>
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </section>

      {/* SPLIT LAYOUT EXPLORER */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: Academy Tabs selectors */}
        <div className="lg:col-span-5 space-y-4">
          <div className="p-3 bg-slate-50/80 rounded-2xl text-left border border-slate-100">
            <span className="text-[9px] font-mono uppercase font-black text-slate-400 block tracking-wider px-2">
              Select Academy Module
            </span>
          </div>

          <div className="flex flex-col gap-3.5">
            {academies.map((academy) => {
              const isActive = selectedAcademyId === academy.id;
              
              return (
                <button
                  key={academy.id}
                  onClick={() => {
                    awardXP(30, `academy_explorer_${academy.id}`);
                    setSelectedAcademyId(academy.id);
                  }}
                  className={`w-full text-left p-6 rounded-[2rem] border-2 transition-all cursor-pointer relative overflow-hidden group ${
                    isActive 
                      ? 'border-[#2EC4B6] bg-white shadow-lg shadow-teal-500/5' 
                      : 'border-slate-100 hover:border-slate-200 bg-white'
                  }`}
                >
                  <div className="space-y-4 relative z-10">
                    <div className="flex justify-between items-center">
                      <div className={`p-2.5 rounded-xl border border-slate-100 ${isActive ? 'bg-[#2EC4B6]/10 text-[#2EC4B6]' : 'bg-slate-50 text-slate-500 group-hover:bg-[#2EC4B6]/5 group-hover:text-[#2EC4B6] transition-colors'}`}>
                        {academy.iconComponent && React.createElement(academy.iconComponent, { className: 'w-5 h-5 shrink-0' })}
                      </div>
                      <span className={`px-2 py-0.5 rounded-full text-[9px] font-black uppercase tracking-wider border select-none ${academy.statusColor}`}>
                        {academy.status}
                      </span>
                    </div>

                    <div className="space-y-1.5 text-left">
                      <h3 className="text-slate-900 font-black text-sm md:text-base tracking-tight font-display group-hover:text-purple-600 transition-colors">
                        {academy.title}
                      </h3>
                      <p className="text-slate-500 text-xxs font-semibold leading-relaxed leading-normal">
                        {academy.shortDesc}
                      </p>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Right Column: High Fidelity Syllabus Browser Panel */}
        <div className="lg:col-span-7 bg-white border-2 border-slate-150 p-6 md:p-8 rounded-[3.5rem] shadow-xl text-left space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 pb-5">
            <div className="space-y-1 leading-none font-sans">
              <span className="text-[9px] font-mono text-[#8A67F0] font-black uppercase tracking-wider block">
                Active Syllabus Syllabus Node
              </span>
              <h3 className="text-xl font-black text-slate-950 font-display">
                {activeAcademyObj?.title}
              </h3>
            </div>
            {/* Age band */}
            <span className="px-3.5 py-1.5 rounded-xl border border-slate-150 bg-slate-50 text-slate-700 font-extrabold text-xxs uppercase tracking-wider">
              {ageCohorts.find(c => c.id === selectedAgeCohort)?.name} ({ageCohorts.find(c => c.id === selectedAgeCohort)?.ages})
            </span>
          </div>

          {/* Detailed overview container for the active academy (especially for Adaptability & Lifelong Learning) */}
          {activeAcademyObj && (activeAcademyObj.overview || activeAcademyObj.whyMatters) && (
            <div className="bg-slate-50/80 border border-slate-150 p-6 rounded-[2.5rem] space-y-4 font-sans text-left">
              {activeAcademyObj.overview && (
                <div className="space-y-1.5">
                  <span className="text-[9px] font-mono tracking-wider font-extrabold uppercase text-[#8A67F0] bg-purple-50 border border-purple-100 px-3.5 py-1 rounded-full inline-block">
                    Overview
                  </span>
                  <p className="text-xs $10 text-slate-600 font-semibold leading-relaxed">
                    {activeAcademyObj.overview}
                  </p>
                </div>
              )}
              {activeAcademyObj.outcomes && activeAcademyObj.outcomes.length > 0 && (
                <div className="space-y-2 pt-2 border-t border-slate-100">
                  <span className="text-[9px] font-mono tracking-wider font-extrabold uppercase text-teal-600 bg-teal-50 border border-teal-100 px-3.5 py-1 rounded-full inline-block">
                    Learning Outcomes
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xxs font-bold text-slate-600">
                    {activeAcademyObj.outcomes.map((otc: string, oIdx: number) => (
                      <div key={oIdx} className="flex gap-2 items-start">
                        <CheckCircle className="w-3.5 h-3.5 text-teal-600 shrink-0 mt-0.5" />
                        <span className="leading-snug">{otc}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              {activeAcademyObj.whyMatters && (
                <div className="space-y-1.5 pt-3 border-t border-slate-100">
                  <span className="text-[9px] font-mono tracking-wider font-extrabold uppercase text-amber-700 bg-amber-50 border border-amber-100 px-3.5 py-1 rounded-full inline-block">
                    Why This Matters
                  </span>
                  <p className="text-xs $10 text-slate-500 font-medium leading-relaxed italic">
                    {activeAcademyObj.whyMatters}
                  </p>
                </div>
              )}
            </div>
          )}

          {activeSyllabus.length === 0 ? (
            <div className="p-10 rounded-2xl bg-amber-50/50 border border-amber-100 text-center space-y-3">
              <span className="text-2xl">🚧</span>
              <p className="font-extrabold text-sm uppercase text-amber-800">Syllabus In Preparation</p>
              <p className="text-xs text-slate-500 max-w-sm mx-auto font-semibold">
                We are actively polishing modules for this specific age level with child pedagogues.
              </p>
            </div>
          ) : (
            <div className="space-y-6">
              {activeSyllabus.map((mod, mIdx) => (
                <div key={mIdx} className="bg-slate-50/70 border border-slate-100 p-5 rounded-2.5xl rounded-3xl space-y-4 relative">
                  
                  {/* Status label top-right */}
                  <span className={`absolute top-4 right-4 text-[8px] font-mono uppercase font-black tracking-wider px-2 py-0.5 rounded-md border select-none ${
                    mod.status === 'Active' 
                      ? 'bg-emerald-50 text-emerald-850 border-emerald-200' 
                      : 'bg-indigo-50 text-indigo-700 border-indigo-100'
                  }`}>
                    {mod.status === 'Active' ? '✓ Previewable' : '🔒 Locked / Com. Soon'}
                  </span>

                  <div className="space-y-1 text-left">
                    <span className="text-[8px] font-mono text-slate-400 font-bold block uppercase tracking-widest leading-none">
                      Module 0{mIdx + 1}
                    </span>
                    <h4 className="text-slate-900 font-extrabold text-[15px] font-display">
                      {mod.moduleTitle}
                    </h4>
                  </div>

                  {/* List of lessons */}
                  <div className="space-y-2 border-t border-slate-200/50 pt-3">
                    {mod.lessons.map((les, lIdx) => (
                      <div key={lIdx} className="flex gap-2 text-xs font-bold text-slate-650 text-slate-600 font-sans">
                        <CheckCircle className="w-3.5 h-3.5 text-teal-600 mt-0.5 shrink-0" />
                        <span className="leading-normal">{les}</span>
                      </div>
                    ))}
                  </div>

                  {mod.note && (
                    <div className="mt-3.5 pt-3 border-t border-slate-250/30 bg-amber-500/5 border border-amber-300/10 p-3.5 rounded-2xl text-[11px] font-semibold text-amber-900/90 leading-relaxed text-left">
                      {mod.note}
                    </div>
                  )}

                </div>
              ))}
            </div>
          )}

          {/* Quick Sandbox XP booster */}
          <div className="p-4 rounded-2xl bg-[#FFD166]/10 border border-amber-200/50 flex gap-3 text-xxs font-bold text-amber-900 font-sans text-left leading-relaxed">
            <span className="text-lg">✨</span>
            <div>
              <span className="font-extrabold block text-amber-950 uppercase tracking-wider mb-0.5">Mascot Assisted Learning</span>
              <p>Lessons are guided by our visual characters! Kobe and Chibi tell stories, trigger quiz popups, and reward students with Explorer Stars when they get answers correct.</p>
            </div>
          </div>

        </div>

      </section>

      {/* CALL TO ACTION LAUNCH PORTAL */}
      <section className="bg-gradient-to-br from-teal-500 to-teal-600 text-white p-10 md:p-14 rounded-[3.5rem] shadow-2xl relative overflow-hidden flex flex-col items-center select-none">
        {/* Glow Spheres Decor */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-white/5 rounded-full blur-3xl pointer-events-none" />
        
        <div className="relative z-10 max-w-xl mx-auto text-center space-y-6">
          <h2 className="text-2xl md:text-4xl font-display font-black leading-tight">
            Ready to Start Your Child's Learning Adventure?
          </h2>
          <p className="text-white/80 text-xs md:text-sm font-semibold max-w-md mx-auto">
            Get access to child dashboards, interactive lessons, score reports, and secure quizzes by stepping inside the learning portal now!
          </p>
          <div className="pt-2">
            <button
              onClick={() => {
                awardXP(100, 'pathways_portal_launched');
                window.open('https://app.clats.org/', '_blank', 'noopener,noreferrer');
                onOpenPortal();
              }}
              className="bg-slate-950 hover:bg-slate-800 text-white font-extrabold text-xs uppercase tracking-widest px-8 py-4.5 rounded-2xl shadow-xl hover:shadow-slate-900/30 transition-all cursor-pointer border-0 inline-flex items-center gap-1.5"
            >
              🚀 Get Started
              <ChevronRight className="w-4 h-4 stroke-[2.5]" />
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
