import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Code2, Database, Server, Smartphone } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import developerProfile from '@/assets/developer-profile.jpg';

const AboutSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  const skills = [
    { name: 'Frontend Development', icon: Code2, level: 95 },
    { name: 'Backend Development', icon: Server, level: 90 },
    { name: 'Database Design', icon: Database, level: 85 },
    { name: 'Web App Development', icon: Smartphone, level: 80 },
  ];

  const technologies = [
    'C++', 'HTML', 'CSS', 'Bootstrap', 'Javascript', 'React', 'MongoDB', 'Express', 'Node.Js', 'Postman', 'Python', 'Git', 'GitHub', 'Figma'
  ];

  useEffect(() => {
    const cards = sectionRef.current?.querySelectorAll('.skill-card');
    const progressBars = sectionRef.current?.querySelectorAll('.progress-bar');

    gsap.fromTo(cards,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
          end: 'bottom 30%',
          toggleActions: 'play none none reverse'
        }
      }
    );

    // Animate progress bars
    progressBars?.forEach((bar, index) => {
      gsap.fromTo(bar,
        { width: '0%' },
        {
          width: `${skills[index].level}%`,
          duration: 1.5,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: bar,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          }
        }
      );
    });
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient-primary">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            I'm a passionate software engineer with experience in building scalable web applications and solving complex technical challenges.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile & Bio */}
          <div className="fade-in">
            <div className="relative">
              <img 
                src={developerProfile}
                alt="Developer Profile"
                className="w-80 h-80 rounded-2xl object-cover mx-auto shadow-card hover-lift"
              />
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-primary rounded-2xl flex items-center justify-center shadow-glow">
                <Code2 className="w-12 h-12 text-white" />
              </div>
            </div>
            
            <div className="mt-8 space-y-4">
              <p className="text-lg leading-relaxed">
                Hello! I'm a software engineer who loves creating digital experiences 
                that make a difference. My journey began with curiosity about how things work, 
                and it evolved into a passion for building robust, user-friendly applications.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground">
                When I'm not coding, you'll find me exploring new technologies, contributing 
                to open source projects, or sharing knowledge with the developer community.
              </p>
            </div>

            {/* Tech Stack Badges */}
            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4">Technologies I Love</h3>
              <div className="flex flex-wrap gap-2">
                {technologies.map((tech) => (
                  <Badge 
                    key={tech} 
                    variant="secondary" 
                    className="px-3 py-1 hover:bg-primary/20 transition-smooth"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          {/* Skills */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold mb-8">Core Competencies</h3>
            
            {skills.map((skill, index) => (
              <Card key={skill.name} className="skill-card hover-lift">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-gradient-primary rounded-lg">
                        <skill.icon className="w-6 h-6 text-white" />
                      </div>
                      <span className="font-semibold text-lg">{skill.name}</span>
                    </div>
                    <span className="text-sm font-medium text-muted-foreground">
                      {skill.level}%
                    </span>
                  </div>
                  
                  <div className="w-full bg-muted rounded-full h-3 overflow-hidden">
                    <div 
                      className="progress-bar h-full bg-gradient-primary rounded-full"
                      style={{ width: '0%' }}
                    />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;