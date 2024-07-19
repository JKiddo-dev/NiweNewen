"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from 'next/image';

const AboutVision = () => {
  return (
    <section
      id="vision"
      className="relative flex flex-col justify-center items-center min-h-screen p-6 lg:p-20"
    >
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/about5.JPG" 
          alt="Background Image"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          quality={100}
        />
      </div>

      <div className="absolute inset-0 bg-black opacity-50"></div> 

      <div className="relative z-20 flex flex-col justify-center items-center text-white w-full h-full">
        <AnimatePresence>
          <motion.div
            key="about5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center w-full"
          >
            <h2 className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold py-4">
              Visión Futura
            </h2>
            <p className="text-center text-lg md:text-xl lg:text-2xl xl:text-3xl leading-normal mt-8">
              Nuestra visión es expandir nuestra presencia en línea para alcanzar a un público más amplio y
              diversificado. Queremos seguir mejorando nuestros servicios y proporcionar un refugio para aquellos que
              buscan un respiro del estrés cotidiano, convirtiéndonos en un oasis de paz y bienestar.
            </p>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default AboutVision;
