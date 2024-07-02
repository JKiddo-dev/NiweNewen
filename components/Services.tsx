import React from 'react'
import { ServiceCard } from './ServiceCard';
import Image from 'next/image';

const services = [
    { id: 1, title: 'Estadía en Domo', description: 'Estancias para una inmersión completa en la naturaleza.', imageSrc: '/Interior.JPG' },
    { id: 2, title: 'Yoga y Meditación', description: 'Diferentes técnicas para la relajación y el alivio del estrés.', imageSrc: '/Terapia.JPG' },
    { id: 3, title: 'Terapias Alternativas', description: 'Reiki online, flores de Bach, tapping y matrix reimprinting.', imageSrc: '/Flores de Bach.JPG' },
    { id: 4, title: 'Experiencia en granja', description: 'Participa de la vida en el campo y la cosecha de productos frescos de temporada.', imageSrc: '/Cultivo.JPG' },
    { id: 5, title: 'Clases de Pintura', description: 'Desata tu creatividad en un entorno natural e inspirador.', imageSrc: '/Pintura.JPG' },
    { id: 6, title: 'Bosque nativo', description: 'Adéntrate en un bosque nativo  y descubre la belleza de los pinos y la flora autóctona.', imageSrc: '/Bosque.JPG' },
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
