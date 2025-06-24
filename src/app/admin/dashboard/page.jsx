'use client';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function HomePage() {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    setLoaded(true);
  }, []);

  const heroTitle = "FOOD HUB";

  const dishes = [
    {
      name: 'Grilled Salmon Delight',
      desc: 'Perfectly seasoned grilled salmon with herb butter and roasted veggies.',
      img: 'https://images.pexels.com/photos/16845479/pexels-photo-16845479.jpeg',
    },
    {
      name: 'Classic Margherita Pizza',
      desc: 'Hand-tossed crust topped with fresh tomatoes, basil, and mozzarella.',
      img: 'https://images.pexels.com/photos/6223178/pexels-photo-6223178.jpeg',
    },
    {
      name: 'Gourmet Beef Burger',
      desc: 'Juicy beef patty with smoked cheddar and house sauce.',
      img: 'https://images.pexels.com/photos/2983101/pexels-photo-2983101.jpeg',
    },
    {
      name: 'Creamy Alfredo Pasta',
      desc: 'Fettuccine in rich Alfredo sauce, topped with parmesan.',
      img: 'https://images.pexels.com/photos/32689480/pexels-photo-32689480.jpeg',
    },
    {
      name: 'Chocolate Lava Cake',
      desc: 'Warm chocolate cake with a molten center and ice cream.',
      img: 'https://images.pexels.com/photos/2955818/pexels-photo-2955818.jpeg',
    },
    {
      name: 'Spicy Chicken Tikka',
      desc: 'Marinated chicken grilled to perfection with mint chutney.',
      img: 'https://images.pexels.com/photos/4439740/pexels-photo-4439740.jpeg',
    },
  ];

  return (
    <main className="bg-black text-white px-6 py-20 space-y-28 font-sans overflow-hidden">

      {/* === Hero Section === */}
      <motion.section
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="min-h-screen flex flex-col md:flex-row items-center justify-between gap-10"
      >
        <div className="md:w-1/2 space-y-6">
          <h1 className="text-5xl md:text-6xl font-extrabold uppercase tracking-widest leading-tight">
            {heroTitle.split('').map((char, i) => (
              <span
                key={i}
                className={`inline-block transition-all duration-700 ease-out ${
                  loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                {char === ' ' ? '\u00A0' : char}
              </span>
            ))}
          </h1>

          <p className="text-lg text-gray-400 mt-4">
            Elevating cuisine into an unforgettable experience — where every bite tells a story.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 border border-gray-500 bg-black text-white rounded-md w-full sm:w-auto"
            />
            <button className="bg-yellow-500 text-black font-bold px-6 py-2 rounded-md hover:bg-yellow-400 transition">
              Contact Now
            </button>
          </div>
        </div>

        {/* Right: Image */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="md:w-1/2"
        >
          <img
            src="https://images.pexels.com/photos/4439740/pexels-photo-4439740.jpeg"
            alt="Delicious Food"
            className="rounded-xl shadow-2xl w-full"
          />
        </motion.div>
      </motion.section>

      {/* === Expanded Dishes Section === */}
      <motion.section
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto"
      >
        <h2 className="text-4xl text-center font-bold text-yellow-400 uppercase mb-12">Featured Dishes</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {dishes.map((dish, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-zinc-900 rounded-xl overflow-hidden shadow-lg hover:shadow-yellow-500/40 transition group"
            >
              <img
                src={dish.img}
                alt={dish.name}
                className="w-full h-48 object-cover group-hover:scale-105 transition duration-500"
              />
              <div className="p-5">
                <h3 className="text-xl font-semibold text-yellow-300">{dish.name}</h3>
                <p className="text-sm text-gray-400 mt-2">{dish.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* === Call to Action === */}
      <motion.section
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="bg-gradient-to-r from-yellow-500 to-yellow-300 text-black py-16 text-center rounded-xl max-w-6xl mx-auto px-6 shadow-2xl"
      >
        <h2 className="text-3xl font-bold mb-4 uppercase">Reserve Your Experience Today</h2>
        <p className="mb-6">Let us craft a meal that you’ll never forget.</p>
        <button className="bg-black text-yellow-400 px-6 py-2 font-semibold rounded hover:bg-white hover:text-black transition">
          Contact Now
        </button>
      </motion.section>
    </main>
  );
}
