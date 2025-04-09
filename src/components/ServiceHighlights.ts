'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaTshirt, FaRulerVertical, FaCrown, FaShippingFast, FaGift, FaExchangeAlt } from 'react-icons/fa';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: delay * 0.1 }}
      viewport={{ once: true }}
      className="relative p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-neumorphic transition-all duration-300 hover:shadow-neumorphic-hover group"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/10 rounded-2xl -z-10"></div>
      <div className="flex flex-col items-center text-center">
        <div className="p-4 mb-4 rounded-full bg-primary/10 text-primary shadow-inner-neumorphic transition-all duration-300 group-hover:shadow-inner-neumorphic-hover">
          <div className="text-3xl">{icon}</div>
        </div>
        <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300">{description}</p>
      </div>
    </motion.div>
  );
};

export default function ServiceHighlights() {
  const services = [
    {
      icon: <FaTshirt />,
      title: "ייעוץ סטיילינג אישי",
      description: "פגישה אישית עם סטייליסט מקצועי שיעזור לך למצוא את הסגנון המושלם עבורך"
    },
    {
      icon: <FaRulerVertical />,
      title: "תיקונים והתאמות",
      description: "שירותי תפירה מקצועיים להתאמה מושלמת של הבגדים שלך"
    },
    {
      icon: <FaCrown />,
      title: "חוויית קניה VIP",
      description: "קניה פרטית בחנות עם שירות אישי, כיבוד ויחס מועדף"
    },
    {
      icon: <FaShippingFast />,
      title: "משלוח מהיר",
      description: "משלוח תוך 24 שעות לכל רחבי הארץ עם אפשרות למעקב"
    },
    {
      icon: <FaGift />,
      title: "אריזת מתנה",
      description: "אריזת מתנה מהודרת לכל רכישה לפי בקשה ללא תוספת תשלום"
    },
    {
      icon: <FaExchangeAlt />,
      title: "החלפה והחזרה",
      description: "מדיניות החלפה והחזרה גמישה עד 30 יום מיום הרכישה"
    }
  ];

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-secondary/5 to-primary/5 overflow-hidden rtl" dir="rtl">
      <div className="container mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800 dark:text-white">השירותים שלנו</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            אנו מציעים מגוון שירותים ייחודיים כדי להפוך את חווית הקניה שלך למושלמת
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              delay={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}