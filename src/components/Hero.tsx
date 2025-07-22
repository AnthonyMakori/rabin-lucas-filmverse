import { Button } from "@/components/ui/button";
import { ArrowDown, Play } from "lucide-react";
import rabinHero from "@/assets/rabin-hero.jpg";

const Hero = () => {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={rabinHero} 
          alt="Rabin Lucas" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-transparent" />
        <div className="absolute inset-0 spotlight-effect" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 container mx-auto px-6 text-center lg:text-left">
        <div className="max-w-4xl mx-auto lg:mx-0">
          {/* Title */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 animate-fade-up">
            <span className="text-gradient-gold">Crafting Visual</span>
            <br />
            <span className="text-foreground">Stories That</span>
            <br />
            <span className="text-gradient-red">Inspire</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-4 animate-fade-in-delayed max-w-2xl">
            Rabin Lucas - Film Producer & CEO of Falcon Eye Philms
          </p>

          <p className="text-lg text-muted-foreground mb-8 animate-fade-in-delayed max-w-2xl">
            10+ Years of Excellence in Film Production, Writing, Directing & Cinematography
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-scale-in">
            <Button 
              onClick={scrollToProjects}
              className="gradient-gold hover-glow text-lg px-8 py-4 h-auto font-semibold"
            >
              <Play className="mr-2 h-5 w-5" />
              Explore My Work
            </Button>
            
            <Button 
              variant="outline" 
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground text-lg px-8 py-4 h-auto"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Let's Collaborate
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <ArrowDown className="h-6 w-6 text-primary" />
      </div>
    </section>
  );
};

export default Hero;