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
  CakeSlice: <CakeSlice className="w-3.5 h-3.5 sm:w-4 sm:h-4" />,
  Sparkles: <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4" />,
  Croissant: <Croissant className="w-3.5 h-3.5 sm:w-4 sm:h-4" />,
  Cookie: <Cookie className="w-3.5 h-3.5 sm:w-4 sm:h-4" />,
  Award: <Award className="w-3.5 h-3.5 sm:w-4 sm:h-4" />,
  Gem: <Gem className="w-3.5 h-3.5 sm:w-4 sm:h-4" />,
  Layers: <Layers className="w-3.5 h-3.5 sm:w-4 sm:h-4" />,
  Box: <Box className="w-3.5 h-3.5 sm:w-4 sm:h-4" />,
  Crown: <Crown className="w-3.5 h-3.5 sm:w-4 sm:h-4" />,
};

export default function CategoryBar({ activeCategory, onSelectCategory }: CategoryBarProps) {
  return (
    <div className="w-full relative z-30">
      <div className="w-full overflow-x-auto no-scrollbar py-1">
        <div className="flex items-center gap-2 sm:gap-2.5 min-w-max px-2 mx-auto justify-start xl:justify-center">
          {CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => onSelectCategory(cat.id)}
                className={`group flex items-center gap-2 px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-xl border text-xs sm:text-[13px] font-medium transition-all duration-300 ${
                  isActive
                    ? 'bg-gradient-to-b from-amber-500/25 via-eclat-800 to-eclat-900 border-gold-400 text-white shadow-[0_0_18px_rgba(223,166,42,0.4)] scale-[1.03]'
                    : 'bg-eclat-900/70 border-gold-500/20 text-champagne/75 hover:border-gold-400/50 hover:text-white hover:bg-eclat-850'
                }`}
              >
                <span
                  className={`transition-colors duration-300 ${
                    isActive ? 'text-gold-300' : 'text-gold-400/70 group-hover:text-gold-300'
                  }`}
                >
                  {iconMap[cat.iconName] || <Sparkles className="w-3.5 h-3.5" />}
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
