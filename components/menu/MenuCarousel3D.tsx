'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { Product } from '@/data/products';
import { ChevronLeft, ChevronRight, Heart, MoreHorizontal, Sparkles } from 'lucide-react';

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
    setDragOffset(diff * 0.45);
  };

  const handleMouseUp = () => {
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
    setDragOffset(diff * 0.45);
  };

  const handleTouchEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);
    const finalDiff = currentDragRef.current;
    setDragOffset(0);

    if (finalDiff > 30) {
      handlePrev();
    } else if (finalDiff < -30) {
      handleNext();
    }
  };

  const handleCardClick = (index: number, e: React.MouseEvent) => {
    // Suppress accidental click if user was dragging
    if (hasDraggedRef.current) {
      e.preventDefault();
      e.stopPropagation();
      return;
    }

    if (index !== activeIndex) {
      setActiveIndex(index);
    }
  };

  return (
    <div className="relative w-full max-w-7xl mx-auto py-1 select-none">
      {/* 3D Perspective Stage: Reduced height and zero extra margin to fit in initial viewport */}
      <div
        className="carousel-stage-3d relative h-[400px] sm:h-[430px] md:h-[450px] flex items-center justify-center cursor-grab active:cursor-grabbing overflow-visible"
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

          // Calculate 3D transforms based on curved perspective arc
          let translateX = '0%';
          let translateZ = '60px';
          let rotateY = '0deg';
          let scale = 1.04;
          let opacity = 1;
          let zIndex = 40;
          let visibility: 'visible' | 'hidden' = 'visible';

          if (diff === 0) {
            translateX = `${dragOffset}px`;
            translateZ = '60px';
            rotateY = `${dragOffset * 0.04}deg`;
            scale = 1.04;
            opacity = 1;
            zIndex = 40;
          } else if (diff === -1) {
            translateX = `calc(-58% + ${dragOffset * 0.8}px)`;
            translateZ = '-35px';
            rotateY = '16deg';
            scale = 0.88;
            opacity = 0.88;
            zIndex = 30;
          } else if (diff === 1) {
            translateX = `calc(58% + ${dragOffset * 0.8}px)`;
            translateZ = '-35px';
            rotateY = '-16deg';
            scale = 0.88;
            opacity = 0.88;
            zIndex = 30;
          } else if (diff === -2) {
            translateX = `calc(-108% + ${dragOffset * 0.6}px)`;
            translateZ = '-95px';
            rotateY = '24deg';
            scale = 0.76;
            opacity = 0.65;
            zIndex = 20;
          } else if (diff === 2) {
            translateX = `calc(108% + ${dragOffset * 0.6}px)`;
            translateZ = '-95px';
            rotateY = '-24deg';
            scale = 0.76;
            opacity = 0.65;
            zIndex = 20;
          } else if (diff === -3) {
            translateX = `calc(-150% + ${dragOffset * 0.4}px)`;
            translateZ = '-150px';
            rotateY = '30deg';
            scale = 0.66;
            opacity = 0.40;
            zIndex = 10;
          } else if (diff === 3) {
            translateX = `calc(150% + ${dragOffset * 0.4}px)`;
            translateZ = '-150px';
            rotateY = '-30deg';
            scale = 0.66;
            opacity = 0.40;
            zIndex = 10;
          } else {
            // Hidden from viewport
            visibility = 'hidden';
            opacity = 0;
            zIndex = 1;
            translateX = diff < 0 ? '-190%' : '190%';
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
                transition: isDragging ? 'none' : 'all 0.55s cubic-bezier(0.2, 0.8, 0.25, 1)',
              }}
              className={`absolute top-1/2 -translate-y-1/2 w-[270px] sm:w-[310px] md:w-[345px] rounded-3xl transition-shadow ${
                isCenter
                  ? 'center-card-glow cursor-default'
                  : 'glass-gold-card hover:opacity-95 cursor-pointer'
              }`}
            >
              <div className="relative p-4 sm:p-5 flex flex-col justify-between h-[370px] sm:h-[400px] md:h-[420px]">
                {/* Top Controls on Center Card */}
                <div className="flex items-center justify-between z-10">
                  {item.isSignature ? (
                    <span className="px-2.5 py-0.5 rounded-full text-[9px] uppercase font-semibold tracking-wider bg-gold-500/25 border border-gold-400/50 text-gold-300 backdrop-blur-sm">
                      Signature
                    </span>
                  ) : (
                    <div />
                  )}

                  <div className="flex items-center gap-1.5">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onToggleFavorite(item.id);
                      }}
                      className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-black/50 border border-gold-400/30 flex items-center justify-center text-champagne hover:text-white hover:border-gold-300 transition-all duration-200"
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
                      className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-black/50 border border-gold-400/30 flex items-center justify-center text-champagne hover:text-white hover:border-gold-300 transition-all duration-200"
                      aria-label="View product details"
                    >
                      <MoreHorizontal className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                {/* Central Card Internal Arrow Buttons (Vertically Aligned with Carousel) */}
                {isCenter && (
                  <>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handlePrev();
                      }}
                      aria-label="Previous product"
                      className="absolute left-2 top-1/2 -translate-y-1/2 z-30 w-8 h-8 rounded-full bg-black/70 border border-gold-400/50 text-gold-300 hover:text-white hover:bg-gold-500/30 hover:scale-105 active:scale-95 transition-all flex items-center justify-center shadow-lg backdrop-blur-md"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleNext();
                      }}
                      aria-label="Next product"
                      className="absolute right-2 top-1/2 -translate-y-1/2 z-30 w-8 h-8 rounded-full bg-black/70 border border-gold-400/50 text-gold-300 hover:text-white hover:bg-gold-500/30 hover:scale-105 active:scale-95 transition-all flex items-center justify-center shadow-lg backdrop-blur-md"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </>
                )}

                {/* Center Dessert Photograph */}
                <div className="relative w-full h-[155px] sm:h-[180px] md:h-[195px] my-auto flex items-center justify-center">
                  {/* Subtle warm amber halo behind center dessert */}
                  {isCenter && (
                    <div className="absolute w-40 h-40 rounded-full bg-gold-500/20 blur-2xl pointer-events-none animate-pulse-slow" />
                  )}

                  <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl bg-eclat-950/70">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover transition-transform duration-700 hover:scale-105"
                      sizes="(max-width: 640px) 270px, (max-width: 768px) 310px, 345px"
                      priority={isCenter}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-eclat-950/70 via-transparent to-transparent pointer-events-none" />
                  </div>
                </div>

                {/* Product Name, Price & Description */}
                <div className="mt-auto space-y-1.5 z-10">
                  <div className="flex items-baseline justify-between gap-2">
                    <h3 className="text-base sm:text-lg md:text-xl font-serif text-white truncate">
                      {item.name}
                    </h3>
                    <span className="text-base sm:text-lg md:text-xl font-serif text-gold-300 font-medium shrink-0">
                      ₹{item.price}
                    </span>
                  </div>

                  <p className="text-[11px] sm:text-xs text-champagne/80 line-clamp-2 leading-relaxed font-light">
                    {item.description}
                  </p>

                  {/* Center Card Action Button */}
                  {isCenter ? (
                    <div className="pt-1.5">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onToggleFavorite(item.id);
                        }}
                        className="w-full btn-gold py-2 rounded-full text-xs font-semibold uppercase tracking-[0.16em] flex items-center justify-center gap-1.5 shadow-md"
                      >
                        <Heart className={`w-3.5 h-3.5 ${isFavorited ? 'fill-current' : ''}`} />
                        <span>{isFavorited ? 'In Favourites' : 'Add to Favourites'}</span>
                      </button>
                    </div>
                  ) : (
                    <div className="pt-0.5 text-center">
                      <span className="text-[10px] text-gold-400/80 group-hover:text-gold-200 transition-colors uppercase tracking-wider font-medium">
                        Click to Select
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
          className="absolute left-1 sm:left-4 md:left-6 top-1/2 -translate-y-1/2 z-50 w-10 h-10 rounded-full bg-black/75 border border-gold-400/50 text-gold-300 hover:text-white hover:bg-gold-500/25 hover:scale-105 active:scale-95 transition-all flex items-center justify-center shadow-xl shadow-black/80 backdrop-blur-md"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <button
          onClick={handleNext}
          aria-label="Next dessert"
          className="absolute right-1 sm:right-4 md:right-6 top-1/2 -translate-y-1/2 z-50 w-10 h-10 rounded-full bg-black/75 border border-gold-400/50 text-gold-300 hover:text-white hover:bg-gold-500/25 hover:scale-105 active:scale-95 transition-all flex items-center justify-center shadow-xl shadow-black/80 backdrop-blur-md"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Pagination Indicator Dots */}
      <div className="flex items-center justify-center gap-1.5 mt-2 sm:mt-3">
        {products.map((p, idx) => {
          const isActive = idx === activeIndex;
          return (
            <button
              key={p.id}
              onClick={() => setActiveIndex(idx)}
              aria-label={`Slide to ${p.name}`}
              className={`transition-all duration-300 rounded-full ${
                isActive
                  ? 'w-6 h-1.5 bg-gradient-to-r from-gold-400 to-gold-500 shadow-[0_0_8px_rgba(223,166,42,0.6)]'
                  : 'w-1.5 h-1.5 bg-gold-400/30 hover:bg-gold-400/60'
              }`}
            />
          );
        })}
      </div>
    </div>
  );
}
