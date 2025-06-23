'use client';

import { useEffect, useState } from 'react';

export default function AboutPage() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setVisible(true), 300);
    return () => clearTimeout(timeout);
  }, []);

  const title = "Welcome To Our Restaurant";

  return (
    <main className="min-h-screen bg-black text-white px-6 py-20 font-sans space-y-32">

      {/* === Intro Section === */}
      <section className="flex flex-col md:flex-row items-center justify-between gap-16 max-w-6xl mx-auto">
        <div className="md:w-1/2">
          <h1 className="text-4xl md:text-5xl font-extrabold uppercase tracking-widest text-yellow-400 mb-6">
            {title.split('').map((char, i) => (
              <span
                key={i}
                className={`inline-block transition-all duration-700 ease-out ${
                  visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${i * 50}ms` }}
              >
                {char === ' ' ? '\u00A0' : char}
              </span>
            ))}
          </h1>
          <p className="text-lg text-gray-300 leading-relaxed mt-4">
            At <span className="text-yellow-400 font-semibold">Golden Spoon</span>, we serve more than just food — we deliver a story. Our team brings generations of culinary tradition to the modern table with creative flair and bold flavors.
          </p>
        </div>

        <div className="md:w-1/2 transition-all duration-1000 transform hover:scale-105">
          <img
            src="https://images.pexels.com/photos/375889/pexels-photo-375889.jpeg?_gl=1*qvrpis*_ga*MTU3NjA0MjQ0NS4xNzUwMzMyOTg3*_ga_8JE65Q40S6*czE3NTA2OTY4MDEkbzE4JGcxJHQxNzUwNjk4Mzc1JGo2JGwwJGgw"
            alt="About Us"
            className="rounded-xl shadow-lg w-full"
          />
        </div>
      </section>

      {/* === Mission Section === */}
     <section className="bg-zinc-950 border border-yellow-800 rounded-2xl p-10 max-w-6xl mx-auto text-center shadow-md shadow-yellow-500/10">
  <h2 className="text-4xl md:text-5xl font-extrabold text-yellow-400 uppercase mb-6 tracking-wide">
    Our Mission
  </h2>
  <p className="text-gray-300 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
    To craft a dining experience where <span className="text-yellow-500 font-semibold">taste meets technology</span>.
    We blend culinary tradition with modern innovation, ensuring every bite feels luxurious, every visit feels special,
    and every dish tells a story of quality and passion.
  </p>

  {/* Decorative Line */}
  <div className="mt-8 w-24 h-1 bg-yellow-500 mx-auto rounded-full animate-pulse"></div>
</section>

      {/* === Timeline / Journey Section === */}
      <section className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-yellow-300 uppercase text-center mb-10">Our Journey</h2>
        <div className="grid md:grid-cols-3 gap-8 text-center">
          {[
            {
              year: '2015',
              title: 'Founded',
              desc: 'Started as a family dream to share love through food.',
            },
            {
              year: '2018',
              title: 'Expanded',
              desc: 'Opened our second location due to overwhelming community support.',
            },
            {
              year: '2023',
              title: 'Awarded',
              desc: 'Recognized as "Top Local Restaurant" by Foodie Journal.',
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-zinc-900 p-6 rounded-xl shadow hover:shadow-yellow-400 transition duration-500"
            >
              <h3 className="text-4xl font-bold text-yellow-400">{item.year}</h3>
              <h4 className="text-xl font-semibold mt-2 mb-1">{item.title}</h4>
              <p className="text-gray-400 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

    </main>
  );
}
