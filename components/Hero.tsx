"use client";

import React, { useState } from 'react';
import Image from 'next/image';

const Hero = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section
      className='relative mx-auto max-w-[1920px] flex flex-col gap-20 py-20 lg:py-32 xl:flex-row overflow-hidden'
      style={{
        minHeight: '80vh', // Adjust the minimum height to occupy 0% of the screen height
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className='absolute inset-0 w-full h-full'>
        <Image
          src='/fondo domo.jpg'
          alt='Background Image'
          layout='fill'
          objectFit='cover'
          quality={100}
          className={`transition-opacity duration-500 ${isHovered ? 'opacity-100' : 'opacity-60'}`}
        />
      </div>

      <div className={`relative z-20 flex flex-1 flex-col xl:w-1/2 text-white p-6 lg:p-20 transition-opacity duration-500 ${isHovered ? 'opacity-0' : 'opacity-100'}`}>
        <h1 className='text-4xl font-bold mb-4'>Bienvenido al Domo Niwe Newén</h1>
        <p className='text-xl'>Relájese y conozca la experiencia de envolverse en la naturaleza</p>
      </div>
    </section>
  );
};

export default Hero;
