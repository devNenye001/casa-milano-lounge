import React, { useRef, useState } from 'react';
import { motion, type Variants } from 'framer-motion';
import Button from '../components/Button';

export interface VideoItem {
  id: string;
  src: string;
  title: string;
}

const VIDEOS: VideoItem[] = [
  { id: '1', src: '/video1.MOV', title: 'Poolside & Lounge' },
  { id: '2', src: '/video2.MOV', title: 'Nightlife & Drinks' },
  { id: '3', src: '/video3.MOV', title: 'Cocktails & Dining' },
];

export const VideosSection: React.FC = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
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
    <section className="w-full bg-white text-black pt-8 pb-14 sm:pt-10 sm:pb-16 md:pt-12 md:pb-20 px-4 sm:px-6 lg:px-12">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        {/* Section Heading (32px Bebas Neue) */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="text-center mb-4 sm:mb-5 max-w-2xl"
        >
          <h2 className="font-bebas text-[28px] sm:text-[30px] md:text-[32px] font-normal tracking-wide text-black uppercase">
            COME FOR ONE THING. STAY FOR EVERYTHING ELSE.
          </h2>
          <p className="font-dmsans font-normal text-gray-700 text-[16px] leading-relaxed mt-2 text-center">
            From beautifully prepared meals to late–night energy, Casa Milano brings
            dining, leisure and entertainment together in a space designed for
            memorable moments.
          </p>
        </motion.div>

        {/* 3 Autoplaying Muted Videos (Longer in responsive view, interactive native controls on tap) */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 w-full my-8"
        >
          {VIDEOS.map((video) => (
            <VideoCard key={video.id} video={video} variants={cardVariants} />
          ))}
        </motion.div>

        {/* CTA Button -> Gallery */}
        <div className="mt-4 flex justify-center">
          <Button
            href="/gallery"
            variant="primary"
            className="px-8 py-3 text-[16px]"
          >
            Explore Casa Milano
          </Button>
        </div>
      </div>
    </section>
  );
};

interface VideoCardProps {
  video: VideoItem;
  variants: Variants;
}

const VideoCard: React.FC<VideoCardProps> = ({ video, variants }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [showControls, setShowControls] = useState(false);

  const handleVideoClick = () => {
    setShowControls(true);
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
      }
    }
  };

  return (
    <motion.div
      variants={variants}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.25 }}
      onClick={handleVideoClick}
      className="group relative w-full aspect-[4/5] md:aspect-[9/16] rounded-[22px] overflow-hidden bg-black shadow-none cursor-pointer select-none flex items-center justify-center"
    >
      <video
        ref={videoRef}
        src={video.src}
        autoPlay
        muted
        loop
        playsInline
        controls={showControls}
        preload="auto"
        className="w-full h-full object-cover rounded-[22px]"
      />
    </motion.div>
  );
};

export default VideosSection;
