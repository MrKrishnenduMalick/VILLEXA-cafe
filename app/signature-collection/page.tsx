'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Sparkles, Heart, Eye } from 'lucide-react';
import { PRODUCTS, Product } from '@/data/products';
import ProductDetailModal from '@/components/menu/ProductDetailModal';
import { useWishlist } from '@/context/WishlistContext';

export default function SignatureCollectionPage() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [activeFilter, setActiveFilter] = useState<'All' | 'Eggless' | 'Tarts' | 'Chocolates' | 'Bakes'>('All');
  const { isInWishlist, toggleWishlist } = useWishlist();

  const signatureProducts = PRODUCTS.filter((p) => p.isSignature);

  const filtered = signatureProducts.filter((p) => {
    if (activeFilter === 'All') return true;
    if (activeFilter === 'Eggless') return p.isEggless;
    if (activeFilter === 'Tarts') return p.category === 'tarts';
    if (activeFilter === 'Chocolates')
      return (
        p.category === 'ecuador-collection' ||
        p.category === 'bon-bons' ||
        p.category === 'chocolate-bars'
      );
    if (activeFilter === 'Bakes')
      return p.category === 'artisan-bakes' || p.category === 'pastry';
    return true;
  });

  return (
    <div className="min-h-screen pt-28 sm:pt-36 pb-24 bg-ambient-vignette overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-3/4 h-96 bg-gold-500/10 blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="inline-flex items-center gap-1.5 text-[11px] uppercase tracking-[0.28em] text-gold-400 font-medium">
            <Sparkles className="w-3.5 h-3.5" /> Haute Pâtisserie
          </span>
          <h1 className="text-3xl sm:text-5xl font-serif text-white tracking-tight">
            Signature Collection
          </h1>
          <p className="text-xs sm:text-sm text-champagne/80 font-light leading-relaxed">
            Our most celebrated and iconic creations, crafted with world-renowned ingredients and obsessive attention to detail.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center justify-center gap-2 flex-wrap">
          {(['All', 'Eggless', 'Tarts', 'Chocolates', 'Bakes'] as const).map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all ${
                activeFilter === filter
                  ? 'bg-gold-500/20 border border-gold-400 text-gold-200 shadow-[0_0_12px_rgba(223,166,42,0.3)]'
                  : 'bg-eclat-900/60 border border-gold-400/20 text-champagne/70 hover:text-white hover:border-gold-400/40'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filtered.map((product) => {
            const isFavorited = isInWishlist(product.id);
            return (
              <div
                key={product.id}
                onClick={() => setSelectedProduct(product)}
                className="group relative rounded-3xl glass-gold-card p-5 sm:p-6 flex flex-col justify-between hover:-translate-y-2 transition-all duration-300 cursor-pointer"
              >
                {/* Badges + Heart */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1.5">
                    <span className="px-3 py-1 rounded-full text-[10px] uppercase font-semibold tracking-wider bg-gold-500/20 border border-gold-400/50 text-gold-300">
                      Signature
                    </span>
                    {product.isEggless && (
                      <span className="px-2.5 py-0.5 rounded-full text-[9px] uppercase font-semibold tracking-wider bg-emerald-950/70 border border-emerald-500/40 text-emerald-300">
                        Eggless
                      </span>
                    )}
                  </div>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleWishlist(product.id);
                    }}
                    className={`w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-200 ${
                      isFavorited
                        ? 'bg-rose-500/20 border-rose-500 text-rose-400'
                        : 'bg-black/50 border-gold-400/30 text-champagne hover:text-white hover:bg-gold-500/20'
                    }`}
                    title={isFavorited ? 'In Wishlist' : 'Add to Wishlist'}
                    aria-label="Save to wishlist"
                  >
                    <Heart
                      className={`w-4 h-4 ${
                        isFavorited ? 'fill-rose-500 text-rose-500' : ''
                      }`}
                    />
                  </button>
                </div>

                {/* Product Photograph */}
                <div className="relative w-full aspect-square rounded-2xl overflow-hidden my-3 border border-gold-500/25 shadow-xl bg-eclat-950">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, 380px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-eclat-950/80 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Info & Price */}
                <div className="space-y-2 pt-2">
                  <div className="flex items-baseline justify-between gap-2">
                    <h3 className="text-xl font-serif text-white group-hover:text-gold-200 transition-colors">
                      {product.name}
                    </h3>
                    <span className="text-xl font-serif text-gold-300 font-medium shrink-0">
                      ₹{product.price}
                    </span>
                  </div>

                  <p className="text-xs text-champagne/75 line-clamp-2 leading-relaxed">
                    {product.description}
                  </p>

                  <div className="pt-3">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedProduct(product);
                      }}
                      className="w-full btn-gold py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>View Details</span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Product Detail Modal */}
      <ProductDetailModal
        product={selectedProduct}
        isOpen={!!selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </div>
  );
}
