import React from 'react';
import Services from './Services';
import av from '../av.jpg';
import { Helmet } from 'react-helmet-async';

const AudioVideoInstallations = () => {
  return (
    <>
      <Helmet>
        <title>Audio/Video Installations - IT AIO Solutions</title>
        <meta name="description" content="Our Audio/Video Installations are expertly crafted to provide exceptional audiovisual experiences for your business. From the initial system design to the final installation, we ensure seamless integration of audiovisual components, delivering high-quality performance that meets the precise needs of your environment, whether it's a conference room, training facility, or entertainment space." />
      </Helmet>
      <Services
        title="Audio/Video Installations"
        description="Our Audio/Video Installations are expertly crafted to provide exceptional audiovisual experiences for your business. From the initial system design to the final installation, we ensure seamless integration of audiovisual components, delivering high-quality performance that meets the precise needs of your environment, whether it's a conference room, training facility, or entertainment space."
        imageSrc={process.env.PUBLIC_URL.av}
      />
    </>
  );
};

export default AudioVideoInstallations;
