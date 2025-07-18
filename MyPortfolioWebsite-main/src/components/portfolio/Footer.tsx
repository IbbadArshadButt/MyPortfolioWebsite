import { Heart, Code, Coffee } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-border/50">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="text-2xl font-bold text-gradient-primary">
              &lt;Dev /&gt;
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Software Engineer passionate about creating innovative solutions 
              and building the future through code.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Quick Links</h4>
            <nav className="flex flex-col space-y-2">
              {[{label: 'About', href: '#about'}, {label: 'Projects', href: '#projects'}, {label: 'Tech Stack', href: '#tech'}, {label: 'Experience', href: '#experience'}, {label: 'Contact', href: '#contact'}].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-muted-foreground hover:text-primary transition-colors w-fit"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Resources</h4>
            <nav className="flex flex-col space-y-2">
              {[
                { name: 'GitHub', href: 'https://github.com' },
                { name: 'LinkedIn', href: 'https://linkedin.com' },
                { name: 'Resume', href: '/Resume.pdf', download: true },
                { name: 'w3schools', href: 'https://w3schools.com' }
              ].map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors w-fit"
                  {...(link.download ? { download: true } : {})}
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border/50 pt-8">
          <div className="flex flex-col items-center gap-4">
            <div className="flex items-center space-x-2 text-muted-foreground justify-center">
              <span>© {currentYear} Made by Ibbad Arshad with</span>
              <Heart className="w-4 h-4 text-red-500 fill-current" />
              <span>and</span>
              
              <Coffee className="w-4 h-4 text-amber-600" />
            </div>
            <div className="flex items-center space-x-4 text-sm text-muted-foreground">
              <span>Built with React + Tailwind CSS + GSAP</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;