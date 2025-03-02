
import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import ParticleBackground from '@/components/ParticleBackground';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import SkillsSection from '@/components/SkillsSection';
import ProjectsSection from '@/components/ProjectsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import { toast } from 'sonner';

const Index = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  useEffect(() => {
    // Welcome toast
    setTimeout(() => {
      toast.success("Welcome to my portfolio!", {
        description: "Feel free to explore my projects and skills!",
        duration: 5000,
      });
    }, 1500);
  }, []);

  return (
    <div className="relative">
      <ParticleBackground />
      <Navbar />
      
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
