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
      className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center text-center transition-transform duration-300 ease-in-out transform hover:scale-105 group cursor-pointer h-full"
    >
      {/* Ensures consistent image sizing */}
      <div className="relative mb-4 overflow-hidden rounded-full w-32 h-32">
        <Image
          src={imageSrc}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="rounded-full"
          onClick={handleOpenModal}
        />
      </div>

      {/* Fixed title styling */}
      <h2 className="text-2xl text-[#002315] font-bold mb-2">{title}</h2>

      {/* Description is fixed-height */}
      <p
        className="text-[#78288c] transition-opacity duration-300 md:opacity-0 md:group-hover:opacity-100 overflow-hidden h-10"
        style={{ lineHeight: '1rem' }} // Adjust line height to match text
      >
        {description}
      </p>

      {/* Modal logic */}
      {showModal &&
        ReactDOM.createPortal(
          <ServiceModal show={showModal} onClose={handleCloseModal}>
            <ServiceCardCarousel images={images} />
          </ServiceModal>,
          document.body
        )}
    </div>
  );
};