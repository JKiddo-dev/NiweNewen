import React from 'react';

const ProductsSection = () => {
  return (
    <section className="bg-white p-8">
      <h2 className="text-2xl font-bold mb-4">Productos</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="border p-4">
          <h3 className="text-xl font-semibold">Producto 1</h3>
          <p>Descripción del producto 1.</p>
        </div>
        <div className="border p-4">
          <h3 className="text-xl font-semibold">Producto 2</h3>
          <p>Descripción del producto 2.</p>
        </div>
        <div className="border p-4">
          <h3 className="text-xl font-semibold">Producto 3</h3>
          <p>Descripción del producto 3.</p>
        </div>
        {/* Añade más productos según sea necesario */}
      </div>
    </section>
  );
};

export default ProductsSection;
