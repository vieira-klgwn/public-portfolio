
import React, { useEffect, useRef } from 'react';
import { ArrowRight, Github, Linkedin } from 'lucide-react';

const HeroSection: React.FC = () => {
  const textRef = useRef<HTMLSpanElement>(null);
  
  useEffect(() => {
    if (!textRef.current) return;
    
    const texts = [
      'Full-Stack Developer',
      'Ethical Hacker',
      'AI Enthusiast',
      'Game Developer'
    ];
    
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;
    
    const type = () => {
      const currentText = texts[textIndex];
      
      if (isDeleting) {
        if (textRef.current) {
          textRef.current.textContent = currentText.substring(0, charIndex - 1);
          charIndex--;
        }
        
        typingSpeed = 50;
      } else {
        if (textRef.current) {
          textRef.current.textContent = currentText.substring(0, charIndex + 1);
          charIndex++;
        }
        
        typingSpeed = 100;
      }
      
      if (!isDeleting && charIndex === currentText.length) {
        isDeleting = true;
        typingSpeed = 1500; // Pause at end
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % texts.length;
        typingSpeed = 500; // Pause before typing new word
      }
      
      setTimeout(type, typingSpeed);
    };
    
    const typingTimeout = setTimeout(type, 1000);
    return () => clearTimeout(typingTimeout);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center pt-24 overflow-hidden px-6" id="home">
      <div className="absolute inset-0 bg-hero-gradient z-0"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="max-w-3xl">
          <div className="space-y-6 opacity-0 animate-fade-in">
            <div className="inline-block px-4 py-1 rounded-full bg-tech-blue/10 border border-tech-blue/20 animate-delay-100">
              <p className="text-tech-light-blue font-medium">Hello, I'm</p>
            </div>
            
            <h1 className="font-bold tracking-tight animate-delay-200">
              Ntwali Isimbi Vieira
            </h1>
            
            <div className="flex items-center h-12 animate-delay-300">
              <span className="text-2xl md:text-3xl font-semibold text-gradient mr-3">I'm a</span>
              <span ref={textRef} className="text-2xl md:text-3xl font-semibold text-tech-light-blue"></span>
              <span className="animate-pulse ml-1 h-8 w-1 bg-tech-light-blue"></span>
            </div>
            
            <p className="text-lg text-secondary-foreground max-w-2xl animate-delay-400">
              A passionate 17-year-old developer specializing in high-performance applications, 
              ethical hacking, and AI development. I build innovative solutions that blend 
              technical excellence with creative problem-solving.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-2 animate-delay-500">
              <a href="#projects" className="button-primary">
                View My Work <ArrowRight className="inline ml-2 h-5 w-5" />
              </a>
              <a href="#contact" className="button-secondary">
                Get In Touch
              </a>
            </div>
            
            <div className="flex items-center gap-4 pt-2 animate-delay-700">
              <a href="https://github.com/vieira-klgwn" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-tech-light-blue transition-colors">
                <Github size={24} />
              </a>
              <a href="https://www.linkedin.com/in/ntwali-isimbi-vieira-2b1213302/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-tech-light-blue transition-colors">
                <Linkedin size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="flex flex-col items-center text-muted-foreground hover:text-tech-light-blue transition-colors">
          <span className="text-sm font-medium mb-2">Scroll Down</span>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 5V19M12 19L19 12M12 19L5 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
