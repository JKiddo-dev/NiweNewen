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
          src="/about2.JPG" // Asegúrate de que la ruta sea correcta
          alt="Background Image"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          quality={100}
        />
      </div>

      <div className="absolute inset-0 bg-black opacity-50"></div> {/* Capa oscura */}

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
            <h2 className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold py-4 font-serif" style={{ fontFamily: "Dancing Script" }}>
              Historia
            </h2>
            <p className="font-serif text-center text-lg md:text-xl lg:text-2xl xl:text-3xl leading-normal mt-8">
              La organización Niwe Newen fue fundada el 29 de septiembre de 2021 por María Alejandra Villavicencio Lara,
              quien decidió dejar su trabajo como enfermera durante la pandemia de Covid-19 para mudarse a San Pedro de
              Melipilla en busca de un entorno más tranquilo. Inspirada por su formación y experiencia, María Alejandra
              creó Niwe Newen con el objetivo de promover la salud y el bienestar general.
            </p>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default AboutHistory;
