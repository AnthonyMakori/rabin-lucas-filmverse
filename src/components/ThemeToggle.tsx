import { useTheme } from "@/contexts/ThemeContext";
import { Button } from "@/components/ui/button";
import { Palette } from "lucide-react";

const ThemeToggle = () => {
  const { setIsDrawerOpen } = useTheme();

  return (
    <Button
      onClick={() => setIsDrawerOpen(true)}
      variant="outline"
      size="icon"
      className="border-primary/20 text-primary hover:bg-primary/10 hover:text-primary shadow-sm"
      aria-label="Open theme selector"
    >
      <Palette className="h-4 w-4" />
    </Button>
  );
};

export default ThemeToggle;