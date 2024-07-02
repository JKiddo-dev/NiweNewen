"use client";

import { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const sections = [
  {
    id: "about-us",
    title: "SOBRE NOSOTROS",
    content: (
      <p className="font-serif text-justify text-lg md:text-xl lg:text-2xl xl:text-3xl leading-normal mt-8" style={{ fontFamily: 'Dancing Script' }}>
        Niwe Newen, fundada por María Alejandra Villavicencio Lara en 2021, es un refugio dedicado a la salud y el bienestar. Ubicada en San Pedro de Melipilla, ofrece un entorno natural perfecto para la relajación y el equilibrio.
      </p>
    ),
    backgroundImage: '/about1.jpg'
  },
  {
    id: "history",
    title: "Historia",
    content: (
      <p className="font-serif text-justify text-lg md:text-xl lg:text-2xl xl:text-3xl leading-normal mt-8" style={{ fontFamily: 'Dancing Script' }}>
        La organización Niwe Newen fue fundada el 29 de septiembre de 2021 por María Alejandra Villavicencio Lara, quien decidió dejar su trabajo como enfermera durante la pandemia de Covid-19 para mudarse a San Pedro de Melipilla en busca de un entorno más tranquilo. Inspirada por su formación y experiencia, María Alejandra creó Niwe Newen con el objetivo de promover la salud y el bienestar general.
      </p>
    ),
    backgroundImage: '/about2.jpg'
  },
  {
    id: "mission",
    title: "Misión",
    content: (
      <p className="font-serif text-justify text-lg md:text-xl lg:text-2xl xl:text-3xl leading-normal mt-8" style={{ fontFamily: 'Dancing Script' }}>
        Nuestra misión es proporcionar un espacio donde las personas puedan escapar del estrés de la ciudad y reconectarse con ellos mismos y la naturaleza.
      </p>
    ),
    backgroundImage: '/about3.jpg'
  },
  {
    id: "approach",
    title: "Nuestro Enfoque",
    content: (
      <p className="font-serif text-justify text-lg md:text-xl lg:text-2xl xl:text-3xl leading-normal mt-8" style={{ fontFamily: 'Dancing Script' }}>
        En Niwe Newen, nos enfocamos en el bienestar integral, ofreciendo servicios que abarcan el cuerpo, el alma y el espíritu. Promovemos la relajación, la creatividad y el equilibrio en un entorno natural, permitiendo a nuestros visitantes sumergirse en el silencio y la belleza de un bosque exuberante.
      </p>
    ),
    backgroundImage: '/about4.jpg'
  },
  {
    id: "vision",
    title: "Visión Futura",
    content: (
      <p className="font-serif text-justify text-lg md:text-xl lg:text-2xl xl:text-3xl leading-normal mt-8" style={{ fontFamily: 'Dancing Script' }}>
        Nuestra visión es expandir nuestra presencia en línea para alcanzar a un público más amplio y diversificado. Queremos seguir mejorando nuestros servicios y proporcionar un refugio para aquellos que buscan un respiro del estrés cotidiano, convirtiéndonos en un oasis de paz y bienestar.
      </p>
    ),
    backgroundImage: '/about5.jpg'
  }
];

export const About = () => {
  const [visibleSection, setVisibleSection] = useState(sections[0].id);
  const [currentBackground, setCurrentBackground] = useState(sections[0].backgroundImage);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);
  const scrollTimeoutRef = useRef<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (scrollTimeoutRef.current) {
        window.clearTimeout(scrollTimeoutRef.current);
      }

      scrollTimeoutRef.current = window.setTimeout(() => {
        const scrollPosition = window.scrollY;
        let foundVisibleSection = false;

        sections.forEach((section) => {
          const element = document.getElementById(section.id);
          if (element) {
            const { top, height } = element.getBoundingClientRect();
            if (top <= window.innerHeight * 0.5 && top + height >= window.innerHeight * 0.5) {
              setVisibleSection(section.id);
              setCurrentBackground(section.backgroundImage);
              foundVisibleSection = true;
            }
          }
        });

        if (!foundVisibleSection) {
          setVisibleSection(sections[0].id);
          setCurrentBackground(sections[0].backgroundImage);
        }
      }, 200);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeoutRef.current) {
        window.clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, []);

  const handleRef = useCallback((el: HTMLDivElement | null, index: number) => {
    sectionRefs.current[index] = el;
  }, []);

  return (
    <div className='w-screen text-white'>
      <AnimatePresence>
        <motion.div
          key={currentBackground}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className='fixed w-screen h-screen bg-cover bg-center -z-10'
          style={{ backgroundImage: `url(${currentBackground})`, opacity: 0.5 }}
        />
      </AnimatePresence>
      <div className='w-full px-4 md:px-8 lg:px-16 xl:px-32'>
        {sections.map((section, index) => (
          <div
            key={section.id}
            id={section.id}
            ref={(el) => handleRef(el, index)}
            className="flex flex-col justify-center items-center min-h-screen"
          >
            <AnimatePresence>
              {visibleSection === section.id && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="text-center w-full flex flex-col justify-center items-center min-h-screen"
                >
                  <div className='flex flex-col justify-center items-center' style={{ minHeight: '100vh' }}>
                    <h2 className='text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold py-4 font-serif' style={{ fontFamily: 'Dancing Script' }}>
                      {section.title}
                    </h2>
                    {section.content}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
