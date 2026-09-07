import React, { useRef } from 'react';
import { motion, useScroll, useTransform, type MotionValue } from 'framer-motion';

interface WordProps {
  children: string;
  progress: MotionValue<number>;
  range: [number, number];
}

const Word: React.FC<WordProps> = ({ children, progress, range }) => {
  const opacity = useTransform(progress, range, [0.35, 1]);
  const color = useTransform(
    progress,
    range,
    ['rgb(165, 170, 180)', 'rgb(18, 18, 18)']
  );

  return (
    <span className="relative inline-block mr-[0.28em] my-[0.06em]">
      <motion.span
        style={{ color, opacity }}
        className="font-dmsans font-medium transition-colors"
      >
        {children}
      </motion.span>
    </span>
  );
};

export const ScrollTextSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start 0.8', 'end 0.45'],
  });

  const paragraphText =
    "Casa Milano is a destination for good food, relaxation, entertainment and nightlife in Minna. Whether you're meeting friends for dinner, unwinding by the pool, enjoying drinks in the lounge or stepping out for a lively night, Casa Milano gives you the perfect setting to eat, relax, connect and have a great time.";

  const words = paragraphText.split(' ');

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-white text-black pt-14 pb-8 sm:pt-16 sm:pb-10 md:pt-20 md:pb-12 px-4 sm:px-6 lg:px-12 flex flex-col items-center justify-center text-center overflow-hidden"
    >
      <div className="max-w-3xl mx-auto flex flex-col items-center">
        {/* Section Heading in Bebas Neue (32px) */}
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="font-bebas text-[28px] sm:text-[30px] md:text-[32px] font-normal tracking-wide text-black uppercase mb-4 sm:mb-5 select-none text-center"
        >
          MORE THAN JUST A LOUNGE.
        </motion.h2>

        {/* Scroll-Driven Dynamic Text Reveal (24px) */}
        <p className="text-[19px] sm:text-[22px] md:text-[24px] leading-[1.5] text-center max-w-2xl sm:max-w-3xl flex flex-wrap justify-center font-dmsans font-medium">
          {words.map((word, i) => {
            const start = i / words.length;
            const end = start + 1 / words.length;
            return (
              <Word key={i} progress={scrollYProgress} range={[start, end]}>
                {word}
              </Word>
            );
          })}
        </p>
      </div>
    </section>
  );
};

export default ScrollTextSection;
