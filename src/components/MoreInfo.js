import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import location from '../location.jpg';
import handshake from '../handshake.jpg';
import money from '../money.jpg';

const MoreInfo = () => {
  return (
    <div className="bg-white p-8 rounded-lg max-w-4xl mx-auto mt-8">
      <div className="flex flex-col items-center">
        <div className="flex flex-col md:flex-row-reverse items-center text-center md:text-left mb-8 w-full">
          <div className="w-full md:w-1/2 p-4">
            <LazyLoadImage
              src={location}
              alt="Location"
              className="w-full h-64 mb-4 md:mb-0 object-cover"
              effect="blur"
            />
          </div>
          <div className="w-full md:w-1/2 p-4">
            <h3 className="text-2xl font-bold mb-2">Where To Find Us?</h3>
            <p className="text-lg">We are located in the Tri-State Area, servicing Manhattan, Queens, Brooklyn and much more. You can contact us via phone or email and get all your questions and concerns answered immediately.</p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center text-center md:text-left mb-8 w-full">
          <div className="w-full md:w-1/2 p-4">
            <LazyLoadImage
              src={handshake}
              alt="Handshake"
              className="w-full h-36"
              effect="blur"
            />
          </div>
          <div className="w-full md:w-1/2 p-4">
            <h3 className="text-2xl font-bold mb-2">Fast And Reliable</h3>
            <p className="text-lg">We understand the sense of urgency your business needs and we make commitments we can stand by. We treat every client like a partner and your satisfaction is the number one priority.</p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row-reverse items-center text-center md:text-left mb-8 w-full">
          <div className="w-full md:w-1/2 p-4">
            <LazyLoadImage
              src={money}
              alt="Money"
              className="w-full h-64 mb-4 md:mb-0 object-cover"
              effect="blur"
            />
          </div>
          <div className="w-full md:w-1/2 p-4">
            <h3 className="text-2xl font-bold mb-2">Best Value Guaranteed</h3>
            <p className="text-lg">Receiving support shouldn't break the bank. We provide the best service, for the best price. We always make sure to find a solution that works for both parties.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoreInfo;
