import { create } from 'zustand';

type Theme = 'default' | 'cosmetic' | 'transplant';

interface ThemeStore {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

const getInitialTheme = (): Theme => {
  if (typeof window !== 'undefined') {
    const stored = localStorage.getItem('theme') as Theme;
    if (stored) return stored;
  }
  return 'default';
};

export const useThemeStore = create<ThemeStore>((set) => {
  const initialTheme = getInitialTheme();

  // Apply initial theme to <body>
  if (typeof window !== 'undefined') {
    const body = document.body;
    body.classList.add(`theme-${initialTheme}`);
  }

  return {
    theme: initialTheme,
    setTheme: (theme: Theme) => {
      if (typeof window !== 'undefined') {
        const body = document.body;
        body.classList.remove('theme-default', 'theme-cosmetic', 'theme-transplant');
        body.classList.add(`theme-${theme}`);
        localStorage.setItem('theme', theme);
      }
      set({ theme });
    },
  };
});
