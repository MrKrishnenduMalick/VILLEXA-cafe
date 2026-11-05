'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);

  const heroSlides = [
    {
      title: 'Maison Éclat',
      subtitle: 'Where Dessert Becomes an Experience',
      description: 'Handcrafted desserts, fine chocolates and artisan bakes, made with the world’s finest ingredients.',
      dessertName: 'The Cherry Signature Dome',
      price: '₹280',
      image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=1200&auto=format&fit=crop',
    },
    {
      title: 'Artisan Haute Pâtisserie',
      subtitle: 'Crafted with Pure Passion',
      description: 'Single-origin Ecuadorian cacao, Normandy AOP butter, and Bronte pistachios harmonious in every bite.',
      dessertName: 'Mixed Berry Sablé Tart',
      price: '₹260',
      image: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?q=80&w=1200&auto=format&fit=crop',
    },
  ];

  const current = heroSlides[activeSlide];

  return (
    <section className="relative min-h-[92vh] sm:min-h-screen pt-28 sm:pt-36 pb-16 flex items-center justify-center overflow-hidden bg-ambient-vignette">
      {/* Decorative Floral Branch Accent Top-Left */}
      <div className="absolute top-0 left-0 w-64 h-64 sm:w-96 sm:h-96 pointer-events-none opacity-40 blur-[1px]">
        <svg viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <path d="M0 20C40 60 120 80 180 50C220 30 260 90 280 130" stroke="url(#vineGrad)" strokeWidth="1.5" strokeDasharray="3 3"/>
          <circle cx="90" cy="55" r="16" fill="rgba(148, 43, 95, 0.4)" />
          <circle cx="160" cy="60" r="22" fill="rgba(223, 166, 42, 0.3)" />
          <circle cx="210" cy="40" r="14" fill="rgba(148, 43, 95, 0.5)" />
          <circle cx="250" cy="110" r="18" fill="rgba(223, 166, 42, 0.35)" />
          <defs>
            <linearGradient id="vineGrad" x1="0" y1="0" x2="300" y2="300" gradientUnits="userSpaceOnUse">
              <stop stopColor="#dfa62a" />
              <stop offset="1" stopColor="#942b5f" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Bokeh lights background elements */}
      <div className="absolute top-1/4 right-1/4 w-80 h-80 rounded-full bg-gold-500/10 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/3 left-1/4 w-96 h-96 rounded-full bg-eclat-600/15 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Text Column (5 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 space-y-6 text-center lg:text-left"
          >
            {/* Small Top Tagline */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-eclat-850/80 border border-gold-400/30 text-gold-300 text-[11px] sm:text-xs uppercase tracking-[0.25em] font-medium backdrop-blur-sm shadow-md">
              <Sparkles className="w-3.5 h-3.5 text-gold-400" />
              <span>Artisan Dessert Café</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-6xl xl:text-7xl font-serif text-white tracking-tight">
                {current.title}
              </h1>
              <p className="text-xl sm:text-2xl xl:text-3xl font-serif italic text-gold-200">
                {current.subtitle}
              </p>
            </div>

            {/* Description */}
            <p className="text-sm sm:text-base text-champagne/85 max-w-xl mx-auto lg:mx-0 leading-relaxed font-light">
              {current.description}
            </p>

            {/* CTA Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Link
                href="/menu"
                className="w-full sm:w-auto px-8 py-3.5 rounded-full btn-gold text-xs sm:text-sm font-semibold tracking-wider uppercase inline-flex items-center justify-center gap-2"
              >
                <span>Explore the Menu</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/our-story"
                className="w-full sm:w-auto px-8 py-3.5 rounded-full btn-outline-gold text-xs sm:text-sm font-medium tracking-wider uppercase inline-flex items-center justify-center"
              >
                Our Story
              </Link>
            </div>

            {/* Slide Dots as seen in Reference Image 1 */}
            <div className="pt-4 flex items-center justify-center lg:justify-start gap-2.5">
              {heroSlides.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveSlide(idx)}
                  aria-label={`Slide ${idx + 1}`}
                  className={`transition-all duration-300 rounded-full ${
                    idx === activeSlide
                      ? 'w-7 h-2 bg-gradient-to-r from-gold-300 to-gold-500 shadow-[0_0_10px_rgba(223,166,42,0.6)]'
                      : 'w-2 h-2 bg-gold-400/40 hover:bg-gold-400/70'
                  }`}
                />
              ))}
            </div>
          </motion.div>

          {/* Right Hero Image Column (6 cols) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9 }}
            className="lg:col-span-6 relative flex items-center justify-center"
          >
            {/* Ambient Gold Radial Plate Halo */}
            <div className="absolute w-[320px] sm:w-[460px] lg:w-[540px] aspect-square rounded-full bg-gradient-to-tr from-gold-500/25 via-gold-400/15 to-transparent blur-2xl pointer-events-none" />

            {/* Decorative Gold Rim & Dessert Display */}
            <div className="relative w-full max-w-[460px] sm:max-w-[520px] aspect-square p-4 sm:p-6 flex items-center justify-center">
              {/* Outer decorative ring */}
              <div className="absolute inset-0 rounded-full border border-gold-400/30 animate-pulse-slow pointer-events-none" />
              <div className="absolute inset-3 rounded-full border border-gold-400/15 pointer-events-none" />

              {/* Main Dessert Photo */}
              <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-gold-400/60 shadow-[0_20px_60px_rgba(0,0,0,0.9)]">
                <Image
                  src={current.image}
                  alt={current.dessertName}
                  fill
                  priority
                  className="object-cover transition-transform duration-1000 hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 550px"
                />
                {/* Vignette lighting overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-eclat-950/80 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Floating Floating Price Tag Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 px-4 py-2.5 rounded-2xl bg-eclat-900/90 border border-gold-400/50 backdrop-blur-md shadow-2xl flex items-center gap-3 z-20"
              >
                <div className="w-2.5 h-2.5 rounded-full bg-gold-400 animate-ping" />
                <div>
                  <p className="text-[10px] uppercase tracking-wider text-gold-300 font-medium">Chef's Selection</p>
                  <p className="text-sm font-serif text-white">{current.dessertName} • {current.price}</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

