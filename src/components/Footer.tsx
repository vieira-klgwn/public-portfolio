
import React from 'react';
import { ArrowUp, Github, Linkedin, Mail, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative py-12 bg-tech-dark border-t border-tech-dark/50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="mb-6 md:mb-0">
            <a href="#" className="text-3xl font-bold text-gradient">
              NTWALI<span className="text-tech-blue">.</span>
            </a>
            <p className="mt-2 text-secondary-foreground max-w-md">
              A passionate full-stack developer building innovative digital solutions with a focus on performance and security.
            </p>
          </div>
          
          <div className="flex flex-col items-end">
            <button 
              onClick={scrollToTop}
              className="p-3 rounded-full bg-tech-blue/10 text-tech-light-blue hover:bg-tech-blue/20 transition-all mb-6"
              aria-label="Scroll to top"
            >
              <ArrowUp size={20} />
            </button>
            
            <div className="flex space-x-4">
              <a 
                href="#" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-tech-dark/70 hover:bg-tech-blue/20 text-secondary-foreground hover:text-tech-light-blue transition-all"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a 
                href="#" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-tech-dark/70 hover:bg-tech-blue/20 text-secondary-foreground hover:text-tech-light-blue transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="#" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-tech-dark/70 hover:bg-tech-blue/20 text-secondary-foreground hover:text-tech-light-blue transition-all"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a 
                href="mailto:ntwali@example.com" 
                className="p-2 rounded-full bg-tech-dark/70 hover:bg-tech-blue/20 text-secondary-foreground hover:text-tech-light-blue transition-all"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-tech-dark/50 flex flex-col md:flex-row justify-between items-center">
          <p className="text-secondary-foreground text-sm">
            &copy; {currentYear} Ntwali Isimbi Vieira. All rights reserved.
          </p>
          
          <div className="mt-4 md:mt-0 flex flex-wrap gap-4">
            {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`}
                className="text-sm text-secondary-foreground hover:text-tech-light-blue transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
