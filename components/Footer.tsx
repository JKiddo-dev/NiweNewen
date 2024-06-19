import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#F2EBDF] text-black py-8">
      <div className="container mx-auto flex flex-wrap justify-around">
        <div className="w-full md:w-1/4 mb-6 md:mb-0">
          <h4 className="text-lg font-bold mb-4">Contacto</h4>
          <p>Dirección: San Pedro de Melipilla</p>
          <p>Teléfono: +56 9 1234 5678</p>
          <p>Email: contacto@niwenewen.cl</p>
        </div>
        <div className="w-full md:w-1/4 mb-6 md:mb-0">
          <h4 className="text-lg font-bold mb-4">Síguenos</h4>
          <a href="https://instagram.com/niwenewen" target="_blank" rel="noopener noreferrer" className="block hover:underline">Instagram</a>
          <a href="https://facebook.com/niwenewen" target="_blank" rel="noopener noreferrer" className="block hover:underline">Facebook</a>
        </div>
        <div className="w-full md:w-1/4 mb-6 md:mb-0">
          <h4 className="text-lg font-bold mb-4">Enlaces Rápidos</h4>
          <a href="/inicio" className="block hover:underline">Inicio</a>
          <a href="/servicios" className="block hover:underline">Servicios</a>
          <a href="/sobre-nosotros" className="block hover:underline">Sobre Nosotros</a>
          <a href="/contacto" className="block hover:underline">Contacto</a>
        </div>
        <div className="w-full md:w-1/4 mb-6 md:mb-0">
          <h4 className="text-lg font-bold mb-4">Boletín de Noticias</h4>
          <form>
            <input type="email" placeholder="Tu correo electrónico" className="w-full p-2 mb-2 border border-gray-400 rounded" />
            <button type="submit" className="w-full p-2 bg-blue-500 hover:bg-blue-600 rounded text-white">Suscribirse</button>
          </form>
        </div>
      </div>
      <div className="border-t border-gray-700 mt-8 pt-4 text-center">
        <p>&copy; 2024 Niwe Newen. Todos los derechos reservados.</p>
        <a href="/politica-de-privacidad" className="text-blue-400 hover:underline mx-2">Política de Privacidad</a>
        <a href="/terminos-de-servicio" className="text-blue-400 hover:underline mx-2">Términos de Servicio</a>
      </div>
    </footer>
  );
};

export default Footer;
