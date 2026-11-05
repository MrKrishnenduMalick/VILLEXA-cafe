'use client';

import React, { useState, useMemo } from 'react';
import { CATEGORIES, PRODUCTS, Product } from '@/data/products';
import CategoryBar from '@/components/menu/CategoryBar';
import MenuCarousel3D from '@/components/menu/MenuCarousel3D';
import SecondaryProductSlider from '@/components/menu/SecondaryProductSlider';
import ProductDetailModal from '@/components/menu/ProductDetailModal';
import { Sparkles, Heart, ArrowRight } from 'lucide-react';
import { useWishlist } from '@/context/WishlistContext';

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState<string>('tarts');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const { openWishlist, wishlistCount } = useWishlist();

  // Products belonging to the selected category
  const categoryProducts = useMemo(() => {
    return PRODUCTS.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  const currentCategoryObj = CATEGORIES.find((c) => c.id === activeCategory);

  return (
    <div className="min-h-screen pt-24 sm:pt-28 pb-20 bg-ambient-vignette overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-4/5 h-96 bg-gold-500/10 blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 1. Menu Heading and Introduction (Matching Reference Image 2) */}
        <div className="text-center max-w-2xl mx-auto space-y-1 mb-4 sm:mb-5">
          <span className="inline-flex items-center gap-1.5 text-[10px] sm:text-[11px] uppercase tracking-[0.28em] text-gold-400 font-medium">
            <Sparkles className="w-3 h-3 text-gold-400" /> Our Menu
          </span>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-serif text-white tracking-tight">
            Explore Our Creations
          </h1>
          <p className="text-[11px] sm:text-xs text-champagne/80 font-light leading-relaxed max-w-lg mx-auto">
            A curated selection of desserts, chocolates, pastries and cakes crafted with the finest ingredients.
          </p>

          {/* Customer Wishlist Quick Bar */}
          {wishlistCount > 0 && (
            <div className="pt-1.5">
              <button
                onClick={openWishlist}
                className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gold-500/15 border border-gold-400/35 text-gold-300 hover:text-white text-[11px] transition-all hover:bg-gold-500/25"
              >
                <Heart className="w-3 h-3 fill-gold-400 text-gold-400" />
                <span>You have {wishlistCount} {wishlistCount === 1 ? 'item' : 'items'} in your Wishlist</span>
                <span className="text-gold-200 font-medium">View Wishlist →</span>
              </button>
            </div>
          )}
        </div>

        {/* 2. Category Navigation (Directly above carousel with clean spacing) */}
        <div className="relative z-30 mb-2 sm:mb-4">
          <CategoryBar
            activeCategory={activeCategory}
            onSelectCategory={(catId) => setActiveCategory(catId)}
          />
        </div>

        {/* 3. Main 3D Perspective Product Carousel (Centered with genuine perspective, no overlap) */}
        <div className="relative z-20">
          <MenuCarousel3D
            products={categoryProducts}
            onSelectProduct={(product) => setSelectedProduct(product)}
          />
        </div>

        {/* 4. Secondary Product Collection (Separated with clean margin so sections never collide) */}
        <div className="relative z-20 mt-10 sm:mt-14 pt-4 border-t border-gold-500/15">
          <SecondaryProductSlider
            products={categoryProducts}
            categoryTitle={currentCategoryObj?.name || 'Creations'}
            onSelectProduct={(product) => setSelectedProduct(product)}
          />
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
