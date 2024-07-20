'use client';

import React, { useState } from 'react';
import { About } from '@/components/About';
import Hero from '@/components/Hero';
import ProductsSection from '@/components/ProductsSection';
import { Services } from '@/components/Services';
import { StatisticsSection } from '@/components/StatisticsSection';
import ScrollToTopButton from '@/components/ScrolltoTopButton';
import Schedule from '@/components/Schedule';
import Contact from '@/components/Contact';
import ScrollButton from '@/components/ScrollButton';
import ServiceModal from '@/components/ServiceModal';
import Button from '@/components/Button'; // Import the Button component
import { FaUserPlus } from 'react-icons/fa';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function Home() {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => setModalOpen(true);
  const handleCloseModal = () => setModalOpen(false);

  const handleNavigation = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
    <div>

      <div id="hero">
        <Hero />
      </div>
      <div id="services">
        <Services />
      </div>
      <div id="statistics">
        <StatisticsSection />
      </div>
      <div id="products">
        <ProductsSection />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="contact">
        <Contact />
      </div>
      <div id="schedule">
        <Schedule />
      </div>
      <div className='hidden md:block'>
      <ScrollToTopButton />
      </div>
    </div>
      
      {/* Add the button here, visible only on small devices */}
      <div className="fixed bottom-4 right-4 block sm:hidden z-50">
        <Button
          type="button"
          title="Agendar"
          icon={<FaUserPlus size={20} color="black" />}
          onClick={() => handleNavigation('#schedule')}
        />
      </div>
    </>
  );
}
