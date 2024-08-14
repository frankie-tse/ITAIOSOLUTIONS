import React from 'react';
import Services from './Services';
import { Helmet } from 'react-helmet-async';

const ManagedServiceProvider = () => {
  return (
    <>
      <Helmet>
        <title>Managed Service Provider - IT AIO Solutions</title>
        <meta name="description" content="Our Managed Service Provider (MSP) solutions are crafted to optimize your business’s IT performance, reduce operational costs, and boost overall efficiency. By entrusting us with your IT infrastructure, you can focus on driving your core business objectives. Our team of skilled professionals ensures that your systems are consistently up-to-date, secure, and functioning at peak performance, allowing your business to thrive." />
      </Helmet>
      <Services
        title="Managed Service Provider"
        description="Our Managed Service Provider (MSP) solutions are crafted to optimize your business’s IT performance, reduce operational costs, and boost overall efficiency. By entrusting us with your IT infrastructure, you can focus on driving your core business objectives. Our team of skilled professionals ensures that your systems are consistently up-to-date, secure, and functioning at peak performance, allowing your business to thrive."
        imageSrc={`${process.env.PUBLIC_URL}/images/msp.jpg`}
      />
    </>
  );
};

export default ManagedServiceProvider;
