'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { Product } from '@/data/products';
import { ChevronLeft, ChevronRight, Heart, MoreHorizontal, Sparkles, Check, Plus } from 'lucide-react';

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
  const [dragOffset, setDragOffset] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [addedItem, setAddedItem] = useState<string | null>(null);

  const startXRef = useRef<number>(0);
  const currentDragRef = useRef<number>(0);
  const hasDraggedRef = useRef<boolean>(false);

  // When products array updates (category changes), smoothly reset to first product
  useEffect(() => {
    setActiveIndex(0);
    setDragOffset(0);
  }, [products]);

  const count = products.length;
  if (count === 0) return null;

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + count) % count);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % count);
  };

  // --- Mouse Drag Handling ---
  const handleMouseDown = (e: React.MouseEvent) => {
    startXRef.current = e.clientX;
    currentDragRef.current = 0;
    hasDraggedRef.current = false;
    setIsDragging(true);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    const diff = e.clientX - startXRef.current;
    currentDragRef.current = diff;
    if (Math.abs(diff) > 8) {
      hasDraggedRef.current = true;
    }
    // Dampen drag offset for realistic tactile resistance
    setDragOffset(diff * 0.4);
  };

  const handleMouseUp = () => {
    if (!isDragging) return;
    setIsDragging(false);
    const finalDiff = currentDragRef.current;
    setDragOffset(0);

    if (finalDiff > 40) {
      handlePrev();
    } else if (finalDiff < -40) {
      handleNext();
    }
  };

  const handleMouseLeave = () => {
    if (isDragging) {
      handleMouseUp();
    }
  };

  // --- Touch Swipe Handling ---
  const handleTouchStart = (e: React.TouchEvent) => {
    startXRef.current = e.touches[0].clientX;
    currentDragRef.current = 0;
    hasDraggedRef.current = false;
    setIsDragging(true);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    const diff = e.touches[0].clientX - startXRef.current;
    currentDragRef.current = diff;
    if (Math.abs(diff) > 8) {
      hasDraggedRef.current = true;
    }
    setDragOffset(diff * 0.4);
  };

  const handleTouchEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);
    const finalDiff = currentDragRef.current;
    setDragOffset(0);

    if (finalDiff > 35) {
      handlePrev();
    } else if (finalDiff < -35) {
      handleNext();
    }
  };

  const handleCardClick = (index: number, e: React.MouseEvent) => {
    // If a real drag occurred, suppress click to prevent accidental activation
    if (hasDraggedRef.current) {
      e.preventDefault();
      e.stopPropagation();
      return;
    }

    if (index !== activeIndex) {
      setActiveIndex(index);
    }
  };

  const handleOrderAdd = (e: React.MouseEvent, id: string) => {
    e.stopPropagation();
    setAddedItem(id);
    setTimeout(() => setAddedItem(null), 2200);
  };

  return (
    <div className="relative w-full max-w-7xl mx-auto py-4 sm:py-8 select-none">
      {/* 3D Perspective Stage */}
      <div
        className="carousel-stage-3d relative h-[470px] sm:h-[520px] md:h-[570px] flex items-center justify-center cursor-grab active:cursor-grabbing overflow-visible"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {products.map((item, index) => {
          // Circular distance relative to activeIndex
          let diff = index - activeIndex;
          if (diff > count / 2) diff -= count;
          if (diff < -count / 2) diff += count;

          const isCenter = diff === 0;
          const isFavorited = favorites.includes(item.id);

          // Calculate 3D transforms based on offset
          let translateX = '0%';
          let translateZ = '60px';
          let rotateY = '0deg';
          let scale = 1.04;
          let opacity = 1;
          let zIndex = 40;
          let visibility: 'visible' | 'hidden' = 'visible';

          // Base positions for curved 3D arrangement
          if (diff === 0) {
            translateX = `${dragOffset}px`;
            translateZ = '60px';
            rotateY = `${dragOffset * 0.05}deg`;
            scale = 1.04;
            opacity = 1;
            zIndex = 40;
          } else if (diff === -1) {
            translateX = `calc(-62% + ${dragOffset * 0.8}px)`;
            translateZ = '-40px';
            rotateY = '18deg';
            scale = 0.86;
            opacity = 0.85;
            zIndex = 30;
          } else if (diff === 1) {
            translateX = `calc(62% + ${dragOffset * 0.8}px)`;
            translateZ = '-40px';
            rotateY = '-18deg';
            scale = 0.86;
            opacity = 0.85;
            zIndex = 30;
          } else if (diff === -2) {
            translateX = `calc(-114% + ${dragOffset * 0.6}px)`;
            translateZ = '-110px';
            rotateY = '26deg';
            scale = 0.74;
            opacity = 0.62;
            zIndex = 20;
          } else if (diff === 2) {
            translateX = `calc(114% + ${dragOffset * 0.6}px)`;
            translateZ = '-110px';
            rotateY = '-26deg';
            scale = 0.74;
            opacity = 0.62;
            zIndex = 20;
          } else if (diff === -3) {
            translateX = `calc(-158% + ${dragOffset * 0.4}px)`;
            translateZ = '-180px';
            rotateY = '34deg';
            scale = 0.64;
            opacity = 0.35;
            zIndex = 10;
          } else if (diff === 3) {
            translateX = `calc(158% + ${dragOffset * 0.4}px)`;
            translateZ = '-180px';
            rotateY = '-34deg';
            scale = 0.64;
            opacity = 0.35;
            zIndex = 10;
          } else {
            // Cards further away are hidden from view
            visibility = 'hidden';
            opacity = 0;
            zIndex = 1;
            translateX = diff < 0 ? '-200%' : '200%';
          }

          return (
            <div
              key={item.id}
              onClick={(e) => handleCardClick(index, e)}
              style={{
                transform: `translateX(${translateX}) scale(${scale}) translateZ(${translateZ}) rotateY(${rotateY})`,
                opacity,
                zIndex,
                visibility,
                transition: isDragging ? 'none' : 'all 0.6s cubic-bezier(0.2, 0.8, 0.25, 1)',
              }}
              className={`absolute top-1/2 -translate-y-1/2 w-[280px] sm:w-[350px] md:w-[400px] rounded-3xl transition-shadow ${
                isCenter
                  ? 'center-card-glow cursor-default'
                  : 'glass-gold-card hover:opacity-95 cursor-pointer'
              }`}
            >
              <div className="relative p-5 sm:p-6 flex flex-col justify-between h-[420px] sm:h-[470px] md:h-[500px]">
                {/* Top Controls on Center Card */}
                <div className="flex items-center justify-between z-10">
                  {item.isSignature ? (
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] uppercase font-semibold tracking-wider bg-gold-500/25 border border-gold-400/50 text-gold-300 backdrop-blur-sm">
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
                      className="w-8 h-8 rounded-full bg-black/50 border border-gold-400/30 flex items-center justify-center text-champagne hover:text-white hover:border-gold-300 transition-all duration-200"
                      aria-label="Add to favourites"
                    >
                      <Heart
                        className={`w-3.5 h-3.5 transition-colors ${
                          isFavorited ? 'fill-rose-500 text-rose-500' : ''
                        }`}
                      />
                    </button>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onSelectProduct(item);
                      }}
                      className="w-8 h-8 rounded-full bg-black/50 border border-gold-400/30 flex items-center justify-center text-champagne hover:text-white hover:border-gold-300 transition-all duration-200"
                      aria-label="View product details"
                    >
                      <MoreHorizontal className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                {/* Central Card Internal Arrow Buttons (matching Reference Image 2) */}
                {isCenter && (
                  <>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handlePrev();
                      }}
                      aria-label="Previous product"
                      className="absolute left-2.5 top-1/2 -translate-y-1/2 z-30 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-black/60 border border-gold-400/50 text-gold-300 hover:text-white hover:bg-gold-500/30 hover:scale-105 active:scale-95 transition-all flex items-center justify-center shadow-lg backdrop-blur-md"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleNext();
                      }}
                      aria-label="Next product"
                      className="absolute right-2.5 top-1/2 -translate-y-1/2 z-30 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-black/60 border border-gold-400/50 text-gold-300 hover:text-white hover:bg-gold-500/30 hover:scale-105 active:scale-95 transition-all flex items-center justify-center shadow-lg backdrop-blur-md"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </>
                )}

                {/* Center Dessert Photograph */}
                <div className="relative w-full h-[180px] sm:h-[220px] md:h-[240px] my-auto flex items-center justify-center">
                  {/* Subtle warm amber halo behind center dessert */}
                  {isCenter && (
                    <div className="absolute w-48 h-48 rounded-full bg-gold-500/20 blur-3xl pointer-events-none animate-pulse-slow" />
                  )}

                  <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl bg-eclat-950/70">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover transition-transform duration-700 hover:scale-105"
                      sizes="(max-width: 640px) 280px, (max-width: 768px) 350px, 400px"
                      priority={isCenter}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-eclat-950/75 via-transparent to-transparent pointer-events-none" />
                  </div>
                </div>

                {/* Product Name, Price & Description */}
                <div className="mt-auto space-y-2 z-10">
                  <div className="flex items-baseline justify-between gap-2">
                    <h3 className="text-lg sm:text-xl md:text-2xl font-serif text-white truncate">
                      {item.name}
                    </h3>
                    <span className="text-lg sm:text-xl md:text-2xl font-serif text-gold-300 font-medium shrink-0">
                      ₹{item.price}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-champagne/80 line-clamp-2 leading-relaxed font-light">
                    {item.description}
                  </p>

                  {/* Center Card Action Button */}
                  {isCenter ? (
                    <div className="pt-2">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onToggleFavorite(item.id);
                        }}
                        className="w-full btn-gold py-2.5 rounded-full text-xs font-semibold uppercase tracking-[0.18em] flex items-center justify-center gap-2"
                      >
                        <Heart className={`w-3.5 h-3.5 ${isFavorited ? 'fill-current' : ''}`} />
                        <span>{isFavorited ? 'In Favourites' : 'Add to Favourites'}</span>
                      </button>
                    </div>
                  ) : (
                    <div className="pt-1 text-center">
                      <span className="text-[11px] text-gold-400/80 group-hover:text-gold-200 transition-colors uppercase tracking-wider">
                        Click to View
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}

        {/* Global Outer Carousel Arrow Buttons */}
        <button
          onClick={handlePrev}
          aria-label="Previous dessert"
          className="absolute left-1 sm:left-4 md:left-8 top-1/2 -translate-y-1/2 z-50 w-11 h-11 rounded-full bg-black/75 border border-gold-400/50 text-gold-300 hover:text-white hover:bg-gold-500/25 hover:scale-110 active:scale-95 transition-all flex items-center justify-center shadow-xl shadow-black/80 backdrop-blur-md"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <button
          onClick={handleNext}
          aria-label="Next dessert"
          className="absolute right-1 sm:right-4 md:right-8 top-1/2 -translate-y-1/2 z-50 w-11 h-11 rounded-full bg-black/75 border border-gold-400/50 text-gold-300 hover:text-white hover:bg-gold-500/25 hover:scale-110 active:scale-95 transition-all flex items-center justify-center shadow-xl shadow-black/80 backdrop-blur-md"
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
