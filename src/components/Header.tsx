
import React from 'react';

const Header = () => {
  return (
    <header className="w-full bg-gradient-to-r from-social-purple to-social-dark-purple py-4 px-6 shadow-md">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="text-center md:text-left mb-4 md:mb-0">
          <h1 className="text-2xl md:text-3xl font-bold text-white">
            Social Media Content Generator
          </h1>
          <p className="text-sm md:text-base text-white/80">
            Create viral content ideas for Instagram Reels & TikTok
          </p>
        </div>
        <div className="flex space-x-4">
          <div className="bg-white/20 rounded-full px-3 py-1">
            <span className="text-white text-sm font-medium">Reels</span>
          </div>
          <div className="bg-white/20 rounded-full px-3 py-1">
            <span className="text-white text-sm font-medium">TikTok</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
