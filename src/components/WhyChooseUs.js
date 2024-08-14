import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Helmet } from 'react-helmet-async';

const WhyChooseUs = () => {
  return (
    <div className="bg-white p-8">
      <Helmet>
        <title>Home - IT AIO Solutions</title>
        <meta name="description" content="Discover why IT AIO Solutions is the preferred choice for businesses. We provide expert technological solutions to enhance workflow and security." />
      </Helmet>
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-4 text-center">Why Choose Us?</h2>
        <div className="text-lg">
          <div>
          Our mission is to establish lasting partnerships with our clients. No matter the size of your business—small, medium, or large—we treat every client as a valued partner. Our skilled team specializes in designing, implementing, and supporting technological solutions that improve workflow and strengthen security for businesses. From remote support and IT maintenance to network cabling and security surveillance, we offer a solution tailored to your needs!
          </div>
          <div className="flex justify-center mt-4">
            <LazyLoadImage
              src={`${process.env.PUBLIC_URL}/images/triangleDown.png`}
              alt="Triangle Down"
              className="w-24 h-24"
              effect="blur"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
