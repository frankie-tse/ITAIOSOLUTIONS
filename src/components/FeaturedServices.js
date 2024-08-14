import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import structuredCabling from '../structuredcabling.png';
import itmanagedservices from '../itmanagedservices.png';
import securitycameras from '../securitycameras.png';
import { Helmet } from 'react-helmet-async';

const FeaturedServices = () => {
  return (
    <div className="bg-white p-8 border-b-4 border-black">
      <Helmet>
        <title>Home - IT AIO Solutions</title>
        <meta name="description" content="Explore our featured services at IT AIO Solutions, including Structured Cabling & Network, IT Help Desk & Maintenance, and Security System Installation." />
      </Helmet>
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-4 text-center">Featured Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-gray-100 p-4 flex flex-col items-center min-h-full">
            <div className="mb-4 text-center">
              <p className="text-2xl font-bold">Structured Cabling & Network</p>
            </div>
            <LazyLoadImage
              src={structuredCabling}
              alt="Service 1"
              className="w-full h-auto mb-4"
              effect="blur"
            />
            <p className="text-center">We are dedicated to helping organizations of all sizes with their structured cabling needs, ensuring seamless and reliable connectivity for your entire network infrastructure</p>
          </div>
          <div className="bg-gray-100 p-4 flex flex-col items-center min-h-full">
            <div className="mb-4 text-center">
              <p className="text-2xl font-bold">IT Help Desk & Maintenance</p>
            </div>
            <LazyLoadImage
              src={itmanagedservices}
              alt="Service 2"
              className="w-full h-auto mb-4"
              effect="blur"
            />
            <p className="text-center">Let us take on the challenge of resolving complex IT issues, allowing your team to remain focused and productive without interruptions</p>
          </div>
          <div className="bg-gray-100 p-4 flex flex-col items-center min-h-full">
            <div className="mb-4 text-center">
              <p className="text-2xl font-bold">Security System Installation</p>
            </div>
            <LazyLoadImage
              src={securitycameras}
              alt="Service 3"
              className="w-full h-auto mb-4"
              effect="blur"
            />
            <p className="text-center">Our security system installations are customized to meet your unique requirements, providing you with a comprehensive solution that safeguards your business</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedServices;
