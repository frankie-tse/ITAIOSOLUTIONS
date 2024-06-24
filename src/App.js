import React, { useState } from 'react';
import techImage from './itaioimage2.png'; // Adjust the path accordingly
import structuredCabling from './structuredcabling.png';
import itmanagedservices from './itmanagedservices.png';
import securitycameras from './securitycameras.png';
import hamburgericon from './hamburgericon.png'; // Add the hamburger image import

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className="relative">
        <img src={techImage} alt="Navbar Background" className="w-full object-cover" style={{ height: '60vh' }}/>
        <div className="absolute top-0 left-0 w-full z-10">
          <nav className="relative pt-8 p-4 flex justify-between items-center" style={{ background: 'transparent' }}>
            <div className="flex items-center">
              <span className="text-black text-2xl font-bold ml-8">IT AIO SOLUTIONS</span>
            </div>
            <div className="md:hidden">
              <button onClick={toggleMenu} className="text-black focus:outline-none">
                <img src={hamburgericon} alt="Menu" className="w-6 h-6" />
              </button>
            </div>
            <ul className="hidden md:flex space-x-4">
              <li><a href="#home" className="text-black hover:text-gray-300">Home</a></li>
              <li><a href="#about" className="text-black hover:text-gray-300">About</a></li>
              <li><a href="#services" className="text-black hover:text-gray-300">Services</a></li>
              <li><a href="#portfolio" className="text-black hover:text-gray-300">Portfolio</a></li>
              <li><a href="#contact" className="text-black hover:text-gray-300">Contact</a></li>
            </ul>
          </nav>
          {isMenuOpen && (
            <div className="relative bg-white shadow-lg md:hidden z-20">
              <ul className="flex flex-col items-start p-4 space-y-2">
                <li><a href="#home" className="block text-black hover:text-gray-300">Home</a></li>
                <li><a href="#about" className="block text-black hover:text-gray-300">About</a></li>
                <li><a href="#services" className="block text-black hover:text-gray-300">Services</a></li>
                <li><a href="#portfolio" className="block text-black hover:text-gray-300">Portfolio</a></li>
                <li><a href="#contact" className="block text-black hover:text-gray-300">Contact</a></li>
              </ul>
            </div>
          )}
        </div>
        <div className={`absolute top-1/3 left-0 p-4 bg-black bg-opacity-50 text-black w-full md:w-1/2 flex items-start justify-center transition-all duration-300 ${isMenuOpen ? 'mt-32' : 'mt-0'}`} style={{ background: 'transparent' }}>
          <div>
            <h1 className="text-3xl font-bold">IT AIO Solutions</h1>
            <p className="text-lg mt-2">Providing All-In-One Solutions for your IT services.</p>
            <a href="#contact" className="inline-block mt-4 px-6 py-2 bg-blue-500 text-white font-bold rounded hover:bg-blue-700 transition duration-300">
              Contact Us
            </a>
          </div>
        </div>
      </div>

      <div className="bg-white p-8">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold mb-4 text-center">Who We Are</h2>
          <div className="text-lg">
            <div className="text-3xl text-center">We are Professionals in Security, A/V & Networking in the New York City Metropolitan area.</div>
            <br />
            <div>Our skilled IT team provides a suite of services tailored to support the development and execution of your unique business IT requirements.</div>
            <br />
            <div>Our aim is to help you achieve the highest return on your IT investments while maintaining competitive pricing across all our services. We are dedicated to always being available for our valued customers, ensuring your IT infrastructure remains uninterrupted.</div>
            <br/>
            <div>Our offerings include audio-visual installations, IT and technical support, VoIP phone system setup, and network installations.</div>
          </div>
        </div>
      </div>

      <div className="bg-white p-8">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold mb-4 text-center">Featured Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-gray-100 p-4 flex flex-col items-center min-h-full">
              <div className="mb-4 text-center">
                <p className="text-2xl font-bold">Structured Cabling & Network</p>
              </div>
              <img src={structuredCabling} alt="Service 1" className="w-full h-auto mb-4"/>
              <p className="text-center">We specialize in assisting any organization with structured cabling solutions</p>
            </div>
            <div className="bg-gray-100 p-4 flex flex-col items-center min-h-full">
              <div className="mb-4 text-center">
                <p className="text-2xl font-bold">IT Help Desk & Maintenance</p>
              </div>
              <img src={itmanagedservices} alt="Service 2" className="w-full h-auto mb-4"/>
              <p className="text-center">Allow us to handle complex IT issues while keeping your team productive</p>
            </div>
            <div className="bg-gray-100 p-4 flex flex-col items-center min-h-full">
              <div className="mb-4 text-center">
                <p className="text-2xl font-bold">Security System Installation</p>
              </div>
              <img src={securitycameras} alt="Service 3" className="w-full h-auto mb-4"/>
              <p className="text-center">Tailored security system installs based on your specific needs</p>
            </div>
          </div>
        </div>
      </div>

      <footer className="bg-gray-200 p-4 mt-8 text-black text-center shadow-lg">
        <div className="container mx-auto">
          &copy; 2024 IT AIO Solutions. All rights reserved.
        </div>
      </footer>
    </>
  );
}

export default App;
