import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export const HomeVideoSection: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [showControls, setShowControls] = useState(false);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = true;
      videoRef.current.play().catch(() => {
        // Autoplay policy handled gracefully
      });
    }
  }, []);

  const handleVideoClick = () => {
    setShowControls(true);
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
      }
    }
  };

  return (
    <section className="w-full bg-white text-black pt-2 pb-6 sm:pt-4 sm:pb-8 md:pt-6 md:pb-10 px-4 sm:px-6 lg:px-12">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          onClick={handleVideoClick}
          className="relative w-full aspect-[16/9] sm:aspect-[16/8.5] md:aspect-[21/10] rounded-[20px] sm:rounded-[28px] overflow-hidden bg-black cursor-pointer shadow-none select-none flex items-center justify-center"
        >
          {/* Main Video: Autoplay, Muted, and Native Controls on Tap */}
          <video
            ref={videoRef}
            src="/home-video.mp4"
            autoPlay
            muted
            loop
            playsInline
            controls={showControls}
            preload="auto"
            className="w-full h-full object-cover rounded-[20px] sm:rounded-[28px]"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default HomeVideoSection;

