import React from 'react';
import Services from './Services';
import { Helmet } from 'react-helmet-async';

const HelpDeskMaintenance = () => {
  return (
    <>
      <Helmet>
        <title>Help Desk & Maintenance - IT AIO Solutions</title>
        <meta name="description" content="Our comprehensive Help Desk & Maintenance services are designed to ensure that your IT infrastructure operates smoothly at all times. Our team of IT support experts is readily available to address any technical issues and provide ongoing maintenance, ensuring that your business operations remain uninterrupted and efficient." />
      </Helmet>
      <Services
        title="Help Desk & Maintenance"
        description="Our comprehensive Help Desk & Maintenance services are designed to ensure that your IT infrastructure operates smoothly at all times. Our team of IT support experts is readily available to address any technical issues and provide ongoing maintenance, ensuring that your business operations remain uninterrupted and efficient."
        imageSrc={`${process.env.PUBLIC_URL}/images/helpdesk.jpg`}
      />
    </>
  );
};

export default HelpDeskMaintenance;
