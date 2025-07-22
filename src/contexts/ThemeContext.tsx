import React, { createContext, useContext, useEffect, useState } from 'react';

export type Theme = 'classic' | 'silver' | 'modern' | 'vintage' | 'directors';

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  isDrawerOpen: boolean;
  setIsDrawerOpen: (open: boolean) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>('classic');
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  useEffect(() => {
    // Load theme from localStorage
    const savedTheme = localStorage.getItem('cinema-theme') as Theme;
    if (savedTheme && ['classic', 'silver', 'modern', 'vintage', 'directors'].includes(savedTheme)) {
      setTheme(savedTheme);
    }
  }, []);

  useEffect(() => {
    // Save theme to localStorage and apply to document
    localStorage.setItem('cinema-theme', theme);
    
    // Remove all theme data attributes
    document.documentElement.removeAttribute('data-theme');
    
    // Apply new theme (classic is default, no data attribute needed)
    if (theme !== 'classic') {
      document.documentElement.setAttribute('data-theme', theme);
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ 
      theme, 
      setTheme, 
      isDrawerOpen, 
      setIsDrawerOpen 
    }}>
      {children}
    </ThemeContext.Provider>
  );
};