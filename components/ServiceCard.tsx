"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import ServiceCardCarousel from './ServiceCardCarousel';
import ServiceModal from './ServiceModal';
import ReactDOM from 'react-dom';
import { motion } from 'framer-motion';

interface ServiceCardProps {
  title: string;
  description: string;
  imageSrc: string;
  images: string[];
}

export const ServiceCard = ({ title, description, imageSrc, images }: ServiceCardProps) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <motion.div
        whileHover={{ y: -10 }}
        onClick={() => setShowModal(true)}
        className="bg-white shadow-lg hover:shadow-2xl rounded-2xl overflow-hidden flex flex-col items-center text-center transition-all duration-300 cursor-pointer h-full border border-gray-100"
      >
        <div className="relative w-full h-56 overflow-hidden">
          <Image
            src={imageSrc}
            alt={title}
            fill
            style={{ objectFit: 'cover' }}
            className="transition-transform duration-500 hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        </div>

        <div className="p-6 flex flex-col flex-grow w-full">
          <h2 className="text-xl md:text-2xl text-primary font-serif font-bold mb-3">{title}</h2>
          <p className="text-gray-600 font-sans leading-relaxed flex-grow">
            {description}
          </p>
          <div className="mt-4 inline-block text-secondary font-semibold text-sm tracking-wider uppercase">
            Ver más →
          </div>
        </div>
      </motion.div>

      {showModal &&
        ReactDOM.createPortal(
          <ServiceModal show={showModal} onClose={() => setShowModal(false)}>
            <ServiceCardCarousel images={images} />
          </ServiceModal>,
          document.body
        )}
    </>
  );
};