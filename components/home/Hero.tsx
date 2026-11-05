'use client';

import React, { useState, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Sparkles } from 'lucide-react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';

export default function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  // Mouse parallax motion values for authentic 3D depth
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 120 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  // Transform layers at different depths for real parallax 3D separation
  const rotateX = useTransform(smoothY, [-0.5, 0.5], [8, -8]);
  const rotateY = useTransform(smoothX, [-0.5, 0.5], [-10, 10]);
  const dessertTranslateX = useTransform(smoothX, [-0.5, 0.5], [-12, 12]);
  const dessertTranslateY = useTransform(smoothY, [-0.5, 0.5], [-10, 10]);
  const glowTranslateX = useTransform(smoothX, [-0.5, 0.5], [15, -15]);
  const badgeTranslateX = useTransform(smoothX, [-0.5, 0.5], [-18, 18]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

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
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-[82vh] lg:min-h-[88vh] pt-20 sm:pt-24 pb-8 lg:pb-12 flex items-center justify-center overflow-hidden bg-ambient-vignette"
    >
      {/* Decorative Floral Branch Accent Top-Left */}
      <div className="absolute top-0 left-0 w-56 h-56 sm:w-80 sm:h-80 pointer-events-none opacity-40 blur-[0.5px]">
        <svg viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <path d="M0 20C40 60 120 80 180 50C220 30 260 90 280 130" stroke="url(#vineGradHero)" strokeWidth="1.5" strokeDasharray="3 3"/>
          <circle cx="90" cy="55" r="16" fill="rgba(148, 43, 95, 0.4)" />
          <circle cx="160" cy="60" r="22" fill="rgba(223, 166, 42, 0.3)" />
          <circle cx="210" cy="40" r="14" fill="rgba(148, 43, 95, 0.5)" />
          <circle cx="250" cy="110" r="18" fill="rgba(223, 166, 42, 0.35)" />
          <defs>
            <linearGradient id="vineGradHero" x1="0" y1="0" x2="300" y2="300" gradientUnits="userSpaceOnUse">
              <stop stopColor="#dfa62a" />
              <stop offset="1" stopColor="#942b5f" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Bokeh lights background elements */}
      <div className="absolute top-1/4 right-1/4 w-72 h-72 rounded-full bg-gold-500/10 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/3 w-80 h-80 rounded-full bg-eclat-600/15 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* Left Text Column (6 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 space-y-4 sm:space-y-5 text-center lg:text-left"
          >
            {/* Small Top Tagline */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-eclat-850/80 border border-gold-400/30 text-gold-300 text-[10px] sm:text-xs uppercase tracking-[0.25em] font-medium backdrop-blur-sm shadow-md">
              <Sparkles className="w-3.5 h-3.5 text-gold-400" />
              <span>Artisan Dessert Café</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-1 sm:space-y-2">
              <h1 className="text-4xl sm:text-5xl xl:text-6xl font-serif text-white tracking-tight">
                {current.title}
              </h1>
              <p className="text-xl sm:text-2xl xl:text-3xl font-serif italic text-gold-200">
                {current.subtitle}
              </p>
            </div>

            {/* Description */}
            <p className="text-xs sm:text-sm text-champagne/85 max-w-lg mx-auto lg:mx-0 leading-relaxed font-light">
              {current.description}
            </p>

            {/* CTA Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5">
              <Link
                href="/menu"
                className="w-full sm:w-auto px-7 py-3 rounded-full btn-gold text-xs sm:text-sm font-semibold tracking-wider uppercase inline-flex items-center justify-center gap-2 shadow-lg shadow-gold-500/20"
              >
                <span>Explore the Menu</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/our-story"
                className="w-full sm:w-auto px-7 py-3 rounded-full btn-outline-gold text-xs sm:text-sm font-medium tracking-wider uppercase inline-flex items-center justify-center"
              >
                Our Story
              </Link>
            </div>

            {/* Slide Dots as seen in Reference Image 1 */}
            <div className="pt-2 flex items-center justify-center lg:justify-start gap-2">
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

          {/* Right Hero Cinematic 3D Visual Column (6 cols) */}
          <div className="lg:col-span-6 relative flex items-center justify-center py-2 sm:py-4">
            <motion.div
              style={{
                perspective: 1000,
                rotateX,
                rotateY,
                transformStyle: 'preserve-3d',
              }}
              className="relative w-full max-w-[480px] sm:max-w-[540px] aspect-[16/11] flex items-center justify-center"
            >
              {/* Layer 1: Ambient Warm Golden Halo & Backlight Glow */}
              <motion.div
                style={{ x: glowTranslateX }}
                className="absolute w-[360px] sm:w-[460px] h-[240px] sm:h-[300px] rounded-full bg-gradient-to-tr from-gold-500/30 via-amber-400/20 to-transparent blur-3xl pointer-events-none"
              />

              {/* Layer 2: Natural Luxury Dessert Presentation (NOT a circular frame!) */}
              <motion.div
                style={{
                  x: dessertTranslateX,
                  y: dessertTranslateY,
                  transformStyle: 'preserve-3d',
                }}
                className="relative w-full h-full rounded-2xl sm:rounded-3xl overflow-hidden glass-gold-card p-2 sm:p-2.5 shadow-2xl shadow-black/90 border border-gold-400/40 group cursor-pointer"
              >
                {/* Natural Aspect Ratio Photo of Centerpiece Dessert on Presentation Platter */}
                <div className="relative w-full h-full rounded-xl sm:rounded-2xl overflow-hidden bg-eclat-950">
                  <Image
                    src={current.image}
                    alt={current.dessertName}
                    fill
                    priority
                    className="object-cover object-center transition-transform duration-1000 group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 540px"
                  />
                  {/* Subtle luxury edge vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-eclat-950/75 via-transparent to-black/20 pointer-events-none" />
                  <div className="absolute inset-0 bg-gradient-to-r from-eclat-950/40 via-transparent to-eclat-950/40 pointer-events-none" />
                </div>
              </motion.div>

              {/* Layer 3: Floating 3D Information Badge */}
              <motion.div
                style={{
                  x: badgeTranslateX,
                  translateZ: 40,
                }}
                className="absolute -bottom-3 sm:-bottom-4 left-4 sm:left-6 px-4 py-2.5 rounded-2xl bg-eclat-900/95 border border-gold-400/60 backdrop-blur-xl shadow-2xl flex items-center gap-3 z-30"
              >
                <div className="w-2.5 h-2.5 rounded-full bg-gold-400 animate-ping" />
                <div>
                  <p className="text-[10px] uppercase tracking-wider text-gold-300 font-medium">Chef's Signature</p>
                  <p className="text-xs sm:text-sm font-serif text-white font-medium">{current.dessertName} • {current.price}</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
