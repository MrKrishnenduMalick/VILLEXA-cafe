'use client';

import React, { useState, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Sparkles, ChevronRight } from 'lucide-react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import ReservationModal from '@/components/layout/ReservationModal';

export default function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isReservationOpen, setIsReservationOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Mouse parallax motion values for authentic 3D depth
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 120 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  // 3D parallax layers
  const rotateX = useTransform(smoothY, [-0.5, 0.5], [7, -7]);
  const rotateY = useTransform(smoothX, [-0.5, 0.5], [-9, 9]);
  const dessertTranslateX = useTransform(smoothX, [-0.5, 0.5], [-14, 14]);
  const dessertTranslateY = useTransform(smoothY, [-0.5, 0.5], [-10, 10]);
  const ribbonTranslateX = useTransform(smoothX, [-0.5, 0.5], [16, -16]);
  const ribbonTranslateY = useTransform(smoothY, [-0.5, 0.5], [12, -12]);
  const glowTranslateX = useTransform(smoothX, [-0.5, 0.5], [20, -20]);
  const cardsTranslateY = useTransform(smoothY, [-0.5, 0.5], [-5, 5]);

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
    },
    {
      title: 'Haute Pâtisserie',
      subtitle: 'Artistry in Every Dimension',
      description: 'Single-origin Ecuadorian cacao, Normandy AOP butter, and Sicilian pistachios crafted in every creation.',
    },
  ];

  const current = heroSlides[activeSlide];

  // The 4 bottom futuristic glass cards matching the design reference image
  const featureCards = [
    {
      icon: (
        <svg className="w-5 h-5 sm:w-6 sm:h-6 text-gold-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M19 10C19 6 15 3 12 3C9 3 5 6 5 10C3.5 10 3 11.5 3 13C3 14.5 4 15 5 15L6 21H18L19 15C20 15 21 14.5 21 13C21 11.5 20.5 10 19 10Z" />
          <path d="M12 3V6" strokeLinecap="round" />
          <path d="M8 15L9 21" strokeLinecap="round" />
          <path d="M16 15L15 21" strokeLinecap="round" />
        </svg>
      ),
      title: 'Signature Creations',
      href: '/signature-collection',
      isAction: false,
    },
    {
      icon: (
        <svg className="w-5 h-5 sm:w-6 sm:h-6 text-gold-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M4 10H20" strokeLinecap="round" />
          <path d="M12 10V18" strokeLinecap="round" />
          <path d="M9 18H15" strokeLinecap="round" />
          <path d="M6 7V10M18 7V10" strokeLinecap="round" />
          <path d="M4 14V19M20 14V19" strokeLinecap="round" />
        </svg>
      ),
      title: 'The Café Experience',
      href: '/cafe-experience',
      isAction: false,
    },
    {
      icon: (
        <svg className="w-5 h-5 sm:w-6 sm:h-6 text-gold-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M4 17H20V21H4V17Z" strokeLinecap="round" />
          <path d="M6 11H18V17H6V11Z" strokeLinecap="round" />
          <path d="M9 6H15V11H9V6Z" strokeLinecap="round" />
          <path d="M12 3V6" strokeLinecap="round" />
        </svg>
      ),
      title: 'Bespoke Creations',
      href: '/custom-cakes',
      isAction: false,
    },
    {
      icon: (
        <svg className="w-5 h-5 sm:w-6 sm:h-6 text-gold-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M4 18H20" strokeLinecap="round" />
          <path d="M5 18C5 13 8 10 12 10C16 10 19 13 19 18" strokeLinecap="round" />
          <path d="M12 7V10" strokeLinecap="round" />
          <circle cx="12" cy="6" r="1.5" />
        </svg>
      ),
      title: 'Reserve a Table',
      href: '#',
      isAction: true,
    },
  ];

  return (
    <>
      <section
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="relative min-h-[96vh] lg:min-h-screen pt-24 sm:pt-28 pb-8 sm:pb-12 flex flex-col justify-between overflow-hidden bg-ambient-vignette"
      >
        {/* 1. Ambient Background Atmosphere (Pure CSS & SVG, NO flat image duplicate!) */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Futuristic Concentric Gold Light Halo in the ceiling */}
          <div className="absolute -top-32 right-1/4 w-[600px] h-[350px] rounded-full border border-gold-400/25 bg-radial-glow blur-sm rotate-12" />
          <div className="absolute -top-24 right-1/4 w-[500px] h-[280px] rounded-full border border-gold-400/15 rotate-12" />

          {/* Deep Burgundy & Gold Ambient Glows */}
          <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-gold-500/15 blur-[120px]" />
          <div className="absolute top-1/3 left-1/4 w-[450px] h-[450px] rounded-full bg-eclat-700/20 blur-[140px]" />
          <div className="absolute bottom-0 inset-x-0 h-48 bg-gradient-to-t from-black via-black/60 to-transparent" />

          {/* Left Floral Arch Accent */}
          <div className="absolute top-0 left-0 w-72 sm:w-96 h-72 sm:h-96 opacity-60">
            <svg viewBox="0 0 320 320" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
              <path d="M-20 10C30 50 110 70 170 40C210 20 250 80 270 120" stroke="url(#heroFloralGold)" strokeWidth="1.5" strokeDasharray="3 3"/>
              <circle cx="50" cy="35" r="16" fill="rgba(215, 60, 130, 0.5)" />
              <circle cx="120" cy="45" r="22" fill="rgba(223, 166, 42, 0.4)" />
              <circle cx="180" cy="25" r="14" fill="rgba(215, 60, 130, 0.55)" />
              <circle cx="230" cy="85" r="18" fill="rgba(223, 166, 42, 0.45)" />
              <circle cx="260" cy="130" r="12" fill="rgba(215, 60, 130, 0.5)" />
              <defs>
                <linearGradient id="heroFloralGold" x1="0" y1="0" x2="300" y2="300" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#dfa62a" />
                  <stop offset="1" stopColor="#d73c82" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>

        {/* 2. Main Content Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 my-auto py-4 sm:py-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: Heading, Subtitle, Description, CTAs, Slide Dots */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-6 space-y-4 sm:space-y-6 text-center lg:text-left z-20"
            >
              {/* Tagline */}
              <div className="flex items-center justify-center lg:justify-start gap-2 text-gold-400 text-[10px] sm:text-xs uppercase tracking-[0.3em] font-medium">
                <span className="w-6 h-[1px] bg-gold-400/60" />
                <span>Artisan Dessert Café</span>
                <span className="w-6 h-[1px] bg-gold-400/60" />
              </div>

              {/* Main Headline */}
              <div className="space-y-1 sm:space-y-2">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-serif text-white tracking-tight drop-shadow-lg">
                  {current.title}
                </h1>
                <p className="text-xl sm:text-2xl lg:text-3xl font-serif italic text-gold-200 drop-shadow">
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
                  className="w-full sm:w-auto px-8 py-3.5 rounded-full btn-gold text-xs sm:text-sm font-semibold tracking-wider uppercase inline-flex items-center justify-center gap-2 shadow-[0_0_25px_rgba(223,166,42,0.45)] hover:shadow-[0_0_35px_rgba(223,166,42,0.7)] hover:scale-105 active:scale-95 transition-all"
                >
                  <span>Explore the Menu</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/our-story"
                  className="w-full sm:w-auto px-8 py-3.5 rounded-full border border-gold-400/40 bg-black/60 hover:bg-gold-500/20 text-champagne hover:text-white text-xs sm:text-sm font-medium tracking-wider uppercase inline-flex items-center justify-center backdrop-blur-md transition-all"
                >
                  Our Story
                </Link>
              </div>

              {/* Slide Indicators: [====]  ( ) */}
              <div className="pt-2 flex items-center justify-center lg:justify-start gap-2">
                {heroSlides.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveSlide(idx)}
                    aria-label={`Slide ${idx + 1}`}
                    className={`transition-all duration-300 rounded-full ${
                      idx === activeSlide
                        ? 'w-8 h-2 bg-gradient-to-r from-gold-300 to-gold-500 shadow-[0_0_12px_rgba(223,166,42,0.8)]'
                        : 'w-2 h-2 bg-gold-400/40 hover:bg-gold-400/70'
                    }`}
                  />
                ))}
              </div>
            </motion.div>

            {/* Right Column: Authentic 3D Futuristic Centerpiece Platter */}
            <div className="lg:col-span-6 relative flex items-center justify-center py-4">
              <motion.div
                style={{
                  perspective: 1200,
                  rotateX,
                  rotateY,
                  transformStyle: 'preserve-3d',
                }}
                className="relative w-full max-w-[500px] sm:max-w-[560px] aspect-[16/13] flex items-center justify-center"
              >
                {/* Layer 1: Ambient Golden Halo Ring underneath the platter */}
                <motion.div
                  style={{ x: glowTranslateX }}
                  className="absolute bottom-6 w-[360px] sm:w-[440px] h-[100px] sm:h-[130px] rounded-[100%] bg-gradient-to-tr from-gold-500/35 via-amber-400/25 to-transparent blur-2xl pointer-events-none"
                />

                {/* Layer 2: 3D Floating Gilded Platter Base */}
                <motion.div
                  style={{
                    x: dessertTranslateX,
                    y: dessertTranslateY,
                    transformStyle: 'preserve-3d',
                  }}
                  className="relative w-full h-full flex items-center justify-center"
                >
                  {/* Futuristic Elliptical Floating Platform */}
                  <div className="relative w-[340px] sm:w-[420px] aspect-[16/11] rounded-[48px] bg-gradient-to-b from-[#2a081c] via-[#1a0512] to-[#0a0207] p-2.5 sm:p-3 border-2 border-gold-400/60 shadow-[0_30px_70px_rgba(0,0,0,0.9),0_0_45px_rgba(223,166,42,0.35),inset_0_0_30px_rgba(223,166,42,0.15)] overflow-hidden">
                    {/* Interior High-res Centerpiece Presentation */}
                    <div className="relative w-full h-full rounded-[36px] overflow-hidden bg-eclat-950">
                      <Image
                        src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=1200&auto=format&fit=crop"
                        alt="The Cherry — Maison Éclat 3D Masterpiece"
                        fill
                        priority
                        className="object-cover object-center transition-transform duration-1000 hover:scale-105"
                        sizes="(max-width: 1024px) 100vw, 560px"
                      />
                      {/* Ambient edge vignette */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent pointer-events-none" />
                      <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40 pointer-events-none" />
                    </div>

                    {/* Platter Golden Rim Highlight */}
                    <div className="absolute inset-0 rounded-[48px] border border-gold-300/40 pointer-events-none" />
                  </div>

                  {/* Layer 3: Floating 3D Curved Glass Ribbon of Miniature Preview Cards */}
                  <motion.div
                    style={{
                      x: ribbonTranslateX,
                      y: ribbonTranslateY,
                      translateZ: 60,
                    }}
                    className="absolute -top-4 sm:-top-6 -left-3 sm:-left-6 flex items-center gap-2 pointer-events-none z-30"
                  >
                    {/* Floating Card 1: Raspberry Tart */}
                    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-black/70 border border-gold-400/50 backdrop-blur-md p-1 shadow-2xl rotate-[-8deg]">
                      <div className="relative w-full h-full rounded-xl overflow-hidden">
                        <Image
                          src="https://images.unsplash.com/photo-1565958011703-44f9829ba187?q=80&w=300&auto=format&fit=crop"
                          alt="Raspberry Tart Preview"
                          fill
                          className="object-cover"
                          sizes="64px"
                        />
                      </div>
                    </div>

                    {/* Floating Card 2: Dark Opera */}
                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-black/75 border border-gold-400/60 backdrop-blur-md p-1 shadow-2xl rotate-[-2deg]">
                      <div className="relative w-full h-full rounded-xl overflow-hidden">
                        <Image
                          src="https://images.unsplash.com/photo-1606313564200-e75d5e30476c?q=80&w=300&auto=format&fit=crop"
                          alt="Dark Opera Tart Preview"
                          fill
                          className="object-cover"
                          sizes="80px"
                        />
                      </div>
                    </div>
                  </motion.div>

                  {/* Layer 4: Pink French Macaron on Platter Edge */}
                  <motion.div
                    style={{ translateZ: 50 }}
                    className="absolute bottom-6 sm:bottom-8 right-2 sm:right-6 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-rose-950/90 via-black/85 to-rose-950/90 border border-rose-400/40 text-gold-200 text-[10px] sm:text-xs font-serif backdrop-blur-md shadow-2xl flex items-center gap-2 pointer-events-none z-30"
                  >
                    <span className="w-2 h-2 rounded-full bg-rose-400 animate-ping" />
                    <span>The Cherry Dome • ₹280</span>
                  </motion.div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* 3. Bottom 4 Glowing Futuristic Glass Pedestal Cards */}
        <motion.div
          style={{ y: cardsTranslateY }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-20 pt-2 pb-2"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
            {featureCards.map((card, idx) => {
              const cardInner = (
                <div className="group relative p-4 sm:p-5 rounded-2xl sm:rounded-3xl bg-black/55 backdrop-blur-xl border border-gold-400/35 shadow-[0_15px_35px_rgba(0,0,0,0.7),inset_0_0_15px_rgba(223,166,42,0.08)] hover:border-gold-300 hover:shadow-[0_20px_45px_rgba(0,0,0,0.85),0_0_25px_rgba(223,166,42,0.45)] hover:-translate-y-1.5 transition-all duration-300 flex items-center justify-between cursor-pointer">
                  {/* Subtle top edge neon reflection */}
                  <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-gold-300/60 to-transparent pointer-events-none" />

                  <div className="space-y-1.5 pr-2">
                    <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-gold-500/15 border border-gold-400/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                      {card.icon}
                    </div>
                    <h3 className="text-xs sm:text-sm font-serif text-white group-hover:text-gold-200 transition-colors tracking-wide">
                      {card.title}
                    </h3>
                  </div>

                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-gold-400/40 flex items-center justify-center text-gold-300 group-hover:bg-gold-400 group-hover:text-eclat-950 group-hover:border-gold-300 transition-all shrink-0">
                    <ChevronRight className="w-4 h-4" />
                  </div>
                </div>
              );

              if (card.isAction) {
                return (
                  <button
                    key={idx}
                    onClick={() => setIsReservationOpen(true)}
                    className="w-full text-left"
                  >
                    {cardInner}
                  </button>
                );
              }

              return (
                <Link key={idx} href={card.href} className="w-full text-left">
                  {cardInner}
                </Link>
              );
            })}
          </div>
        </motion.div>
      </section>

      {/* Global Reservation Modal */}
      <ReservationModal
        isOpen={isReservationOpen}
        onClose={() => setIsReservationOpen(false)}
      />
    </>
  );
}
