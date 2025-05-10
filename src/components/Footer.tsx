
import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full bg-gray-50 py-6 px-4">
      <div className="container mx-auto text-center">
        <p className="text-sm text-gray-500">
          Social Media Content Generator © {new Date().getFullYear()}
        </p>
        <p className="text-xs text-gray-400 mt-1">
          Create engaging content ideas for Instagram Reels and TikTok
        </p>
      </div>
    </footer>
  );
};

export default Footer;
