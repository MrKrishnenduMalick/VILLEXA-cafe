import React from 'react';
import Hero from '@/components/home/Hero';
import FeatureStrip from '@/components/home/FeatureStrip';
import SignaturePreview from '@/components/home/SignaturePreview';
import CafeExperiencePreview from '@/components/home/CafeExperiencePreview';
import CustomCakesPreview from '@/components/home/CustomCakesPreview';
import StoryPreview from '@/components/home/StoryPreview';
import GalleryPreview from '@/components/home/GalleryPreview';
import ContactPreview from '@/components/home/ContactPreview';

export default function HomePage() {
  return (
    <div className="space-y-4">
      {/* 1. Cinematic Dessert Hero */}
      <Hero />

      {/* 2. Floating Feature Cards Strip */}
      <FeatureStrip />

      {/* 3. Signature Collection Preview */}
      <SignaturePreview />

      {/* 4. Café Experience Showcase */}
      <CafeExperiencePreview />

      {/* 5. Custom Cakes Showcase */}
      <CustomCakesPreview />

      {/* 6. Our Story Preview */}
      <StoryPreview />

      {/* 7. Gallery Grid */}
      <GalleryPreview />

      {/* 8. Contact & Table Enquiry */}
      <ContactPreview />
    </div>
  );
}
