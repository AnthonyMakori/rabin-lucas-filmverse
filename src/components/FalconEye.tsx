import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Play, Film, Award, Users, Globe } from "lucide-react";
import falconLogo from "@/assets/falcon-eye-logo.jpg";

const FalconEye = () => {
  const companyStats = [
    { icon: Film, label: "Active Projects", value: "8" },
    { icon: Award, label: "Industry Awards", value: "25+" },
    { icon: Users, label: "Team Members", value: "50+" },
    { icon: Globe, label: "Global Reach", value: "40+ Countries" },
  ];

  const recentProjects = [
    {
      title: "Quantum Dreams",
      status: "In Production",
      genre: "Sci-Fi Thriller",
      progress: 75
    },
    {
      title: "Lost Heritage",
      status: "Pre-Production",
      genre: "Historical Drama",
      progress: 45
    },
    {
      title: "City of Shadows",
      status: "Post-Production",
      genre: "Crime Drama",
      progress: 90
    }
  ];

  return (
    <section id="falcon-eye" className="py-24 bg-gradient-to-br from-background to-secondary/10">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient-gold">Falcon Eye</span> Philmz
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Where visionary storytelling meets cinematic excellence. Explore our production house 
            and discover the films that are shaping the future of entertainment.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Company Overview */}
          <div className="space-y-8">
            <Card className="p-8 gradient-cinematic border-primary/20 shadow-gold">
              <div className="flex items-center gap-6 mb-6">
                <img 
                  src={falconLogo} 
                  alt="Falcon Eye Philmz Logo" 
                  className="w-24 h-24 object-cover rounded-lg border-2 border-primary/20"
                />
                <div>
                  <h3 className="text-2xl font-bold text-gradient-gold">Falcon Eye Philmz</h3>
                  <p className="text-muted-foreground">Production Excellence Since 2018</p>
                </div>
              </div>
              
              <p className="text-lg text-foreground leading-relaxed mb-6">
                Founded with a mission to create compelling visual narratives that transcend cultural 
                boundaries, Falcon Eye Philmz has emerged as a leading independent production house 
                specializing in premium content for global audiences.
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-muted-foreground">Award-winning original content</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span className="text-muted-foreground">International co-productions</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-muted-foreground">Cutting-edge production technology</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span className="text-muted-foreground">Global distribution network</span>
                </div>
              </div>
            </Card>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                className="gradient-gold hover-glow font-semibold"
                onClick={() => window.open('https://www.falconeyePhilmz.com', '_blank')}
              >
                <ExternalLink className="mr-2 h-5 w-5" />
                Visit Official Website
              </Button>
              <Button 
                variant="outline" 
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold"
              >
                <Play className="mr-2 h-5 w-5" />
                Watch Showreel
              </Button>
            </div>
          </div>

          {/* Company Stats */}
          <div className="grid grid-cols-2 gap-6">
            {companyStats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <Card 
                  key={index}
                  className="p-6 text-center hover-lift gradient-cinematic border-border/50 shadow-cinematic"
                >
                  <Icon className="h-10 w-10 mx-auto mb-4 text-primary" />
                  <div className="text-2xl font-bold mb-2 text-gradient-gold">
                    {stat.value}
                  </div>
                  <div className="text-muted-foreground text-sm">
                    {stat.label}
                  </div>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Current Projects */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-8">
            <span className="text-gradient-gold">Current</span> Productions
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            {recentProjects.map((project, index) => (
              <Card key={index} className="p-6 hover-lift gradient-cinematic border-border/50 shadow-cinematic">
                <div className="space-y-4">
                  <div>
                    <h4 className="text-lg font-bold text-gradient-gold">{project.title}</h4>
                    <p className="text-sm text-accent">{project.genre}</p>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Progress</span>
                      <span className="text-primary font-semibold">{project.progress}%</span>
                    </div>
                    <div className="w-full bg-secondary rounded-full h-2">
                      <div 
                        className="bg-gradient-gold h-2 rounded-full transition-all duration-300"
                        style={{ width: `${project.progress}%` }}
                      ></div>
                    </div>
                  </div>
                  
                  <div className="inline-block px-3 py-1 bg-primary/10 border border-primary/20 rounded-full">
                    <span className="text-primary text-xs font-semibold">{project.status}</span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Partnership CTA */}
        <Card className="p-12 text-center gradient-cinematic border-primary/20 shadow-gold">
          <h3 className="text-3xl font-bold mb-4">
            <span className="text-gradient-gold">Ready to Create</span> Something Amazing?
          </h3>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Falcon Eye Philmz is always looking for passionate storytellers, talented creatives, 
            and visionary partners to collaborate on groundbreaking projects.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="gradient-gold hover-glow font-semibold">
              Partner With Us
            </Button>
            <Button 
              variant="outline" 
              className="border-accent text-accent hover:bg-accent hover:text-accent-foreground font-semibold"
            >
              Submit Your Script
            </Button>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default FalconEye;