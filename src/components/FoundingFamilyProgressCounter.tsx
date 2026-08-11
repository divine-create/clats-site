import React, { useEffect, useState } from 'react';
import { supabase, isSupabaseConfigured } from '../lib/supabase';
import { Users, UserPlus, Flame, ShieldAlert } from 'lucide-react';

interface FoundingFamilyProgressCounterProps {
  capacity?: number;
}

export default function FoundingFamilyProgressCounter({ capacity = 100 }: FoundingFamilyProgressCounterProps) {
  const [count, setCount] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);
  const [errorStatus, setErrorStatus] = useState<string | null>(null);

  // Maximum capacity
  const CAPACITY = capacity;

  const fetchCount = async () => {
    if (!isSupabaseConfigured) {
      // Offline fallback state / demo state
      setCount(12); // Default mock for demo as requested by Example
      setLoading(false);
      return;
    }

    try {
      // Direct check: query waitlist table where founding_family is true
      let { count: tblCount, error } = await supabase
        .from('waitlist')
        .select('*', { count: 'exact', head: true })
        .eq('founding_family', true);

      if (error) {
        // Fallback to all count if specific filter isn't there
        const { count: generalCount, error: genError } = await supabase
          .from('waitlist')
          .select('*', { count: 'exact', head: true });

        if (genError) {
          throw genError;
        }
        tblCount = generalCount;
      }

      setCount(tblCount || 0);
      setErrorStatus(null);
    } catch (err: any) {
      console.warn('Realtime fetch count failed:', err);
      setErrorStatus(err.message || 'Error loading counter');
      // Graceful fallback to cached or a safe demo number
      setCount(12);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCount();

    if (!isSupabaseConfigured) return;

    // Set up realtime subscriptions on block insertions/updates to instantly sync numbers
    const channel = supabase
      .channel('founding-family-realtime-sync')
      .on(
        'postgres_changes',
        { event: '*', schema: 'public', table: 'waitlist' },
        () => {
          fetchCount();
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  const progressPercentage = Math.min(100, Math.floor((count / CAPACITY) * 100));
  const remainingSpaces = Math.max(0, CAPACITY - count);

  return (
    <div className="w-full bg-[#fcfcfd] border-2 border-slate-200/80 rounded-[2.5rem] p-6 md:p-10 shadow-xl relative overflow-hidden font-sans text-left">
      {/* Premium subtle background accents */}
      <div className="absolute top-0 right-0 w-48 h-48 rounded-full bg-[#2EC4B6]/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-[#B8A0FF]/5 blur-3xl pointer-events-none" />

      {/* Header and Progress Indicator */}
      <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
        <div>
          <span className="text-[10px] font-mono tracking-widest font-extrabold uppercase text-[#2EC4B6] bg-teal-50 border border-teal-100/50 px-3.5 py-1 rounded-full inline-block">
            ⚡ LIVE METRICS
          </span>
          <h4 className="text-xl md:text-2xl font-display font-black text-slate-900 tracking-tight mt-1.5">
            Founding Family Progress Counter
          </h4>
        </div>
        
        {/* Count Indicator */}
        <div className="bg-slate-50 border border-slate-100 px-5 py-2.5 rounded-2xl flex items-center gap-2.5">
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-[pulse_1.5s_infinite]" />
          <span className="text-sm font-black text-slate-800">
            {count} / {CAPACITY} Families Joined
          </span>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="relative z-10 space-y-2 mb-8">
        <div className="w-full bg-slate-100 h-4 rounded-full p-0.5 border border-slate-200/50 overflow-hidden">
          <div 
            className="bg-gradient-to-r from-[#2EC4B6] to-[#B8A0FF] h-full rounded-full transition-all duration-1000 ease-out"
            style={{ width: `${progressPercentage}%` }}
          />
        </div>
        <div className="flex justify-between items-center text-[10px] font-extrabold text-slate-400 tracking-wider">
          <span>MINIMUM CAPACITY: 0</span>
          <span>{progressPercentage}% FILLED</span>
          <span>MAX PROGRAM CAPACITY: {CAPACITY}</span>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-3 gap-4">
        {/* KPI 1 */}
        <div className="bg-white border border-slate-150 rounded-2xl p-5 shadow-sm hover:border-[#2EC4B6]/40 transition-all flex flex-col justify-between min-h-[105px] group">
          <div className="flex justify-between items-start gap-2">
            <span className="text-[10px] uppercase font-black text-slate-500 tracking-wider">
              Families Joined
            </span>
            <div className="p-1.5 bg-teal-50 border border-teal-100 rounded-lg text-[#2EC4B6] shrink-0">
              <Users className="w-3.5 h-3.5" />
            </div>
          </div>
          <div className="mt-2">
            <span className="text-xl md:text-2xl font-black text-slate-950 tracking-tight block">
              {loading ? '...' : count}
            </span>
          </div>
        </div>

        {/* KPI 2 */}
        <div className="bg-white border border-slate-150 rounded-2xl p-5 shadow-sm hover:border-[#B8A0FF]/40 transition-all flex flex-col justify-between min-h-[105px] group">
          <div className="flex justify-between items-start gap-2">
            <span className="text-[10px] uppercase font-black text-slate-500 tracking-wider">
              Remaining Spaces
            </span>
            <div className="p-1.5 bg-purple-50 border border-purple-100 rounded-lg text-[#B8A0FF] shrink-0">
              <UserPlus className="w-3.5 h-3.5" />
            </div>
          </div>
          <div className="mt-2">
            <span className="text-xl md:text-2xl font-black text-slate-950 tracking-tight block">
              {loading ? '...' : remainingSpaces}
            </span>
          </div>
        </div>

        {/* KPI 3 */}
        <div className="bg-white border border-slate-150 rounded-2xl p-5 shadow-sm hover:border-[#2EC4B6]/40 transition-all flex flex-col justify-between min-h-[105px] group">
          <div className="flex justify-between items-start gap-2">
            <span className="text-[10px] uppercase font-black text-slate-500 tracking-wider">
              Program Capacity
            </span>
            <div className="p-1.5 bg-teal-50 border border-teal-100 rounded-lg text-[#2EC4B6] shrink-0">
              <Flame className="w-3.5 h-3.5" />
            </div>
          </div>
          <div className="mt-2">
            <span className="text-xl md:text-2xl font-black text-[#2EC4B6] tracking-tight block">
              {CAPACITY} Unique Slots
            </span>
          </div>
        </div>
      </div>

      {/* Connection warning or info */}
      {errorStatus && (
        <div className="mt-4 flex items-center gap-2 p-3 bg-amber-50 border border-amber-200 rounded-xl text-amber-850 text-xxs font-semibold">
          <ShieldAlert className="w-4 h-4 text-amber-600 shrink-0" />
          <span>Notice: Syncing currently fallback (using default demonstration capacity stats).</span>
        </div>
      )}
    </div>
  );
}
