import React from 'react'
import { ServiceCard } from './ServiceCard';
import Image from 'next/image';

const services = [
    { id: 1, title: 'Estadía en Domo', description: 'Description for service one.', imageSrc: '/next.svg' },
    { id: 2, title: 'Reiki', description: 'Description for service two.', imageSrc: '/next.svg' },
    { id: 3, title: 'Medicina Alternativa', description: 'Description for service three.', imageSrc: '/next.svg' },
  ];

export const Services = () => {
  return (
    <div id='services-section' className='py-16 bg-gray-100'>
        <div className='container mx-auto'>
            <h2 className='text-3xl font-bold text-center mb-8'>NUESTROS SERVICIOS</h2>
            <div className='grid grid-cols-1 gap-8 md:grid-cols-3'>
                {services.map((service, id) => (
                    <ServiceCard
                    key={id}
                    title={service.title}
                    description={service.description}
                    imageSrc={service.imageSrc}
                    />
                ))}
            </div>
        </div>
    </div>
  )
}
