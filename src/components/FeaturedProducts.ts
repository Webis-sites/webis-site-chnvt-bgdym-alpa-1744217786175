'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FiEye, FiShoppingCart } from 'react-icons/fi';

interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
}

const FeaturedProducts: React.FC = () => {
  const [hoveredProduct, setHoveredProduct] = useState<string | null>(null);
  
  // Sample product data - replace with actual data from your API or CMS
  const featuredProducts: Product[] = [
    {
      id: '1',
      name: 'חולצת כותנה קלאסית',
      price: 129.99,
      image: '/images/featured-product-1.jpg',
      category: 'חולצות'
    },
    {
      id: '2',
      name: 'מכנסי ג׳ינס אלגנטיים',
      price: 199.99,
      image: '/images/featured-product-2.jpg',
      category: 'מכנסיים'
    },
    {
      id: '3',
      name: 'שמלת ערב מעוצבת',
      price: 249.99,
      image: '/images/featured-product-3.jpg',
      category: 'שמלות'
    },
    {
      id: '4',
      name: 'חליפת ספורט אלפא',
      price: 299.99,
      image: '/images/featured-product-4.jpg',
      category: 'חליפות'
    },
    {
      id: '5',
      name: 'סוודר צמר איכותי',
      price: 179.99,
      image: '/images/featured-product-5.jpg',
      category: 'סוודרים'
    },
    {
      id: '6',
      name: 'ז׳קט עור יוקרתי',
      price: 399.99,
      image: '/images/featured-product-6.jpg',
      category: 'ז׳קטים'
    }
  ];

  // Formatter for Israeli Shekel
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('he-IL', {
      style: 'currency',
      currency: 'ILS',
    }).format(price);
  };

  return (
    <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto" dir="rtl">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-3 text-secondary-900">מוצרים מובחרים</h2>
        <p className="text-secondary-700 max-w-2xl mx-auto">
          הפריטים החדשים והמובילים בחנות האלפא שלנו. איכות ללא פשרות, עיצוב מודרני.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {featuredProducts.map((product) => (
          <motion.div
            key={product.id}
            className="relative rounded-2xl overflow-hidden group"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            onMouseEnter={() => setHoveredProduct(product.id)}
            onMouseLeave={() => setHoveredProduct(null)}
          >
            <div className="relative h-80 w-full bg-gradient-to-br from-primary-50 to-primary-100 rounded-2xl overflow-hidden">
              {/* Neumorphic card with glassmorphism effect */}
              <div className="absolute inset-0 rounded-2xl shadow-neumorphic bg-white/20 backdrop-blur-sm border border-white/30 z-0"></div>
              
              <div className="relative h-full w-full p-4 z-10">
                <div className="relative h-full w-full overflow-hidden rounded-xl">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                    placeholder="blur"
                    blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN88P/BfwAJKgPH1gX9CAAAAABJRU5ErkJggg=="
                  />
                </div>
              </div>
              
              {/* Quick actions overlay */}
              <motion.div 
                className="absolute inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={{ opacity: 0 }}
                animate={{ opacity: hoveredProduct === product.id ? 1 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex gap-3">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white shadow-neumorphic-sm hover:shadow-neumorphic-sm-hover transition-all"
                    aria-label="צפייה מהירה"
                  >
                    <FiEye size={20} />
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-12 h-12 rounded-full bg-primary/80 backdrop-blur-md border border-primary/30 flex items-center justify-center text-white shadow-neumorphic-sm hover:shadow-neumorphic-sm-hover transition-all"
                    aria-label="הוסף לסל"
                  >
                    <FiShoppingCart size={20} />
                  </motion.button>
                </div>
              </motion.div>
            </div>
            
            {/* Product info */}
            <div className="mt-4 px-2">
              <div className="text-xs font-medium text-primary-600 mb-1">{product.category}</div>
              <h3 className="text-lg font-semibold text-secondary-800 mb-1">{product.name}</h3>
              <p className="text-secondary-700 font-bold">{formatPrice(product.price)}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <motion.div
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
        >
          <Link href="/products" className="inline-block py-3 px-8 rounded-full bg-white shadow-neumorphic hover:shadow-neumorphic-hover border border-white/30 backdrop-blur-sm text-secondary-800 font-medium transition-all duration-300">
            צפייה בכל המוצרים
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedProducts;