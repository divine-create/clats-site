import React, { useState } from 'react';
import { 
  Mail, Phone, AlertCircle, CheckCircle, Send, Twitter, Instagram, Facebook, Youtube
} from 'lucide-react';
import { isSupabaseConfigured, insertInquiryRecord } from '../lib/supabase';

interface ContactPageProps {
  onNavigate: (path: string) => void;
  awardXP: (pts: number, actionId: string) => void;
}

export default function ContactPage({ onNavigate, awardXP }: ContactPageProps) {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [role, setRole] = useState('Parent / Guardian');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const [validationError, setValidationError] = useState('');
  const [isSending, setIsSending] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const rolesOptions = [
    'Parent / Guardian',
    'School Administrator',
    'NGO Coordinator',
    'Tech Vendor / Developer',
    'Press / Media',
    'Other'
  ];

  const validateForm = () => {
    if (!fullName.trim()) return 'Please enter your full name.';
    if (!email.trim()) return 'Please enter your email address.';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) return 'Please enter a valid email format.';
    if (!subject.trim()) return 'Please specify a subject.';
    if (!message.trim()) return 'Please write your message.';
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
      const response = await fetch("https://formsubmit.co/ajax/admin@clats.org", {
        method: "POST",
        headers: { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            name: fullName.trim(),
            email: email.trim(),
            phone: phone.trim(),
            role: role,
            subject: subject.trim(),
            message: message.trim(),
            _captcha: "false",
            _template: "table"
        })
      });

      if (!response.ok) {
        throw new Error("Failed to send email. Please try again.");
      }

      if (isSupabaseConfigured) {
        await insertInquiryRecord({
          full_name: fullName.trim(),
          email: email.trim(),
          phone: phone.trim(),
          role: role,
          subject: subject.trim(),
          message: message.trim()
        }).catch(err => console.warn("Supabase backup failed, but email was sent:", err));
      }

      setIsSubmitted(true);
      awardXP(50, 'contact_form_inquiry_sent');
      
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
    <div className="bg-white text-dark font-sans animate-fadeIn min-h-[calc(100vh-100px)] pb-24">
      
      {/* HEADER SECTION */}
      <section className="pt-24 pb-16 px-6 text-center bg-soft border-b border-gray-100">
        <div className="max-w-3xl mx-auto space-y-6">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-dark tracking-tight">
            How can we help you?
          </h1>
          <p className="text-lg text-dark-light font-medium leading-relaxed max-w-2xl mx-auto">
            Whether you are a parent exploring our platform, a school looking to integrate CLATS, or a potential partner, our team is ready to assist you.
          </p>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-12 gap-16">
        
        {/* LEFT COLUMN: Contact Info */}
        <div className="lg:col-span-5 space-y-12">
          
          <div>
            <h3 className="text-sm font-bold text-turquoise tracking-widest uppercase mb-4">Contact Information</h3>
            <h2 className="text-3xl font-display font-bold text-dark mb-6">Get in touch with our team</h2>
            <p className="text-dark-light leading-relaxed mb-8">
              Fill out the form and our support team will get back to you within 24 hours. For immediate assistance, you can reach us via our direct channels below.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-soft rounded-xl flex items-center justify-center text-turquoise shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-dark-light mb-1">Email Us</p>
                  <a href="mailto:admin@clats.org" className="text-lg font-bold text-dark hover:text-turquoise transition-colors">
                    admin@clats.org
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-soft rounded-xl flex items-center justify-center text-purple shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-dark-light mb-1">Call / WhatsApp</p>
                  <a href="https://wa.me/23481613567366" target="_blank" rel="noreferrer" className="text-lg font-bold text-dark hover:text-purple transition-colors">
                    +234 816 135 67366
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-gray-100">
            <h3 className="text-sm font-bold text-dark tracking-widest uppercase mb-6">Follow CLATS</h3>
            <div className="flex items-center gap-4">
              <a href="https://x.com/CLATSTech" target="_blank" rel="noreferrer" className="w-12 h-12 bg-soft hover:bg-gray-200 text-dark rounded-full flex items-center justify-center transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/clats_technologies" target="_blank" rel="noreferrer" className="w-12 h-12 bg-soft hover:bg-gray-200 text-dark rounded-full flex items-center justify-center transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://www.facebook.com/profile.php?id=61563470186914" target="_blank" rel="noreferrer" className="w-12 h-12 bg-soft hover:bg-gray-200 text-dark rounded-full flex items-center justify-center transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://www.youtube.com/channel/UCLdrlpGkXt1OQmb2KQMtJWA" target="_blank" rel="noreferrer" className="w-12 h-12 bg-soft hover:bg-gray-200 text-dark rounded-full flex items-center justify-center transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

        </div>

        {/* RIGHT COLUMN: Form */}
        <div className="lg:col-span-7">
          <div className="bg-white border border-gray-100 shadow-xl rounded-3xl p-8 md:p-10">
            
            {isSubmitted ? (
              <div className="py-16 text-center space-y-6">
                <div className="w-20 h-20 bg-green-50 text-green-500 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-display font-bold text-dark">Message Sent Successfully</h3>
                <p className="text-dark-light max-w-md mx-auto">
                  Thank you for reaching out to CLATS. Our team has received your message and will respond to your email address shortly.
                </p>
                <div className="pt-6">
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="text-turquoise font-semibold hover:text-dark transition-colors bg-transparent border-none cursor-pointer"
                  >
                    Send another message
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleContactSubmit} className="space-y-6">
                
                {validationError && (
                  <div className="p-4 bg-red-50 text-red-600 rounded-xl text-sm flex items-center gap-3 font-medium">
                    <AlertCircle className="w-5 h-5 shrink-0" />
                    <span>{validationError}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-dark">Full Name <span className="text-red-500">*</span></label>
                    <input
                      type="text"
                      disabled={isSending}
                      placeholder="Jane Doe"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="w-full bg-soft border border-gray-200 rounded-xl px-4 py-3 focus:border-turquoise focus:bg-white focus:ring-4 focus:ring-turquoise/10 outline-none transition-all"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-dark">Email Address <span className="text-red-500">*</span></label>
                    <input
                      type="email"
                      disabled={isSending}
                      placeholder="jane@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-soft border border-gray-200 rounded-xl px-4 py-3 focus:border-turquoise focus:bg-white focus:ring-4 focus:ring-turquoise/10 outline-none transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-dark">Phone Number</label>
                    <input
                      type="tel"
                      disabled={isSending}
                      placeholder="+1 (555) 000-0000"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full bg-soft border border-gray-200 rounded-xl px-4 py-3 focus:border-turquoise focus:bg-white focus:ring-4 focus:ring-turquoise/10 outline-none transition-all"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-dark">I am a <span className="text-red-500">*</span></label>
                    <select
                      disabled={isSending}
                      value={role}
                      onChange={(e) => setRole(e.target.value)}
                      className="w-full bg-soft border border-gray-200 rounded-xl px-4 py-3 focus:border-turquoise focus:bg-white focus:ring-4 focus:ring-turquoise/10 outline-none transition-all text-dark cursor-pointer"
                    >
                      {rolesOptions.map((opt) => (
                        <option key={opt} value={opt}>{opt}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-dark">Subject <span className="text-red-500">*</span></label>
                  <input
                    type="text"
                    disabled={isSending}
                    placeholder="How can we help you?"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="w-full bg-soft border border-gray-200 rounded-xl px-4 py-3 focus:border-turquoise focus:bg-white focus:ring-4 focus:ring-turquoise/10 outline-none transition-all"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-dark">Message <span className="text-red-500">*</span></label>
                  <textarea
                    rows={5}
                    disabled={isSending}
                    placeholder="Provide details about your inquiry..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full bg-soft border border-gray-200 rounded-xl px-4 py-3 focus:border-turquoise focus:bg-white focus:ring-4 focus:ring-turquoise/10 outline-none transition-all resize-y"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSending}
                  className="w-full bg-turquoise hover:bg-turquoise/90 text-white disabled:bg-gray-300 disabled:text-gray-500 font-bold text-[16px] py-4 rounded-xl transition-all cursor-pointer border-none flex items-center justify-center gap-2"
                >
                  {isSending ? 'Sending Message...' : 'Send Message'}
                  {!isSending && <Send className="w-5 h-5" />}
                </button>

              </form>
            )}
          </div>
        </div>

      </section>
    </div>
  );
}
