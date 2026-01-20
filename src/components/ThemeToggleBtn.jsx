import React, { useEffect } from 'react';
import assets from '../assets/assets';

const ThemeToggleBtn = ({ theme, setTheme }) => {
  useEffect(() => {
    const navbar = document.querySelector('.navbar');
    if (navbar) {
      if (theme === 'dark') {
        navbar.classList.add('dark');
        navbar.classList.remove('light');
      } else {
        navbar.classList.add('light');
        navbar.classList.remove('dark');
      }
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <div>
      <button onClick={toggleTheme} className="p-2 rounded-full border border-gray-500">
        {theme === 'dark' ? (
          <img src={assets.sun_icon} alt="Light Mode" className="w-6 h-6" />
        ) : (
          <img src={assets.moon_icon} alt="Dark Mode" className="w-6 h-6" />
        )}
      </button>
    </div>
  );
};

export default ThemeToggleBtn;
