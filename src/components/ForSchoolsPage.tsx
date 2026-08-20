import React from 'react';
import { BookOpen, Users, BarChart3, ShieldCheck, ChevronRight, CheckCircle, LayoutDashboard, Target } from 'lucide-react';

interface ForSchoolsPageProps {
  onNavigate: (path: string) => void;
  awardXP: (pts: number, id: string) => void;
}

export default function ForSchoolsPage({ onNavigate, awardXP }: ForSchoolsPageProps) {
  return (
    <div className="animate-fadeIn pb-24 font-sans bg-white">
      
      {/* HERO */}
      <section className="relative pt-24 pb-20 md:pt-32 md:pb-28 overflow-hidden bg-soft border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <div className="inline-flex items-center justify-center text-sm font-bold text-turquoise tracking-widest uppercase mb-6">
            School Partnerships
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-dark tracking-tight mb-8 max-w-4xl mx-auto leading-[1.15]">
            Future-Ready Education for the Modern Classroom
          </h1>
          <p className="max-w-2xl mx-auto text-dark-light text-lg md:text-xl font-medium mb-10 leading-relaxed">
            Deploy CLATS across your entire school to bring essential future-tech skills to your students, complete with powerful educator tools and progress tracking.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button 
              onClick={() => {
                awardXP(50, 'schools_contact_sales');
                onNavigate('/contact');
              }}
              className="w-full sm:w-auto bg-turquoise hover:bg-turquoise/90 text-white font-semibold text-[16px] px-8 py-4 rounded-xl shadow-md transition-all cursor-pointer border-none"
            >
              Request a School Demo
            </button>
            <button 
              onClick={() => onNavigate('/about')}
              className="w-full sm:w-auto bg-white border border-gray-200 hover:border-dark text-dark font-semibold text-[16px] px-8 py-4 rounded-xl transition-all cursor-pointer"
            >
              Learn About Our Curriculum
            </button>
          </div>
        </div>
      </section>

      {/* CORE PARTNERSHIP PILLARS */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            
            {/* Pillar 1 */}
            <div className="bg-soft rounded-3xl p-10 border border-gray-100 space-y-6">
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-turquoise shadow-sm">
                <Target className="w-8 h-8" />
              </div>
              <h2 className="text-3xl font-display font-bold text-dark">Seamless Classroom Integration</h2>
              <p className="text-lg text-dark-light leading-relaxed">
                Deploy a future-tech curriculum—covering AI, Cybersecurity, digital citizenship, creativity, and emerging technologies—without needing to hire specialized IT teachers or completely rewrite your existing syllabi.
              </p>
              <ul className="space-y-4 pt-4">
                {['No complex IT installation required', 'Age-appropriate learning pathways', 'Designed to complement existing subjects'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-dark font-medium">
                    <CheckCircle className="w-5 h-5 text-turquoise" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Pillar 2 */}
            <div className="bg-soft rounded-3xl p-10 border border-gray-100 space-y-6">
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-purple shadow-sm">
                <BarChart3 className="w-8 h-8" />
              </div>
              <h2 className="text-3xl font-display font-bold text-dark">Educator Insights & Analytics</h2>
              <p className="text-lg text-dark-light leading-relaxed">
                The educator dashboard provides meaningful visibility into classroom progress. Instantly spot where students are excelling and identify who might need a little extra help.
              </p>
              <ul className="space-y-4 pt-4">
                {['Live classroom engagement metrics', 'Automated progress reports', 'Clear visibility into skill acquisition'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-dark font-medium">
                    <CheckCircle className="w-5 h-5 text-purple" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* CORE FEATURES GRID */}
      <section className="py-24 bg-soft border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-dark">Built for Scale and Simplicity</h2>
            <p className="text-dark-light text-lg max-w-2xl mx-auto">Everything an educator needs to administer next-generation skills.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Users className="w-7 h-7 text-turquoise" />,
                title: "Bulk Onboarding",
                desc: "Easily import rosters and generate student accounts instantly. No complicated IT setup required."
              },
              {
                icon: <BookOpen className="w-7 h-7 text-purple" />,
                title: "Ready Curriculums",
                desc: "Structured pathways designed for classroom pacing, complete with printable resources."
              },
              {
                icon: <LayoutDashboard className="w-7 h-7 text-yellow" />,
                title: "Parent Alignment",
                desc: "Easy-to-export progress reports make it simple to show parents exactly what their child is learning."
              },
              {
                icon: <ShieldCheck className="w-7 h-7 text-dark" />,
                title: "Guaranteed Safety",
                desc: "A completely ad-free, secure, and walled-garden environment compliant with child data protection."
              }
            ].map((f, i) => (
              <div key={i} className="p-8 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-14 h-14 bg-soft rounded-xl flex items-center justify-center mb-6">
                  {f.icon}
                </div>
                <h3 className="text-xl font-display font-bold text-dark mb-3">{f.title}</h3>
                <p className="text-dark-light leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="py-24 bg-dark text-center px-6">
        <div className="max-w-3xl mx-auto space-y-8">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white tracking-tight">
            Ready to bring CLATS to your school?
          </h2>
          <p className="text-lg text-gray-300 font-medium leading-relaxed max-w-2xl mx-auto">
            Get in touch with our partnerships team to schedule a live demonstration and discuss pilot programs for your classrooms.
          </p>
          <div className="pt-4">
            <button 
              onClick={() => onNavigate('/contact')}
              className="bg-turquoise hover:bg-turquoise/90 text-white font-bold px-10 py-4 rounded-xl transition-colors border-none cursor-pointer text-[16px]"
            >
              Contact Our Team
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
