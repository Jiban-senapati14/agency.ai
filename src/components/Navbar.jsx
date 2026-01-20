import React from 'react';
import assets from '../assets/assets';
import ThemeToggleBtn from './ThemeToggleBtn.jsx';
import { motion } from 'motion/react';

const Navbar = ({ theme, setTheme }) => {
  const [sidebarOpen, setSidebarOpen] = React.useState(false);

  const handleLinkClick = (id) => {
    setSidebarOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.div
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`flex justify-between items-center px-4 sm:px-12 lg:px-24 xl:px-40 py-4 sticky top-0 z-20 backdrop-blur-xl font-medium ${theme === 'dark' ? 'bg-gray-900/70 text-white' : 'bg-white/70 text-gray-700'}`}
    >
      <img
        src={theme === 'dark' ? assets.logo_dark : assets.logo}
        className='w-32 sm:w-40'
        alt='Logo'
      />

      <div
        className={`text-gray-700 dark:text-white sm:text-sm ${!sidebarOpen ? 'max-sm:w-0 overflow-hidden' : 'max-sm:w-60 max-sm:pl-10'} max-sm:fixed top-0 bottom-0 right-0 max-sm:min-h-screen max-sm:h-full max-sm:flex-col max-sm:bg-primary max-sm:text-white max-sm:pt-20 flex sm:items-center gap-5 transition-all`}
      >
        <img
          src={assets.close_icon}
          alt='Close Sidebar'
          className='w-5 absolute right-4 top-4 sm:hidden cursor-pointer'
          onClick={() => setSidebarOpen(false)}
        />

        <a
          onClick={() => handleLinkClick('home')}
          className='sm:hover:border-b cursor-pointer'
        >
          Home
        </a>
        <a
          onClick={() => handleLinkClick('service')}
          className='sm:hover:border-b cursor-pointer'
        >
          Service
        </a>
        <a
          onClick={() => handleLinkClick('our-work')}
          className='sm:hover:border-b cursor-pointer'
        >
          Our Work
        </a>
        <a
          onClick={() => handleLinkClick('contact-us')}
          className='sm:hover:border-b cursor-pointer'
        >
          Contact Us
        </a>
      </div>

      <div className='flex items-center gap-2 sm:gap-4'>
        <ThemeToggleBtn theme={theme} setTheme={setTheme} />

        <img
          src={theme === 'dark' ? assets.menu_icon_dark : assets.menu_icon}
          alt='Open Sidebar'
          onClick={() => setSidebarOpen(true)}
          className='w-8 sm:hidden cursor-pointer'
        />

        <a
          href='#contact-us'
          className='text-sm max-sm:hidden flex items-center gap-2 bg-primary bg-blue-800 text-white px-6 py-2 rounded-full sm:hover:scale-103 cursor-pointer transition-all'
        >
          Connect Now <img src={assets.arrow_icon} width={14} alt='Arrow Icon' />
        </a>
      </div>
    </motion.div>
  );
};

export default Navbar;
