import React from 'react';
import { Link } from 'react-router-dom';

const GetStarted = () => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };
    
  return (
    <div className="bg-cyan-50 p-8 text-center rounded-lg w-full">
      <h3 className="text-2xl font-bold mb-4">Get Started With IT AIO Solutions Today</h3>
      <Link to="/contact" onClick={scrollToTop} className="inline-block mt-4 px-6 py-2 bg-blue-500 text-white font-bold rounded hover:bg-blue-700 transition duration-300">
        Contact Us
      </Link>
    </div>
  );
};

export default GetStarted;
