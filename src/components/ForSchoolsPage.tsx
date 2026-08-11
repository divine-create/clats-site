import React from 'react';
import { BookOpen, Users, BarChart3, ShieldCheck, ChevronRight, CheckCircle } from 'lucide-react';

interface ForSchoolsPageProps {
  onNavigate: (path: string) => void;
  awardXP: (pts: number, id: string) => void;
}

export default function ForSchoolsPage({ onNavigate, awardXP }: ForSchoolsPageProps) {
  return (
    <div className="animate-fadeIn pb-24">
      {/* HERO */}
      <section className="relative pt-20 pb-16 bg-slate-900 overflow-hidden text-white">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-teal-900/40" />
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <div className="inline-flex items-center gap-1.5 bg-teal-500/10 text-teal-300 text-xs font-bold px-4 py-2 rounded-full border border-teal-500/20 uppercase tracking-widest mb-6">
            B2B Coordinator Portal
          </div>
          <h1 className="text-4xl md:text-5xl font-black mb-6">
            Future-Tech Education for the <span className="text-teal-400">Modern Classroom</span>
          </h1>
          <p className="max-w-2xl mx-auto text-slate-300 text-lg mb-10">
            Deploy CLATS across your entire school with zero setup friction. Manage bulk licenses, track classroom progress, and bring AI and coding to your students seamlessly.
          </p>
          <button 
            onClick={() => {
              awardXP(50, 'schools_contact_sales');
              onNavigate('/contact');
            }}
            className="bg-teal-500 hover:bg-teal-400 text-white font-bold py-4 px-8 rounded-xl shadow-lg transition-all"
          >
            Request a School Demo
          </button>
        </div>
      </section>

      {/* WHY SCHOOLS CHOOSE CLATS */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-black mb-4">Why Schools Choose CLATS</h2>
            <p className="text-slate-500 max-w-xl mx-auto">The core benefits that drive true educational ROI.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col gap-4">
              <h3 className="text-xl font-bold text-slate-900">1. Instant Modernization</h3>
              <p className="text-slate-600 text-sm">Deploy a future-tech curriculum (AI, coding, digital citizenship) overnight without hiring specialized IT teachers or rewriting your syllabi.</p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col gap-4">
              <h3 className="text-xl font-bold text-slate-900">2. Effortless Parent Alignment</h3>
              <p className="text-slate-600 text-sm">Automated PDF progress reports make it trivial to show parents exactly what their child is learning, boosting your school's reputation.</p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col gap-4">
              <h3 className="text-xl font-bold text-slate-900">3. Targeted Interventions</h3>
              <p className="text-slate-600 text-sm">The Master Analytics dashboard shows live engagement metrics. Instantly spot students falling behind before they fail a test.</p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col gap-4">
              <h3 className="text-xl font-bold text-slate-900">4. Skyrocketing Engagement</h3>
              <p className="text-slate-600 text-sm">Gamification, XP streaks, and AI interactive tutors keep kids glued to productive learning, reducing classroom behavioral issues.</p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col gap-4 lg:col-span-2">
              <h3 className="text-xl font-bold text-slate-900">5. Guaranteed Child Safety</h3>
              <p className="text-slate-600 text-sm">Eliminate the liability of open-web research. CLATS is a 100% walled-garden, ad-free environment compliant with global digital safety standards.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-black mb-4">Built for Scale and Simplicity</h2>
            <p className="text-slate-500 max-w-xl mx-auto">Everything an educator needs to administer next-generation skills.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Users className="w-8 h-8 text-blue-500" />,
                title: "Bulk Student Onboarding",
                desc: "Easily import rosters and generate student credentials instantly. No complicated IT setup."
              },
              {
                icon: <BarChart3 className="w-8 h-8 text-teal-500" />,
                title: "Master Analytics Dashboard",
                desc: "Track progress, quiz scores, and engagement metrics at the classroom, grade, or district level."
              },
              {
                icon: <BookOpen className="w-8 h-8 text-purple-500" />,
                title: "Ready-to-Use Curriculums",
                desc: "Curriculums designed for classroom pacing, complete with teacher guides and printable resources."
              },
              {
                icon: <ShieldCheck className="w-8 h-8 text-rose-500" />,
                title: "100% Safe Environment",
                desc: "Ad-free, secure, and fully compliant with global child data protection regulations."
              }
            ].map((f, i) => (
              <div key={i} className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-xl transition-all">
                <div className="mb-6">{f.icon}</div>
                <h3 className="text-xl font-bold mb-3">{f.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DASHBOARD PREVIEW MOCKUP */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-slate-900 rounded-3xl p-4 md:p-8 shadow-2xl overflow-hidden border border-slate-800">
            <div className="flex items-center gap-3 mb-6 px-2">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-rose-500" />
                <div className="w-3 h-3 rounded-full bg-amber-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>
              <div className="text-slate-400 text-xs font-mono ml-4">coordinator-dashboard.clats.org</div>
            </div>
            
            <div className="bg-slate-800 rounded-xl border border-slate-700 aspect-video flex items-center justify-center relative overflow-hidden">
              {/* Replace with actual image in the future */}
              <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-900 flex flex-col items-center justify-center text-center p-8">
                <BarChart3 className="w-16 h-16 text-slate-600 mb-4" />
                <h4 className="text-slate-300 font-bold text-xl mb-2">Coordinator Dashboard Preview</h4>
                <p className="text-slate-500 text-sm max-w-sm">
                  Live data visualization of classroom engagement, XP distribution, and curriculum completion rates.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
