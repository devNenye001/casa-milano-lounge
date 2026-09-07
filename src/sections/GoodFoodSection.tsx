import React from 'react';
import { motion } from 'framer-motion';
import Button from '../components/Button';

export const GoodFoodSection: React.FC = () => {
  return (
    <section className="w-full bg-white text-black pt-8 pb-14 sm:pt-10 sm:pb-16 md:pt-12 md:pb-20 px-4 sm:px-6 lg:px-12">
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
            GOOD FOOD. BETTER MOMENTS.
          </h2>
          <p className="font-dmsans font-normal text-gray-700 text-[16px] leading-relaxed mt-2 text-center">
            Good food. Better conversations. An atmosphere that makes you forget to check the time.
          </p>
        </motion.div>

        {/* Full-width Picture Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="group relative w-full h-[260px] sm:h-[340px] md:h-[400px] rounded-[22px] sm:rounded-[26px] overflow-hidden bg-gray-100 mb-8 cursor-pointer select-none"
        >
          <img
            src="/good-food-better-moments-section-pic.jpg"
            alt="Delicious grilled fish and savory sides at Casa Milano"
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-103"
          />
          <div className="absolute inset-0 bg-black/10 group-hover:bg-black/15 transition-colors duration-300" />
        </motion.div>

        {/* CTA Button -> View Menu PDF */}
        <div className="flex justify-center">
          <Button
            href="/Menu.pdf"
            target="_blank"
            rel="noopener noreferrer"
            variant="primary"
            className="px-8 py-3 text-[16px]"
          >
            View Menu
          </Button>
        </div>
      </div>
    </section>
  );
};

export default GoodFoodSection;
