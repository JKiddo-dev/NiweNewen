"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import ProductCardCarousel from './ProductCardCarousel';
import ServiceModal from './ServiceModal'; 
import ReactDOM from 'react-dom';

interface ProductCardProps {
  title: string;
  description: string;
  imageSrc: string;
  images: string[];
}

export const ProductCard = ({ title, description, imageSrc, images }: ProductCardProps) => {
  const [showCarousel, setShowCarousel] = useState(false);

  const handleOpenCarousel = () => {
    setShowCarousel(true);
  };

  const handleCloseCarousel = () => {
    setShowCarousel(false);
  };

  return (
    <div
      className='bg-white shadow-md rounded-lg p-4 flex flex-col items-center text-center transition-transform duration-300 ease-in-out transform hover:scale-105 group cursor-pointer'      
    >
      <div className='relative mb-4 overflow-hidden w-48 h-48 rounded-full'>
        <Image src={imageSrc} alt={title} layout='fill' objectFit='cover' className='rounded-full' onClick={handleOpenCarousel}/>
      </div>
      <h2 className='text-2xl text-[#002315] font-bold mb-2'>{title}</h2>
      <p className='text-[#78288c] transition-opacity duration-300 opacity-0 group-hover:opacity-100'>
        {description}
      </p>
      {showCarousel && ReactDOM.createPortal(
        <ServiceModal show={showCarousel} onClose={handleCloseCarousel}>
          <ProductCardCarousel images={images} />
        </ServiceModal>,
        document.body
      )}
    </div>
  );
};
