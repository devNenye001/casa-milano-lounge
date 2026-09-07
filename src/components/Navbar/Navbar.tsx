import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiXMark } from 'react-icons/hi2';

export interface NavItem {
  label: string;
  href: string;
  isExternal?: boolean;
}

export const NAV_ITEMS: NavItem[] = [
  { label: 'HOME', href: '/' },
  { label: 'EVENTS', href: '#events' },
  { label: 'RESTAURANT', href: '#restaurant' },
  { label: 'GALLERY', href: '#gallery' },
  { label: 'CONTACT', href: '#contact' },
];

export interface NavbarProps {
  activeItem?: string;
  onNavigate?: (href: string) => void;
  forceScrolled?: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeItem = 'HOME',
  onNavigate,
  forceScrolled = false,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 20);
    };

    // Initial check
    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  // Handle ESC key to close mobile menu
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  const scrolledActive = forceScrolled || isScrolled;

  const handleLinkClick = (href: string) => {
    setMobileMenuOpen(false);
    if (onNavigate) {
      onNavigate(href);
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
          scrolledActive
            ? 'bg-white/95 backdrop-blur-md py-2.5 sm:py-3 border-b border-gray-200 shadow-sm'
            : 'bg-transparent py-4 sm:py-5 border-b border-transparent shadow-none'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 flex items-center justify-between">
          {/* Logo with Smooth Cross-fade on Scroll */}
          <a
            href="/"
            onClick={(e) => {
              if (onNavigate) {
                e.preventDefault();
                handleLinkClick('/');
              }
            }}
            className="relative flex items-center h-16 sm:h-[74px] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F2A922] rounded-md transition-transform hover:scale-105"
            aria-label="Casa Milano Lounge Home"
          >
            {/* White SVG Logo (Default / Top) */}
            <motion.img
              src="/logo-white.svg"
              alt="Casa Milano Lounge"
              className="h-16 sm:h-[74px] w-auto object-contain transition-all duration-500"
              initial={false}
              animate={{
                opacity: scrolledActive ? 0 : 1,
                scale: scrolledActive ? 0.92 : 1,
                display: scrolledActive ? 'none' : 'block',
              }}
              transition={{ duration: 0.35, ease: 'easeInOut' }}
            />

            {/* Golden Logo (Scrolled) */}
            <motion.img
              src="/logo-golden.png"
              alt="Casa Milano Lounge"
              className="h-16 sm:h-[74px] w-auto object-contain transition-all duration-500"
              initial={false}
              animate={{
                opacity: scrolledActive ? 1 : 0,
                scale: scrolledActive ? 1 : 0.92,
                display: scrolledActive ? 'block' : 'none',
              }}
              transition={{ duration: 0.35, ease: 'easeInOut' }}
            />
          </a>

          {/* Desktop Navigation Links (16px Bebas Neue) */}
          <nav className="hidden md:flex items-center gap-7 lg:gap-10" aria-label="Main Navigation">
            {NAV_ITEMS.map((item) => {
              const isActive = activeItem.toUpperCase() === item.label.toUpperCase();
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => {
                    if (onNavigate) {
                      e.preventDefault();
                      handleLinkClick(item.href);
                    }
                  }}
                  className={`group relative text-[16px] font-bebas tracking-widest transition-colors duration-300 py-1 ${
                    isActive
                      ? 'text-[#F2A922]'
                      : scrolledActive
                      ? 'text-gray-900 hover:text-[#F2A922]'
                      : 'text-white/90 hover:text-[#F2A922]'
                  }`}
                >
                  <span className="relative z-10">{item.label}</span>
                  {/* Subtle hover underline indicator */}
                  <span
                    className={`absolute bottom-0 left-0 h-[2px] bg-[#F2A922] transition-all duration-300 ease-out ${
                      isActive ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                  />
                </a>
              );
            })}
          </nav>

          {/* Mobile Hamburger Button */}
          <div className="flex md:hidden items-center">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`relative p-1.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F2A922] rounded-lg transition-colors cursor-pointer ${
                scrolledActive
                  ? 'text-gray-900 hover:text-[#F2A922]'
                  : 'text-white hover:text-[#F2A922]'
              }`}
              aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
              aria-expanded={mobileMenuOpen}
            >
              <div className="w-5 h-4 flex flex-col justify-between items-center relative">
                <span
                  className={`h-[1.5px] w-5 bg-current rounded-full transition-all duration-300 ease-in-out ${
                    mobileMenuOpen ? 'rotate-45 translate-y-[7px] bg-[#F2A922]' : ''
                  }`}
                />
                <span
                  className={`h-[1.5px] w-5 bg-current rounded-full transition-all duration-300 ease-in-out ${
                    mobileMenuOpen ? 'opacity-0 scale-x-0' : 'opacity-100'
                  }`}
                />
                <span
                  className={`h-[1.5px] w-5 bg-current rounded-full transition-all duration-300 ease-in-out ${
                    mobileMenuOpen ? '-rotate-45 -translate-y-[7px] bg-[#F2A922]' : ''
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu (White Background, Clean Minimalist) */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm md:hidden"
              aria-hidden="true"
            />

            {/* Mobile Drawer Panel (White Background) */}
            <motion.aside
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 280 }}
              className="fixed top-0 right-0 bottom-0 z-50 w-[80%] max-w-xs bg-white text-gray-900 border-l border-gray-200 flex flex-col p-6 sm:p-8 md:hidden shadow-2xl overflow-y-auto"
              role="dialog"
              aria-modal="true"
              aria-label="Mobile Navigation"
            >
              {/* Header inside drawer with Golden Logo and Close Button */}
              <div className="flex items-center justify-between pb-5 border-b border-gray-100">
                <img
                  src="/logo-golden.png"
                  alt="Casa Milano Lounge"
                  className="h-11 w-auto object-contain"
                />
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-1.5 text-gray-600 hover:text-[#F2A922] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F2A922] rounded-lg transition-colors cursor-pointer"
                  aria-label="Close menu"
                >
                  <HiXMark className="w-6 h-6" />
                </button>
              </div>

              {/* Navigation Links inside White Drawer */}
              <nav className="flex flex-col gap-5 mt-8" aria-label="Mobile menu links">
                {NAV_ITEMS.map((item, index) => {
                  const isActive = activeItem.toUpperCase() === item.label.toUpperCase();
                  return (
                    <motion.a
                      key={item.label}
                      href={item.href}
                      onClick={(e) => {
                        if (onNavigate) {
                          e.preventDefault();
                        }
                        handleLinkClick(item.href);
                      }}
                      initial={{ opacity: 0, x: 15 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.08 + index * 0.04, duration: 0.25 }}
                      className={`text-2xl font-bebas tracking-wider py-1.5 transition-colors duration-200 flex items-center justify-between group ${
                        isActive
                          ? 'text-[#F2A922]'
                          : 'text-gray-900 hover:text-[#F2A922]'
                      }`}
                    >
                      <span>{item.label}</span>
                      <span
                        className={`w-2 h-2 rounded-full bg-[#F2A922] transition-opacity duration-200 ${
                          isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                        }`}
                      />
                    </motion.a>
                  );
                })}
              </nav>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;

