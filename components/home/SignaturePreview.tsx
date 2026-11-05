'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Sparkles, Heart } from 'lucide-react';
import { PRODUCTS, Product } from '@/data/products';
import ProductDetailModal from '../menu/ProductDetailModal';

export default function SignaturePreview() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [favorites, setFavorites] = useState<string[]>([]);

  // Get signatures: The Cherry, Dark Knight (Brownie/Cookie), Cream Mania
  const signatures = PRODUCTS.filter((p) => p.isSignature).slice(0, 3);

  const toggleFavorite = (id: string) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-80 bg-eclat-700/15 blur-[120px] pointer-events-none" />

      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
        <span className="inline-flex items-center gap-1.5 text-[11px] sm:text-xs uppercase tracking-[0.28em] text-gold-400 font-medium">
          <Sparkles className="w-3.5 h-3.5" /> Iconic Masterpieces
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-white">
          Signature Collection
        </h2>
        <p className="text-xs sm:text-sm text-champagne/80 font-light leading-relaxed">
          Our most loved and celebrated creations, refined to absolute perfection.
        </p>
      </div>

      {/* 3 Prominent Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
        {signatures.map((product) => {
          const isFavorited = favorites.includes(product.id);
          return (
            <div
              key={product.id}
              onClick={() => setSelectedProduct(product)}
              className="group relative rounded-3xl glass-gold-card p-6 flex flex-col justify-between cursor-pointer hover:-translate-y-2 transition-all duration-400"
            >
              {/* Top Row: Badge + Wishlist */}
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 rounded-full text-[10px] uppercase font-semibold tracking-wider bg-gold-500/20 border border-gold-400/50 text-gold-300">
                  Signature
                </span>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleFavorite(product.id);
                  }}
                  className="w-8 h-8 rounded-full bg-black/50 border border-gold-400/30 flex items-center justify-center text-champagne hover:text-white hover:bg-gold-500/20 transition-all duration-200"
                  aria-label="Save to favourites"
                >
                  <Heart
                    className={`w-4 h-4 ${
                      isFavorited ? 'fill-rose-500 text-rose-500' : ''
                    }`}
                  />
                </button>
              </div>

              {/* Product Photograph with halo */}
              <div className="relative w-full aspect-square rounded-2xl overflow-hidden my-4 border border-gold-500/25 shadow-xl">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 380px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-eclat-950/75 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Product Info */}
              <div className="space-y-2 pt-2">
                <div className="flex items-baseline justify-between">
                  <h3 className="text-xl font-serif text-white group-hover:text-gold-200 transition-colors">
                    {product.name}
                  </h3>
                  <span className="text-xl font-serif text-gold-300 font-medium">
                    ₹{product.price}
                  </span>
                </div>
                <p className="text-xs text-champagne/75 line-clamp-2 leading-relaxed">
                  {product.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Bottom CTA Button */}
      <div className="text-center mt-12">
        <Link
          href="/signature-collection"
          className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full btn-outline-gold text-xs sm:text-sm uppercase tracking-wider font-medium"
        >
          <span>View Full Collection</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      {/* Product Detail Modal */}
      <ProductDetailModal
        product={selectedProduct}
        isOpen={!!selectedProduct}
        onClose={() => setSelectedProduct(null)}
        favorites={favorites}
        onToggleFavorite={toggleFavorite}
        isFavorited={selectedProduct ? favorites.includes(selectedProduct.id) : false}
      />
    </section>
  );
}

