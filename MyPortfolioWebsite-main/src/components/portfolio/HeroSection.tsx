import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';

gsap.registerPlugin(ScrollToPlugin);
import { Button } from '@/components/ui/button';
import heroBackground from '@/assets/hero-background.jpg';

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Hero entrance animation
    const tl = gsap.timeline();
    
    tl.fromTo(titleRef.current,
      { opacity: 0, y: 100 },
      { opacity: 1, y: 0, duration: 1.2, ease: 'power3.out' }
    )
    .fromTo(subtitleRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: 'power3.out' },
      '-=0.6'
    )
    .fromTo(ctaRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' },
      '-=0.4'
    );

    // Typewriter effect for the tagline
    const text = "Crafting code that matters.";
    let i = 0;
    const typewriter = () => {
      if (i < text.length && subtitleRef.current) {
        subtitleRef.current.textContent += text.charAt(i);
        i++;
        setTimeout(typewriter, 100);
      }
    };
    
    setTimeout(() => {
      if (subtitleRef.current) {
        subtitleRef.current.textContent = '';
        typewriter();
      }
    }, 1500);

  }, []);

  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      gsap.to(window, {
        duration: 1.5,
        scrollTo: { y: projectsSection, offsetY: 80 },
        ease: 'power2.inOut'
      });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBackground} 
          alt="Developer workspace" 
          className="w-full h-full object-cover parallax-bg"
        />
        <div className="absolute inset-0 bg-gradient-dark opacity-80" />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Hero Content */}
      <div ref={heroRef} className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <h1 
          ref={titleRef}
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-gradient-primary"
        >
          Ibbad Arshad
        </h1>
        
        <p 
          ref={subtitleRef}
          className="text-xl md:text-2xl lg:text-3xl mb-8 font-semibold min-h-[3rem] text-primary drop-shadow dark:text-white"
        >
          {/* Typewriter text will be inserted here */}
        </p>

        <div ref={ctaRef} className="space-y-6">
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Passionate software engineer specializing in MERN stack. I build scalable applications that solve real-world problems.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg"
              className="bg-gradient-primary hover:shadow-glow transition-all duration-300 px-8 py-3"
              onClick={scrollToProjects}
            >
              View My Work
            </Button>
            
            <a
              href="/Resume.pdf"
              download
              className="border-2 border-primary bg-white/90 dark:bg-neutral-900 text-primary dark:text-white hover:bg-primary hover:text-white hover:shadow-glow px-8 py-3 rounded-lg text-base font-semibold transition-colors duration-300 inline-block"
            >
              Download Resume
            </a>
          </div>

        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <button 
          onClick={scrollToProjects}
          className="flex flex-col items-center text-muted-foreground hover:text-primary transition-smooth group"
        >
          <span className="text-sm mb-2 text-primary drop-shadow dark:text-white">Scroll Down</span>
          <ChevronDown className="w-6 h-6 animate-bounce group-hover:text-primary" />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;