import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { Upload, FileText, Send, X } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface ScriptSubmissionDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const ScriptSubmissionDialog = ({ open, onOpenChange }: ScriptSubmissionDialogProps) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    title: '',
    genre: '',
    logline: '',
    synopsis: '',
    experience: '',
    previousWorks: '',
    availability: ''
  });
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!selectedFile) {
      toast({
        title: "Script Required",
        description: "Please upload your script file before submitting.",
        variant: "destructive"
      });
      return;
    }

    // Simulate script submission
    toast({
      title: "Script Submitted Successfully!",
      description: "Thank you for your submission. Our review team will evaluate your script and contact you within 2-3 weeks.",
    });

    // Reset form and close dialog
    setFormData({
      name: '',
      email: '',
      phone: '',
      title: '',
      genre: '',
      logline: '',
      synopsis: '',
      experience: '',
      previousWorks: '',
      availability: ''
    });
    setSelectedFile(null);
    onOpenChange(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // Validate file type
      const allowedTypes = ['.pdf', '.doc', '.docx', '.txt'];
      const fileExtension = '.' + file.name.split('.').pop()?.toLowerCase();
      
      if (!allowedTypes.includes(fileExtension)) {
        toast({
          title: "Invalid File Type",
          description: "Please upload a PDF, DOC, DOCX, or TXT file.",
          variant: "destructive"
        });
        return;
      }

      // Validate file size (max 10MB)
      if (file.size > 10 * 1024 * 1024) {
        toast({
          title: "File Too Large",
          description: "File size must be less than 10MB.",
          variant: "destructive"
        });
        return;
      }

      setSelectedFile(file);
    }
  };

  const removeFile = () => {
    setSelectedFile(null);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-gradient-gold">
            Submit Your Script to Falcon Eye Philms
          </DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Personal Information */}
          <Card className="p-6 gradient-cinematic border-border/50">
            <h3 className="text-lg font-semibold text-gradient-gold mb-4">Personal Information</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name *</Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your full name"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email Address *</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your@email.com"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Your phone number"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="availability">Availability</Label>
                <select
                  id="availability"
                  name="availability"
                  value={formData.availability}
                  onChange={handleChange}
                  className="w-full px-3 py-2 bg-secondary/20 border border-border rounded-md focus:border-primary text-foreground"
                >
                  <option value="">Select availability</option>
                  <option value="immediate">Immediate</option>
                  <option value="1-3-months">1-3 Months</option>
                  <option value="3-6-months">3-6 Months</option>
                  <option value="flexible">Flexible</option>
                </select>
              </div>
            </div>
          </Card>

          {/* Script Information */}
          <Card className="p-6 gradient-cinematic border-border/50">
            <h3 className="text-lg font-semibold text-gradient-gold mb-4">Script Information</h3>
            <div className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="title">Script Title *</Label>
                  <Input
                    id="title"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    required
                    placeholder="Title of your script"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="genre">Genre *</Label>
                  <select
                    id="genre"
                    name="genre"
                    value={formData.genre}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 bg-secondary/20 border border-border rounded-md focus:border-primary text-foreground"
                  >
                    <option value="">Select genre</option>
                    <option value="drama">Drama</option>
                    <option value="thriller">Thriller</option>
                    <option value="comedy">Comedy</option>
                    <option value="action">Action</option>
                    <option value="romance">Romance</option>
                    <option value="horror">Horror</option>
                    <option value="sci-fi">Sci-Fi</option>
                    <option value="documentary">Documentary</option>
                    <option value="fantasy">Fantasy</option>
                    <option value="historical">Historical</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="logline">Logline *</Label>
                <Textarea
                  id="logline"
                  name="logline"
                  value={formData.logline}
                  onChange={handleChange}
                  required
                  rows={2}
                  placeholder="A one-sentence summary of your story (max 100 words)"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="synopsis">Synopsis *</Label>
                <Textarea
                  id="synopsis"
                  name="synopsis"
                  value={formData.synopsis}
                  onChange={handleChange}
                  required
                  rows={4}
                  placeholder="A detailed summary of your script (max 500 words)"
                />
              </div>
            </div>
          </Card>

          {/* Experience & Background */}
          <Card className="p-6 gradient-cinematic border-border/50">
            <h3 className="text-lg font-semibold text-gradient-gold mb-4">Experience & Background</h3>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="experience">Writing Experience</Label>
                <Textarea
                  id="experience"
                  name="experience"
                  value={formData.experience}
                  onChange={handleChange}
                  rows={3}
                  placeholder="Tell us about your writing background and experience"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="previousWorks">Previous Works</Label>
                <Textarea
                  id="previousWorks"
                  name="previousWorks"
                  value={formData.previousWorks}
                  onChange={handleChange}
                  rows={3}
                  placeholder="List any previous scripts, films, or published works"
                />
              </div>
            </div>
          </Card>

          {/* File Upload */}
          <Card className="p-6 gradient-cinematic border-border/50">
            <h3 className="text-lg font-semibold text-gradient-gold mb-4">Script Upload *</h3>
            
            {!selectedFile ? (
              <div className="border-2 border-dashed border-border rounded-lg p-8 text-center">
                <Upload className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
                <div className="space-y-2">
                  <p className="text-lg font-medium">Upload Your Script</p>
                  <p className="text-sm text-muted-foreground">
                    Accepted formats: PDF, DOC, DOCX, TXT (Max 10MB)
                  </p>
                </div>
                <input
                  type="file"
                  id="script-file"
                  accept=".pdf,.doc,.docx,.txt"
                  onChange={handleFileUpload}
                  className="hidden"
                />
                <Label htmlFor="script-file" className="mt-4 inline-block">
                  <Button type="button" variant="outline" className="cursor-pointer">
                    <FileText className="mr-2 h-4 w-4" />
                    Choose File
                  </Button>
                </Label>
              </div>
            ) : (
              <div className="flex items-center justify-between p-4 bg-secondary/20 rounded-lg">
                <div className="flex items-center gap-3">
                  <FileText className="h-8 w-8 text-primary" />
                  <div>
                    <p className="font-medium">{selectedFile.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {(selectedFile.size / 1024 / 1024).toFixed(2)} MB
                    </p>
                  </div>
                </div>
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  onClick={removeFile}
                  className="text-destructive hover:text-destructive"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            )}
          </Card>

          {/* Submit Button */}
          <div className="flex justify-end gap-4">
            <Button
              type="button"
              variant="outline"
              onClick={() => onOpenChange(false)}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              className="gradient-gold hover-glow font-semibold"
            >
              <Send className="mr-2 h-4 w-4" />
              Submit Script
            </Button>
          </div>
        </form>

        <div className="mt-6 p-4 bg-secondary/20 rounded-lg">
          <p className="text-sm text-muted-foreground">
            <strong>Note:</strong> All submissions are reviewed by our creative team. 
            We'll contact you within 2-3 weeks with feedback. Please ensure your script 
            is properly formatted and proofread before submission.
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ScriptSubmissionDialog;