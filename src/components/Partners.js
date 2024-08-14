import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Helmet } from 'react-helmet-async';

const Partners = () => {
  return (
    <div className="bg-white p-8 border-b-2 border-black">
      <Helmet>
        <title>Home - IT AIO Solutions</title>
        <meta name="description" content="Meet our trusted partners at IT AIO Solutions. We collaborate with leading companies like Microsoft, Dell, Lenovo, and Apple to deliver top-tier IT services." />
      </Helmet>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
          <LazyLoadImage
            src={`${process.env.PUBLIC_URL}/images/microsoft.jpg`}
            alt="Microsoft Partner"
            className="w-32 h-32 object-contain"
            effect="blur"
          />
          <LazyLoadImage
            src={`${process.env.PUBLIC_URL}/images/dell.png`}
            alt="Dell Partner"
            className="w-32 h-32 object-contain"
            effect="blur"
          />
          <LazyLoadImage
            src={`${process.env.PUBLIC_URL}/images/lenovo.png`}
            alt="Lenovo Partner"
            className="w-32 h-32 object-contain"
            effect="blur"
          />
          <LazyLoadImage
            src={`${process.env.PUBLIC_URL}/images/apple.jpg`}
            alt="Apple Partner"
            className="w-32 h-32 object-contain"
            effect="blur"
          />
        </div>
      </div>
    </div>
  );
};

export default Partners;
