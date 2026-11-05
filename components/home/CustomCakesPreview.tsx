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
    <section className="relative py-14 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-80 h-80 rounded-full bg-rose-500/10 blur-[130px] pointer-events-none" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
        {/* Left Column: Heading, Subtitle, Futuristic Glass Badges, Button */}
        <div className="lg:col-span-6 space-y-6 text-center lg:text-left z-10">
          <div className="space-y-2">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-white tracking-wide">
              Bespoke Creations
            </h2>
            <p className="text-xs sm:text-sm text-champagne/85 font-light leading-relaxed max-w-md mx-auto lg:mx-0">
              Celebration cakes, custom desserts, and edible art crafted for your most cherished milestones.
            </p>
          </div>

          {/* 4 Feature Badges in 3D Glass Pods */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-lg mx-auto lg:mx-0">
            {CAKE_CATEGORIES.map((cat, idx) => (
              <div
                key={idx}
                className="group p-3.5 rounded-2xl glass-futuristic flex flex-col items-center justify-center text-center gap-2 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-8 h-8 rounded-full bg-gold-500/20 border border-gold-400/35 flex items-center justify-center group-hover:scale-110 transition-transform">
                  {cat.icon}
                </div>
                <span className="text-[11px] font-medium text-white/90 leading-tight">
                  {cat.name}
                </span>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="pt-2">
            <Link
              href="/custom-cakes"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full btn-gold text-xs uppercase tracking-wider font-semibold shadow-[0_0_25px_rgba(223,166,42,0.4)] hover:shadow-[0_0_35px_rgba(223,166,42,0.6)] hover:scale-105 active:scale-95 transition-all"
            >
              <span>Create Your Cake</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Right Column: Floral Celebration Cake in 3D Glass Frame */}
        <div className="lg:col-span-6 relative group">
          {/* Neon Under-glow */}
          <div className="absolute inset-0 rounded-[36px] bg-gradient-to-r from-rose-500/25 via-gold-500/20 to-transparent blur-2xl opacity-60 group-hover:opacity-95 transition-opacity pointer-events-none" />

          <div className="relative aspect-[16/11] sm:aspect-[16/10] rounded-[36px] overflow-hidden glass-futuristic p-2 sm:p-3 shadow-2xl">
            <div className="relative w-full h-full rounded-[28px] overflow-hidden bg-eclat-950">
              <Image
                src="https://images.unsplash.com/photo-1535254973040-607b474cb50d?q=80&w=1200&auto=format&fit=crop"
                alt="Maison Éclat Bespoke Celebration Cake"
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 600px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
