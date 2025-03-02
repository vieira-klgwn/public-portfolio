
import React, { useState, useRef } from 'react';
import { ArrowRight, ExternalLink, Github } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
}

const ProjectsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const containerRef = useRef<HTMLDivElement>(null);
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const projects: Project[] = [
    {
      id: 1,
      title: "AI-Powered Code Assistant",
      description: "A Next.js application that uses machine learning to analyze and improve code, offering refactoring suggestions and best practices.",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=1000",
      category: "Web Development",
      technologies: ["Next.js", "TensorFlow", "Node.js", "MongoDB"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 2,
      title: "Secure IoT Home Automation",
      description: "An embedded system project that integrates IoT devices with a focus on security, using encryption and secure authentication.",
      image: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?auto=format&fit=crop&q=80&w=1000",
      category: "IoT",
      technologies: ["C++", "Raspberry Pi", "MQTT", "Python"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 3,
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with secure payment processing, inventory management, and an intuitive admin dashboard.",
      image: "https://images.unsplash.com/photo-1520333789090-1afc82db536a?auto=format&fit=crop&q=80&w=1000",
      category: "Web Development",
      technologies: ["MERN Stack", "Stripe API", "Redux", "JWT"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 4,
      title: "Network Vulnerability Scanner",
      description: "An ethical hacking tool that identifies security weaknesses in networks and provides detailed reports with mitigation strategies.",
      image: "https://images.unsplash.com/photo-1567301861996-0a16b0d5acb7?auto=format&fit=crop&q=80&w=1000",
      category: "Cybersecurity",
      technologies: ["Python", "Scapy", "Nmap", "Django"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 5,
      title: "Cosmic Adventure Game",
      description: "A 2D space exploration game built with Pygame featuring procedural generation and physics-based gameplay.",
      image: "https://images.unsplash.com/photo-1502134249126-9f3755a50d78?auto=format&fit=crop&q=80&w=1000",
      category: "Game Development",
      technologies: ["Python", "Pygame", "Numpy", "Blender"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 6,
      title: "AI Image Recognition API",
      description: "A REST API that uses deep learning models to identify objects and scenes in images with high accuracy.",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&q=80&w=1000",
      category: "AI",
      technologies: ["TensorFlow", "Flask", "Docker", "PostgreSQL"],
      liveUrl: "#",
      githubUrl: "#",
    },
  ];

  const categories = ['All', 'Web Development', 'Cybersecurity', 'IoT', 'Game Development', 'AI'];

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="projects" className="py-24 relative overflow-hidden px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block px-3 py-1 rounded-full bg-tech-blue/10 border border-tech-blue/20 mb-4 opacity-0 animate-fade-in">
            <p className="text-tech-light-blue font-medium">My Projects</p>
          </div>
          <h2 className="text-4xl font-bold mb-4 opacity-0 animate-fade-in animate-delay-100">
            Recent <span className="text-gradient">Work</span>
          </h2>
          <p className="text-secondary-foreground max-w-2xl mx-auto opacity-0 animate-fade-in animate-delay-200">
            Explore my latest projects that showcase my technical skills and creative problem-solving across various domains.
          </p>
        </div>

        <div className="mb-10 flex flex-wrap justify-center gap-3">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 rounded-full transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-tech-blue text-white shadow-lg shadow-tech-blue/20'
                  : 'bg-tech-dark/50 text-secondary-foreground hover:bg-tech-dark/80'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="glass-card group overflow-hidden rounded-2xl opacity-0 animate-fade-in"
              style={{ animationDelay: `${300 + index * 150}ms` }}
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <span className="px-2 py-1 text-xs rounded-full bg-tech-blue/10 text-tech-light-blue">
                    {project.category}
                  </span>
                </div>
                <p className="text-secondary-foreground mb-5">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-tech-dark/50 rounded-md text-xs text-secondary-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex gap-3">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full bg-tech-blue/10 text-tech-light-blue hover:bg-tech-blue/20 transition-colors"
                      >
                        <ExternalLink size={18} />
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full bg-tech-blue/10 text-tech-light-blue hover:bg-tech-blue/20 transition-colors"
                      >
                        <Github size={18} />
                      </a>
                    )}
                  </div>
                  <a
                    href="#"
                    className="text-tech-light-blue hover:text-tech-blue flex items-center transition-colors"
                  >
                    Details <ArrowRight size={16} className="ml-1" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center opacity-0 animate-fade-in animate-delay-1000">
          <a href="#" className="button-secondary inline-flex items-center">
            View All Projects <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
