import React, { useState, useEffect, useRef } from 'react';
import { motion, type Variants } from 'framer-motion';
import { HiArrowLeft, HiArrowRight } from 'react-icons/hi2';

export interface ExploreCard {
  id: string;
  title: string;
  subtitle: string;
  images: string[];
}

const EXPLORE_ITEMS: ExploreCard[] = [
  {
    id: 'game-lounge',
    title: 'GAME LOUNGE',
    subtitle: 'Good company deserves good entertainment.',
    images: ['/Game-lounge.jpeg', '/Game-lounge2.jpeg', '/Game-lounge3.jpeg'],
  },
  {
    id: 'gym',
    title: 'FULLY EQUIPPED GYM',
    subtitle: 'Stay active and keep up with your fitness routine.',
    images: ['/Fully-Equipped-Gym.jpeg', '/Fully-Equipped-Gym2.jpeg'],
  },
  {
    id: 'outdoor',
    title: 'OUTDOOR SEATING',
    subtitle: 'Relax, eat and enjoy the atmosphere in the open air.',
    images: ['/Outdoor-Seating.jpeg', '/pool.jpg'],
  },
  {
    id: 'conference',
    title: 'CONFERENCE FACILITY',
    subtitle: 'A comfortable space for meetings and professional gatherings.',
    images: ['/Conference-Facility1.jpeg', '/Conference-Facility2.jpeg'],
  },
];

export const MoreToExploreSection: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 10);
      setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 10);
    }
  };

  useEffect(() => {
    checkScroll();
    const el = scrollRef.current;
    if (el) {
      el.addEventListener('scroll', checkScroll);
      window.addEventListener('resize', checkScroll);
      return () => {
        el.removeEventListener('scroll', checkScroll);
        window.removeEventListener('resize', checkScroll);
      };
    }
  }, []);

  const scrollByAmount = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const cardWidth = scrollRef.current.querySelector('div')?.clientWidth || 400;
      const offset = direction === 'left' ? -cardWidth - 24 : cardWidth + 24;
      scrollRef.current.scrollBy({ left: offset, behavior: 'smooth' });
    }
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
    <section className="w-full bg-white text-black pt-4 pb-12 sm:pt-6 sm:pb-16 md:pt-8 md:pb-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        {/* Section Heading in Bebas Neue (32px) */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="text-center mb-6 sm:mb-8"
        >
          <h2 className="font-bebas text-[28px] sm:text-[30px] md:text-[32px] font-normal tracking-wide text-black uppercase">
            THERE'S MORE TO EXPLORE.
          </h2>
        </motion.div>

        {/* Carousel Slider with Center-Edge Navigation Arrows */}
        <div className="relative group/slider w-full">
          {/* Left Navigation Arrow */}
          <button
            type="button"
            onClick={() => scrollByAmount('left')}
            className={`absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-30 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-white/95 hover:bg-[#F2A922] text-gray-900 hover:text-white shadow-xl border border-gray-200/80 flex items-center justify-center transition-all duration-300 cursor-pointer ${
              canScrollLeft
                ? 'opacity-100 scale-100 pointer-events-auto hover:scale-105'
                : 'opacity-0 scale-75 pointer-events-none'
            }`}
            aria-label="Scroll left"
            tabIndex={canScrollLeft ? 0 : -1}
          >
            <HiArrowLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          {/* Right Navigation Arrow */}
          <button
            type="button"
            onClick={() => scrollByAmount('right')}
            className={`absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-30 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-white/95 hover:bg-[#F2A922] text-gray-900 hover:text-white shadow-xl border border-gray-200/80 flex items-center justify-center transition-all duration-300 cursor-pointer ${
              canScrollRight
                ? 'opacity-100 scale-100 pointer-events-auto hover:scale-105'
                : 'opacity-0 scale-75 pointer-events-none'
            }`}
            aria-label="Scroll right"
            tabIndex={canScrollRight ? 0 : -1}
          >
            <HiArrowRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          {/* Horizontal Scrollable Slider Container (Scrollbar completely hidden) */}
          <div
            ref={scrollRef}
            className="flex gap-4 sm:gap-6 overflow-x-auto no-scrollbar [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden scroll-smooth snap-x snap-mandatory py-2 px-2 sm:px-4"
          >
            {EXPLORE_ITEMS.map((item, index) => (
              <ExploreLandscapeCard
                key={item.id}
                item={item}
                cardIndex={index}
                variants={cardVariants}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

interface ExploreLandscapeCardProps {
  item: ExploreCard;
  cardIndex: number;
  variants: Variants;
}

const ExploreLandscapeCard: React.FC<ExploreLandscapeCardProps> = ({
  item,
  cardIndex,
  variants,
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (item.images.length <= 1) return;

    const intervalDuration = 3800 + (cardIndex % 3) * 500;
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % item.images.length);
    }, intervalDuration);

    return () => clearInterval(interval);
  }, [item.images.length, cardIndex]);

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-40px' }}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.25 }}
      className="group relative w-[295px] min-[390px]:w-[340px] sm:w-[440px] md:w-[480px] lg:w-[500px] aspect-[16/10.5] sm:aspect-[16/10] rounded-[22px] sm:rounded-[28px] overflow-hidden shadow-none cursor-pointer select-none bg-neutral-900 shrink-0 snap-start"
    >
      {/* Background Images Crossfade Slideshow */}
      {item.images.map((imgSrc, idx) => (
        <div
          key={imgSrc}
          className={`absolute inset-0 bg-cover bg-center transition-all duration-1000 ease-in-out group-hover:scale-108 ${
            idx === currentImageIndex ? 'opacity-100 scale-100 z-[1]' : 'opacity-0 scale-105 z-0'
          }`}
          style={{ backgroundImage: `url('${imgSrc}')` }}
        />
      ))}

      {/* Bottom Gradient Overlay for Clear Text Legibility */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent transition-opacity duration-300 group-hover:from-black/95 z-[2]" />

      {/* Card Content at Bottom Left */}
      <div className="absolute inset-0 p-5 sm:p-7 flex flex-col justify-end text-left z-[3]">
        <h3 className="font-bebas text-[22px] sm:text-[24px] text-white tracking-wider uppercase drop-shadow-sm transition-transform duration-300 group-hover:translate-x-0.5">
          {item.title}
        </h3>
        <p className="font-dmsans font-normal text-white/90 text-[14px] sm:text-[16px] mt-0.5 leading-snug tracking-normal">
          {item.subtitle}
        </p>
      </div>

      {/* Subtle Slideshow Progress Dots */}
      {item.images.length > 1 && (
        <div className="absolute top-4 right-4 z-[3] flex items-center gap-1.5 bg-black/40 backdrop-blur-xs px-2.5 py-1 rounded-full">
          {item.images.map((_, i) => (
            <div
              key={i}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === currentImageIndex ? 'w-4 bg-[#F2A922]' : 'w-1.5 bg-white/50'
              }`}
            />
          ))}
        </div>
      )}
    </motion.div>
  );
};

export default MoreToExploreSection;

