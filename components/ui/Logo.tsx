import React from 'react';
import Link from 'next/link';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export default function Logo({ className = '', size = 'md' }: LogoProps) {
  const iconSizes = {
    sm: 'w-7 h-7',
    md: 'w-9 h-9',
    lg: 'w-12 h-12',
  };

  const titleSizes = {
    sm: 'text-lg',
    md: 'text-2xl',
    lg: 'text-3xl',
  };

  const subSizes = {
    sm: 'text-[9px] tracking-[0.2em]',
    md: 'text-[11px] tracking-[0.28em]',
    lg: 'text-xs tracking-[0.32em]',
  };

  return (
    <Link href="/" className={`group flex items-center gap-3 select-none ${className}`}>
      {/* Ornate Gold Crown SVG */}
      <div className={`relative flex items-center justify-center text-gold-400 group-hover:text-gold-300 transition-colors duration-300 ${iconSizes[size]}`}>
        <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-[0_0_12px_rgba(223,166,42,0.45)]">
          {/* Base Rim */}
          <path d="M12 48C12 47 20 46 32 46C44 46 52 47 52 48C52 49 44 50 32 50C20 50 12 49 12 48Z" stroke="url(#goldGrad)" strokeWidth="2.5" strokeLinecap="round"/>
          <path d="M16 45L12 25L24 33L32 16L40 33L52 25L48 45H16Z" fill="url(#goldGradFill)" stroke="url(#goldGrad)" strokeWidth="2.2" strokeLinejoin="round"/>
          
          {/* Crown Jewels (Orbs on tips) */}
          <circle cx="12" cy="23" r="2.5" fill="#fbe9b0" stroke="url(#goldGrad)" strokeWidth="1.2"/>
          <circle cx="24" cy="31" r="2" fill="#fbe9b0" stroke="url(#goldGrad)" strokeWidth="1.2"/>
          <circle cx="32" cy="14" r="3.2" fill="#ffffff" stroke="url(#goldGrad)" strokeWidth="1.5" className="animate-pulse"/>
          <circle cx="40" cy="31" r="2" fill="#fbe9b0" stroke="url(#goldGrad)" strokeWidth="1.2"/>
          <circle cx="52" cy="23" r="2.5" fill="#fbe9b0" stroke="url(#goldGrad)" strokeWidth="1.2"/>

          {/* Crown Central Cross / Diamond */}
          <path d="M32 9V14M29.5 11.5H34.5" stroke="url(#goldGrad)" strokeWidth="1.8" strokeLinecap="round"/>

          {/* Arch details */}
          <path d="M22 45C22 38 27 34 32 34C37 34 42 38 42 45" stroke="url(#goldGrad)" strokeWidth="1.5" strokeDasharray="2 2"/>
          
          <defs>
            <linearGradient id="goldGrad" x1="12" y1="9" x2="52" y2="50" gradientUnits="userSpaceOnUse">
              <stop stopColor="#fff2c2" />
              <stop offset="0.45" stopColor="#dfa62a" />
              <stop offset="1" stopColor="#9b6118" />
            </linearGradient>
            <linearGradient id="goldGradFill" x1="32" y1="16" x2="32" y2="45" gradientUnits="userSpaceOnUse">
              <stop stopColor="rgba(223, 166, 42, 0.35)" />
              <stop offset="1" stopColor="rgba(37, 10, 24, 0.7)" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Brand Name Typography */}
      <div className="flex flex-col">
        <span className={`font-serif font-medium tracking-wide text-amber-50 group-hover:text-gold-200 transition-colors duration-300 ${titleSizes[size]}`}>
          Maison Éclat
        </span>
        <span className={`uppercase font-sans font-medium text-gold-400/90 ${subSizes[size]}`}>
          Artisan Dessert Café
        </span>
      </div>
    </Link>
  );
}
