import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaInstagram, FaFacebook, FaYoutube, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import LogoOak from '../assets/img/oak-logo.jpg'; // Updated logo import

const Footer = () => {
  return (
    <footer className="bg-primary py-12 relative text-lg">
      <div className="container mx-auto text-white flex flex-col lg:flex-row justify-between items-start">
        <div className="flex flex-col lg:items-start">
          {/* Logo */}
          <a href="/" className="mb-4 lg:mb-0">
            <img src={LogoOak} alt="Logo" className="max-w-xs" />
          </a>
          {/* Address */}
          <a
            href="https://www.google.com/maps/place/Hotel+oak+by+signature+airport+zone+hyderabad/@17.2605153,78.3891226,17z/data=!3m1!4b1!4m9!3m8!1s0x3bcbbdc2dc0e8837:0xc4b1d21f0157408!5m2!4m1!1i2!8m2!3d17.2605153!4d78.3916975!16s%2Fg%2F11rfc82rcm?entry=ttu"
            className="mt-4 flex items-center"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View on Google Maps"
          >
            <FaMapMarkerAlt className="mr-2 text-xl" />
            <span>10-23, New Airport Road, Shamshabad, Hyderabad, 501218</span>
          </a>
          {/* Phone number */}
          <a href="tel:+919666212345" className="mt-4 flex items-center">
            <FaPhone className="mr-2 text-xl" />
            <span>+91 96662 12345</span>
          </a>
          {/* Mail icon */}
          <div className="flex items-center mt-4">
            <FaEnvelope className="text-2xl mr-2" />
            <a href="mailto:info@example.com" className="text-white hover:text-gray-400">
              info@example.com
            </a>
          </div>
          {/* Book Now button */}
          <a
            href="https://www.google.com/maps/place/Hotel+oak+by+signature+airport+zone+hyderabad/@17.2605153,78.3891226,17z/data=!3m1!4b1!4m9!3m8!1s0x3bcbbdc2dc0e8837:0xc4b1d21f0157408!5m2!4m1!1i2!8m2!3d17.2605153!4d78.3916975!16s%2Fg%2F11rfc82rcm?entry=ttu"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-yellow-500 text-black mt-8 py-2 px-6 rounded-full hover:bg-yellow-600 transition duration-300"
          >
            Book Now
          </a>
        </div>
        <div className="flex mt-8 lg:mt-0">
          {/* Our Services */}
          <div className="mr-8">
            <h4 className="font-bold border-b-2 border-yellow-500 pb-2 text-xl">OUR SERVICES</h4>
            <ul className="list-disc pl-4">
              <li>Luxury Rooms</li>
              <li>
                <Link to="/restaurant">Restaurant</Link> {/* Updated link to Restaurant page */}
              </li>
              <li>Banquet Hall</li>
              <li>Conference</li>
              <li>Board Room</li>
            </ul>
          </div>
          {/* Our Restaurant */}
          <div>
            <h4 className="font-bold border-b-2 border-yellow-500 pb-2 text-xl">OUR RESTAURANT</h4>
            <ul className="list-disc pl-4">
              <li>Indian</li>
              <li>Chinese</li>
              <li>Tandoor</li>
              <li>Special Biryani</li>
            </ul>
          </div>
        </div>
        {/* Social Media Icons */}
        <div className="flex items-center space-x-4 mt-8 lg:mt-0">
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-400"
            aria-label="Instagram"
          >
            <FaInstagram className="text-3xl" />
          </a>
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-400"
            aria-label="Facebook"
          >
            <FaFacebook className="text-3xl" />
          </a>
          <a
            href="https://www.youtube.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-400"
            aria-label="YouTube"
          >
            <FaYoutube className="text-3xl" />
          </a>
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-400"
            aria-label="LinkedIn"
          >
            <FaLinkedin className="text-3xl" />
          </a>
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-400"
            aria-label="Twitter"
          >
            <FaTwitter className="text-2xl" />
          </a>
        </div>
      </div>
      {/* Copyright */}
      <div className="text-center mt-8 text-white text-lg">
        © Oak by Signature Group, Shamshabad Airport Zone 2024. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
