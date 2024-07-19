"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from 'next/image';

const AboutHistory = () => {
  return (
    <section
      id="history"
      className="relative flex flex-col justify-center items-center min-h-screen"
    >
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/about2.JPG"
          alt="Background Image"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          quality={100}
        />
      </div>

      <div className="absolute inset-0 bg-black opacity-50"></div> 

      <div className="relative z-20 flex flex-col justify-center items-center text-white p-6 lg:p-20">
        <AnimatePresence>
          <motion.div
            key="about2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center w-full"
          >
            <h2 className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold py-4">
              Historia
            </h2>
            <p className="text-center text-lg md:text-xl lg:text-2xl xl:text-3xl leading-normal mt-8">
              Niwe Newen nació del sueño de María Alejandra de crear un refugio dedicado a la salud holística y al bienestar. Desde su apertura en 2021, en San Pedro de Melipilla, hemos crecido y evolucionado, siempre manteniendo nuestro compromiso con la naturaleza y el equilibrio personal. A través de diversas terapias y actividades, buscamos enriquecer la vida de nuestros visitantes.
            </p>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default AboutHistory;
