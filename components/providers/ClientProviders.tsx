'use client';

import React from 'react';
import { WishlistProvider } from '@/context/WishlistContext';
import WishlistDrawer from '@/components/wishlist/WishlistDrawer';

export default function ClientProviders({ children }: { children: React.ReactNode }) {
  return (
    <WishlistProvider>
      {children}
      <WishlistDrawer />
    </WishlistProvider>
  );
}

