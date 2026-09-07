import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiStar, HiArrowLeft, HiArrowRight } from 'react-icons/hi2';

export interface Testimonial {
  id: string;
  rating: string;
  quote: string;
  author: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    rating: '4.8 Star Rating',
    quote:
      '“The atmosphere is what stood out for me. Great food, a beautiful environment, and the perfect place to relax and spend time with friends.”',
    author: '— Ibrahim A.',
  },
  {
    id: '2',
    rating: '4.8 Star Rating',
    quote:
      '“Casa Milano gave us more than just a night out. From the service to the ambience, everything made the experience feel special.”',
    author: '— Esther M.',
  },
  {
    id: '3',
    rating: '5.0 Star Rating',
    quote:
      '“The pool and lounge vibe is unmatched in Minna. Delicious food, incredible music and friendly, attentive staff throughout the night.”',
    author: '— David K.',
  },
  {
    id: '4',
    rating: '4.9 Star Rating',
    quote:
      '“Unforgettable VIP experience for our private celebration. The bottle service was top-tier and the artisan cocktails were outstanding.”',
    author: '— Aisha B.',
  },
];

export const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  // Visible cards calculation for desktop view
  const visibleCards = [
    TESTIMONIALS[currentIndex],
    TESTIMONIALS[(currentIndex + 1) % TESTIMONIALS.length],
  ];

  return (
    <section className="w-full bg-white text-black pt-4 pb-16 sm:pt-6 sm:pb-20 md:pt-8 md:pb-24 px-4 sm:px-6 lg:px-12 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Header & Arrow Controls */}
        <div className="flex flex-col md:flex-row items-center md:items-end justify-between mb-8 sm:mb-12 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="text-center md:text-left max-w-2xl"
          >
            <h2 className="font-bebas text-[28px] sm:text-[30px] md:text-[32px] font-normal tracking-wide text-black uppercase">
              WHAT OUR GUESTS SAY
            </h2>
            <p className="font-dmsans font-normal text-gray-700 text-[16px] leading-relaxed mt-2">
              There's a reason guests keep coming back. From the atmosphere to the food,
              service and unforgettable nights, Casa Milano is made for experiences worth
              talking about.
            </p>
          </motion.div>

          {/* Navigation Arrows for Easy Browsing */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={prevSlide}
              className="w-11 h-11 rounded-full border border-gray-300 bg-white hover:border-[#F2A922] hover:bg-[#F2A922] hover:text-white text-gray-800 flex items-center justify-center transition-all duration-300 shadow-sm cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F2A922]"
              aria-label="Previous Testimonial"
            >
              <HiArrowLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={nextSlide}
              className="w-11 h-11 rounded-full border border-gray-300 bg-white hover:border-[#F2A922] hover:bg-[#F2A922] hover:text-white text-gray-800 flex items-center justify-center transition-all duration-300 shadow-sm cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F2A922]"
              aria-label="Next Testimonial"
            >
              <HiArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Testimonials Carousel Cards */}
        <div className="relative">
          {/* Desktop & Tablet: 2 Side-by-Side Cards with Smooth AnimatePresence */}
          <div className="hidden sm:grid sm:grid-cols-2 gap-6">
            <AnimatePresence mode="popLayout">
              {visibleCards.map((item, idx) => (
                <motion.div
                  key={`${item.id}-${currentIndex}-${idx}`}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.35, ease: 'easeOut' }}
                  className="bg-[#f4f4f5] rounded-[24px] p-7 sm:p-8 flex flex-col justify-between min-h-[220px] shadow-none"
                >
                  <div className="space-y-4">
                    {/* Star Rating */}
                    <div className="flex items-center gap-1.5 text-[#F2A922]">
                      <HiStar className="w-5 h-5 fill-current" />
                      <span className="font-dmsans font-semibold text-sm tracking-tight text-[#F2A922]">
                        {item.rating}
                      </span>
                    </div>

                    {/* Quote */}
                    <p className="font-dmsans font-medium text-gray-900 text-[16px] sm:text-[17px] leading-relaxed">
                      {item.quote}
                    </p>
                  </div>

                  {/* Author */}
                  <div className="mt-6 pt-2">
                    <span className="font-dmsans font-medium text-gray-600 text-[15px]">
                      {item.author}
                    </span>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Mobile Single Card with AnimatePresence */}
          <div className="sm:hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={TESTIMONIALS[currentIndex].id}
                initial={{ opacity: 0, x: 25 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -25 }}
                transition={{ duration: 0.3 }}
                className="bg-[#f4f4f5] rounded-[24px] p-6 flex flex-col justify-between min-h-[220px]"
              >
                <div className="space-y-3.5">
                  <div className="flex items-center gap-1.5 text-[#F2A922]">
                    <HiStar className="w-5 h-5 fill-current" />
                    <span className="font-dmsans font-semibold text-sm text-[#F2A922]">
                      {TESTIMONIALS[currentIndex].rating}
                    </span>
                  </div>

                  <p className="font-dmsans font-medium text-gray-900 text-[16px] leading-relaxed">
                    {TESTIMONIALS[currentIndex].quote}
                  </p>
                </div>

                <div className="mt-5">
                  <span className="font-dmsans font-medium text-gray-600 text-[15px]">
                    {TESTIMONIALS[currentIndex].author}
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Carousel Indicators Dots */}
        <div className="flex items-center justify-center gap-2 mt-8">
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setCurrentIndex(i)}
              className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                currentIndex === i ? 'w-8 bg-[#F2A922]' : 'w-2 bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
