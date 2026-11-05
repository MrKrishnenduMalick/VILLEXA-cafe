export interface CafeHighlight {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  iconName: string;
}

export const CAFE_HIGHLIGHTS: CafeHighlight[] = [
  {
    id: 'dine-in',
    title: 'Dine-in Experience',
    subtitle: 'Warm & Indulgent',
    description: 'Plush burgundy velvet seating, dim warm crystal chandeliers, and polished Italian marble tables designed for lingering conversations.',
    iconName: 'Armchair',
  },
  {
    id: 'curated-desserts',
    title: 'Curated Desserts',
    subtitle: 'Haute Pâtisserie',
    description: 'Every dessert plated à la minute by pastry artisans using micro-edible flowers, 24k gold leaf, and house-made reductions.',
    iconName: 'Sparkles',
  },
  {
    id: 'artisan-bakes',
    title: 'Artisan Bakes',
    subtitle: 'Fresh Twice Daily',
    description: 'Viennoiserie baked at 7:30 AM and 3:30 PM with Normandy AOP butter, bringing the aroma of Paris right to your table.',
    iconName: 'Croissant',
  },
  {
    id: 'signature-beverages',
    title: 'Signature Beverages',
    subtitle: 'Specialty Roasts & Chocolates',
    description: 'Pour-over single origin coffees, floral teas from Darjeeling, and thick Ecuadorian sipping chocolate melted before your eyes.',
    iconName: 'Coffee',
  },
];

export const CAFE_DETAILS = {
  name: 'Maison Éclat Artisan Dessert Café',
  tagline: 'Where Dessert Becomes an Experience',
  location: 'Plot IIE/12, Action Area II, New Town, Kolkata 700156',
  landmark: 'Adjacent to Eco Park Gate 4, New Town',
  phone: '+91 98765 43210',
  alternatePhone: '+91 98765 43211',
  email: 'hello@maisoneclat.in',
  reservationEmail: 'concierge@maisoneclat.in',
  timings: [
    { days: 'Tuesday – Friday', hours: '11:00 AM – 10:30 PM' },
    { days: 'Saturday & Sunday', hours: '10:00 AM – 11:30 PM' },
    { days: 'Monday', hours: 'Reserved for Private Tastings' },
  ],
  amenities: [
    'Complimentary High-Speed Wi-Fi',
    'Valet Parking Available',
    'Wheelchair Accessible',
    'Private Chef Tasting Salon',
    'Pet-Friendly Outdoor Veranda',
    'Artisan Dessert Boutique',
  ],
  ambianceImages: [
    {
      title: 'The Grand Salon',
      caption: 'Crimson velvet banquettes beneath warm crystal chandeliers',
      url: 'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?q=80&w=1200&auto=format&fit=crop',
    },
    {
      title: 'The Pâtisserie Counter',
      caption: 'Gleaming brass glass vitrine displaying our morning bakes and entremets',
      url: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200&auto=format&fit=crop',
    },
    {
      title: 'Intimate Corner Booths',
      caption: 'Private dining alcoves adorned with ambient candlelight and soft jazz',
      url: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1200&auto=format&fit=crop',
    },
    {
      title: 'The Barista & Chocolate Bar',
      caption: 'Where single estate cocoa beans and specialty roasts are freshly extracted',
      url: 'https://images.unsplash.com/photo-1442512595331-e89e73853f31?q=80&w=1200&auto=format&fit=crop',
    },
  ],
};
