import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ClientProviders from '@/components/providers/ClientProviders';

export const metadata: Metadata = {
  title: 'Maison Éclat | Artisan Dessert Café',
  description: 'Handcrafted desserts, single origin chocolates and artisan bakes in New Town, Biswa Bangla. Where dessert becomes an unforgettable experience.',
  keywords: ['Maison Éclat', 'Artisan Dessert Café', 'Luxury Pâtisserie Kolkata', 'The Cherry Dessert', 'Celebration Cakes', 'Ecuador Single Origin Chocolate'],
  authors: [{ name: 'Maison Éclat' }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen bg-eclat-950 text-champagne antialiased flex flex-col justify-between selection:bg-gold-500 selection:text-eclat-950 font-sans">
        <ClientProviders>
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
        </ClientProviders>
      </body>
    </html>
  );
}
