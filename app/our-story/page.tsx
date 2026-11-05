'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Sparkles, HeartHandshake, Palette, ArrowRight, Award, Compass } from 'lucide-react';
import { STORY_DATA } from '@/data/story';

export default function OurStoryPage() {
  return (
    <div className="min-h-screen pt-28 sm:pt-36 pb-24 bg-ambient-vignette overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gold-500/10 blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        {/* Hero Section */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="inline-flex items-center gap-1.5 text-[11px] uppercase tracking-[0.28em] text-gold-400 font-medium">
            <Sparkles className="w-3.5 h-3.5" /> Maison Éclat Heritage
          </span>
          <h1 className="text-4xl sm:text-6xl font-serif text-white tracking-tight">
            The Sweet Journey of Maison Éclat
          </h1>
          <p className="text-sm sm:text-base text-champagne/85 font-light leading-relaxed">
            {STORY_DATA.heroSubtitle}
          </p>
        </div>

        {/* Cinematic Image Showcase */}
        <div className="relative aspect-[16/9] sm:aspect-[21/9] rounded-3xl overflow-hidden border border-gold-400/30 shadow-2xl">
          <Image
            src="https://images.unsplash.com/photo-1555507036-ab1f4038808a?q=80&w=1400&auto=format&fit=crop"
            alt="Maison Éclat Pastry Atelier"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-eclat-950 via-eclat-950/40 to-transparent" />
          <div className="absolute bottom-6 left-6 sm:bottom-10 sm:left-10 max-w-lg space-y-2">
            <p className="text-[11px] uppercase tracking-widest text-gold-300 font-medium">The Craft</p>
            <p className="text-lg sm:text-2xl font-serif text-white">
              “Precision in temperature, reverence for cacao, and unhurried artisanal time.”
            </p>
          </div>
        </div>

        {/* 3 Pillars of Philosophy */}
        <div className="space-y-10">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <span className="text-[11px] uppercase tracking-widest text-gold-400 font-medium">Our Core Philosophy</span>
            <h2 className="text-3xl sm:text-4xl font-serif text-white">Principles of Excellence</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {STORY_DATA.philosophy.map((item, idx) => (
              <div
                key={idx}
                className="rounded-3xl glass-gold-card p-8 space-y-4 hover:-translate-y-1.5 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-2xl bg-eclat-850 border border-gold-400/40 flex items-center justify-center text-gold-300">
                  {idx === 0 ? <HeartHandshake className="w-6 h-6" /> : idx === 1 ? <Sparkles className="w-6 h-6" /> : <Palette className="w-6 h-6" />}
                </div>
                <h3 className="text-xl font-serif text-white">{item.title}</h3>
                <p className="text-xs sm:text-sm text-champagne/75 leading-relaxed font-light">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Historical Timeline */}
        <div className="space-y-12 max-w-4xl mx-auto">
          <div className="text-center space-y-2">
            <span className="text-[11px] uppercase tracking-widest text-gold-400 font-medium">Milestones</span>
            <h2 className="text-3xl sm:text-4xl font-serif text-white">Our Timeline</h2>
          </div>

          <div className="relative border-l border-gold-400/30 ml-4 sm:ml-32 space-y-10">
            {STORY_DATA.timeline.map((item, idx) => (
              <div key={idx} className="relative pl-8 sm:pl-10">
                {/* Year tag for larger screens */}
                <span className="hidden sm:block absolute -left-32 top-0 font-serif text-gold-300 font-semibold text-lg text-right w-24">
                  {item.year}
                </span>

                {/* Timeline node */}
                <div className="absolute -left-2 top-1.5 w-4 h-4 rounded-full bg-gold-400 border-4 border-eclat-950 shadow-[0_0_10px_rgba(223,166,42,0.8)]" />

                <div className="space-y-1">
                  <span className="sm:hidden text-xs font-serif text-gold-300 font-bold uppercase tracking-wider block">
                    {item.year}
                  </span>
                  <h3 className="text-xl font-serif text-white">{item.title}</h3>
                  <p className="text-xs sm:text-sm text-champagne/75 leading-relaxed font-light">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Origins & Sustainable Sourcing */}
        <div className="rounded-3xl glass-gold-card p-8 sm:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <span className="text-[11px] uppercase tracking-[0.25em] text-gold-400 font-medium flex items-center gap-1.5">
                <Compass className="w-4 h-4" /> Global Terroir
              </span>
              <h2 className="text-3xl font-serif text-white">
                Ethical Sourcing from World Terroirs
              </h2>
              <p className="text-xs sm:text-sm text-champagne/80 leading-relaxed font-light">
                Our Nacional cacao is sourced directly from sustainable agroforestry farms in Los Ríos, Ecuador, preserving rare heritage tree varieties and ensuring dignified livable wages for farming families.
              </p>
              <div className="grid grid-cols-2 gap-3 pt-2 text-xs text-champagne/80">
                <div className="p-3 rounded-xl bg-eclat-900/60 border border-gold-500/15">
                  <p className="font-serif text-white">Los Ríos, Ecuador</p>
                  <p className="text-[11px] text-gold-400">72% & 85% Nacional Cacao</p>
                </div>
                <div className="p-3 rounded-xl bg-eclat-900/60 border border-gold-500/15">
                  <p className="font-serif text-white">Normandy, France</p>
                  <p className="text-[11px] text-gold-400">AOP Cultured Churned Butter</p>
                </div>
                <div className="p-3 rounded-xl bg-eclat-900/60 border border-gold-500/15">
                  <p className="font-serif text-white">Bronte, Sicily</p>
                  <p className="text-[11px] text-gold-400">DOP Emerald Pistachios</p>
                </div>
                <div className="p-3 rounded-xl bg-eclat-900/60 border border-gold-500/15">
                  <p className="font-serif text-white">Madagascar</p>
                  <p className="text-[11px] text-gold-400">Grade-A Bourbon Vanilla Beans</p>
                </div>
              </div>
            </div>

            <div className="relative aspect-square rounded-2xl overflow-hidden border border-gold-400/30">
              <Image
                src="https://images.unsplash.com/photo-1549007994-cb92caebd54b?q=80&w=800&auto=format&fit=crop"
                alt="Single Origin Cacao Beans"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center space-y-4">
          <h3 className="text-2xl sm:text-3xl font-serif text-white">Experience Maison Éclat in Person</h3>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/menu"
              className="px-8 py-3.5 rounded-full btn-gold text-xs uppercase tracking-wider font-semibold"
            >
              Explore the Menu
            </Link>
            <Link
              href="/contact"
              className="px-8 py-3.5 rounded-full btn-outline-gold text-xs uppercase tracking-wider font-medium"
            >
              Reserve a Table
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
