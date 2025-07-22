import { Card } from "@/components/ui/card";
import { Film, Award, Users, Zap } from "lucide-react";

const About = () => {
  const stats = [
    { icon: Film, label: "Films Produced", value: "25+", color: "text-primary" },
    { icon: Award, label: "Industry Awards", value: "12", color: "text-accent" },
    { icon: Users, label: "Team Members", value: "50+", color: "text-primary" },
    { icon: Zap, label: "Years Experience", value: "10+", color: "text-accent" },
  ];

  return (
    <section id="about" className="py-24 bg-gradient-to-br from-background to-secondary/20">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold">
                <span className="text-gradient-primary">Visionary</span> Filmmaker
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                With over a decade of experience in the film industry, I've dedicated my career to bringing compelling stories to life through the lens of cinematic excellence.
              </p>
            </div>

            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                As the CEO and founder of <span className="text-primary font-semibold">Falcon Eye Philms</span>, 
                I've overseen the production of over 25 films, each one crafted with meticulous attention to detail 
                and a passion for storytelling that resonates with audiences worldwide.
              </p>
              
              <p>
                My expertise spans across all aspects of filmmaking - from initial concept and script development 
                to casting, directing, and post-production. I believe that great films are born from the marriage 
                of technical excellence and emotional authenticity.
              </p>

              <p>
                My vision is to continue pushing the boundaries of visual storytelling, creating films that not 
                only entertain but inspire, challenge, and leave lasting impressions on viewers around the globe.
              </p>
            </div>

            {/* Mission Statement */}
            <Card className="p-6 gradient-cinematic border-primary/20 shadow-primary">
              <blockquote className="text-lg italic text-center">
                <span className="text-primary text-2xl">"</span>
                Cinema is the ultimate empathy machine. Every frame we capture has the power to change perspectives, 
                touch hearts, and inspire action.
                <span className="text-primary text-2xl">"</span>
              </blockquote>
              <p className="text-center mt-4 text-primary font-semibold">- Rabin Lucas</p>
            </Card>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <Card 
                  key={index} 
                  className="p-8 text-center hover-lift gradient-cinematic border-border/50 shadow-cinematic"
                >
                  <Icon className={`h-12 w-12 mx-auto mb-4 ${stat.color}`} />
                  <div className="text-3xl font-bold mb-2 text-gradient-primary">
                    {stat.value}
                  </div>
                  <div className="text-muted-foreground font-medium">
                    {stat.label}
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;