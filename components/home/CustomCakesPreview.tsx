'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Cake, Heart, Sparkles, Briefcase } from 'lucide-react';

const CAKE_CATEGORIES = [
  { name: 'Celebration Cakes', icon: <Sparkles className="w-4 h-4 text-gold-400" /> },
  { name: 'Wedding Cakes', icon: <Heart className="w-4 h-4 text-gold-400" /> },
  { name: 'Themed Cakes', icon: <Cake className="w-4 h-4 text-gold-400" /> },
  { name: 'Corporate Cakes', icon: <Briefcase className="w-4 h-4 text-gold-400" /> },
];

export default function CustomCakesPreview() {
  return (
    <section className="relative py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Left Column: Heading, Subtitle, Badges, Button */}
        <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
          <div className="space-y-2">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-white tracking-wide">
              Bespoke Creations
            </h2>
            <p className="text-xs sm:text-sm text-champagne/85 font-light leading-relaxed max-w-md mx-auto lg:mx-0">
              Celebration cakes, custom desserts and edible art for your special moments.
            </p>
          </div>

          {/* 4 Feature Badges */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 max-w-lg mx-auto lg:mx-0">
            {CAKE_CATEGORIES.map((cat, idx) => (
              <div
                key={idx}
                className="p-3 rounded-2xl bg-eclat-900/80 border border-gold-400/25 flex flex-col items-center justify-center text-center gap-1.5 shadow-md"
              >
                <div className="w-7 h-7 rounded-full bg-eclat-850 flex items-center justify-center">
                  {cat.icon}
                </div>
                <span className="text-[10px] sm:text-[11px] font-medium text-white/90 leading-tight">
                  {cat.name}
                </span>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="pt-2">
            <Link
              href="/custom-cakes"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-full btn-gold text-xs uppercase tracking-wider font-semibold"
            >
              <span>Create Your Cake</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Right Column: Floral Celebration Cake */}
        <div className="lg:col-span-6 relative">
          <div className="relative aspect-[16/11] sm:aspect-[16/10] rounded-3xl overflow-hidden border border-gold-400/40 shadow-2xl shadow-black/90">
            <Image
              src="https://images.unsplash.com/photo-1535141192574-5d4897c13136?q=80&w=1200&auto=format&fit=crop"
              alt="Maison Éclat Bespoke Celebration Cake"
              fill
              className="object-cover transition-transform duration-700 hover:scale-105"
              sizes="(max-width: 1024px) 100vw, 600px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-eclat-950/80 via-transparent to-transparent pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
}
