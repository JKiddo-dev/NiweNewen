'use client';

import Image from "next/image";
import { FaPhoneAlt, FaMapMarkerAlt, FaEnvelope, FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  const phoneNumber = "+56984497489";
  const whatsappLink = `https://api.whatsapp.com/send?phone=${encodeURIComponent(phoneNumber)}`;
  const email = "NiweNewen@gmail.com";

  return (
    <section id="contact" className="bg-[#F3EDDD] text-[#002315] py-16 px-4">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8 text-[#002315]">CONTACTO</h2>
        <p className="mb-4 text-center text-2xl">Estamos ubicados en San Pedro de Melipilla, Región Metropolitana.</p>
        <div className="flex flex-col md:flex-row justify-center items-start md:items-center space-y-8 md:space-y-0 md:space-x-8">
          <div className="w-full md:w-1/2 text-center md:text-left">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d827.4449084756789!2d-71.5595546!3d-33.9467955!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9663b76b2bc7f885%3A0x60627c29a2f09a63!2sDomo%20Niwe%20Newen!5e0!3m2!1ses-419!2scl!4v1720999585759!5m2!1ses-419!2scl"
              width="100%"
              height="500"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="border border-gray-300 rounded-lg"
            ></iframe>
          </div>
          <div className="w-full md:w-1/2 flex justify-center items-center relative">
            <div className="relative overflow-hidden rounded-lg w-full h-[300px] md:h-[500px]">
              <Image 
                src="/mapa.png" 
                alt="Mapa" 
                layout="fill" 
                objectFit="cover" 
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
        <p className="mt-8 text-center text-2xl">¿Tienes consultas o necesitas más detalles? ¡Ponte en contacto con nosotros!</p>
        <div className="flex flex-col md:flex-row justify-center items-center mt-4 space-y-4 md:space-y-0 md:space-x-8">
          <div className="flex items-center space-x-2">
            <FaPhoneAlt />
            <a href={`tel:${phoneNumber}`} className="text-[#002315] font-medium text-2xl hover:text-[#78288c] transition-colors duration-300">
              +56 9 8449 7489
            </a>
          </div>
          <div className="flex items-center space-x-2">
            <FaWhatsapp />
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="text-[#002315] font-medium text-2xl hover:text-[#78288c] transition-colors duration-300">
              WhatsApp
            </a>
          </div>
          <div className="flex items-center space-x-2">
            <FaEnvelope />
            <a href={`mailto:${email}`} className="text-[#002315] font-medium text-2xl hover:text-[#78288c] transition-colors duration-300">
              NiweNewen@gmail.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
