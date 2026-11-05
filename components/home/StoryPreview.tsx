'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Sparkles, Heart } from 'lucide-react';
import { STORY_DATA } from '@/data/story';

export default function StoryPreview() {
  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        {/* Left Narrative */}
        <div className="lg:col-span-6 space-y-6">
          <div className="space-y-2">
            <span className="inline-flex items-center gap-1.5 text-[11px] uppercase tracking-[0.28em] text-gold-400 font-medium">
              <Sparkles className="w-3.5 h-3.5" /> Our Story
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-white">
              The Sweet Journey of Maison Éclat
            </h2>
          </div>

          <p className="text-sm sm:text-base text-champagne/85 leading-relaxed font-light">
            {STORY_DATA.heroSubtitle}
          </p>

          <p className="text-xs sm:text-sm text-champagne/70 leading-relaxed font-light">
            Founded by passionate culinary artists trained in Paris and Brussels, we envisioned a sanctuary where Kolkata could experience haute pâtisserie made without shortcuts — from 72-hour sourdough brioches to single-estate Ecuadorian chocolate tempered by hand.
          </p>

          {/* Key Stat Badges */}
          <div className="grid grid-cols-3 gap-4 py-3 border-y border-gold-500/15">
            <div>
              <p className="text-2xl sm:text-3xl font-serif text-gold-300">100%</p>
              <p className="text-[10px] sm:text-xs text-champagne/70 uppercase tracking-wider mt-0.5">Single Origin Cacao</p>
            </div>
            <div>
              <p className="text-2xl sm:text-3xl font-serif text-gold-300">27</p>
              <p className="text-[10px] sm:text-xs text-champagne/70 uppercase tracking-wider mt-0.5">Butter Layers</p>
            </div>
            <div>
              <p className="text-2xl sm:text-3xl font-serif text-gold-300">24k</p>
              <p className="text-[10px] sm:text-xs text-champagne/70 uppercase tracking-wider mt-0.5">Edible Gold Leaf</p>
            </div>
          </div>

          <div className="pt-2">
            <Link
              href="/our-story"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full btn-gold text-xs uppercase tracking-wider font-semibold"
            >
              <span>Read Our Story</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Right: Pastry Chef Image with frame */}
        <div className="lg:col-span-6 relative flex items-center justify-center">
          <div className="relative w-full max-w-[480px] aspect-[4/5] rounded-3xl overflow-hidden border border-gold-400/40 shadow-2xl shadow-black/80">
            <Image
              src="https://images.unsplash.com/photo-1579372786545-d24232daf58c?q=80&w=1000&auto=format&fit=crop"
              alt="Pastry Chef finishing dessert with gold and cherry"
              fill
              className="object-cover transition-transform duration-700 hover:scale-105"
              sizes="(max-width: 1024px) 100vw, 500px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-eclat-950/80 via-transparent to-transparent pointer-events-none" />

            {/* Bottom floating quote */}
            <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-eclat-950/90 border border-gold-400/30 backdrop-blur-md">
              <p className="text-xs italic text-champagne/90 font-serif">
                “Every dessert we create is a balance of sensory harmony, noble heritage ingredients, and culinary architecture.”
              </p>
              <p className="text-[10px] uppercase tracking-wider text-gold-300 font-medium mt-2">
                — Master Pâtissier, Maison Éclat
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
