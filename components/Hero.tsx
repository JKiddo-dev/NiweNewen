'use client';

import React from 'react';
import Image from 'next/image';
import Slider, { CustomArrowProps } from 'react-slick';
import { motion } from 'framer-motion';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';

const Hero = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true,
    fade: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  const images = [
    '/hero.JPG',
    '/hero2.JPG',
    '/hero3.JPG',
    '/hero4.JPG',
  ];

  return (
    <section
      id="hero"
      className="relative flex flex-col justify-center items-center w-full h-[60vh] lg:h-[85vh] bg-primary"
      style={{ marginTop: '90px' }}
    >
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <Slider {...settings} className="w-full h-full hero-slider">
          {images.map((src, index) => (
            <div key={index} className="relative w-full h-[60vh] lg:h-[85vh]">
              <Image
                src={src}
                alt={`Domo Niwe Newen - Imagen ${index + 1}`}
                fill
                priority={index === 0}
                style={{ objectFit: 'cover', objectPosition: 'center' }}
                quality={90}
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70"></div>
            </div>
          ))}
        </Slider>
      </div>

      <div className="relative z-10 flex flex-col justify-center items-center text-center text-white px-6 w-full max-w-4xl mx-auto pointer-events-none">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold mb-6 tracking-wide drop-shadow-lg'
        >
          Bienvenido al Domo Niwe Newen
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className='text-lg sm:text-xl md:text-2xl font-sans font-light max-w-2xl drop-shadow-md text-gray-100'
        >
          Relájese y viva la experiencia de reconectar con la naturaleza
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-10 pointer-events-auto"
        >
          <a href="#services" className="px-8 py-3 bg-secondary hover:bg-accent text-white rounded-full font-medium transition-colors duration-300 shadow-lg">
            Descubrir Servicios
          </a>
        </motion.div>
      </div>
    </section>
  );
};

const PrevArrow = (props: CustomArrowProps) => (
  <div
    className="absolute top-1/2 left-4 md:left-8 transform -translate-y-1/2 z-20 cursor-pointer p-2 rounded-full bg-black/20 hover:bg-black/50 transition-colors backdrop-blur-sm"
    onClick={props.onClick}
  >
    <BsChevronLeft className="text-white text-2xl md:text-3xl" />
  </div>
);

const NextArrow = (props: CustomArrowProps) => (
  <div
    className="absolute top-1/2 right-4 md:right-8 transform -translate-y-1/2 z-20 cursor-pointer p-2 rounded-full bg-black/20 hover:bg-black/50 transition-colors backdrop-blur-sm"
    onClick={props.onClick}
  >
    <BsChevronRight className="text-white text-2xl md:text-3xl" />
  </div>
);

export default Hero;
