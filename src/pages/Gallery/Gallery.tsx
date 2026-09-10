import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  HiXMark,
  HiChevronLeft,
  HiChevronRight,
} from 'react-icons/hi2';
import SEO from '../../components/SEO';
import Navbar from '../../components/Navbar';
import FinalCtaSection from '../../sections/FinalCtaSection';
import Footer from '../../components/Footer';

export type GalleryCategory =
  | 'All'
  | 'Lounge/Club'
  | 'Game Lounge'
  | 'Swimming pool'
  | 'Restaurant'
  | 'Gym';

export interface GalleryItem {
  id: string;
  type: 'image' | 'video';
  src: string;
  title: string;
  category: GalleryCategory;
}

export const CATEGORIES: GalleryCategory[] = [
  'All',
  'Lounge/Club',
  'Game Lounge',
  'Swimming pool',
  'Restaurant',
  'Gym',
];

export const GALLERY_ITEMS: GalleryItem[] = [
  // 1. Featured items matching mockup top 3x3 layout
  {
    id: 'game-snooker-1',
    type: 'image',
    src: '/game-gallery.webp',
    title: 'Game Lounge & Snooker Tables',
    category: 'Game Lounge',
  },
  {
    id: 'food-chef-serving',
    type: 'image',
    src: '/good-food-better-moments-section-pic.jpg',
    title: 'Gourmet Dining Experience',
    category: 'Restaurant',
  },
  {
    id: 'club-lights-1',
    type: 'image',
    src: '/club-gallery.webp',
    title: 'Vibrant Lounge & Nightlife',
    category: 'Lounge/Club',
  },
  {
    id: 'exterior-stage-walkway',
    type: 'image',
    src: '/outdoor3-gallery.webp',
    title: 'Casa Milano Arena & Stage Walkway',
    category: 'Lounge/Club',
  },
  {
    id: 'pool-terrace-mural',
    type: 'image',
    src: '/pool-gallery.jpeg',
    title: 'Poolside Cabana & Terrace',
    category: 'Swimming pool',
  },
  {
    id: 'fries-chicken-dish',
    type: 'image',
    src: '/stay-connected4.jpg',
    title: 'Crispy Fries & Chicken Platter',
    category: 'Restaurant',
  },
  {
    id: 'dj-live-deck',
    type: 'image',
    src: '/stay-connected5.jpg',
    title: 'Live DJ & Sound Deck',
    category: 'Lounge/Club',
  },
  {
    id: 'jollof-rice-dining',
    type: 'image',
    src: '/dining-bg.jpg',
    title: 'Chef Special Jollof & Plantain',
    category: 'Restaurant',
  },

  // 2. Swimming Pool Category Items
  {
    id: 'pool-main-view',
    type: 'image',
    src: '/pool2-gallery.webp',
    title: 'Casa Milano Swimming Pool',
    category: 'Swimming pool',
  },
  {
    id: 'outdoor-video-main',
    type: 'video',
    src: '/outdoor-gallery.mp4',
    title: 'Outdoor & Pool Atmosphere Video',
    category: 'Swimming pool',
  },
  {
    id: 'video-pool-1',
    type: 'video',
    src: '/video1.MOV',
    title: 'Pool Tour Video',
    category: 'Swimming pool',
  },

  // 3. Lounge / Club Category Items
  {
    id: 'party-celebration-night',
    type: 'image',
    src: '/stay-connected6.jpg',
    title: 'Nightlife Party & Celebration',
    category: 'Lounge/Club',
  },
  {
    id: 'lounge-banner-bar',
    type: 'image',
    src: '/gallery-banner.webp',
    title: 'Lounge & Bar Atmosphere',
    category: 'Lounge/Club',
  },
  {
    id: 'club-gallery-2',
    type: 'image',
    src: '/club2-gallery.webp',
    title: 'VIP Lounge Booths',
    category: 'Lounge/Club',
  },
  {
    id: 'club-gallery-3',
    type: 'image',
    src: '/club3-gallery.webp',
    title: 'Club Mood Lighting',
    category: 'Lounge/Club',
  },
  {
    id: 'lounge-bg-ambiance',
    type: 'image',
    src: '/lounge-bg.jpeg',
    title: 'Lounge Evening Ambiance',
    category: 'Lounge/Club',
  },
  {
    id: 'nightlife-moments',
    type: 'image',
    src: '/nightlife-bg.jpg',
    title: 'Unforgettable Nightlife Moments',
    category: 'Lounge/Club',
  },
  {
    id: 'outdoor-night-party',
    type: 'image',
    src: '/outdoor6-gallery.webp',
    title: 'Outdoor Lounge Night Party',
    category: 'Lounge/Club',
  },
  {
    id: 'arena-entrance-night',
    type: 'image',
    src: '/outdoor2-gallery.webp',
    title: 'Casa Milano Arena Entrance',
    category: 'Lounge/Club',
  },
  {
    id: 'club-video-4',
    type: 'video',
    src: '/club4-gallery.mp4',
    title: 'Live Nightlife Party Highlights',
    category: 'Lounge/Club',
  },
  {
    id: 'club-video-5',
    type: 'video',
    src: '/club5-gallery.mp4',
    title: 'Energy & Music Experience',
    category: 'Lounge/Club',
  },
  {
    id: 'video-lounge-2',
    type: 'video',
    src: '/video2.MOV',
    title: 'Lounge Music & Vibes Video',
    category: 'Lounge/Club',
  },
  {
    id: 'video-lounge-5',
    type: 'video',
    src: '/video5.MOV',
    title: 'Club Lounge Showcase Video',
    category: 'Lounge/Club',
  },

  // 4. Game Lounge Category Items
  {
    id: 'game-gallery-2',
    type: 'image',
    src: '/game2-gallery.webp',
    title: 'Gaming Arena & Billiards',
    category: 'Game Lounge',
  },
  {
    id: 'game-lounge-photo-1',
    type: 'image',
    src: '/Game-lounge.jpeg',
    title: 'Billiards Lounge Room',
    category: 'Game Lounge',
  },
  {
    id: 'game-lounge-photo-2',
    type: 'image',
    src: '/Game-lounge2.jpeg',
    title: 'PlayStation & Lounge Gaming',
    category: 'Game Lounge',
  },
  {
    id: 'game-lounge-photo-3',
    type: 'image',
    src: '/Game-lounge3.jpeg',
    title: 'Game Lounge Setup',
    category: 'Game Lounge',
  },

  // 5. Restaurant & Dining Category Items
  {
    id: 'video-dining-3',
    type: 'video',
    src: '/video3.MOV',
    title: 'Culinary Flavors Video',
    category: 'Restaurant',
  },
  {
    id: 'video-dining-4',
    type: 'video',
    src: '/video4.MOV',
    title: 'Specialty Food & Drinks Video',
    category: 'Restaurant',
  },

  // 6. Gym Category Items
  {
    id: 'gym-equipped-1',
    type: 'image',
    src: '/Fully-Equipped-Gym.jpeg',
    title: 'Fully Equipped Fitness Gym',
    category: 'Gym',
  },
  {
    id: 'gym-equipped-2',
    type: 'image',
    src: '/Fully-Equipped-Gym2.jpeg',
    title: 'Cardio & Strength Training Center',
    category: 'Gym',
  },
];

export const GalleryPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<GalleryCategory>('All');
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(null);

  // Filtered items based on category
  const filteredItems =
    selectedCategory === 'All'
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === selectedCategory);

  const activeItem =
    activeLightboxIndex !== null && filteredItems[activeLightboxIndex]
      ? filteredItems[activeLightboxIndex]
      : null;

  const handleNext = useCallback(() => {
    if (activeLightboxIndex !== null) {
      setActiveLightboxIndex((prev) =>
        prev !== null && prev < filteredItems.length - 1 ? prev + 1 : 0
      );
    }
  }, [activeLightboxIndex, filteredItems.length]);

  const handlePrev = useCallback(() => {
    if (activeLightboxIndex !== null) {
      setActiveLightboxIndex((prev) =>
        prev !== null && prev > 0 ? prev - 1 : filteredItems.length - 1
      );
    }
  }, [activeLightboxIndex, filteredItems.length]);

  const handleClose = useCallback(() => {
    setActiveLightboxIndex(null);
  }, []);

  // Keyboard navigation for Lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activeLightboxIndex === null) return;
      if (e.key === 'Escape') handleClose();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeLightboxIndex, handleClose, handleNext, handlePrev]);

  // Lock scroll when lightbox is open
  useEffect(() => {
    if (activeLightboxIndex !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [activeLightboxIndex]);

  return (
    <div className="relative min-h-screen w-full bg-white text-gray-900 selection:bg-[#F2A922] selection:text-black">
      {/* SEO Metadata */}
      <SEO
        title="Photo & Video Gallery"
        description="Browse high-definition photos and videos of Casa Milano Lounge, VIP Lounge/Club, Swimming Pool, Dining spaces, Game Lounge, and Gym in Minna."
        canonicalPath="/gallery"
        image="/gallery-banner.webp"
      />

      {/* 1. Gallery Hero Banner */}
      <section className="relative w-full min-h-[52vh] sm:min-h-[58vh] md:min-h-[62vh] flex flex-col justify-between overflow-hidden bg-[#0a0a0c]">
        {/* Background Image with Dark Overlays */}
        <div
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/gallery-banner.webp')" }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/55 to-black/85" />
          <div className="absolute inset-0 bg-radial-[at_center_center] from-transparent via-black/25 to-black/75" />
        </div>

        {/* Navbar with GALLERY highlighted */}
        <Navbar activeItem="GALLERY" />

        {/* Center Hero Content */}
        <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 text-center pt-24 pb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="max-w-2xl mx-auto flex flex-col items-center"
          >
            <h1 className="font-bebas text-[34px] sm:text-[42px] md:text-[50px] font-normal tracking-wide text-white leading-tight uppercase drop-shadow-md">
              SEE CASA MILANO.
            </h1>
            <p className="font-dmsans font-normal text-white/90 text-[15px] sm:text-[16px] leading-relaxed max-w-xl mt-3 text-center drop-shadow-sm">
              Take a look inside Casa Milano— from the lounge and dining spaces to poolside
              afternoons and nights filled with music and energy.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. Filter Category Pills Section (Horizontally scrollable on mobile, no wrapping) */}
      <section className="w-full bg-white pt-10 sm:pt-14 pb-4 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-5xl mx-auto overflow-x-auto no-scrollbar py-2">
          <div className="flex items-center justify-start sm:justify-center gap-2 sm:gap-3 px-2 min-w-max mx-auto">
            {CATEGORIES.map((category) => {
              const isSelected = selectedCategory === category;
              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => {
                    setSelectedCategory(category);
                    setActiveLightboxIndex(null);
                  }}
                  className={`shrink-0 whitespace-nowrap px-4 sm:px-5 py-1.5 sm:py-2 rounded-full text-[13px] sm:text-[14.5px] font-dmsans transition-all duration-300 cursor-pointer select-none ${
                    isSelected
                      ? 'bg-neutral-800 text-white font-medium shadow-sm'
                      : 'bg-[#EDEDED] text-neutral-600 hover:bg-neutral-200 hover:text-neutral-900 font-normal'
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. Media Grid Section */}
      <section className="w-full bg-white pb-16 sm:pb-20 md:pb-24 px-4 sm:px-6 lg:px-12">
        <div className="max-w-6xl mx-auto mt-6">
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-7"
          >
            <AnimatePresence>
              {filteredItems.map((item, index) => {
                return (
                  <motion.div
                    key={item.id}
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.35, ease: 'easeOut' }}
                    className="relative aspect-[4/3] rounded-[18px] sm:rounded-[22px] overflow-hidden bg-neutral-900 shadow-none border border-neutral-100"
                  >
                    {/* Media Display */}
                    {item.type === 'video' ? (
                      <video
                        src={item.src}
                        autoPlay
                        muted
                        loop
                        playsInline
                        controls
                        className="w-full h-full object-cover bg-black"
                      />
                    ) : (
                      <img
                        src={item.src}
                        alt={item.title}
                        loading="lazy"
                        onClick={() => setActiveLightboxIndex(index)}
                        className="w-full h-full object-cover cursor-pointer hover:scale-105 transition-transform duration-500"
                      />
                    )}
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </motion.div>

          {/* Empty state safeguard */}
          {filteredItems.length === 0 && (
            <div className="text-center py-20">
              <p className="text-neutral-500 font-dmsans text-base">
                No items found for this category.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* 4. Interactive Lightbox Modal for Images */}
      <AnimatePresence>
        {activeItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 md:p-8"
            onClick={handleClose}
          >
            {/* Top Toolbar */}
            <div
              className="absolute top-4 left-4 right-4 flex items-center justify-between z-10 px-2 sm:px-4"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="text-white font-dmsans">
                <span className="text-[#F2A922] font-semibold text-xs sm:text-sm uppercase tracking-wider mr-2">
                  {activeItem.category}
                </span>
                <span className="text-white/80 text-xs sm:text-sm hidden sm:inline-block">
                  • {activeLightboxIndex !== null ? activeLightboxIndex + 1 : 1} of{' '}
                  {filteredItems.length}
                </span>
              </div>

              <button
                type="button"
                onClick={handleClose}
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Close fullscreen modal"
              >
                <HiXMark className="w-6 h-6" />
              </button>
            </div>

            {/* Navigation Arrow Previous */}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                handlePrev();
              }}
              className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 hover:bg-white/25 text-white flex items-center justify-center transition-all cursor-pointer z-10"
              aria-label="Previous item"
            >
              <HiChevronLeft className="w-6 h-6 sm:w-7 sm:h-7" />
            </button>

            {/* Navigation Arrow Next */}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                handleNext();
              }}
              className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 hover:bg-white/25 text-white flex items-center justify-center transition-all cursor-pointer z-10"
              aria-label="Next item"
            >
              <HiChevronRight className="w-6 h-6 sm:w-7 sm:h-7" />
            </button>

            {/* Modal Content Container */}
            <div
              className="relative max-w-5xl max-h-[82vh] sm:max-h-[85vh] flex flex-col items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              {activeItem.type === 'video' ? (
                <video
                  key={activeItem.src}
                  src={activeItem.src}
                  controls
                  autoPlay
                  playsInline
                  className="max-h-[78vh] sm:max-h-[82vh] max-w-full rounded-[16px] sm:rounded-[20px] shadow-none object-contain bg-black"
                />
              ) : (
                <img
                  key={activeItem.src}
                  src={activeItem.src}
                  alt={activeItem.title}
                  className="max-h-[78vh] sm:max-h-[82vh] max-w-full rounded-[16px] sm:rounded-[20px] shadow-none object-contain"
                />
              )}

              {/* Title Caption */}
              <div className="mt-3 text-center px-4">
                <p className="text-white font-dmsans text-sm sm:text-base font-medium">
                  {activeItem.title}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 5. Final CTA Section */}
      <FinalCtaSection />

      {/* 6. Footer */}
      <Footer />
    </div>
  );
};

export default GalleryPage;
