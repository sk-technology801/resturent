// /app/admin/login/page.jsx
'use client';
import { useState } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';

export default function AdminLogin() {
  const router = useRouter();
  const [data, setData] = useState({ email: '', password: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await signIn('credentials', {
      redirect: false,
      email: data.email,
      password: data.password,
    });

    if (res.ok) {
      router.push('/admin/dashboard');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col justify-center items-center">
      <h1 className="text-3xl font-bold mb-6">Admin Login</h1>
      <form onSubmit={handleSubmit} className="space-y-4 bg-zinc-900 p-6 rounded-lg">
        <input
          type="email"
          placeholder="Email"
          onChange={(e) => setData({ ...data, email: e.target.value })}
          className="w-full px-4 py-2 bg-black border border-yellow-500 rounded"
        />
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setData({ ...data, password: e.target.value })}
          className="w-full px-4 py-2 bg-black border border-yellow-500 rounded"
        />
        <button
          type="submit"
          className="bg-yellow-500 text-black px-4 py-2 rounded hover:bg-yellow-400"
        >
          Login
        </button>
      </form>
    </div>
  );
}
