import React from 'react';
import Services from './Services';
import { Helmet } from 'react-helmet-async';

const SecuritySystemInstallations = () => {
  return (
    <>
      <Helmet>
        <title>Security System Installations - IT AIO Solutions</title>
        <meta name="description" content="Our Security System Installations offer robust and comprehensive security solutions tailored to meet your specific business requirements. Whether you need advanced surveillance cameras, access control systems, or full-scale security integration, we provide the expertise to secure your premises effectively, ensuring the safety and protection of your assets and personnel." />
      </Helmet>
      <Services
        title="Security System Installations"
        description="Our Security System Installations offer robust and comprehensive security solutions tailored to meet your specific business requirements. Whether you need advanced surveillance cameras, access control systems, or full-scale security integration, we provide the expertise to secure your premises effectively, ensuring the safety and protection of your assets and personnel."
        imageSrc={`${process.env.PUBLIC_URL}/images/security.jpg`}
      />
    </>
  );
};

export default SecuritySystemInstallations;
