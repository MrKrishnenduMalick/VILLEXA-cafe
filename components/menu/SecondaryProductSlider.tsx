'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { Product } from '@/data/products';
import { ChevronLeft, ChevronRight, Heart } from 'lucide-react';
import { useWishlist } from '@/context/WishlistContext';

interface SecondaryProductSliderProps {
  products: Product[];
  categoryTitle?: string;
  onSelectProduct: (product: Product) => void;
  favorites?: string[];
  onToggleFavorite?: (id: string) => void;
}

export default function SecondaryProductSlider({
  products,
  categoryTitle = 'Tarts',
  onSelectProduct,
}: SecondaryProductSliderProps) {
  const { isInWishlist, toggleWishlist } = useWishlist();
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
    <div className="relative w-full max-w-7xl mx-auto py-8">
      {/* Header Matching Reference Image 1 & 2 */}
      <div className="flex items-center justify-between mb-5 pb-2.5 border-b border-gold-500/20">
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
          const isSaved = isInWishlist(item.id);
          return (
            <div
              key={item.id}
              onClick={() => onSelectProduct(item)}
              className="group relative flex-none w-[200px] sm:w-[230px] md:w-[245px] rounded-2xl glass-gold-card p-3 sm:p-4 cursor-pointer hover:-translate-y-1.5 transition-all duration-300"
            >
              {/* Product Photo */}
              <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden mb-3 border border-gold-500/25 bg-eclat-950 shadow-md">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 640px) 200px, 245px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-eclat-950/70 via-transparent to-transparent pointer-events-none" />

                {/* Wishlist Heart on top of image */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleWishlist(item.id);
                  }}
                  className={`absolute top-2 right-2 w-7 h-7 rounded-full border flex items-center justify-center transition-all ${
                    isSaved
                      ? 'bg-rose-500/30 border-rose-500 text-rose-400'
                      : 'bg-black/60 border-gold-400/30 text-champagne hover:text-white hover:border-gold-300'
                  }`}
                  title={isSaved ? 'In Wishlist' : 'Add to Wishlist'}
                >
                  <Heart className={`w-3.5 h-3.5 ${isSaved ? 'fill-rose-500 text-rose-500' : ''}`} />
                </button>
              </div>

              {/* Title & Price (NO add to cart, only show the price) */}
              <div className="space-y-1">
                <div className="flex items-baseline justify-between gap-1">
                  <h4 className="text-sm sm:text-base font-serif text-white truncate group-hover:text-gold-200 transition-colors">
                    {item.name}
                  </h4>
                  <span className="text-sm sm:text-base font-serif text-gold-300 font-medium shrink-0">
                    ₹{item.price}
                  </span>
                </div>
                <p className="text-[11px] text-champagne/75 line-clamp-1 font-light">
                  {item.description}
                </p>
                <div className="pt-1.5 flex items-center justify-between text-[10px] text-gold-400/80">
                  <span>Click for details</span>
                  <span className="text-gold-300">→</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
