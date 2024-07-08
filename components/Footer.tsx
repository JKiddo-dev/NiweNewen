import React from 'react';
import { FaPhoneAlt, FaMapMarkerAlt, FaEnvelope, FaInstagram, FaFacebook, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  const phoneNumber = "+56984497489"; 
  const whatsappLink = `https://api.whatsapp.com/send?phone=${encodeURIComponent(phoneNumber)}`;

  return (
    <footer id="contact" className="bg-[#F3EDDD] text-[#002315] py-8" style={{ fontFamily: 'Dancing Script' }}>
      <div className="border-t-4 border-[#8C4C27] mb-8"></div>
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="flex flex-col items-center md:items-start mb-6 md:mb-0 md:flex-grow text-center md:text-left">
          <img src="/logo png.png" alt="Logo" className="h-32 mb-4 md:mb-0" />
        </div>
        <div className="flex flex-col items-center md:items-start mb-6 md:mb-0 md:flex-grow text-center md:text-left">
          <p className="flex items-center mb-2">
            <FaMapMarkerAlt className="mr-2" />
            <a 
              href="https://maps.app.goo.gl/xJniZ35Kd2nVMHG76" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:underline"
            >
              San Pedro de Melipilla
            </a>
          </p>
          <p className="flex items-center mb-2">
            <FaPhoneAlt className="mr-2" />
            <a 
              href={`tel:${phoneNumber}`} 
              className="hover:underline"
            >
              +56 9 8449 7489
            </a>
          </p>
          <p className="flex items-center mb-2">
            <FaEnvelope className="mr-2" />
            <a 
              href="mailto:NiweNewen@gmail.com" 
              className="hover:underline"
            >
              NiweNewen@gmail.com
            </a>
          </p>
         </div>
        <div className="flex flex-col items-center md:items-start mb-6 md:mb-0 md:flex-grow text-center md:text-left">
          <div className="flex flex-col md:flex-row items-center md:justify-start">
            <a 
              href={whatsappLink} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center hover:underline mb-2 md:mb-0 md:mr-4"
            >
              <FaWhatsapp className="mr-2 text-green-500" />
              WhatsApp
            </a>
            <span className="hidden md:inline mx-2 h-6 border-l border-[#8C4C27]"></span>
            <a 
              href="https://instagram.com/domoniwenewen" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center hover:underline mb-2 md:mb-0 md:mr-4"
            >
              <FaInstagram className="mr-2 text-pink-500" />
              Instagram
            </a>
            <span className="hidden md:inline mx-2 h-6 border-l border-[#8C4C27]"></span>
            <a 
              href="https://facebook.com/DomoniweNewen" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center hover:underline"
            >
              <FaFacebook className="mr-2 text-blue-500" />
              Facebook
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-[#8C4C27] mt-8 pt-4 text-center">
        <p>&copy; 2024 Niwe Newen. Todos los derechos reservados.</p>
        <a href="/politica-de-privacidad" className="text-blue-400 hover:underline mx-2">Política de Privacidad</a>
        <a href="/terminos-de-servicio" className="text-blue-400 hover:underline mx-2">Términos de Servicio</a>
      </div>
    </footer>
  );
};

export default Footer;
