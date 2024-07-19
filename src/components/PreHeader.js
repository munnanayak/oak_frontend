import React, { useState, useEffect } from 'react';
import { FaInstagram, FaFacebook, FaYoutube, FaLinkedin, FaEnvelope, FaTwitter } from 'react-icons/fa';

const PreHeader = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollDirection, setScrollDirection] = useState(null);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY) {
        setScrollDirection("down");
      } else {
        setScrollDirection("up");
      }
      lastScrollY = currentScrollY;

      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      className={`bg-red-900 text-white py-2 text-center lg:text-left lg:px-12 ${
        isScrolled ? 'fixed top-0 left-0 right-0 z-50 transition-transform duration-300' : ''
      } ${scrollDirection === 'up' ? 'translate-y-0' : '-translate-y-full'}`}
    >
      <div className="container mx-auto flex items-center justify-between">
        {/* Left Side: Contact Number */}
        <div className="text-lg flex items-center space-x-2">
          <span>+91 123 456 7890</span>
          <span>|</span>
          <FaEnvelope className="text-xl" />
          <a href="mailto:info@example.com" className="text-white hover:text-gray-400">
            info@example.com
          </a>
        </div>

        {/* Right Side: Social Media Icons */}
        <div className="flex items-center space-x-4">
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-400"
          >
            <FaInstagram className="text-2xl" />
          </a>
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-400"
          >
            <FaFacebook className="text-2xl" />
          </a>
          <a
            href="https://www.youtube.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-400"
          >
            <FaYoutube className="text-2xl" />
          </a>
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-400"
          >
            <FaLinkedin className="text-2xl" />
          </a>
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-400"
          >
            <FaTwitter className="text-2xl" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default PreHeader;
