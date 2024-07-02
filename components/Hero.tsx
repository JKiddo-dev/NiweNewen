import React from 'react';

const Hero = () => {
  return (
    <section
      className='border-[#558C03] mx-auto max-w-[1920px] px-6 lg:px-20 3xl:px-0 flex flex-col gap-20 py-20 lg:py-32 xl:flex-row border-2'
      style={{
        backgroundImage: `url('/fondo domo.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundColor: '#558C03', // Fallback background color
        minHeight: '80vh', // Ajusta la altura mínima para ocupar el 80% de la altura de la pantalla
      }}
    >
      <div className='absolute right-0 top-0 h-screen w-screen' />

      <div className='relative z-20 flex flex-1 flex-col xl:w-1/2'>
        {/* Contenido dentro de la sección Hero */}
      </div>
    </section>
  );
};

export default Hero;