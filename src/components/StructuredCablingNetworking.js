import React from 'react';
import Services from './Services';
import cabling from '../cabling.jpg';
import { Helmet } from 'react-helmet-async';

const StructuredCablingNetworking = () => {
  return (
    <>
      <Helmet>
        <title>Structured Cabling & Networking - IT AIO Solutions</title>
        <meta name="description" content="Our Structured Cabling & Networking services are meticulously designed to align with your business’s unique needs. We plan, design, and implement efficient network infrastructures that guarantee reliable, high-performance connectivity, empowering your business with the robust and scalable IT infrastructure required for seamless operations." />
      </Helmet>
      <Services
        title="Structured Cabling & Networking"
        description="Our Structured Cabling & Networking services are meticulously designed to align with your business’s unique needs. We plan, design, and implement efficient network infrastructures that guarantee reliable, high-performance connectivity, empowering your business with the robust and scalable IT infrastructure required for seamless operations."
        imageSrc={cabling}
      />
    </>
  );
};

export default StructuredCablingNetworking;
