'use client';

import React, { useState, useMemo } from 'react';
import { CATEGORIES, PRODUCTS, Product } from '@/data/products';
import CategoryBar from '@/components/menu/CategoryBar';
import MenuCarousel3D from '@/components/menu/MenuCarousel3D';
import SecondaryProductSlider from '@/components/menu/SecondaryProductSlider';
import ProductDetailModal from '@/components/menu/ProductDetailModal';
import { Sparkles } from 'lucide-react';

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState<string>('tarts');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [favorites, setFavorites] = useState<string[]>(['the-cherry', 'dark-chocolate-tart']);

  const toggleFavorite = (id: string) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  // Products belonging to the selected category
  const categoryProducts = useMemo(() => {
    return PRODUCTS.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  const currentCategoryObj = CATEGORIES.find((c) => c.id === activeCategory);

  return (
    <div className="min-h-screen pt-20 sm:pt-22 pb-16 bg-ambient-vignette overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-4/5 h-96 bg-gold-500/10 blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 1. Menu Heading and Introduction (Matching Reference Image 2 - Compact luxury hierarchy) */}
        <div className="text-center max-w-2xl mx-auto space-y-1 mb-3 sm:mb-4">
          <span className="inline-flex items-center gap-1.5 text-[10px] sm:text-[11px] uppercase tracking-[0.28em] text-gold-400 font-medium">
            <Sparkles className="w-3 h-3 text-gold-400" /> Our Menu
          </span>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-serif text-white tracking-tight">
            Explore Our Creations
          </h1>
          <p className="text-[11px] sm:text-xs text-champagne/80 font-light leading-relaxed max-w-lg mx-auto">
            A curated selection of desserts, chocolates, pastries and cakes crafted with the finest ingredients.
          </p>
        </div>

        {/* 2. Category Navigation (Directly above carousel, no huge gap) */}
        <div className="relative z-30 mb-2 sm:mb-3">
          <CategoryBar
            activeCategory={activeCategory}
            onSelectCategory={(catId) => setActiveCategory(catId)}
          />
        </div>

        {/* 3. Main 3D Perspective Product Carousel (Directly beneath category navigation, fully visible in initial viewport) */}
        <div className="relative z-20">
          <MenuCarousel3D
            products={categoryProducts}
            onSelectProduct={(product) => setSelectedProduct(product)}
            favorites={favorites}
            onToggleFavorite={toggleFavorite}
          />
        </div>

        {/* 4. Secondary Product Collection */}
        <div className="relative z-20 pt-8 sm:pt-10">
          <SecondaryProductSlider
            products={categoryProducts}
            categoryTitle={currentCategoryObj?.name || 'Creations'}
            onSelectProduct={(product) => setSelectedProduct(product)}
            favorites={favorites}
            onToggleFavorite={toggleFavorite}
          />
        </div>
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
    </div>
  );
}
