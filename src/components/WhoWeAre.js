import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import triangleDown from '../triangleDown.png';
import { Helmet } from 'react-helmet-async';

const WhoWeAre = () => {
  return (
    <div className="bg-white p-8">
      <Helmet>
        <title>Home - IT AIO Solutions</title>
        <meta name="description" content="Learn more about IT AIO Solutions, your trusted Managed Service Provider and experts in Security, A/V, and Networking in the New York City Metropolitan area." />
      </Helmet>
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-4 text-center">Who We Are</h2>
        <div className="text-lg">
          <div className="text-3xl text-center">We are a Managed Service Provider and professionals in Security, A/V & Networking in the New York City Metropolitan area.</div>
          <br />
          <div>Our expert IT team offers a range of services specifically designed to support the growth and implementation of your unique business IT needs.</div>
          <br />
          <div>Our goal is to maximize your return on IT investments while keeping our services competitively priced. We are committed to being readily available for our valued customers, ensuring your IT infrastructure operates smoothly without interruptions.</div>
          <br/>
          <div>Our services include Audio/Visual installations, IT and technical support, VoIP phone system setup, and network installations.</div>
        </div>
        <div className="flex justify-center mt-4">
          <LazyLoadImage
            src={process.env.PUBLIC_URL.triangleDown}
            alt="Triangle Down"
            className="w-24 h-24"
            effect="blur"
          />
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;
