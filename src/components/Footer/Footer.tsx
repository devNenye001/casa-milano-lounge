import React from 'react';
import { HiPhone, HiEnvelope, HiMapPin } from 'react-icons/hi2';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-white text-white pb-5 sm:pb-7 md:pb-8 px-3 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto bg-[#232427] rounded-[20px] sm:rounded-[26px] md:rounded-[28px] p-6 sm:p-8 md:p-10">
        {/* Main Footer Content Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-6 items-start">
          {/* Brand Column */}
          <div className="lg:col-span-3 flex flex-col items-start">
            <a href="/" className="inline-block transition-transform hover:scale-102">
              <img
                src="/logo-white.svg"
                alt="Casa Milano Lounge"
                className="h-12 sm:h-14 w-auto object-contain"
              />
            </a>
          </div>

          {/* Quick Links Column */}
          <div className="lg:col-span-2 sm:col-span-1 flex flex-col">
            <h4 className="font-bebas text-[19px] sm:text-[21px] font-normal tracking-wider text-gray-300 uppercase mb-2.5">
              QUICK LINKS
            </h4>
            <ul className="space-y-2 font-dmsans text-[13.5px] sm:text-[14.5px] text-gray-400">
              <li>
                <a
                  href="/Menu.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Menu
                </a>
              </li>
              <li>
                <a href="/gallery" className="hover:text-white transition-colors">
                  Gallery
                </a>
              </li>
              <li>
                <a href="/events" className="hover:text-white transition-colors">
                  Events
                </a>
              </li>
              <li>
                <a href="/restaurant" className="hover:text-white transition-colors">
                  Restaurant
                </a>
              </li>
            </ul>
          </div>

          {/* Working Hours Column */}
          <div className="lg:col-span-3 sm:col-span-1 flex flex-col">
            <h4 className="font-bebas text-[19px] sm:text-[21px] font-normal tracking-wider text-gray-300 uppercase mb-2.5">
              WORKING HOURS
            </h4>
            <ul className="space-y-2 font-dmsans text-[13.5px] sm:text-[14px] text-gray-400">
              <li>Monday–Thursday: 11 AM – 11 PM</li>
              <li>Friday: 11 AM – 4 AM</li>
              <li>Saturday: 11 AM – 11 PM</li>
              <li>Sunday: 11 AM – 4 AM</li>
            </ul>
          </div>

          {/* Support Column */}
          <div className="lg:col-span-4 sm:col-span-2 flex flex-col">
            <h4 className="font-bebas text-[19px] sm:text-[21px] font-normal tracking-wider text-gray-300 uppercase mb-2.5">
              SUPPORT
            </h4>
            <ul className="space-y-2 font-dmsans text-[13.5px] sm:text-[14px] text-gray-400">
              <li className="flex items-center gap-2">
                <HiPhone className="w-4 h-4 text-[#F2A922] shrink-0" />
                <span>
                  Call Us:{' '}
                  <a
                    href="tel:+2349169278175"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    +234 916 927 8175
                  </a>
                </span>
              </li>

              <li className="flex items-center gap-2">
                <HiEnvelope className="w-4 h-4 text-[#F2A922] shrink-0" />
                <span>
                  Email:{' '}
                  <a
                    href="mailto:casamilno@gmail.com"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    casamilno@gmail.com
                  </a>
                </span>
              </li>

              <li className="flex items-start gap-2">
                <HiMapPin className="w-4 h-4 text-[#F2A922] shrink-0 mt-0.5" />
                <span>
                  Address:{' '}
                  <span className="text-gray-300">
                    Eastern Bypass, off Dav-C Hotels, Tudun Wada South, Minna 920101, Niger State.
                  </span>
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-white/10 my-5 sm:my-6" />

        {/* Copyright */}
        <div className="text-center font-dmsans text-[13px] sm:text-[13.5px] text-gray-400">
          Copyright © {new Date().getFullYear()} Casa Milano Lounge.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
