'use client';

import React from 'react';
import Link from 'next/link';
import Logo from '../ui/Logo';
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Send, Sparkles } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-eclat-950 via-black to-black border-t border-gold-500/20 text-champagne pt-16 pb-12 overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-28 bg-gold-500/10 blur-[90px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 pb-14 border-b border-gold-500/15">
          {/* Brand Info */}
          <div className="space-y-4">
            <Logo size="md" />
            <p className="text-xs sm:text-sm text-champagne/70 leading-relaxed pt-2">
              Where dessert becomes an unforgettable experience. Handcrafted haute pâtisserie, single-origin Ecuadorian chocolates, and freshly laminated bakes in the heart of New Town, Kolkata.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full border border-gold-400/30 flex items-center justify-center text-gold-300 hover:text-white hover:border-gold-400 hover:bg-gold-500/20 transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full border border-gold-400/30 flex items-center justify-center text-gold-300 hover:text-white hover:border-gold-400 hover:bg-gold-500/20 transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg text-white flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-gold-400" /> Discover
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <Link href="/menu" className="text-champagne/70 hover:text-gold-300 transition-colors">
                  Explore Full Menu
                </Link>
              </li>
              <li>
                <Link href="/signature-collection" className="text-champagne/70 hover:text-gold-300 transition-colors">
                  Signature Collection
                </Link>
              </li>
              <li>
                <Link href="/cafe-experience" className="text-champagne/70 hover:text-gold-300 transition-colors">
                  The Café Experience
                </Link>
              </li>
              <li>
                <Link href="/custom-cakes" className="text-champagne/70 hover:text-gold-300 transition-colors">
                  Bespoke Celebration Cakes
                </Link>
              </li>
              <li>
                <Link href="/our-story" className="text-champagne/70 hover:text-gold-300 transition-colors">
                  Our Sweet Story
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-champagne/70 hover:text-gold-300 transition-colors">
                  Visual Gallery
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-champagne/70 hover:text-gold-300 transition-colors">
                  Contact & Directions
                </Link>
              </li>
            </ul>
          </div>

          {/* Café Timings & Location */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg text-white flex items-center gap-2">
              <Clock className="w-4 h-4 text-gold-400" /> Opening Hours
            </h4>
            <div className="space-y-2 text-xs sm:text-sm text-champagne/70">
              <div className="flex justify-between py-1 border-b border-gold-500/10">
                <span className="font-medium text-white">Tuesday – Friday</span>
                <span className="text-gold-300">11:00 AM – 10:30 PM</span>
              </div>
              <div className="flex justify-between py-1 border-b border-gold-500/10">
                <span className="font-medium text-white">Saturday – Sunday</span>
                <span className="text-gold-300">10:00 AM – 11:30 PM</span>
              </div>
              <div className="flex justify-between py-1 border-b border-gold-500/10">
                <span className="font-medium text-white">Monday</span>
                <span className="text-champagne/50 italic">Private Tastings</span>
              </div>
            </div>

            <div className="pt-2 text-xs text-champagne/70 space-y-1.5">
              <p className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-gold-400 shrink-0 mt-0.5" />
                <span>Action Area II, New Town, Kolkata 700156</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-gold-400 shrink-0" />
                <span>+91 98765 43210</span>
              </p>
            </div>
          </div>

          {/* Newsletter / Éclat Circle */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg text-white">The Éclat Circle</h4>
            <p className="text-xs sm:text-sm text-champagne/70 leading-relaxed">
              Subscribe to receive private invitations to seasonal tasting menus, chef creations, and masterclasses.
            </p>
            <form onSubmit={(e) => { e.preventDefault(); alert('Welcome to the Éclat Circle.'); }} className="space-y-2">
              <div className="relative">
                <input
                  type="email"
                  required
                  placeholder="Enter your email address"
                  className="w-full bg-eclat-900/90 border border-gold-400/30 rounded-full px-4 py-2.5 text-xs text-white placeholder-champagne/40 focus:outline-none focus:border-gold-400 pr-10"
                />
                <button
                  type="submit"
                  aria-label="Subscribe"
                  className="absolute right-1.5 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-gold-400 text-eclat-950 flex items-center justify-center hover:bg-gold-300 transition-colors"
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>
              <p className="text-[10px] text-champagne/50">
                We respect your privacy. No spam, only sweet invitations.
              </p>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-champagne/60 gap-4">
          <p>© 2026 Maison Éclat. All rights reserved. Artisan Dessert Café.</p>
          <p className="tracking-widest uppercase text-[10px] text-gold-400/80">
            Artistry • Flavour • Elegance
          </p>
        </div>
      </div>
    </footer>
  );
}
