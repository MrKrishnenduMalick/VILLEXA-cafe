'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Sparkles, ArrowRight } from 'lucide-react';
import { GALLERY_ITEMS } from '@/data/gallery';

const CATEGORIES = ['All', 'Desserts', 'Cakes', 'Café', 'Events'] as const;

export default function GalleryPreview() {
  const [activeTab, setActiveTab] = useState<(typeof CATEGORIES)[number]>('All');

  const filteredItems =
    activeTab === 'All'
      ? GALLERY_ITEMS.slice(0, 8)
      : GALLERY_ITEMS.filter((item) => item.category === activeTab).slice(0, 8);

  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-10 space-y-3">
        <span className="inline-flex items-center gap-1.5 text-[11px] uppercase tracking-[0.28em] text-gold-400 font-medium">
          <Sparkles className="w-3.5 h-3.5" /> Visual Odyssey
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-white">
          Gallery
        </h2>
        <p className="text-xs sm:text-sm text-champagne/80 font-light">
          A glimpse into our world of desserts, creations and café moments.
        </p>

        {/* Filter Pills */}
        <div className="flex items-center justify-center flex-wrap gap-2 pt-4">
          {CATEGORIES.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-1.5 rounded-full text-xs font-medium tracking-wide transition-all duration-300 ${
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

      {/* Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-5">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            className="group relative aspect-square rounded-2xl overflow-hidden border border-gold-500/20 shadow-lg cursor-pointer"
          >
            <Image
              src={item.image}
              alt={item.title}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-700"
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
            />
            {/* Hover overlay with title */}
            <div className="absolute inset-0 bg-gradient-to-t from-eclat-950/90 via-eclat-950/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 flex flex-col justify-end">
              <span className="text-[10px] uppercase tracking-wider text-gold-300 font-medium">
                {item.category}
              </span>
              <p className="text-xs sm:text-sm font-serif text-white truncate">
                {item.title}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* View full gallery */}
      <div className="text-center mt-10">
        <Link
          href="/gallery"
          className="inline-flex items-center gap-2 px-8 py-3 rounded-full btn-outline-gold text-xs uppercase tracking-wider font-medium"
        >
          <span>View Complete Gallery</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  );
}

