'use client';

import React, { useEffect, useState } from 'react';
import { NAV_LINKS } from "@/constants";
import Button from "./Button";
import { FaUserPlus } from "react-icons/fa6";
import { IoMenu, IoClose } from "react-icons/io5";
import NavLink from "./NavLink";

const Navbar = () => {
  const [isClient, setIsClient] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [menuOpen]);

  const handleNavigation = (href: string) => {
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
    setMenuOpen(false); 
  };

  const scrollToTop = (event: React.MouseEvent) => {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setMenuOpen(false); 
  };

  if (!isClient) {
    return null; 
  }

  return (
    <>
      <nav className="flex items-center justify-between w-full mx-auto px-6 lg:px-20 z-40 py-4 bg-primary/95 backdrop-blur-md fixed top-0 shadow-sm border-b border-white/10">
        <div onClick={scrollToTop} className="cursor-pointer transition-transform hover:scale-105">
          <img src="/logonavbar.png" alt="Logo" className="h-16 lg:h-20 w-auto" />
        </div>
        
        {/* Desktop Menu */}
        <ul className="lg:flex hidden h-full gap-8 xl:gap-12 text-white font-sans text-sm tracking-wide uppercase items-center">
          {NAV_LINKS.map((link) => (
            <li key={link.key}>
              <NavLink href={link.href}>
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
        
        {/* Desktop CTA */}
        <div className="lg:flex items-center justify-center hidden">
          <Button
            type="button"
            title="Agendar"
            icon={<FaUserPlus size={18} color="white" />}
            onClick={() => handleNavigation('#schedule')}
          />
        </div>
        
        {/* Mobile Menu Icon */}
        <div className="lg:hidden flex items-center gap-4">
          <h1 className='text-xl sm:text-2xl font-serif font-bold text-white tracking-wide cursor-pointer' onClick={scrollToTop}>
            Niwe Newen
          </h1>
          <button 
            type="button"
            onClick={() => setMenuOpen(true)}
            aria-label="Abrir menú"
            className="p-1 text-white hover:text-accent transition-colors focus:outline-none"
          >
            <IoMenu size={36} />
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Overlay - Placed outside <nav> to fix backdrop-filter containment */}
      <div 
        className={`fixed inset-0 z-[100] flex justify-end transition-opacity duration-300 lg:hidden ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Dimmed backdrop */}
        <div 
          className="fixed inset-0 bg-black/75 backdrop-blur-sm" 
          onClick={() => setMenuOpen(false)} 
        />
        
        {/* Drawer Content */}
        <div 
          style={{ backgroundColor: '#002315' }}
          className={`relative w-4/5 max-w-sm h-full min-h-[100dvh] bg-[#002315] shadow-2xl flex flex-col p-8 transition-transform duration-300 ease-out transform ${
            menuOpen ? 'translate-x-0' : 'translate-x-full'
          } z-10 border-l border-white/10 overflow-y-auto`}
        >
          <div className="flex items-center justify-between pb-6 mb-8 border-b border-white/10">
            <div className="flex items-center gap-3">
              <img src="/logonavbar.png" alt="Logo" className="h-10 w-auto" />
              <span className="font-serif text-lg font-bold text-white">Niwe Newen</span>
            </div>
            <button 
              type="button"
              onClick={() => setMenuOpen(false)}
              className="p-1 rounded-full text-white/80 hover:text-white hover:bg-white/10 transition-colors focus:outline-none"
              aria-label="Cerrar menú"
            >
              <IoClose size={32} />
            </button>
          </div>
          
          <ul className="flex flex-col gap-6 mb-8 text-white font-serif text-xl">
            {NAV_LINKS.map((link) => (
              <li key={link.key} className="border-b border-white/10 pb-4">
                <a 
                  href={link.href} 
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavigation(link.href);
                  }}
                  className="block text-white/90 hover:text-accent font-medium tracking-wide transition-colors py-1 cursor-pointer"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          
          <div className="mt-auto pt-6 pb-6">
            <Button
              type="button"
              title="Agendar Cita"
              icon={<FaUserPlus size={18} color="white" />}
              onClick={() => handleNavigation('#schedule')}
              full
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
