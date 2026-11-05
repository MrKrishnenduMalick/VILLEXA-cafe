'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  Sparkles,
  CheckCircle2,
  ChevronDown,
  HelpCircle,
} from 'lucide-react';
import { CAFE_DETAILS } from '@/data/cafe';

const FAQS = [
  {
    q: 'Do you offer 100% vegetarian and eggless desserts?',
    a: 'Yes, absolutely. Over half of our signature entremets, cookies, and chocolate creations are crafted completely eggless without sacrificing luxury texture or depth.',
  },
  {
    q: 'How far in advance should I order a custom celebration cake?',
    a: 'For signature entremet cakes (serves 6-12), 48 hours notice is sufficient. For multi-tier bespoke wedding cakes and sculptured centerpieces, we recommend 10 to 14 days notice.',
  },
  {
    q: 'Is table reservation required or do you accept walk-ins?',
    a: 'We warmly welcome walk-ins at all times during operating hours! However, for Friday through Sunday evenings, we strongly advise reserving in advance to ensure preferred velvet banquette seating.',
  },
  {
    q: 'Do you offer valet parking?',
    a: 'Yes, complimentary valet parking is provided directly in front of Maison Éclat entrance on Action Area II, New Town.',
  },
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    enquiryType: 'General Inquiry',
    datePreference: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen pt-28 sm:pt-36 pb-24 bg-ambient-vignette overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/4 right-1/2 translate-x-1/2 w-4/5 h-96 bg-gold-500/10 blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="inline-flex items-center gap-1.5 text-[11px] uppercase tracking-[0.28em] text-gold-400 font-medium">
            <Sparkles className="w-3.5 h-3.5" /> Concierge & Reservations
          </span>
          <h1 className="text-4xl sm:text-6xl font-serif text-white tracking-tight">
            Get in Touch
          </h1>
          <p className="text-xs sm:text-sm text-champagne/80 font-light leading-relaxed">
            We’d love to welcome you to our café, curate your celebration, or answer any inquiry with warm hospitality.
          </p>
        </div>

        {/* Contact Info Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 rounded-3xl glass-gold-card space-y-3">
            <div className="w-10 h-10 rounded-xl bg-eclat-850 border border-gold-400/30 flex items-center justify-center text-gold-300">
              <MapPin className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-serif text-white">Our Location</h3>
            <p className="text-xs text-champagne/75 leading-relaxed font-light">
              Plot IIE/12, Action Area II, New Town, Kolkata 700156 (Near Eco Park Gate 4)
            </p>
          </div>

          <div className="p-6 rounded-3xl glass-gold-card space-y-3">
            <div className="w-10 h-10 rounded-xl bg-eclat-850 border border-gold-400/30 flex items-center justify-center text-gold-300">
              <Phone className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-serif text-white">Telephone & WhatsApp</h3>
            <p className="text-xs text-champagne/75 leading-relaxed font-light">
              +91 98765 43210<br />
              +91 98765 43211
            </p>
          </div>

          <div className="p-6 rounded-3xl glass-gold-card space-y-3">
            <div className="w-10 h-10 rounded-xl bg-eclat-850 border border-gold-400/30 flex items-center justify-center text-gold-300">
              <Mail className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-serif text-white">Direct Email</h3>
            <p className="text-xs text-champagne/75 leading-relaxed font-light">
              hello@maisoneclat.in<br />
              concierge@maisoneclat.in
            </p>
          </div>

          <div className="p-6 rounded-3xl glass-gold-card space-y-3">
            <div className="w-10 h-10 rounded-xl bg-eclat-850 border border-gold-400/30 flex items-center justify-center text-gold-300">
              <Clock className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-serif text-white">Visiting Hours</h3>
            <p className="text-xs text-champagne/75 leading-relaxed font-light">
              Tue – Sun: 10:00 AM – 10:00 PM<br />
              Mon: Private Tasting Sessions
            </p>
          </div>
        </div>

        {/* Contact Form & Visual Box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-5 relative aspect-[4/5] rounded-3xl overflow-hidden border border-gold-400/40 shadow-2xl">
            <Image
              src="https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1000&auto=format&fit=crop"
              alt="Maison Éclat Table Experience"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-eclat-950 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-eclat-950/90 border border-gold-400/30 backdrop-blur-md">
              <p className="text-xs italic text-champagne/90 font-serif">
                “Every guest at Maison Éclat is treated to timeless French hospitality and bespoke confection excellence.”
              </p>
            </div>
          </div>

          <div className="lg:col-span-7 rounded-3xl glass-gold-card p-6 sm:p-10 shadow-2xl">
            {submitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 mx-auto rounded-full bg-gold-500/20 border border-gold-400 flex items-center justify-center text-gold-300">
                  <CheckCircle2 className="w-9 h-9" />
                </div>
                <h3 className="text-2xl font-serif text-white">Inquiry Received</h3>
                <p className="text-xs sm:text-sm text-champagne/80 max-w-md mx-auto">
                  Thank you, <span className="text-gold-300 font-medium">{formData.fullName}</span>. Our concierge team has registered your message regarding <span className="text-gold-300 font-medium">{formData.enquiryType}</span> and will reply shortly.
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
                <h3 className="text-2xl font-serif text-white">Send Us a Message</h3>

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
                      placeholder="e.g. Sreya Sengupta"
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
                      placeholder="+91 98765 43210"
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
                      placeholder="name@email.com"
                      className="w-full bg-eclat-950/80 border border-gold-400/30 rounded-xl px-4 py-2.5 text-sm text-white placeholder-champagne/30 focus:outline-none focus:border-gold-400"
                    />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-champagne/80 mb-1.5">
                      Enquiry Nature
                    </label>
                    <select
                      value={formData.enquiryType}
                      onChange={(e) => setFormData({ ...formData, enquiryType: e.target.value })}
                      className="w-full bg-eclat-950/80 border border-gold-400/30 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-gold-400"
                    >
                      <option value="Table Reservation">Table Reservation</option>
                      <option value="Bespoke Celebration Cake">Bespoke Celebration Cake</option>
                      <option value="Private Salon Soirée">Private Salon Soirée</option>
                      <option value="Luxury Corporate Gifting">Luxury Corporate Gifting</option>
                      <option value="Media & Inquiries">Media & Inquiries</option>
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
                    placeholder="Tell us about party size, preferred timings, dietary requests, or questions..."
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

        {/* FAQs */}
        <div className="space-y-6 max-w-3xl mx-auto">
          <div className="text-center space-y-2">
            <span className="text-[11px] uppercase tracking-widest text-gold-400 font-medium flex items-center justify-center gap-1.5">
              <HelpCircle className="w-4 h-4" /> Common Inquiries
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif text-white">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-3">
            {FAQS.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl glass-gold-card overflow-hidden transition-all duration-300"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full p-4 sm:p-5 flex items-center justify-between text-left text-sm sm:text-base font-serif text-white hover:text-gold-200"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-gold-400 shrink-0 transition-transform duration-300 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-champagne/80 leading-relaxed font-light border-t border-gold-500/10">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
