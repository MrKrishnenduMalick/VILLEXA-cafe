'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, Clock, Users, Sparkles, CheckCircle2 } from 'lucide-react';

interface ReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ReservationModal({ isOpen, onClose }: ReservationModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    date: '',
    time: '18:00',
    guests: '2 Guests',
    occasion: 'Celebration',
    specialRequests: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      // Auto close after 3 seconds if desired or keep confirmation
    }, 3000);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative w-full max-w-xl overflow-hidden rounded-2xl border border-gold-400/40 bg-gradient-to-b from-eclat-900 via-eclat-950 to-black p-6 sm:p-8 shadow-2xl shadow-gold-500/10"
          >
            {/* Ornate corner glows */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-eclat-700/20 rounded-full blur-3xl pointer-events-none" />

            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-5 right-5 text-champagne/70 hover:text-gold-300 transition-colors p-2 rounded-full hover:bg-white/5"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {submitted ? (
              <div className="text-center py-10 space-y-5">
                <div className="w-16 h-16 mx-auto rounded-full bg-gold-500/20 border border-gold-400/60 flex items-center justify-center text-gold-300">
                  <CheckCircle2 className="w-9 h-9" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-serif text-white">Table Reserved</h3>
                <p className="text-champagne/80 text-sm max-w-md mx-auto leading-relaxed">
                  Thank you, <span className="text-gold-300 font-medium">{formData.name}</span>. Your reservation for{' '}
                  <span className="text-gold-300 font-medium">{formData.guests}</span> on{' '}
                  <span className="text-gold-300 font-medium">{formData.date || 'your selected date'}</span> at{' '}
                  <span className="text-gold-300 font-medium">{formData.time}</span> has been confirmed. Our concierge will contact you via WhatsApp or SMS.
                </p>
                <div className="pt-4">
                  <button
                    onClick={handleReset}
                    className="btn-gold px-8 py-2.5 rounded-full text-sm uppercase tracking-wider"
                  >
                    Done
                  </button>
                </div>
              </div>
            ) : (
              <div>
                <div className="text-center mb-6">
                  <span className="inline-flex items-center gap-1.5 text-[11px] uppercase tracking-[0.25em] text-gold-400 font-medium">
                    <Sparkles className="w-3.5 h-3.5" />
                    Maison Éclat Concierge
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-serif text-white mt-1">Reserve a Table</h2>
                  <p className="text-xs sm:text-sm text-champagne/70 mt-1">
                    An intimate table amidst velvet burgundy banquettes & crystal chandeliers.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-champagne/80 mb-1.5">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Madame / Monsieur"
                        className="w-full bg-eclat-850/80 border border-gold-400/30 rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-champagne/40 focus:outline-none focus:border-gold-400 focus:ring-1 focus:ring-gold-400 transition"
                      />
                    </div>
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-champagne/80 mb-1.5">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="9999-999-999"
                        className="w-full bg-eclat-850/80 border border-gold-400/30 rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-champagne/40 focus:outline-none focus:border-gold-400 focus:ring-1 focus:ring-gold-400 transition"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-champagne/80 mb-1.5 flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-gold-400" /> Date *
                      </label>
                      <input
                        type="date"
                        required
                        value={formData.date}
                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                        className="w-full bg-eclat-850/80 border border-gold-400/30 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-gold-400"
                      />
                    </div>
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-champagne/80 mb-1.5 flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-gold-400" /> Time *
                      </label>
                      <select
                        value={formData.time}
                        onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                        className="w-full bg-eclat-850/80 border border-gold-400/30 rounded-lg px-3 py-2.5 text-sm text-white focus:outline-none focus:border-gold-400"
                      >
                        <option value="12:00" className="bg-eclat-950">12:00 PM (Lunch)</option>
                        <option value="14:00" className="bg-eclat-950">02:00 PM (Afternoon Tea)</option>
                        <option value="16:30" className="bg-eclat-950">04:30 PM (High Tea)</option>
                        <option value="18:00" className="bg-eclat-950">06:00 PM (Evening)</option>
                        <option value="19:30" className="bg-eclat-950">07:30 PM (Dinner)</option>
                        <option value="21:00" className="bg-eclat-950">09:00 PM (Late Dessert)</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-champagne/80 mb-1.5 flex items-center gap-1">
                        <Users className="w-3.5 h-3.5 text-gold-400" /> Party Size
                      </label>
                      <select
                        value={formData.guests}
                        onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                        className="w-full bg-eclat-850/80 border border-gold-400/30 rounded-lg px-3 py-2.5 text-sm text-white focus:outline-none focus:border-gold-400"
                      >
                        <option value="1 Guest" className="bg-eclat-950">1 Guest</option>
                        <option value="2 Guests" className="bg-eclat-950">2 Guests (Couple)</option>
                        <option value="4 Guests" className="bg-eclat-950">4 Guests (Salon Booth)</option>
                        <option value="6 Guests" className="bg-eclat-950">6 Guests</option>
                        <option value="8+ Guests" className="bg-eclat-950">8+ Guests (Private Room)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-champagne/80 mb-1.5">
                      Special Requests or Celebration Notes
                    </label>
                    <textarea
                      rows={2}
                      value={formData.specialRequests}
                      onChange={(e) => setFormData({ ...formData, specialRequests: e.target.value })}
                      placeholder="e.g. Birthday anniversary, preferred booth, eggless dessert preference..."
                      className="w-full bg-eclat-850/80 border border-gold-400/30 rounded-lg px-3.5 py-2 text-sm text-white placeholder-champagne/40 focus:outline-none focus:border-gold-400 focus:ring-1 focus:ring-gold-400 transition resize-none"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full btn-gold py-3 rounded-full text-xs font-semibold tracking-[0.2em] uppercase flex items-center justify-center gap-2"
                    >
                      Confirm Reservation <Sparkles className="w-4 h-4" />
                    </button>
                  </div>
                </form>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

