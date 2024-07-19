'use client';

import React from 'react';

const ScrollButton: React.FC = () => {
  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth',
    });
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <button
        onClick={scrollToContent}
        className="bg-[#558C03] text-white w-20 h-20 flex items-center justify-center rounded-full shadow-md hover:text-[#78288c] focus:outline-none focus:ring-2 focus:ring-[#558C03] focus:ring-opacity-50 transition duration-300 ease-in-out animate-fade-in"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-10 h-10"
        >
          <path d="M12 22l10-10h-6V2H8v10H2z"/>
        </svg>
      </button>
    </div>
  );
};

export default ScrollButton;
