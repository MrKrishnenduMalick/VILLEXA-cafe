'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Heart, Trash2, ArrowRight, Sparkles, Calendar } from 'lucide-react';
import { useWishlist } from '@/context/WishlistContext';
import { Product } from '@/data/products';
import ReservationModal from '@/components/layout/ReservationModal';

interface WishlistDrawerProps {
  onSelectProduct?: (product: Product) => void;
}

export default function WishlistDrawer({ onSelectProduct }: WishlistDrawerProps) {
  const { isWishlistOpen, closeWishlist, wishlistProducts, toggleWishlist, clearWishlist, wishlistCount } = useWishlist();
  const [isReservationOpen, setIsReservationOpen] = useState(false);

  const handleBookTable = () => {
    closeWishlist();
    setIsReservationOpen(true);
  };

  return (
    <>
      <AnimatePresence>
        {isWishlistOpen && (
          <div className="fixed inset-0 z-50 overflow-hidden">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeWishlist}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
            />

            {/* Slide-over Panel */}
            <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
              <motion.div
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ type: 'spring', damping: 30, stiffness: 300 }}
                className="w-screen max-w-md bg-gradient-to-b from-eclat-950 via-eclat-900 to-black border-l border-gold-400/30 shadow-2xl flex flex-col justify-between"
              >
                {/* Header */}
                <div className="p-5 sm:p-6 border-b border-gold-500/20 bg-eclat-950/80 backdrop-blur-md">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-full bg-gold-500/20 border border-gold-400/40 flex items-center justify-center text-gold-300">
                        <Heart className="w-4 h-4 fill-gold-400 text-gold-400" />
                      </div>
                      <div>
                        <h2 className="text-xl font-serif text-white tracking-wide">
                          Your Wishlist
                        </h2>
                        <p className="text-[11px] text-champagne/70 font-light">
                          {wishlistCount} {wishlistCount === 1 ? 'creation' : 'creations'} saved for your visit
                        </p>
                      </div>
                    </div>

                    <button
                      onClick={closeWishlist}
                      className="w-8 h-8 rounded-full bg-black/60 border border-gold-400/30 text-champagne hover:text-white hover:bg-gold-500/20 flex items-center justify-center transition-all"
                      aria-label="Close wishlist"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Body Content */}
                <div className="flex-1 overflow-y-auto p-5 sm:p-6 space-y-4 no-scrollbar">
                  {wishlistProducts.length === 0 ? (
                    <div className="py-16 text-center space-y-4">
                      <div className="w-16 h-16 rounded-full bg-eclat-900 border border-gold-400/20 mx-auto flex items-center justify-center text-gold-400/40">
                        <Heart className="w-8 h-8" />
                      </div>
                      <div className="space-y-1">
                        <p className="text-base font-serif text-white">Your wishlist is empty</p>
                        <p className="text-xs text-champagne/70 max-w-xs mx-auto leading-relaxed">
                          Explore our artisan menu and heart your favorite desserts to save them for your café reservation.
                        </p>
                      </div>
                      <Link
                        href="/menu"
                        onClick={closeWishlist}
                        className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full btn-gold text-xs uppercase tracking-wider font-semibold"
                      >
                        <span>Explore Menu</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  ) : (
                    <div className="space-y-3">
                      {wishlistProducts.map((item) => (
                        <div
                          key={item.id}
                          className="group relative flex items-center gap-3.5 p-3 rounded-2xl glass-gold-card hover:border-gold-400/60 transition-all duration-300"
                        >
                          {/* Dessert Image Thumbnail */}
                          <div
                            onClick={() => {
                              if (onSelectProduct) {
                                onSelectProduct(item);
                                closeWishlist();
                              }
                            }}
                            className="relative w-16 h-16 rounded-xl overflow-hidden shrink-0 border border-gold-400/30 cursor-pointer bg-eclat-950"
                          >
                            <Image
                              src={item.image}
                              alt={item.name}
                              fill
                              className="object-cover group-hover:scale-105 transition-transform"
                              sizes="64px"
                            />
                          </div>

                          {/* Info */}
                          <div
                            onClick={() => {
                              if (onSelectProduct) {
                                onSelectProduct(item);
                                closeWishlist();
                              }
                            }}
                            className="flex-1 min-w-0 cursor-pointer"
                          >
                            <div className="flex items-baseline justify-between gap-1">
                              <h3 className="text-sm font-serif text-white truncate group-hover:text-gold-200 transition-colors">
                                {item.name}
                              </h3>
                              <span className="text-sm font-serif text-gold-300 font-medium shrink-0">
                                ₹{item.price}
                              </span>
                            </div>
                            <p className="text-[10px] text-champagne/70 line-clamp-1 mt-0.5">
                              {item.description}
                            </p>
                            <span className="inline-block mt-1 text-[9px] uppercase tracking-wider text-gold-400/80 bg-gold-500/10 px-2 py-0.5 rounded-md">
                              {item.category.replace('-', ' ')}
                            </span>
                          </div>

                          {/* Remove button */}
                          <button
                            onClick={() => toggleWishlist(item.id)}
                            className="w-7 h-7 rounded-full bg-black/40 border border-rose-500/30 text-rose-300 hover:text-white hover:bg-rose-500/30 flex items-center justify-center transition-all shrink-0"
                            title="Remove from wishlist"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Footer Actions */}
                {wishlistProducts.length > 0 && (
                  <div className="p-5 sm:p-6 border-t border-gold-500/20 bg-eclat-950/95 space-y-3">
                    <div className="flex items-center justify-between text-xs text-champagne/80">
                      <span>Saved Creations</span>
                      <span className="font-serif text-gold-300 font-semibold">{wishlistCount} items</span>
                    </div>

                    {/* Book Table Button */}
                    <button
                      onClick={handleBookTable}
                      className="w-full btn-gold py-3 rounded-full text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg"
                    >
                      <Calendar className="w-4 h-4" />
                      <span>Reserve a Table to Taste</span>
                    </button>

                    <div className="flex items-center justify-between pt-1">
                      <button
                        onClick={clearWishlist}
                        className="text-[11px] text-champagne/60 hover:text-rose-400 transition-colors"
                      >
                        Clear All
                      </button>
                      <span className="text-[10px] text-champagne/50 italic">
                        Available at café tasting
                      </span>
                    </div>
                  </div>
                )}
              </motion.div>
            </div>
          </div>
        )}
      </AnimatePresence>

      {/* Reservation Modal Triggered from Wishlist */}
      <ReservationModal
        isOpen={isReservationOpen}
        onClose={() => setIsReservationOpen(false)}
      />
    </>
  );
}

