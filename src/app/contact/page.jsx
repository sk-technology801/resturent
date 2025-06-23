'use client';
import { useState } from 'react';

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message sent!');
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <main className="bg-black text-white px-6 py-20">
      {/* === Contact Section === */}
      <section className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start">
        {/* Left Info */}
        <div className="space-y-6">
          <h2 className="text-4xl font-bold text-yellow-400 uppercase">Get in Touch</h2>
          <p className="text-gray-300 text-lg">
            Have a question, suggestion, or reservation? We’d love to hear from you!
          </p>
          <div className="space-y-2 text-sm text-gray-400">
            <p><strong className="text-yellow-400">📍 Address:</strong> 123 Foodie Street, City</p>
            <p><strong className="text-yellow-400">📞 Phone:</strong> +92 300 1234567</p>
            <p><strong className="text-yellow-400">✉️ Email:</strong> contact@delishbites.com</p>
            <p><strong className="text-yellow-400">🕒 Hours:</strong> Mon–Sun: 10AM – 11PM</p>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4 pt-4 text-yellow-400">
            <a href="#" className="hover:text-white transition">🌐 Facebook</a>
            <a href="#" className="hover:text-white transition">📸 Instagram</a>
            <a href="#" className="hover:text-white transition">📞 WhatsApp</a>
          </div>
        </div>

        {/* Right Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="space-y-4 bg-zinc-900 p-6 rounded-xl shadow-lg"
        >
          <h3 className="text-2xl font-semibold text-yellow-300 mb-4">Send a Message</h3>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="w-full px-4 py-2 border border-yellow-500 bg-black text-white rounded-md focus:outline-yellow-400"
          />
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Your Email"
            className="w-full px-4 py-2 border border-yellow-500 bg-black text-white rounded-md focus:outline-yellow-400"
          />
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Your Message"
            rows={4}
            className="w-full px-4 py-2 border border-yellow-500 bg-black text-white rounded-md focus:outline-yellow-400"
          />
          <button
            type="submit"
            className="bg-yellow-500 text-black font-bold px-6 py-2 rounded hover:bg-yellow-400 transition"
          >
            Send Message
          </button>
        </form>
      </section>

      {/* === FAQ Section === */}
      <section className="mt-24 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-yellow-400 uppercase mb-10">
          Frequently Asked Questions
        </h2>
        <div className="space-y-6 text-gray-300">
          <div>
            <h4 className="text-lg font-semibold text-yellow-300">Do you offer home delivery?</h4>
            <p className="text-sm">Yes! We offer fast and safe home delivery within the city.</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-yellow-300">Can I reserve a table online?</h4>
            <p className="text-sm">Absolutely. Use the form above or call us directly.</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-yellow-300">Do you host private events?</h4>
            <p className="text-sm">Yes, we cater to private events, parties, and corporate dinners.</p>
          </div>
        </div>
      </section>

      {/* === Google Map Embed === */}
      <section className="mt-24">
        <h2 className="text-3xl font-bold text-center text-yellow-400 uppercase mb-10">
          Find Us Here
        </h2>
        <div className="w-full h-72 rounded-xl overflow-hidden border-4 border-yellow-500">
        <iframe
  title="Map"
  width="100%"
  height="100%"
  style={{ border: 0 }}
  loading="lazy"
  allowFullScreen
  referrerPolicy="no-referrer-when-downgrade"
  src="https://www.google.com/search?q=white+castle+faisalabad&rlz=1C1CHBF_en-GBPK1164PK1164&oq=white+cas&gs_lcrp=EgZjaHJvbWUqBwgCEAAYgAQyEAgAEAAY4wIYsQMYyQMYgAQyEwgBEC4YxwEYsQMYyQMY0QMYgAQyBwgCEAAYgAQyBggDEEUYOTINCAQQABiSAxiABBiKBTIHCAUQABiABDIHCAYQABiABDINCAcQLhivARjHARiABDIWCAgQLhiDARivARjHARixAxiABBiKBTIGCAkQABhA0gEJMTExMzdqMGo0qAIAsAIB&sourceid=chrome&ie=UTF-8"
/>

          
        </div>
      </section>
    </main>
  );
}
