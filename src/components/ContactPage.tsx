import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Mail, MessageSquare, Phone, User, Info, FileText, Send, CheckCircle, AlertCircle, Sparkles, HelpCircle, Twitter, Instagram, Facebook, Youtube
} from 'lucide-react';
import { isSupabaseConfigured, insertInquiryRecord } from '../lib/supabase';

interface ContactPageProps {
  onNavigate: (path: string) => void;
  awardXP: (pts: number, actionId: string) => void;
}

export default function ContactPage({ onNavigate, awardXP }: ContactPageProps) {
  // Contact Form Inputs
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [role, setRole] = useState('Parent / Guardian');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  // UX state triggers
  const [validationError, setValidationError] = useState('');
  const [isSending, setIsSending] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const rolesOptions = [
    'Parent / Guardian',
    'School Principal / Administrator',
    'NGO Coordinator',
    'Tech Vendor / Developer',
    'Curious Technology Explorer'
  ];

  const validateForm = () => {
    if (!fullName.trim()) return 'Please enter your Full Name.';
    if (!email.trim()) return 'Please enter your Email Address.';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) return 'Please enter a valid email format.';
    if (!subject.trim()) return 'Please specify a Subject line.';
    if (!message.trim()) return 'Please write down your custom message.';
    return null;
  };

  const handleContactSubmit = async (e: React.FormEvent) => {
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
        await insertInquiryRecord({
          full_name: fullName.trim(),
          email: email.trim(),
          phone: phone.trim(),
          role: role,
          subject: subject.trim(),
          message: message.trim()
        });
      } else {
        // Simulated local fallback delay
        console.warn('Supabase is not configured yet. Fallback simulation on contacts...');
        await new Promise((resolve) => setTimeout(resolve, 800));
      }

      setIsSubmitted(true);
      awardXP(150, 'contact_form_inquiry_sent');
      
      // Clear fields
      setFullName('');
      setEmail('');
      setPhone('');
      setSubject('');
      setMessage('');
    } catch (err: any) {
      console.error('Inquiry delivery failure:', err);
      setValidationError(err?.message || 'Something went wrong. Please try again.');
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 space-y-16 animate-fadeIn font-sans">
      
      {/* PAGE HEADER */}
      <section className="text-center max-w-3xl mx-auto space-y-5 pt-6">
        <span className="text-xxs font-black text-[#8A67F0] bg-purple-50 border border-purple-150 px-3.5 py-1.5 rounded-full uppercase tracking-widest inline-block select-none">
          Support Terminal
        </span>
        <h1 className="text-4xl md:text-6xl font-display font-black text-slate-900 tracking-tight leading-[1.1]">
          Get in Touch{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-purple-600">
            With CLATS Team
          </span>
        </h1>
        <p className="text-slate-650 text-slate-600 text-sm md:text-base leading-relaxed font-semibold max-w-xl mx-auto">
          We love hearing from parents, instructors, advocates, and tech explorers alike. Drop us a secure line below and our support coordinators will get back to you immediately!
        </p>
      </section>

      {/* DUAL CONTACT ROW LAYOUT */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-5xl mx-auto text-left">
        
        {/* Left Column: Helpdesk details and support links */}
        <div className="lg:col-span-5 space-y-8">
          
          {/* Quick Info card */}
          <div className="bg-slate-50/70 border border-slate-150 rounded-[2.5rem] p-7 space-y-6">
            <div className="space-y-1">
              <span className="text-[9px] font-mono tracking-widest uppercase $10 text-teal-600 font-extrabold block">
                Office Information
              </span>
              <h3 className="text-lg font-black text-slate-950 font-display">
                CLATS HQ Secretariat
              </h3>
            </div>

            <p className="text-slate-550 $10 text-slate-500 text-xxs font-semibold leading-relaxed leading-normal">
              Empowering kids to utilize smart technology correctly takes safe cooperation. Join our digital secretariats and help protect households worldwide.
            </p>

            <div className="space-y-4 text-xxs font-bold text-slate-700">
              {/* Electronic Mail Address Desk */}
              <div className="flex gap-3.5 items-center pb-4 border-b border-slate-200/50">
                <div className="w-9 h-9 rounded-xl bg-teal-50 border border-teal-120 flex items-center justify-center text-teal-600">
                  <Mail className="w-4 h-4 shrink-0" />
                </div>
                <div className="leading-none select-all">
                  <span className="text-[9px] text-slate-400 block font-mono">Email Helpdesk</span>
                  <a href="mailto:clatstechnologies@gmail.com" className="text-slate-800 hover:text-[#2EC4B6] font-extrabold block mt-1.5">
                    clatstechnologies@gmail.com
                  </a>
                </div>
              </div>

              {/* WhatsApp instant support link */}
              <div className="flex gap-3.5 items-center pb-4 border-b border-slate-200/50">
                <div className="w-9 h-9 rounded-xl bg-purple-50 border border-purple-120 flex items-center justify-center text-purple-600">
                  <Phone className="w-4 h-4 shrink-0" />
                </div>
                <div className="leading-none">
                  <span className="text-[9px] text-slate-400 block font-mono">WhatsApp Support</span>
                  <a 
                    href="https://wa.me/23481613567366" 
                    target="_blank" 
                    rel="noreferrer" 
                    className="text-slate-800 hover:text-purple-600 font-extrabold block mt-1.5"
                  >
                    (234) 81613567366
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Social Links elements */}
          <div className="space-y-4">
            <span className="text-[10px] uppercase font-black tracking-wider $10 text-slate-400 block">
              Follow Kobe & Chibi Journeys
            </span>
            <div className="flex items-center gap-3">
              <a 
                href="https://x.com/CLATSTech" 
                target="_blank" 
                rel="noreferrer" 
                className="w-10 h-10 rounded-full bg-white border border-slate-200 hover:border-[#2EC4B6] text-slate-600 hover:text-[#2EC4B6] flex items-center justify-center transition-all hover:scale-105 active:scale-95 shadow-sm"
                title="Twitter / X (@CLATSTech)"
              >
                <Twitter className="w-4 h-4 stroke-[2.2]" />
              </a>
              <a 
                href="https://www.instagram.com/clats_technologies?igsh=MTQ1Mnphamc0NnY0eg==" 
                target="_blank" 
                rel="noreferrer" 
                className="w-10 h-10 rounded-full bg-white border border-slate-200 hover:border-purple-300 text-slate-600 hover:text-purple-600 flex items-center justify-center transition-all hover:scale-105 active:scale-95 shadow-sm"
                title="Instagram (@clats_technologies)"
              >
                <Instagram className="w-4 h-4 stroke-[2.2]" />
              </a>
              <a 
                href="https://www.facebook.com/profile.php?id=61563470186914" 
                target="_blank" 
                rel="noreferrer" 
                className="w-10 h-10 rounded-full bg-white border border-slate-200 hover:border-blue-300 text-slate-600 hover:text-blue-600 flex items-center justify-center transition-all hover:scale-105 active:scale-95 shadow-sm"
                title="Facebook Page"
              >
                <Facebook className="w-4 h-4 stroke-[2.2]" />
              </a>
              <a 
                href="https://www.youtube.com/channel/UCLdrlpGkXt1OQmb2KQMtJWA" 
                target="_blank" 
                rel="noreferrer" 
                className="w-10 h-10 rounded-full bg-white border border-slate-200 hover:border-rose-300 text-slate-600 hover:text-rose-600 flex items-center justify-center transition-all hover:scale-105 active:scale-95 shadow-sm"
                title="YouTube Channel"
              >
                <Youtube className="w-4 h-4 stroke-[2.2]" />
              </a>
            </div>
          </div>

        </div>

        {/* Right Column: Interaction Form */}
        <div className="lg:col-span-7 bg-white border-2 border-slate-150 shadow-2xl rounded-[3rem] p-1.5 md:p-2.5 relative overflow-hidden font-sans">
          {/* Decors */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-teal-400/5 rounded-full blur-2xl pointer-events-none" />
          
          <div className="p-6 md:p-8 relative z-10 text-left">
            {isSubmitted ? (
              <div className="py-12 text-center space-y-6">
                <div className="w-16 h-16 bg-[#2EC4B6]/15 border-2 border-[#2EC4B6]/30 text-[#2EC4B6] rounded-full flex items-center justify-center mx-auto shadow-sm animate-bounce">
                  <CheckCircle className="w-8 h-8 stroke-[2.5]" />
                </div>
                <div className="space-y-2">
                  <h4 className="text-2xl font-black text-slate-950 font-display">🎉 Message Transmitted!</h4>
                  <p className="$10 text-slate-600 text-xs md:text-sm max-w-sm mx-auto font-semibold leading-relaxed">
                    Kobe and Chibi got your inquiry details! The CLATS support division reviews contact entries manually and will response to your mailbox shortly.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setIsSubmitted(false)}
                  className="px-5 py-2.5 bg-slate-100 hover:bg-slate-150 text-slate-707 text-slate-700 font-black text-xs uppercase tracking-wider rounded-xl transition-colors cursor-pointer"
                >
                  Write Another Response
                </button>
              </div>
            ) : (
              <form onSubmit={handleContactSubmit} className="space-y-4">
                
                {validationError && (
                  <div className="p-3.5 bg-red-50 border border-red-100 text-red-650 text-red-600 rounded-2xl text-xs flex items-center gap-2.5 font-bold">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{validationError}</span>
                  </div>
                )}

                {/* Name */}
                <div>
                  <label className="block text-[11px] font-black text-slate-900 uppercase tracking-wider mb-1 flex justify-between">
                    <span>Full name</span>
                    <span className="text-red-500 font-mono text-xs">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-3.5 flex items-center pointer-events-none text-slate-400">
                      <User className="w-4 h-4" />
                    </div>
                    <input
                      type="text"
                      required
                      disabled={isSending}
                      placeholder="e.g. Chinedu Obi"
                      value={fullName}
                      onChange={(e) => {
                        setFullName(e.target.value);
                        if (validationError && e.target.value.trim()) setValidationError('');
                      }}
                      className="w-full bg-slate-50 $10 border border-slate-200 rounded-xl pl-10 pr-4 py-3 placeholder-slate-400 focus:border-[#2EC4B6] focus:bg-white focus:ring-4 focus:ring-[#2EC4B6]/10 outline-none text-xs md:text-sm font-semibold transition-all shadow-sm"
                    />
                  </div>
                </div>

                {/* Email and Phone Number row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-black text-slate-900 uppercase tracking-wider mb-1 flex justify-between">
                      <span>Email Address</span>
                      <span className="text-red-500 font-mono text-xs">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-3.5 flex items-center pointer-events-none text-slate-400">
                        <Mail className="w-4 h-4" />
                      </div>
                      <input
                        type="email"
                        required
                        disabled={isSending}
                        placeholder="your@email.com"
                        value={email}
                        onChange={(e) => {
                          setEmail(e.target.value);
                          if (validationError && e.target.value.trim()) setValidationError('');
                        }}
                        className="w-full bg-slate-50 $10 border border-slate-200 rounded-xl pl-10 pr-4 py-3 placeholder-slate-400 focus:border-[#2EC4B6] focus:bg-white focus:ring-4 focus:ring-[#2EC4B6]/10 outline-none text-xs md:text-sm font-semibold transition-all shadow-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-black text-slate-900 uppercase tracking-wider mb-1 flex justify-between">
                      <span>Phone Number</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-3.5 flex items-center pointer-events-none text-slate-400">
                        <Phone className="w-4 h-4" />
                      </div>
                      <input
                        type="tel"
                        disabled={isSending}
                        placeholder="e.g. +234 911 643 8553"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full bg-slate-50 $10 border border-slate-200 rounded-xl pl-10 pr-4 py-3 placeholder-slate-400 focus:border-[#2EC4B6] focus:bg-white focus:ring-4 focus:ring-[#2EC4B6]/10 outline-none text-xs md:text-sm font-semibold transition-all shadow-sm"
                      />
                    </div>
                  </div>
                </div>

                {/* Select Role */}
                <div>
                  <label className="block text-[11px] font-black text-slate-900 uppercase tracking-wider mb-1 flex justify-between">
                    <span>I am a</span>
                    <span className="text-red-500 font-mono text-xs">*</span>
                  </label>
                  <div className="relative text-slate-400">
                    <div className="absolute inset-y-0 left-3.5 flex items-center pointer-events-none">
                      <Info className="w-4 h-4" />
                    </div>
                    <select
                      required
                      disabled={isSending}
                      value={role}
                      onChange={(e) => setRole(e.target.value)}
                      className="w-full bg-slate-50 $10 border border-slate-200 rounded-xl pl-10 pr-10 py-3.5 focus:border-[#2EC4B6] focus:bg-white focus:ring-4 focus:ring-[#2EC4B6]/10 outline-none text-xs md:text-sm font-semibold text-slate-900 appearance-none cursor-pointer"
                    >
                      {rolesOptions.map((opt) => (
                        <option key={opt} value={opt}>{opt}</option>
                      ))}
                    </select>
                    <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-slate-500">
                      ▼
                    </div>
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label className="block text-[11px] font-black text-slate-900 uppercase tracking-wider mb-1 flex justify-between">
                    <span>Subject</span>
                    <span className="text-red-500 font-mono text-xs">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-3.5 flex items-center pointer-events-none text-slate-400">
                      <FileText className="w-4 h-4" />
                    </div>
                    <input
                      type="text"
                      required
                      disabled={isSending}
                      placeholder="e.g. Account set-up assistance request"
                      value={subject}
                      onChange={(e) => {
                        setSubject(e.target.value);
                        if (validationError && e.target.value.trim()) setValidationError('');
                      }}
                      className="w-full bg-slate-50 $10 border border-slate-200 rounded-xl pl-10 pr-4 py-3 placeholder-slate-400 focus:border-[#2EC4B6] focus:bg-white focus:ring-4 focus:ring-[#2EC4B6]/10 outline-none text-xs md:text-sm font-semibold transition-all shadow-sm"
                    />
                  </div>
                </div>

                {/* Message text */}
                <div>
                  <label className="block text-[11px] font-black text-slate-900 uppercase tracking-wider mb-1 flex justify-between">
                    <span>Message content</span>
                    <span className="text-red-500 font-mono text-xs">*</span>
                  </label>
                  <textarea
                    required
                    rows={4}
                    disabled={isSending}
                    placeholder="Type details of your question or support request here..."
                    value={message}
                    onChange={(e) => {
                      setMessage(e.target.value);
                      if (validationError && e.target.value.trim()) setValidationError('');
                    }}
                    className="w-full bg-slate-50 $10 border border-slate-200 rounded-xl px-4 py-3 placeholder-slate-400 focus:border-[#2EC4B6] focus:bg-white focus:ring-4 focus:ring-[#2EC4B6]/10 outline-none text-xs md:text-sm font-semibold transition-all shadow-sm resize-none"
                  />
                </div>

                {/* Submit button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSending}
                    className="w-full bg-slate-950 hover:bg-slate-800 text-white disabled:bg-slate-300 disabled:text-slate-500 font-extrabold text-xs uppercase tracking-widest py-4 rounded-xl transition-all cursor-pointer border-0 flex items-center justify-center gap-1.5"
                  >
                    <Send className="w-4 h-4 shrink-0 stroke-[2.5]" />
                    <span>{isSending ? 'Transmitting Response...' : 'Dispatch Message To HQ'}</span>
                  </button>
                </div>

              </form>
            )}
          </div>
        </div>

      </section>

    </div>
  );
}
