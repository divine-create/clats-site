import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Building, GraduationCap, Users, Cpu, Heart, BookOpen, Send, CheckCircle, AlertCircle, Sparkles, ChevronRight 
} from 'lucide-react';
import { isSupabaseConfigured, insertInquiryRecord } from '../lib/supabase';

interface PartnershipsPageProps {
  onNavigate: (path: string) => void;
  awardXP: (pts: number, actionId: string) => void;
}

export default function PartnershipsPage({ onNavigate, awardXP }: PartnershipsPageProps) {
  // Form input states
  const [orgName, setOrgName] = useState('');
  const [contactName, setContactName] = useState('');
  const [email, setEmail] = useState('');
  const [partnerType, setPartnerType] = useState('School / Educational Institution');
  const [message, setMessage] = useState('');
  
  // UX logic states
  const [validationError, setValidationError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const partnershipCategories = [
    {
      id: 'schools',
      title: 'Schools & Educational Institutions',
      emoji: '🏫',
      description: 'Integrating future-tech learning, custom prompt labs, and internet safety modules into standard school curriculums.',
      iconComponent: GraduationCap,
      color: 'border-[#2EC4B6]/20 bg-white hover:border-[#2EC4B6]/60 shadow-[#2EC4B6]/5',
      iconColor: 'bg-[#2EC4B6]/10 text-[#2EC4B6]',
    },
    {
      id: 'parents',
      title: 'Parent Communities',
      emoji: '👨‍👩‍👧‍👦',
      description: 'Coordinating physical security assemblies and digital awareness campaigns for modern safety-conscious guardians.',
      iconComponent: Users,
      color: 'border-[#B8A0FF]/25 bg-white hover:border-[#B8A0FF]/60 shadow-[#B8A0FF]/5',
      iconColor: 'bg-[#B8A0FF]/15 text-[#8A67F0]',
    },
    {
      id: 'tech_companies',
      title: 'Technology Companies',
      emoji: '💻',
      description: 'Securing student tools, software sandboxes, expert developer mentors, and early access to physical labs.',
      iconComponent: Cpu,
      color: 'border-[#FFD166]/30 bg-white hover:border-[#FFD166]/70 shadow-[#FFD166]/5',
      iconColor: 'bg-[#FFD166]/15 text-[#FFD166]',
    },
    {
      id: 'ngos',
      title: 'NGOs & Social Impact Organizations',
      emoji: '🌍',
      description: 'Democratizing technological confidence and safety classes to kids in low-bandwidth, rural, or underserved territories.',
      iconComponent: Heart,
      color: 'border-[#2EC4B6]/20 bg-white hover:border-[#2EC4B6]/60 shadow-[#2EC4B6]/5',
      iconColor: 'bg-[#2EC4B6]/10 text-[#2EC4B6]',
    },
    {
      id: 'government',
      title: 'Government & Policy Stakeholders',
      emoji: '🏛',
      description: 'Drafting cybersecurity policies, child digital safety initiatives, and expanding local software career readiness paths.',
      iconComponent: Building,
      color: 'border-[#B8A0FF]/25 bg-white hover:border-[#B8A0FF]/60 shadow-[#B8A0FF]/5',
      iconColor: 'bg-[#B8A0FF]/15 text-[#8A67F0]',
    },
    {
      id: 'universities',
      title: 'Universities & Research Institutions',
      emoji: '🎓',
      description: 'Publishing academic research on developmental psychology, child interfaces, and safety algorithms.',
      iconComponent: BookOpen,
      color: 'border-[#FFD166]/30 bg-white hover:border-[#FFD166]/70 shadow-[#FFD166]/5',
      iconColor: 'bg-[#FFD166]/15 text-amber-600',
    }
  ];

  const validateForm = () => {
    if (!orgName.trim()) return 'Please type the Organization Name.';
    if (!contactName.trim()) return 'Please specify the Contact Representative name.';
    if (!email.trim()) return 'Please enter your email.';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) return 'Please provide a valid email format.';
    if (!message.trim()) return 'Please type some details about your areas of interest.';
    return null;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;

    const errorMsg = validateForm();
    if (errorMsg) {
      setValidationError(errorMsg);
      return;
    }

    setValidationError('');
    setIsSubmitting(true);

    try {
      if (isSupabaseConfigured) {
        // We reuse the inquiries table to safely store organization requests
        await insertInquiryRecord({
          full_name: `${contactName.trim()} (${orgName.trim()})`,
          email: email.trim(),
          role: `Partner: ${partnerType}`,
          subject: `Partnership Request from ${orgName.trim()}`,
          message: message.trim()
        });
      } else {
        // Fallback simulated delays
        console.warn('Supabase is not configured yet. Simulating success...');
        await new Promise((resolve) => setTimeout(resolve, 800));
      }

      setIsSubmitted(true);
      awardXP(150, 'partnership_inquiry_submitted');
      
      // Clear form
      setOrgName('');
      setContactName('');
      setEmail('');
      setMessage('');
    } catch (err: any) {
      console.error('Inquiry submission error:', err);
      setValidationError(err?.message || 'Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 space-y-20 animate-fadeIn font-sans">
      
      {/* PAGE HEADER */}
      <section className="text-center max-w-3xl mx-auto space-y-5 pt-6">
        <span className="text-xxs font-black text-amber-600 bg-[#FFD166]/15 border border-[#FFD166]/30 px-3.5 py-1.5 rounded-full uppercase tracking-widest inline-block select-none">
          🤝 Continental Collaboration
        </span>
        <h1 className="text-4xl md:text-6xl font-display font-black text-slate-900 tracking-tight leading-[1.1]">
          Building Tomorrow{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-purple-600">
            With Strategic Partners
          </span>
        </h1>
        <p className="text-slate-650 text-slate-600 text-sm md:text-base leading-relaxed font-semibold max-w-xl mx-auto">
          CLATS believes preparing the next generation of child developers requires active, structured ecosystem support. Explore our collaboration avenues below!
        </p>
      </section>

      {/* DYNAMIC PARTNER MATRIX */}
      <section className="space-y-8">
        <div className="text-center max-w-xl mx-auto space-y-3">
          <h2 className="text-2xl font-display font-black text-slate-900 tracking-tight">
            Comprehensive Partner Categories
          </h2>
          <p className="text-slate-500 text-xs md:text-sm font-medium">
            We adapt our APIs and secure guides to provide tailored services to each specific public or private entity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {partnershipCategories.map((category) => {
            const Icon = category.iconComponent;
            return (
              <div
                key={category.id}
                className={`rounded-[2rem] border-2 p-6 md:p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg flex flex-col justify-between h-full bg-white relative group ${category.color}`}
              >
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <div className={`p-3.5 rounded-2xl flex items-center justify-center shrink-0 transition-transform group-hover:scale-105 duration-300 ${category.iconColor}`}>
                      <Icon className="w-5 h-5 shrink-0" />
                    </div>
                  </div>

                  <div className="space-y-2 text-left">
                    <h4 className="$10 text-slate-900 font-extrabold text-[15px] md:text-base leading-snug tracking-tight">
                      {category.title}
                    </h4>
                    <p className="text-slate-550 text-slate-500 text-xxs font-semibold leading-relaxed leading-normal">
                      {category.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* SECURE PARTNERSHIP INQUIRY FORM */}
      <section id="partner-form-section" className="max-w-3xl mx-auto bg-white border-2 border-[#B8A0FF]/25 shadow-2xl rounded-[3rem] p-1.5 md:p-2.5 relative overflow-hidden font-sans">
        {/* Glow Spheres Decor */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-teal-400/5 rounded-full blur-2xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-400/5 rounded-full blur-2xl pointer-events-none" />

        <div className="p-6 md:p-10 relative z-10 text-left">
          <div className="flex justify-center mb-8">
            <div className="inline-flex items-center gap-1.5 bg-teal-50 text-teal-700 text-xxs font-black px-4.5 py-2 rounded-full border border-teal-100 uppercase tracking-wider select-none">
              <Sparkles className="w-3.5 h-3.5 text-teal-600 animate-pulse" />
              Secure Partnership Inquiry Portal
            </div>
          </div>

          {isSubmitted ? (
            <div className="py-12 text-center space-y-5">
              <div className="w-16 h-16 bg-[#2EC4B6]/15 border-2 border-[#2EC4B6]/30 text-[#2EC4B6] rounded-full flex items-center justify-center mx-auto shadow-sm animate-bounce">
                <CheckCircle className="w-8 h-8 stroke-[2.5]" />
              </div>
              <div className="space-y-2">
                <h4 className="text-2xl font-black text-slate-950 font-display">🎉 Partner Request Recieved!</h4>
                <p className="text-slate-650 text-slate-800 text-xs md:text-sm max-w-md mx-auto font-medium leading-relaxed">
                  Thank you for applying to partner with CLATS. Our administration reviews institutional requests manually and will reply to your organization's email shortly.
                </p>
              </div>
              <button
                type="button"
                onClick={() => setIsSubmitted(false)}
                className="px-5 py-2.5 bg-slate-100 hover:bg-slate-150 text-slate-700 font-extrabold text-xs uppercase tracking-wider rounded-xl transition-colors cursor-pointer"
              >
                Inquire For Another Entity
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              
              {validationError && (
                <div className="p-3.5 bg-red-50 border border-red-100 text-red-600 rounded-2xl text-xs flex items-center gap-2.5 font-bold">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{validationError}</span>
                </div>
              )}

              {/* Organization name and representative line */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-black text-slate-900 uppercase tracking-wider mb-1.5">
                    Organization Name <span className="text-red-500 font-mono">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    disabled={isSubmitting}
                    placeholder="e.g. Future Labs Academy"
                    value={orgName}
                    onChange={(e) => {
                      setOrgName(e.target.value);
                      if (validationError && e.target.value.trim()) setValidationError('');
                    }}
                    className="w-full bg-slate-50 $10 text-slate-900 border border-slate-200 rounded-xl px-4 py-3 placeholder-slate-400 focus:border-[#2EC4B6] focus:bg-white focus:ring-4 focus:ring-[#2EC4B6]/10 outline-none text-xs md:text-sm font-semibold transition-all shadow-sm"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-black text-slate-900 uppercase tracking-wider mb-1.5">
                    Contact Representative <span className="text-red-500 font-mono">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    disabled={isSubmitting}
                    placeholder="e.g. Dr. Jane Smith"
                    value={contactName}
                    onChange={(e) => {
                      setContactName(e.target.value);
                      if (validationError && e.target.value.trim()) setValidationError('');
                    }}
                    className="w-full bg-slate-50 $10 text-slate-900 border border-slate-200 rounded-xl px-4 py-3 placeholder-slate-400 focus:border-[#2EC4B6] focus:bg-white focus:ring-4 focus:ring-[#2EC4B6]/10 outline-none text-xs md:text-sm font-semibold transition-all shadow-sm"
                  />
                </div>
              </div>

              {/* Email and Partnership Select Type */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-black text-slate-900 uppercase tracking-wider mb-1.5">
                    Email Address <span className="text-red-500 font-mono">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    disabled={isSubmitting}
                    placeholder="partner@institution.org"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (validationError && e.target.value.trim()) setValidationError('');
                    }}
                    className="w-full bg-slate-50 $10 text-slate-900 border border-slate-200 rounded-xl px-4 py-3 placeholder-slate-400 focus:border-[#2EC4B6] focus:bg-white focus:ring-4 focus:ring-[#2EC4B6]/10 outline-none text-xs md:text-sm font-semibold transition-all shadow-sm"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-black text-slate-900 uppercase tracking-wider mb-1.5">
                    Partnership Type <span className="text-red-500 font-mono">*</span>
                  </label>
                  <div className="relative">
                    <select
                      required
                      disabled={isSubmitting}
                      value={partnerType}
                      onChange={(e) => setPartnerType(e.target.value)}
                      className="w-full bg-slate-50 $10 text-slate-900 border border-slate-200 rounded-xl px-4 py-3 focus:border-[#2EC4B6] focus:bg-white UI focus:ring-4 focus:ring-[#2EC4B6]/10 outline-none text-xs md:text-sm font-semibold appearance-none cursor-pointer"
                    >
                      <option value="School / Educational Institution">School / Educational Institution</option>
                      <option value="Non-Governmental Organization (NGO)">Non-Governmental Organization (NGO)</option>
                      <option value="Technology Corporation">Technology Corporation</option>
                      <option value="Parent Association">Parent Association</option>
                      <option value="Government Body">Government Body</option>
                      <option value="Other Stakeholder">Other Stakeholder</option>
                    </select>
                    <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-slate-500">
                      ▼
                    </div>
                  </div>
                </div>
              </div>

              {/* Message Details */}
              <div>
                <label className="block text-[11px] font-black text-slate-900 uppercase tracking-wider mb-1.5">
                  Proposed Partnership Goals & Messaging <span className="text-red-500 font-mono">*</span>
                </label>
                <textarea
                  required
                  rows={4}
                  disabled={isSubmitting}
                  placeholder="Describe your organization's mission to protect or empower kids using future software, and how CLATS can assist..."
                  value={message}
                  onChange={(e) => {
                    setMessage(e.target.value);
                    if (validationError && e.target.value.trim()) setValidationError('');
                  }}
                  className="w-full bg-slate-50 $10 text-slate-900 border border-slate-200 rounded-xl px-4 py-3 placeholder-slate-400 focus:border-[#2EC4B6] focus:bg-white focus:ring-4 focus:ring-[#2EC4B6]/10 outline-none text-xs md:text-sm font-semibold transition-all shadow-sm resize-none"
                />
              </div>

              {/* Button Submission */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#2EC4B6] text-slate-950 hover:bg-[#25B4A6] disabled:bg-slate-300 disabled:$10 disabled:text-slate-550 font-black text-xs md:text-sm uppercase tracking-wider py-4 rounded-xl.5 rounded-2xl shadow-lg transition-transform duration-200 cursor-pointer border border-[#2EC4B6]"
                >
                  <Send className="w-4 h-4 inline-block mr-1.5 stroke-[2.5]" />
                  <span>{isSubmitting ? 'Transmitting details...' : 'Submit Partnership Application'}</span>
                </button>
              </div>

            </form>
          )}

        </div>
      </section>

    </div>
  );
}
