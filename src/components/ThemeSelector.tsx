import React from 'react';
import { useThemeStore } from '../store/themeStore';

export const ThemeSelector = () => {
  const { theme, setTheme } = useThemeStore();

  return (
    <div className="p-4">
      <h2 className="font-bold mb-2">Choose Theme:</h2>
      <select
        value={theme}
        onChange={(e) => setTheme(e.target.value as 'default' | 'cosmetic' | 'transplant')}
        className="p-2 border rounded"
      >
        <option value="default">Default</option>
        <option value="cosmetic">Cosmetic</option>
        <option value="transplant">Transplant</option>
      </select>
    </div>
  );
};
