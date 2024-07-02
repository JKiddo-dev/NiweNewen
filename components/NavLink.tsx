// src/components/NavLink.tsx
import React from 'react';

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => {
  const handleClick = (event: React.MouseEvent) => {
    event.preventDefault();
    const element = document.getElementById(href.substring(1));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <a href={href} onClick={handleClick} className="text-xl flex items-center justify-center cursor-pointer pb-1.5 transition-all hover:text-[#84BF04]">
      {children}
    </a>
  );
};

export default NavLink;
