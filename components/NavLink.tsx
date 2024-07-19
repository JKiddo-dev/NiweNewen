import React from 'react';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  onClick?: () => void; 
}

const NavLink = ({ href, children, onClick }: NavLinkProps) => {
  const handleClick = (event: React.MouseEvent) => {
    event.preventDefault();
    const element = document.getElementById(href.substring(1));
    if (element) {
      const offset = 80; 
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    if (onClick) {
      onClick(); 
    }
  };

  return (
    <a href={href} onClick={handleClick} className="text-2xl flex items-center justify-center cursor-pointer pb-1.5 transition-all hover:text-[#84BF04]">
      {children}
    </a>
  );
};

export default NavLink;
