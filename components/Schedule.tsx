'use client';

import React, { useState } from 'react';

interface Service {
  id: number;
  title: string;
  description: string;
  imageSrc: string;
}

interface Product {
  id: number;
  title: string;
  description: string;
  imageSrc: string;
}

const services: Service[] = [
  { id: 1, title: 'Estadía en Domo', description: 'Estancias para una inmersión completa en la naturaleza.', imageSrc: '/Interior.JPG' },
  { id: 2, title: 'Yoga y Meditación', description: 'Diferentes técnicas para la relajación y el alivio del estrés.', imageSrc: '/Terapia.JPG' },
  { id: 3, title: 'Terapias Alternativas', description: 'Reiki online, flores de Bach, tapping y matrix reimprinting.', imageSrc: '/Flores de Bach.JPG' },
  { id: 4, title: 'Experiencia en granja', description: 'Participa de la vida en el campo y la cosecha de productos frescos de temporada.', imageSrc: '/Cultivo.JPG' },
  { id: 5, title: 'Clases de Pintura', description: 'Desata tu creatividad en un entorno natural e inspirador.', imageSrc: '/Pintura.JPG' },
  { id: 6, title: 'Bosque nativo', description: 'Adéntrate en un bosque nativo  y descubre la belleza de los pinos y la flora autóctona.', imageSrc: '/Bosque.JPG' },
];

const products: Product[] = [
  { id: 1, title: 'Canasta para Frutillas', description: 'Canasta construida a mano para recoger frutillas del cultivo.', imageSrc: '/Canasta.JPG' },
  { id: 2, title: 'Sillas Decorativas', description: 'Sillas de madera artesanal realizadas a mano.', imageSrc: '/Sillas.JPG' },
  { id: 3, title: 'Gotitas', description: 'Gotas esenciales para la salud y el bienestar.', imageSrc: '/Gotas.JPG' },
];

const Schedule = () => {
  const [selectedService, setSelectedService] = useState('');
  const [selectedProduct, setSelectedProduct] = useState('');
  const [comments, setComments] = useState('');

  return (
    <section id="schedule" className='relative flex flex-col justify-center items-center min-w-screen min-h-screen bg-[#F3EDDD]'>
      <div className="container mx-auto px-6 lg:px-20">
        <h2 className="text-3xl font-bold text-center mb-8 mt-12 text-[#002315]">AGENDA UNA CITA</h2>
        <p className="mb-4 text-center text-[#002315]">Utiliza el siguiente formulario para agendar una cita con nosotros.</p>
        
        <div className="flex flex-wrap lg:flex-nowrap bg-white p-6 rounded-lg shadow-lg">
          <div className="w-full lg:w-1/2 mb-6 lg:mb-0">
            <form>
              <div className="mb-4">
                <label className="block text-[#002315] text-sm font-bold mb-2" htmlFor="name">
                  Nombre
                </label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Nombre" />
              </div>
              <div className="mb-4">
                <label className="block text-[#002315] text-sm font-bold mb-2" htmlFor="email">
                  Correo Electrónico
                </label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Correo Electrónico" />
              </div>
              <div className="mb-4">
                <label className="block text-[#002315] text-sm font-bold mb-2" htmlFor="phone">
                  Teléfono
                </label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="phone" type="tel" placeholder="Teléfono" />
              </div>
              <div className="mb-4">
                <label className="block text-[#002315] text-sm font-bold mb-2" htmlFor="service">
                  Tipo de Servicio
                </label>
                <select className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="service" value={selectedService} onChange={(e) => setSelectedService(e.target.value)}>
                  <option value="">Seleccionar Servicio</option>
                  {services.map((service) => (
                    <option key={service.id} value={service.title}>{service.title}</option>
                  ))}
                </select>
              </div>
              <div className="mb-4">
                <label className="block text-[#002315] text-sm font-bold mb-2" htmlFor="product">
                  ¿Desea añadir un producto del catálogo?
                </label>
                <select className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="product" value={selectedProduct} onChange={(e) => setSelectedProduct(e.target.value)}>
                  <option value="">Seleccionar Producto</option>
                  {products.map((product) => (
                    <option key={product.id} value={product.title}>{product.title}</option>
                  ))}
                </select>
              </div>
              <div className="mb-4">
                <label className="block text-[#002315] text-sm font-bold mb-2" htmlFor="comments">
                  Comentarios
                </label>
                <textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="comments" placeholder="Comentarios" rows={4} value={comments} onChange={(e) => setComments(e.target.value)}></textarea>
              </div>
              <div className="flex items-center justify-between">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                  Enviar
                </button>
              </div>
            </form>
          </div>
          
          <div className="w-full lg:w-1/2 lg:pl-6">
            <iframe src="https://calendar.google.com/calendar/embed?src=niwenewen%40gmail.com&ctz=America%2FSantiago" style={{ border: 0 }} width="100%" height="800" frameBorder="0" scrolling="no"></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Schedule;
