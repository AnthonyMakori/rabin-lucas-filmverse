import { Card } from "@/components/ui/card";
import { Calendar, MapPin, Award } from "lucide-react";

const Experience = () => {
  const timeline = [
    {
      year: "2024",
      title: "Falcon Eye Philms Expansion",
      location: "Global Operations",
      description: "Expanded production capabilities internationally, establishing partnerships across three continents and launching our premium content division.",
      achievement: "25+ Films Produced",
      type: "milestone"
    },
    {
      year: "2022",
      title: "Industry Recognition Peak",
      location: "Film Festivals Worldwide",
      description: "Received multiple industry awards for excellence in cinematography and storytelling, establishing Falcon Eye Philms as a premier production house.",
      achievement: "12 Industry Awards",
      type: "award"
    },
    {
      year: "2020",
      title: "Digital Innovation Leader",
      location: "Production Studios",
      description: "Pioneered the use of cutting-edge digital cinematography techniques, incorporating AI-enhanced post-production workflows.",
      achievement: "Tech Innovation Award",
      type: "innovation"
    },
    {
      year: "2018",
      title: "Falcon Eye Philms Founded",
      location: "Film Industry Hub",
      description: "Established Falcon Eye Philms with a vision to create meaningful cinema that bridges cultural gaps and tells universal stories.",
      achievement: "Company Launch",
      type: "founding"
    },
    {
      year: "2016",
      title: "Senior Producer Role",
      location: "Major Studios",
      description: "Led production teams for high-budget films, managing complex logistics and ensuring creative vision alignment with commercial viability.",
      achievement: "10+ Major Productions",
      type: "career"
    },
    {
      year: "2014",
      title: "Breakthrough in Cinematography",
      location: "Independent Film Circuit",
      description: "Gained recognition for innovative camera work and visual storytelling techniques in independent films that later influenced mainstream cinema.",
      achievement: "Best Cinematography",
      type: "breakthrough"
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'milestone': return 'border-primary/50 shadow-gold';
      case 'award': return 'border-accent/50 shadow-red';
      case 'innovation': return 'border-primary/50 shadow-gold';
      case 'founding': return 'border-accent/50 shadow-red';
      case 'career': return 'border-primary/50 shadow-gold';
      case 'breakthrough': return 'border-accent/50 shadow-red';
      default: return 'border-border/50';
    }
  };

  return (
    <section id="experience" className="py-24 bg-secondary/10">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient-gold">Journey of</span> Excellence
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A decade-long odyssey through the world of cinema, marked by creative breakthroughs, 
            industry recognition, and unwavering commitment to storytelling excellence.
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary transform md:-translate-x-0.5"></div>

          <div className="space-y-12">
            {timeline.map((item, index) => (
              <div 
                key={index} 
                className={`flex flex-col md:flex-row gap-8 items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Point */}
                <div className="relative flex-shrink-0 md:order-2">
                  <div className="w-16 h-16 rounded-full bg-gradient-gold flex items-center justify-center shadow-gold">
                    <Calendar className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <div className="absolute -top-2 -left-2 w-20 h-20 rounded-full border-2 border-primary/30 animate-pulse"></div>
                </div>

                {/* Content Card */}
                <Card className={`flex-1 p-8 hover-lift gradient-cinematic ${getTypeColor(item.type)} md:order-1`}>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4 text-primary font-bold text-lg">
                      <span className="text-2xl font-playfair">{item.year}</span>
                      <Award className="h-5 w-5" />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-gradient-gold">
                      {item.title}
                    </h3>
                    
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <MapPin className="h-4 w-4" />
                      <span>{item.location}</span>
                    </div>
                    
                    <p className="text-lg text-foreground leading-relaxed">
                      {item.description}
                    </p>
                    
                    <div className="inline-block px-4 py-2 bg-primary/10 border border-primary/20 rounded-full">
                      <span className="text-primary font-semibold">{item.achievement}</span>
                    </div>
                  </div>
                </Card>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block flex-1 md:order-3"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;