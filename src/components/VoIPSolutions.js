import React from 'react';
import Services from './Services';
import { Helmet } from 'react-helmet-async';

const VoIPSolutions = () => {
  return (
    <>
      <Helmet>
        <title>VoIP Solutions - IT AIO Solutions</title>
        <meta name="description" content="Our VoIP Solutions deliver reliable and scalable communication systems that significantly enhance connectivity and collaboration within your organization. We offer end-to-end VoIP services, from consultation and design to implementation and support, ensuring that your business communication is streamlined, efficient, and tailored to your specific operational needs." />
      </Helmet>
      <Services
        title="VoIP Solutions"
        description="Our VoIP Solutions deliver reliable and scalable communication systems that significantly enhance connectivity and collaboration within your organization. We offer end-to-end VoIP services, from consultation and design to implementation and support, ensuring that your business communication is streamlined, efficient, and tailored to your specific operational needs."
        imageSrc={`${process.env.PUBLIC_URL}/images/voip.jpg`}
      />
    </>
  );
};

export default VoIPSolutions;
