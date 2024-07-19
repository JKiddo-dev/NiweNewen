"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import ServiceCardCarousel from './ServiceCardCarousel';
import ServiceModal from './ServiceModal';
import ReactDOM from 'react-dom';

interface ServiceCardProps {
  title: string;
  description: string;
  imageSrc: string;
  images: string[];
}

export const ServiceCard = ({ title, description, imageSrc, images }: ServiceCardProps) => {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div
      className='bg-white shadow-md rounded-lg p-4 flex flex-col items-center text-center transition-transform duration-300 ease-in-out transform hover:scale-105 group cursor-pointer'
    >
      <div className='relative mb-4 overflow-hidden w-48 h-48 rounded-full'>
        <Image src={imageSrc} alt={title} layout='fill' objectFit='cover' className='rounded-full' onClick={handleOpenModal}/>
      </div>
      <h2 className='text-2xl text-[#002315] font-bold mb-2'>{title}</h2>
      <p className='text-[#78288c] transition-opacity duration-300 opacity-0 group-hover:opacity-100'>
        {description}
      </p>
      {showModal && ReactDOM.createPortal(
        <ServiceModal show={showModal} onClose={handleCloseModal}>
          <ServiceCardCarousel images={images} />
        </ServiceModal>,
        document.body
      )}
    </div>
  );
};
