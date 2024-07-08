import React from 'react';
import Image from 'next/image';

interface ServiceCardProps {
  title: string;
  description: string;
  imageSrc: string;
}

export const ServiceCard = ({ title, description, imageSrc }: ServiceCardProps) => {
  return (
    <div className='bg-white shadow-md rounded-lg p-4 flex flex-col items-center text-center transition-transform duration-300 ease-in-out transform hover:scale-105 group'>
      <div className='relative mb-4 overflow-hidden transition-all duration-300 ease-in-out w-48 h-48 group-hover:w-80 group-hover:h-45'>
        <Image src={imageSrc} alt={title} layout='fill' objectFit='cover' objectPosition='center' className='rounded-full group-hover:rounded-lg' />
      </div>
      <h2 className='text-2xl text-[#002315] font-bold mb-2'>{title}</h2>
      <p className='text-[#78288c] transition-opacity duration-300 opacity-0 group-hover:opacity-100'>
        {description}
      </p>
    </div>
  );
}

const services = [
  { id: 1, title: 'Estadía en Domo', description: 'Estancias para una inmersión completa en la naturaleza.', imageSrc: '/Interior.JPG' },
  { id: 2, title: 'Meditación y Relajación', description: 'Diferentes técnicas para la relajación y el alivio del estrés.', imageSrc: '/Terapia.JPG' },
  { id: 3, title: 'Terapias Alternativas', description: 'Reiki online, flores de Bach, tapping y matrix reimprinting.', imageSrc: '/Flores de Bach.JPG' },
  { id: 4, title: 'Experiencia en GRANJA', description: 'Participa de la vida en el campo y la cosecha de productos frescos de temporada.', imageSrc: '/Cultivo.JPG' },
  { id: 5, title: 'Clases de Pintura', description: 'Desata tu creatividad en un entorno natural e inspirador.', imageSrc: '/Pintura.JPG' },
  { id: 6, title: 'Bosque nativo', description: 'Adéntrate en un bosque nativo  y descubre la belleza de los pinos y la flora autóctona.', imageSrc: '/Bosque.JPG' },
];

export const Services = () => {
  return (
    <div id='services-section' className='py-16 bg-[#F2EBDF]'>
      <div className='container mx-auto'>
        <h2 className='text-3xl font-bold text-center mb-8 text-[#002315]'>NUESTROS SERVICIOS</h2>
        <div className='grid grid-cols-1 gap-8 md:grid-cols-3'>
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              title={service.title}
              description={service.description}
              imageSrc={service.imageSrc}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Services;
