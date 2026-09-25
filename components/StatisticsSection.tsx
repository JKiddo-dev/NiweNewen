"use client";

import React from 'react';
import Counter from './Counter';
import { motion } from 'framer-motion';
import { FaLeaf, FaBrain, FaHeartbeat, FaMoon, FaSun, FaSmile } from 'react-icons/fa';

const statistics = [
  { 
    id: 1, 
    title: 'De adultos sufren bajo estrés', 
    value: 37, 
    suffix: '%', 
    description: 'Nuestras terapias alternativas te ayudan a liberar tensiones y encontrar paz mental.',
    icon: <FaBrain className="text-4xl text-accent mb-4 mx-auto" />
  },
  { 
    id: 2, 
    title: 'Reducción del estrés en la naturaleza', 
    value: 30, 
    suffix: '%', 
    description: 'Al reconectarte con nuestros bosques y cultivos, equilibras tus niveles hormonales.',
    icon: <FaLeaf className="text-4xl text-accent mb-4 mx-auto" />
  },
  { 
    id: 3, 
    title: 'De personas viven con ansiedad', 
    value: 300, 
    suffix: 'M', 
    description: 'Encuentra un escape saludable y lleno de relajo en nuestro Domo y terapias.',
    icon: <FaHeartbeat className="text-4xl text-accent mb-4 mx-auto" />
  },
  { 
    id: 4, 
    title: 'Mejora en la calidad del sueño', 
    value: 45, 
    suffix: '%', 
    description: 'El silencio de la naturaleza y la desconexión digital reparan tu ciclo de descanso.',
    icon: <FaMoon className="text-4xl text-accent mb-4 mx-auto" />
  },
  { 
    id: 5, 
    title: 'Aumento en claridad mental', 
    value: 50, 
    suffix: '%', 
    description: 'El aire puro y las técnicas de relajación estimulan tu concentración y creatividad.',
    icon: <FaSun className="text-4xl text-accent mb-4 mx-auto" />
  },
  { 
    id: 6, 
    title: 'Recuperación de la vitalidad', 
    value: 100, 
    suffix: '%', 
    description: 'Una estadía dedicada a ti, para regresar a casa renovado y lleno de buena energía.',
    icon: <FaSmile className="text-4xl text-accent mb-4 mx-auto" />
  },
];

export const StatisticsSection: React.FC = () => {
  return (
    <div className='py-24 bg-primary text-white relative overflow-hidden'>
      {/* Background Image - opacity increased so the forest is visible, with a green overlay */}
      <div className="absolute inset-0 bg-[url('/bosque2.JPG')] bg-cover bg-center opacity-50"></div>
      <div className="absolute inset-0 bg-primary/80"></div>
      
      <div className='container mx-auto px-6 max-w-7xl relative z-10'>
        <div className="text-center mb-16">
          <h2 className='text-4xl md:text-5xl font-serif font-bold text-white mb-4'>Nuestro Impacto en tu Bienestar</h2>
          <p className="text-lg text-accent max-w-2xl mx-auto font-sans">
            La ciencia respalda lo que la naturaleza nos enseña. Descubre por qué un descanso guiado es vital para tu salud física y emocional.
          </p>
        </div>
        
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12'>
          {statistics.map((stat, index) => (
            <motion.div 
              key={stat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className='p-8 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl text-center transform transition-all hover:-translate-y-2 hover:bg-white/15'
            >
              {stat.icon}
              <div className='text-5xl font-serif font-bold text-white mb-2 drop-shadow-md'>
                <Counter end={stat.value} duration={2500} suffix={stat.suffix} />
              </div>
              <h3 className='text-xl font-bold text-accent mb-4'>{stat.title}</h3>
              <p className='text-gray-300 font-sans leading-relaxed text-sm lg:text-base'>
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StatisticsSection;
