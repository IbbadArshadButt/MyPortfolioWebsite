import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { 
  SiReact, 
  SiTypescript, 
  SiNodedotjs, 
  SiMongodb, 
  SiGit, 
  SiTailwindcss, 
  SiBootstrap, 
  SiExpress, 
  SiGithub, 
  SiOracle
} from 'react-icons/si';

const TechStackSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  const techCategories = [
    {
      title: 'Frontend',
      techs: [
        { name: 'React', icon: SiReact, color: '#61DAFB', level: 95 },
        { name: 'TypeScript', icon: SiTypescript, color: '#3178C6', level: 90 },
        { name: 'Bootstrap', icon: SiBootstrap, color: '#7952B3', level: 85 },
        { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4', level: 92 }
      ]
    },
    {
      title: 'Backend',
      techs: [
        { name: 'Node.js', icon: SiNodedotjs, color: '#339933', level: 90 },
        { name: 'Express', icon: SiExpress, color: '#000000', level: 85 },
        { name: 'GitHub', icon: SiGithub, color: '#181717', level: 80 },
        { name: 'Git', icon: SiGit, color: '#F05032', level: 95 }
      ]
    },
    {
      title: 'Database & Cloud',
      techs: [
        { name: 'MongoDB', icon: SiMongodb, color: '#47A248', level: 88 },
        { name: 'MongoDB Atlas', icon: SiMongodb, color: '#47A248', level: 85 },
        { name: 'Oracle', icon: SiOracle, color: '#F80000', level: 80 }
      ]
    }
  ];

  useEffect(() => {
    const techItems = sectionRef.current?.querySelectorAll('.tech-item');
    const progressBars = sectionRef.current?.querySelectorAll('.tech-progress');

    // Animate tech items
    gsap.fromTo(techItems,
      { opacity: 0, scale: 0.8, rotateY: 90 },
      {
        opacity: 1,
        scale: 1,
        rotateY: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: 'back.out(1.7)',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
          end: 'bottom 30%',
          toggleActions: 'play none none reverse'
        }
      }
    );

    // Animate progress bars
    progressBars?.forEach((bar) => {
      const level = bar.getAttribute('data-level');
      gsap.fromTo(bar,
        { width: '0%' },
        {
          width: `${level}%`,
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
    <section id="tech" ref={sectionRef} className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient-primary">
            Tech Stack
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            These are the technologies I use to bring ideas to life. I'm always learning 
            and expanding my toolkit to stay current with industry trends.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {techCategories.map((category, categoryIndex) => (
            <div key={category.title} className="space-y-6">
              <h3 className="text-2xl font-bold text-center mb-8 text-gradient-secondary">
                {category.title}
              </h3>
              
              <div className="space-y-6">
                {category.techs.map((tech, techIndex) => (
                  <div 
                    key={tech.name}
                    className="tech-item group"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-3">
                        <div 
                          className="p-3 rounded-xl transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg"
                          style={{ backgroundColor: `${tech.color}20` }}
                        >
                          <tech.icon 
                            className="w-8 h-8 transition-colors duration-300"
                            style={{ color: tech.color }}
                          />
                        </div>
                        <span className="font-semibold text-lg group-hover:text-primary transition-colors">
                          {tech.name}
                        </span>
                      </div>
                      <span className="text-sm font-medium text-muted-foreground">
                        {tech.level}%
                      </span>
                    </div>
                    
                    <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                      <div 
                        className="tech-progress h-full rounded-full transition-all duration-300 group-hover:shadow-glow"
                        style={{ backgroundColor: tech.color }}
                        data-level={tech.level}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;