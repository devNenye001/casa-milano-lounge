import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion } from 'framer-motion';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi2';
import Navbar from '../../components/Navbar';
import Button from '../../components/Button';
import FinalCtaSection from '../../sections/FinalCtaSection';
import Footer from '../../components/Footer';

export interface MenuItem {
  id: string;
  name: string;
  price: string;
  image: string;
}

export const MENU_ITEMS: MenuItem[] = [
  {
    id: 'milkshake',
    name: 'MILKSHAKE',
    price: 'N5500',
    image: '/menu1.svg',
  },
  {
    id: 'cocktail',
    name: 'COCKTAIL',
    price: 'N5000',
    image: '/menu2.svg',
  },
  {
    id: 'fries-chicken',
    name: 'FRENCH FRIES AND CHICKEN',
    price: 'N9000',
    image: '/menu3.svg',
  },
  {
    id: 'shawarma',
    name: 'BEEF SHAWARMA',
    price: 'N5000',
    image: '/menu4.svg',
  },
];

export const RestaurantPage: React.FC = () => {
  const whatsappReserveUrl =
    'https://wa.me/2349169278175?text=Hello%20Casa%20Milano%2C%20I%20would%20like%20to%20reserve%20a%20table';

  const menuScrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = useCallback(() => {
    if (menuScrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = menuScrollRef.current;
      setCanScrollLeft(scrollLeft > 10);
      setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 10);
    }
  }, []);

  useEffect(() => {
    checkScroll();
    window.addEventListener('resize', checkScroll);
    return () => window.removeEventListener('resize', checkScroll);
  }, [checkScroll]);

  const handleMenuScroll = (direction: 'left' | 'right') => {
    if (menuScrollRef.current) {
      const scrollAmount = direction === 'left' ? -250 : 250;
      menuScrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen w-full bg-white text-gray-900 selection:bg-[#F2A922] selection:text-black">
      {/* 1. Restaurant Hero Banner */}
      <section className="relative w-full min-h-[52vh] sm:min-h-[58vh] md:min-h-[62vh] flex flex-col justify-between overflow-hidden bg-[#0a0a0c]">
        {/* Background Image with Dark Overlays */}
        <div
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/rest-banner.jpg')" }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/55 to-black/85" />
          <div className="absolute inset-0 bg-radial-[at_center_center] from-transparent via-black/25 to-black/75" />
        </div>

        {/* Top Navbar with RESTAURANT highlighted */}
        <Navbar activeItem="RESTAURANT" />

        {/* Center Hero Content */}
        <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 text-center pt-24 pb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="max-w-2xl mx-auto flex flex-col items-center"
          >
            <h1 className="font-bebas text-[34px] sm:text-[42px] md:text-[50px] font-normal tracking-wide text-white leading-tight uppercase drop-shadow-md">
              GOOD FOOD. GREAT ATMOSPHERE.
            </h1>
            <p className="font-dmsans font-normal text-white/90 text-[15px] sm:text-[16px] leading-relaxed max-w-xl mt-3 text-center drop-shadow-sm">
              Enjoy a collection of meals, drinks and a relaxed dining experience at Casa
              Milano—whether you're stopping by for a quick meal or settling in for the evening.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. Come Hungry, Stay For The Experience Section */}
      <section className="w-full bg-white py-8 sm:py-10 md:py-12 px-4 sm:px-6 lg:px-12 overflow-hidden">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* Left Column: Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="lg:col-span-6 flex flex-col items-start text-left"
          >
            <h2 className="font-bebas text-[34px] sm:text-[40px] md:text-[46px] font-normal tracking-wide text-black uppercase leading-[1.08]">
              COME HUNGRY.
              <br />
              STAY FOR THE EXPERIENCE.
            </h2>
            <p className="font-dmsans font-normal text-gray-700 text-[15.5px] sm:text-[16.5px] leading-relaxed mt-3.5 max-w-lg">
              At Casa Milano, dining is more than just the food. It's the atmosphere, the company
              and having a place where you can sit back and enjoy your time. From casual meals to
              dinner with friends, settle in and make yourself comfortable.
            </p>
          </motion.div>

          {/* Right Column: Stadium / Oval Capsule Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
            className="lg:col-span-6 flex items-center justify-center"
          >
            <div className="w-full max-w-lg aspect-[16/11] rounded-[60px] sm:rounded-[90px] md:rounded-[120px] overflow-hidden shadow-none bg-neutral-900 border border-gray-100">
              <img
                src="/come-hungry.jpg"
                alt="Friends dining and enjoying moments at Casa Milano"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. What's On The Menu Section */}
      <section className="w-full bg-white py-8 sm:py-10 md:py-12 px-4 sm:px-6 lg:px-12">
        <div className="max-w-6xl mx-auto flex flex-col items-center">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="text-center max-w-xl mx-auto mb-6 sm:mb-8"
          >
            <h2 className="font-bebas text-[32px] sm:text-[38px] md:text-[42px] font-normal tracking-wide text-black uppercase leading-tight">
              WHAT'S ON THE MENU?
            </h2>
            <p className="font-dmsans font-normal text-gray-600 text-[15px] sm:text-[16px] leading-relaxed mt-2">
              Explore our selection of meals and drinks, prepared to satisfy every craving.
            </p>
          </motion.div>

          {/* Menu Cards Container with Side Navigation Arrows */}
          <div className="relative w-full">
            {/* Left Scroll Arrow (Visible on small screens when scrolled) */}
            {canScrollLeft && (
              <button
                type="button"
                onClick={() => handleMenuScroll('left')}
                className="sm:hidden absolute left-0 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-white/95 backdrop-blur-md border border-gray-200 text-gray-800 flex items-center justify-center transition-all active:scale-95 cursor-pointer -ml-2"
                aria-label="Scroll menu left"
              >
                <HiChevronLeft className="w-5 h-5 text-[#F2A922]" />
              </button>
            )}

            {/* Right Scroll Arrow (Visible on small screens until reaching the end) */}
            {canScrollRight && (
              <button
                type="button"
                onClick={() => handleMenuScroll('right')}
                className="sm:hidden absolute right-0 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-white/95 backdrop-blur-md border border-gray-200 text-gray-800 flex items-center justify-center transition-all active:scale-95 cursor-pointer -mr-2"
                aria-label="Scroll menu right"
              >
                <HiChevronRight className="w-5 h-5 text-[#F2A922]" />
              </button>
            )}

            {/* Menu Cards Scroll Track */}
            <div
              ref={menuScrollRef}
              onScroll={checkScroll}
              className="w-full overflow-x-auto no-scrollbar py-2"
            >
              <div className="flex flex-nowrap sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 min-w-max sm:min-w-0 px-2 sm:px-0">
                {MENU_ITEMS.map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-30px' }}
                    transition={{ duration: 0.45, ease: 'easeOut', delay: index * 0.08 }}
                    className="w-[220px] sm:w-auto bg-[#F4F5F7] rounded-[32px] sm:rounded-[36px] p-6 sm:p-7 flex flex-col items-center justify-between text-center transition-all duration-300 hover:-translate-y-1 shrink-0"
                  >
                    {/* Item Image */}
                    <div className="w-full flex items-center justify-center h-32 sm:h-36 mb-4">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="max-h-full max-w-full object-contain transition-transform duration-300 hover:scale-105"
                      />
                    </div>

                    {/* Title and Price (Price in DM Sans Medium) */}
                    <div className="w-full flex flex-col items-center">
                      <h3 className="font-bebas text-[18px] sm:text-[20px] tracking-wide text-gray-900 uppercase leading-snug line-clamp-2 min-h-[44px] flex items-center justify-center">
                        {item.name}
                      </h3>
                      <p className="font-dmsans text-[16px] sm:text-[17px] text-gray-900 font-medium tracking-normal mt-1">
                        {item.price}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* View Full Menu Button */}
          <div className="mt-7 sm:mt-9 flex justify-center">
            <Button
              href="/Menu.pdf"
              target="_blank"
              rel="noopener noreferrer"
              variant="primary"
              animateArrow={true}
              className="px-8 py-3.5 text-[15.5px] sm:text-[16px] shadow-none"
            >
              View Full Menu
            </Button>
          </div>
        </div>
      </section>

      {/* 4. Made For Good Times Video Section */}
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
              Whether you're grabbing a meal during the day or starting your evening at Casa
              Milano, our dining space gives you the perfect setting to eat, relax and connect.
            </p>
          </motion.div>

          {/* Video Player */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="w-full rounded-[18px] sm:rounded-[26px] overflow-hidden shadow-none bg-black border border-gray-100"
          >
            <video
              src="/outdoor-gallery.mp4"
              autoPlay
              muted
              loop
              playsInline
              controls
              className="w-full aspect-[16/9] sm:aspect-[21/9] md:aspect-[2.3/1] object-cover bg-black"
            />
          </motion.div>

          {/* Reserve a Table Button */}
          <div className="mt-6 sm:mt-8 flex justify-center">
            <Button
              href={whatsappReserveUrl}
              target="_blank"
              rel="noopener noreferrer"
              variant="primary"
              animateArrow={true}
              className="px-8 py-3.5 text-[15.5px] sm:text-[16px] shadow-none"
            >
              Reserve a Table
            </Button>
          </div>
        </div>
      </section>

      {/* 5. Final CTA Section */}
      <FinalCtaSection />

      {/* 6. Footer */}
      <Footer />
    </div>
  );
};

export default RestaurantPage;
