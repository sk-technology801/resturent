'use client';
import { useState } from 'react';

export default function AdminRegisterPage() {
  const [form, setForm] = useState({ email: '', password: '' });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch('/api/admin/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });

    const data = await res.json();
    setMessage(data.message || 'Error');
  };

  return (
    <div className="min-h-screen bg-black text-white p-10">
      <h1 className="text-3xl mb-6 text-yellow-400 font-bold">Register Admin</h1>
      <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
        <input
          type="email"
          name="email"
          placeholder="Admin Email"
          value={form.email}
          onChange={handleChange}
          className="w-full px-4 py-2 bg-zinc-800 text-white border border-yellow-400 rounded"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          className="w-full px-4 py-2 bg-zinc-800 text-white border border-yellow-400 rounded"
        />
        <button
          type="submit"
          className="px-6 py-2 bg-yellow-400 text-black font-bold rounded hover:bg-yellow-300 transition"
        >
          Register
        </button>
        {message && <p className="text-green-400 mt-4">{message}</p>}
      </form>
    </div>
  );
}
