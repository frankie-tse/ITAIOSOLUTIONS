import React, { useState, useEffect } from 'react';
import WhoWeAre from './WhoWeAre';
import WhyChooseUs from './WhyChooseUs';
import FeaturedServices from './FeaturedServices';
import Partners from './Partners';
import Testimonials from './Testimonials';
import { Helmet } from 'react-helmet-async';

const Home = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    // {
    //   content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    //   author: "-John Doe"
    // },
    // {
    //   content: "Lorem ipsum dolor",
    //   author: "-Jane Doe 2"
    // },
    // {
    //   content: "Lorem ipsum dolor sit",
    //   author: "-J Doe"
    // },
    // {
    //   content: "Lorem ipsum dolor sit amet",
    //   author: "-Jane D"
    // }
    {
      content: "Coming Soon"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 8000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <>
      <Helmet>
        <title>Home - IT AIO Solutions</title>
        <meta name="description" content="Welcome to IT AIO Solutions. We are your trusted partner in Managed IT Services, Security System Installations, Audio/Video Installations, VoIP Solutions, and more. Explore our services and discover why we're the right choice for your IT needs." />
      </Helmet>
      <WhoWeAre />
      <WhyChooseUs />
      <FeaturedServices />
      <Partners />
      <Testimonials
        testimonials={testimonials}
        currentTestimonial={currentTestimonial}
        prevTestimonial={() => setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
        nextTestimonial={() => setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)}
      />
    </>
  );
};

export default Home;
