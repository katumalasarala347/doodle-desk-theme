import React from 'react';
import { useThemeStore } from '../store/themeStore';

export const Hero = () => {
  const { theme } = useThemeStore(); // <— Use 'theme' here instead of 'specialty'

  const getHeroContent = () => {
    switch (theme) {
      case 'transplant':
        return {
          title: "Transplant Care Hub",
          subtitle: "Empowering lives with organ transplant solutions.",
          bg: "bg-green-100",
          text: "text-green-800"
        };
      case 'cosmetic':
        return {
          title: "Cosmetic Surgery Suite",
          subtitle: "Where beauty meets expertise.",
          bg: "bg-pink-100",
          text: "text-pink-800"
        };
      default:
        return {
          title: "Welcome to Doodle Desk!",
          subtitle: "Your all-in-one medical platform.",
          bg: "bg-background",
          text: "text-text"
        };
    }
  };

  const { title, subtitle, bg, text } = getHeroContent();

  return (
    <div className={`p-8 text-center font-main ${bg} ${text}`}>
      <h1 className="text-3xl font-bold">{title}</h1>
      <p className="mt-2 text-lg">{subtitle}</p>
    </div>
  );
};
