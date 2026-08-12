import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  HelpCircle, ChevronDown, ChevronRight, Search, Shield, Brain, Sparkles, Smile, Clock, X, Sparkle
} from 'lucide-react';

interface FAQPageProps {
  onNavigate: (path: string) => void;
  awardXP: (pts: number, actionId: string) => void;
}

export default function FAQPage({ onNavigate, awardXP }: FAQPageProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [openIds, setOpenIds] = useState<number[]>([1]); // First open by default
  
  const [kobeBubble, setKobeBubble] = useState("Hi there! We're here to answer your questions about CLATS.");
  const [chibiBubble, setChibiBubble] = useState("Let's explore and learn more together!");

  const kobeQuotes = [
    "AI helps computers learn patterns and make decisions.",
    "Learning a little every day creates big progress.",
    "Coding is like a super power that lets you build anything you imagine!",
    "Understanding technology safely helps you navigate the future confidently!"
  ];

  const chibiQuotes = [
    "Every expert started by learning something new!",
    "Curiosity is one of the most important skills you can have.",
    "Staying safe online is rule number one for all young innovators!",
    "Your brain is like a muscle - the more you learn, the stronger it grows!"
  ];

  const handleAskKobe = () => {
    const randomQuote = kobeQuotes[Math.floor(Math.random() * kobeQuotes.length)];
    setKobeBubble(randomQuote);
    awardXP(10, 'ask_kobe_interaction');
  };

  const handleAskChibi = () => {
    const randomQuote = chibiQuotes[Math.floor(Math.random() * chibiQuotes.length)];
    setChibiBubble(randomQuote);
    awardXP(10, 'ask_chibi_interaction');
  };

  const faqData = [
    {
      id: 1,
      category: 'curriculum',
      question: 'What is CLATS?',
      answer: 'CLATS is a global EdTech company building engaging and personalized learning experiences that prepare children ages 2-18 for the future through artificial intelligence, digital literacy, creativity, innovation, entrepreneurship, cybersecurity, financial literacy, and other future-ready skills.\n\nWe believe every child deserves access to world-class learning opportunities, regardless of location or background.',
      responder: 'Both' as const
    },
    {
      id: 2,
      category: 'age-groups',
      question: 'Who is CLATS designed for?',
      answer: 'CLATS is designed for children and teenagers aged 2–18 and supports learning journeys across three age groups:\n\nEarly Explorers (2–5)\nYoung Innovators (6–12)\nFuture Builders (13–18)',
      responder: 'Kobe' as const
    },
    {
      id: 3,
      category: 'curriculum',
      question: 'What will my child learn?',
      answer: 'CLATS introduces learners to future-ready pathways including:\n\nArtificial Intelligence\nDigital Literacy\nCybersecurity\nDesign & Creativity\nCareer Readiness\nAdaptability & Lifelong Learning\n\nThe AI pathway is currently the first pathway being rolled out.',
      responder: 'Kobe' as const
    },
    {
      id: 4,
      category: 'safety',
      question: 'Is CLATS safe for children?',
      answer: 'Yes.\n\nCLATS is built with child safety, age-appropriate learning, and responsible technology use in mind.\n\nParents have access to monitoring tools, progress tracking, and screen-time controls.',
      responder: 'Chibi' as const
    },
    {
      id: 5,
      category: 'curriculum',
      question: 'Why does CLATS focus on future-ready skills?',
      answer: "The world is changing faster than ever, and many of tomorrow's careers will require skills that traditional education alone may not fully develop.\n\nAt CLATS, we equip children with future-ready skills such as AI literacy, digital citizenship, creativity, critical thinking, problem-solving, financial literacy, entrepreneurship, cybersecurity, communication, and adaptability.\n\nBy combining these skills with engaging, age-appropriate learning experiences, we help children become confident innovators, responsible digital citizens, and lifelong learners who are prepared to thrive in an ever-evolving world.",
      responder: 'Kobe' as const
    },
    {
      id: 6,
      category: 'curriculum',
      question: 'How does personalized learning work?',
      answer: 'CLATS adapts learning experiences based on:\n\nAge\nLearning pace\nProgress\nInterests\nPerformance\n\nThis helps children receive learning experiences appropriate to their developmental stage.',
      responder: 'Kobe' as const
    },
    {
      id: 7,
      category: 'parent-tools',
      question: 'Can parents track progress?',
      answer: 'Yes.\n\nParents have access to a dedicated Parent Dashboard where they can:\n\nView learning progress\nMonitor activity\nTrack achievements\nReview completed lessons\nReceive personalized insights',
      responder: 'Chibi' as const
    },
    {
      id: 8,
      category: 'founding-families',
      question: 'Is CLATS available now?',
      answer: 'Yes! The CLATS platform is now fully live and available for registration.\n\nFamilies can sign up directly at app.clats.org to create their accounts, configure their learning pathways, and start exploring instantly.',
      responder: 'Chibi' as const
    },
    {
      id: 9,
      category: 'founding-families',
      question: 'What is the Founding Families Program?',
      answer: 'The Founding Families Program is an exclusive cohort for our early adopting supporters. By registering during our launch phase, you secure lifetime pricing immunity, exclusive digital badges, and a direct channel to shape our upcoming features and curriculum pathways.',
      responder: 'Chibi' as const
    },
    {
      id: 10,
      category: 'founding-families',
      question: 'How can schools partner with CLATS?',
      answer: 'Schools, educational organizations, and community partners can contact the CLATS team to explore pilot programs, partnerships, and future implementation opportunities.',
      responder: 'Both' as const
    }
  ];

  const categories = [
    { id: 'all', label: 'All FAQs', icon: HelpCircle },
    { id: 'curriculum', label: 'Curriculum & Skills', icon: Brain },
    { id: 'safety', label: 'Safety & Kids Privacy', icon: Shield },
    { id: 'age-groups', label: 'Age Levels', icon: Smile },
    { id: 'parent-tools', label: 'Parent Dashboard', icon: Clock },
    { id: 'founding-families', label: 'Founding Cohorts', icon: Sparkles }
  ];

  const toggleAccordion = (id: number) => {
    if (openIds.includes(id)) {
      setOpenIds(openIds.filter(x => x !== id));
    } else {
      setOpenIds([...openIds, id]);
    }
  };

  const filteredFaqs = faqData.filter(item => {
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesSearch = item.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          item.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 space-y-16 animate-fadeIn font-sans">
      
      {/* PAGE HEADER */}
      <section className="text-center max-w-3xl mx-auto space-y-4 pt-6 select-none animate-fadeIn">
        <span className="text-xxs font-black text-teal-600 bg-teal-50 border border-teal-150 px-3.5 py-1.5 rounded-full uppercase tracking-widest inline-block">
          Kobe and Chibi are here to help.
        </span>
        <h1 className="text-4xl md:text-5xl font-display font-black text-slate-900 tracking-tight leading-[1.1]">
          Have Questions About{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-purple-600">
            CLATS?
          </span>
        </h1>
        <p className="text-slate-600 text-sm md:text-base leading-relaxed font-semibold max-w-xl mx-auto">
          Find answers to the most common questions from parents, educators, and future learners.
        </p>
      </section>

      {/* INTERACTIVE SEARCH & CATEGORIES BAR */}
      <section className="max-w-4xl mx-auto space-y-6">
        
        {/* TEXT SEARCH INPUT */}
        <div className="relative max-w-2xl mx-auto">
          <div className="absolute inset-y-0 left-4 flex justify-center items-center pointer-events-none text-slate-400">
            <Search className="w-5 h-5 stroke-[2.5]" />
          </div>
          <input
            type="text"
            placeholder="Type keyword e.g. safety, curriculum, progress..."
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              awardXP(5, 'faq_search_typed');
            }}
            className="w-full bg-slate-50 border-2 border-slate-200 py-4 pl-12 pr-10 rounded-2xl md:rounded-[1.25rem] text-slate-900 outline-none focus:border-teal-500 focus:bg-white focus:ring-4 focus:ring-teal-500/10 shadow-sm text-xs md:text-sm font-semibold transition-all"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute inset-y-0 right-4 flex justify-center items-center text-slate-400 hover:text-slate-800"
            >
              <X className="w-4 h-4 text-slate-400 stroke-[2.5]" />
            </button>
          )}
        </div>

        {/* CATEGORY SELECTOR CHIPS */}
        <div className="flex flex-wrap justify-center gap-2 max-w-3xl mx-auto select-none">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isSelected = selectedCategory === cat.id;
            const count = faqData.filter(item => cat.id === 'all' || item.category === cat.id).length;
            
            return (
              <button
                key={cat.id}
                onClick={() => {
                  awardXP(10, `faq_category_${cat.id}`);
                  setSelectedCategory(cat.id);
                }}
                className={`px-4 py-2 rounded-full border-2 text-[11px] font-black uppercase tracking-wider flex items-center gap-2 cursor-pointer transition-all ${
                  isSelected 
                    ? 'border-slate-900 bg-slate-900 text-white shadow-md scale-102' 
                    : 'border-slate-100 bg-white text-slate-700 hover:border-slate-200 hover:bg-slate-50'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isSelected ? 'text-teal-400' : 'text-slate-400'}`} />
                <span>{cat.label}</span>
                <span className={`text-[9px] font-bold px-1.5 py-0.2 rounded-full font-mono ${
                  isSelected ? 'bg-teal-500 text-slate-900' : 'bg-slate-50 text-slate-400'
                }`}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>

      </section>

      {/* ACCORDION DIALOG LISTING LAYOUT */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-6xl mx-auto text-left">
        
        {/* Left Column: Mascot Speech Support & Interactive Guides */}
        <div className="lg:col-span-5 bg-gradient-to-br from-teal-50/50 via-white to-purple-50/35 border border-slate-150/80 rounded-[2.5rem] p-6 lg:sticky lg:top-24 space-y-6 shadow-sm select-none">
          
          {/* Header descriptor */}
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <span className="text-[9px] font-mono tracking-widest uppercase text-teal-600 block font-black leading-none">
                Companion Guides
              </span>
              <h4 className="text-slate-950 font-extrabold text-base font-display">
                Talk to Kobe & Chibi
              </h4>
            </div>
          </div>

          {/* Interactive Guides Side-by-Side Avatars */}
          <div className="grid grid-cols-2 gap-4 pt-2">
            
            {/* Kobe Avatar Container */}
            <div className="flex flex-col items-center text-center space-y-2">
              <div className="relative group">
                <div className="absolute inset-0 bg-teal-400 rounded-[2rem] opacity-0 group-hover:opacity-10 blur-xl transition-all duration-300" />
                <img 
                  src="/assets/images/kobe_boy_character_avatar_1780168907812.png" 
                  className="w-24 h-24 rounded-[1.75rem] border-3 border-teal-200 object-cover shadow-sm transition-transform duration-300 group-hover:scale-102" 
                  alt="Kobe Character Asset" 
                />
                <span className="absolute bottom-1 right-1 bg-teal-500 text-white p-1 rounded-full text-[8px] font-semibold border-2 border-white leading-none shadow-sm">
                  Active
                </span>
              </div>
              <div className="space-y-0.5">
                <span className="text-[11px] font-black text-slate-800 uppercase block tracking-wider">Kobe</span>
                <span className="text-[9px] text-[#2EC4B6] font-extrabold px-2 py-0.5 bg-teal-50 rounded-full block border border-teal-100/60 font-mono">
                  Tech Explorer
                </span>
              </div>
            </div>

            {/* Chibi Avatar Container */}
            <div className="flex flex-col items-center text-center space-y-2">
              <div className="relative group">
                <div className="absolute inset-0 bg-purple-400 rounded-[2rem] opacity-0 group-hover:opacity-10 blur-xl transition-all duration-300" />
                <img 
                  src="/assets/images/chibi_girl_character_avatar_1780169038873.png" 
                  className="w-24 h-24 rounded-[1.75rem] border-3 border-purple-200 object-cover shadow-sm transition-transform duration-300 group-hover:scale-102" 
                  alt="Chibi Character Asset" 
                />
                <span className="absolute bottom-1 right-1 bg-purple-500 text-white p-1 rounded-full text-[8px] font-semibold border-2 border-white leading-none shadow-sm">
                  Smart
                </span>
              </div>
              <div className="space-y-0.5">
                <span className="text-[11px] font-black text-slate-800 uppercase block tracking-wider">Chibi</span>
                <span className="text-[9px] text-purple-600 font-extrabold px-2 py-0.5 bg-purple-50 rounded-full block border border-purple-100/60 font-mono">
                  Safety Guardian
                </span>
              </div>
            </div>

          </div>

          {/* Clean Modern Speech Bubble Card */}
          <div className="space-y-3 pt-2">
            
            {/* Kobe Speech Bubble */}
            <div className="relative bg-teal-50/40 border border-teal-100/60 rounded-2xl p-4 text-left shadow-sm">
              <div className="space-y-1">
                <span className="text-[8px] font-black uppercase text-teal-600 tracking-widest block font-mono">Kobe Says:</span>
                <p className="text-teal-950 font-semibold text-xs leading-relaxed font-sans">
                  "{kobeBubble}"
                </p>
              </div>
              {/* Pointer arrow */}
              <div className="absolute top-4 -left-1 w-2.5 h-2.5 bg-teal-50/40 border-l border-b border-teal-100/60 rotate-45" />
            </div>

            {/* Chibi Speech Bubble */}
            <div className="relative bg-purple-50/40 border border-purple-100/60 rounded-2xl p-4 text-left shadow-sm">
              <div className="space-y-1">
                <span className="text-[8px] font-black uppercase text-purple-600 tracking-widest block font-mono">Chibi Says:</span>
                <p className="text-purple-950 font-semibold text-xs leading-relaxed font-sans">
                  "{chibiBubble}"
                </p>
              </div>
              {/* Pointer arrow */}
              <div className="absolute top-4 -right-1 w-2.5 h-2.5 bg-purple-50/40 border-r border-t border-purple-100/60 rotate-45" />
            </div>

          </div>

          {/* Companion Interaction Buttons */}
          <div className="grid grid-cols-2 gap-3 pt-2">
            <button
              type="button"
              onClick={handleAskKobe}
              className="bg-white hover:bg-teal-50/20 border-2 border-teal-100 hover:border-teal-300 text-slate-800 font-extrabold text-[10px] uppercase tracking-wider py-3 rounded-xl shadow-sm transition-all hover:-translate-y-0.5 active:translate-y-0 cursor-pointer flex items-center justify-center gap-1.5"
            >
              <span>💬</span> Ask Kobe
            </button>
            <button
              type="button"
              onClick={handleAskChibi}
              className="bg-white hover:bg-purple-50/20 border-2 border-purple-100 hover:border-purple-300 text-slate-800 font-extrabold text-[10px] uppercase tracking-wider py-3 rounded-xl shadow-sm transition-all hover:-translate-y-0.5 active:translate-y-0 cursor-pointer flex items-center justify-center gap-1.5"
            >
              <span>💬</span> Ask Chibi
            </button>
          </div>

          <p className="text-slate-400 text-[9px] font-bold text-center uppercase tracking-wider leading-relaxed">
            * Tap any FAQ accordion card to unlock answers
          </p>

        </div>

        {/* Right Column: Premium Accordion FAQ system */}
        <div className="lg:col-span-7 space-y-4">
          <AnimatePresence mode="popLayout">
            {filteredFaqs.length === 0 ? (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="p-12 text-center bg-slate-50 border border-dashed rounded-[2rem] space-y-3 flex flex-col items-center justify-center"
              >
                <Search className="w-8 h-8 text-slate-450 mb-1" />
                <p className="font-extrabold text-sm uppercase text-slate-800">No matching questions found</p>
                <p className="text-xs text-slate-500 max-w-xs mx-auto font-semibold">
                  Try another keyword search or click the "All FAQs" category badge above.
                </p>
              </motion.div>
            ) : (
              filteredFaqs.map((faq) => {
                const isOpen = openIds.includes(faq.id);

                return (
                  <motion.div
                    key={faq.id}
                    layout="position"
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                    className={`bg-white rounded-[2rem] border-2 transition-all overflow-hidden shadow-sm ${
                      isOpen ? 'border-[#2EC4B6] shadow-md' : 'border-slate-100 hover:border-slate-200'
                    }`}
                  >
                    {/* Header trigger click button */}
                    <button
                      type="button"
                      onClick={() => toggleAccordion(faq.id)}
                      className="w-full flex items-center justify-between p-6 text-left cursor-pointer outline-none focus:outline-none"
                    >
                      <span className="text-slate-900 font-extrabold text-[13px] md:text-sm font-display tracking-tight leading-tight pr-6">
                        {faq.question}
                      </span>
                      <ChevronDown className={`w-4 h-4 text-slate-400 shrink-0 transform transition-transform duration-300 ${
                        isOpen ? 'rotate-180 text-teal-500' : 'rotate-0'
                      }`} />
                    </button>

                    {/* Animated answer block directly showing explanation */}
                    {isOpen && (
                      <div className="px-6 pb-6 pt-0 border-t border-slate-50/50 mt-1">
                        <motion.div 
                          initial={{ opacity: 0, scale: 0.98 }}
                          animate={{ opacity: 1, scale: 1 }}
                          className="space-y-4 pt-4 text-left animate-fadeIn"
                        >
                          <div className={`relative rounded-2xl border-2 p-4 md:p-5 ${
                            faq.responder === 'Kobe' 
                              ? 'bg-[#f4fcfb] border-teal-100 text-[#0f3d37]' 
                              : faq.responder === 'Chibi'
                              ? 'bg-[#faf7ff] border-purple-100 text-[#301c5c]'
                              : 'bg-slate-50 border-slate-200 text-slate-800'
                          }`}>
                            <div className="flex items-start gap-4">
                              {faq.responder === 'Kobe' && (
                                <img src="/assets/images/kobe_boy_character_avatar_1780168907812.png" className="w-9 h-9 rounded-full border-2 border-teal-300 object-cover shadow-sm shrink-0" alt="Kobe" />
                              )}
                              {faq.responder === 'Chibi' && (
                                <img src="/assets/images/chibi_girl_character_avatar_1780169038873.png" className="w-9 h-9 rounded-full border-2 border-purple-300 object-cover shadow-sm shrink-0" alt="Chibi" />
                              )}
                              {faq.responder === 'Both' && (
                                <div className="flex -space-x-3 shrink-0">
                                  <img src="/assets/images/kobe_boy_character_avatar_1780168907812.png" className="w-8 h-8 rounded-full border border-teal-300 object-cover shadow-sm" alt="Kobe" />
                                  <img src="/assets/images/chibi_girl_character_avatar_1780169038873.png" className="w-8 h-8 rounded-full border border-purple-300 object-cover shadow-sm" alt="Chibi" />
                                </div>
                              )}
                              
                              <div className="space-y-1.5 mt-0.5">
                                <span className={`text-[10px] font-black uppercase tracking-wider block ${
                                  faq.responder === 'Kobe' ? 'text-teal-600' : faq.responder === 'Chibi' ? 'text-purple-600' : 'text-slate-500'
                                }`}>
                                  {faq.responder === 'Both' ? 'Kobe & Chibi Explain:' : `${faq.responder} Explains:`}
                                </span>
                                <p className="text-slate-800 text-[13px] leading-relaxed font-semibold font-sans whitespace-pre-line">
                                  {faq.answer}
                                </p>
                              </div>
                            </div>
                          </div>

                          {/* Predefined Responder verified tag */}
                          <div className="flex justify-end pt-1 text-[9px] uppercase font-bold text-slate-400 tracking-wider">
                            <span className={`px-2 py-0.5 rounded font-mono ${
                              faq.responder === 'Kobe' 
                                ? 'bg-teal-50 text-teal-700' 
                                : faq.responder === 'Chibi'
                                ? 'bg-purple-50 text-purple-700'
                                : 'bg-slate-100 text-slate-600'
                            }`}>
                              Answer Verified • Responder: {faq.responder}
                            </span>
                          </div>
                        </motion.div>
                      </div>
                    )}
                  </motion.div>
                );
              })
            )}
          </AnimatePresence>
        </div>

      </section>

      {/* QUICK INQUIRY LINK PARTNERS */}
      <section className="bg-gradient-to-r from-teal-500 to-purple-600 text-white rounded-[3rem] p-10 md:p-14 shadow-xl text-center flex flex-col items-center select-none relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-[0.05] pointer-events-none" />
        <h3 className="text-2xl md:text-3.5xl font-display font-black text-white max-w-xl mx-auto leading-tight animate-fadeIn">
          Still have custom questions?
        </h3>
        <p className="text-white/80 text-xs md:text-sm font-semibold max-w-lg mx-auto mt-2">
          If you are on multiple educational committees, coordinate classrooms, or run an initiative, we would be delighted to process inquiries directly!
        </p>
        <button
          onClick={() => {
            awardXP(50, 'faq_inquiry_contact_clicked');
            onNavigate('/contact');
          }}
          className="bg-white hover:bg-slate-50 text-slate-950 font-black text-xs uppercase tracking-wider px-8 py-4 rounded-2xl shadow-lg mt-6 transition-transform hover:-translate-y-px cursor-pointer border-0 inline-flex items-center gap-1.5"
        >
          Contact Our Helpdesk
          <ChevronRight className="w-4 h-4 text-purple-600 stroke-[2.5]" />
        </button>
      </section>

    </div>
  );
}
