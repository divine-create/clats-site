import React, { useState, useRef, useEffect } from 'react';
import { Download, ChevronRight, ChevronLeft, Book, ArrowRight, X, ShoppingBag, ExternalLink } from 'lucide-react';
import guide1Cover from '../assets/images/guide-1-cover-image.png';
import guide2Cover from '../assets/images/guide-2-cover-image.png';

interface ResourcesPageProps {
  onNavigate: (path: string) => void;
  awardXP?: (pts: number, id: string) => void;
}

type ResourceCategory = 'All' | 'Parent Guide' | "Children's Storybooks" | 'Educators' | 'Children' | 'AI & Technology' | 'Digital Safety';

interface Resource {
  id: string;
  title: string;
  category: ResourceCategory;
  shortDesc: string;
  image: string;
  /** Free resources: path to the downloadable file. Leave empty for paid resources. */
  downloadUrl: string;
  featured: boolean;
  colorClass: string;
  /** 'free' (default) shows DOWNLOAD NOW; 'paid' shows PURCHASE NOW and opens the platform chooser. */
  type?: 'free' | 'paid';
  ageRange?: string;
  format?: string;
  pages?: number;
  /** Optional display price. Not set because no existing price data was provided. */
  price?: string;
  /** Paid resources: checkout links. Leave '' until the real URL is available. */
  checkout?: { selar: string; gumroad: string };
}

// Cover images for paid storybooks live in /public/assets/images/books/ (drop the real artwork in with these exact names).
const BOOK_COVER_1 = '/assets/images/books/kobe-chibi-little-christmas-gift.png';
const BOOK_COVER_2 = '/assets/images/books/kobe-chibi-helpful-little-robot.png';

const RESOURCES_DATA: Resource[] = [
  {
    id: 'res-1',
    title: "The Parent's Guide to Raising Future-Ready Kids in the Age of AI",
    category: 'Parent Guide',
    shortDesc: 'A practical guide for parents preparing children for a rapidly changing, technology-driven world.',
    image: guide1Cover,
    downloadUrl: '/assets/pdfs/future-ready-kids-guide.pdf',
    featured: true,
    colorClass: 'bg-turquoise/10 border-turquoise/20 text-turquoise'
  },
  {
    id: 'res-2',
    title: "The Parent's Guide to Better Screen Time Without the Constant Battle",
    category: 'Parent Guide',
    shortDesc: 'Practical guidance for creating healthier and more purposeful technology habits at home.',
    image: guide2Cover,
    downloadUrl: '/assets/pdfs/screen-time-guide.pdf',
    featured: true,
    colorClass: 'bg-purple/10 border-purple/20 text-purple'
  },
  {
    id: 'book-1',
    type: 'paid',
    title: "Kobe & Chibi's Little Christmas Gift",
    category: "Children's Storybooks",
    shortDesc: 'A heartwarming Christmas story for little learners, celebrating creativity, kindness and the joy of making something together. Join Kobe and Chibi on a festive adventure that reminds every child that the most special gifts are made with love.',
    image: BOOK_COVER_1,
    downloadUrl: '',
    ageRange: 'Ages 2–5',
    format: 'Digital Book',
    featured: false,
    colorClass: 'bg-yellow/10 border-yellow/20 text-yellow',
    checkout: { selar: 'https://selar.com/y5s347d3n2', gumroad: 'https://clatspublishing.gumroad.com/l/tngozt' }
  },
  {
    id: 'book-2',
    type: 'paid',
    title: 'Kobe & Chibi and the Helpful Little Robot',
    category: "Children's Storybooks",
    shortDesc: "Join Kobe and Chibi on an exciting adventure with a helpful little robot. Through the story, children explore the importance of clear instructions, problem-solving, experimentation and trying again when things don't go as planned.",
    image: BOOK_COVER_2,
    downloadUrl: '',
    ageRange: 'Ages 2–5',
    format: 'Digital PDF',
    pages: 26,
    featured: false,
    colorClass: 'bg-turquoise/10 border-turquoise/20 text-turquoise',
    checkout: { selar: 'https://selar.com/24vr7472i2', gumroad: 'https://clatspublishing.gumroad.com/l/ekzjk' }
  }
];

const CATEGORIES: ResourceCategory[] = ['All', 'Parent Guide', "Children's Storybooks", 'Educators', 'Children', 'AI & Technology', 'Digital Safety'];

export default function ResourcesPage({ onNavigate }: ResourcesPageProps) {
  const [activeCategory, setActiveCategory] = useState<ResourceCategory>('All');
  const scrollRef = useRef<HTMLDivElement>(null);
  const [purchaseResource, setPurchaseResource] = useState<Resource | null>(null);
  const closeBtnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!purchaseResource) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setPurchaseResource(null); };
    document.addEventListener('keydown', onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeBtnRef.current?.focus();
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [purchaseResource]);

  const openCheckout = (url: string) => {
    if (!url) return;
    window.open(url, '_blank', 'noopener,noreferrer');
    setPurchaseResource(null);
  };
  
  const scrollCarousel = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = window.innerWidth > 768 ? 650 : 320;
      scrollRef.current.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
    }
  };

  const featuredResources = RESOURCES_DATA.filter(r => r.featured);
  const filteredResources = activeCategory === 'All' 
    ? RESOURCES_DATA 
    : RESOURCES_DATA.filter(r => r.category === activeCategory);


  const ResourceCard = ({ resource, isFeatured = false }: { resource: Resource, isFeatured?: boolean }) => {
    const hasImage = resource.image && !resource.image.endsWith('.pdf');
    const isPaid = resource.type === 'paid';
    
    // Featured Layout (Wide Side-by-Side Card)
    if (isFeatured) {
      return (
        <div className="group bg-white rounded-[2.5rem] border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col md:flex-row overflow-hidden min-w-[85vw] md:min-w-[600px] lg:min-w-[700px] snap-center shrink-0">
          <div className={`w-full md:w-2/5 ${resource.colorClass} border-b md:border-b-0 md:border-r border-gray-100 p-8 flex items-center justify-center min-h-[280px]`}>
             {hasImage ? (
                <img src={resource.image} alt={resource.title} className="w-full h-full object-contain drop-shadow-2xl rounded-md group-hover:scale-105 transition-transform duration-500 max-h-[300px]" loading="lazy" />
             ) : (
                <Book className="w-16 h-16 opacity-80" />
             )}
          </div>
          <div className="w-full md:w-3/5 p-8 md:p-12 flex flex-col justify-center">
            <span className="text-[11px] font-black uppercase tracking-widest text-gray-400 mb-4">{resource.category}</span>
            <h3 className="text-2xl md:text-3xl font-display font-bold text-dark mb-4 group-hover:text-turquoise transition-colors leading-tight">{resource.title}</h3>
            <p className="text-dark-light text-base md:text-lg leading-relaxed mb-10 line-clamp-3">{resource.shortDesc}</p>
            <a href={resource.downloadUrl} download target="_blank" rel="noreferrer" className="mt-auto w-fit bg-soft hover:bg-turquoise hover:text-white text-dark font-bold text-[13px] uppercase tracking-wider px-8 py-4 rounded-xl transition-all cursor-pointer flex items-center gap-2 border-none shadow-sm hover:shadow-md">
              <Download className="w-4 h-4" /> Download Guide
            </a>
          </div>
        </div>
      );
    }

    // Standard Layout (Stacked Card)
    return (
      <div className="group bg-white rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden h-full">
        <div className={`${isPaid ? 'aspect-video' : 'h-56 p-8'} w-full ${resource.colorClass} border-b border-gray-100 flex items-center justify-center relative overflow-hidden`}>
          
          {hasImage ? (
            <img src={resource.image} alt={isPaid ? `Cover of ${resource.title}` : resource.title} onError={(e) => { e.currentTarget.style.visibility = 'hidden'; }} className={`relative w-full h-full ${isPaid ? 'object-cover' : 'object-contain drop-shadow-xl rounded-sm'} group-hover:scale-105 transition-transform duration-500`} loading="lazy" />
          ) : (
            <>
              <div className="absolute inset-0 bg-white/40 backdrop-blur-[2px]"></div>
              <Book className="w-12 h-12 mb-4 relative z-10 opacity-80" />
            </>
          )}
        </div>
        <div className="p-6 md:p-8 flex flex-col flex-1">
          <span className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-3">{resource.category}</span>
          <h3 className="text-xl font-display font-bold text-dark mb-3 line-clamp-2 group-hover:text-turquoise transition-colors leading-tight">{resource.title}</h3>
          <p className="text-dark-light text-sm leading-relaxed mb-6 flex-1 line-clamp-5">{resource.shortDesc}</p>
          {isPaid && (
            <div className="flex flex-wrap gap-2 mb-6">
              {[resource.ageRange, resource.format, resource.pages ? `${resource.pages} pages` : null, resource.price].filter(Boolean).map(tag => (
                <span key={tag as string} className="text-[11px] font-bold text-dark-light bg-soft border border-gray-100 rounded-full px-3 py-1">{tag}</span>
              ))}
            </div>
          )}
          {isPaid ? (
            <button type="button" onClick={() => setPurchaseResource(resource)} className="mt-auto w-full bg-turquoise hover:bg-turquoise/90 active:scale-[0.98] text-white font-bold text-[13px] uppercase tracking-wider py-4 rounded-xl transition-all cursor-pointer flex items-center justify-center gap-2 border-none">
              <ShoppingBag className="w-4 h-4" /> Purchase Now
            </button>
          ) : (
            <a href={resource.downloadUrl} download target="_blank" rel="noreferrer" className="mt-auto w-full bg-soft hover:bg-turquoise hover:text-white text-dark font-bold text-[13px] uppercase tracking-wider py-4 rounded-xl transition-all cursor-pointer flex items-center justify-center gap-2 border-none">
              <Download className="w-4 h-4" /> Download Now
            </a>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="bg-white text-dark font-sans animate-fadeIn min-h-screen">
      
      {/* HERO SECTION */}
      <section className="pt-24 pb-20 md:pt-32 md:pb-24 px-6 text-center bg-soft border-b border-gray-100 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-turquoise/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3"></div>
        
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="inline-flex items-center justify-center text-xs font-bold text-turquoise tracking-widest uppercase mb-6 px-4 py-2 bg-turquoise/10 rounded-full">
            CLATS Resource Library
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-dark tracking-tight mb-6">
            Resources for Raising <br className="hidden md:block"/> Future-Ready Minds
          </h1>
          <p className="text-lg md:text-xl text-dark-light font-medium leading-relaxed max-w-2xl mx-auto">
            Practical guides, learning resources and tools to help parents, educators and children navigate technology, AI and the future of learning.
          </p>
        </div>
      </section>

      {/* FEATURED CAROUSEL */}
      <section className="py-24 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl font-display font-bold text-dark mb-4">Featured Resources</h2>
            <p className="text-dark-light text-lg max-w-2xl">
              Explore our latest free resources designed to help you and your child learn, grow and navigate a changing world.
            </p>
          </div>
          
          <div className="hidden md:flex items-center gap-3">
            <button 
              onClick={() => scrollCarousel('left')}
              className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-dark-light hover:text-dark hover:border-dark hover:bg-gray-50 transition-all cursor-pointer bg-white"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button 
              onClick={() => scrollCarousel('right')}
              className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-dark-light hover:text-dark hover:border-dark hover:bg-gray-50 transition-all cursor-pointer bg-white"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
        
        <div className="pl-6 md:pl-0">
          <div className="max-w-7xl mx-auto">
            <div ref={scrollRef} className="flex gap-6 overflow-x-auto pb-12 pt-4 snap-x snap-mandatory hide-scrollbar pr-6" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
              {featuredResources.map(resource => (
                <ResourceCard key={resource.id} resource={resource} isFeatured={true} />
              ))}
              
              {/* Invisible spacer to ensure last card can be scrolled fully into view */}
              <div className="min-w-[24px] md:min-w-[48px] shrink-0"></div>
            </div>
          </div>
        </div>
      </section>

      {/* ALL RESOURCES */}
      <section className="py-24 bg-soft">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16">
            <h2 className="text-3xl font-display font-bold text-dark mb-4">Explore All Resources</h2>
            <p className="text-dark-light text-lg mb-10 max-w-2xl">
              Guides and storybooks created to support better learning, digital parenting and future-ready development.
            </p>

            {/* CATEGORY FILTER */}
            <div className="flex flex-wrap items-center gap-3">
              {CATEGORIES.map(category => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all cursor-pointer border ${
                    activeCategory === category 
                      ? 'bg-dark text-white border-dark shadow-md' 
                      : 'bg-white text-dark-light border-gray-200 hover:border-turquoise hover:text-turquoise'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredResources.length > 0 ? (
              filteredResources.map(resource => (
                <ResourceCard key={resource.id} resource={resource} />
              ))
            ) : (
              <div className="col-span-full py-20 text-center bg-white rounded-3xl border border-gray-100">
                <p className="text-dark-light text-lg font-medium">No resources found in this category yet. Check back soon!</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="py-24 bg-white text-center px-6">
        <div className="max-w-3xl mx-auto space-y-8">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-dark tracking-tight">
            Keep learning. Keep preparing.
          </h2>
          <p className="text-lg text-dark-light font-medium leading-relaxed max-w-2xl mx-auto">
            We're building a growing library of practical resources to help children learn, create and grow in a technology-driven world.
          </p>
          <div className="pt-4">
            <button 
              onClick={() => onNavigate('/')}
              className="bg-turquoise hover:bg-turquoise/90 text-white font-bold px-10 py-4 rounded-xl transition-colors border-none cursor-pointer text-[16px] flex items-center justify-center gap-2 mx-auto"
            >
              Explore CLATS
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>


      {/* PURCHASE MODAL */}
      {purchaseResource && (
        <div className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center p-0 sm:p-6" role="dialog" aria-modal="true" aria-labelledby="purchase-title">
          <div className="absolute inset-0 bg-dark/50 backdrop-blur-sm" onClick={() => setPurchaseResource(null)}></div>
          <div className="relative bg-white w-full sm:max-w-md rounded-t-[2rem] sm:rounded-[2rem] shadow-2xl p-6 sm:p-8 max-h-[92vh] overflow-y-auto animate-fadeIn">
            <button ref={closeBtnRef} type="button" onClick={() => setPurchaseResource(null)} aria-label="Close" className="absolute top-4 right-4 w-10 h-10 rounded-full bg-soft hover:bg-gray-200 flex items-center justify-center text-dark cursor-pointer border-none transition-colors">
              <X className="w-5 h-5" />
            </button>
            <p className="text-[11px] font-black uppercase tracking-widest text-turquoise mb-2 pr-10">{purchaseResource.title}</p>
            <h2 id="purchase-title" className="text-2xl font-display font-bold text-dark mb-2 pr-10">Choose Your Purchase Platform</h2>
            <p className="text-dark-light text-sm leading-relaxed mb-6">Select your preferred platform to purchase and receive your digital book.</p>

            <div className="space-y-4">
              {([
                { key: 'selar', label: 'Purchase via Selar', note: 'Recommended for customers in Nigeria and buyers who prefer local payment options.', primary: true },
                { key: 'gumroad', label: 'Purchase via Gumroad', note: 'Prefer to pay in USD? You can purchase through Gumroad.', primary: false },
              ] as const).map(opt => {
                const url = purchaseResource.checkout?.[opt.key] || '';
                return (
                  <div key={opt.key} className={`rounded-2xl border p-4 ${opt.primary ? 'border-turquoise/30 bg-turquoise/5' : 'border-purple/20 bg-purple/5'}`}>
                    <button type="button" disabled={!url} onClick={() => openCheckout(url)} className={`w-full py-3.5 rounded-xl font-bold text-[14px] flex items-center justify-center gap-2 border-none transition-all ${url ? `${opt.primary ? 'bg-turquoise hover:bg-turquoise/90' : 'bg-purple hover:bg-purple/90'} text-white cursor-pointer active:scale-[0.98]` : 'bg-gray-200 text-gray-400 cursor-not-allowed'}`}>
                      {opt.label} <ExternalLink className="w-4 h-4" />
                    </button>
                    <p className="text-xs text-dark-light leading-relaxed mt-3">{url ? opt.note : 'Checkout link coming soon.'}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
