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

  // Subtle 3D tilt effects on the interactive elements
  const rotateX = useTransform(smoothY, [-0.5, 0.5], [4, -4]);
  const rotateY = useTransform(smoothX, [-0.5, 0.5], [-5, 5]);
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
        className="relative min-h-[96vh] lg:min-h-screen pt-20 sm:pt-24 pb-8 sm:pb-12 flex flex-col justify-between overflow-hidden"
      >
        {/* 1. Master Futuristic 3D Visual Artwork Backdrop */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-reference.jpg"
            alt="Maison Éclat 3D Futuristic Masterpiece"
            fill
            priority
            quality={95}
            className="object-cover object-center lg:object-right-top transition-transform duration-1000 scale-[1.01]"
            sizes="100vw"
          />
          {/* Subtle responsive gradient overlay to ensure text on the left is always crisp and readable */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/40 to-transparent lg:w-3/5 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 pointer-events-none" />
        </div>

        {/* 2. Interactive Left Hero Content Column */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 my-auto py-6 sm:py-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <motion.div
              style={{
                perspective: 1000,
                rotateX,
                rotateY,
              }}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-6 space-y-4 sm:space-y-6 text-center lg:text-left drop-shadow-2xl"
            >
              {/* Tagline matching reference */}
              <div className="flex items-center justify-center lg:justify-start gap-2 text-gold-400 text-[10px] sm:text-xs uppercase tracking-[0.3em] font-medium">
                <span className="w-6 h-[1px] bg-gold-400/60" />
                <span>Artisan Dessert Café</span>
                <span className="w-6 h-[1px] bg-gold-400/60" />
              </div>

              {/* Main Headline */}
              <div className="space-y-1 sm:space-y-2">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-serif text-white tracking-tight drop-shadow-md">
                  {current.title}
                </h1>
                <p className="text-xl sm:text-2xl lg:text-3xl font-serif italic text-gold-200 drop-shadow">
                  {current.subtitle}
                </p>
              </div>

              {/* Description */}
              <p className="text-xs sm:text-sm text-champagne/90 max-w-lg mx-auto lg:mx-0 leading-relaxed font-light drop-shadow">
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

              {/* Slide Indicators matching reference: [====]  ( ) */}
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

            {/* Empty space on the right so the master 3D platter centerpiece shines through unobstructed */}
            <div className="hidden lg:block lg:col-span-6 min-h-[380px]" />
          </div>
        </div>

        {/* 3. Bottom 4 Glowing Futuristic Glass Pedestal Cards (Matching Reference Image) */}
        <motion.div
          style={{ y: cardsTranslateY }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-20 pt-2 pb-2"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
            {featureCards.map((card, idx) => {
              const cardContent = (
                <div className="group relative p-4 sm:p-5 rounded-2xl sm:rounded-3xl bg-black/55 backdrop-blur-xl border border-gold-400/35 shadow-[0_15px_35px_rgba(0,0,0,0.7),inset_0_0_15px_rgba(223,166,42,0.08)] hover:border-gold-300 hover:shadow-[0_20px_45px_rgba(0,0,0,0.85),0_0_25px_rgba(223,166,42,0.45)] hover:-translate-y-1.5 transition-all duration-300 flex items-center justify-between cursor-pointer">
                  {/* Subtle top edge neon reflection */}
                  <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-gold-300/60 to-transparent pointer-events-none" />

                  <div className="space-y-1.5 pr-2">
                    <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-gold-500/15 border border-gold-400/30 flex items-center justify-center text-gold-300 group-hover:scale-110 transition-transform">
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
                    {cardContent}
                  </button>
                );
              }

              return (
                <Link key={idx} href={card.href} className="w-full text-left">
                  {cardContent}
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
