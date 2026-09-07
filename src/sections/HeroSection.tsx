import React from 'react';
import { motion, type Variants } from 'framer-motion';
import Navbar from '../components/Navbar';
import Button from '../components/Button';

export const HeroSection: React.FC = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.18,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section className="relative min-h-screen w-full flex flex-col justify-between overflow-hidden bg-[#0a0a0c]">
      {/* Hero Background Image */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000 scale-100"
        style={{ backgroundImage: "url('/hero-img.jpeg')" }}
      >
        {/* Atmosphere Overlay (vignette + warm/magenta tint matching photo) */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/35 to-black/75" />
        <div className="absolute inset-0 bg-radial-[at_center_center] from-transparent via-black/20 to-black/70" />
      </div>

      {/* Top Navbar */}
      <Navbar activeItem="HOME" />

      {/* Center Hero Content */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 text-center pt-24 pb-12 min-h-[80vh]">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-xl mx-auto flex flex-col items-center"
        >
          {/* Main Hero Heading in Bebas Neue (40px) */}
          <motion.h1
            variants={itemVariants}
            className="font-bebas text-[34px] sm:text-[38px] md:text-[40px] font-normal tracking-wide text-white leading-tight mb-3.5 select-none drop-shadow-md uppercase"
          >
            THE BEST MOMENTS HAPPEN HERE.
          </motion.h1>

          {/* Subtitle in DM Sans 400 (16px) */}
          <motion.p
            variants={itemVariants}
            className="font-dmsans font-normal text-white/90 text-[16px] leading-relaxed max-w-lg mb-7 text-center tracking-normal drop-shadow-sm"
          >
            From beautifully prepared meals to late–night energy, Casa Milano brings
            dining, leisure and entertainment together in a space designed for
            memorable moments.
          </motion.p>

          {/* Hero Action Button (16px) */}
          <motion.div variants={itemVariants} className="flex justify-center">
            <Button
              variant="white"
              size="md"
              href="tel:+2349169278175"
              className="px-7 py-3 text-[16px] text-[#F2A922] font-medium"
            >
              Reserve a Table
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
