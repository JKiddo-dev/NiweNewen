'use client';

import React from 'react';
import { ServiceCard } from './ServiceCard';

const services = [
  {
    id: 1,
    title: 'Estadía en Domo',
    description: 'Estancias para una inmersión completa en la naturaleza.',
    imageSrc: '/Interior.JPG',
    images: ['/Interior.JPG', '/Domo2.jpg', '/Domo3.jpg', '/BañoDomo.jpg'],
  },
  {
    id: 2,
    title: 'Meditación y Relajación',
    description: 'Diferentes técnicas para la relajación y el alivio del estrés.',
    imageSrc: '/Terapia.JPG',
    images: ['/Terapia.JPG', '/medi2.JPG'],
  },
  {
    id: 3,
    title: 'Terapias Alternativas',
    description: 'Reiki presencial y a distancia, Terapia Floral Dr. Bach, Sesión de Tapping o ETF y Matrix del Dr. Karl Dawson.',
    imageSrc: '/Flores de Bach.JPG',
    images: ['/Flores de Bach.JPG', '/terapias2.JPG'],
  },
  {
    id: 4,
    title: 'Experiencia en GRANJA',
    description: 'Participa de la vida en el campo y la cosecha de productos frescos de temporada.',
    imageSrc: '/Cultivo.JPG',
    images: ['/Cultivo.JPG', '/granja2.JPG', '/granja3.JPG','/granja4.JPG','/granja5.JPG','/granja6.JPG','/granja7.JPG'],
  },
  {
    id: 5,
    title: 'Clases de Pintura',
    description: 'Desata tu creatividad en un entorno natural e inspirador.',
    imageSrc: '/Pintura.JPG',
    images: ['/Pintura.JPG', '/Pintura2.JPG', '/Pintura3.JPG'],
  },
  {
    id: 6,
    title: 'Bosque nativo',
    description: 'Conecta la calma, en un bosque nativo y descubre la belleza natural.',
    imageSrc: '/Bosque.JPG',
    images: ['/Bosque.JPG', '/bosque2.JPG', '/bosque3.JPG', '/bosque4.JPG', '/bosque5.JPG', '/bosque6.JPG'],
  },
];

export const Services = () => {
  return (
    <div id='services-section' className='py-16 bg-[#F2EBDF]'>
      <div className='container mx-auto'>
        <h2 className='text-3xl font-bold text-center mb-8 text-[#002315]'>NUESTROS SERVICIOS</h2>
        <div className='grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3'>
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              title={service.title}
              description={service.description}
              imageSrc={service.imageSrc}
              images={service.images}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Services;
