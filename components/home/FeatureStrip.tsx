'use client';

import React from 'react';
import Link from 'next/link';
import { CakeSlice, Gem, Crown, Coffee, ArrowUpRight } from 'lucide-react';

const FEATURES = [
  {
    title: 'Artisan Desserts',
    subtitle: 'Haute Pâtisserie & Tarts',
    icon: <CakeSlice className="w-5 h-5 text-gold-400" />,
    href: '/menu',
  },
  {
    title: 'Fine Chocolates',
    subtitle: 'Single Origin Ecuador & Jewels',
    icon: <Gem className="w-5 h-5 text-gold-400" />,
    href: '/menu',
  },
  {
    title: 'Custom Cakes',
    subtitle: 'Bespoke Celebration Monuments',
    icon: <Crown className="w-5 h-5 text-gold-400" />,
    href: '/custom-cakes',
  },
  {
    title: 'Café Experience',
    subtitle: 'Velvet Banquettes & Chandeliers',
    icon: <Coffee className="w-5 h-5 text-gold-400" />,
    href: '/cafe-experience',
  },
];

export default function FeatureStrip() {
  return (
    <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 sm:-mt-8 mb-8">
      <div className="rounded-2xl border border-gold-400/30 bg-gradient-to-r from-eclat-950 via-eclat-900 to-eclat-950 p-2 sm:p-3 shadow-2xl shadow-black/80 backdrop-blur-xl">
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-y lg:divide-y-0 lg:divide-x divide-gold-500/20">
          {FEATURES.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="group p-4 sm:p-5 flex items-center justify-between hover:bg-gold-500/10 rounded-xl transition-all duration-300"
            >
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-eclat-800/80 border border-gold-400/30 flex items-center justify-center group-hover:scale-110 group-hover:border-gold-400 transition-all duration-300 shadow-md">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-sm sm:text-base font-serif text-white group-hover:text-gold-200 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-[11px] text-champagne/70 line-clamp-1">
                    {item.subtitle}
                  </p>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-gold-400/60 group-hover:text-gold-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform shrink-0" />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
