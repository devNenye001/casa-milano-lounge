import React from 'react';
import SEO from '../../components/SEO';
import HeroSection from '../../sections/HeroSection';
import ScrollTextSection from '../../sections/ScrollTextSection';
import DestinationsSection from '../../sections/DestinationsSection';
import VideosSection from '../../sections/VideosSection';
import GoodFoodSection from '../../sections/GoodFoodSection';
import EventsFlyersSection from '../../sections/EventsFlyersSection';
import HomeVideoSection from '../../sections/HomeVideoSection';
import StayConnectedSection from '../../sections/StayConnectedSection';
import TestimonialsSection from '../../sections/TestimonialsSection';
import MoreToExploreSection from '../../sections/MoreToExploreSection';
import ExperienceSection from '../../sections/ExperienceSection';
import FinalCtaSection from '../../sections/FinalCtaSection';
import Footer from '../../components/Footer';

export const HomePage: React.FC = () => {
  return (
    <div className="relative min-h-screen w-full bg-white text-gray-900 selection:bg-[#F2A922] selection:text-black">
      {/* SEO Metadata */}
      <SEO
        title="Luxury Lounge, Restaurant & Nightclub in Minna"
        description="Experience luxury dining, signature cocktails, vibrant nightlife, swimming pool parties, and exclusive events at Casa Milano Lounge in Minna, Niger State."
        canonicalPath="/"
      />

      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. Scroll-Revealed Text Section ("MORE THAN JUST A LOUNGE") */}
      <ScrollTextSection />

      {/* 3. Destination Cards Section ("EVERYTHING YOU WANT. ONE DESTINATION.") */}
      <DestinationsSection />

      {/* 4. Videos Section ("COME FOR ONE THING. STAY FOR EVERYTHING ELSE.") */}
      <VideosSection />

      {/* 5. Good Food Section ("GOOD FOOD. BETTER MOMENTS.") */}
      <GoodFoodSection />

      {/* 6. Events Section ("MADE FOR GOOD TIMES.") */}
      <EventsFlyersSection />

      {/* 7. Full-Width Atmosphere Video ("home-video.mp4") */}
      <HomeVideoSection />

      {/* 8. Stay Connected Fan Gallery ("STAY CONNECTED.") */}
      <StayConnectedSection />

      {/* 9. Testimonials Section with Navigation Arrows ("WHAT OUR GUESTS SAY") */}
      <TestimonialsSection />

      {/* 10. More to Explore Section with Slideshow Cards ("THERE'S MORE TO EXPLORE.") */}
      <MoreToExploreSection />

      {/* 11. Come Experience Casa Milano / Contact Section ("COME EXPERIENCE CASA MILANO.") */}
      <ExperienceSection />

      {/* 12. Final CTA Section with Floating Photo Cards ("COME EXPERIENCE CASA MILANO.") */}
      <FinalCtaSection />

      {/* 13. Footer Component */}
      <Footer />
    </div>
  );
};

export default HomePage;




