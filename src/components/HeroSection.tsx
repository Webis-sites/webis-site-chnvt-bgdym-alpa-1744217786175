"use client";

import React, { useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import clsx from 'clsx';

interface HeroSectionProps {
  className?: string;
}

export default function HeroSection({ className }: HeroSectionProps) {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 0.5
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  // Handle RTL setup
  useEffect(() => {
    document.documentElement.dir = 'rtl';
    document.documentElement.lang = 'he';
  }, []);

  return (
    <section 
      className={clsx(
        'relative min-h-[80vh] flex items-center justify-center overflow-hidden',
        className
      )}
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          alt="חנות בגדים אלפא"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/30" />
      </div>

      {/* Glassmorphism Container */}
      <motion.div
        className="relative z-10 w-full max-w-6xl mx-auto px-6 py-16 md:py-24"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-3xl p-8 md:p-12 shadow-xl">
          <div className="max-w-3xl mx-auto text-center">
            {/* Hero Title */}
            <motion.h1 
              className="text-4xl md:text-6xl font-bold mb-6 text-white"
              variants={itemVariants}
            >
              חנות בגדים מוביל בישראל
            </motion.h1>
            
            {/* Hero Description */}
            <motion.p 
              className="text-xl md:text-2xl mb-10 text-white/90"
              variants={itemVariants}
            >
              חווית לקוח מושלמת בכל ביקור
            </motion.p>
            
            {/* CTA Button - Neumorphic Style */}
            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <button 
                className="
                  px-8 py-4 text-lg font-medium rounded-full
                  bg-gradient-to-r from-yellow-300 to-yellow-400
                  text-gray-800 shadow-[inset_0_-2px_4px_rgba(0,0,0,0.2),_inset_0_2px_4px_rgba(255,255,255,0.2)]
                  hover:shadow-[inset_0_-4px_8px_rgba(0,0,0,0.3),_inset_0_4px_8px_rgba(255,255,255,0.3)]
                  active:shadow-[inset_0_4px_8px_rgba(0,0,0,0.4)]
                  transition-all duration-300 ease-in-out
                  relative overflow-hidden
                "
                style={{ backgroundColor: '#FFEEAD' }}
              >
                <span className="relative z-10">קבע תור עכשיו</span>
                <span className="absolute inset-0 bg-white/20 opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-full"></span>
              </button>
            </motion.div>
          </div>
        </div>
        
        {/* Decorative Neumorphic Elements */}
        <motion.div 
          className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-gradient-to-br from-primary-light to-primary opacity-30 blur-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          transition={{ duration: 1.5, delay: 0.5 }}
        />
        
        <motion.div 
          className="absolute -bottom-20 -left-10 w-60 h-60 rounded-full bg-gradient-to-tr from-secondary to-secondary-light opacity-30 blur-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          transition={{ duration: 1.5, delay: 0.8 }}
        />
      </motion.div>
    </section>
  );
}