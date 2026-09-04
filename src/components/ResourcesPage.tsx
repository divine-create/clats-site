import React, { useState, useRef } from 'react';
import { Download, ChevronRight, ChevronLeft, Book, Shield, Bot, Layout, ArrowRight } from 'lucide-react';
import guide1Cover from '../assets/images/guide-1-cover-image.png';
import guide2Cover from '../assets/images/guide-2-cover-image.png';

interface ResourcesPageProps {
  onNavigate: (path: string) => void;
  awardXP?: (pts: number, id: string) => void;
}

type ResourceCategory = 'All' | 'Parent Guide' | 'Educators' | 'Children' | 'AI & Technology' | 'Digital Safety';

interface Resource {
  id: string;
  title: string;
  category: ResourceCategory;
  shortDesc: string;
  image: string;
  downloadUrl: string;
  featured: boolean;
  colorClass: string;
}

const RESOURCES_DATA: Resource[] = [
  {
    id: 'res-1',
    title: "The Parent's Guide to Raising Future-Ready Kids in the Age of AI",
    category: 'Parent Guide',
    shortDesc: 'A practical guide for parents preparing children for a rapidly changing, technology-driven world.',
    image: guide1Cover,
    downloadUrl: '/assets/pdfs/Future-Ready Kids Guide.pdf',
    featured: true,
    colorClass: 'bg-turquoise/10 border-turquoise/20 text-turquoise'
  },
  {
    id: 'res-2',
    title: "The Parent's Guide to Better Screen Time Without the Constant Battle",
    category: 'Parent Guide',
    shortDesc: 'Practical guidance for creating healthier and more purposeful technology habits at home.',
    image: guide2Cover,
    downloadUrl: "/assets/pdfs/The Parent's Guide to Better Screen Time Without the Constant Battle..pdf",
    featured: true,
    colorClass: 'bg-purple/10 border-purple/20 text-purple'
  }
];

const CATEGORIES: ResourceCategory[] = ['All', 'Parent Guide', 'Educators', 'Children', 'AI & Technology', 'Digital Safety'];

export default function ResourcesPage({ onNavigate }: ResourcesPageProps) {
  const [activeCategory, setActiveCategory] = useState<ResourceCategory>('All');
  const scrollRef = useRef<HTMLDivElement>(null);
  
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
        <div className={`h-56 w-full ${resource.colorClass} border-b border-gray-100 p-8 flex items-center justify-center relative overflow-hidden`}>
          {hasImage ? (
            <img src={resource.image} alt={resource.title} className="w-full h-full object-contain drop-shadow-xl rounded-sm group-hover:scale-105 transition-transform duration-500" loading="lazy" />
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
          <p className="text-dark-light text-sm leading-relaxed mb-8 flex-1 line-clamp-3">{resource.shortDesc}</p>
          <a href={resource.downloadUrl} download target="_blank" rel="noreferrer" className="mt-auto w-full bg-soft hover:bg-turquoise hover:text-white text-dark font-bold text-[13px] uppercase tracking-wider py-4 rounded-xl transition-all cursor-pointer flex items-center justify-center gap-2 border-none">
            <Download className="w-4 h-4" /> Download Now
          </a>
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
              Free resources created to support better learning, digital parenting and future-ready development.
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

    </div>
  );
}
