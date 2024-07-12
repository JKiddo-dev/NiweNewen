import React from 'react';
import Image from 'next/image';

interface ProductCardProps {
  title: string;
  description: string;
  imageSrc: string;
}

export const ProductCard = ({ title, description, imageSrc }: ProductCardProps) => {
  return (
    <div className='bg-white shadow-md rounded-lg p-4 flex flex-col items-center text-center transition-transform duration-300 ease-in-out transform hover:scale-105 group'>
      <div className='relative mb-4 overflow-hidden transition-all duration-300 ease-in-out w-48 h-48 group-hover:w-80 group-hover:h-45'>
        <Image src={imageSrc} alt={title} layout='fill' objectFit='cover' className='rounded-full group-hover:rounded-lg' />
      </div>
      <h2 className='text-2xl text-[#002315] font-bold mb-2'>{title}</h2>
      <p className='text-[#78288c] transition-opacity duration-300 opacity-0 group-hover:opacity-100'>
        {description}
      </p>
    </div>
  );
}

const products = [
  { id: 1, title: 'Canasta para Frutillas', description: 'Canasta construida a mano para recoger frutillas del cultivo.', imageSrc: '/Canasta.JPG' },
  { id: 2, title: 'Sillas Decorativas', description: 'Sillas de madera artesanal realizadas a mano.', imageSrc: '/Sillas.JPG' },
  { id: 3, title: 'Flores de Bach', description: 'Gotas esenciales para la salud y el bienestar.', imageSrc: '/Gotas.JPG' },
];

export const ProductsSection = () => {
  return (
    <section id='products-section' className='py-16 bg-[#F2EBDF]'>
      <div className='container mx-auto'>
        <h2 className='text-3xl font-bold text-center mb-8 text-[#002315]'>NUESTROS PRODUCTOS</h2>
        <div className='grid grid-cols-1 gap-8 md:grid-cols-3'>
          {products.map((product) => (
            <ProductCard
              key={product.id}
              title={product.title}
              description={product.description}
              imageSrc={product.imageSrc}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProductsSection;
