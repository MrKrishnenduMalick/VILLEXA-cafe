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
    <div className="min-h-screen pt-28 sm:pt-36 pb-24 bg-ambient-vignette overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-4/5 h-96 bg-gold-500/10 blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-12">
        {/* 1. Menu Heading and Introduction (Matching Reference Image 2) */}
        <div className="text-center max-w-2xl mx-auto space-y-2.5">
          <span className="inline-flex items-center gap-1.5 text-[11px] uppercase tracking-[0.28em] text-gold-400 font-medium">
            <Sparkles className="w-3.5 h-3.5" /> Our Menu
          </span>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-serif text-white tracking-tight">
            Explore Our Creations
          </h1>
          <p className="text-xs sm:text-sm text-champagne/80 font-light leading-relaxed max-w-xl mx-auto">
            A curated selection of desserts, chocolates, pastries and cakes crafted with the finest ingredients.
          </p>
        </div>

        {/* 2. Category Navigation (Placed SEPARATELY ABOVE the 3D Carousel) */}
        <div className="relative z-30">
          <CategoryBar
            activeCategory={activeCategory}
            onSelectCategory={(catId) => setActiveCategory(catId)}
          />
        </div>

        {/* 3. Main 3D Perspective Product Carousel */}
        <div className="relative z-20 py-2 sm:py-6">
          <MenuCarousel3D
            products={categoryProducts}
            onSelectProduct={(product) => setSelectedProduct(product)}
            favorites={favorites}
            onToggleFavorite={toggleFavorite}
          />
        </div>

        {/* 4. Secondary Product Collection */}
        <div className="relative z-20 pt-4">
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
