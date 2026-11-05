'use client';

import React, { useState } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import ReservationModal from '../layout/ReservationModal';

export default function FinalBrandCTA() {
  const [isReservationOpen, setIsReservationOpen] = useState(false);

  return (
    <>
      <section className="relative py-14 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center overflow-hidden">
        {/* Ambient radial glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-40 bg-gold-500/15 blur-[90px] pointer-events-none" />

        <div className="relative z-10 space-y-4">
          <span className="inline-flex items-center gap-1.5 text-[11px] uppercase tracking-[0.28em] text-gold-400 font-medium">
            <Sparkles className="w-3.5 h-3.5" /> An Invitation
          </span>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-serif text-white tracking-wide">
            More Than Dessert, <span className="italic text-gold-200">A Maison Éclat Experience.</span>
          </h2>
          <p className="text-xs sm:text-sm text-champagne/80 font-light max-w-lg mx-auto">
            Visit our dessert boutique in New Town, Kolkata and discover an unforgettable world of artisanal confectionery.
          </p>

          <div className="pt-3">
            <button
              onClick={() => setIsReservationOpen(true)}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full btn-gold text-xs uppercase tracking-wider font-semibold shadow-lg shadow-gold-500/20 hover:scale-105 active:scale-95 transition-all"
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
