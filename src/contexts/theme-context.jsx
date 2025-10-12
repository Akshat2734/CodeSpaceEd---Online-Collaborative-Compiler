'use client'

import { createContext, useContext, useState, useEffect } from 'react';

// 🟢 Create a React Context
export const ThemeContext = createContext(null);

// 🟢 Provider component that manages theme state
export default function ThemeContextProvider({ children }) {
  const [theme, setTheme] = useState(null);

  // ✅ Load theme from localStorage or set default
  useEffect(() => {
    if (!theme) {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme) {
        setTheme(savedTheme); // restore saved theme
      } else {
        setTheme('cupcake'); // default theme if none is saved
      }
    } else {
      // ✅ Save theme to localStorage & update <html> tag
      localStorage.setItem('theme', theme);
      document.documentElement.setAttribute('data-theme', theme);
    }
  }, [theme]);

  // ⚠️ Prevent rendering children until theme is loaded (avoids flicker)
  if (!theme) return null;

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// 🟢 Custom hook for easy usage in components
export function useThemeContext() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useThemeContext must be used within a ThemeContextProvider');
  }
  return context;
}
