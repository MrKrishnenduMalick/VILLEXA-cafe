'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Sparkles, Armchair, Croissant, Coffee } from 'lucide-react';
import { CAFE_HIGHLIGHTS } from '@/data/cafe';

const iconMap: Record<string, React.ReactNode> = {
  Armchair: <Armchair className="w-5 h-5 text-gold-400" />,
  Sparkles: <Sparkles className="w-5 h-5 text-gold-400" />,
  Croissant: <Croissant className="w-5 h-5 text-gold-400" />,
  Coffee: <Coffee className="w-5 h-5 text-gold-400" />,
};

export default function CafeExperiencePreview() {
  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 right-10 w-96 h-96 rounded-full bg-gold-500/10 blur-[130px] pointer-events-none" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
        {/* Left: Cinematic Photo of Grand Salon */}
        <div className="lg:col-span-7 relative">
          <div className="relative aspect-[16/10] sm:aspect-[16/9] rounded-3xl overflow-hidden border border-gold-400/40 shadow-2xl shadow-black/90">
            <Image
              src="https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?q=80&w=1200&auto=format&fit=crop"
              alt="Maison Éclat Grand Salon Café Experience"
              fill
              className="object-cover transition-transform duration-700 hover:scale-105"
              sizes="(max-width: 1024px) 100vw, 700px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-eclat-950/80 via-transparent to-transparent pointer-events-none" />

            {/* Inset Badge */}
            <div className="absolute bottom-5 left-5 px-4 py-2 rounded-xl bg-eclat-950/90 border border-gold-400/30 backdrop-blur-md">
              <p className="text-[10px] uppercase tracking-widest text-gold-300 font-medium">The Grand Salon</p>
              <p className="text-xs text-white">Action Area II, New Town, Kolkata</p>
            </div>
          </div>
        </div>

        {/* Right: Narrative & Highlights */}
        <div className="lg:col-span-5 space-y-6">
          <div className="space-y-2">
            <span className="inline-flex items-center gap-1.5 text-[11px] uppercase tracking-[0.28em] text-gold-400 font-medium">
              <Sparkles className="w-3.5 h-3.5" /> The Café Experience
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif text-white">
              Dine, Relax, Indulge
            </h2>
            <p className="text-xs sm:text-sm text-champagne/85 leading-relaxed font-light">
              Step into our warm, indulgent space where fine desserts, fresh artisan bakes and great conversations come together beneath glowing crystal chandeliers.
            </p>
          </div>

          {/* 4 Feature Badges Grid */}
          <div className="grid grid-cols-2 gap-3 pt-2">
            {CAFE_HIGHLIGHTS.map((item) => (
              <div
                key={item.id}
                className="p-3.5 rounded-2xl bg-eclat-900/70 border border-gold-500/20 hover:border-gold-400/40 transition-colors"
              >
                <div className="w-8 h-8 rounded-lg bg-eclat-800 border border-gold-400/30 flex items-center justify-center mb-2">
                  {iconMap[item.iconName] || <Sparkles className="w-4 h-4 text-gold-400" />}
                </div>
                <h4 className="text-xs sm:text-sm font-serif text-white">{item.title}</h4>
                <p className="text-[10px] text-champagne/60 mt-0.5">{item.subtitle}</p>
              </div>
            ))}
          </div>

          {/* CTA Link */}
          <div className="pt-2">
            <Link
              href="/cafe-experience"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-full btn-gold text-xs uppercase tracking-wider font-semibold"
            >
              <span>Explore the Café</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
