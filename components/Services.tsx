import React from 'react'
import { ServiceCard } from './ServiceCard';
import Image from 'next/image';

const services = [
    { id: 1, title: 'Estadía en Domo', description: 'Estancias Para una inmersión completa en la naturaleza.', imageSrc: '/next.svg' },
    { id: 2, title: 'Yoga y Meditación', description: 'Diferentes técnicas para la relajación y el alivio del estrés.', imageSrc: '/next.svg' },
    { id: 3, title: 'Terapias Alternativas', description: 'Reiki online, tapping y matrix reimprinting', imageSrc: '/next.svg' },
  ];

export const Services = () => {
  return (
    <div id='services-section' className='py-16 bg-[#F2EBDF]'>
        <div className='container mx-auto'>
            <h2 className='text-3xl font-bold text-center mb-8 text-[#002315]'>NUESTROS SERVICIOS</h2>
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
