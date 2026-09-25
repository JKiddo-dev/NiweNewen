'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const tabs = [
  { id: 'about', label: 'Sobre Nosotros', image: '/about1.JPG', content: 'En Niwe Newen, nos dedicamos a ofrecer un espacio único para el cuidado de la salud y el bienestar. Fundada en 2021 por María Alejandra, nuestra misión es proporcionar un ambiente natural y relajante en San Pedro de Melipilla donde nuestros visitantes puedan desconectarse del estrés diario y encontrar equilibrio.' },
  { id: 'history', label: 'Historia', image: '/about2.JPG', content: 'Niwe Newen nació del sueño de María Alejandra de crear un refugio dedicado a la salud holística y al bienestar. Desde su apertura en 2021, en San Pedro de Melipilla, hemos crecido y evolucionado, siempre manteniendo nuestro compromiso con la naturaleza y el equilibrio personal.' },
  { id: 'mission', label: 'Misión', image: '/about3.JPG', content: 'Nuestra misión es proporcionar un espacio donde las personas puedan escapar del estrés de la ciudad y reconectarse con ellos mismos y la naturaleza. Ofrecemos herramientas de sanación en un entorno seguro y de paz.' },
  { id: 'approach', label: 'Enfoque', image: '/about4.JPG', content: 'Creemos en una sanación integral que abarca mente, cuerpo y espíritu. Integrando la medicina tradicional con terapias alternativas y un profundo respeto por la sabiduría de la naturaleza y nuestros ancestros.' },
  { id: 'vision', label: 'Visión', image: '/about5.JPG', content: 'Aspiramos a ser un referente en turismo de bienestar y sanación holística en la región, expandiendo nuestras terapias y creando una comunidad consciente y conectada con la tierra y el buen vivir.' },
];

export const About = () => {
  const [activeTab, setActiveTab] = useState(tabs[0].id);
  const activeContent = tabs.find(t => t.id === activeTab);

  return (
    <section id="about" className="py-20 bg-background relative">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">Descubre Niwe Newen</h2>
          <p className="text-lg text-textMuted max-w-2xl mx-auto">Un espacio creado desde el corazón para sanar, conectar y descansar.</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-start">
          {/* Tabs Menu */}
          <div className="w-full lg:w-1/3 flex flex-col space-y-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`text-left px-6 py-4 rounded-xl transition-all duration-300 font-medium text-lg ${activeTab === tab.id ? 'bg-primary text-white shadow-lg scale-105' : 'bg-white text-textMuted hover:bg-accent/20'}`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Content Area */}
          <div className="w-full lg:w-2/3">
            <AnimatePresence mode='wait'>
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="bg-white rounded-2xl shadow-xl overflow-hidden"
              >
                <div className="relative h-64 md:h-80 w-full">
                  <Image 
                    src={activeContent?.image || '/about1.JPG'} 
                    alt={activeContent?.label || 'About'}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                    style={{ objectFit: 'cover' }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <h3 className="absolute bottom-6 left-6 text-3xl font-serif font-bold text-white drop-shadow-md">
                    {activeContent?.label}
                  </h3>
                </div>
                <div className="p-8 md:p-10">
                  <p className="text-lg text-gray-700 leading-relaxed font-sans">
                    {activeContent?.content}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Preload images to avoid delay on tab switch */}
            <div className="hidden">
              {tabs.map((tab) => (
                <Image key={`preload-${tab.id}`} src={tab.image} alt="preload" width={10} height={10} priority />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;