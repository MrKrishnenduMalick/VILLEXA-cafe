'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Heart, Sparkles, Check, Plus, Minus, Info } from 'lucide-react';
import { Product } from '@/data/products';

interface ProductDetailModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
  favorites?: string[];
  onToggleFavorite?: (id: string) => void;
  isFavorited?: boolean;
}

export default function ProductDetailModal({
  product,
  isOpen,
  onClose,
  onToggleFavorite,
  isFavorited = false,
}: ProductDetailModalProps) {
  const [quantity, setQuantity] = useState(1);
  const [addedNote, setAddedNote] = useState(false);

  if (!product) return null;

  const handleOrder = () => {
    setAddedNote(true);
    setTimeout(() => {
      setAddedNote(false);
    }, 2500);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/85 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 30 }}
            transition={{ type: 'spring', damping: 25, stiffness: 280 }}
            className="relative w-full max-w-2xl bg-gradient-to-b from-eclat-900 via-eclat-950 to-black border border-gold-400/40 rounded-3xl overflow-hidden shadow-2xl shadow-gold-500/15 my-auto"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-black/60 border border-gold-400/30 text-champagne hover:text-white hover:bg-gold-500/20 flex items-center justify-center transition-all duration-200"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="grid grid-cols-1 md:grid-cols-2">
              {/* Image Column */}
              <div className="relative min-h-[260px] md:min-h-[420px] bg-gradient-to-t from-eclat-950 to-eclat-900 overflow-hidden flex items-center justify-center p-6">
                {/* Glow ring */}
                <div className="absolute inset-0 bg-radial-glow opacity-80" />
                <div className="relative w-full h-full max-h-[320px] aspect-square rounded-2xl overflow-hidden border border-gold-400/30 shadow-2xl">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-700 hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 350px"
                  />
                  {/* Subtle vignette over image */}
                  <div className="absolute inset-0 bg-gradient-to-t from-eclat-950/60 via-transparent to-transparent pointer-events-none" />
                </div>
              </div>

              {/* Content Column */}
              <div className="p-6 md:p-8 flex flex-col justify-between space-y-4">
                <div className="space-y-3">
                  {/* Badges row */}
                  <div className="flex flex-wrap items-center gap-1.5">
                    {product.isEggless && (
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] uppercase font-semibold tracking-wider bg-emerald-950/70 border border-emerald-500/40 text-emerald-300">
                        Eggless
                      </span>
                    )}
                    {product.isSignature && (
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] uppercase font-semibold tracking-wider bg-gold-500/20 border border-gold-400/50 text-gold-300">
                        Signature
                      </span>
                    )}
                    {product.isBestseller && (
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] uppercase font-semibold tracking-wider bg-rose-950/70 border border-rose-500/40 text-rose-300">
                        Bestseller
                      </span>
                    )}
                  </div>

                  {/* Title & Price */}
                  <div>
                    <h2 className="text-2xl md:text-3xl font-serif text-white">{product.name}</h2>
                    <p className="text-2xl font-serif text-gold-300 mt-1">₹{product.price}</p>
                  </div>

                  {/* Descriptions */}
                  <p className="text-xs sm:text-sm text-champagne/80 leading-relaxed">
                    {product.longDescription || product.description}
                  </p>

                  {/* Ingredients */}
                  {product.ingredients && product.ingredients.length > 0 && (
                    <div className="pt-2 border-t border-gold-500/15">
                      <p className="text-[11px] uppercase tracking-wider text-gold-400/90 font-medium mb-1 flex items-center gap-1">
                        <Sparkles className="w-3 h-3" /> Key Ingredients
                      </p>
                      <p className="text-xs text-champagne/70">
                        {product.ingredients.join(' • ')}
                      </p>
                    </div>
                  )}

                  {product.serving && (
                    <p className="text-xs text-champagne/60">
                      <span className="text-gold-400">Serving size:</span> {product.serving}
                    </p>
                  )}
                </div>

                {/* Bottom Actions */}
                <div className="space-y-3 pt-3 border-t border-gold-500/15">
                  <div className="flex items-center justify-between gap-3">
                    {/* Quantity counter */}
                    <div className="flex items-center border border-gold-400/30 rounded-full px-3 py-1 bg-eclat-900">
                      <button
                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                        className="text-champagne/70 hover:text-white p-1"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="w-3.5 h-3.5" />
                      </button>
                      <span className="px-3 text-sm font-medium text-white">{quantity}</span>
                      <button
                        onClick={() => setQuantity(quantity + 1)}
                        className="text-champagne/70 hover:text-white p-1"
                        aria-label="Increase quantity"
                      >
                        <Plus className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    {/* Wishlist / Favorite Button */}
                    <button
                      onClick={() => onToggleFavorite && onToggleFavorite(product.id)}
                      className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full border text-xs font-medium transition-all ${
                        isFavorited
                          ? 'border-rose-400/60 bg-rose-500/20 text-rose-300'
                          : 'border-gold-400/30 bg-eclat-900 text-champagne/80 hover:text-white hover:border-gold-400'
                      }`}
                    >
                      <Heart className={`w-3.5 h-3.5 ${isFavorited ? 'fill-rose-400 text-rose-400' : ''}`} />
                      <span>{isFavorited ? 'Favourited' : 'Add to Wishlist'}</span>
                    </button>
                  </div>

                  {/* Order / Add to Favourites Button */}
                  <button
                    onClick={handleOrder}
                    className="w-full btn-gold py-3 rounded-full text-xs font-semibold uppercase tracking-[0.2em] flex items-center justify-center gap-2"
                  >
                    {addedNote ? (
                      <>
                        <Check className="w-4 h-4 text-emerald-950" />
                        <span>Added to Table Order ({quantity})</span>
                      </>
                    ) : (
                      <>
                        <Sparkles className="w-4 h-4" />
                        <span>Add to Table Order • ₹{product.price * quantity}</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
