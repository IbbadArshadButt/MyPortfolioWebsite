import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();
  
  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'ibbadbutt3521@gmail.com',
      href: 'mailto:ibbadbutt3521@gmail.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '0308-1200084',
      href: 'tel:03081200084'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Gujranwala, Pakistan',
      href: '#'
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/IbbadArshadButt',
      color: 'hover:text-gray-900 dark:hover:text-white'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/ibbad-arshad/',
      color: 'hover:text-blue-600'
    },
    {
      icon: Twitter,
      label: 'Twitter',
      href: 'https://x.com/ibbadbutt085',
      color: 'hover:text-blue-400'
    }
  ];

  useEffect(() => {
    const contactCards = sectionRef.current?.querySelectorAll('.contact-card');
    const formElements = sectionRef.current?.querySelectorAll('.form-element');

    gsap.fromTo(contactCards,
      { opacity: 0, y: 50, rotateX: 45 },
      {
        opacity: 1,
        y: 0,
        rotateX: 0,
        duration: 1,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
          end: 'bottom 30%',
          toggleActions: 'play none none reverse'
        }
      }
    );

    gsap.fromTo(formElements,
      { opacity: 0, x: 50 },
      {
        opacity: 1,
        x: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.contact-form',
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        }
      }
    );
  }, []);

  return (
    <section id="contact" ref={sectionRef} className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient-primary">
            Get In Touch
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            I'm always interested in hearing about new opportunities, 
            interesting projects, or just having a chat about technology.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-start">
          {/* Contact Information */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold mb-8">Let's Connect</h3>
            
            <div className="space-y-6">
              {contactInfo.map((info) => (
                <Card key={info.label} className="contact-card hover-lift group">
                  <CardContent className="p-6">
                    <a 
                      href={info.href}
                      className="flex items-center space-x-4 group-hover:text-primary transition-colors"
                    >
                      <div className="p-3 bg-gradient-primary rounded-xl group-hover:scale-110 transition-transform">
                        <info.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">{info.label}</p>
                        <p className="font-semibold text-lg">{info.value}</p>
                      </div>
                    </a>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Social Links */}
            <div className="pt-8">
              <h4 className="text-lg font-semibold mb-6">Follow Me</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-4 rounded-xl glass hover:scale-110 transition-all duration-300 ${social.color}`}
                  >
                    <social.icon className="w-6 h-6" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quote */}
            <div className="pt-8">
              <blockquote className="text-lg italic text-muted-foreground border-l-4 border-primary pl-6">
                "The best way to predict the future is to create it."
                <footer className="text-sm mt-2 not-italic">- Peter Drucker</footer>
              </blockquote>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form">
            <Card className="hover:shadow-card transition-all duration-300">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6">Send Me a Message</h3>
                
                {/*
                  IMPORTANT: Replace the action URL below with your actual Formspree endpoint after creating your form at https://formspree.io/
                  Example: action="https://formspree.io/f/abcde123"
                */}
                <form action="https://formspree.io/f/mwpqpoev" method="POST" className="space-y-6">
                  <input type="hidden" name="_subject" value="New message from portfolio contact form" />
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="form-element">
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Name 
                      </label>
                      <Input
                        id="name"
                        name="name"
                        required
                        className="transition-all duration-300 focus:shadow-glow"
                        placeholder="Your name"
                      />
                    </div>
                    <div className="form-element">
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email 
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        className="transition-all duration-300 focus:shadow-glow"
                        placeholder="your.email@domain.com"
                      />
                    </div>
                  </div>

                  <div className="form-element">
                    <label htmlFor="subject" className="block text-sm font-medium mb-2">
                      Subject 
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      required
                      className="transition-all duration-300 focus:shadow-glow"
                      placeholder="What's this about?"
                    />
                  </div>

                  <div className="form-element">
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message 
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      className="transition-all duration-300 focus:shadow-glow"
                      placeholder="Type your message here..."
                      rows={5}
                    />
                  </div>

                  <Button 
                    type="submit"
                    size="lg"
                    className="bg-gradient-primary hover:shadow-glow px-8"
                  >
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;