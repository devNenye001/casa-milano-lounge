import React from 'react';
import { motion, type Variants } from 'framer-motion';
import Button from '../components/Button';

export interface FlyerItem {
  id: string;
  image: string;
  title: string;
}

const FLYERS: FlyerItem[] = [
  { id: '1', image: '/flyer5.png', title: 'Arena Extra Night' },
  { id: '2', image: '/flyer4.png', title: 'Pool Party - Wet & Savage' },
  { id: '3', image: '/flyer7.png', title: 'Luxury Sunday' },
];

export const EventsFlyersSection: React.FC = () => {
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
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section className="w-full bg-white text-black pt-6 pb-6 sm:pt-8 sm:pb-8 md:pt-10 md:pb-10 px-4 sm:px-6 lg:px-12">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        {/* Section Heading & Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="text-center mb-6 sm:mb-8 max-w-2xl"
        >
          <h2 className="font-bebas text-[28px] sm:text-[30px] md:text-[32px] font-normal tracking-wide text-black uppercase">
            MADE FOR GOOD TIMES.
          </h2>
          <p className="font-dmsans font-normal text-gray-700 text-[16px] leading-relaxed mt-2 text-center">
            See the parties, events and unforgettable nights at Casa Milano.
          </p>
        </motion.div>

        {/* 3 Event Flyer Cards (Horizontal scroll on mobile, 3-column grid on desktop) */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="flex md:grid md:grid-cols-3 gap-5 sm:gap-6 w-full mb-5 overflow-x-auto no-scrollbar [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden snap-x snap-mandatory py-2 px-1"
        >
          {FLYERS.map((flyer) => (
            <motion.div
              key={flyer.id}
              variants={cardVariants}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.25 }}
              className="group relative w-[270px] min-[400px]:w-[300px] md:w-auto h-auto rounded-[22px] overflow-hidden bg-black shadow-none cursor-pointer select-none shrink-0 snap-center md:shrink"
            >
              <img
                src={flyer.image}
                alt={flyer.title}
                className="w-full h-auto object-cover rounded-[22px] block transition-transform duration-700 ease-out group-hover:scale-104"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-colors duration-300 rounded-[22px]" />
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Button -> Events */}
        <div className="flex justify-center">
          <Button
            href="/events"
            variant="primary"
            className="px-8 py-3 text-[16px]"
          >
            See All Events
          </Button>
        </div>
      </div>
    </section>
  );
};

export default EventsFlyersSection;
