'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Heart, Sparkles, Calendar, ArrowRight } from 'lucide-react';
import { Product } from '@/data/products';
import { useWishlist } from '@/context/WishlistContext';
import ReservationModal from '@/components/layout/ReservationModal';

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
}: ProductDetailModalProps) {
  const { isInWishlist, toggleWishlist } = useWishlist();
  const [isReservationOpen, setIsReservationOpen] = useState(false);

  if (!product) return null;

  const isSaved = isInWishlist(product.id);

  const handleBookTable = () => {
    onClose();
    setIsReservationOpen(true);
  };

  return (
    <>
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
              className="relative w-full max-w-2xl bg-gradient-to-b from-eclat-900 via-eclat-950 to-black border border-gold-400/40 rounded-3xl overflow-hidden shadow-2xl shadow-gold-500/15 my-auto z-10"
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
                <div className="relative min-h-[260px] md:min-h-[400px] bg-gradient-to-t from-eclat-950 to-eclat-900 overflow-hidden flex items-center justify-center p-6">
                  {/* Glow ring */}
                  <div className="absolute inset-0 bg-radial-glow opacity-80" />
                  <div className="relative w-full h-full max-h-[300px] aspect-square rounded-2xl overflow-hidden border border-gold-400/30 shadow-2xl bg-eclat-950">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover transition-transform duration-700 hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 350px"
                    />
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

                    {/* Title & Price (NO add to cart, only show the price) */}
                    <div>
                      <h2 className="text-2xl md:text-3xl font-serif text-white">{product.name}</h2>
                      <p className="text-2xl font-serif text-gold-300 mt-1 font-medium">₹{product.price}</p>
                    </div>

                    {/* Descriptions */}
                    <p className="text-xs sm:text-sm text-champagne/80 leading-relaxed font-light">
                      {product.longDescription || product.description}
                    </p>

                    {/* Ingredients */}
                    {product.ingredients && product.ingredients.length > 0 && (
                      <div className="pt-2 border-t border-gold-500/15">
                        <p className="text-[11px] uppercase tracking-wider text-gold-400/90 font-medium mb-1 flex items-center gap-1">
                          <Sparkles className="w-3 h-3 text-gold-400" /> Key Ingredients
                        </p>
                        <p className="text-xs text-champagne/70 font-light">
                          {product.ingredients.join(' • ')}
                        </p>
                      </div>
                    )}

                    {product.serving && (
                      <p className="text-xs text-champagne/60 font-light">
                        <span className="text-gold-400">Serving size:</span> {product.serving}
                      </p>
                    )}
                  </div>

                  {/* Actions: Wishlist + Reserve a Table (ZERO Cart/Order) */}
                  <div className="space-y-2.5 pt-4 border-t border-gold-500/20">
                    {/* Wishlist Button */}
                    <button
                      onClick={() => toggleWishlist(product.id)}
                      className={`w-full py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 transition-all border ${
                        isSaved
                          ? 'bg-rose-950/60 border-rose-500/60 text-rose-300 hover:bg-rose-900/60'
                          : 'bg-eclat-900/80 border-gold-400/40 text-gold-200 hover:bg-gold-500/20 hover:text-white'
                      }`}
                    >
                      <Heart className={`w-4 h-4 ${isSaved ? 'fill-rose-500 text-rose-500' : ''}`} />
                      <span>{isSaved ? 'In Your Wishlist' : 'Add to Wishlist'}</span>
                    </button>

                    {/* Book a Table */}
                    <button
                      onClick={handleBookTable}
                      className="w-full btn-gold py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg"
                    >
                      <Calendar className="w-4 h-4" />
                      <span>Reserve a Table to Taste</span>
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Reservation Modal Triggered from Product View */}
      <ReservationModal
        isOpen={isReservationOpen}
        onClose={() => setIsReservationOpen(false)}
      />
    </>
  );
}
