import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import BespokeServices from './pages/BespokeServices';
import ReadyToWear from './pages/ReadyToWear';
import Account from './pages/Account';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bespoke" element={<BespokeServices />} />
          <Route path="/ready-to-wear" element={<ReadyToWear />} />
          <Route path="/account" element={<Account />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;