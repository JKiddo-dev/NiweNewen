import React from 'react';

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => {
  const handleClick = (event: React.MouseEvent) => {
    event.preventDefault();
    const element = document.getElementById(href.substring(1));
    if (element) {
      const offset = 80; // Ajusta este valor al tamaño de tu Navbar si es fijo
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <a href={href} onClick={handleClick} className="text-xl flex items-center justify-center cursor-pointer pb-1.5 transition-all hover:text-[#84BF04]">
      {children}
    </a>
  );
};

export default NavLink;
