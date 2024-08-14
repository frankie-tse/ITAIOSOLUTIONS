import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { Helmet } from 'react-helmet-async';
import ApproachSection from './ApproachSection';

const Services = ({ title, description, imageSrc }) => {
  return (
    <div className="p-8 bg-white">
    <Helmet>
        <title>{title} - IT AIO Solutions</title>
        <meta name="description" content={description} />
    </Helmet>
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold mb-4 text-center">{title}</h1>
        
        <div className="w-full mb-8 flex justify-center">
          <LazyLoadImage
            src={imageSrc}
            alt={title}
            className="w-full max-w-md rounded-lg border-4 border-gray-200 shadow-lg"
            effect="blur" // Adds a blur effect while loading
          />
        </div>
        
        <p className="text-lg text-gray-700 mb-8 text-center">
          {description}
        </p>
      </div>
      <ApproachSection/>
    </div>
  );
};

export default Services;
