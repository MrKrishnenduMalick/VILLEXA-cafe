import React from 'react';
import Hero from '@/components/home/Hero';
import SignaturePreview from '@/components/home/SignaturePreview';
import CafeExperiencePreview from '@/components/home/CafeExperiencePreview';
import CustomCakesPreview from '@/components/home/CustomCakesPreview';
import FinalBrandCTA from '@/components/home/FinalBrandCTA';

export default function HomePage() {
  return (
    <div className="space-y-8 sm:space-y-12">
      {/* 1. Cinematic Dessert Hero with Maison Éclat Branding & 4 Glass Feature Pedestals */}
      <Hero />

      {/* 2. Compact Signature Creations Showcase */}
      <SignaturePreview />

      {/* 3. Café Experience with Premium Interior Photography */}
      <CafeExperiencePreview />

      {/* 4. Bespoke Creations / Custom Cakes Showcase */}
      <CustomCakesPreview />

      {/* 5. Short Final Brand Statement & Call to Action */}
      <FinalBrandCTA />
    </div>
  );
}
