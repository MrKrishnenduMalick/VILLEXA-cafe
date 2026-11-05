'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Sparkles, MapPin, Clock } from 'lucide-react';

export default function CafeExperiencePreview() {
  return (
    <section className="relative py-14 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-80 h-80 rounded-full bg-gold-500/10 blur-[120px] pointer-events-none" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
        {/* Left: 3D Layered Glass Frame with Interior Photo & Floating Pods */}
        <div className="lg:col-span-7 relative group">
          {/* Neon Under-glow */}
          <div className="absolute inset-0 rounded-[36px] bg-gradient-to-r from-gold-500/20 to-rose-500/20 blur-2xl opacity-60 group-hover:opacity-90 transition-opacity pointer-events-none" />

          {/* Main Glass Photo Frame */}
          <div className="relative aspect-[16/10] rounded-[36px] overflow-hidden glass-futuristic p-2 sm:p-3 shadow-2xl">
            <div className="relative w-full h-full rounded-[28px] overflow-hidden bg-eclat-950">
              <Image
                src="https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?q=80&w=1200&auto=format&fit=crop"
                alt="Maison Éclat Dining Room Experience"
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 700px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>

          {/* Floating 3D Glass Badge */}
          <div className="absolute -bottom-4 sm:-bottom-5 left-6 sm:left-10 px-4 py-2.5 rounded-2xl bg-black/75 border border-gold-400/50 backdrop-blur-2xl shadow-2xl flex items-center gap-3 z-20">
            <div className="w-8 h-8 rounded-full bg-gold-500/20 flex items-center justify-center text-gold-300">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-wider text-gold-300 font-medium">Boutique Pâtisserie</p>
              <p className="text-xs sm:text-sm font-serif text-white font-medium">New Town, Biswa Bangla</p>
            </div>
          </div>
        </div>

        {/* Right: Narrative & Discover Button */}
        <div className="lg:col-span-5 space-y-5 text-center lg:text-left z-10">
          <div className="space-y-1.5">
            <span className="text-[11px] uppercase tracking-[0.3em] text-gold-400 font-medium block">
              The Maison Éclat
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-white tracking-wide">
              Experience
            </h2>
          </div>

          <p className="text-xs sm:text-sm text-champagne/85 leading-relaxed font-light max-w-md mx-auto lg:mx-0">
            A warm, indulgent sanctuary where fine desserts, single-origin chocolates, and great conversations come together beneath glowing crystal chandeliers.
          </p>

          {/* Key Feature Highlights */}
          <div className="grid grid-cols-2 gap-3 pt-1 max-w-md mx-auto lg:mx-0">
            <div className="p-3 rounded-2xl bg-black/40 border border-gold-400/20 backdrop-blur-md flex items-center gap-2.5">
              <MapPin className="w-4 h-4 text-gold-400 shrink-0" />
              <span className="text-xs text-champagne/80 font-medium">Fine Dine Seating</span>
            </div>
            <div className="p-3 rounded-2xl bg-black/40 border border-gold-400/20 backdrop-blur-md flex items-center gap-2.5">
              <Clock className="w-4 h-4 text-gold-400 shrink-0" />
              <span className="text-xs text-champagne/80 font-medium">Tue – Sun, 10 AM – 10 PM</span>
            </div>
          </div>

          <div className="pt-3">
            <Link
              href="/cafe-experience"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full btn-gold text-xs uppercase tracking-wider font-semibold shadow-[0_0_25px_rgba(223,166,42,0.4)] hover:shadow-[0_0_35px_rgba(223,166,42,0.6)] hover:scale-105 active:scale-95 transition-all"
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
