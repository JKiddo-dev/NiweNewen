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
    description: 'Regala una GiftCard de nuestros servicios a la persona que quieras!',
    imageSrc: '/GIFTCARD.png.webp',
    images: ['/GIFTCARD.png.webp', '/gc.JPG'],
  },
];

export const ProductsSection = () => {
  return (
    <section id='products-section' className='py-20 bg-background'>
      <div className='container mx-auto px-6 max-w-7xl'>
        <div className="text-center mb-16">
          <h2 className='text-4xl md:text-5xl font-serif font-bold text-primary mb-4'>Nuestros Productos</h2>
          <p className="text-lg text-textMuted max-w-2xl mx-auto font-sans">
            Lleva un pedacito de Niwe Newen a tu hogar con nuestros productos artesanales.
          </p>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>
          {products.map((product) => (
            <div key={product.id} className="h-full w-full mx-auto">
              <ProductCard
                title={product.title}
                description={product.description}
                imageSrc={product.imageSrc}
                images={product.images}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProductsSection;
