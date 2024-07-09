"use client";

import React from 'react';
import Counter from './Counter';

const statistics = [
  { id: 1, title: 'De adultos reportan sentirse incapaces de hacer cualquier cosa bajo estrés', value: 37, suffix: '%', description:'Descubre la experiencia de las terapias alternativas' },
  { id: 2, title: 'Se ven reducidas las hormonas relacionadas al estrés al entrar en contacto con la naturaleza', value: 30, suffix: '%', description:'¡Reconéctate con la naturaleza en nuestros bosques y cultivos!' },
  { id: 3, title: 'De personas son afectadas por ansiedad alrededor del mundo', value: 300, suffix: ' Millones', description:'Encuentra un escape lleno de relajo en el DOMO' },
];

export const StatisticsSection: React.FC = () => {
  return (
    <div className='py-16 bg-[#F2EBDF]'>
      <div className='container mx-auto text-center'>
        <h2 className='text-3xl font-bold mb-8 text-[#002315]'>NUESTRO IMPACTO EN TU BIENESTAR</h2>
        <div className='grid grid-cols-1 gap-8 md:grid-cols-3'>
          {statistics.map(stat => (
            <div key={stat.id} className='p-4 bg-white shadow-md rounded-lg transition-all duration-300 ease-in-out transform group text-[#002315] hover:scale-105 group'>
              <div className='text-4xl font-bold'>
                <Counter end={stat.value} duration={2000} suffix={stat.suffix} />
              </div>
              <h3 className='text-xl font-semibold mt-2 py-2'>{stat.title}</h3>
            
                <p className='text-[#78288c] font-medium py-2 transition-opacity duration-300 opacity-0 group-hover:opacity-100'>{stat.description}</p>
              
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
