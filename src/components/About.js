import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { Helmet } from 'react-helmet-async';
import GetStarted from './GetStarted';
import MoreInfo from './MoreInfo';

const About = () => {
  return (
    <div className="bg-white p-8">
      <Helmet>
        <title>About Us - IT AIO Solutions</title>
        <meta name="description" content="Learn more about IT AIO Solutions, your all-in-one provider for managed IT services, tech support, data cabling, surveillance installation, and audio/visual systems." />
      </Helmet>
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-center">About Us</h2>

        {/* First Section */}
        <div className="flex flex-col md:flex-row items-center text-lg mb-8">
          <div className="w-full md:w-1/2 flex justify-center md:justify-end mb-4 md:mb-0">
            <LazyLoadImage
              src={`${process.env.PUBLIC_URL}/images/aboutme.jpg`}
              alt="About Me"
              className="w-full h-auto max-w-xl"
              effect="blur"
            />
          </div>
          <div className="w-full md:w-1/2 md:pl-8 text-justify">
            <h3 className="text-3xl font-bold mb-4 text-center md:text-left">IT AIO Solutions</h3>
            <p>
              Our business distinguishes itself by offering a unique blend of specialized services, including managed IT services, tech support, data cabling, surveillance installation, and audio/visual systems. Our multifaceted expertise enables us to provide comprehensive solutions all under one roof.
            </p>
            <br />
            <p>
              Focusing on managed IT services, we proactively manage your IT systems to ensure smooth operations and minimize downtime. Our dedicated tech support team is always available to promptly address any IT issues, keeping your business running seamlessly.
            </p>
            <br />
            <p>
              Our expertise extends to data cabling, where we design and implement reliable and efficient network infrastructures. Understanding the critical role of robust cabling systems in digital operations, we tailor our solutions to meet your specific needs.
            </p>
          </div>
        </div>

        <GetStarted/>
        <MoreInfo/>

      </div>
    </div>
  );
}

export default About;
