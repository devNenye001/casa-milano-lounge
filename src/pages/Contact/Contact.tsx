import React from 'react';
import { motion } from 'framer-motion';
import { HiHome, HiPhone, HiEnvelope } from 'react-icons/hi2';
import SEO from '../../components/SEO';
import Navbar from '../../components/Navbar';
import FinalCtaSection from '../../sections/FinalCtaSection';
import Footer from '../../components/Footer';

export const ContactPage: React.FC = () => {
  return (
    <div className="relative min-h-screen w-full bg-white text-gray-900 selection:bg-[#F2A922] selection:text-black">
      {/* SEO Metadata */}
      <SEO
        title="Contact Us & Table Reservations"
        description="Get in touch with Casa Milano Lounge in Minna, Niger State. Find our location on Eastern Bypass, call +234 916 927 8175 or email casamilanolounge@gmail.com for table bookings and event inquiries."
        canonicalPath="/contact"
        image="/contact-page-banner.jpg"
      />

      {/* 1. Contact Hero Banner */}
      <section className="relative w-full min-h-[52vh] sm:min-h-[58vh] md:min-h-[62vh] flex flex-col justify-between overflow-hidden bg-[#0a0a0c]">
        {/* Background Image */}
        <div
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/contact-page-banner.jpg')" }}
        >
          {/* Dark Atmosphere Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/45 to-black/80" />
          <div className="absolute inset-0 bg-radial-[at_center_center] from-transparent via-black/20 to-black/70" />
        </div>

        {/* Top Navbar with Contact highlighted */}
        <Navbar activeItem="CONTACT" />

        {/* Center Hero Content */}
        <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 text-center pt-24 pb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="max-w-2xl mx-auto flex flex-col items-center"
          >
            <h1 className="font-bebas text-[34px] sm:text-[40px] md:text-[46px] font-normal tracking-wide text-white leading-tight uppercase drop-shadow-md">
              WE'D LOVE TO HEAR FROM YOU.
            </h1>
            <p className="font-dmsans font-normal text-white/90 text-[15px] sm:text-[16px] leading-relaxed max-w-lg mt-3 text-center drop-shadow-sm">
              Planning a night out, making a reservation or looking to know more about Casa Milano? Get in touch with us.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. Three Column Contact Info Cards Section */}
      <section className="w-full bg-white text-black py-14 sm:py-18 md:py-20 px-4 sm:px-6 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-0 md:divide-x md:divide-gray-200 items-start">
            {/* Card 1: Visit Our Office */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="flex flex-col items-start md:px-8 lg:px-10"
            >
              <div className="text-[#F2A922] mb-3.5">
                <HiHome className="w-7 h-7" />
              </div>
              <h3 className="font-dmsans font-bold text-gray-900 text-[18px] sm:text-[19px]">
                Visit Our Office
              </h3>
              <p className="font-dmsans font-normal text-gray-600 text-[14.5px] sm:text-[15px] leading-relaxed mt-2 max-w-xs">
                Address: Eastern Bypass, off Dav-C Hotels, Tudun Wada South, Minna, Niger State.
              </p>
            </motion.div>

            {/* Card 2: Call Us */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, ease: 'easeOut', delay: 0.1 }}
              className="flex flex-col items-start md:px-8 lg:px-10"
            >
              <div className="text-[#F2A922] mb-3.5">
                <HiPhone className="w-7 h-7" />
              </div>
              <h3 className="font-dmsans font-bold text-gray-900 text-[18px] sm:text-[19px]">
                Call Us
              </h3>
              <a
                href="tel:+2349169278175"
                className="font-dmsans font-normal text-gray-600 text-[14.5px] sm:text-[15px] leading-relaxed mt-2 hover:text-[#F2A922] transition-colors block"
              >
                0916 927 8175
              </a>
            </motion.div>

            {/* Card 3: Email */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, ease: 'easeOut', delay: 0.2 }}
              className="flex flex-col items-start md:px-8 lg:px-10"
            >
              <div className="text-[#F2A922] mb-3.5">
                <HiEnvelope className="w-7 h-7" />
              </div>
              <a
                href="mailto:casamilanolounge@gmail.com"
                className="font-dmsans font-bold text-gray-900 text-[17px] sm:text-[18px] hover:text-[#F2A922] transition-colors break-all"
              >
                casamilanolounge@gmail.com
              </a>
              <p className="font-dmsans font-normal text-gray-600 text-[14.5px] sm:text-[15px] leading-relaxed mt-2 max-w-xs">
                Send us your inquiries anytime, and our team will respond promptly with the information you need.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. Interactive Google Map Section */}
      <section className="w-full bg-white pb-14 sm:pb-18 md:pb-22 px-4 sm:px-6 lg:px-10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="w-full rounded-[22px] sm:rounded-[28px] md:rounded-[32px] overflow-hidden shadow-none border border-gray-100 bg-neutral-100"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3933.918424170454!2d6.5756966!3d9.6022927!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104c71870307f967%3A0x3b021aa21b73ecb!2sCasa%20Milano%20Lounge!5e0!3m2!1sen!2sng!4v1788957858328!5m2!1sen!2sng"
              width="100%"
              height="480"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              title="Casa Milano Lounge Google Maps Location"
              className="w-full h-[360px] sm:h-[440px] md:h-[500px] block"
            />
          </motion.div>
        </div>
      </section>

      {/* 4. Final CTA Section */}
      <FinalCtaSection />

      {/* 5. Footer */}
      <Footer />
    </div>
  );
};

export default ContactPage;
