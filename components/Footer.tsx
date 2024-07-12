'use client';

import React, { useState } from 'react';
import { FaPhoneAlt, FaMapMarkerAlt, FaEnvelope, FaInstagram, FaFacebook, FaWhatsapp, FaCreditCard, FaMoneyBillAlt } from 'react-icons/fa';
import Modal from './Modal'; 

const Footer = () => {
  const phoneNumber = "+56984497489";
  const whatsappLink = `https://api.whatsapp.com/send?phone=${encodeURIComponent(phoneNumber)}`;

  const [showPrivacyPolicy, setShowPrivacyPolicy] = useState(false);
  const [showTermsOfService, setShowTermsOfService] = useState(false);

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
          <div className="flex flex-col md:flex-row items-center md:justify-start mt-4">
            <p className="flex items-center mr-4">
              <FaCreditCard className="mr-2" />
              Transferencia Bancaria
            </p>
            <p className="flex items-center">
              <FaMoneyBillAlt className="mr-2" />
              Efectivo
            </p>
          </div>
        </div>
      </div>
      <div className="border-t border-[#8C4C27] mt-8 pt-4 text-center">
        <p>&copy; 2024 Niwe Newen. Todos los derechos reservados.</p>
        <button 
          onClick={() => setShowPrivacyPolicy(true)} 
          className="text-blue-400 hover:underline mx-2"
        >
          Política de Privacidad
        </button>
        <button 
          onClick={() => setShowTermsOfService(true)} 
          className="text-blue-400 hover:underline mx-2"
        >
          Términos de Servicio
        </button>
      </div>
      {showPrivacyPolicy && (
        <Modal 
          show={showPrivacyPolicy} 
          onClose={() => setShowPrivacyPolicy(false)} 
          title="Política de Privacidad"
        >
          <div className="p-6 bg-white rounded-lg max-h-96 overflow-y-auto">
            <h2 className="text-2xl font-semibold mb-4">Política de Privacidad</h2>
            <p>
              <strong>Introducción</strong><br />
              Bienvenido a Domo Niwe Newen. Valoramos tu privacidad y estamos comprometidos con la protección de tus datos personales. Esta Política de Privacidad explica cómo recopilamos, utilizamos y protegemos la información que nos proporcionas cuando visitas nuestra página web.
              <br /><br />
              <strong>Información que Recopilamos</strong><br />
              Recopilamos información personal que tú nos proporcionas directamente, como tu nombre, correo electrónico y número de teléfono, cuando te comunicas con nosotros a través de formularios de contacto o al reservar nuestros servicios.
              <br /><br />
              <strong>Uso de la Información</strong><br />
              Utilizamos la información que recopilamos para los siguientes fines:
              <ul className="list-disc list-inside">
                <li>Responder a tus consultas y proporcionar información sobre nuestros servicios.</li>
                <li>Gestionar tus reservas y coordinar las actividades en el domo.</li>
                <li>Mejorar nuestros servicios y la experiencia del usuario en nuestro sitio web.</li>
              </ul>
              <br />
              <strong>Protección de la Información</strong><br />
              Nos comprometemos a proteger tu información personal mediante el uso de medidas de seguridad adecuadas para prevenir el acceso no autorizado, la divulgación o la modificación de tus datos.
              <br /><br />
              <strong>Compartir Información</strong><br />
              No compartimos tu información personal con terceros, salvo cuando sea necesario para cumplir con la ley o para proteger nuestros derechos.
              <br /><br />
              <strong>Tus Derechos</strong><br />
              Tienes derecho a acceder, corregir o eliminar tu información personal. Si deseas ejercer estos derechos, por favor, ponte en contacto con nosotros a través de nuestro correo electrónico: NiweNewen@gmail.com.
              <br /><br />
              <strong>Cambios en esta Política</strong><br />
              Nos reservamos el derecho de actualizar esta Política de Privacidad en cualquier momento. Cualquier cambio será publicado en esta página.
            </p>
          </div>
        </Modal>
      )}
      {showTermsOfService && (
        <Modal 
          show={showTermsOfService} 
          onClose={() => setShowTermsOfService(false)} 
          title="Términos de Servicio"
        >
          <div className="p-6 bg-white rounded-lg max-h-96 overflow-y-auto">
            <h2 className="text-2xl font-semibold mb-4">Términos de Servicio</h2>
            <p>
              <strong>Introducción</strong><br />
              Estos Términos de Servicio rigen el uso del sitio web de Domo Niwe Newen. Al acceder y utilizar nuestro sitio, aceptas cumplir con estos términos.
              <br /><br />
              <strong>Servicios Ofrecidos</strong><br />
              Domo Niwe Newen ofrece información sobre terapias alternativas del alma y del espíritu, así como la posibilidad de reservar sesiones de meditación y relajación en nuestro domo ubicado en un bosque nativo.
              <br /><br />
              <strong>Reservas y Pagos</strong><br />
              Las reservas para nuestros servicios deben realizarse a través de nuestro sitio web o mediante contacto directo. El pago de los servicios se realizará de acuerdo con las instrucciones proporcionadas en el momento de la reserva.
              <br /><br />
              <strong>Cancelaciones y Reembolsos</strong><br />
              Las cancelaciones deben notificarse con al menos 24 horas de antelación para ser elegibles para un reembolso completo. Las cancelaciones realizadas con menos de 24 horas de antelación no serán reembolsadas.
              <br /><br />
              <strong>Responsabilidad</strong><br />
              Domo Niwe Newen no se hace responsable de cualquier daño o pérdida resultante del uso de nuestros servicios o de la imposibilidad de utilizarlos.
              <br /><br />
              <strong>Modificaciones</strong><br />
              Nos reservamos el derecho de modificar estos Términos de Servicio en cualquier momento. Cualquier cambio será publicado en esta página.
              <br /><br />
              <strong>Contacto</strong><br />
              Si tienes alguna pregunta sobre estos Términos de Servicio, por favor, contáctanos a través de nuestro correo electrónico: NiweNewen@gmail.com.
            </p>
          </div>
        </Modal>
      )}
    </footer>
  );
};

export default Footer;
