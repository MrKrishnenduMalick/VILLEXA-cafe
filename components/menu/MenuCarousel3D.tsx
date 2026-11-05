'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { Product } from '@/data/products';
import { ChevronLeft, ChevronRight, Heart, MoreHorizontal, Plus, Sparkles, Check } from 'lucide-react';

interface MenuCarousel3DProps {
  products: Product[];
  onSelectProduct: (product: Product) => void;
  favorites: string[];
  onToggleFavorite: (id: string) => void;
}

export default function MenuCarousel3D({
  products,
  onSelectProduct,
  favorites,
  onToggleFavorite,
}: MenuCarousel3DProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [addedItem, setAddedItem] = useState<string | null>(null);
  const touchStartX = useRef<number | null>(null);
  const mouseStartX = useRef<number | null>(null);
  const isDragging = useRef<boolean>(false);

  // If products change (e.g. category switch), reset active index safely
  useEffect(() => {
    setActiveIndex(0);
  }, [products]);

  const count = products.length;
  if (count === 0) return null;

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + count) % count);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % count);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchEndX - touchStartX.current;
    if (diff > 45) {
      handlePrev();
    } else if (diff < -45) {
      handleNext();
    }
    touchStartX.current = null;
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    mouseStartX.current = e.clientX;
    isDragging.current = true;
  };

  const handleMouseUp = (e: React.MouseEvent) => {
    if (!isDragging.current || mouseStartX.current === null) return;
    const diff = e.clientX - mouseStartX.current;
    if (diff > 50) {
      handlePrev();
    } else if (diff < -50) {
      handleNext();
    }
    isDragging.current = false;
    mouseStartX.current = null;
  };

  const handleOrderAdd = (e: React.MouseEvent, id: string) => {
    e.stopPropagation();
    setAddedItem(id);
    setTimeout(() => setAddedItem(null), 2000);
  };

  return (
    <div className="relative w-full max-w-6xl mx-auto py-8 sm:py-12 select-none overflow-hidden sm:overflow-visible">
      {/* 3D Curved Perspective Stage */}
      <div
        className="carousel-stage-3d relative h-[460px] sm:h-[520px] md:h-[560px] flex items-center justify-center"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
      >
        {products.map((item, index) => {
          // Circular relative offset
          let diff = index - activeIndex;
          if (diff > count / 2) diff -= count;
          if (diff < -count / 2) diff += count;

          const isCenter = diff === 0;
          const isFavorited = favorites.includes(item.id);

          // Card styles based on 3D distance
          let translateX = '0%';
          let translateZ = '40px';
          let rotateY = '0deg';
          let scale = 1;
          let opacity = 1;
          let zIndex = 30;
          let pointerEvents = 'auto';

          if (diff === 0) {
            translateX = '0%';
            translateZ = '40px';
            rotateY = '0deg';
            scale = 1;
            opacity = 1;
            zIndex = 30;
          } else if (diff === -1) {
            translateX = '-68%';
            translateZ = '-60px';
            rotateY = '18deg';
            scale = 0.85;
            opacity = 0.78;
            zIndex = 20;
          } else if (diff === 1) {
            translateX = '68%';
            translateZ = '-60px';
            rotateY = '-18deg';
            scale = 0.85;
            opacity = 0.78;
            zIndex = 20;
          } else if (diff <= -2) {
            translateX = '-125%';
            translateZ = '-130px';
            rotateY = '26deg';
            scale = 0.72;
            opacity = 0.4;
            zIndex = 10;
          } else if (diff >= 2) {
            translateX = '125%';
            translateZ = '-130px';
            rotateY = '-26deg';
            scale = 0.72;
            opacity = 0.4;
            zIndex = 10;
          }

          return (
            <div
              key={item.id}
              onClick={() => {
                if (!isCenter) {
                  setActiveIndex(index);
                }
              }}
              style={{
                transform: `translateX(${translateX}) scale(${scale}) translateZ(${translateZ}) rotateY(${rotateY})`,
                opacity,
                zIndex,
                transition: 'all 0.65s cubic-bezier(0.2, 0.8, 0.2, 1)',
              }}
              className={`absolute top-1/2 -translate-y-1/2 w-[280px] sm:w-[350px] md:w-[410px] rounded-3xl cursor-pointer ${
                isCenter
                  ? 'center-card-glow'
                  : 'glass-gold-card hover:opacity-90'
              }`}
            >
              {/* Inner Card Container */}
              <div className="relative p-4 sm:p-6 flex flex-col justify-between h-[390px] sm:h-[450px] md:h-[480px]">
                {/* Top Action Icons */}
                <div className="flex items-center justify-between z-10">
                  {item.isSignature ? (
                    <span className="px-2.5 py-1 rounded-full text-[10px] uppercase font-semibold tracking-wider bg-gold-500/25 border border-gold-400/50 text-gold-300 backdrop-blur-sm">
                      Signature
                    </span>
                  ) : (
                    <div />
                  )}

                  <div className="flex items-center gap-2">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onToggleFavorite(item.id);
                      }}
                      className="w-9 h-9 rounded-full bg-black/50 border border-gold-400/30 flex items-center justify-center text-champagne hover:text-white hover:border-gold-300 transition-all duration-200"
                      aria-label="Add to favourites"
                    >
                      <Heart
                        className={`w-4 h-4 transition-colors ${
                          isFavorited ? 'fill-rose-500 text-rose-500' : ''
                        }`}
                      />
                    </button>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onSelectProduct(item);
                      }}
                      className="w-9 h-9 rounded-full bg-black/50 border border-gold-400/30 flex items-center justify-center text-champagne hover:text-white hover:border-gold-300 transition-all duration-200"
                      aria-label="Product details"
                    >
                      <MoreHorizontal className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Center Dessert Photograph */}
                <div className="relative w-full h-[180px] sm:h-[220px] md:h-[240px] my-auto flex items-center justify-center">
                  {/* Outer warm glow circle behind center dessert */}
                  {isCenter && (
                    <div className="absolute w-44 h-44 rounded-full bg-gold-500/25 blur-3xl pointer-events-none animate-pulse-slow" />
                  )}

                  <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover transition-transform duration-700 hover:scale-105"
                      sizes="(max-width: 640px) 280px, (max-width: 768px) 350px, 410px"
                      priority={isCenter}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-eclat-950/70 via-transparent to-transparent pointer-events-none" />
                  </div>
                </div>

                {/* Bottom Product Details */}
                <div className="mt-auto space-y-2.5 z-10">
                  <div className="flex items-baseline justify-between gap-2">
                    <h3 className="text-xl sm:text-2xl font-serif text-white truncate">
                      {item.name}
                    </h3>
                    <span className="text-xl sm:text-2xl font-serif text-gold-300 font-medium">
                      ₹{item.price}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-champagne/80 line-clamp-2 leading-relaxed">
                    {item.description}
                  </p>

                  {/* Add to Order CTA Button on Center Card */}
                  {isCenter ? (
                    <div className="pt-2">
                      <button
                        onClick={(e) => handleOrderAdd(e, item.id)}
                        className="w-full btn-gold py-2.5 sm:py-3 rounded-full text-xs font-semibold uppercase tracking-[0.2em] flex items-center justify-center gap-2"
                      >
                        {addedItem === item.id ? (
                          <>
                            <Check className="w-4 h-4 text-eclat-950" />
                            <span>Added to Table Order</span>
                          </>
                        ) : (
                          <>
                            <Plus className="w-4 h-4" />
                            <span>Add to Order</span>
                          </>
                        )}
                      </button>
                    </div>
                  ) : (
                    <div className="pt-1">
                      <button
                        onClick={() => onSelectProduct(item)}
                        className="text-[11px] uppercase tracking-wider text-gold-400 hover:text-gold-200 transition-colors flex items-center gap-1"
                      >
                        <span>View Details</span> &rarr;
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}

        {/* Center Card Left / Right Arrow Navigation Buttons */}
        <button
          onClick={handlePrev}
          aria-label="Previous dessert"
          className="absolute left-2 sm:left-6 md:left-12 top-1/2 -translate-y-1/2 z-40 w-11 h-11 rounded-full bg-black/60 border border-gold-400/50 text-gold-300 hover:text-white hover:bg-gold-500/25 hover:scale-110 active:scale-95 transition-all duration-300 flex items-center justify-center shadow-lg shadow-black/80 backdrop-blur-md"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <button
          onClick={handleNext}
          aria-label="Next dessert"
          className="absolute right-2 sm:right-6 md:right-12 top-1/2 -translate-y-1/2 z-40 w-11 h-11 rounded-full bg-black/60 border border-gold-400/50 text-gold-300 hover:text-white hover:bg-gold-500/25 hover:scale-110 active:scale-95 transition-all duration-300 flex items-center justify-center shadow-lg shadow-black/80 backdrop-blur-md"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Pagination Indicator Dots */}
      <div className="flex items-center justify-center gap-2 mt-4 sm:mt-6">
        {products.map((p, idx) => {
          const isActive = idx === activeIndex;
          return (
            <button
              key={p.id}
              onClick={() => setActiveIndex(idx)}
              aria-label={`Slide to ${p.name}`}
              className={`transition-all duration-300 rounded-full ${
                isActive
                  ? 'w-7 h-2 bg-gradient-to-r from-gold-400 to-gold-500 shadow-[0_0_10px_rgba(223,166,42,0.6)]'
                  : 'w-2 h-2 bg-gold-400/30 hover:bg-gold-400/60'
              }`}
            />
          );
        })}
      </div>
    </div>
  );
}
