
import React from 'react';
import { CircuitBoard, Code, Database, Lock, Cpu, Rocket } from 'lucide-react';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block px-3 py-1 rounded-full bg-tech-purple/10 border border-tech-purple/20 mb-4 opacity-0 animate-fade-in animate-delay-100">
            <p className="text-tech-light-blue font-medium">About Me</p>
          </div>
          <h2 className="text-4xl font-bold mb-4 opacity-0 animate-fade-in animate-delay-200">
            Transforming <span className="text-gradient">ideas</span> into digital reality
          </h2>
          <p className="text-secondary-foreground max-w-2xl mx-auto opacity-0 animate-fade-in animate-delay-300">
            I'm a 17-year-old developer passionate about building innovative digital solutions
            that make a difference. My journey in tech started early and has evolved into a
            diverse skill set spanning multiple domains.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="tech-card group opacity-0 animate-fade-in-right animate-delay-400">
            <div className="mb-5">
              <span className="inline-block p-3 rounded-xl bg-tech-blue/10 text-tech-blue mb-4">
                <Code size={24} />
              </span>
              <h3 className="text-xl font-semibold mb-2">Full-Stack Development</h3>
              <p className="text-secondary-foreground">
                I specialize in creating high-performance applications using Next.js, Prisma ORM,
                and the MERN stack. My expertise spans from crafting beautiful user interfaces to
                implementing efficient backend systems.
              </p>
            </div>
          </div>

          <div className="tech-card group opacity-0 animate-fade-in-left animate-delay-500">
            <div className="mb-5">
              <span className="inline-block p-3 rounded-xl bg-tech-purple/10 text-tech-purple mb-4">
                <Lock size={24} />
              </span>
              <h3 className="text-xl font-semibold mb-2">Ethical Hacking</h3>
              <p className="text-secondary-foreground">
                I'm passionate about cybersecurity, with skills in Digital Forensics and
                Penetration Testing. I believe in ethical, white-hat approaches to identify
                vulnerabilities and strengthen digital security.
              </p>
            </div>
          </div>

          <div className="tech-card group opacity-0 animate-fade-in-right animate-delay-600">
            <div className="mb-5">
              <span className="inline-block p-3 rounded-xl bg-tech-cyan/10 text-tech-cyan mb-4">
                <Rocket size={24} />
              </span>
              <h3 className="text-xl font-semibold mb-2">AI Development</h3>
              <p className="text-secondary-foreground">
                I develop and integrate machine learning models using TensorFlow to create
                intelligent applications. I'm fascinated by AI's potential to solve complex
                problems and enhance user experiences.
              </p>
            </div>
          </div>

          <div className="tech-card group opacity-0 animate-fade-in-left animate-delay-700">
            <div className="mb-5">
              <span className="inline-block p-3 rounded-xl bg-tech-pink/10 text-tech-pink mb-4">
                <Cpu size={24} />
              </span>
              <h3 className="text-xl font-semibold mb-2">IoT & Embedded Systems</h3>
              <p className="text-secondary-foreground">
                I have extensive experience working with embedded systems and IoT devices,
                bridging the gap between hardware and software to create innovative solutions
                that interact with the physical world.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-8 opacity-0 animate-fade-in animate-delay-1000">
          <div className="w-full md:w-1/2 space-y-6">
            <h3 className="text-2xl font-bold">My Journey</h3>
            <p className="text-secondary-foreground">
              My passion for technology emerged at an early age, driven by curiosity and a desire to create. 
              I started coding when I was 14 and quickly expanded my skills across various domains.
            </p>
            <p className="text-secondary-foreground">
              What truly excites me is the intersection of different technologies – combining web development 
              with AI, securing applications with ethical hacking principles, or creating interactive 
              experiences through game development.
            </p>
            <p className="text-secondary-foreground">
              As a young developer, I'm constantly learning and challenging myself to build 
              solutions that are not just technically sound, but also innovative and impactful.
            </p>

            <div className="pt-4">
              <a href="#skills" className="button-secondary">
                Explore My Skills
              </a>
            </div>
          </div>

          <div className="w-full md:w-1/2 grid grid-cols-2 gap-4">
            <div className="flex flex-col items-center glass-card p-6 hover:scale-105 transition-transform">
              <CircuitBoard className="h-10 w-10 text-tech-light-blue mb-2" />
              <span className="text-4xl font-bold text-tech-light-blue">10+</span>
              <p className="text-sm text-secondary-foreground">Tech Stack</p>
            </div>
            <div className="flex flex-col items-center glass-card p-6 hover:scale-105 transition-transform">
              <Code className="h-10 w-10 text-tech-purple mb-2" />
              <span className="text-4xl font-bold text-tech-purple">15+</span>
              <p className="text-sm text-secondary-foreground">Projects</p>
            </div>
            <div className="flex flex-col items-center glass-card p-6 hover:scale-105 transition-transform">
              <Database className="h-10 w-10 text-tech-cyan mb-2" />
              <span className="text-4xl font-bold text-tech-cyan">3+</span>
              <p className="text-sm text-secondary-foreground">Database Types</p>
            </div>
            <div className="flex flex-col items-center glass-card p-6 hover:scale-105 transition-transform">
              <Rocket className="h-10 w-10 text-tech-pink mb-2" />
              <span className="text-4xl font-bold text-tech-pink">3+</span>
              <p className="text-sm text-secondary-foreground">Years Coding</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
