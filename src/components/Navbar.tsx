'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { FiMenu, FiX, FiShoppingCart, FiUser, FiSearch } from 'react-icons/fi';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

interface NavItem {
  name: string;
  href: string;
}

const navItems: NavItem[] = [
  { name: 'דף הבית', href: '/' },
  { name: 'מוצרים', href: '/products' },
  { name: 'קולקציות', href: '/collections' },
  { name: 'מבצעים', href: '/sales' },
  { name: 'צור קשר', href: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header
      className={clsx(
        'sticky top-0 z-50 w-full transition-all duration-300 backdrop-blur-md rtl',
        {
          'shadow-neumorphic py-2': scrolled,
          'py-4': !scrolled,
          'bg-opacity-90 bg-primary/10': scrolled,
          'bg-transparent': !scrolled,
        }
      )}
    >
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="relative z-10">
            <div className="flex items-center">
              <div className="h-10 w-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold text-xl shadow-neumorphic">
                א
              </div>
              <span className="mr-2 text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                אלפא
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1 space-x-reverse">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={clsx(
                  'px-4 py-2 mx-1 rounded-xl text-gray-700 hover:text-primary transition-all duration-200 font-medium relative group',
                  {
                    'text-primary font-semibold': pathname === item.href,
                  }
                )}
              >
                {item.name}
                <motion.div
                  className={clsx(
                    'absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary to-secondary rounded-full',
                    {
                      'opacity-100': pathname === item.href,
                      'opacity-0 group-hover:opacity-70': pathname !== item.href,
                    }
                  )}
                  initial={{ width: pathname === item.href ? '100%' : '0%' }}
                  animate={{ width: pathname === item.href ? '100%' : '0%' }}
                  whileHover={{ width: '100%' }}
                  transition={{ duration: 0.3 }}
                />
              </Link>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center space-x-2 space-x-reverse">
            <button 
              aria-label="חיפוש"
              className="p-2 rounded-full hover:bg-gray-100 text-gray-600 hover:text-primary transition-all duration-200 shadow-neumorphic-sm"
            >
              <FiSearch size={20} />
            </button>
            <button 
              aria-label="כניסה לחשבון"
              className="p-2 rounded-full hover:bg-gray-100 text-gray-600 hover:text-primary transition-all duration-200 shadow-neumorphic-sm"
            >
              <FiUser size={20} />
            </button>
            <button 
              aria-label="עגלת קניות"
              className="p-2 rounded-full hover:bg-gray-100 text-gray-600 hover:text-primary transition-all duration-200 shadow-neumorphic-sm relative"
            >
              <FiShoppingCart size={20} />
              <span className="absolute -top-1 -right-1 bg-secondary text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                0
              </span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-full hover:bg-gray-100 text-gray-600 shadow-neumorphic-sm"
            aria-label={isOpen ? 'סגור תפריט' : 'פתח תפריט'}
          >
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden"
          >
            <div className="container mx-auto px-4 py-4">
              <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-4 shadow-glassmorphism border border-white/20">
                <div className="flex flex-col space-y-2">
                  {navItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={clsx(
                        'px-4 py-3 rounded-xl font-medium transition-all duration-200 text-right',
                        {
                          'bg-gradient-to-r from-primary/10 to-secondary/10 text-primary': 
                            pathname === item.href,
                          'hover:bg-gray-100 text-gray-700': 
                            pathname !== item.href,
                        }
                      )}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
                <div className="mt-4 pt-4 border-t border-gray-100 flex justify-around">
                  <button 
                    aria-label="חיפוש"
                    className="p-3 rounded-full hover:bg-gray-100 text-gray-600 shadow-neumorphic-sm"
                  >
                    <FiSearch size={20} />
                  </button>
                  <button 
                    aria-label="כניסה לחשבון"
                    className="p-3 rounded-full hover:bg-gray-100 text-gray-600 shadow-neumorphic-sm"
                  >
                    <FiUser size={20} />
                  </button>
                  <button 
                    aria-label="עגלת קניות"
                    className="p-3 rounded-full hover:bg-gray-100 text-gray-600 shadow-neumorphic-sm relative"
                  >
                    <FiShoppingCart size={20} />
                    <span className="absolute -top-1 -right-1 bg-secondary text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                      0
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}