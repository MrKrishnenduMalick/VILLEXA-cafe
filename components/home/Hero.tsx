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

  // Mouse parallax motion values for real-time 3D spatial depth
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 120 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  // 3D parallax transforms for layers
  const rotateX = useTransform(smoothY, [-0.5, 0.5], [8, -8]);
  const rotateY = useTransform(smoothX, [-0.5, 0.5], [-10, 10]);
  const platterTranslateX = useTransform(smoothX, [-0.5, 0.5], [-16, 16]);
  const platterTranslateY = useTransform(smoothY, [-0.5, 0.5], [-12, 12]);
  const glowTranslateX = useTransform(smoothX, [-0.5, 0.5], [30, -30]);
  const cardsTranslateY = useTransform(smoothY, [-0.5, 0.5], [-6, 6]);

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
      description: 'Handcrafted desserts, fine chocolates and artisan bakes, made with the world’s finest ingredients in an immersive luxury atmosphere.',
    },
    {
      title: 'Haute Pâtisserie',
      subtitle: 'Artistry in Every Dimension',
      description: 'Single-origin Ecuadorian cacao, Normandy AOP butter, and Bronte pistachios harmonious in every architectural creation.',
    },
  ];

  const current = heroSlides[activeSlide];

  // The 4 bottom futuristic glass cards matching reference image line-art icons
  const featureCards = [
    {
      icon: (
        <svg className="w-6 h-6 text-gold-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
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
        <svg className="w-6 h-6 text-gold-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
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
        <svg className="w-6 h-6 text-gold-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
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
        <svg className="w-6 h-6 text-gold-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
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
        {/* 1. Futuristic 3D Ambient Environment & Light Canopies */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {/* Futuristic Concentric Floating Light Halo Rings */}
          <div className="absolute -top-32 right-1/4 w-[680px] h-[380px] rounded-[100%] border-2 border-gold-400/30 shadow-[0_0_80px_rgba(223,166,42,0.25)] rotate-[15deg] animate-pulse-slow" />
          <div className="absolute -top-20 right-1/4 w-[540px] h-[300px] rounded-[100%] border border-gold-300/20 rotate-[15deg]" />

          {/* Deep Burgundy & Liquid Gold Radial Light Orbs */}
          <div className="absolute top-1/4 right-1/4 w-[420px] h-[420px] rounded-full bg-gold-500/15 blur-[130px] animate-glow-pulse" />
          <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] rounded-full bg-eclat-700/25 blur-[150px]" />
          <div className="absolute bottom-0 inset-x-0 h-56 bg-gradient-to-t from-[#080205] via-black/80 to-transparent" />

          {/* Luxury Pink Floral Branch Framing Accent */}
          <div className="absolute top-0 left-0 w-36 sm:w-48 h-64 sm:h-80 pointer-events-none z-10 opacity-90">
            <Image
              src="/images/hero-floral-left.png"
              alt="Maison Éclat Floral Decor"
              fill
              className="object-contain object-top-left"
              sizes="(max-width: 768px) 144px, 192px"
            />
          </div>
        </div>

        {/* 2. Main Hero Stage */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 my-auto py-4 sm:py-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: Heading, Subtitle, Description, CTAs, Slide Dots */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-5 xl:col-span-5 space-y-4 sm:space-y-6 text-center lg:text-left z-20"
            >
              {/* Tagline with Gold Filigree */}
              <div className="flex items-center justify-center lg:justify-start gap-2 text-gold-400 text-[10px] sm:text-xs uppercase tracking-[0.32em] font-medium">
                <span className="w-8 h-[1px] bg-gradient-to-r from-transparent to-gold-400" />
                <span>Artisan Dessert Café</span>
                <span className="w-8 h-[1px] bg-gradient-to-l from-transparent to-gold-400" />
              </div>

              {/* Main Headline */}
              <div className="space-y-1 sm:space-y-2">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-serif text-white tracking-tight drop-shadow-2xl">
                  {current.title}
                </h1>
                <p className="text-xl sm:text-2xl lg:text-3xl font-serif italic text-gold-200 drop-shadow-lg">
                  {current.subtitle}
                </p>
              </div>

              {/* Description */}
              <p className="text-xs sm:text-sm text-champagne/90 max-w-lg mx-auto lg:mx-0 leading-relaxed font-light">
                {current.description}
              </p>

              {/* Futuristic Glass & Gold Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5">
                <Link
                  href="/menu"
                  className="w-full sm:w-auto px-8 py-3.5 rounded-full btn-gold text-xs sm:text-sm font-semibold tracking-wider uppercase inline-flex items-center justify-center gap-2 shadow-[0_0_30px_rgba(223,166,42,0.5)] hover:shadow-[0_0_40px_rgba(223,166,42,0.8)] hover:scale-105 active:scale-95 transition-all"
                >
                  <span>Explore the Menu</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/our-story"
                  className="w-full sm:w-auto px-8 py-3.5 rounded-full border border-gold-400/40 bg-black/60 hover:bg-gold-500/20 text-champagne hover:text-white text-xs sm:text-sm font-medium tracking-wider uppercase inline-flex items-center justify-center backdrop-blur-xl shadow-lg transition-all"
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
                        ? 'w-8 h-2 bg-gradient-to-r from-gold-300 to-gold-500 shadow-[0_0_14px_rgba(223,166,42,0.9)]'
                        : 'w-2 h-2 bg-gold-400/40 hover:bg-gold-400/70'
                    }`}
                  />
                ))}
              </div>
            </motion.div>

            {/* Right Column: High-Impact 3D Futuristic Centerpiece Platter with Orbital Holographic Glass Ribbon */}
            <div className="lg:col-span-7 xl:col-span-7 relative flex items-center justify-center lg:justify-end py-2 sm:py-6">
              <motion.div
                style={{
                  perspective: 1200,
                  rotateX,
                  rotateY,
                  transformStyle: 'preserve-3d',
                }}
                className="relative w-full max-w-[580px] sm:max-w-[660px] lg:max-w-[720px] flex items-center justify-center"
              >
                {/* Layer 1: Ambient Neon Gold & Magenta Floor Halo Glow */}
                <motion.div
                  style={{ x: glowTranslateX }}
                  className="absolute bottom-2 sm:bottom-6 right-1/4 w-[380px] sm:w-[520px] h-[130px] sm:h-[170px] rounded-[100%] bg-gradient-to-tr from-gold-500/35 via-amber-400/25 to-rose-500/20 blur-3xl pointer-events-none"
                />

                {/* Layer 2: 3D Floating Presentation Platter, Cherry Dome & Glass Ribbon */}
                <motion.div
                  style={{
                    x: platterTranslateX,
                    y: platterTranslateY,
                    transformStyle: 'preserve-3d',
                  }}
                  className="relative w-full aspect-[1465/927] drop-shadow-[0_30px_70px_rgba(0,0,0,0.95)] animate-float-smooth"
                >
                  <Image
                    src="/images/hero-3d-centerpiece.webp"
                    alt="Maison Éclat — 3D Floating Masterpiece Platter with The Cherry Dome and Glass Ribbon"
                    fill
                    priority
                    quality={100}
                    className="object-contain object-center scale-105 select-none"
                    sizes="(max-width: 1024px) 100vw, 760px"
                  />

                  {/* Specular Edge Highlights */}
                  <div className="absolute inset-0 bg-radial-glow opacity-60 pointer-events-none mix-blend-screen" />
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* 3. Bottom 4 Glowing Futuristic Glass Pedestals (Matching Reference Image) */}
        <motion.div
          style={{ y: cardsTranslateY }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-20 pt-2 pb-2"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-5 lg:gap-6">
            {featureCards.map((card, idx) => {
              const cardInner = (
                <div className="group relative p-4 sm:p-5 rounded-2xl sm:rounded-3xl glass-pedestal flex items-center justify-between cursor-pointer">
                  {/* Glowing specular top edge */}
                  <div className="absolute inset-x-0 top-0 h-[1.5px] bg-gradient-to-r from-transparent via-gold-200/80 to-transparent pointer-events-none" />

                  <div className="space-y-1.5 pr-2">
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gold-500/20 border border-gold-400/40 flex items-center justify-center text-gold-300 group-hover:scale-110 group-hover:border-gold-300 transition-all duration-300 shadow-[0_0_15px_rgba(223,166,42,0.25)]">
                      {card.icon}
                    </div>
                    <h3 className="text-xs sm:text-sm font-serif text-white group-hover:text-gold-200 transition-colors tracking-wide">
                      {card.title}
                    </h3>
                  </div>

                  <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border border-gold-400/40 flex items-center justify-center text-gold-300 group-hover:bg-gradient-to-r group-hover:from-gold-400 group-hover:to-gold-500 group-hover:text-eclat-950 group-hover:border-gold-300 group-hover:shadow-[0_0_20px_rgba(223,166,42,0.6)] transition-all shrink-0">
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
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
