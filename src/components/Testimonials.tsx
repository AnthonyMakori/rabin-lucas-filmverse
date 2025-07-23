import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Quote, Star, Plus } from "lucide-react";
import { useState, useEffect } from "react";
import { useToast } from "@/hooks/use-toast";

const Testimonials = () => {
  const { toast } = useToast();
  const [showForm, setShowForm] = useState(false);
  const [userTestimonials, setUserTestimonials] = useState<any[]>([]);
  const [formData, setFormData] = useState({
    name: "",
    role: "",
    company: "",
    quote: "",
    project: "",
    rating: 5
  });

  // Load user testimonials from localStorage on component mount
  useEffect(() => {
    const saved = localStorage.getItem('userTestimonials');
    if (saved) {
      setUserTestimonials(JSON.parse(saved));
    }
  }, []);

  const defaultTestimonials = [
    {
      id: 1,
      name: "Michael Chen",
      role: "Academy Award Winner, Best Actor",
      company: "Hollywood A-List",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      quote: "Working with Rabin was transformative. His vision and attention to detail brought out performances I didn't know I had in me. He's not just a producer - he's a storytelling genius.",
      rating: 5,
      project: "The Last Symphony"
    },
    {
      id: 2,
      name: "Sarah Rodriguez",
      role: "Film Critic",
      company: "Entertainment Weekly",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b789?w=100&h=100&fit=crop&crop=face",
      quote: "Falcon Eye Philms consistently delivers content that challenges conventions while maintaining commercial appeal. Rabin's work represents the future of independent cinema.",
      rating: 5,
      project: "Echoes of Tomorrow"
    },
    {
      id: 3,
      name: "James Thompson",
      role: "Executive Producer",
      company: "StreamCorp Studios",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      quote: "Rabin's ability to manage complex productions while maintaining creative integrity is unparalleled. Every project with Falcon Eye Philms exceeds expectations.",
      rating: 5,
      project: "Urban Legends"
    },
    {
      id: 4,
      name: "Dr. Angela Foster",
      role: "Film Studies Professor",
      company: "NYU Tisch School",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
      quote: "The technical excellence and narrative sophistication in Rabin's films make them perfect case studies for cinematic storytelling. His work bridges art and commerce beautifully.",
      rating: 5,
      project: "The Digital Divide"
    },
    {
      id: 5,
      name: "Marcus Williams",
      role: "Lead Cinematographer",
      company: "Independent Film Alliance",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
      quote: "Collaborating with Rabin pushes you to be your best. His clear vision and collaborative approach create an environment where creativity flourishes.",
      rating: 5,
      project: "Midnight in Morocco"
    },
    {
      id: 6,
      name: "Lisa Park",
      role: "Distribution Executive",
      company: "Global Cinema Network",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=100&h=100&fit=crop&crop=face",
      quote: "Falcon Eye Philms' content travels exceptionally well internationally. Rabin understands how to create universal stories that resonate across cultures.",
      rating: 5,
      project: "Children of the Coast"
    }
  ];

  // Combine default testimonials with user testimonials
  const allTestimonials = [...defaultTestimonials, ...userTestimonials];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const newTestimonial = {
      id: Date.now(), // Simple ID generation
      name: formData.name,
      role: formData.role,
      company: formData.company,
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face", // Default avatar
      quote: formData.quote,
      rating: formData.rating,
      project: formData.project
    };

    const updatedUserTestimonials = [...userTestimonials, newTestimonial];
    setUserTestimonials(updatedUserTestimonials);
    
    // Save to localStorage
    localStorage.setItem('userTestimonials', JSON.stringify(updatedUserTestimonials));
    
    // Reset form
    setFormData({
      name: "",
      role: "",
      company: "",
      quote: "",
      project: "",
      rating: 5
    });
    setShowForm(false);

    toast({
      title: "Thank you!",
      description: "Your testimonial has been added successfully.",
    });
  };

  const handleInputChange = (field: string, value: string | number) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section id="testimonials" className="py-24 bg-gradient-to-br from-secondary/20 to-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient-gold">Industry</span> Recognition
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Voices from the film industry - actors, critics, executives, and collaborators 
            share their experiences working with Rabin Lucas and Falcon Eye Philms.
          </p>
        </div>

        {/* Add Testimonial Button */}
        <div className="text-center mb-12">
          <Button 
            onClick={() => setShowForm(!showForm)}
            className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-gold hover:shadow-gold-lg transition-all duration-300"
          >
            <Plus className="h-4 w-4 mr-2" />
            {showForm ? "Cancel" : "Add Your Testimonial"}
          </Button>
        </div>

        {/* Testimonial Form */}
        {showForm && (
          <Card className="max-w-2xl mx-auto p-8 mb-12 gradient-cinematic border-primary/20 shadow-gold">
            <h3 className="text-2xl font-bold text-gradient-gold mb-6">Share Your Experience</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name">Name *</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    required
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="role">Role/Title *</Label>
                  <Input
                    id="role"
                    value={formData.role}
                    onChange={(e) => handleInputChange("role", e.target.value)}
                    required
                    className="mt-1"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="company">Company/Organization</Label>
                  <Input
                    id="company"
                    value={formData.company}
                    onChange={(e) => handleInputChange("company", e.target.value)}
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="project">Project Worked On</Label>
                  <Input
                    id="project"
                    value={formData.project}
                    onChange={(e) => handleInputChange("project", e.target.value)}
                    className="mt-1"
                  />
                </div>
              </div>
              <div>
                <Label htmlFor="rating">Rating</Label>
                <select
                  value={formData.rating}
                  onChange={(e) => handleInputChange("rating", parseInt(e.target.value))}
                  className="mt-1 w-full px-3 py-2 bg-background border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
                >
                  {[5, 4, 3, 2, 1].map(num => (
                    <option key={num} value={num}>{num} Star{num !== 1 ? 's' : ''}</option>
                  ))}
                </select>
              </div>
              <div>
                <Label htmlFor="quote">Your Testimonial *</Label>
                <Textarea
                  id="quote"
                  value={formData.quote}
                  onChange={(e) => handleInputChange("quote", e.target.value)}
                  required
                  rows={4}
                  className="mt-1"
                  placeholder="Share your experience working with Rabin or thoughts on his work..."
                />
              </div>
              <Button 
                type="submit" 
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-gold hover:shadow-gold-lg transition-all duration-300"
              >
                Submit Testimonial
              </Button>
            </form>
          </Card>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allTestimonials.map((testimonial, index) => (
            <Card 
              key={testimonial.id} 
              className={`p-8 hover-lift gradient-cinematic border-border/50 shadow-cinematic group relative overflow-hidden ${
                index % 2 === 0 ? 'lg:mt-8' : ''
              }`}
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 opacity-20 group-hover:opacity-40 transition-opacity">
                <Quote className="h-12 w-12 text-primary" />
              </div>

              {/* Rating Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-primary fill-current" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-lg leading-relaxed text-foreground mb-6 relative z-10">
                "{testimonial.quote}"
              </blockquote>

              {/* Project Reference */}
              <div className="mb-6">
                <span className="text-sm text-primary font-semibold bg-primary/10 px-3 py-1 rounded-full border border-primary/20">
                  Project: {testimonial.project}
                </span>
              </div>

              {/* Author Info */}
              <div className="flex items-center gap-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-primary/20"
                />
                <div>
                  <div className="font-semibold text-gradient-gold">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </div>
                  <div className="text-xs text-accent">
                    {testimonial.company}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Industry Recognition Summary */}
        <div className="mt-16 text-center">
          <Card className="max-w-4xl mx-auto p-8 gradient-cinematic border-primary/20 shadow-gold">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-gradient-gold mb-2">98%</div>
                <div className="text-sm text-muted-foreground">Positive Reviews</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gradient-red mb-2">4.9/5</div>
                <div className="text-sm text-muted-foreground">Industry Rating</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gradient-gold mb-2">50+</div>
                <div className="text-sm text-muted-foreground">Collaborators</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gradient-red mb-2">12</div>
                <div className="text-sm text-muted-foreground">Major Awards</div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;