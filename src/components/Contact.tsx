import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Calendar, Send } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    project: '',
    budget: '',
    timeline: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate form submission
    toast({
      title: "Message Sent Successfully!",
      description: "Thank you for your interest. We'll get back to you within 24 hours.",
    });

    // Reset form
    setFormData({
      name: '',
      email: '',
      company: '',
      project: '',
      budget: '',
      timeline: '',
      message: ''
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "rabinlucas0@gmail.com",
      link: "rabinlucas0@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+254 729 923 951",
      link: "tel:+254729923951"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Nairobi, Kenya",
      link: null
    },
    {
      icon: Calendar,
      label: "Response Time",
      value: "24 Hours",
      link: null
    }
  ];

  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-secondary/10 to-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient-gold">Let's Create</span> Together
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to bring your vision to life? Contact Rabin Lucas and Falcon Eye Philmz 
            for collaboration opportunities, consultations, or project inquiries.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="p-8 gradient-cinematic border-primary/20 shadow-gold">
              <h3 className="text-2xl font-bold text-gradient-gold mb-6">Get In Touch</h3>
              <p className="text-lg text-foreground mb-8 leading-relaxed">
                Whether you're looking to collaborate on a new project, need consultation on film production, 
                or want to discuss partnership opportunities with Falcon Eye Philmz, I'm here to help bring 
                your creative vision to reality.
              </p>

              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  const content = (
                    <div className="flex items-center gap-4 p-4 rounded-lg bg-secondary/20 hover:bg-secondary/30 transition-colors">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground">{info.label}</div>
                        <div className="font-semibold text-foreground">{info.value}</div>
                      </div>
                    </div>
                  );

                  return info.link ? (
                    <a key={index} href={info.link} className="block hover-lift">
                      {content}
                    </a>
                  ) : (
                    <div key={index} className="block">
                      {content}
                    </div>
                  );
                })}
              </div>
            </Card>

            {/* Quick Stats */}
            <Card className="p-8 gradient-cinematic border-border/50 shadow-cinematic">
              <h4 className="text-lg font-bold text-gradient-gold mb-4">Why Work With Us?</h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary mb-1">10+</div>
                  <div className="text-xs text-muted-foreground">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-accent mb-1">25+</div>
                  <div className="text-xs text-muted-foreground">Films Produced</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary mb-1">98%</div>
                  <div className="text-xs text-muted-foreground">Client Satisfaction</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-accent mb-1">12</div>
                  <div className="text-xs text-muted-foreground">Industry Awards</div>
                </div>
              </div>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="p-8 gradient-cinematic border-border/50 shadow-cinematic">
            <h3 className="text-2xl font-bold text-gradient-gold mb-6">Start Your Project</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-foreground">Full Name *</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-secondary/20 border-border focus:border-primary"
                    placeholder="Your full name"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-foreground">Email Address *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-secondary/20 border-border focus:border-primary"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="company" className="text-foreground">Company/Organization</Label>
                  <Input
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="bg-secondary/20 border-border focus:border-primary"
                    placeholder="Your company name"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="project" className="text-foreground">Project Type *</Label>
                  <select
                    id="project"
                    name="project"
                    value={formData.project}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 bg-secondary/20 border border-border rounded-md focus:border-primary text-foreground"
                  >
                    <option value="">Select project type</option>
                    <option value="feature-film">Feature Film</option>
                    <option value="short-film">Short Film</option>
                    <option value="documentary">Documentary</option>
                    <option value="commercial">Commercial</option>
                    <option value="music-video">Music Video</option>
                    <option value="consultation">Consultation</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="budget" className="text-foreground">Budget Range</Label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full px-3 py-2 bg-secondary/20 border border-border rounded-md focus:border-primary text-foreground"
                  >
                    <option value="">Select budget range</option>
                    <option value="under-50k">Under $50K</option>
                    <option value="50k-100k">$50K - $100K</option>
                    <option value="100k-500k">$100K - $500K</option>
                    <option value="500k-1m">$500K - $1M</option>
                    <option value="over-1m">Over $1M</option>
                    <option value="tbd">To be discussed</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="timeline" className="text-foreground">Timeline</Label>
                  <select
                    id="timeline"
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleChange}
                    className="w-full px-3 py-2 bg-secondary/20 border border-border rounded-md focus:border-primary text-foreground"
                  >
                    <option value="">Select timeline</option>
                    <option value="asap">ASAP</option>
                    <option value="1-3-months">1-3 Months</option>
                    <option value="3-6-months">3-6 Months</option>
                    <option value="6-12-months">6-12 Months</option>
                    <option value="flexible">Flexible</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="text-foreground">Project Details *</Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="bg-secondary/20 border-border focus:border-primary resize-none"
                  placeholder="Tell us about your project, vision, and how we can help bring it to life..."
                />
              </div>

              <Button 
                type="submit" 
                className="w-full gradient-gold hover-glow font-semibold text-lg py-4 h-auto"
              >
                <Send className="mr-2 h-5 w-5" />
                Send Message
              </Button>
            </form>

            <p className="text-sm text-muted-foreground mt-4 text-center">
              We'll respond within 24 hours. All inquiries are confidential.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;