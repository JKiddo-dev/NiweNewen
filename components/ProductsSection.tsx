'use client';

import React from 'react';
import { ProductCard } from './ProductCard';

const products = [
  {
    id: 1,
    title: 'Canasta para Frutillas',
    description: 'Canasta construida a mano para recoger frutillas del cultivo.',
    imageSrc: '/Canasta.JPG',
    images: ['/Canasta.JPG', '/canasta2.JPG', '/canasta3.JPG'],
  },
  {
    id: 2,
    title: 'Sillas Decorativas',
    description: 'Sillas de madera artesanal realizadas a mano.',
    imageSrc: '/Sillas.JPG',
    images: ['/Sillas.JPG', '/Sillas2.JPG'],
  },
  {
    id: 3,
    title: 'Marcadores de Libro',
    description: 'Marcadores de libro artesanales, perfectos para personalizar y embellecer tus lecturas.',
    imageSrc: '/marcadores.jpg',
    images: ['/marcadores.jpg', '/MarcaPaginas.jpg'],
  },
  {
    id: 4,
    title: 'GiftCards',
    description: 'Regala una GiftCard de nuestros servicios a la persona que quieras!.',
    imageSrc: '/GIFTCARD.png.webp',
    images: ['/GIFTCARD.png.webp', '/gc.JPG'],
  },
];

export const ProductsSection = () => {
  return (
    <section id='products-section' className='py-16 bg-[#F2EBDF]'>
      <div className='container mx-auto'>
        <h2 className='text-3xl font-bold text-center mb-8 text-[#002315]'>NUESTROS PRODUCTOS</h2>
        <div className='grid grid-cols-1 gap-8 md:grid-cols-2'>
          {products.map((product) => (
            <ProductCard
              key={product.id}
              title={product.title}
              description={product.description}
              imageSrc={product.imageSrc}
              images={product.images}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProductsSection;
