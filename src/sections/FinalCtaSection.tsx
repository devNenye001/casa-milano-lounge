import React from 'react';
import { motion } from 'framer-motion';
import Button from '../components/Button';

export const FinalCtaSection: React.FC = () => {
  return (
    <section className="w-full bg-white text-black pt-8 pb-14 sm:pt-10 sm:pb-16 md:pt-14 md:pb-20 px-4 sm:px-6 lg:px-12 overflow-hidden">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
        {/* Left Column: Heading, Subtitle, Contact Us Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="lg:col-span-6 flex flex-col items-start text-left max-w-xl"
        >
          <h2 className="font-bebas text-[32px] sm:text-[36px] md:text-[40px] font-normal tracking-wide text-black uppercase leading-tight">
            COME EXPERIENCE CASA MILANO.
          </h2>

          <p className="font-dmsans font-normal text-gray-700 text-[16px] leading-relaxed mt-2.5 max-w-md">
            Good food, great moments and unforgettable nights are waiting for you.
          </p>

          <div className="mt-7">
            <Button
              href="tel:+2349169278175"
              variant="primary"
              animateArrow={true}
              className="px-8 py-3.5 text-[16px] shadow-none"
            >
              Contact Us
            </Button>
          </div>
        </motion.div>

        {/* Right Column: 2 Overlapping Photo Cards (Landscape proportions, no float loop) */}
        <div className="lg:col-span-6 flex items-center justify-center relative w-full h-[240px] min-[400px]:h-[270px] sm:h-[320px] md:h-[350px]">
          {/* Back Card: nightlife-bg.jpg */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, rotate: -8 }}
            whileInView={{ opacity: 1, scale: 1, rotate: -8 }}
            viewport={{ once: true, margin: '-40px' }}
            whileHover={{ scale: 1.04, rotate: -5, zIndex: 30 }}
            transition={{ duration: 0.3 }}
            className="absolute left-2 min-[400px]:left-6 sm:left-10 top-0 sm:top-2 w-[210px] min-[400px]:w-[250px] sm:w-[310px] md:w-[340px] aspect-[16/11] rounded-[20px] sm:rounded-[26px] overflow-hidden bg-black shadow-xl z-10 cursor-pointer"
          >
            <img
              src="/nightlife-bg.jpg"
              alt="Casa Milano Nightlife"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Front Card: social-event.png */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, rotate: 6 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 6 }}
            viewport={{ once: true, margin: '-40px' }}
            whileHover={{ scale: 1.04, rotate: 3, zIndex: 30 }}
            transition={{ duration: 0.3 }}
            className="absolute right-2 min-[400px]:right-6 sm:right-10 bottom-0 sm:bottom-2 w-[220px] min-[400px]:w-[265px] sm:w-[325px] md:w-[355px] aspect-[16/11] rounded-[20px] sm:rounded-[26px] overflow-hidden bg-black shadow-2xl border-2 border-white z-20 cursor-pointer"
          >
            <img
              src="/social-event.png"
              alt="Casa Milano Social Moments"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FinalCtaSection;

