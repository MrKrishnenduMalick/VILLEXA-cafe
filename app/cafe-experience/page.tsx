'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Sparkles, Armchair, Croissant, Coffee, MapPin, Clock, ArrowRight, ShieldCheck, Check } from 'lucide-react';
import { CAFE_DETAILS, CAFE_HIGHLIGHTS } from '@/data/cafe';
import ReservationModal from '@/components/layout/ReservationModal';

export default function CafeExperiencePage() {
  const [isReservationOpen, setIsReservationOpen] = useState(false);

  return (
    <div className="min-h-screen pt-28 sm:pt-36 pb-24 bg-ambient-vignette overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/4 right-1/3 w-96 h-96 bg-gold-500/10 blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="inline-flex items-center gap-1.5 text-[11px] uppercase tracking-[0.28em] text-gold-400 font-medium">
            <Sparkles className="w-3.5 h-3.5" /> Haute Ambiance
          </span>
          <h1 className="text-4xl sm:text-6xl font-serif text-white tracking-tight">
            The Café Experience
          </h1>
          <p className="text-sm sm:text-base text-champagne/85 font-light leading-relaxed">
            Dine, Relax, Indulge. Step into an opulent jewel box in New Town, Kolkata — where velvet burgundy banquettes, warm crystal chandeliers, and the aroma of roasted single-origin cacao envelop you.
          </p>
          <div className="pt-2">
            <button
              onClick={() => setIsReservationOpen(true)}
              className="px-8 py-3.5 rounded-full btn-gold text-xs uppercase tracking-wider font-semibold inline-flex items-center gap-2"
            >
              <span>Reserve Your Table</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Hero Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="relative aspect-[16/10] rounded-3xl overflow-hidden border border-gold-400/40 shadow-2xl">
            <Image
              src="https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?q=80&w=1200&auto=format&fit=crop"
              alt="Maison Éclat Main Salon"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-eclat-950/80 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-5 left-5 text-white">
              <p className="text-[10px] uppercase tracking-widest text-gold-300 font-medium">Main Salon</p>
              <h3 className="text-lg font-serif">Crimson Banquettes & Crystal Elegance</h3>
            </div>
          </div>

          <div className="relative aspect-[16/10] rounded-3xl overflow-hidden border border-gold-400/40 shadow-2xl">
            <Image
              src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200&auto=format&fit=crop"
              alt="Maison Éclat Vitrine Counter"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-eclat-950/80 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-5 left-5 text-white">
              <p className="text-[10px] uppercase tracking-widest text-gold-300 font-medium">The Vitrine Counter</p>
              <h3 className="text-lg font-serif">Morning Viennoiserie & Entremets</h3>
            </div>
          </div>
        </div>

        {/* 4 Pillars of the Experience */}
        <div className="space-y-8">
          <div className="text-center space-y-2">
            <span className="text-[11px] uppercase tracking-widest text-gold-400 font-medium">Hospitality</span>
            <h2 className="text-3xl sm:text-4xl font-serif text-white">The Four Pillars of Comfort</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {CAFE_HIGHLIGHTS.map((item) => (
              <div
                key={item.id}
                className="rounded-3xl glass-gold-card p-6 space-y-3 hover:-translate-y-1.5 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-eclat-850 border border-gold-400/30 flex items-center justify-center text-gold-300">
                  {item.id === 'dine-in' ? (
                    <Armchair className="w-5 h-5" />
                  ) : item.id === 'curated-desserts' ? (
                    <Sparkles className="w-5 h-5" />
                  ) : item.id === 'artisan-bakes' ? (
                    <Croissant className="w-5 h-5" />
                  ) : (
                    <Coffee className="w-5 h-5" />
                  )}
                </div>
                <h3 className="text-lg font-serif text-white">{item.title}</h3>
                <p className="text-xs uppercase tracking-wider text-gold-400 font-medium">
                  {item.subtitle}
                </p>
                <p className="text-xs text-champagne/75 leading-relaxed font-light">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Ambiance Photo Tour Carousel Cards */}
        <div className="space-y-6">
          <div className="text-center space-y-2">
            <span className="text-[11px] uppercase tracking-widest text-gold-400 font-medium">Spaces</span>
            <h2 className="text-3xl sm:text-4xl font-serif text-white">Tour Our Dining Sanctuaries</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {CAFE_DETAILS.ambianceImages.map((spot, idx) => (
              <div
                key={idx}
                className="group relative rounded-2xl overflow-hidden glass-gold-card p-3"
              >
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden mb-3 border border-gold-500/20">
                  <Image
                    src={spot.url}
                    alt={spot.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-eclat-950/80 via-transparent to-transparent pointer-events-none" />
                </div>
                <div className="p-1">
                  <h4 className="text-sm font-serif text-white group-hover:text-gold-200 transition-colors">
                    {spot.title}
                  </h4>
                  <p className="text-[11px] text-champagne/70 mt-1 line-clamp-2">
                    {spot.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Café Details, Amenities, & Timings Box */}
        <div className="rounded-3xl glass-gold-card p-8 sm:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Left: Timings & Location */}
            <div className="space-y-6">
              <div className="space-y-2">
                <span className="text-[11px] uppercase tracking-widest text-gold-400 font-medium">Visiting Us</span>
                <h3 className="text-2xl font-serif text-white">Opening Hours & Location</h3>
              </div>

              <div className="space-y-3">
                {CAFE_DETAILS.timings.map((t, idx) => (
                  <div key={idx} className="flex justify-between py-2 border-b border-gold-500/15 text-sm">
                    <span className="font-medium text-white">{t.days}</span>
                    <span className="text-gold-300">{t.hours}</span>
                  </div>
                ))}
              </div>

              <div className="space-y-2 text-xs sm:text-sm text-champagne/80">
                <p className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                  <span>{CAFE_DETAILS.location} ({CAFE_DETAILS.landmark})</span>
                </p>
                <p className="flex items-center gap-2.5">
                  <Clock className="w-4 h-4 text-gold-400 shrink-0" />
                  <span>Valet parking available for all guests</span>
                </p>
              </div>
            </div>

            {/* Right: Curated Amenities */}
            <div className="space-y-6">
              <div className="space-y-2">
                <span className="text-[11px] uppercase tracking-widest text-gold-400 font-medium">Guest Services</span>
                <h3 className="text-2xl font-serif text-white">Complimentary Amenities</h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-champagne/80">
                {CAFE_DETAILS.amenities.map((amenity, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 p-3 rounded-xl bg-eclat-900/60 border border-gold-500/15">
                    <Check className="w-4 h-4 text-gold-400 shrink-0" />
                    <span>{amenity}</span>
                  </div>
                ))}
              </div>

              <div className="pt-2">
                <button
                  onClick={() => setIsReservationOpen(true)}
                  className="w-full btn-gold py-3.5 rounded-full text-xs uppercase tracking-[0.2em] font-semibold"
                >
                  Book Your Café Table
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Reservation Modal */}
      <ReservationModal
        isOpen={isReservationOpen}
        onClose={() => setIsReservationOpen(false)}
      />
    </div>
  );
}

