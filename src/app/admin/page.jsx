'use client';
import { useEffect, useState } from 'react';

export default function AdminDashboard() {
  const [dishes, setDishes] = useState([]);

  useEffect(() => {
    fetch('/api/dishes')
      .then((res) => res.json())
      .then((data) => setDishes(data));
  }, []);

  return (
    <main className="p-10 text-white bg-black min-h-screen">
      <h1 className="text-4xl font-bold mb-6">Admin Dashboard</h1>
      <section>
        <h2 className="text-2xl font-semibold mb-4">Dishes</h2>
        <ul className="space-y-2">
          {dishes.map((dish, idx) => (
            <li key={idx} className="bg-zinc-800 p-4 rounded">
              <strong>{dish.name}</strong> – {dish.desc}
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
