import React from 'react';
import { 
  ChevronRight, Brain, Shield, PenTool, RefreshCw, Lightbulb, 
  BookOpen, Gamepad2, TrendingUp, Users, Presentation, ShieldCheck
} from 'lucide-react';

interface HomePageProps {
  onNavigate: (path: string) => void;
}

export default function HomePage({ onNavigate }: HomePageProps) {
  return (
    <div className="animate-fadeIn font-sans bg-white text-dark">
      
      {/* SECTION 1: HERO */}
      <section className="relative pt-20 pb-24 md:pt-32 md:pb-36 px-6 overflow-hidden bg-white">
        {/* Subtle Background Elements */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-soft to-white pointer-events-none rounded-bl-[100px]" />
        
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
          <div className="space-y-8 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-extrabold text-dark leading-[1.15] tracking-tight">
              Preparing Children for the Future, <span className="text-turquoise">Starting Today.</span>
            </h1>
            <p className="text-lg md:text-xl text-dark-light font-medium leading-relaxed max-w-2xl mx-auto lg:mx-0">
              CLATS is a future-ready learning platform for children aged 2–18, helping them build the knowledge, skills and confidence to thrive in a rapidly changing world.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <button
                onClick={() => onNavigate('/get-started')}
                className="w-full sm:w-auto bg-turquoise hover:bg-turquoise/90 text-white font-semibold text-[16px] px-8 py-4 rounded-xl shadow-md transition-all cursor-pointer border-none"
              >
                Start Learning
              </button>
              <button
                onClick={() => onNavigate('/schools')}
                className="w-full sm:w-auto bg-white border-2 border-gray-200 hover:border-dark text-dark font-semibold text-[16px] px-8 py-4 rounded-xl transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                Explore for Schools
                <ChevronRight className="w-5 h-5 text-dark" />
              </button>
            </div>
          </div>
          
          <div className="relative w-full aspect-video bg-black rounded-3xl overflow-hidden border border-gray-800 shadow-2xl flex items-center justify-center group">
            <video 
              className="absolute inset-0 w-full h-full object-cover"
              src="/assets/video/clats.mp4"
              controls
              playsInline
              preload="metadata"
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </section>

      {/* SECTION 2: THE FUTURE IS CHANGING */}
      <section className="py-24 bg-purple text-white px-6 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight">
            The world children are growing into is changing fast.
          </h2>
          <p className="text-lg md:text-xl text-white/90 font-medium leading-relaxed max-w-3xl mx-auto">
            Technology and AI are reshaping how we learn, work and live. Children need more than access to technology. They need the knowledge, creativity, digital responsibility and adaptability to navigate it confidently.
          </p>
          <div className="text-2xl font-bold text-yellow pt-4">
            That's where CLATS comes in.
          </div>
        </div>
      </section>

      {/* SECTION 3: WHAT IS CLATS? */}
      <section className="py-24 px-6 bg-soft">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-dark tracking-tight">
              Learning for the World They're Growing Into
            </h2>
            <p className="text-lg text-dark-light font-medium">
              CLATS gives children age-appropriate opportunities to explore important future-ready skills through structured lessons, interactive learning and progressive experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "AI & Emerging Technologies", desc: "Explore AI, emerging technologies and the digital world.", icon: Brain },
              { title: "Cybersecurity & Digital Citizenship", desc: "Learn to navigate technology safely, responsibly and confidently.", icon: Shield },
              { title: "Design & Creativity", desc: "Develop creativity, visual thinking, problem-solving and expression.", icon: PenTool },
              { title: "Adaptability & Learning", desc: "Build curiosity, critical thinking, resilience and learning agility.", icon: RefreshCw },
              { title: "Innovation & Career Readiness", desc: "For older learners, develop innovation, problem-solving and awareness of future opportunities.", icon: Lightbulb }
            ].map((card, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="w-14 h-14 bg-soft rounded-xl flex items-center justify-center mb-6">
                  <card.icon className="w-7 h-7 text-turquoise" />
                </div>
                <h3 className="text-xl font-display font-bold text-dark mb-3">{card.title}</h3>
                <p className="text-dark-light leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: CLATS FOR DIFFERENT AGES */}
      <section className="py-24 px-6 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-dark tracking-tight mb-16">
            A Learning Journey That Grows With Them
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 relative">
            <div className="hidden md:block absolute top-12 left-1/4 right-1/4 h-0.5 bg-gray-100 -z-10" />
            
            <div className="bg-soft p-10 rounded-2xl text-center">
              <div className="text-sm font-bold text-turquoise tracking-widest uppercase mb-2">Ages 2–5</div>
              <h3 className="text-2xl font-display font-bold text-dark mb-4">Early Explorers</h3>
              <p className="text-dark-light leading-relaxed">Build curiosity, creativity and foundational learning through age-appropriate experiences.</p>
            </div>
            
            <div className="bg-soft p-10 rounded-2xl text-center">
              <div className="text-sm font-bold text-turquoise tracking-widest uppercase mb-2">Ages 6–12</div>
              <h3 className="text-2xl font-display font-bold text-dark mb-4">Young Learners</h3>
              <p className="text-dark-light leading-relaxed">Develop digital confidence, creativity, problem-solving and foundational future-ready knowledge.</p>
            </div>

            <div className="bg-soft p-10 rounded-2xl text-center">
              <div className="text-sm font-bold text-turquoise tracking-widest uppercase mb-2">Ages 13–18</div>
              <h3 className="text-2xl font-display font-bold text-dark mb-4">Future Builders</h3>
              <p className="text-dark-light leading-relaxed">Explore AI, emerging technologies, cybersecurity, innovation, creativity, adaptability and career readiness at a deeper level.</p>
            </div>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8 text-dark font-bold text-lg">
            <span>Explore</span>
            <ChevronRight className="w-5 h-5 text-purple" />
            <span>Discover</span>
            <ChevronRight className="w-5 h-5 text-purple" />
            <span>Create</span>
            <ChevronRight className="w-5 h-5 text-purple" />
            <span>Prepare</span>
          </div>
        </div>
      </section>

      {/* SECTION 5: HOW CLATS WORKS */}
      <section className="py-24 px-6 bg-soft">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-dark tracking-tight text-center mb-16">
            Learn. Practice. Grow.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center space-y-4">
              <div className="w-20 h-20 mx-auto bg-white border-2 border-turquoise text-turquoise rounded-full flex items-center justify-center text-2xl font-display font-bold">01</div>
              <h3 className="text-xl font-display font-bold text-dark">Learn</h3>
              <p className="text-dark-light">Children explore structured lessons designed for their age and learning stage.</p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-20 h-20 mx-auto bg-white border-2 border-turquoise text-turquoise rounded-full flex items-center justify-center text-2xl font-display font-bold">02</div>
              <h3 className="text-xl font-display font-bold text-dark">Practice</h3>
              <p className="text-dark-light">They test their understanding through quizzes, activities and challenges.</p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-20 h-20 mx-auto bg-white border-2 border-turquoise text-turquoise rounded-full flex items-center justify-center text-2xl font-display font-bold">03</div>
              <h3 className="text-xl font-display font-bold text-dark">Grow</h3>
              <p className="text-dark-light">They track their progress and build confidence as they continue learning.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: PRODUCT EXPERIENCE */}
      <section className="py-24 px-6 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-dark tracking-tight text-center mb-16">
            Built to Make Learning Engaging
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-soft p-10 rounded-2xl flex flex-col justify-center space-y-4">
              <BookOpen className="w-8 h-8 text-turquoise mb-2" />
              <h3 className="text-2xl font-display font-bold text-dark">Learning</h3>
              <p className="text-dark-light leading-relaxed">Structured learning pathways and age-appropriate lessons.</p>
            </div>
            
            <div className="bg-soft p-10 rounded-2xl flex flex-col justify-center space-y-4">
              <Gamepad2 className="w-8 h-8 text-turquoise mb-2" />
              <h3 className="text-2xl font-display font-bold text-dark">Interactive Assessment</h3>
              <p className="text-dark-light leading-relaxed">Quizzes help learners demonstrate what they understand.</p>
            </div>

            <div className="bg-soft p-10 rounded-2xl flex flex-col justify-center space-y-4">
              <TrendingUp className="w-8 h-8 text-turquoise mb-2" />
              <h3 className="text-2xl font-display font-bold text-dark">Progress</h3>
              <p className="text-dark-light leading-relaxed">Children can see their learning progress and earned XP.</p>
            </div>

            <div className="bg-soft p-10 rounded-2xl flex flex-col justify-center space-y-4">
              <Users className="w-8 h-8 text-turquoise mb-2" />
              <h3 className="text-2xl font-display font-bold text-dark">Parent Insights</h3>
              <p className="text-dark-light leading-relaxed">Parents can gain visibility into their child's learning journey.</p>
            </div>
            
            <div className="lg:col-span-2 bg-dark p-10 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-8 text-white">
              <div className="space-y-4">
                <Presentation className="w-8 h-8 text-purple mb-2" />
                <h3 className="text-2xl font-display font-bold text-white">School Tools</h3>
                <p className="text-gray-300 leading-relaxed max-w-xl">Schools can manage learners and monitor learning activity through their dedicated environment.</p>
              </div>
              <button 
                onClick={() => onNavigate('/schools')}
                className="bg-purple hover:bg-purple/90 text-white font-bold px-6 py-3 rounded-xl transition-colors border-none cursor-pointer"
              >
                View School Tools
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7: GAMIFICATION */}
      <section className="py-24 px-6 bg-soft text-center">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-dark tracking-tight">
              Learning That Feels Like Progress
            </h2>
            <p className="text-lg text-dark-light font-medium">
              CLATS uses simple game-inspired progression to make learning more engaging and motivating.
            </p>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8 font-bold text-xl text-dark">
            <span className="bg-white px-6 py-3 rounded-xl shadow-sm border border-gray-100">Lessons</span>
            <ChevronRight className="w-6 h-6 text-yellow" />
            <span className="bg-white px-6 py-3 rounded-xl shadow-sm border border-gray-100">Quizzes</span>
            <ChevronRight className="w-6 h-6 text-yellow" />
            <span className="bg-white px-6 py-3 rounded-xl shadow-sm border border-gray-100">XP</span>
            <ChevronRight className="w-6 h-6 text-yellow" />
            <span className="bg-white px-6 py-3 rounded-xl shadow-sm border border-gray-100">Progress</span>
          </div>

          <p className="text-sm font-semibold text-dark-light pt-8 flex items-center justify-center gap-2">
            <span className="text-yellow">✦</span> More interactive challenges coming soon.
          </p>
        </div>
      </section>

      {/* SECTION 8: FOR PARENTS */}
      <section className="py-24 px-6 bg-dark text-white text-center">
        <div className="max-w-3xl mx-auto space-y-8">
          <ShieldCheck className="w-16 h-16 text-purple mx-auto" />
          <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight">
            Help your child build the skills and confidence for tomorrow.
          </h2>
          <p className="text-lg text-gray-300 font-medium leading-relaxed">
            Whether you are a parent looking to supplement your child's education or a homeschooling family seeking structured future-ready curriculum, CLATS provides the safe, engaging environment they need.
          </p>
          <div className="pt-8">
            <button
              onClick={() => onNavigate('/get-started')}
              className="bg-turquoise hover:bg-turquoise/90 text-white font-semibold text-[16px] px-10 py-4 rounded-xl shadow-md transition-all cursor-pointer border-none"
            >
              Get Started Today
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
