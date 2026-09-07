import React from 'react';
import { motion, type Variants } from 'framer-motion';

export interface DestinationCard {
  id: string;
  title: string;
  subtitle: string;
  image: string;
}

const DESTINATIONS: DestinationCard[] = [
  {
    id: 'dining',
    title: 'DINING',
    subtitle: 'Good taste, beautifully served.',
    image: '/dining-bg.jpg',
  },
  {
    id: 'lounge',
    title: 'LOUNGE',
    subtitle: 'Settle in. Stay awhile.',
    image: '/lounge-bg.jpeg',
  },
  {
    id: 'pool',
    title: 'POOL',
    subtitle: 'Slow down and unwind.',
    image: '/pool.jpg',
  },
  {
    id: 'nightlife',
    title: 'NIGHTLIFE',
    subtitle: 'Let the night take over.',
    image: '/nightlife-bg.jpg',
  },
];

export const DestinationsSection: React.FC = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section className="w-full bg-white text-black pt-4 pb-12 sm:pt-6 sm:pb-16 md:pt-8 md:pb-20 px-4 sm:px-6 lg:px-12">
      <div className="max-w-6xl mx-auto">
        {/* Section Heading in Bebas Neue (32px) */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="text-center mb-6 sm:mb-8"
        >
          <h2 className="font-bebas text-[28px] sm:text-[30px] md:text-[32px] font-normal tracking-wide text-black uppercase">
            EVERYTHING YOU WANT. ONE DESTINATION.
          </h2>
        </motion.div>

        {/* 4 Responsive Destination Cards (Elongated Proportions) */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5"
        >
          {DESTINATIONS.map((dest) => (
            <motion.div
              key={dest.id}
              variants={cardVariants}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.25 }}
              className="group relative h-[360px] sm:h-[380px] md:h-[400px] rounded-[22px] overflow-hidden shadow-none cursor-pointer select-none"
            >
              {/* Card Background Image with Smooth Hover Zoom */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-108"
                style={{ backgroundImage: `url('${dest.image}')` }}
              />

              {/* Bottom Gradient Overlay for High Legibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent transition-opacity duration-300 group-hover:from-black/95" />

              {/* Card Text Content (Pinned to Bottom Left) */}
              <div className="absolute inset-0 p-5 sm:p-6 flex flex-col justify-end text-left z-10">
                {/* 3rd Section Card Headings (24px Bebas Neue on all views including mobile) */}
                <h3 className="font-bebas text-[24px] text-white tracking-wider uppercase drop-shadow-sm transition-transform duration-300 group-hover:translate-x-0.5">
                  {dest.title}
                </h3>
                {/* Body font (16px DM Sans) */}
                <p className="font-dmsans font-normal text-white/90 text-[16px] mt-0.5 leading-snug tracking-normal">
                  {dest.subtitle}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default DestinationsSection;
