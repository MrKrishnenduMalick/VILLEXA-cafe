'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { PRODUCTS, Product } from '@/data/products';

export default function SignaturePreview() {
  // Get exactly the 3 signature creations shown in the reference: The Cherry, Dark Knight, Cream Mania
  const signatureItems: Product[] = [
    PRODUCTS.find((p) => p.id === 'the-cherry') || PRODUCTS[0],
    PRODUCTS.find((p) => p.id === 'dark-knight-brownie') || PRODUCTS[1],
    PRODUCTS.find((p) => p.id === 'cream-mania') || PRODUCTS[2],
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + signatureItems.length) % signatureItems.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % signatureItems.length);
  };

  return (
    <section className="relative py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
      {/* Elegant Header with Horizontal Gold Flourish Lines */}
      <div className="text-center max-w-xl mx-auto mb-8 space-y-1.5">
        <div className="flex items-center justify-center gap-4">
          <span className="h-[1px] w-12 sm:w-20 bg-gradient-to-r from-transparent to-gold-400/60" />
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-white tracking-wide">
            Signature Creations
          </h2>
          <span className="h-[1px] w-12 sm:w-20 bg-gradient-to-l from-transparent to-gold-400/60" />
        </div>
        <p className="text-xs sm:text-sm text-champagne/75 font-light tracking-wide">
          Our most loved and celebrated desserts.
        </p>
      </div>

      {/* Carousel Container with Arrow Navigation */}
      <div className="relative max-w-5xl mx-auto flex items-center">
        {/* Left Arrow */}
        <button
          onClick={handlePrev}
          aria-label="Previous signature dessert"
          className="shrink-0 z-20 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-black/60 border border-gold-400/40 text-gold-300 hover:text-white hover:bg-gold-500/20 hover:scale-105 active:scale-95 transition-all flex items-center justify-center mr-2 sm:mr-4 shadow-lg backdrop-blur-md"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        {/* 3 Compact Glowing Dessert Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 w-full">
          {signatureItems.map((product) => (
            <Link
              key={product.id}
              href="/menu"
              className="group relative rounded-2xl glass-gold-card p-4 sm:p-5 flex flex-col justify-between hover:-translate-y-1.5 transition-all duration-300"
            >
              {/* Image Frame with glowing border */}
              <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden mb-3 border border-gold-500/30 shadow-xl bg-eclat-950/60">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 640px) 100vw, 320px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-eclat-950/70 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Title & Price */}
              <div className="text-center space-y-1">
                <h3 className="text-base sm:text-lg font-serif text-white group-hover:text-gold-200 transition-colors">
                  {product.name}
                </h3>
                <p className="text-sm font-serif text-gold-300 font-medium">
                  ₹{product.price}
                </p>
              </div>
            </Link>
          ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={handleNext}
          aria-label="Next signature dessert"
          className="shrink-0 z-20 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-black/60 border border-gold-400/40 text-gold-300 hover:text-white hover:bg-gold-500/20 hover:scale-105 active:scale-95 transition-all flex items-center justify-center ml-2 sm:mr-0 sm:ml-4 shadow-lg backdrop-blur-md"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </section>
  );
}
