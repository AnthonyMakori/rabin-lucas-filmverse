import { useTheme, Theme } from "@/contexts/ThemeContext";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { X, Palette, Film, Camera, Clapperboard, Video, Monitor } from "lucide-react";

const ThemeDrawer = () => {
  const { theme, setTheme, isDrawerOpen, setIsDrawerOpen } = useTheme();

  const themes = [
    {
      id: 'classic' as Theme,
      name: 'Classic Cinema',
      description: 'Golden age elegance with warm gold and dramatic red accents',
      icon: Film,
      colors: ['#D4AF37', '#DC143C', '#1A1A1A'],
      preview: 'Classic Hollywood glamour with cinematic gold and red highlights'
    },
    {
      id: 'silver' as Theme,
      name: 'Silver Screen',
      description: 'Timeless black and white with silver metallic touches',
      icon: Camera,
      colors: ['#C0C0C0', '#808080', '#0A0A0A'],
      preview: 'Noir-inspired monochrome aesthetic with elegant silver accents'
    },
    {
      id: 'modern' as Theme,
      name: 'Modern Film',
      description: 'Contemporary sci-fi with cyan blue and purple highlights',
      icon: Monitor,
      colors: ['#00BFFF', '#8A2BE2', '#0F1419'],
      preview: 'Futuristic design with electric blue and vibrant purple tones'
    },
    {
      id: 'vintage' as Theme,
      name: 'Vintage Hollywood',
      description: 'Warm sepia tones with amber and copper highlights',
      icon: Clapperboard,
      colors: ['#DAA520', '#CD853F', '#2F1B0C'],
      preview: 'Nostalgic warmth with golden amber and rich copper accents'
    },
    {
      id: 'directors' as Theme,
      name: "Director's Cut",
      description: 'Pure cinematic contrast with electric green accents',
      icon: Video,
      colors: ['#00FF00', '#FFFFFF', '#000000'],
      preview: 'Minimalist black and white with striking green highlights'
    }
  ];

  const handleThemeSelect = (themeId: Theme) => {
    setTheme(themeId);
    // Auto-close drawer after selection on mobile
    if (window.innerWidth < 768) {
      setTimeout(() => setIsDrawerOpen(false), 500);
    }
  };

  if (!isDrawerOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div 
        className="fixed inset-0 bg-background/80 backdrop-blur-sm z-40"
        onClick={() => setIsDrawerOpen(false)}
      />

      {/* Drawer */}
      <div className="fixed right-0 top-0 h-full w-full md:w-96 bg-card border-l border-border shadow-cinematic z-50 overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-card border-b border-border p-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
              <Palette className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-foreground">Cinematic Themes</h2>
              <p className="text-sm text-muted-foreground">Choose your visual style</p>
            </div>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsDrawerOpen(false)}
            className="hover:bg-secondary"
          >
            <X className="h-5 w-5" />
          </Button>
        </div>

        {/* Theme Options */}
        <div className="p-6 space-y-4">
          {themes.map((themeOption) => {
            const Icon = themeOption.icon;
            const isActive = theme === themeOption.id;

            return (
              <Card
                key={themeOption.id}
                className={`p-4 cursor-pointer transition-all duration-300 hover-lift ${
                  isActive 
                    ? 'border-primary shadow-primary bg-primary/5' 
                    : 'border-border hover:border-primary/50 hover:shadow-lg'
                }`}
                onClick={() => handleThemeSelect(themeOption.id)}
              >
                <div className="space-y-3">
                  {/* Theme Header */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                        isActive ? 'bg-primary text-primary-foreground' : 'bg-secondary text-foreground'
                      }`}>
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className={`font-semibold ${
                          isActive ? 'text-primary' : 'text-foreground'
                        }`}>
                          {themeOption.name}
                        </h3>
                        {isActive && (
                          <p className="text-xs text-primary font-medium">Currently Active</p>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Color Preview */}
                  <div className="flex gap-2">
                    {themeOption.colors.map((color, index) => (
                      <div
                        key={index}
                        className="w-8 h-8 rounded-full border-2 border-border shadow-sm"
                        style={{ backgroundColor: color }}
                      />
                    ))}
                  </div>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {themeOption.description}
                  </p>

                  {/* Preview Text */}
                  <div className="text-xs text-muted-foreground italic border-l-2 border-border pl-3">
                    {themeOption.preview}
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Footer */}
        <div className="border-t border-border p-6 bg-secondary/20">
          <div className="text-center space-y-2">
            <p className="text-sm font-medium text-foreground">
              Cinematic Experience
            </p>
            <p className="text-xs text-muted-foreground">
              Each theme is carefully crafted to enhance your visual journey through Rabin's portfolio
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ThemeDrawer;