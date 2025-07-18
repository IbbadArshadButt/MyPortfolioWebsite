import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import HeroSection from '@/components/portfolio/HeroSection';
import AboutSection from '@/components/portfolio/AboutSection';
import ProjectsSection from '@/components/portfolio/ProjectsSection';
import TechStackSection from '@/components/portfolio/TechStackSection';
import ExperienceSection from '@/components/portfolio/ExperienceSection';
import ContactSection from '@/components/portfolio/ContactSection';
import Footer from '@/components/portfolio/Footer';
import Navigation from '@/components/portfolio/Navigation';
import ThemeToggle from '@/components/portfolio/ThemeToggle';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const Index = () => {
  useEffect(() => {
    // Initialize GSAP animations
    gsap.fromTo('.fade-in', 
      { opacity: 0, y: 50 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 1,
        stagger: 0.2,
        scrollTrigger: {
          trigger: '.fade-in',
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse'
        }
      }
    );

    // Parallax effects for hero section
    gsap.to('.parallax-bg', {
      yPercent: -50,
      ease: 'none',
      scrollTrigger: {
        trigger: '.parallax-bg',
        start: 'top bottom',
        end: 'bottom top',
        scrub: true
      }
    });

    // Console easter egg
    console.log(`
%c👨‍💻 Welcome to my portfolio! 
%c
Looking at the code? I like your curiosity! 
Feel free to reach out if you want to discuss tech, opportunities, or just chat!

Email: your.email@domain.com
GitHub: github.com/yourusername
LinkedIn: linkedin.com/in/yourprofile

Built with: React + Tailwind CSS + GSAP + ❤️
    `, 
    'color: #8b5cf6; font-size: 16px; font-weight: bold;',
    'color: #6b7280; font-size: 12px;'
    );

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <ThemeToggle />
      
      <main>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <TechStackSection />
        <ExperienceSection />
        <ContactSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
