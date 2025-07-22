import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play, ExternalLink, Star } from "lucide-react";

const Projects = () => {
  const featuredProjects = [
    {
      id: 1,
      title: "Echoes of Tomorrow",
      genre: "Sci-Fi Drama",
      year: "2024",
      description: "A thought-provoking exploration of humanity's relationship with technology, set in a near-future world where memories can be digitally preserved.",
      poster: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=400&h=600&fit=crop",
      rating: 8.9,
      awards: ["Best Cinematography", "Audience Choice Award"],
      status: "Festival Circuit",
      imdbLink: "#",
      trailerLink: "#"
    },
    {
      id: 2,
      title: "The Last Symphony",
      genre: "Historical Drama",
      year: "2023",
      description: "The untold story of a composer during wartime, showcasing the power of music to transcend the darkest moments in human history.",
      poster: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=600&fit=crop",
      rating: 9.2,
      awards: ["Best Director", "Outstanding Achievement in Film"],
      status: "Streaming Now",
      imdbLink: "#",
      trailerLink: "#"
    },
    {
      id: 3,
      title: "Urban Legends",
      genre: "Thriller",
      year: "2023",
      description: "A gripping psychological thriller that blurs the line between reality and urban mythology in the heart of a bustling metropolis.",
      poster: "https://images.unsplash.com/photo-1489599904152-3ef9518b83db?w=400&h=600&fit=crop",
      rating: 8.5,
      awards: ["Best Sound Design"],
      status: "Post-Production",
      imdbLink: "#",
      trailerLink: "#"
    },
    {
      id: 4,
      title: "Children of the Coast",
      genre: "Family Adventure",
      year: "2022",
      description: "A heartwarming adventure following a group of children who discover an ancient treasure that teaches them about friendship and courage.",
      poster: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=400&h=600&fit=crop",
      rating: 8.7,
      awards: ["Best Family Film", "Excellence in Youth Cinema"],
      status: "Available on Demand",
      imdbLink: "#",
      trailerLink: "#"
    },
    {
      id: 5,
      title: "Midnight in Morocco",
      genre: "Romance Drama",
      year: "2022",
      description: "A passionate love story set against the exotic backdrop of Marrakech, exploring themes of cultural identity and forbidden love.",
      poster: "https://images.unsplash.com/photo-1539650116574-75c0c6d73fb6?w=400&h=600&fit=crop",
      rating: 8.3,
      awards: ["Best International Feature"],
      status: "International Release",
      imdbLink: "#",
      trailerLink: "#"
    },
    {
      id: 6,
      title: "The Digital Divide",
      genre: "Documentary",
      year: "2021",
      description: "An eye-opening documentary examining the impact of technology on modern society and the growing digital inequality across communities.",
      poster: "https://images.unsplash.com/photo-1551808525-51a94da548ce?w=400&h=600&fit=crop",
      rating: 9.0,
      awards: ["Best Documentary Feature", "Social Impact Award"],
      status: "Educational Distribution",
      imdbLink: "#",
      trailerLink: "#"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Streaming Now': return 'bg-primary text-primary-foreground';
      case 'Festival Circuit': return 'bg-accent text-accent-foreground';
      case 'Post-Production': return 'bg-secondary text-secondary-foreground';
      case 'Available on Demand': return 'bg-primary text-primary-foreground';
      case 'International Release': return 'bg-accent text-accent-foreground';
      case 'Educational Distribution': return 'bg-secondary text-secondary-foreground';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  return (
    <section id="projects" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient-gold">Featured</span> Productions
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of cinematic excellence from Falcon Eye Philms - each project represents 
            our commitment to storytelling that entertains, inspires, and resonates with audiences worldwide.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project) => (
            <Card 
              key={project.id} 
              className="overflow-hidden hover-lift gradient-cinematic border-border/50 shadow-cinematic group"
            >
              {/* Movie Poster */}
              <div className="relative overflow-hidden">
                <img 
                  src={project.poster} 
                  alt={project.title}
                  className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button className="rounded-full w-16 h-16 gradient-gold hover-glow">
                    <Play className="h-8 w-8 text-primary-foreground" />
                  </Button>
                </div>

                {/* Status Badge */}
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(project.status)}`}>
                    {project.status}
                  </span>
                </div>

                {/* Rating */}
                <div className="absolute top-4 right-4 bg-background/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center gap-1">
                  <Star className="h-4 w-4 text-primary fill-current" />
                  <span className="text-sm font-bold text-foreground">{project.rating}</span>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6 space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold text-gradient-gold line-clamp-1">
                      {project.title}
                    </h3>
                    <span className="text-sm text-muted-foreground">{project.year}</span>
                  </div>
                  <p className="text-accent font-medium">{project.genre}</p>
                </div>

                <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
                  {project.description}
                </p>

                {/* Awards */}
                {project.awards.length > 0 && (
                  <div className="space-y-2">
                    <p className="text-xs font-semibold text-primary">Awards & Recognition:</p>
                    <div className="flex flex-wrap gap-1">
                      {project.awards.map((award, index) => (
                        <span 
                          key={index}
                          className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-full border border-primary/20"
                        >
                          {award}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Action Buttons */}
                <div className="flex gap-2 pt-2">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="flex-1 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  >
                    <Play className="h-4 w-4 mr-2" />
                    Trailer
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="border-accent text-accent hover:bg-accent hover:text-accent-foreground"
                  >
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* View More Projects CTA */}
        <div className="text-center mt-12">
          <Button 
            className="gradient-gold hover-glow text-lg px-8 py-4 h-auto font-semibold"
          >
            View Complete Filmography
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;