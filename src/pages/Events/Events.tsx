import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  HiChevronLeft,
  HiChevronRight,
  HiXMark,
} from 'react-icons/hi2';
import Navbar from '../../components/Navbar';
import Button from '../../components/Button';
import FinalCtaSection from '../../sections/FinalCtaSection';
import Footer from '../../components/Footer';

export interface WeeklyEvent {
  id: string;
  day: string;
  title: string;
  image: string;
  details: string[];
  secondTitle?: string;
  secondDetails?: string[];
}

export const WEEKLY_EVENTS: WeeklyEvent[] = [
  {
    id: 'wednesday-wet-savage',
    day: 'WEDNESDAY',
    title: 'WET & SAVAGE',
    image: '/swimming-friday.jpg',
    details: ['Pool Party · 2 PM'],
  },
  {
    id: 'friday-magic-milano',
    day: 'FRIDAY',
    title: 'MAGIC MILANO',
    image: '/stay-connected5.jpg',
    details: ['Arena · 6 PM', 'Club · 11 PM'],
  },
  {
    id: 'saturday-arena-vibes',
    day: 'SATURDAY',
    title: 'ARENA VIBES',
    image: '/contact-section.jpg',
    details: ['Arena · 6 PM'],
  },
  {
    id: 'sunday-arena-luxury',
    day: 'SUNDAY',
    title: 'ARENA EXTRA',
    image: '/sunday-bg.jpg',
    details: ['Arena · 6 PM'],
    secondTitle: 'LUXURY SUNDAY',
    secondDetails: ['Arena · 10 PM'],
  },
];

export const FLYERS = [
  { id: 'flyer-1', src: '/flyer1.png', title: 'Casa Milano Event Flyer 1' },
  { id: 'flyer-2', src: '/flyer2.png', title: 'Casa Milano Event Flyer 2' },
  { id: 'flyer-3', src: '/flyer3.png', title: 'Casa Milano Event Flyer 3' },
  { id: 'flyer-4', src: '/flyer4.png', title: 'Casa Milano Event Flyer 4' },
  { id: 'flyer-5', src: '/flyer5.png', title: 'Casa Milano Event Flyer 5' },
  { id: 'flyer-6', src: '/flyer6.png', title: 'Casa Milano Event Flyer 6' },
  { id: 'flyer-7', src: '/flyer7.png', title: 'Casa Milano Event Flyer 7' },
  { id: 'flyer-8', src: '/flyer8.png', title: 'Casa Milano Event Flyer 8' },
  { id: 'flyer-9', src: '/flyer9.png', title: 'Casa Milano Event Flyer 9' },
  { id: 'flyer-10', src: '/flyer10.png', title: 'Casa Milano Event Flyer 10' },
];

export const EVENT_VIDEOS = [
  {
    id: 'event-video-1',
    src: '/video1.MOV',
    title: 'Pool & Lounge Energy',
  },
  {
    id: 'event-video-2',
    src: '/video2.MOV',
    title: 'Vibrant Club & Nightlife',
  },
  {
    id: 'event-video-3',
    src: '/video3.MOV',
    title: 'Cocktails & Evening Ambiance',
  },
];

export const EventsPage: React.FC = () => {
  const whatsappHostUrl =
    'https://wa.me/2349169278175?text=Hello%20Casa%20Milano%2C%20I%20would%20like%20to%20inquire%20about%20hosting%20an%20event';

  // Weekly Events Scroll State for Mobile
  const weeklyScrollRef = useRef<HTMLDivElement>(null);
  const [canScrollWeeklyLeft, setCanScrollWeeklyLeft] = useState(false);
  const [canScrollWeeklyRight, setCanScrollWeeklyRight] = useState(true);

  const checkWeeklyScroll = useCallback(() => {
    if (weeklyScrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = weeklyScrollRef.current;
      setCanScrollWeeklyLeft(scrollLeft > 10);
      setCanScrollWeeklyRight(scrollLeft + clientWidth < scrollWidth - 10);
    }
  }, []);

  // Flyers Scroll State for Mobile
  const flyersScrollRef = useRef<HTMLDivElement>(null);
  const [canScrollFlyersLeft, setCanScrollFlyersLeft] = useState(false);
  const [canScrollFlyersRight, setCanScrollFlyersRight] = useState(true);

  const checkFlyersScroll = useCallback(() => {
    if (flyersScrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = flyersScrollRef.current;
      setCanScrollFlyersLeft(scrollLeft > 10);
      setCanScrollFlyersRight(scrollLeft + clientWidth < scrollWidth - 10);
    }
  }, []);

  useEffect(() => {
    checkWeeklyScroll();
    checkFlyersScroll();
    window.addEventListener('resize', checkWeeklyScroll);
    window.addEventListener('resize', checkFlyersScroll);
    return () => {
      window.removeEventListener('resize', checkWeeklyScroll);
      window.removeEventListener('resize', checkFlyersScroll);
    };
  }, [checkWeeklyScroll, checkFlyersScroll]);

  const handleWeeklyScroll = (direction: 'left' | 'right') => {
    if (weeklyScrollRef.current) {
      const scrollAmount = direction === 'left' ? -280 : 280;
      weeklyScrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const handleFlyersScroll = (direction: 'left' | 'right') => {
    if (flyersScrollRef.current) {
      const scrollAmount = direction === 'left' ? -290 : 290;
      flyersScrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  // Lightbox State for Flyers
  const [activeFlyerModal, setActiveFlyerModal] = useState<{
    src: string;
    title: string;
  } | null>(null);

  // Close modal on Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActiveFlyerModal(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (activeFlyerModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [activeFlyerModal]);

  return (
    <div className="relative min-h-screen w-full bg-white text-gray-900 selection:bg-[#F2A922] selection:text-black">
      {/* 1. Events Hero Banner */}
      <section className="relative w-full min-h-[52vh] sm:min-h-[58vh] md:min-h-[62vh] flex flex-col justify-between overflow-hidden bg-[#0a0a0c]">
        {/* Background Image with Dark Overlays */}
        <div
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/event-page-banner.jpg')" }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/55 to-black/85" />
          <div className="absolute inset-0 bg-radial-[at_center_center] from-transparent via-black/25 to-black/75" />
        </div>

        {/* Top Navbar with EVENTS highlighted */}
        <Navbar activeItem="EVENTS" />

        {/* Center Hero Content */}
        <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 text-center pt-24 pb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="max-w-2xl mx-auto flex flex-col items-center"
          >
            <h1 className="font-bebas text-[34px] sm:text-[42px] md:text-[50px] font-normal tracking-wide text-white leading-tight uppercase drop-shadow-md">
              THERE'S ALWAYS SOMETHING HAPPENING.
            </h1>
            <p className="font-dmsans font-normal text-white/90 text-[15px] sm:text-[16px] leading-relaxed max-w-xl mt-3 text-center drop-shadow-sm">
              Weekly parties, pool events and unforgettable nights. Host your own event at
              Casa Milano.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. Weekly At Casa Milano Section (Clean Laptop 4-Col Grid, Smooth Mobile Scroll) */}
      <section className="w-full bg-white py-8 sm:py-10 md:py-12 px-4 sm:px-6 lg:px-12 overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col items-center">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="text-center max-w-xl mx-auto mb-6 sm:mb-8"
          >
            <h2 className="font-bebas text-[32px] sm:text-[38px] md:text-[44px] font-normal tracking-wide text-black uppercase leading-tight">
              WEEKLY AT CASA MILANO
            </h2>
          </motion.div>

          {/* Weekly Event Cards Container with Responsive Navigation Arrows */}
          <div className="relative w-full">
            {/* Left Scroll Arrow (Mobile only) */}
            {canScrollWeeklyLeft && (
              <button
                type="button"
                onClick={() => handleWeeklyScroll('left')}
                className="lg:hidden absolute left-0 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-white/95 backdrop-blur-md border border-gray-200 text-gray-800 flex items-center justify-center transition-all active:scale-95 cursor-pointer -ml-2"
                aria-label="Scroll left"
              >
                <HiChevronLeft className="w-5 h-5 text-[#F2A922]" />
              </button>
            )}

            {/* Right Scroll Arrow (Mobile only) */}
            {canScrollWeeklyRight && (
              <button
                type="button"
                onClick={() => handleWeeklyScroll('right')}
                className="lg:hidden absolute right-0 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-white/95 backdrop-blur-md border border-gray-200 text-gray-800 flex items-center justify-center transition-all active:scale-95 cursor-pointer -mr-2"
                aria-label="Scroll right"
              >
                <HiChevronRight className="w-5 h-5 text-[#F2A922]" />
              </button>
            )}

            {/* Cards Grid / Scroll Track */}
            <div
              ref={weeklyScrollRef}
              onScroll={checkWeeklyScroll}
              className="w-full overflow-x-auto lg:overflow-visible no-scrollbar py-2"
            >
              <div className="flex flex-nowrap lg:grid lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6 min-w-max lg:min-w-0 px-2 sm:px-0">
                {WEEKLY_EVENTS.map((event, index) => (
                  <motion.div
                    key={event.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-30px' }}
                    transition={{ duration: 0.45, ease: 'easeOut', delay: index * 0.08 }}
                    className="relative w-[270px] sm:w-[290px] lg:w-full aspect-[3/4.2] rounded-[24px] sm:rounded-[28px] lg:rounded-[30px] overflow-hidden bg-neutral-900 flex flex-col justify-end p-6 sm:p-7 group shrink-0 shadow-none border border-neutral-800/40"
                  >
                    {/* Background Image */}
                    <img
                      src={event.image}
                      alt={`${event.day} - ${event.title}`}
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />

                    {/* Dark Atmospheric Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent group-hover:from-black/95 transition-colors duration-300" />

                    {/* Content at bottom */}
                    <div className="relative z-10 flex flex-col items-start text-left w-full">
                      <span className="font-bebas text-[20px] sm:text-[22px] lg:text-[24px] tracking-wider text-white uppercase leading-none">
                        {event.day}
                      </span>
                      <h3 className="font-bebas text-[28px] sm:text-[32px] lg:text-[34px] tracking-wide text-[#F2A922] uppercase leading-none mt-1.5 mb-2">
                        {event.title}
                      </h3>
                      <div className="font-dmsans text-[13.5px] sm:text-[14px] text-white/90 leading-snug space-y-1">
                        {event.details.map((detail, dIdx) => (
                          <p key={dIdx}>{detail}</p>
                        ))}
                      </div>

                      {/* Optional Second Event on Sunday */}
                      {event.secondTitle && (
                        <div className="mt-3.5 sm:mt-4 w-full">
                          <h4 className="font-bebas text-[28px] sm:text-[32px] lg:text-[34px] tracking-wide text-[#F2A922] uppercase leading-none mb-1">
                            {event.secondTitle}
                          </h4>
                          {event.secondDetails?.map((sDetail, sIdx) => (
                            <p
                              key={sIdx}
                              className="font-dmsans text-[13.5px] sm:text-[14px] text-white/90 leading-snug"
                            >
                              {sDetail}
                            </p>
                          ))}
                        </div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Made For Good Times (Flyers Section) */}
      <section className="w-full bg-white py-8 sm:py-10 md:py-12 px-4 sm:px-6 lg:px-12">
        <div className="max-w-6xl mx-auto flex flex-col items-center">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="text-center max-w-xl mx-auto mb-5 sm:mb-6"
          >
            <h2 className="font-bebas text-[32px] sm:text-[38px] md:text-[42px] font-normal tracking-wide text-black uppercase leading-tight">
              MADE FOR GOOD TIMES.
            </h2>
            <p className="font-dmsans font-normal text-gray-600 text-[15px] sm:text-[16px] leading-relaxed mt-2">
              See the parties, events and unforgettable nights at Casa Milano.
            </p>
          </motion.div>

          {/* Flyers Horizontal Scroll Track with Navigation Arrows */}
          <div className="relative w-full">
            {/* Left Scroll Arrow */}
            {canScrollFlyersLeft && (
              <button
                type="button"
                onClick={() => handleFlyersScroll('left')}
                className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/95 backdrop-blur-md border border-gray-200 text-gray-800 flex items-center justify-center transition-all active:scale-95 cursor-pointer -ml-3"
                aria-label="Scroll flyers left"
              >
                <HiChevronLeft className="w-6 h-6 text-[#F2A922]" />
              </button>
            )}

            {/* Right Scroll Arrow */}
            {canScrollFlyersRight && (
              <button
                type="button"
                onClick={() => handleFlyersScroll('right')}
                className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/95 backdrop-blur-md border border-gray-200 text-gray-800 flex items-center justify-center transition-all active:scale-95 cursor-pointer -mr-3"
                aria-label="Scroll flyers right"
              >
                <HiChevronRight className="w-6 h-6 text-[#F2A922]" />
              </button>
            )}

            {/* Flyers Scroll Container */}
            <div
              ref={flyersScrollRef}
              onScroll={checkFlyersScroll}
              className="w-full overflow-x-auto no-scrollbar py-2"
            >
              <div className="flex flex-nowrap gap-4 sm:gap-6 px-2">
                {FLYERS.map((flyer, index) => (
                  <motion.div
                    key={flyer.id}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: '-30px' }}
                    transition={{ duration: 0.4, ease: 'easeOut', delay: index * 0.05 }}
                    onClick={() =>
                      setActiveFlyerModal({
                        src: flyer.src,
                        title: flyer.title,
                      })
                    }
                    className="w-[220px] sm:w-[260px] md:w-[290px] aspect-[3/4] rounded-[18px] sm:rounded-[22px] overflow-hidden bg-neutral-900 shrink-0 cursor-pointer hover:scale-103 transition-transform duration-300 border border-gray-100"
                  >
                    <img
                      src={flyer.src}
                      alt={flyer.title}
                      loading="lazy"
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Your Event, Our Space Section (No Shadow Behind Image) */}
      <section className="w-full bg-white py-8 sm:py-10 md:py-12 px-4 sm:px-6 lg:px-12 overflow-hidden">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* Left Column: Text & CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="lg:col-span-6 flex flex-col items-start text-left"
          >
            <h2 className="font-bebas text-[34px] sm:text-[40px] md:text-[46px] font-normal tracking-wide text-black uppercase leading-[1.08]">
              YOUR EVENT,
              <br />
              OUR SPACE.
            </h2>
            <p className="font-dmsans font-normal text-gray-700 text-[15.5px] sm:text-[16.5px] leading-relaxed mt-3.5 max-w-lg">
              Planning a birthday, wedding party, corporate event or special celebration? Bring
              it to Casa Milano.
            </p>

            <div className="mt-6 sm:mt-7">
              <Button
                href={whatsappHostUrl}
                target="_blank"
                rel="noopener noreferrer"
                variant="primary"
                animateArrow={true}
                className="px-8 py-3.5 text-[15.5px] sm:text-[16px] shadow-none"
              >
                Host an event
              </Button>
            </div>
          </motion.div>

          {/* Right Column: Stadium / Oval Capsule Image (No Shadow) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
            className="lg:col-span-6 flex items-center justify-center"
          >
            <div className="w-full max-w-lg aspect-[16/11] rounded-[60px] sm:rounded-[90px] md:rounded-[120px] overflow-hidden bg-neutral-900 border border-gray-100">
              <img
                src="/final-cta-img1.jpg"
                alt="Friends celebrating an event at Casa Milano"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* 5. Good Nights Look Like This Section (Autoplay Videos with Controls, No CSS Play Overlay) */}
      <section className="w-full bg-white py-8 sm:py-10 md:py-12 px-4 sm:px-6 lg:px-12">
        <div className="max-w-6xl mx-auto flex flex-col items-center">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="text-center max-w-xl mx-auto mb-5 sm:mb-6"
          >
            <h2 className="font-bebas text-[32px] sm:text-[38px] md:text-[42px] font-normal tracking-wide text-black uppercase leading-tight">
              GOOD NIGHTS LOOK LIKE THIS.
            </h2>
            <p className="font-dmsans font-normal text-gray-600 text-[15px] sm:text-[16px] leading-relaxed mt-2">
              See the parties, people and moments that make Casa Milano come alive.
            </p>
          </motion.div>

          {/* 3 Video Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-6 w-full">
            {EVENT_VIDEOS.map((video, index) => (
              <motion.div
                key={video.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.45, ease: 'easeOut', delay: index * 0.08 }}
                className="relative aspect-[3/4] rounded-[20px] sm:rounded-[24px] overflow-hidden bg-black border border-gray-100"
              >
                {/* Autoplaying Video with Controls */}
                <video
                  src={video.src}
                  autoPlay
                  muted
                  loop
                  playsInline
                  controls
                  className="w-full h-full object-cover bg-black"
                />
              </motion.div>
            ))}
          </div>

          {/* View Gallery Button */}
          <div className="mt-6 sm:mt-8 flex justify-center">
            <Button
              href="/gallery"
              variant="primary"
              animateArrow={true}
              className="px-8 py-3.5 text-[15.5px] sm:text-[16px] shadow-none"
            >
              View Gallery
            </Button>
          </div>
        </div>
      </section>

      {/* 6. Lightbox Modal for Flyers */}
      <AnimatePresence>
        {activeFlyerModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 md:p-8"
            onClick={() => setActiveFlyerModal(null)}
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setActiveFlyerModal(null)}
              className="absolute top-4 right-4 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer z-10"
              aria-label="Close modal"
            >
              <HiXMark className="w-6 h-6" />
            </button>

            {/* Modal Content */}
            <div
              className="relative max-w-4xl max-h-[85vh] flex flex-col items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={activeFlyerModal.src}
                alt={activeFlyerModal.title}
                className="max-h-[80vh] max-w-full rounded-[16px] sm:rounded-[20px] object-contain"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 7. Final CTA Section */}
      <FinalCtaSection />

      {/* 8. Footer */}
      <Footer />
    </div>
  );
};

export default EventsPage;
