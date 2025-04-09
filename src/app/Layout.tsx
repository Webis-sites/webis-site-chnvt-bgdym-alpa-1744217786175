import React from 'react';
import Head from 'next/head';
import { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const inter = Inter({ subsets: ['latin', 'hebrew'] });

// Define metadata for the layout
export const metadata: Metadata = {
  title: 'חנות בגדים אלפא | אופנה איכותית במחירים משתלמים',
  description: 'חנות בגדים אלפא - המקום הטוב ביותר לקנות בגדים איכותיים במחירים משתלמים. מגוון רחב של בגדי גברים, נשים וילדים.',
  keywords: 'חנות בגדים, אופנה, בגדי גברים, בגדי נשים, בגדי ילדים, אלפא, מבצעים, קניות אונליין',
  openGraph: {
    type: 'website',
    locale: 'he_IL',
    url: 'https://alpha-clothing.com',
    siteName: 'חנות בגדים אלפא',
    title: 'חנות בגדים אלפא | אופנה איכותית במחירים משתלמים',
    description: 'חנות בגדים אלפא - המקום הטוב ביותר לקנות בגדים איכותיים במחירים משתלמים. מגוון רחב של בגדי גברים, נשים וילדים.',
    images: [
      {
        url: 'https://alpha-clothing.com/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'חנות בגדים אלפא',
      },
    ],
  },
};

// Schema.org structured data for a clothing store
const storeSchema = {
  '@context': 'https://schema.org',
  '@type': 'ClothingStore',
  name: 'חנות בגדים אלפא',
  description: 'חנות בגדים אלפא - המקום הטוב ביותר לקנות בגדים איכותיים במחירים משתלמים.',
  url: 'https://alpha-clothing.com',
  telephone: '+972-3-1234567',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'רחוב אלנבי 123',
    addressLocality: 'תל אביב',
    postalCode: '6100000',
    addressCountry: 'IL',
  },
  openingHours: 'Mo,Tu,We,Th,Fr 09:00-21:00 Sa 10:00-22:00',
  priceRange: '₪₪-₪₪₪',
};

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className={`${inter.className} min-h-screen flex flex-col bg-gradient-to-br from-gray-50 to-gray-100 text-gray-800 dir-rtl`}>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#588C7E" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/logo192.png" />
        <link rel="manifest" href="/manifest.json" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(storeSchema) }}
        />
      </Head>

      {/* Glassmorphism Navbar */}
      <div className="sticky top-0 z-50">
        <Navbar />
      </div>

      {/* Main Content */}
      <main className="flex-grow px-4 md:px-8 py-6 mx-auto w-full max-w-7xl">
        {/* Decorative background elements */}
        <div className="fixed inset-0 -z-10 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/3 -left-40 w-80 h-80 bg-secondary/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 right-1/4 w-80 h-80 bg-primary/10 rounded-full blur-3xl"></div>
        </div>

        {/* Neumorphic wrapper for content */}
        <div className="relative rounded-2xl p-6 md:p-8 
          bg-white/80 backdrop-blur-md 
          shadow-[inset_0_1px_1px_rgba(255,255,255,0.4),_0_8px_16px_rgba(0,0,0,0.05),_0_1px_3px_rgba(0,0,0,0.1)]
          border border-white/20">
          {children}
        </div>
      </main>

      {/* Glassmorphism Footer */}
      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  );
}