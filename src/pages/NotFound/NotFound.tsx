import React from 'react';
import { motion, type Variants } from 'framer-motion';
import Navbar from '../../components/Navbar';
import Button from '../../components/Button';

export const NotFoundPage: React.FC = () => {
  // Stagger animation container
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.15,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  const numberVariants: Variants = {
    hidden: { opacity: 0, scale: 0.9, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: 'easeOut',
      },
    },
  };

  return (
    <div className="relative min-h-screen w-full bg-[#07080a] text-white flex flex-col justify-between overflow-x-hidden selection:bg-[#F2A922] selection:text-black">
      {/* Background Image with Dark Atmospheric Overlay */}
      <div 
        className="fixed inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/not-found-bg.png')" }}
      >
        {/* Dark Vignette & Overlay */}
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/60" />
      </div>

      {/* Top Navbar */}
      <Navbar activeItem="HOME" />

      {/* Main 404 Hero Section */}
      <main className="relative z-10 flex-1 flex flex-col items-center justify-center px-4 sm:px-6 text-center pt-20 pb-12">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-[480px] mx-auto flex flex-col items-center"
        >
          {/* 404 Heading in Bebas Neue (48px for laptop view) */}
          <motion.h1
            variants={numberVariants}
            className="font-bebas text-4xl sm:text-[48px] font-normal tracking-wide text-white leading-tight mb-4 select-none"
          >
            404
          </motion.h1>

          {/* Subtitle / Description in DM Sans 400 (16px) */}
          <motion.p
            variants={itemVariants}
            className="font-dmsans font-normal text-white text-[16px] leading-[1.6] max-w-[460px] mb-8 text-center"
          >
            This page cant be transcribed. It looks like this page has left the
            meeting – or maybe it never joined.
          </motion.p>

          {/* Action Button Component (16px font) */}
          <motion.div variants={itemVariants} className="flex justify-center">
            <Button
              onClick={() => {
                window.location.href = '/';
              }}
              className="px-7 py-3 text-[16px]"
            >
              Go Home
            </Button>
          </motion.div>
        </motion.div>
      </main>
    </div>
  );
};

export default NotFoundPage;

