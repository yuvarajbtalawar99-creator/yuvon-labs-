import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import ProjectsSection from '@/components/ProjectsSection';
import WhyChooseSection from '@/components/WhyChooseSection';
import TechStackSection from '@/components/TechStackSection';
import ProjectJourney from '@/components/ProjectJourney';
import ContactSection from '@/components/ContactSection';
import TeamSection from '@/components/TeamSection';
import Preloader from '@/components/Preloader';

const Index = () => {
  const [isLoading, setIsLoading] = useState(() => !sessionStorage.getItem('hasVisited'));

  useEffect(() => {
    if (!isLoading) return;

    // Intentional delay for cinematic preloader experience
    const timer = setTimeout(() => {
      setIsLoading(false);
      sessionStorage.setItem('hasVisited', 'true');
    }, 2800);

    return () => clearTimeout(timer);
  }, [isLoading]);

  return (
    <motion.div
      initial={{ opacity: isLoading ? 1 : 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen"
    >
      <AnimatePresence mode="wait">
        {isLoading && <Preloader key="preloader" />}
      </AnimatePresence>

      <div className={`min-h-screen bg-background text-foreground overflow-x-hidden ${isLoading ? 'h-screen overflow-hidden' : ''}`}>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <ProjectsSection />
        <WhyChooseSection />
        <TechStackSection />
        <ProjectJourney />
        <TeamSection />
        <ContactSection />
      </div>
    </motion.div>
  );
};

export default Index;
