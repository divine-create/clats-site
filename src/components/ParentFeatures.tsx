import React from 'react';
import { FileText, Clock, BarChart, ShieldCheck } from 'lucide-react';

export default function ParentFeatures() {
  return (
    <section className="py-24 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left side: Visuals / Dashboard Mockup */}
        <div className="order-2 lg:order-1 relative">
          <div className="absolute -inset-4 rounded-3xl bg-teal-50 blur-2xl -z-10" />
          
          <div className="bg-slate-900 rounded-2xl p-2 shadow-2xl border border-slate-800 rotate-1 hover:rotate-0 transition-transform duration-500">
            <div className="bg-slate-800 rounded-xl overflow-hidden aspect-[4/3] flex flex-col">
              {/* Mockup Header */}
              <div className="px-4 py-3 border-b border-slate-700 flex justify-between items-center bg-slate-900/50">
                <div className="text-white text-xs font-bold tracking-wider">Parent Dashboard</div>
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-700" />
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-700" />
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-700" />
                </div>
              </div>
              {/* Mockup Content */}
              <div className="flex-1 p-6 flex flex-col gap-4">
                <div className="flex gap-4">
                  <div className="flex-1 bg-slate-700/50 rounded-lg p-4">
                    <div className="text-slate-400 text-[10px] uppercase font-bold mb-1">Weekly Screen Time</div>
                    <div className="text-white font-mono text-xl font-bold">4h 20m</div>
                  </div>
                  <div className="flex-1 bg-teal-500/20 border border-teal-500/30 rounded-lg p-4">
                    <div className="text-teal-400 text-[10px] uppercase font-bold mb-1">XP Earned</div>
                    <div className="text-teal-50 font-mono text-xl font-bold">1,250</div>
                  </div>
                </div>
                <div className="flex-1 bg-slate-700/30 rounded-lg p-4 flex items-center justify-center border border-slate-700">
                   <div className="flex flex-col items-center gap-2">
                     <FileText className="w-8 h-8 text-indigo-400" />
                     <button className="text-xs bg-indigo-500 text-white px-4 py-2 rounded-lg font-bold">Download PDF Report</button>
                   </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Floating badge */}
          <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-4 animate-[bounce_4s_infinite]">
            <div className="bg-green-100 p-2 rounded-full">
              <ShieldCheck className="w-6 h-6 text-green-600" />
            </div>
            <div>
              <div className="text-slate-800 font-bold text-sm">100% Safe</div>
              <div className="text-slate-500 text-xs">Monitored Learning</div>
            </div>
          </div>
        </div>

        {/* Right side: Text Content */}
        <div className="order-1 lg:order-2">
          <div className="inline-flex items-center gap-1.5 bg-indigo-50 text-indigo-700 text-xs font-bold px-3 py-1.5 rounded-full border border-indigo-100 uppercase tracking-widest mb-6">
            For Parents
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-6">
            Total Visibility into Your Child's Progress
          </h2>
          <p className="text-slate-600 text-lg mb-8 leading-relaxed">
            Stay connected to what your child is learning. The CLATS Parent Dashboard gives you real-time insights into screen time, curriculum progress, and newly acquired skills.
          </p>

          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="mt-1 bg-teal-50 p-2.5 rounded-xl border border-teal-100 shrink-0 h-fit">
                <FileText className="w-5 h-5 text-teal-600" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-1">Printable PDF Reports</h3>
                <p className="text-slate-600 text-sm">Generate beautiful, easy-to-read progress reports to stick on the fridge or share with teachers.</p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="mt-1 bg-purple-50 p-2.5 rounded-xl border border-purple-100 shrink-0 h-fit">
                <Clock className="w-5 h-5 text-purple-600" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-1">Screen Time Tracking</h3>
                <p className="text-slate-600 text-sm">Monitor exactly how much time is spent on productive learning modules versus free play.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="mt-1 bg-amber-50 p-2.5 rounded-xl border border-amber-100 shrink-0 h-fit">
                <BarChart className="w-5 h-5 text-amber-600" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-1">Live XP & Milestone Tracking</h3>
                <p className="text-slate-600 text-sm">Celebrate their wins! Watch their gamified XP grow as they complete AI and coding challenges.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
