import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="bg-gray-800 text-white">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">Handisi Couture</Link>
        <ul className="flex space-x-4">
          <li><Link to="/" className="hover:text-gray-300">Home</Link></li>
          <li><Link to="/bespoke" className="hover:text-gray-300">Bespoke Services</Link></li>
          <li><Link to="/ready-to-wear" className="hover:text-gray-300">Ready-to-Wear</Link></li>
          <li><Link to="/account" className="hover:text-gray-300">My Account</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;