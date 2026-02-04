import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import ProjectsSection from '@/components/ProjectsSection';
import WhyChooseSection from '@/components/WhyChooseSection';
import TechStackSection from '@/components/TechStackSection';
import ProjectJourney from '@/components/ProjectJourney';
import ContactSection from '@/components/ContactSection';
import TeamSection from '@/components/TeamSection';
import Footer from '@/components/Footer';
import Preloader from '@/components/Preloader';

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Intentional delay for cinematic preloader experience
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && <Preloader key="preloader" />}
      </AnimatePresence>

      <div className={`min-h-screen bg-background text-foreground overflow-x-hidden ${isLoading ? 'h-screen overflow-hidden' : ''}`}>
        <Navbar />
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <ProjectsSection />
        <WhyChooseSection />
        <TechStackSection />
        <ProjectJourney />
        <TeamSection />
        <ContactSection />
        <Footer />
      </div>
    </>
  );
};

export default Index;
