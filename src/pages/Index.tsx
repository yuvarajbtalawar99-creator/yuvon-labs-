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

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
      <WhyChooseSection />
      <TechStackSection />
      <ProjectJourney />
      <ContactSection />
      <TeamSection />
      <Footer />
    </div>
  );
};

export default Index;
