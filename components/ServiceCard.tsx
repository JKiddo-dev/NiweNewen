'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import ServiceCardCarousel from './ServiceCardCarousel';

interface ServiceCardProps {
  title: string;
  description: string;
  imageSrc: string;
  images: string[];
}

export const ServiceCard = ({ title, description, imageSrc, images }: ServiceCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className='bg-white shadow-md rounded-lg p-4 flex flex-col items-center text-center transition-transform duration-300 ease-in-out transform hover:scale-105 group'
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className={`relative mb-4 overflow-hidden transition-all duration-300 ease-in-out ${isHovered ? 'w-80 h-45 group-hover:rounded-lg' : 'w-48 h-48 rounded-full'}`}>
        {isHovered ? (
          <ServiceCardCarousel images={images} isHovered={isHovered} />
        ) : (
          <Image src={imageSrc} alt={title} layout='fill' objectFit='cover' objectPosition='center' className='rounded-full group-hover:rounded-lg' />
        )}
      </div>
      <h2 className='text-2xl text-[#002315] font-bold mb-2'>{title}</h2>
      <p className='text-[#78288c] transition-opacity duration-300 opacity-0 group-hover:opacity-100'>
        {description}
      </p>
    </div>
  );
}
