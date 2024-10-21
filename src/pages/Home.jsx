import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Welcome to Handisi Couture</h1>
      <p className="text-xl mb-8">Discover bespoke tailoring and ready-to-wear elegance for men and women.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-gray-100 p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Bespoke Services</h2>
          <p className="mb-4">Experience the perfect fit with our tailored clothing. Provide your measurements and let us create your dream outfit.</p>
          <Link to="/bespoke" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Learn More</Link>
        </div>
        <div className="bg-gray-100 p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Ready-to-Wear Collection</h2>
          <p className="mb-4">Shop our curated selection of shirts, sweatpants, hoodies, and T-shirts for instant style.</p>
          <Link to="/ready-to-wear" className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">Shop Now</Link>
        </div>
      </div>
    </div>
  );
}

export default Home;