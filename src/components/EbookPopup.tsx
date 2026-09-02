import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Download, Mail, Sparkles, BookOpen, AlertCircle } from 'lucide-react';
import { isSupabaseConfigured, insertEbookLeadRecord } from '../lib/supabase';

const STORAGE_KEY = 'clats_ebook_popup_seen';
const SHOW_DELAY_MS = 5000;

const EBOOK_FILE_URL = '/assets/pdfs/Future-Ready%20Kids%20Guide.pdf';
const EBOOK_FILE_NAME = 'Future-Ready Kids Guide.pdf';

export default function EbookPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    let alreadySeen = false;
    try {
      alreadySeen = localStorage.getItem(STORAGE_KEY) === 'true';
    } catch {
      // localStorage unavailable (e.g. private mode) — treat as not seen
    }
    if (alreadySeen) return;

    const timer = setTimeout(() => setIsOpen(true), SHOW_DELAY_MS);
    return () => clearTimeout(timer);
  }, []);

  const markSeen = () => {
    try {
      localStorage.setItem(STORAGE_KEY, 'true');
    } catch {
      // ignore write failures
    }
  };

  const handleClose = () => {
    markSeen();
    setIsOpen(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      setError('Please enter a valid email address.');
      return;
    }

    setError('');
    setIsSubmitting(true);

    try {
      if (isSupabaseConfigured) {
        await insertEbookLeadRecord({
          email: email.trim(),
          source_path: window.location.pathname,
        });
      } else {
        console.warn('Supabase is not configured. Falling back to local offline simulation...');
        await new Promise((resolve) => setTimeout(resolve, 800));
      }

      markSeen();
      setIsSubmitted(true);
    } catch (err: any) {
      console.error('Ebook lead submit failed:', err);
      setError(err?.message || 'Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] bg-slate-950/50 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={handleClose}
        >
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.96 }}
            transition={{ type: 'spring', damping: 22, stiffness: 260 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-md bg-white rounded-[2rem] shadow-2xl border-2 border-[#2EC4B6]/20 overflow-hidden"
          >
            <button
              onClick={handleClose}
              aria-label="Close"
              className="absolute top-4 right-4 z-10 p-1.5 rounded-full bg-slate-50 hover:bg-slate-100 text-slate-500 hover:text-slate-700 border-none cursor-pointer transition-colors"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="absolute top-0 right-0 w-48 h-48 bg-[#2EC4B6]/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#8A67F0]/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 p-8 text-center">
              {isSubmitted ? (
                <div className="space-y-5">
                  <div className="w-16 h-16 bg-[#2EC4B6]/15 border-2 border-[#2EC4B6]/30 text-[#2EC4B6] rounded-full flex items-center justify-center mx-auto">
                    <BookOpen className="w-8 h-8 stroke-[2.5]" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-black text-slate-950 font-display">Your Guide Is Ready!</h3>
                    <p className="text-sm text-slate-600 font-medium">
                      Thanks for joining us. Tap below to download your free copy.
                    </p>
                  </div>
                  <a
                    href={EBOOK_FILE_URL}
                    download={EBOOK_FILE_NAME}
                    onClick={handleClose}
                    className="w-full inline-flex items-center justify-center gap-2 bg-[#2EC4B6] hover:bg-[#25B4A6] text-slate-950 font-black text-xs uppercase tracking-wider px-5 py-3.5 rounded-xl shadow-lg shadow-[#2EC4B6]/20 transition-all cursor-pointer"
                  >
                    <Download className="w-4 h-4" />
                    Download Free Guide
                  </a>
                </div>
              ) : (
                <div className="space-y-5">
                  <div className="w-16 h-16 bg-[#FFD166]/20 border-2 border-[#FFD166]/40 text-slate-900 rounded-full flex items-center justify-center mx-auto">
                    <Sparkles className="w-7 h-7 text-[#2EC4B6]" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-black text-slate-950 font-display">Get Our Free Ebook</h3>
                    <p className="text-sm text-slate-600 font-medium leading-relaxed">
                      A free guide for parents on raising future-ready kids. Enter your email and we'll send it your way.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-3 text-left">
                    <div className="relative">
                      <div className="absolute inset-y-0 left-3.5 flex items-center pointer-events-none text-slate-400">
                        <Mail className="w-4 h-4" />
                      </div>
                      <input
                        type="email"
                        required
                        disabled={isSubmitting}
                        placeholder="your@email.com"
                        value={email}
                        onChange={(e) => {
                          setEmail(e.target.value);
                          if (error) setError('');
                        }}
                        className="w-full bg-slate-50 text-slate-900 placeholder-slate-400 rounded-2xl pl-10 pr-4 py-3 border border-slate-200 focus:border-[#2EC4B6] focus:bg-white focus:ring-4 focus:ring-[#2EC4B6]/10 outline-none text-sm transition-all font-semibold"
                      />
                    </div>

                    {error && (
                      <div className="flex items-center gap-2 text-red-600 text-xs font-bold">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        <span>{error}</span>
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-[#2EC4B6] hover:bg-[#25B4A6] disabled:bg-slate-300 text-slate-950 font-black text-xs uppercase tracking-wider px-5 py-3.5 rounded-xl shadow-lg shadow-[#2EC4B6]/20 transition-all cursor-pointer"
                    >
                      {isSubmitting ? 'Sending...' : 'Send Me The Free Guide'}
                    </button>
                  </form>

                  <button
                    onClick={handleClose}
                    className="text-xs text-slate-400 hover:text-slate-600 font-semibold bg-transparent border-none cursor-pointer transition-colors"
                  >
                    No thanks, maybe later
                  </button>
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
