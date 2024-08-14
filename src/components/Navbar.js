import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import hamburgericon from '../hamburgericon.png'; // Adjust the path accordingly
import techImage from '../itaioimage2.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (isDropdownOpen) {
      setIsDropdownOpen(false);
    }
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    closeDropdown();
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        closeDropdown();
      }
    };

    if (isDropdownOpen) {
      document.addEventListener('click', handleClickOutside);
    } else {
      document.removeEventListener('click', handleClickOutside);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isDropdownOpen]);

  return (
    <div className="relative">
      <Helmet>
        <title>IT AIO Solutions - Your All-In-One IT Services</title>
        <meta name="description" content="IT AIO Solutions provides comprehensive IT services including managed services, security systems, audio/video installations, and more." />
      </Helmet>
      <img src={process.env.PUBLIC_URL.techImage} alt="Navbar Background" className="w-full object-cover" style={{ height: '60vh' }} />
      <div className="absolute top-0 left-0 w-full z-10">
        <nav className="relative pt-8 p-4 flex justify-between items-center" style={{ background: 'transparent' }}>
          <div className="flex items-center">
            <Link to="/home" className="text-black text-2xl font-bold ml-8" onClick={closeMenu}>IT AIO SOLUTIONS</Link>
          </div>
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-black focus:outline-none">
              <img src={process.env.PUBLIC_URL.hamburgericon} alt="Menu" className="w-6 h-6" />
            </button>
          </div>
          <ul className="hidden md:flex space-x-8"> {/* Increase spacing between items */}
            <li><Link to="/home" className="text-black text-xl font-bold hover:text-gray-300 ml-2" onClick={closeMenu}>Home</Link></li>
            <li className="relative" ref={dropdownRef}>
              <button onClick={toggleDropdown} className="text-black text-xl font-bold hover:text-gray-300 focus:outline-none ml-2">
                Services
              </button>
              {isDropdownOpen && (
                <ul className="absolute left-0 mt-2 w-48 bg-white shadow-lg border rounded-md py-2">
                  <li><Link to="/services/managed-service-provider" className="block px-4 py-2 text-black hover:bg-gray-100" onClick={closeMenu}>Managed Service Provider</Link></li>
                  <li><Link to="/services/help-desk-maintenance" className="block px-4 py-2 text-black hover:bg-gray-100" onClick={closeMenu}>Help Desk & Maintenance</Link></li>
                  <li><Link to="/services/structured-cabling-networking" className="block px-4 py-2 text-black hover:bg-gray-100" onClick={closeMenu}>Structured Cabling & Networking</Link></li>
                  <li><Link to="/services/security-system-installations" className="block px-4 py-2 text-black hover:bg-gray-100" onClick={closeMenu}>Security System Installations</Link></li>
                  <li><Link to="/services/audio-video-installations" className="block px-4 py-2 text-black hover:bg-gray-100" onClick={closeMenu}>Audio/Video Installations</Link></li>
                  <li><Link to="/services/voip-solutions" className="block px-4 py-2 text-black hover:bg-gray-100" onClick={closeMenu}>VoIP Solutions</Link></li>
                </ul>
              )}
            </li>
            <li><Link to="/about" className="text-black text-xl font-bold hover:text-gray-300 ml-2" onClick={closeMenu}>About</Link></li>
            <li><Link to="/contact" className="text-black text-xl font-bold hover:text-gray-300 ml-2" onClick={closeMenu}>Contact</Link></li>
          </ul>
        </nav>
        {isMenuOpen && (
          <div className="relative bg-white shadow-lg md:hidden z-20">
            <ul className="flex flex-col items-start p-4 space-y-2">
              <li><Link to="/home" className="block text-black hover:text-gray-300 text-xl font-bold" onClick={closeMenu}>Home</Link></li>
              <li className="block text-black text-xl font-bold">Services</li>
              <li><Link to="/services/managed-service-provider" className="block px-4 py-2 text-black hover:bg-gray-100" onClick={closeMenu}>Managed Service Provider</Link></li>
              <li><Link to="/services/help-desk-maintenance" className="block px-4 py-2 text-black hover:bg-gray-100" onClick={closeMenu}>Help Desk & Maintenance</Link></li>
              <li><Link to="/services/structured-cabling-networking" className="block px-4 py-2 text-black hover:bg-gray-100" onClick={closeMenu}>Structured Cabling & Networking</Link></li>
              <li><Link to="/services/security-system-installations" className="block px-4 py-2 text-black hover:bg-gray-100" onClick={closeMenu}>Security System Installations</Link></li>
              <li><Link to="/services/audio-video-installations" className="block px-4 py-2 text-black hover:bg-gray-100" onClick={closeMenu}>Audio/Video Installations</Link></li>
              <li><Link to="/services/voip-solutions" className="block px-4 py-2 text-black hover:bg-gray-100" onClick={closeMenu}>VoIP Solutions</Link></li>
              <li><Link to="/about" className="block text-black hover:text-gray-300 text-xl font-bold" onClick={closeMenu}>About</Link></li>
              <li><Link to="/contact" className="block text-black hover:text-gray-300 text-xl font-bold" onClick={closeMenu}>Contact</Link></li>
            </ul>
          </div>
        )}
      </div>
      <div className={`absolute top-1/3 left-0 p-4 bg-black bg-opacity-50 text-black w-full md:w-1/2 flex items-start justify-center transition-all duration-300 ${isMenuOpen ? 'mt-32' : 'mt-0'}`} style={{ background: 'transparent' }}>
        <div>
          <h1 className="text-3xl font-bold">IT AIO Solutions</h1>
          <p className="text-lg mt-2">Providing All-In-One Solutions for your IT services.</p>
          <Link to="/contact" className="inline-block mt-4 px-6 py-2 bg-blue-500 text-white font-bold rounded hover:bg-blue-700 transition duration-300">
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
