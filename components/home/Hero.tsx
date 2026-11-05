'use client';

import React, { useState, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Sparkles, Cake, UtensilsCrossed, Calendar, ChevronRight } from 'lucide-react';
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

  // Transform layers at different depths for real parallax 3D separation
  const rotateX = useTransform(smoothY, [-0.5, 0.5], [6, -6]);
  const rotateY = useTransform(smoothX, [-0.5, 0.5], [-8, 8]);
  const dessertTranslateX = useTransform(smoothX, [-0.5, 0.5], [-10, 10]);
  const dessertTranslateY = useTransform(smoothY, [-0.5, 0.5], [-8, 8]);
  const glowTranslateX = useTransform(smoothX, [-0.5, 0.5], [12, -12]);

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
      title: 'Artisan Pâtisserie',
      subtitle: 'Where Flavour Transcends Art',
      description: 'Single-origin Ecuadorian cacao, Normandy AOP butter, and Sicilian pistachios crafted in every creation.',
    },
  ];

  const current = heroSlides[activeSlide];

  // The 4 bottom feature cards depicted in Image 3
  const featureCards = [
    {
      icon: <Sparkles className="w-5 h-5 text-gold-300" />,
      title: 'Signature Creations',
      href: '/signature-collection',
      isAction: false,
    },
    {
      icon: <UtensilsCrossed className="w-5 h-5 text-gold-300" />,
      title: 'The Café Experience',
      href: '/cafe-experience',
      isAction: false,
    },
    {
      icon: <Cake className="w-5 h-5 text-gold-300" />,
      title: 'Bespoke Creations',
      href: '/custom-cakes',
      isAction: false,
    },
    {
      icon: <Calendar className="w-5 h-5 text-gold-300" />,
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
        className="relative min-h-[92vh] pt-20 sm:pt-24 pb-8 sm:pb-12 flex flex-col justify-between overflow-hidden bg-ambient-vignette"
      >
        {/* Decorative Blooming Floral Corner Accents */}
        <div className="absolute top-0 left-0 w-64 h-64 sm:w-80 sm:h-80 pointer-events-none opacity-50 blur-[0.5px]">
          <svg viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <path d="M0 20C40 60 120 80 180 50C220 30 260 90 280 130" stroke="url(#vineGradHero)" strokeWidth="1.5" strokeDasharray="3 3"/>
            <circle cx="70" cy="45" r="14" fill="rgba(180, 50, 110, 0.45)" />
            <circle cx="140" cy="55" r="20" fill="rgba(223, 166, 42, 0.35)" />
            <circle cx="190" cy="35" r="12" fill="rgba(180, 50, 110, 0.5)" />
            <circle cx="230" cy="95" r="16" fill="rgba(223, 166, 42, 0.4)" />
            <defs>
              <linearGradient id="vineGradHero" x1="0" y1="0" x2="300" y2="300" gradientUnits="userSpaceOnUse">
                <stop stopColor="#dfa62a" />
                <stop offset="1" stopColor="#b4326e" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Ambient Warm Golden Halos & Backlight Glows */}
        <div className="absolute top-1/4 right-1/4 w-80 h-80 rounded-full bg-gold-500/15 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-1/3 left-1/4 w-96 h-96 rounded-full bg-eclat-600/15 blur-[130px] pointer-events-none" />

        {/* Main Content Area */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 my-auto py-4 sm:py-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: Heading, Subtitle, Description, CTAs, Dots */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-6 space-y-4 sm:space-y-5 text-center lg:text-left"
            >
              {/* Tagline */}
              <div className="flex items-center justify-center lg:justify-start gap-2 text-gold-400 text-[10px] sm:text-xs uppercase tracking-[0.3em] font-medium">
                <span className="w-6 h-[1px] bg-gold-400/60" />
                <span>Artisan Dessert Café</span>
                <span className="w-6 h-[1px] bg-gold-400/60" />
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
                  className="w-full sm:w-auto px-7 py-3 rounded-full btn-gold text-xs sm:text-sm font-semibold tracking-wider uppercase inline-flex items-center justify-center gap-2 shadow-lg shadow-gold-500/20 hover:scale-105 active:scale-95 transition-all"
                >
                  <span>Explore the Menu</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/our-story"
                  className="w-full sm:w-auto px-7 py-3 rounded-full border border-gold-400/35 bg-eclat-900/60 hover:bg-gold-500/15 text-champagne hover:text-white text-xs sm:text-sm font-medium tracking-wider uppercase inline-flex items-center justify-center transition-all"
                >
                  Our Story
                </Link>
              </div>

              {/* Slide Dots as seen in Image 3 */}
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

            {/* Right Column: Centerpiece Platter with Chocolate Sphere & Curving Glass Ribbon */}
            <div className="lg:col-span-6 relative flex items-center justify-center py-4">
              <motion.div
                style={{
                  perspective: 1000,
                  rotateX,
                  rotateY,
                  transformStyle: 'preserve-3d',
                }}
                className="relative w-full max-w-[480px] sm:max-w-[540px] aspect-[16/12] flex items-center justify-center"
              >
                {/* Layer 1: Ambient Warm Golden Halos & Backlight Glow */}
                <motion.div
                  style={{ x: glowTranslateX }}
                  className="absolute w-[380px] sm:w-[480px] h-[260px] sm:h-[320px] rounded-full bg-gradient-to-tr from-gold-500/35 via-amber-400/20 to-transparent blur-3xl pointer-events-none"
                />

                {/* Layer 2: Gilded Presentation Pedestal Stage with Centerpiece Dessert */}
                <motion.div
                  style={{
                    x: dessertTranslateX,
                    y: dessertTranslateY,
                    transformStyle: 'preserve-3d',
                  }}
                  className="relative w-full h-full rounded-3xl overflow-hidden glass-gold-card p-2 sm:p-2.5 shadow-2xl shadow-black/90 border border-gold-400/40 group cursor-pointer"
                >
                  <div className="relative w-full h-full rounded-2xl overflow-hidden bg-eclat-950">
                    <Image
                      src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=1200&auto=format&fit=crop"
                      alt="Maison Éclat Signature Dome Dessert on Gilded Platter"
                      fill
                      priority
                      className="object-cover object-center transition-transform duration-1000 group-hover:scale-105"
                      sizes="(max-width: 1024px) 100vw, 540px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-eclat-950/80 via-transparent to-transparent pointer-events-none" />
                  </div>
                </motion.div>

                {/* Layer 3: Curving Glass Ribbon Preview of Delicacies */}
                <div className="absolute -top-3 sm:-top-5 -right-2 sm:-right-4 flex items-center gap-2 pointer-events-none z-20">
                  <div className="px-3 py-1.5 rounded-xl bg-eclat-900/90 border border-gold-400/50 backdrop-blur-md shadow-xl flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-gold-400 animate-pulse" />
                    <span className="text-[10px] uppercase tracking-wider text-gold-200 font-medium">The Cherry Dome</span>
                    <span className="text-xs font-serif text-gold-300 font-semibold">₹280</span>
                  </div>
                </div>

                {/* Layer 4: Macaron Accent Badge */}
                <div className="absolute -bottom-2 sm:-bottom-3 -right-2 sm:-right-3 px-3 py-1 rounded-full bg-rose-950/80 border border-gold-400/40 text-champagne text-[10px] tracking-wider backdrop-blur-md shadow-lg pointer-events-none z-20">
                  ✨ Handcrafted in Kolkata
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Bottom Hero 4 Floating Glass Pedestal Cards (Matching Image 3) */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-20 pt-2 pb-2">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {featureCards.map((card, idx) => {
              if (card.isAction) {
                return (
                  <button
                    key={idx}
                    onClick={() => setIsReservationOpen(true)}
                    className="group relative p-3 sm:p-4 rounded-2xl glass-gold-card hover:border-gold-300/80 hover:-translate-y-1 transition-all duration-300 text-left flex items-center justify-between"
                  >
                    <div className="space-y-1">
                      <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-gold-500/15 border border-gold-400/30 flex items-center justify-center">
                        {card.icon}
                      </div>
                      <h3 className="text-xs sm:text-sm font-serif text-white group-hover:text-gold-200 transition-colors">
                        {card.title}
                      </h3>
                    </div>
                    <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full border border-gold-400/40 flex items-center justify-center text-gold-300 group-hover:bg-gold-400 group-hover:text-eclat-950 transition-all">
                      <ChevronRight className="w-3.5 h-3.5" />
                    </div>
                  </button>
                );
              }

              return (
                <Link
                  key={idx}
                  href={card.href}
                  className="group relative p-3 sm:p-4 rounded-2xl glass-gold-card hover:border-gold-300/80 hover:-translate-y-1 transition-all duration-300 text-left flex items-center justify-between"
                >
                  <div className="space-y-1">
                    <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-gold-500/15 border border-gold-400/30 flex items-center justify-center">
                      {card.icon}
                    </div>
                    <h3 className="text-xs sm:text-sm font-serif text-white group-hover:text-gold-200 transition-colors">
                      {card.title}
                    </h3>
                  </div>
                  <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full border border-gold-400/40 flex items-center justify-center text-gold-300 group-hover:bg-gold-400 group-hover:text-eclat-950 transition-all">
                    <ChevronRight className="w-3.5 h-3.5" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Global Reservation Modal */}
      <ReservationModal
        isOpen={isReservationOpen}
        onClose={() => setIsReservationOpen(false)}
      />
    </>
  );
}
