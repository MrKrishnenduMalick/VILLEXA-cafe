'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Sparkles, Crown } from 'lucide-react';
import { CUSTOM_CAKES } from '@/data/cakes';

export default function CustomCakesPreview() {
  const featuredCakes = CUSTOM_CAKES.slice(0, 3);

  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
      <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
        <span className="inline-flex items-center gap-1.5 text-[11px] uppercase tracking-[0.28em] text-gold-400 font-medium">
          <Crown className="w-3.5 h-3.5" /> Haute Couture Pâtisserie
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-white">
          Bespoke Custom Cakes
        </h2>
        <p className="text-xs sm:text-sm text-champagne/80 font-light leading-relaxed">
          Monumental celebration centerpieces sculpted for weddings, anniversaries, and grand milestones.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
        {featuredCakes.map((cake) => (
          <div
            key={cake.id}
            className="group relative rounded-3xl glass-gold-card p-6 flex flex-col justify-between hover:-translate-y-2 transition-all duration-300"
          >
            <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden mb-5 border border-gold-400/30 shadow-xl">
              <Image
                src={cake.image}
                alt={cake.name}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 768px) 100vw, 380px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-eclat-950/80 via-transparent to-transparent pointer-events-none" />

              <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-eclat-950/80 border border-gold-400/40 text-[10px] text-gold-300 font-medium tracking-wider uppercase backdrop-blur-sm">
                From ₹{cake.startingPrice.toLocaleString()}
              </div>
            </div>

            <div className="space-y-2">
              <h3 className="text-xl font-serif text-white group-hover:text-gold-200 transition-colors">
                {cake.name}
              </h3>
              <p className="text-[11px] uppercase tracking-wider text-gold-400 font-medium">
                {cake.tagline}
              </p>
              <p className="text-xs text-champagne/75 line-clamp-2 leading-relaxed">
                {cake.description}
              </p>
            </div>

            <div className="pt-4 mt-2 border-t border-gold-500/15 flex items-center justify-between text-xs text-champagne/70">
              <span>{cake.servings}</span>
              <span className="text-gold-400">{cake.leadTime}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <Link
          href="/custom-cakes"
          className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full btn-gold text-xs uppercase tracking-wider font-semibold"
        >
          <span>Design Your Custom Cake</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  );
}
