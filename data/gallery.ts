export interface GalleryItem {
  id: string;
  title: string;
  category: 'Desserts' | 'Cakes' | 'Café' | 'Events';
  image: string;
  width?: string;
}

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'g-1',
    title: 'The Cherry Signature Plating',
    category: 'Desserts',
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=1000&auto=format&fit=crop',
  },
  {
    id: 'g-2',
    title: 'The Grand Salon Chandelier & Booths',
    category: 'Café',
    image: 'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?q=80&w=1000&auto=format&fit=crop',
  },
  {
    id: 'g-3',
    title: '3-Tier Golden Botanical Celebration Cake',
    category: 'Cakes',
    image: 'https://images.unsplash.com/photo-1535254973040-607b474cb50d?q=80&w=1000&auto=format&fit=crop',
  },
  {
    id: 'g-4',
    title: 'Private Champagne & Dessert Tasting Soirée',
    category: 'Events',
    image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=1000&auto=format&fit=crop',
  },
  {
    id: 'g-5',
    title: 'Hand-Crafted Pistachio Viennoiserie',
    category: 'Desserts',
    image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?q=80&w=1000&auto=format&fit=crop',
  },
  {
    id: 'g-6',
    title: 'The Velvet Corner Dining Alcove',
    category: 'Café',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1000&auto=format&fit=crop',
  },
  {
    id: 'g-7',
    title: 'Raspberry Ruby Tart with 24k Gold',
    category: 'Desserts',
    image: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?q=80&w=1000&auto=format&fit=crop',
  },
  {
    id: 'g-8',
    title: 'Baroque Wedding Masterpiece Cake',
    category: 'Cakes',
    image: 'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?q=80&w=1000&auto=format&fit=crop',
  },
  {
    id: 'g-9',
    title: 'Intimate Candlelit Evening',
    category: 'Events',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1000&auto=format&fit=crop',
  },
  {
    id: 'g-10',
    title: 'Belgian Dark Knight Entremet',
    category: 'Desserts',
    image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?q=80&w=1000&auto=format&fit=crop',
  },
  {
    id: 'g-11',
    title: 'Espresso & Pour-Over Bar Counter',
    category: 'Café',
    image: 'https://images.unsplash.com/photo-1442512595331-e89e73853f31?q=80&w=1000&auto=format&fit=crop',
  },
  {
    id: 'g-12',
    title: 'Custom Golden Macaron Tower',
    category: 'Cakes',
    image: 'https://images.unsplash.com/photo-1571115177098-24ec42ed204d?q=80&w=1000&auto=format&fit=crop',
  },
];

