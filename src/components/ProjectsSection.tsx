
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
      title: "TaskSync-Project_Management_System",
      description: "A system tailored to allow teams along with their team leaders to managed project-related tasks. It allow realtime communication with team members, and enhances tracking the progress that the team is making in implementing any project",
      image: "/task_Sync.png",
      category: "Web Development",
      technologies: ["Next.js", "TensorFlow", "Node.js", "MongoDB"],
      liveUrl: "#",
      githubUrl: "https://github.com/vieira-klgwn/TaskSync-V2.git",
    },
    {
      id: 2,
      title: "Web based Light Scheduler",
      description: "An embedded system project that integrates IoT devices with a focus on security. Its main purpose is to allow users to control lights remotely",
      image: "/light_Scheduler.jpg",
      category: "IoT",
      technologies: ["C++", "Raspberry Pi", "MQTT", "Python"],
      liveUrl: "#",
      githubUrl: "https://github.com/vieira-klgwn/Embedded-Sysetms-Web-Based-Light-Scheduler.git",
    },
    {
      id: 3,
      title: "Hospital Management System",
      description: "A full-stack hospital management system with secured apis, doctor-patient-admin roles, fast appointment creation & retrieval, and an intuitive user experience",
      image: "/hospital_management_System.jpg",
      category: "Web Development",
      technologies: ["MERN Stack", "Stripe API", "Redux", "JWT"],
      liveUrl: "#",
      githubUrl: "https://github.com/vieira-klgwn/Springboot-HospitalManagementSystem.git",
    },
    {
      id: 4,
      title: "Guardian-Sanctuary-Threat protection tools",
      description: "An ethical hacking tool that identifies security weaknesses in networks and provides detailed reports with mitigation strategies.",
      image: "/guardian_sanctuary.png",
      category: "Cybersecurity",
      technologies: ["Python", "Scapy", "Nmap", "Django"],
      liveUrl: "#",
      githubUrl: "https://github.com/vieira-klgwn/my_project.git",
    },
    {
      id: 5,
      title: "Gon-Killue Pygame game",
      description: "A 2D game that visualizes struggles of Gon and Killua in Hunter X Hunter.",
      image: "/gon_and_killua.avif",
      category: "Game Development",
      technologies: ["Python", "Pygame", "Numpy", "Blender"],
      liveUrl: "#",
      githubUrl: "https://github.com/vieira-klgwn/GonXKillua-Pygame-Game.git",
    },
    {
      id: 6,
      title: "AI Image Recognition API (Project Still Under dev)",
      description: "A REST API that uses deep learning models to identify objects and scenes in images with high accuracy.",
      image: "/facial-recognition-collage-concept_23-2150038898.jpg",
      category: "AI",
      technologies: ["TensorFlow", "Flask", "Docker", "PostgreSQL"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 7,
      title: "Web3 Dapp Starter (Project still under dev)",
      description: "A web3 dapp that can help anyone who wants to make any dapp with a single click. The dapps made by this starter are automatically added to any public block-chain, and also give feature of managing the dapp without any code experience.",
      image: "/web3.jpg",
      category: "Web 3",
      technologies: ["Web3", "BlockChain", "Dapp", "Solidity"],
      liveUrl: "#",
      githubUrl: "https://github.com/vieira-klgwn/dapp-commence.git",
    }
  ];

  const categories = ['All', 'Web Development', 'Cybersecurity', 'IoT', 'Game Development', 'AI', 'Web 3'];

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
            Explore my latest projects that showcase my technical skills and creative problem-solving across various domains.Ooops, Some links will not work as expected.
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
