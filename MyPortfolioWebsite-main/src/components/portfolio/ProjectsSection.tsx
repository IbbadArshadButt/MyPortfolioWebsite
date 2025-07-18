import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ExternalLink, Github, Zap, Shield, Globe } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const ProjectsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  // Initial 3 projects
  const initialProjects = [
    {
      title: 'Real Estate Listing Platform (MERN Stack)',
      description: 'Designed and developed a full-stack real estate website with search, filter, add/edit listing features. Integrated Leaflet Maps API and image upload via Cloudinary.',
      tech: ['MongoDB', 'Express', 'React', 'Node.js', 'Leaflet', 'Cloudinary'],
      github: 'https://github.com/IbbadArshadButt/RealEstateFYP.git',
      live: 'https://realestatefyp.onrender.com',
      icon: Globe,
      color: 'from-blue-500 to-purple-600'
    },
    {
      title: 'Railway Reservation System (Frontend Only)',
      description: 'Developed a Railway Reservation System frontend using HTML, CSS, and JavaScript with some basic features like Login & Register interfaces.',
      tech: ['HTML', 'CSS', 'JavaScript'],
      github: '',
      live: '',
      icon: Zap,
      color: 'from-green-500 to-teal-600'
    },
    {
      title: 'Image Processing Tool (HTML, CSS, and JavaScript)',
      description: 'Built a single-page web application that allows users to upload, apply image processing effects (blur, sharpen, add watermark), and download their images.',
      tech: ['HTML', 'CSS', 'JavaScript'],
      github: 'https://github.com/IbbadArshadButt/Image-Essence.git',
      live: 'https://image-essence.netlify.app/',
      icon: Shield,
      color: 'from-red-500 to-pink-600'
    }
  ];

  // 4th project details
  const fourthProject = {
    title: 'Portfolio Website',
    description: 'A modern, animated portfolio built with React, Vite, and GSAP to showcase my work and skills. Features smooth transitions and a responsive design.',
    tech: ['React', 'GSAP', 'Vite'],
    github: '#', // Placeholder
    live: '#',   // Placeholder
    icon: Globe,
    color: 'from-purple-500 to-blue-600'
  };

  // State for projects
  const [projects, setProjects] = useState(initialProjects);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    const projectCards = sectionRef.current?.querySelectorAll('.project-card');

    gsap.fromTo(projectCards,
      { opacity: 0, y: 100, rotateY: 15 },
      {
        opacity: 1,
        y: 0,
        rotateY: 0,
        duration: 1,
        stagger: 0.3,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
          end: 'bottom 30%',
          toggleActions: 'play none none reverse'
        }
      }
    );
  }, [projects]);

  // Handler for the button
  const handleViewAll = () => {
    if (!showAll) {
      setProjects((prev) => [...prev, fourthProject]);
      setShowAll(true);
    }
  };

  return (
    <section id="projects" ref={sectionRef} className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient-primary">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Here are some of my recent projects that showcase my skills in full-stack development, 
            problem-solving, and creating user-centered solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={project.title}
              className="project-card group hover:shadow-glow transition-all duration-500 border-border/50 hover:border-primary/30"
            >
              <CardHeader className="space-y-4">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${project.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <project.icon className="w-8 h-8 text-white" />
                </div>
                
                <div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="mt-2 text-muted-foreground leading-relaxed">
                    {project.description}
                  </CardDescription>
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                {/* Tech Stack */}
                <div>
                  <h4 className="text-sm font-semibold mb-3 text-muted-foreground">Tech Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <Badge 
                        key={tech} 
                        variant="outline" 
                        className="text-xs hover:bg-primary/10 transition-colors"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-3">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="flex-1 group/btn hover:bg-primary/10"
                    asChild
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2 group-hover/btn:scale-110 transition-transform" />
                      Code
                    </a>
                  </Button>
                  
                  <Button 
                    size="sm" 
                    className="flex-1 bg-gradient-primary hover:shadow-glow group/btn"
                    asChild
                  >
                    <a href={project.live} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2 group-hover/btn:scale-110 transition-transform" />
                      Live Demo
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            size="lg"
            className="border-primary/50 hover:bg-primary/10 px-8"
            onClick={handleViewAll}
            disabled={showAll}
          >
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;