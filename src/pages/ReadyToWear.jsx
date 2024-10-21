import React from 'react';

function ReadyToWear() {
  const products = [
    { name: 'Classic White Shirt', price: 59.99, category: 'Shirts' },
    { name: 'Comfortable Sweatpants', price: 39.99, category: 'Comfort Wear' },
    { name: 'Cozy Hoodie', price: 49.99, category: 'Comfort Wear' },
    { name: 'Essential T-Shirt', price: 24.99, category: 'T-Shirts' },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Ready-to-Wear Collection</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((product, index) => (
          <div key={index} className="bg-white p-4 shadow rounded-lg">
            <h2 className="text-xl font-bold mb-2">{product.name}</h2>
            <p className="text-gray-600 mb-2">{product.category}</p>
            <p className="text-lg font-semibold">${product.price.toFixed(2)}</p>
            <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ReadyToWear;