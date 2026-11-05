'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Sparkles, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { GALLERY_ITEMS, GalleryItem } from '@/data/gallery';

const CATEGORIES = ['All', 'Desserts', 'Cakes', 'Café', 'Events'] as const;

export default function GalleryPage() {
  const [activeTab, setActiveTab] = useState<(typeof CATEGORIES)[number]>('All');
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(null);

  const filteredItems =
    activeTab === 'All'
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === activeTab);

  const handlePrev = () => {
    if (activeLightboxIndex !== null) {
      setActiveLightboxIndex(
        (activeLightboxIndex - 1 + filteredItems.length) % filteredItems.length
      );
    }
  };

  const handleNext = () => {
    if (activeLightboxIndex !== null) {
      setActiveLightboxIndex((activeLightboxIndex + 1) % filteredItems.length);
    }
  };

  const currentLightboxItem: GalleryItem | null =
    activeLightboxIndex !== null ? filteredItems[activeLightboxIndex] : null;

  return (
    <div className="min-h-screen pt-28 sm:pt-36 pb-24 bg-ambient-vignette overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-3/4 h-96 bg-gold-500/10 blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="inline-flex items-center gap-1.5 text-[11px] uppercase tracking-[0.28em] text-gold-400 font-medium">
            <Sparkles className="w-3.5 h-3.5" /> Curated Moments
          </span>
          <h1 className="text-4xl sm:text-6xl font-serif text-white tracking-tight">
            Visual Gallery
          </h1>
          <p className="text-xs sm:text-sm text-champagne/80 font-light leading-relaxed">
            A glimpse into our world of desserts, celebrations, and intimate dining moments at Maison Éclat.
          </p>

          {/* Filter Pills */}
          <div className="flex items-center justify-center flex-wrap gap-2 pt-4">
            {CATEGORIES.map((tab) => (
              <button
                key={tab}
                onClick={() => {
                  setActiveTab(tab);
                  setActiveLightboxIndex(null);
                }}
                className={`px-5 py-2 rounded-full text-xs font-medium tracking-wide transition-all duration-300 ${
                  activeTab === tab
                    ? 'bg-gold-400 text-eclat-950 font-semibold shadow-[0_0_15px_rgba(223,166,42,0.4)]'
                    : 'bg-eclat-900 border border-gold-500/20 text-champagne/70 hover:text-white hover:border-gold-400/40'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => setActiveLightboxIndex(index)}
              className="group relative aspect-square rounded-2xl overflow-hidden glass-gold-card p-1.5 cursor-pointer hover:-translate-y-1.5 transition-all duration-400"
            >
              <div className="relative w-full h-full rounded-xl overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-eclat-950/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 flex flex-col justify-end">
                  <span className="text-[10px] uppercase tracking-wider text-gold-300 font-medium">
                    {item.category}
                  </span>
                  <h4 className="text-sm font-serif text-white truncate">{item.title}</h4>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {currentLightboxItem && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4">
          <button
            onClick={() => setActiveLightboxIndex(null)}
            className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-gold-500/20 transition-colors z-50"
            aria-label="Close lightbox"
          >
            <X className="w-5 h-5" />
          </button>

          <button
            onClick={handlePrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/60 border border-gold-400/40 text-gold-300 flex items-center justify-center hover:bg-gold-500/20 transition-all z-50"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/60 border border-gold-400/40 text-gold-300 flex items-center justify-center hover:bg-gold-500/20 transition-all z-50"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div className="relative max-w-4xl max-h-[85vh] w-full flex flex-col items-center">
            <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] max-h-[70vh] rounded-2xl overflow-hidden border border-gold-400/40 shadow-2xl">
              <Image
                src={currentLightboxItem.image}
                alt={currentLightboxItem.title}
                fill
                className="object-contain"
              />
            </div>
            <div className="text-center mt-4">
              <span className="text-[11px] uppercase tracking-wider text-gold-400 font-medium">
                {currentLightboxItem.category}
              </span>
              <h3 className="text-xl font-serif text-white">{currentLightboxItem.title}</h3>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

