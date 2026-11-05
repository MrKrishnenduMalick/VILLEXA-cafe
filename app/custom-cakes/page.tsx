'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Crown, Sparkles, CheckCircle2, Calendar, Phone, Mail, Send } from 'lucide-react';
import { CUSTOM_CAKES } from '@/data/cakes';

export default function CustomCakesPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    eventDate: '',
    guestsCount: '50 - 100 Guests',
    cakeTier: 'Haute Couture Wedding Monument',
    flavourNotes: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen pt-28 sm:pt-36 pb-24 bg-ambient-vignette overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-gold-500/10 blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="inline-flex items-center gap-1.5 text-[11px] uppercase tracking-[0.28em] text-gold-400 font-medium">
            <Crown className="w-3.5 h-3.5" /> Haute Couture Pâtisserie
          </span>
          <h1 className="text-4xl sm:text-6xl font-serif text-white tracking-tight">
            Bespoke Celebration Cakes
          </h1>
          <p className="text-sm sm:text-base text-champagne/85 font-light leading-relaxed">
            Multi-tiered architectural monuments sculpted for grand weddings, intimate anniversaries, and milestones. Each creation is a customized fusion of French entremet layering and edible sculpture.
          </p>
        </div>

        {/* Cake Showcase Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {CUSTOM_CAKES.map((cake) => (
            <div
              key={cake.id}
              className="rounded-3xl glass-gold-card p-6 sm:p-8 flex flex-col justify-between space-y-6"
            >
              <div className="relative aspect-[16/10] sm:aspect-[16/9] rounded-2xl overflow-hidden border border-gold-400/30 shadow-2xl">
                <Image
                  src={cake.image}
                  alt={cake.name}
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 600px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-eclat-950/80 via-transparent to-transparent pointer-events-none" />

                <div className="absolute top-4 left-4 px-3.5 py-1.5 rounded-full bg-eclat-950/90 border border-gold-400/40 text-xs text-gold-300 font-semibold uppercase tracking-wider backdrop-blur-md">
                  Starting at ₹{cake.startingPrice.toLocaleString()}
                </div>
              </div>

              <div className="space-y-3">
                <div>
                  <h3 className="text-2xl font-serif text-white">{cake.name}</h3>
                  <p className="text-xs uppercase tracking-wider text-gold-400 font-medium mt-1">
                    {cake.tagline}
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-champagne/80 leading-relaxed font-light">
                  {cake.description}
                </p>

                {/* Flavours list */}
                <div className="pt-2">
                  <p className="text-[11px] uppercase tracking-wider text-gold-300 font-medium mb-1">
                    Signature Flavour Profiles:
                  </p>
                  <ul className="text-xs text-champagne/75 space-y-1">
                    {cake.flavours.map((flavour, fIdx) => (
                      <li key={fIdx} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-gold-400 shrink-0" />
                        <span>{flavour}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-4 border-t border-gold-500/15 flex items-center justify-between text-xs text-champagne/70">
                <span>Serves: <strong className="text-white">{cake.servings}</strong></span>
                <span className="text-gold-300">{cake.leadTime}</span>
              </div>
            </div>
          ))}
        </div>

        {/* 4-Step Design Journey */}
        <div className="rounded-3xl glass-gold-card p-8 sm:p-12 space-y-8">
          <div className="text-center space-y-2 max-w-xl mx-auto">
            <span className="text-[11px] uppercase tracking-widest text-gold-400 font-medium">The Couture Process</span>
            <h2 className="text-3xl font-serif text-white">How We Craft Your Cake</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-4 rounded-2xl bg-eclat-900/60 border border-gold-500/15 space-y-2">
              <span className="text-2xl font-serif text-gold-400 font-bold">01</span>
              <h4 className="text-base font-serif text-white">Private Tasting</h4>
              <p className="text-xs text-champagne/70 font-light">
                Sample sponge sponges, ganaches, and fruit reductions in our private salon.
              </p>
            </div>
            <div className="p-4 rounded-2xl bg-eclat-900/60 border border-gold-500/15 space-y-2">
              <span className="text-2xl font-serif text-gold-400 font-bold">02</span>
              <h4 className="text-base font-serif text-white">Architectural Sketch</h4>
              <p className="text-xs text-champagne/70 font-light">
                Our pastry chef drafts color palettes, floral sugar petals, and 24k gold leaf placement.
              </p>
            </div>
            <div className="p-4 rounded-2xl bg-eclat-900/60 border border-gold-500/15 space-y-2">
              <span className="text-2xl font-serif text-gold-400 font-bold">03</span>
              <h4 className="text-base font-serif text-white">Hand Sculpting</h4>
              <p className="text-xs text-champagne/70 font-light">
                Baked 24 hours before your event with fresh ingredients and delicate sugarcraft.
              </p>
            </div>
            <div className="p-4 rounded-2xl bg-eclat-900/60 border border-gold-500/15 space-y-2">
              <span className="text-2xl font-serif text-gold-400 font-bold">04</span>
              <h4 className="text-base font-serif text-white">White-Glove Delivery</h4>
              <p className="text-xs text-champagne/70 font-light">
                Chilled climate delivery and on-site assembly at your wedding or gala venue in Kolkata.
              </p>
            </div>
          </div>
        </div>

        {/* Consultation Booking Form */}
        <div className="max-w-3xl mx-auto rounded-3xl glass-gold-card p-6 sm:p-10 shadow-2xl">
          <div className="text-center mb-8 space-y-2">
            <span className="text-[11px] uppercase tracking-[0.25em] text-gold-400 font-medium">Concierge</span>
            <h3 className="text-2xl sm:text-3xl font-serif text-white">Book a Cake Consultation & Tasting</h3>
            <p className="text-xs sm:text-sm text-champagne/75 font-light">
              We accept a limited number of bespoke celebration commissions per week to guarantee perfection.
            </p>
          </div>

          {submitted ? (
            <div className="text-center py-10 space-y-4">
              <div className="w-16 h-16 mx-auto rounded-full bg-gold-500/20 border border-gold-400 flex items-center justify-center text-gold-300">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="text-2xl font-serif text-white">Consultation Request Received</h4>
              <p className="text-xs sm:text-sm text-champagne/80 max-w-md mx-auto">
                Thank you, <span className="text-gold-300 font-medium">{formData.name}</span>. Our lead cake designer will contact you via phone or WhatsApp within 12 hours.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="btn-gold px-6 py-2 rounded-full text-xs uppercase tracking-wider mt-2"
              >
                Submit Another Request
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-champagne/80 mb-1.5">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Ananya Mukherjee"
                    className="w-full bg-eclat-950/80 border border-gold-400/30 rounded-xl px-4 py-2.5 text-sm text-white placeholder-champagne/30 focus:outline-none focus:border-gold-400"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-wider text-champagne/80 mb-1.5">
                    Phone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 98765 43210"
                    className="w-full bg-eclat-950/80 border border-gold-400/30 rounded-xl px-4 py-2.5 text-sm text-white placeholder-champagne/30 focus:outline-none focus:border-gold-400"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-champagne/80 mb-1.5">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@email.com"
                    className="w-full bg-eclat-950/80 border border-gold-400/30 rounded-xl px-3.5 py-2.5 text-sm text-white placeholder-champagne/30 focus:outline-none focus:border-gold-400"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-wider text-champagne/80 mb-1.5">
                    Event Date *
                  </label>
                  <input
                    type="date"
                    required
                    value={formData.eventDate}
                    onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
                    className="w-full bg-eclat-950/80 border border-gold-400/30 rounded-xl px-3.5 py-2 text-sm text-white focus:outline-none focus:border-gold-400"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-wider text-champagne/80 mb-1.5">
                    Estimated Guests
                  </label>
                  <select
                    value={formData.guestsCount}
                    onChange={(e) => setFormData({ ...formData, guestsCount: e.target.value })}
                    className="w-full bg-eclat-950/80 border border-gold-400/30 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-gold-400"
                  >
                    <option value="15 - 30 Guests">15 - 30 Guests</option>
                    <option value="30 - 60 Guests">30 - 60 Guests</option>
                    <option value="60 - 120 Guests">60 - 120 Guests</option>
                    <option value="120 - 250+ Guests">120 - 250+ Guests</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-champagne/80 mb-1.5">
                  Design Inspiration & Flavour Preferences
                </label>
                <textarea
                  rows={3}
                  value={formData.flavourNotes}
                  onChange={(e) => setFormData({ ...formData, flavourNotes: e.target.value })}
                  placeholder="Share your wedding theme colors, dietary preferences (eggless/nut-free), venue, or cake ideas..."
                  className="w-full bg-eclat-950/80 border border-gold-400/30 rounded-xl px-4 py-2.5 text-sm text-white placeholder-champagne/30 focus:outline-none focus:border-gold-400 resize-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full btn-gold py-3.5 rounded-full text-xs uppercase tracking-[0.2em] font-semibold flex items-center justify-center gap-2"
                >
                  <span>Request Tasting & Consultation</span>
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

