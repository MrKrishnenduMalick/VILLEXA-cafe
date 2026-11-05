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

        {/* 3 Compact 3D Futuristic Glass Dessert Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-7 w-full">
          {signatureItems.map((product) => (
            <Link
              key={product.id}
              href="/menu"
              className="group relative rounded-3xl glass-futuristic p-5 flex flex-col justify-between hover:-translate-y-2.5 transition-all duration-400"
            >
              {/* Top Specular Glass Highlight */}
              <div className="absolute inset-x-0 top-0 h-[1.5px] bg-gradient-to-r from-transparent via-gold-300/80 to-transparent pointer-events-none" />

              {/* Image Frame with glowing border */}
              <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden mb-4 border border-gold-500/35 shadow-2xl bg-eclat-950">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-108 transition-transform duration-700"
                  sizes="(max-width: 640px) 100vw, 320px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-eclat-950/80 via-transparent to-transparent pointer-events-none" />
                
                {/* Micro Signature Badge */}
                <span className="absolute top-2.5 left-2.5 px-2.5 py-0.5 rounded-full text-[9px] uppercase font-semibold tracking-wider bg-black/60 border border-gold-400/50 text-gold-300 backdrop-blur-md">
                  Signature
                </span>
              </div>

              {/* Title & Price */}
              <div className="text-center space-y-1.5">
                <h3 className="text-base sm:text-lg font-serif text-white group-hover:text-gold-200 transition-colors">
                  {product.name}
                </h3>
                <p className="text-sm font-serif text-gold-300 font-medium">
                  ₹{product.price}
                </p>
                <div className="pt-1 flex items-center justify-center gap-1 text-[11px] text-gold-400/80 group-hover:text-gold-200 transition-colors">
                  <span>Explore Creation</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </div>
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
