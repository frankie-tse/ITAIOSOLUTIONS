import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import dell from '../dell.png';
import lenovo from '../lenovo.png';
import microsoft from '../microsoft.jpg';
import apple from '../apple.jpg';
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
            src={microsoft}
            alt="Microsoft Partner"
            className="w-32 h-32 object-contain"
            effect="blur"
          />
          <LazyLoadImage
            src={dell}
            alt="Dell Partner"
            className="w-32 h-32 object-contain"
            effect="blur"
          />
          <LazyLoadImage
            src={lenovo}
            alt="Lenovo Partner"
            className="w-32 h-32 object-contain"
            effect="blur"
          />
          <LazyLoadImage
            src={apple}
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
