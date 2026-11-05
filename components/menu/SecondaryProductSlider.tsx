'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { Product } from '@/data/products';
import { ChevronLeft, ChevronRight, Sparkles, Heart } from 'lucide-react';

interface SecondaryProductSliderProps {
  products: Product[];
  categoryTitle?: string;
  onSelectProduct: (product: Product) => void;
  favorites: string[];
  onToggleFavorite: (id: string) => void;
}

export default function SecondaryProductSlider({
  products,
  categoryTitle = 'Featured Creations',
  onSelectProduct,
  favorites,
  onToggleFavorite,
}: SecondaryProductSliderProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = clientWidth * 0.75;
      scrollRef.current.scrollTo({
        left: direction === 'left' ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  if (!products || products.length === 0) return null;

  return (
    <div className="relative w-full max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
      {/* Header with Title & Navigation Controls */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <span className="text-[11px] uppercase tracking-[0.25em] text-gold-400 font-medium flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5" /> Curated Selection
          </span>
          <h3 className="text-xl sm:text-2xl font-serif text-white mt-1 capitalize">
            {categoryTitle}
          </h3>
        </div>

        {/* Arrow Controls */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => scroll('left')}
            aria-label="Scroll left"
            className="w-9 h-9 rounded-full bg-eclat-900 border border-gold-400/40 text-gold-300 hover:text-white hover:bg-gold-500/20 hover:scale-105 active:scale-95 transition-all flex items-center justify-center shadow-lg"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => scroll('right')}
            aria-label="Scroll right"
            className="w-9 h-9 rounded-full bg-eclat-900 border border-gold-400/40 text-gold-300 hover:text-white hover:bg-gold-500/20 hover:scale-105 active:scale-95 transition-all flex items-center justify-center shadow-lg"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Horizontal Scroll Track */}
      <div
        ref={scrollRef}
        className="flex gap-4 sm:gap-6 overflow-x-auto pb-4 pt-1 no-scrollbar scroll-smooth"
      >
        {products.map((item) => {
          const isFavorited = favorites.includes(item.id);
          return (
            <div
              key={item.id}
              onClick={() => onSelectProduct(item)}
              className="group relative flex-none w-[220px] sm:w-[250px] md:w-[270px] rounded-2xl glass-gold-card p-3 sm:p-4 cursor-pointer hover:-translate-y-1.5 transition-all duration-300"
            >
              {/* Product Photo */}
              <div className="relative w-full h-[150px] sm:h-[170px] rounded-xl overflow-hidden mb-3 border border-gold-500/20 shadow-md">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 220px, 270px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-eclat-950/70 via-transparent to-transparent pointer-events-none" />

                {/* Heart wishlist button */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onToggleFavorite(item.id);
                  }}
                  className="absolute top-2.5 right-2.5 w-7 h-7 rounded-full bg-black/60 border border-gold-400/30 flex items-center justify-center text-champagne hover:text-white hover:bg-gold-500/20 transition-all duration-200"
                  aria-label="Save to favourites"
                >
                  <Heart
                    className={`w-3.5 h-3.5 transition-colors ${
                      isFavorited ? 'fill-rose-500 text-rose-500' : ''
                    }`}
                  />
                </button>
              </div>

              {/* Product Info */}
              <div className="space-y-1">
                <div className="flex items-start justify-between gap-2">
                  <h4 className="text-sm sm:text-base font-serif text-white group-hover:text-gold-200 transition-colors truncate">
                    {item.name}
                  </h4>
                  <span className="text-sm font-serif text-gold-300 font-medium shrink-0">
                    ₹{item.price}
                  </span>
                </div>
                <p className="text-[11px] sm:text-xs text-champagne/70 line-clamp-1">
                  {item.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
