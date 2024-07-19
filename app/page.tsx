'use client';
import React, { useState } from 'react';
import { About } from "@/components/About";
import Hero from "@/components/Hero";
import ProductsSection from "@/components/ProductsSection";
import { Services } from "@/components/Services";
import { StatisticsSection } from "@/components/StatisticsSection";
import ScrollToTopButton from "@/components/ScrolltoTopButton";
import Schedule from "@/components/Schedule";
import Contact from "@/components/Contact";
import ScrollButton from "@/components/ScrollButton";
import ServiceModal from '@/components/ServiceModal';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function Home() {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => setModalOpen(true);
  const handleCloseModal = () => setModalOpen(false);

  return (
    <>
      <div id="hero">
        <Hero />
        <ScrollButton />
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
      <ScrollToTopButton />

    
    </>
  );
}
