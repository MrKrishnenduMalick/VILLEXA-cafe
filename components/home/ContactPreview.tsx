'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { MapPin, Phone, Mail, Clock, Send, Sparkles, CheckCircle2 } from 'lucide-react';
import { CAFE_DETAILS } from '@/data/cafe';

export default function ContactPreview() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    enquiryType: 'Table Reservation',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
        {/* Left Side: Contact Information & Ambiance Preview */}
        <div className="lg:col-span-5 space-y-6">
          <div className="space-y-2">
            <span className="inline-flex items-center gap-1.5 text-[11px] uppercase tracking-[0.28em] text-gold-400 font-medium">
              <Sparkles className="w-3.5 h-3.5" /> Hospitality
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif text-white">Get in Touch</h2>
            <p className="text-xs sm:text-sm text-champagne/80 font-light leading-relaxed">
              We’d love to hear from you. For bespoke celebration cakes, private masterclasses, or table reservations, please get in touch with our concierge.
            </p>
          </div>

          {/* Quick Info Badges */}
          <div className="space-y-3.5 pt-2 text-xs sm:text-sm">
            <div className="flex items-start gap-3 p-3 rounded-xl bg-eclat-900/60 border border-gold-500/20">
              <MapPin className="w-5 h-5 text-gold-400 shrink-0 mt-0.5" />
              <div>
                <p className="font-medium text-white">{CAFE_DETAILS.location}</p>
                <p className="text-xs text-champagne/70 mt-0.5">{CAFE_DETAILS.landmark}</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 rounded-xl bg-eclat-900/60 border border-gold-500/20">
              <Phone className="w-5 h-5 text-gold-400 shrink-0" />
              <div>
                <a href={`tel:${CAFE_DETAILS.phone.replace(/\s+/g, '')}`} className="font-medium text-white hover:text-gold-300 transition-colors">
                  {CAFE_DETAILS.phone}
                </a>
                <p className="text-[11px] text-champagne/60">Direct concierge & WhatsApp</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 rounded-xl bg-eclat-900/60 border border-gold-500/20">
              <Mail className="w-5 h-5 text-gold-400 shrink-0" />
              <div>
                <a href={`mailto:${CAFE_DETAILS.email}`} className="font-medium text-white hover:text-gold-300 transition-colors">
                  {CAFE_DETAILS.email}
                </a>
                <p className="text-[11px] text-champagne/60">Inquiries answered within 2 hours</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 rounded-xl bg-eclat-900/60 border border-gold-500/20">
              <Clock className="w-5 h-5 text-gold-400 shrink-0" />
              <div>
                <p className="font-medium text-white">Tue – Sun, 10 AM – 10 PM</p>
                <p className="text-[11px] text-champagne/60">Monday reserved for private tastings</p>
              </div>
            </div>
          </div>

          {/* Luxury Lounge Image */}
          <div className="relative aspect-[16/8] rounded-2xl overflow-hidden border border-gold-400/30 shadow-lg">
            <Image
              src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=800&auto=format&fit=crop"
              alt="Maison Éclat Lounge Atmosphere"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 500px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-eclat-950/80 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-3 left-3 text-[11px] text-gold-200">
              The Intimate Tasting Alcove
            </div>
          </div>
        </div>

        {/* Right Side: Interactive Enquiry Form */}
        <div className="lg:col-span-7">
          <div className="rounded-3xl glass-gold-card p-6 sm:p-8 md:p-10 shadow-2xl">
            {submitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 mx-auto rounded-full bg-gold-500/20 border border-gold-400 flex items-center justify-center text-gold-300">
                  <CheckCircle2 className="w-9 h-9" />
                </div>
                <h3 className="text-2xl font-serif text-white">Message Delivered</h3>
                <p className="text-champagne/80 text-sm max-w-md mx-auto">
                  Thank you, <span className="text-gold-300 font-medium">{formData.fullName}</span>. Our concierge team has received your inquiry regarding <span className="text-gold-300 font-medium">{formData.enquiryType}</span> and will respond promptly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="btn-gold px-6 py-2 rounded-full text-xs uppercase tracking-wider mt-4"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                <h3 className="text-xl sm:text-2xl font-serif text-white mb-2">Send an Inquiry</h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-champagne/80 mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="e.g. Rohini Sen"
                      className="w-full bg-eclat-950/80 border border-gold-400/30 rounded-xl px-4 py-2.5 text-sm text-white placeholder-champagne/30 focus:outline-none focus:border-gold-400"
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
                      className="w-full bg-eclat-950/80 border border-gold-400/30 rounded-xl px-4 py-2.5 text-sm text-white placeholder-champagne/30 focus:outline-none focus:border-gold-400"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-champagne/80 mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@domain.com"
                      className="w-full bg-eclat-950/80 border border-gold-400/30 rounded-xl px-4 py-2.5 text-sm text-white placeholder-champagne/30 focus:outline-none focus:border-gold-400"
                    />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-champagne/80 mb-1.5">
                      Enquiry Type
                    </label>
                    <select
                      value={formData.enquiryType}
                      onChange={(e) => setFormData({ ...formData, enquiryType: e.target.value })}
                      className="w-full bg-eclat-950/80 border border-gold-400/30 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-gold-400"
                    >
                      <option value="Table Reservation">Table Reservation</option>
                      <option value="Bespoke Celebration Cake">Bespoke Celebration Cake</option>
                      <option value="Private Tasting / Salon Soirée">Private Tasting / Salon Soirée</option>
                      <option value="Corporate Gifting Coffrets">Corporate Gifting Coffrets</option>
                      <option value="Media & Collaborations">Media & Collaborations</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-champagne/80 mb-1.5">
                    Your Message *
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about your celebration, date preferences, dietary requests, or questions..."
                    className="w-full bg-eclat-950/80 border border-gold-400/30 rounded-xl px-4 py-2.5 text-sm text-white placeholder-champagne/30 focus:outline-none focus:border-gold-400 resize-none"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full btn-gold py-3.5 rounded-full text-xs uppercase tracking-[0.2em] font-semibold flex items-center justify-center gap-2"
                  >
                    <span>Send Message</span>
                    <Send className="w-4 h-4" />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

