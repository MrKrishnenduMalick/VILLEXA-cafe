'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Logo from '../ui/Logo';
import ReservationModal from './ReservationModal';
import { Menu as MenuIcon, X, ArrowRight, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const NAV_LINKS = [
  { name: 'Home', href: '/' },
  { name: 'Our Story', href: '/our-story' },
  { name: 'Menu', href: '/menu' },
  { name: 'Signature Collection', href: '/signature-collection' },
  { name: 'Custom Cakes', href: '/custom-cakes' },
  { name: 'Café Experience', href: '/cafe-experience' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isReservationOpen, setIsReservationOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-eclat-950/90 backdrop-blur-md border-b border-gold-500/20 py-3 shadow-2xl shadow-black/80'
            : 'bg-gradient-to-b from-black/80 via-eclat-950/60 to-transparent py-4 sm:py-5 border-b border-gold-500/10'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            {/* Logo */}
            <Logo size={isScrolled ? 'sm' : 'md'} />

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-1 xl:space-x-1.5">
              {NAV_LINKS.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="relative px-2.5 xl:px-3.5 py-1.5 text-xs xl:text-[13px] font-medium tracking-wide transition-colors duration-200"
                  >
                    {isActive ? (
                      <motion.span
                        layoutId="navPill"
                        className="absolute inset-0 rounded-full bg-gradient-to-r from-gold-500/25 via-gold-400/20 to-gold-500/25 border border-gold-400/50 shadow-[0_0_15px_rgba(223,166,42,0.35)]"
                        transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                      />
                    ) : null}
                    <span
                      className={`relative z-10 transition-colors ${
                        isActive
                          ? 'text-gold-200 font-semibold'
                          : 'text-champagne/80 hover:text-white'
                      }`}
                    >
                      {link.name}
                    </span>
                  </Link>
                );
              })}
            </nav>

            {/* Desktop Right CTA: Reserve a Table */}
            <div className="hidden sm:flex items-center gap-3">
              <button
                onClick={() => setIsReservationOpen(true)}
                className="group relative inline-flex items-center gap-2 px-4 xl:px-5 py-2 rounded-full text-xs font-semibold uppercase tracking-wider bg-gradient-to-r from-gold-400 via-gold-300 to-gold-500 text-eclat-950 shadow-[0_0_20px_rgba(223,166,42,0.35)] hover:shadow-[0_0_25px_rgba(223,166,42,0.6)] hover:scale-105 active:scale-95 transition-all duration-300"
              >
                <span>Reserve a Table</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Mobile / Tablet Menu Button */}
            <div className="flex lg:hidden items-center gap-2">
              <button
                onClick={() => setIsReservationOpen(true)}
                className="sm:hidden px-3 py-1.5 rounded-full text-[11px] font-semibold uppercase tracking-wider bg-gold-400 text-eclat-950"
              >
                Reserve
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg text-gold-300 hover:text-white hover:bg-white/5 border border-gold-400/20"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden bg-eclat-950/98 backdrop-blur-xl border-b border-gold-500/20 px-6 py-6 shadow-2xl"
            >
              <div className="flex flex-col space-y-3">
                {NAV_LINKS.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`flex items-center justify-between py-2.5 px-4 rounded-xl text-sm font-medium tracking-wide transition-all ${
                        isActive
                          ? 'bg-gradient-to-r from-gold-500/20 to-transparent border border-gold-400/40 text-gold-200 font-semibold'
                          : 'text-champagne/80 hover:text-white hover:bg-white/5'
                      }`}
                    >
                      <span>{link.name}</span>
                      {isActive && <Sparkles className="w-4 h-4 text-gold-400" />}
                    </Link>
                  );
                })}

                <div className="pt-4 border-t border-gold-500/20 flex flex-col gap-3">
                  <button
                    onClick={() => {
                      setMobileMenuOpen(false);
                      setIsReservationOpen(true);
                    }}
                    className="w-full btn-gold py-3 rounded-full text-xs font-semibold uppercase tracking-widest flex items-center justify-center gap-2"
                  >
                    <span>Reserve a Table</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <p className="text-center text-[11px] text-champagne/60 tracking-wider">
                    New Town, Kolkata • +91 98765 43210
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Global Reservation Modal */}
      <ReservationModal
        isOpen={isReservationOpen}
        onClose={() => setIsReservationOpen(false)}
      />
    </>
  );
}

