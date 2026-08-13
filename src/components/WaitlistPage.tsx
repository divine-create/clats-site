import React, { useState, useEffect } from 'react';
import { Mail, Phone, User, MapPin, Send, CheckCircle, AlertCircle, Rocket, Gift, Sparkles, ShieldCheck, Timer } from 'lucide-react';
import { isSupabaseConfigured, insertWaitlistRecord } from '../lib/supabase';
import Logo from './Logo';

interface WaitlistPageProps {
  onNavigate: (path: string) => void;
  awardXP: (pts: number, actionId: string) => void;
}

export default function WaitlistPage({ onNavigate, awardXP }: WaitlistPageProps) {
  // Form Inputs
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [location, setLocation] = useState('');
  
  // Checkboxes
  const [receiveUpdates, setReceiveUpdates] = useState(false);

  // UX states
  const [validationError, setValidationError] = useState('');
  const [isSending, setIsSending] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Countdown state for Sunday 16th August 2026 6pm GMT +1
  const targetDate = new Date('2026-08-16T18:00:00+01:00').getTime();
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        clearInterval(timer);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      }
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const validateForm = () => {
    if (!firstName.trim()) return 'Please enter your First Name.';
    if (!lastName.trim()) return 'Please enter your Last Name.';
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) return 'Please enter a valid email format.';
    if (!phone.trim()) return 'Please enter your Phone Number.';
    if (!location.trim()) return 'Please enter your Location.';
    return null;
  };

  const handleWaitlistSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSending) return;

    const errorMsg = validateForm();
    if (errorMsg) {
      setValidationError(errorMsg);
      return;
    }

    setValidationError('');
    setIsSending(true);

    try {
      if (isSupabaseConfigured) {
        await insertWaitlistRecord({
          parent_name: `${firstName.trim()} ${lastName.trim()}`,
          email: email.trim(),
          phone: phone.trim(),
          location: location.trim(),
          number_of_children: 1, 
          age_groups: 'N/A', 
          founding_family_status: receiveUpdates ? 'waitlist_subscribed' : 'waitlist',
        });
      } else {
        await new Promise((resolve) => setTimeout(resolve, 800));
      }

      setIsSubmitted(true);
      awardXP(200, 'joined_waitlist');
      
      // Automatically redirect to WhatsApp immediately after saving their details!
      window.location.href = "https://chat.whatsapp.com/Fu4mxZCX48lL6PXLHYzNaC?s=sh&p=a&ilr=0";
      
      setFirstName('');
      setLastName('');
      setEmail('');
      setPhone('');
      setLocation('');
      setReceiveUpdates(false);
    } catch (err: any) {
      console.error('Waitlist join failure:', err);
      setValidationError(err?.message || 'Something went wrong. Please try again.');
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="flex flex-col lg:flex-row min-h-screen font-sans w-full bg-white">
      
      {/* LEFT SIDE: Visuals & Video Background */}
      <div className="lg:w-5/12 relative bg-slate-950 flex flex-col justify-between overflow-hidden min-h-[50vh] lg:min-h-screen border-r border-slate-200 shadow-2xl z-10">
        
        {/* YouTube Video Background via Iframe */}
        {/* The aspect ratio scale ensures it covers the div without black bars. Pointer-events-none prevents clicking the video. */}
        <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden flex items-center justify-center">
          <iframe 
            src="https://www.youtube.com/embed/bHDcP9ao4wk?autoplay=1&mute=1&loop=1&playlist=bHDcP9ao4wk&controls=0&showinfo=0&rel=0&iv_load_policy=3&start=9"
            className="absolute w-[300vw] h-[300vh] lg:w-[150vw] lg:h-[150vh] object-cover pointer-events-none"
            allow="autoplay; encrypted-media"
            frameBorder="0"
          ></iframe>
        </div>

        {/* Overlay to dim video slightly and add brand colors cleanly */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#2EC4B6]/40 via-slate-900/50 to-[#8A67F0]/40" />

        {/* Top Content: Logo / Brand */}
        <div className="relative z-10 p-8 md:p-12 text-white">
          <Logo className="origin-top-left drop-shadow-xl" imgClassName="h-8 md:h-10" />
        </div>

        {/* Middle Content: Value Prop & Countdown */}
        <div className="relative z-10 p-8 md:p-12 text-white space-y-6">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-black leading-[1.1] drop-shadow-lg">
            Empowering<br/>Tomorrow's<br/>Tech Leaders.
          </h1>
          
          <p className="text-teal-50 font-semibold max-w-lg text-lg md:text-xl leading-relaxed drop-shadow-md opacity-90">
            Join the exclusive founding cohort. We are building a secure, gamified ecosystem where kids learn advanced digital skills safely and playfully.
          </p>

          {/* Beautiful Launch Countdown */}
          <div className="pt-6">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-5 md:p-6 inline-block shadow-2xl">
              <div className="flex items-center gap-2 mb-4 text-teal-300 drop-shadow-md">
                <Timer className="w-5 h-5" />
                <span className="text-xs md:text-sm font-black uppercase tracking-widest">Platform Launching In</span>
              </div>
              
              <div className="flex items-center gap-2 md:gap-4 text-center">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-slate-900/40 rounded-xl md:rounded-2xl border border-white/10 flex items-center justify-center backdrop-blur-sm shadow-inner">
                    <span className="text-2xl md:text-3xl font-black text-white font-mono">{timeLeft.days}</span>
                  </div>
                  <span className="text-[10px] md:text-xs text-teal-100 font-bold uppercase tracking-widest mt-2">Days</span>
                </div>
                <span className="text-lg md:text-2xl text-teal-500/70 font-black pb-5 md:pb-6">:</span>
                
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-slate-900/40 rounded-xl md:rounded-2xl border border-white/10 flex items-center justify-center backdrop-blur-sm shadow-inner">
                    <span className="text-2xl md:text-3xl font-black text-white font-mono">{String(timeLeft.hours).padStart(2, '0')}</span>
                  </div>
                  <span className="text-[10px] md:text-xs text-teal-100 font-bold uppercase tracking-widest mt-2">Hours</span>
                </div>
                <span className="text-lg md:text-2xl text-teal-500/70 font-black pb-5 md:pb-6">:</span>
                
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-slate-900/40 rounded-xl md:rounded-2xl border border-white/10 flex items-center justify-center backdrop-blur-sm shadow-inner">
                    <span className="text-2xl md:text-3xl font-black text-white font-mono">{String(timeLeft.minutes).padStart(2, '0')}</span>
                  </div>
                  <span className="text-[10px] md:text-xs text-teal-100 font-bold uppercase tracking-widest mt-2">Mins</span>
                </div>
                <span className="text-lg md:text-2xl text-teal-500/70 font-black pb-5 md:pb-6">:</span>
                
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-slate-900/40 rounded-xl md:rounded-2xl border border-white/10 flex items-center justify-center backdrop-blur-sm shadow-inner">
                    <span className="text-2xl md:text-3xl font-black text-white font-mono">{String(timeLeft.seconds).padStart(2, '0')}</span>
                  </div>
                  <span className="text-[10px] md:text-xs text-teal-100 font-bold uppercase tracking-widest mt-2">Secs</span>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>

      {/* RIGHT SIDE: Action & Form */}
      <div className="lg:w-7/12 bg-white flex flex-col justify-center items-center p-6 md:p-12 lg:p-16 overflow-y-auto relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-teal-50/50 rounded-full blur-3xl pointer-events-none -z-10" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-50/50 rounded-full blur-3xl pointer-events-none -z-10" />

         <div className="w-full max-w-xl space-y-10 z-10">
            
            {/* The Special Offer & Header */}
            <div className="space-y-4">
              <span className="text-xs font-black text-amber-600 bg-amber-50 border border-amber-200 px-3 py-1.5 rounded-full uppercase tracking-widest inline-flex items-center gap-1.5 w-max shadow-sm">
                <Gift className="w-4 h-4" /> 50% Off First Month/Year Plan
              </span>
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 font-display tracking-tight">Secure Your Spot</h2>
              <p className="text-slate-500 font-semibold text-base max-w-lg leading-relaxed">
                Join the waitlist today and lock in your early parent rewards. We'll notify you the moment enrollment opens.
              </p>
            </div>

            {/* FORM */}
            <div className="bg-white rounded-[2rem] border border-slate-150 p-6 md:p-8 shadow-2xl shadow-slate-200/50">
              {isSubmitted ? (
                <div className="py-10 text-center space-y-6 animate-fadeIn">
                  <div className="w-16 h-16 bg-teal-50 border-2 border-teal-150 text-teal-500 rounded-full flex items-center justify-center mx-auto shadow-sm animate-bounce">
                    <CheckCircle className="w-8 h-8 stroke-[2.5]" />
                  </div>
                  <div className="space-y-3">
                    <h4 className="text-3xl font-black text-slate-950 font-display">🎉 You're on the list!</h4>
                    <p className="text-slate-600 text-sm max-w-sm mx-auto font-semibold leading-relaxed">
                      <strong className="text-slate-900 block mb-2 text-base">Important Next Step:</strong> 
                      Join our exclusive WhatsApp Waitlist group to receive priority updates and early access links!
                    </p>
                  </div>
                  
                  <a 
                    href="https://chat.whatsapp.com/Fu4mxZCX48lL6PXLHYzNaC?s=sh&p=a&ilr=0"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white font-extrabold text-base uppercase tracking-widest py-4 rounded-xl transition-all shadow-lg shadow-[#25D366]/20"
                  >
                    Join WhatsApp Group
                  </a>
                </div>
              ) : (
                <form onSubmit={handleWaitlistSubmit} className="space-y-5">
                  
                  {validationError && (
                    <div className="p-3.5 bg-red-50 border border-red-100 text-red-600 rounded-xl text-xs flex items-center gap-2.5 font-bold animate-fadeIn">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{validationError}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <label className="text-xs font-black text-slate-900 uppercase tracking-wider flex justify-between">
                        <span>First Name</span><span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-3.5 flex items-center pointer-events-none text-slate-400">
                          <User className="w-4 h-4" />
                        </div>
                        <input type="text" required disabled={isSending} value={firstName} onChange={e => setFirstName(e.target.value)} placeholder="e.g. Sarah" className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-10 pr-4 py-3.5 text-base font-semibold focus:border-teal-400 focus:bg-white focus:ring-4 focus:ring-teal-400/10 outline-none transition-all" />
                      </div>
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs font-black text-slate-900 uppercase tracking-wider flex justify-between">
                        <span>Last Name</span><span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-3.5 flex items-center pointer-events-none text-slate-400">
                          <User className="w-4 h-4" />
                        </div>
                        <input type="text" required disabled={isSending} value={lastName} onChange={e => setLastName(e.target.value)} placeholder="e.g. Connor" className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-10 pr-4 py-3.5 text-base font-semibold focus:border-teal-400 focus:bg-white focus:ring-4 focus:ring-teal-400/10 outline-none transition-all" />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <label className="text-xs font-black text-slate-900 uppercase tracking-wider flex justify-between">
                        <span>Email Address</span><span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-3.5 flex items-center pointer-events-none text-slate-400">
                          <Mail className="w-4 h-4" />
                        </div>
                        <input type="email" required disabled={isSending} value={email} onChange={e => setEmail(e.target.value)} placeholder="you@domain.com" className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-10 pr-4 py-3.5 text-base font-semibold focus:border-teal-400 focus:bg-white focus:ring-4 focus:ring-teal-400/10 outline-none transition-all" />
                      </div>
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs font-black text-slate-900 uppercase tracking-wider flex justify-between">
                        <span>Phone Number</span><span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-3.5 flex items-center pointer-events-none text-slate-400">
                          <Phone className="w-4 h-4" />
                        </div>
                        <input type="tel" required disabled={isSending} value={phone} onChange={e => setPhone(e.target.value)} placeholder="+1 234 567 890" className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-10 pr-4 py-3.5 text-base font-semibold focus:border-teal-400 focus:bg-white focus:ring-4 focus:ring-teal-400/10 outline-none transition-all" />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[11px] font-black text-slate-900 uppercase tracking-wider flex justify-between">
                      <span>Location</span><span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-3.5 flex items-center pointer-events-none text-slate-400">
                        <MapPin className="w-4 h-4" />
                      </div>
                      <input type="text" required disabled={isSending} value={location} onChange={e => setLocation(e.target.value)} placeholder="City, Country" className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-10 pr-4 py-3.5 text-base font-semibold focus:border-teal-400 focus:bg-white focus:ring-4 focus:ring-teal-400/10 outline-none transition-all" />
                    </div>
                  </div>

                  <div className="space-y-3 pt-3 border-t border-slate-100">
                    <label className="flex items-start gap-3 cursor-pointer group">
                      <div className="relative flex items-center shrink-0 mt-0.5">
                        <input type="checkbox" checked={receiveUpdates} onChange={e => setReceiveUpdates(e.target.checked)} className="peer sr-only" />
                        <div className="w-4.5 h-4.5 bg-slate-50 border border-slate-300 rounded flex items-center justify-center peer-checked:bg-teal-500 peer-checked:border-teal-500 transition-colors">
                          <CheckCircle className="w-3 h-3 text-white opacity-0 peer-checked:opacity-100" />
                        </div>
                      </div>
                      <span className="text-sm font-bold text-slate-500 leading-snug group-hover:text-slate-800 transition-colors">
                        Keep me updated with CLATS news and promotional offers.
                      </span>
                    </label>
                  </div>

                  <div className="pt-4">
                    <button type="submit" disabled={isSending} className="w-full bg-slate-950 hover:bg-slate-800 text-white disabled:opacity-70 disabled:cursor-not-allowed font-extrabold text-base uppercase tracking-widest py-4 rounded-xl transition-all cursor-pointer border-0 flex items-center justify-center gap-2 shadow-lg shadow-slate-900/15">
                      <Send className="w-5 h-5 shrink-0" />
                      <span>{isSending ? 'Transmitting...' : 'Join the Wait-list Group'}</span>
                    </button>
                  </div>
                  
                  <div className="flex items-center justify-center gap-1.5 text-slate-400 text-xs font-mono uppercase tracking-widest pt-3">
                    <ShieldCheck className="w-4 h-4 text-teal-500" /> 256-bit Secure Submission
                  </div>
                </form>
              )}
            </div>
         </div>
      </div>

    </div>
  );
}
