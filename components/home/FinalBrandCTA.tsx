'use client';

import React, { useState } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import ReservationModal from '../layout/ReservationModal';

export default function FinalBrandCTA() {
  const [isReservationOpen, setIsReservationOpen] = useState(false);

  return (
    <>
      <section className="relative py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center overflow-hidden">
        {/* Ambient radial glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-56 bg-gold-500/20 blur-[110px] pointer-events-none" />

        {/* Futuristic Glass Pavilion Card */}
        <div className="relative z-10 glass-futuristic p-8 sm:p-12 md:p-16 rounded-[40px] space-y-5 shadow-2xl border border-gold-400/40">
          {/* Specular top reflection line */}
          <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-gold-200/80 to-transparent pointer-events-none" />

          <span className="inline-flex items-center gap-1.5 text-[11px] uppercase tracking-[0.3em] text-gold-400 font-medium">
            <Sparkles className="w-3.5 h-3.5 text-gold-400" /> An Invitation
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-white tracking-wide">
            More Than Dessert, <span className="italic text-gold-200">A Maison Éclat Experience.</span>
          </h2>

          <p className="text-xs sm:text-sm text-champagne/85 font-light max-w-lg mx-auto leading-relaxed">
            Visit our dessert boutique in New Town, Kolkata and discover an unforgettable world of artisanal confectionery and Parisian elegance.
          </p>

          <div className="pt-4">
            <button
              onClick={() => setIsReservationOpen(true)}
              className="inline-flex items-center gap-2 px-9 py-4 rounded-full btn-gold text-xs uppercase tracking-wider font-semibold shadow-[0_0_30px_rgba(223,166,42,0.5)] hover:shadow-[0_0_45px_rgba(223,166,42,0.8)] hover:scale-105 active:scale-95 transition-all"
            >
              <span>Reserve a Table</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Reservation Modal */}
      <ReservationModal
        isOpen={isReservationOpen}
        onClose={() => setIsReservationOpen(false)}
      />
    </>
  );
}
