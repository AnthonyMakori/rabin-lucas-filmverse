import { Film, Mail, Phone, ExternalLink, Instagram, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];

  const services = [
    { label: 'Film Production' },
    { label: 'Script Development' },
    { label: 'Casting Services' },
    { label: 'Post-Production' },
    { label: 'Creative Consultation' },
  ];

  const socialLinks = [
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
  ];

  return (
    <footer className="bg-secondary/20 border-t border-border/50">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-gradient-gold flex items-center justify-center">
                <Film className="h-7 w-7 text-primary-foreground" />
              </div>
              <div>
                <div className="text-xl font-bold text-gradient-gold">Rabin Lucas</div>
                <div className="text-sm text-muted-foreground">Film Producer & CEO</div>
              </div>
            </div>
            
            <p className="text-muted-foreground leading-relaxed">
              Creating visual stories that inspire and entertain audiences worldwide. 
              Over 10 years of excellence in film production and storytelling.
            </p>

            <div className="space-y-3">
              <a 
                href="mailto:rabin@falconeyePhilmz.com"
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="h-4 w-4" />
                <span className="text-sm">rabin@falconeyePhilmz.com</span>
              </a>
              <a 
                href="tel:+15551234567"
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
              >
                <Phone className="h-4 w-4" />
                <span className="text-sm">+1 (555) 123-4567</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-foreground">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                    onClick={(e) => {
                      e.preventDefault();
                      document.getElementById(link.href.slice(1))?.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-foreground">Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index} className="text-muted-foreground text-sm">
                  {service.label}
                </li>
              ))}
            </ul>
          </div>

          {/* Falcon Eye Philms & Social */}
          <div className="space-y-6">
            <div>
              <h4 className="text-lg font-semibold text-foreground mb-4">Falcon Eye Philms</h4>
              <a 
                href="https://www.falconeyePhilmz.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary hover:text-accent transition-colors text-sm font-medium"
              >
                Visit Official Website
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-foreground mb-4">Follow</h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      aria-label={social.label}
                      className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all hover-lift"
                    >
                      <Icon className="h-4 w-4" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-border/50">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground text-sm">
              © {currentYear} Rabin Lucas & Falcon Eye Philms. All rights reserved.
            </p>
            
            <div className="flex gap-6 text-sm text-muted-foreground">
              <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-primary transition-colors">Press Kit</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;