import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Calendar, MapPin, Building, Download } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const ExperienceSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  const experiences = [
    {
      title: 'Frontend Design Intern',
      company: 'Adroit Light Solutions',
      location: 'Gujranwala',
      period: 'January 2025 – April 2025',
      description: [
        'Assisted in designing responsive web interfaces using HTML5 and CSS3 to enhance user experience and visual consistency.',
        'Completed comprehensive Web Development Bootcamp by Angela Yu from Udemy, covering HTML, CSS, and JavaScript best practices.'
      ],
      skills: ['HTML5', 'CSS3', 'JavaScript'],
      type: 'current'
    }
  ];

  useEffect(() => {
    const timelineItems = sectionRef.current?.querySelectorAll('.timeline-item');

    gsap.fromTo(timelineItems,
      { opacity: 0, x: -100 },
      {
        opacity: 1,
        x: 0,
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

    // Animate timeline line
    gsap.fromTo('.timeline-line',
      { height: '0%' },
      {
        height: '100%',
        duration: 2,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 60%',
          toggleActions: 'play none none reverse'
        }
      }
    );
  }, []);

  return (
    <section id="experience" ref={sectionRef} className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient-primary">
            Experience
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            My professional journey in software development, working with amazing teams 
            and building products that make a real impact.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-primary timeline-line" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={exp.company} className="timeline-item relative">
                {/* Timeline Dot */}
                <div className={`absolute left-6 w-4 h-4 rounded-full border-4 border-background ${
                  exp.type === 'current' 
                    ? 'bg-gradient-primary shadow-glow' 
                    : 'bg-muted'
                }`} />

                {/* Experience Card */}
                <div className="ml-20">
                  <Card className="hover-lift hover:shadow-card transition-all duration-300">
                    <CardContent className="p-8">
                      <div className="space-y-6">
                        {/* Header */}
                        <div className="space-y-3">
                          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                            <h3 className="text-2xl font-bold">{exp.title}</h3>
                            {exp.type === 'current' && (
                              <Badge className="bg-gradient-primary text-white w-fit">
                                Previous
                              </Badge>
                            )}
                          </div>
                          
                          <div className="flex flex-col sm:flex-row gap-4 text-muted-foreground">
                            <div className="flex items-center gap-2">
                              <Building className="w-4 h-4" />
                              <span className="font-medium">{exp.company}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <MapPin className="w-4 h-4" />
                              <span>{exp.location}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Calendar className="w-4 h-4" />
                              <span>{exp.period}</span>
                            </div>
                          </div>
                        </div>

                        {/* Description */}
                        <ul className="space-y-2">
                          {exp.description.map((item, i) => (
                            <li key={i} className="flex items-start gap-3">
                              <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                              <span className="text-muted-foreground leading-relaxed">{item}</span>
                            </li>
                          ))}
                        </ul>

                        {/* Skills */}
                        <div>
                          <h4 className="text-sm font-semibold mb-3">Key Technologies</h4>
                          <div className="flex flex-wrap gap-2">
                            {exp.skills.map((skill) => (
                              <Badge 
                                key={skill} 
                                variant="outline"
                                className="hover:bg-primary/10 transition-colors"
                              >
                                {skill}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;