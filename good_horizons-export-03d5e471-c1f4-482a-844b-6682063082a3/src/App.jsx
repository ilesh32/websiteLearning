
import React, { useEffect, useState } from 'react';
import { Toaster } from '@/components/ui/toaster';
import Header from '@/components/sections/Header';
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import ServicesSection from '@/components/sections/ServicesSection';
import ProgramSnapshotSection from '@/components/sections/ProgramSnapshotSection';
import CtaSection from '@/components/sections/CtaSection';
import Footer from '@/components/sections/Footer';
import ApplyNowForm from '@/components/ApplyNowForm';
import JoinWaitlistForm from '@/components/JoinWaitlistForm';
import ServiceDetailModal from '@/components/ServiceDetailModal';

const App = () => {
  const [isApplyNowOpen, setIsApplyNowOpen] = useState(false);
  const [isJoinWaitlistOpen, setIsJoinWaitlistOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  const [isServiceModalOpen, setIsServiceModalOpen] = useState(false);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll('.scroll-reveal');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const handleOpenApplyNow = () => setIsApplyNowOpen(true);
  const handleOpenJoinWaitlist = () => setIsJoinWaitlistOpen(true);
  
  const handleLearnMore = (service) => {
    setSelectedService(service);
    setIsServiceModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-brand-blue text-foreground overflow-x-hidden">
      <Toaster />
      <Header onApplyNow={handleOpenApplyNow} onJoinWaitlist={handleOpenJoinWaitlist} />
      
      <main>
        <HeroSection onApplyNow={handleOpenApplyNow} onJoinWaitlist={handleOpenJoinWaitlist} />
        <AboutSection />
        <ServicesSection onLearnMore={handleLearnMore} />
        <ProgramSnapshotSection onApplyNow={handleOpenApplyNow} />
        <CtaSection onApplyNow={handleOpenApplyNow} onJoinWaitlist={handleOpenJoinWaitlist} />
      </main>
      
      <Footer />

      <ApplyNowForm open={isApplyNowOpen} onOpenChange={setIsApplyNowOpen} />
      <JoinWaitlistForm open={isJoinWaitlistOpen} onOpenChange={setIsJoinWaitlistOpen} />
      <ServiceDetailModal open={isServiceModalOpen} onOpenChange={setIsServiceModalOpen} service={selectedService} />
    </div>
  );
};

export default App;
