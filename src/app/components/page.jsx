'use client';

import { useState } from 'react';
import { ShoppingCart, Menu, X } from 'lucide-react';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      className="relative h-screen bg-cover bg-center text-white"
      style={{
        backgroundImage: `url('https://images.pexels.com/photos/1108117/pexels-photo-1108117.jpeg?_gl=1*mdjljc*_ga*MTU3NjA0MjQ0NS4xNzUwMzMyOTg3*_ga_8JE65Q40S6*czE3NTA2OTY4MDEkbzE4JGcxJHQxNzUwNjk2ODI3JGozNCRsMCRoMA..')`, // 🍽️ Restaurant background
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 z-0" />

      {/* Top Navbar */}
      <div className="relative z-10 flex items-center justify-between px-6 py-6">
        
        {/* Left: Logo */}
        <div className="text-2xl font-bold tracking-widest">
          <a href="/" className="hover:text-yellow-400 transition">FOOD<span className="text-yellow-400">HUB</span></a>
        </div>

        {/* Center: Nav Links (hidden on mobile) */}
        <nav className="hidden md:flex space-x-8 text-lg">
          <a href="/" className="hover:text-yellow-400 transition">Home</a>
          <a href="/menu" className="hover:text-yellow-400 transition">Menu</a>
          <a href="/about" className="hover:text-yellow-400 transition">About</a>
          <a href="/contact" className="hover:text-yellow-400 transition">Contact</a>
        </nav>

        {/* Right: Hamburger & Cart */}
        <div className="flex items-center space-x-4">
          <a href="/cart">
            <ShoppingCart className="w-6 h-6 text-white hover:text-yellow-400 transition" />
          </a>
          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden">
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden absolute top-20 left-0 right-0 bg-black text-white z-20 flex flex-col items-center py-4 space-y-2">
          <a href="/" className="hover:text-yellow-400">Home</a>
          <a href="/menu" className="hover:text-yellow-400">Menu</a>
          <a href="/about" className="hover:text-yellow-400">About</a>
          <a href="/contact" className="hover:text-yellow-400">Contact</a>
        </div>
      )}

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center h-[calc(100vh-96px)] px-4">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight drop-shadow-xl uppercase">
          Taste The Best <br /> From Our Kitchen
        </h1>
        <p className="mt-4 text-lg md:text-xl text-white/80 max-w-2xl">
          Discover delicious dishes and an unforgettable dining experience at FoodHub.
        </p>
      </div>
    </header>
  );
}
