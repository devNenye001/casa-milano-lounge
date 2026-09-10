import React from 'react';
import { motion } from 'framer-motion';
import Button from '../components/Button';

interface InstagramPhoto {
  id: string;
  image: string;
  alt: string;
  rotation: number;
  yOffsetDesktop: number;
  yOffsetMobile: number;
  zIndex: number;
  scaleDesktop: number;
  scaleMobile: number;
}

const INSTAGRAM_PHOTOS: InstagramPhoto[] = [
  {
    id: '1',
    image: '/stay-connected1.jpeg',
    alt: 'Casa Milano Game Lounge & Pool Table',
    rotation: -10,
    yOffsetDesktop: 14,
    yOffsetMobile: 6,
    zIndex: 1,
    scaleDesktop: 0.88,
    scaleMobile: 0.9,
  },
  {
    id: '2',
    image: '/stay-connected2.jpeg',
    alt: 'Casa Milano Poolside & Outdoor Seating',
    rotation: -5,
    yOffsetDesktop: 6,
    yOffsetMobile: 3,
    zIndex: 2,
    scaleDesktop: 0.95,
    scaleMobile: 0.95,
  },
  {
    id: '3',
    image: '/stay-connected3.jpg',
    alt: 'Casa Milano Vibrant Nightlife Crowd',
    rotation: 0,
    yOffsetDesktop: 0,
    yOffsetMobile: 0,
    zIndex: 5,
    scaleDesktop: 1.06,
    scaleMobile: 1.05,
  },
  {
    id: '4',
    image: '/stay-connected4.jpg',
    alt: 'Casa Milano Delicious Culinary Platters',
    rotation: 5,
    yOffsetDesktop: 6,
    yOffsetMobile: 3,
    zIndex: 2,
    scaleDesktop: 0.95,
    scaleMobile: 0.95,
  },
  {
    id: '5',
    image: '/stay-connected5.jpg',
    alt: 'Casa Milano Savory Dishes',
    rotation: 10,
    yOffsetDesktop: 14,
    yOffsetMobile: 6,
    zIndex: 1,
    scaleDesktop: 0.88,
    scaleMobile: 0.9,
  },
];

export const StayConnectedSection: React.FC = () => {
  return (
    <section className="w-full bg-white text-black pt-1 pb-10 sm:pt-2 sm:pb-14 md:pt-3 md:pb-16 px-3 sm:px-6 lg:px-12 overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        {/* Section Heading & Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="text-center mb-1.5 sm:mb-2 max-w-2xl px-2"
        >
          <h2 className="font-bebas text-[28px] sm:text-[30px] md:text-[32px] font-normal tracking-wide text-black uppercase">
            STAY CONNECTED.
          </h2>
          <p className="font-dmsans font-normal text-gray-700 text-[16px] leading-relaxed mt-1 text-center">
            Follow Casa Milano on Instagram for the latest events, updates, food, nightlife and
            everything happening at the lounge.
          </p>
        </motion.div>

        {/* Responsive Overlapping 3D Fanned Gallery Deck for ALL screen sizes */}
        <div className="flex items-center justify-center relative w-full h-[160px] min-[400px]:h-[190px] sm:h-[260px] md:h-[320px] lg:h-[360px] my-0 sm:my-1">
          <div className="flex items-center justify-center -space-x-5 min-[380px]:-space-x-6 sm:-space-x-9 md:-space-x-12 relative w-full max-w-5xl px-1">
            {INSTAGRAM_PHOTOS.map((photo) => (
              <motion.div
                key={photo.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{
                  opacity: 1,
                  rotate: photo.rotation,
                }}
                viewport={{ once: true, margin: '-40px' }}
                whileHover={{
                  scale: 1.12,
                  zIndex: 20,
                  rotate: 0,
                  y: -8,
                  transition: { duration: 0.25 },
                }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                style={{ zIndex: photo.zIndex }}
                className="relative w-[78px] min-[360px]:w-[86px] min-[400px]:w-[96px] sm:w-[155px] md:w-[200px] lg:w-[230px] aspect-[4/5] rounded-[12px] min-[400px]:rounded-[16px] sm:rounded-[22px] md:rounded-[26px] overflow-hidden bg-black border-[1.5px] sm:border-2 border-white shadow-none cursor-pointer select-none shrink-0"
              >
                <img
                  src={photo.image}
                  alt={photo.alt}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Button -> Instagram */}
        <div className="mt-3 sm:mt-5 flex justify-center">
          <Button
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            variant="primary"
            className="px-8 py-3 text-[16px]"
          >
            Follow us on Instagram
          </Button>
        </div>
      </div>
    </section>
  );
};

export default StayConnectedSection;

