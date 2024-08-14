import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import ManagedServiceProvider from './ManagedServiceProvider'; // New Component
import HelpDeskMaintenance from './HelpDeskMaintenance'; // New Component
import StructuredCablingNetworking from './StructuredCablingNetworking'; // New Component
import SecuritySystemInstallations from './SecuritySystemInstallations'; // New Component
import AudioVideoInstallations from './AudioVideoInstallations'; // New Component
import VoIPSolutions from './VoIPSolutions'; // New Component
import Navbar from './Navbar';
import Footer from './Footer';
import '../index.css';
import NotFound from './NotFound';

const App = () => {
  return (
    <HelmetProvider>
      <Router>
        <div className="relative">
          <Navbar />
          <div>
            <Routes>
              <Route path="/" element={<Navigate replace to="/home" />} />
              <Route path="/home" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/services/managed-service-provider" element={<ManagedServiceProvider />} />
              <Route path="/services/help-desk-maintenance" element={<HelpDeskMaintenance />} />
              <Route path="/services/structured-cabling-networking" element={<StructuredCablingNetworking />} />
              <Route path="/services/security-system-installations" element={<SecuritySystemInstallations />} />
              <Route path="/services/audio-video-installations" element={<AudioVideoInstallations />} />
              <Route path="/services/voip-solutions" element={<VoIPSolutions />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  );
};

export default App;
