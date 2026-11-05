'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function CafeExperiencePreview() {
  return (
    <section className="relative py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Left: Cinematic Photo of Dining Room */}
        <div className="lg:col-span-7 relative">
          <div className="relative aspect-[16/10] rounded-3xl overflow-hidden border border-gold-400/40 shadow-2xl shadow-black/90">
            <Image
              src="https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?q=80&w=1200&auto=format&fit=crop"
              alt="Maison Éclat Dining Room Experience"
              fill
              className="object-cover transition-transform duration-700 hover:scale-105"
              sizes="(max-width: 1024px) 100vw, 700px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-eclat-950/80 via-transparent to-transparent pointer-events-none" />
          </div>
        </div>

        {/* Right: Narrative & Discover Button */}
        <div className="lg:col-span-5 space-y-5 text-center lg:text-left">
          <div className="space-y-1.5">
            <span className="text-[11px] uppercase tracking-[0.28em] text-gold-400 font-medium block">
              The Maison Éclat
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-white tracking-wide">
              Experience
            </h2>
          </div>

          <p className="text-xs sm:text-sm text-champagne/85 leading-relaxed font-light max-w-md mx-auto lg:mx-0">
            A warm, indulgent space where fine desserts, artisan bakes and great conversations come together beneath glowing crystal chandeliers.
          </p>

          <div className="pt-2">
            <Link
              href="/cafe-experience"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-full btn-gold text-xs uppercase tracking-wider font-semibold"
            >
              <span>Discover the Café</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
