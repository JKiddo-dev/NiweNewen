import React from 'react';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

const NavLink = ({ href, children, onClick, className }: NavLinkProps) => {
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
    <a 
      href={href} 
      onClick={handleClick} 
      className={className || "text-sm font-medium tracking-wider uppercase transition-colors hover:text-accent cursor-pointer"}
    >
      {children}
    </a>
  );
};

export default NavLink;
