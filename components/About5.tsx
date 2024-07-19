"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from 'next/image';

const AboutApproach = () => {
  return (
    <section
      id="approach"
      className="relative flex flex-col justify-center items-center min-h-screen"
    >
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/about4.JPG" 
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
            key="about4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center w-full"
          >
            <h2 className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold py-4">
              Nuestro Enfoque
            </h2>
            <p className="text-center text-lg md:text-xl lg:text-2xl xl:text-3xl leading-normal mt-8">
              En Niwe Newen, nos enfocamos en el bienestar integral, ofreciendo servicios que abarcan el cuerpo, el alma
              y el espíritu. Promovemos la relajación, la creatividad y el equilibrio en un entorno natural, permitiendo
              a nuestros visitantes sumergirse en el silencio y la belleza de un bosque exhuberante.
            </p>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default AboutApproach;
