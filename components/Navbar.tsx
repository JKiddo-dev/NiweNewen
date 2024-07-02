// src/components/Navbar.tsx
'use client';

import React, { useEffect, useState } from 'react';
import { NAV_LINKS } from "@/constants";
import Button from "./Button";
import { FaUserPlus } from "react-icons/fa6";
import { IoMenu, IoClose } from "react-icons/io5";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const [isClient, setIsClient] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleScroll = (event: React.MouseEvent, id: string) => {
    event.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMenuOpen(false); // close menu on link click
    }
  };

  const handleNavigation = (path: string) => {
    router.push(path);
    setMenuOpen(false); // close menu on button click
  };

  const scrollToTop = (event: React.MouseEvent) => {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setMenuOpen(false); // close menu on logo click
  };

  if (!isClient) {
    return null; // or a loading spinner
  }

  return (
    <nav className="flex items-center justify-between w-full mx-auto max-w-[1920px]  px-6 lg:px-20 3xl:px-0 z-30 py-5 bg-[#172601] fixed top-0">
      <div onClick={scrollToTop} className="cursor-pointer">
        <img src="/logo png.png" alt="Logo" className="h-12" />
      </div>
      <ul className="lg:flex hidden h-full gap-12">
        {NAV_LINKS.filter(link => link.label !== 'Inicio' && link.label !== 'Agendar').map((link) => (
          <li key={link.key}>
            <a
              href={link.href}
              onClick={(e) => link.label === 'Contacto' ? handleScroll(e, 'footer') : handleScroll(e, link.href.substring(1))}
              className="text-xl flex items-center justify-center cursor-pointer pb-1.5 transition-all hover:text-[#78288c]"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
      <div className="lg:flex items-center justify-center hidden">
        <Button
          type="button"
          title="Agendar"
          icon={<FaUserPlus size={20} color="black" />}
          onClick={() => handleNavigation('/agendar')}
        />
      </div>
      <div className="lg:hidden">
        <IoMenu size={50} color="black" className="cursor-pointer" onClick={() => setMenuOpen(true)} />
        <div className={`fixed inset-0 z-40 flex items-center justify-center bg-[#172601] bg-opacity-80 backdrop-blur-sm transition-opacity duration-300 transform ${menuOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95'} ${menuOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}>
          <div className="bg-[#172601] p-6 rounded-lg w-11/12 max-w-md mx-auto text-center transition-transform duration-300 transform">
            <IoClose size={50} color="white" className="cursor-pointer mb-4" onClick={() => setMenuOpen(false)} />
            <ul className="flex flex-col gap-6 mb-6">
              {NAV_LINKS.filter(link => link.label !== 'Inicio' && link.label !== 'Agendar').map((link) => (
                <li key={link.key}>
                  <a
                    href={link.href}
                    onClick={(e) => link.label === 'Contacto' ? handleScroll(e, 'footer') : handleScroll(e, link.href.substring(1))}
                    className="text-xl flex items-center justify-center cursor-pointer pb-1.5 transition-all hover:text-[#78288c]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-4">
              <Button
                type="button"
                title="Agendar"
                icon={<FaUserPlus size={20} color="black" />}
                onClick={() => handleNavigation('/agendar')}
              />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
