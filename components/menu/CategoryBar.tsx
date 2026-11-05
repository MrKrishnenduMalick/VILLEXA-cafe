'use client';

import React from 'react';
import { CATEGORIES } from '@/data/products';
import {
  CakeSlice,
  Sparkles,
  Croissant,
  Cookie,
  Award,
  Gem,
  Layers,
  Box,
  Crown,
} from 'lucide-react';

interface CategoryBarProps {
  activeCategory: string;
  onSelectCategory: (categoryId: string) => void;
}

const iconMap: Record<string, React.ReactNode> = {
  CakeSlice: <CakeSlice className="w-4 h-4 sm:w-5 sm:h-5" />,
  Sparkles: <Sparkles className="w-4 h-4 sm:w-5 sm:h-5" />,
  Croissant: <Croissant className="w-4 h-4 sm:w-5 sm:h-5" />,
  Cookie: <Cookie className="w-4 h-4 sm:w-5 sm:h-5" />,
  Award: <Award className="w-4 h-4 sm:w-5 sm:h-5" />,
  Gem: <Gem className="w-4 h-4 sm:w-5 sm:h-5" />,
  Layers: <Layers className="w-4 h-4 sm:w-5 sm:h-5" />,
  Box: <Box className="w-4 h-4 sm:w-5 sm:h-5" />,
  Crown: <Crown className="w-4 h-4 sm:w-5 sm:h-5" />,
};

export default function CategoryBar({ activeCategory, onSelectCategory }: CategoryBarProps) {
  return (
    <div className="w-full relative z-20 py-2">
      <div className="w-full overflow-x-auto no-scrollbar pb-3 pt-1">
        <div className="flex items-center gap-2 sm:gap-3 min-w-max px-4 mx-auto justify-start xl:justify-center">
          {CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => onSelectCategory(cat.id)}
                className={`group flex items-center gap-2 sm:gap-2.5 px-4 sm:px-5 py-2.5 sm:py-3 rounded-2xl border text-xs sm:text-sm font-medium transition-all duration-300 ${
                  isActive
                    ? 'bg-gradient-to-b from-amber-500/25 via-eclat-800 to-eclat-900 border-gold-400 text-white shadow-[0_0_22px_rgba(223,166,42,0.45)] scale-105'
                    : 'bg-eclat-900/70 border-gold-500/20 text-champagne/75 hover:border-gold-400/50 hover:text-white hover:bg-eclat-850'
                }`}
              >
                <span
                  className={`transition-colors duration-300 ${
                    isActive ? 'text-gold-300' : 'text-gold-400/70 group-hover:text-gold-300'
                  }`}
                >
                  {iconMap[cat.iconName] || <Sparkles className="w-4 h-4" />}
                </span>
                <span className="whitespace-nowrap tracking-wide">{cat.name}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
