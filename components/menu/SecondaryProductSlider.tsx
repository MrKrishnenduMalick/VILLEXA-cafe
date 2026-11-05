'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { Product } from '@/data/products';
import { ChevronLeft, ChevronRight, Heart } from 'lucide-react';

interface SecondaryProductSliderProps {
  products: Product[];
  categoryTitle?: string;
  onSelectProduct: (product: Product) => void;
  favorites: string[];
  onToggleFavorite: (id: string) => void;
}

export default function SecondaryProductSlider({
  products,
  categoryTitle = 'Tarts',
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
      {/* Header Matching Reference Image 1 & 2 */}
      <div className="flex items-center justify-between mb-6 pb-2 border-b border-gold-500/15">
        <div className="flex items-baseline gap-3">
          <h3 className="text-xl sm:text-2xl font-serif text-white tracking-wide">
            More from {categoryTitle}
          </h3>
        </div>

        <div className="flex items-center gap-2">
          {/* Arrow Controls */}
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
              className="group relative flex-none w-[200px] sm:w-[230px] md:w-[250px] rounded-2xl glass-gold-card p-3 sm:p-4 cursor-pointer hover:-translate-y-1.5 transition-all duration-300"
            >
              {/* Product Photo */}
              <div className="relative w-full h-[140px] sm:h-[160px] rounded-xl overflow-hidden mb-3 border border-gold-500/20 shadow-md bg-eclat-950/70">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 200px, 250px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-eclat-950/70 via-transparent to-transparent pointer-events-none" />

                {/* Heart wishlist button */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onToggleFavorite(item.id);
                  }}
                  className="absolute top-2 right-2 w-7 h-7 rounded-full bg-black/60 border border-gold-400/30 flex items-center justify-center text-champagne hover:text-white hover:bg-gold-500/20 transition-all duration-200"
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
                <p className="text-[11px] sm:text-xs text-champagne/70 line-clamp-1 font-light">
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
