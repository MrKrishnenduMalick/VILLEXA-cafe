'use client';

import React, { useState, useMemo } from 'react';
import { CATEGORIES, PRODUCTS, Product } from '@/data/products';
import MenuCarousel3D from '@/components/menu/MenuCarousel3D';
import CategoryBar from '@/components/menu/CategoryBar';
import SecondaryProductSlider from '@/components/menu/SecondaryProductSlider';
import ProductDetailModal from '@/components/menu/ProductDetailModal';
import { Sparkles } from 'lucide-react';

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState<string>('tarts');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [favorites, setFavorites] = useState<string[]>(['the-cherry']);

  const toggleFavorite = (id: string) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  // Products belonging to the selected category
  const categoryProducts = useMemo(() => {
    return PRODUCTS.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  // Featured products for the 3D carousel (maximum 3 to 5 featured products)
  const carouselProducts = useMemo(() => {
    // If category has signature products, prioritize them, capped at 3
    const sigs = categoryProducts.filter((p) => p.isSignature);
    const others = categoryProducts.filter((p) => !p.isSignature);
    const combined = [...sigs, ...others];
    return combined.slice(0, 3);
  }, [categoryProducts]);

  // All products of this category for the secondary slider
  const sliderProducts = useMemo(() => {
    // Return all items in this category or cross-category recommendations
    if (categoryProducts.length >= 3) {
      return categoryProducts;
    }
    // If few, supplement with favorites
    return [...categoryProducts, ...PRODUCTS.filter((p) => p.isSignature)].slice(0, 6);
  }, [categoryProducts]);

  const currentCategoryObj = CATEGORIES.find((c) => c.id === activeCategory);

  return (
    <div className="min-h-screen pt-28 sm:pt-36 pb-24 bg-ambient-vignette overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-4/5 h-96 bg-gold-500/10 blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header (Matching Reference Image 2) */}
        <div className="text-center max-w-2xl mx-auto mb-4 space-y-3">
          <span className="inline-flex items-center gap-1.5 text-[11px] uppercase tracking-[0.28em] text-gold-400 font-medium">
            <Sparkles className="w-3.5 h-3.5" /> Our Menu
          </span>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-serif text-white tracking-tight">
            Explore Our Creations
          </h1>
          <p className="text-xs sm:text-sm text-champagne/80 font-light leading-relaxed">
            A curated selection of desserts, chocolates, pastries and cakes crafted with the world’s finest single-origin ingredients.
          </p>
        </div>

        {/* 1. 3D Perspective Curved Carousel */}
        <div className="my-4 sm:my-6">
          <MenuCarousel3D
            products={carouselProducts.length > 0 ? carouselProducts : categoryProducts}
            onSelectProduct={(product) => setSelectedProduct(product)}
            favorites={favorites}
            onToggleFavorite={toggleFavorite}
          />
        </div>

        {/* 2. Category Selector Bar (All 9 Categories) */}
        <div className="my-8 sm:my-12">
          <CategoryBar
            activeCategory={activeCategory}
            onSelectCategory={(catId) => setActiveCategory(catId)}
          />
        </div>

        {/* 3. Secondary Horizontal Product Slider */}
        <div className="mt-6 sm:mt-10">
          <SecondaryProductSlider
            products={sliderProducts}
            categoryTitle={`${currentCategoryObj?.name || 'All'} Collection`}
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
