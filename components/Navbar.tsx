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
    <nav className="flex items-center justify-between w-full mx-auto max-w-[1920px] px-6 lg:px-20 3xl:px-0 z-30 py-5 bg-[#274001] fixed top-0">
      <div onClick={scrollToTop} className="cursor-pointer">
        <img src="/logonavbar.png" alt="Logo" className="h-20 w-auto" />
      </div>
      <ul className="lg:flex hidden h-full gap-12 text-white">
        {NAV_LINKS.map((link) => (
          <li key={link.key}>
            <NavLink href={link.href}>
              {link.label}
            </NavLink>
          </li>
        ))}
      </ul>
      <div className="lg:flex items-center justify-center hidden">
        <Button
          type="button"
          title="Agendar"
          icon={<FaUserPlus size={20} color="black" />}
          onClick={() => handleNavigation('#schedule')}
        />
      </div>
      <h1 className='lg:hidden text-2xl font-sans text-white'>
        Niwe Newen
      </h1>
      <div className="lg:hidden">
        <IoMenu size={50} color="white" className="cursor-pointer" onClick={() => setMenuOpen(true)} />
        <div className={`fixed inset-0 z-40 flex items-center justify-center bg-[#172601] bg-opacity-80 backdrop-blur-sm transition-all duration-300 transform ${menuOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95'} ${menuOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}>
          <div className="bg-[#172601] p-6 rounded-lg w-11/12 max-w-md mx-auto text-center transition-all duration-300 transform ${menuOpen ? 'translate-y-0' : '-translate-y-full'}">
            <IoClose size={50} color="white" className="cursor-pointer mb-4" onClick={() => setMenuOpen(false)} />
            <ul className="flex flex-col gap-6 mb-6 text-white">
              {NAV_LINKS.map((link) => (
                <li key={link.key}>
                  <NavLink href={link.href} onClick={() => setMenuOpen(false)}>
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
            <div className="flex justify-center mt-4">
              <Button
                type="button"
                title="Agendar"
                icon={<FaUserPlus size={20} color="black" />}
                onClick={() => handleNavigation('#schedule')}
              />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
