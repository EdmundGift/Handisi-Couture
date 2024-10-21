import React from 'react';

function BespokeServices() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Bespoke Services</h1>
      <p className="text-xl mb-8">Experience the luxury of custom-tailored clothing.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-bold mb-4">How It Works</h2>
          <ol className="list-decimal list-inside space-y-2">
            <li>Create an account and provide your measurements</li>
            <li>Choose your preferred style and fabric</li>
            <li>Our expert tailors craft your garment</li>
            <li>Receive your perfectly fitted clothing</li>
          </ol>
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-4">Our Offerings</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Suits</li>
            <li>Jackets</li>
            <li>Pants</li>
            <li>Shirts</li>
            <li>Dresses</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default BespokeServices;