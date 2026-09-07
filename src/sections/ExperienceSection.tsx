import React from 'react';
import { motion } from 'framer-motion';
import { HiMapPin, HiPhone } from 'react-icons/hi2';

export const ExperienceSection: React.FC = () => {
  return (
    <section className="relative w-full overflow-hidden bg-black text-white rounded-none">
      {/* Full-Width Background Image with Atmospheric Dark Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat rounded-none"
        style={{ backgroundImage: `url('/contact-section.jpg')` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/65 to-black/85" />

      {/* Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="flex flex-col items-center text-center w-full"
        >
          {/* Heading in Bebas Neue (32px) */}
          <h2 className="font-bebas text-[28px] sm:text-[32px] md:text-[36px] font-normal tracking-wide text-white uppercase max-w-2xl">
            COME EXPERIENCE CASA MILANO.
          </h2>

          {/* Subtitle in DM Sans (16px) */}
          <p className="font-dmsans font-normal text-gray-200 text-[15px] sm:text-[16px] leading-relaxed mt-2 max-w-xl">
            Good food, great moments and unforgettable nights are waiting for you.
          </p>

          {/* Contact Details Stack (Vertical for both responsive and desktop views) */}
          <div className="mt-8 sm:mt-10 flex flex-col items-start justify-center gap-6 sm:gap-7 max-w-md mx-auto text-left">
            {/* Address Item */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-[14px] bg-[#F2A922] flex items-center justify-center text-white shrink-0 shadow-none">
                <HiMapPin className="w-6 h-6 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="font-dmsans font-semibold text-white text-[16px] sm:text-[17px]">
                  Address
                </span>
                <p className="font-dmsans font-normal text-gray-200 text-[14px] sm:text-[15px] leading-snug mt-0.5">
                  Eastern Bypass, off Dav-C Hotels, Tudun Wada South, Minna, Niger State, Nigeria.
                </p>
              </div>
            </div>

            {/* Phone Number Item */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-[14px] bg-[#F2A922] flex items-center justify-center text-white shrink-0 shadow-none">
                <HiPhone className="w-6 h-6 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="font-dmsans font-semibold text-white text-[16px] sm:text-[17px]">
                  Phone Number
                </span>
                <a
                  href="tel:+2349169278175"
                  className="font-dmsans font-normal text-gray-200 text-[14px] sm:text-[15px] leading-snug mt-0.5 hover:text-[#F2A922] transition-colors"
                >
                  +234 916 927 8175
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;

