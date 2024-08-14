import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="bg-cyan-100 p-8 text-black text-center shadow-lg border-b-4 border-black">
      <div className="container mx-auto flex flex-col md:flex-row justify-evenly px-8 mb-8">
        
        {/* Left Section */}
        <div className="mb-8 md:mb-0 flex items-center justify-center" style={{ paddingTop: '1rem' }}>
          <div>
            <h2 className="text-2xl font-bold">IT AIO</h2>
            <h2 className="text-2xl font-bold">SOLUTIONS</h2>
            <Link to="/contact" onClick={scrollToTop} className="inline-block mt-4 px-6 py-2 bg-blue-500 text-white font-bold rounded hover:bg-blue-700 transition duration-300">
              Contact Us
            </Link>
          </div>
        </div>

        {/* Middle Section */}
        <div className="mb-8 md:mb-0 text-center md:text-left flex flex-col justify-between">
          <h3 className="text-xl font-bold mb-2">Contact Details</h3>
          <div className="flex flex-col justify-center h-full py-8">
            <p>New York City, NY</p>
            <p>Phone: Coming soon</p>
            <p>info@itaiosolutions.com</p>
          </div>
        </div>

        {/* Right Section */}
        <div>
          <h3 className="text-xl font-bold mb-2">Quick Links</h3>
          <ul className="list-none pl-0 space-y-2">
            <li className="flex justify-between">
              <Link to="/home" onClick={scrollToTop} className="hover:text-gray-700">Home</Link>
            </li>
            <li className="flex justify-between hover:text-gray-700">Services</li>
            <div className="ml-4">
              <li className="flex">
                <Link to="/services/managed-service-provider" onClick={scrollToTop} className="hover:text-gray-700">Managed Service Provider</Link>
              </li>
              <li className="flex">
                <Link to="/services/help-desk-maintenance" onClick={scrollToTop} className="hover:text-gray-700">Help Desk & Maintenance</Link>
              </li>
              <li className="flex">
                <Link to="/services/structured-cabling-networking" onClick={scrollToTop} className="hover:text-gray-700 w-full text-left">Structured Cabling & Networking</Link>
              </li>
              <li className="flex">
                <Link to="/services/security-system-installations" onClick={scrollToTop} className="hover:text-gray-700">Security System Installations</Link>
              </li>
              <li className="flex">
                <Link to="/services/audio-video-installations" onClick={scrollToTop} className="hover:text-gray-700">Audio/Video Installations</Link>
              </li>
              <li className="flex">
                <Link to="/services/voip-solutions" onClick={scrollToTop} className="hover:text-gray-700 w-full text-left">VoIP Solutions</Link>
              </li>
            </div>
            <li className="flex justify-between">
              <Link to="/about" onClick={scrollToTop} className="hover:text-gray-700">About</Link>
            </li>
            <li className="flex justify-between">
              <Link to="/contact" onClick={scrollToTop} className="hover:text-gray-700">Contact</Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright Section */}
      <hr className="border-t-2 border-black mb-4 w-full md:w-auto mx-auto" />
      <div className="container mx-auto">
        &copy; 2024 IT AIO Solutions. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
