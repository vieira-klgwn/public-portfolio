
import React, { useState, useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';

interface Skill {
  name: string;
  level: number;
  category: 'languages' | 'frameworks' | 'databases' | 'tools';
  icon?: React.ReactNode;
}

const SkillsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('languages');
  const progressRef = useRef<HTMLDivElement>(null);
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const skills: Skill[] = [
    { name: 'JavaScript', level: 95, category: 'languages' },
    { name: 'Python', level: 90, category: 'languages' },
    { name: 'Java', level: 85, category: 'languages' },
    { name: 'C++', level: 75, category: 'languages' },
    { name: 'TypeScript', level: 85, category: 'languages' },
    { name: 'HTML/CSS', level: 95, category: 'languages' },
    
    { name: 'React', level: 90, category: 'frameworks' },
    { name: 'Next.js', level: 85, category: 'frameworks' },
    { name: 'Node.js', level: 90, category: 'frameworks' },
    { name: 'Express', level: 85, category: 'frameworks' },
    { name: 'TensorFlow', level: 80, category: 'frameworks' },
    { name: 'Prisma ORM', level: 80, category: 'frameworks' },
    { name: 'SpringBoot', level: 97, category: 'frameworks' },
    
    { name: 'MySQL', level: 85, category: 'databases' },
    { name: 'PostgreSQL', level: 80, category: 'databases' },
    { name: 'MongoDB', level: 90, category: 'databases' },
    { name: 'Neon Database', level: 75, category: 'databases' },
    
    { name: 'Figma', level: 80, category: 'tools' },
    { name: 'Blender', level: 70, category: 'tools' },
    { name: 'DaVinci Resolve', level: 75, category: 'tools' },
    { name: 'Adobe Illustrator', level: 83, category: 'tools' },
    { name: 'Adobe Photoshop', level: 87, category: 'tools' },
    { name: 'Penetration Testing', level: 80, category: 'tools' },
  ];

  const categories = [
    { id: 'languages', name: 'Languages' },
    { id: 'frameworks', name: 'Frameworks' },
    { id: 'databases', name: 'Databases' },
    { id: 'tools', name: 'Tools & Others' }
  ];

  const filteredSkills = skills.filter(skill => skill.category === selectedCategory);

  return (
    <section id="skills" className="py-24 relative overflow-hidden px-6 bg-tech-dark/50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block px-3 py-1 rounded-full bg-tech-cyan/10 border border-tech-cyan/20 mb-4 opacity-0 animate-fade-in">
            <p className="text-tech-cyan font-medium">My Skills</p>
          </div>
          <h2 className="text-4xl font-bold mb-4 opacity-0 animate-fade-in animate-delay-100">
            Technical <span className="text-gradient">Expertise</span>
          </h2>
          <p className="text-secondary-foreground max-w-2xl mx-auto opacity-0 animate-fade-in animate-delay-200">
            I've developed a diverse skill set across programming languages, frameworks, 
            databases, and creative tools. Here's a snapshot of my technical capabilities.
          </p>
        </div>

        <div className="mb-12">
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-5 py-2 rounded-full transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-tech-blue text-white shadow-lg shadow-tech-blue/20'
                    : 'bg-tech-dark/50 text-secondary-foreground hover:bg-tech-dark/80'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredSkills.map((skill, index) => (
              <div key={skill.name} className="tech-card group opacity-0 animate-fade-in" style={{ animationDelay: `${300 + (index * 100)}ms` }}>
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-medium">{skill.name}</h3>
                  <span className="text-tech-light-blue font-semibold">{skill.level}%</span>
                </div>
                <div className="skill-progress">
                  <div 
                    ref={progressRef} 
                    className="skill-progress-bar" 
                    style={{ 
                      width: inView ? `${skill.level}%` : '0%',
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center opacity-0 animate-fade-in animate-delay-1000">
          <h3 className="text-2xl font-bold mb-6">Other Specializations</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              'Game Development',
              'UI/UX Design',
              'Digital Forensics',
              'Machine Learning',
              'Embedded Systems',
              'IoT Development',
              'Video Editing',
              'Graphic Design'
            ].map((specialization) => (
              <span 
                key={specialization}
                className="px-4 py-2 bg-tech-dark/70 rounded-full border border-tech-blue/20 text-tech-light-blue hover:border-tech-blue/70 transition-all"
              >
                {specialization}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
