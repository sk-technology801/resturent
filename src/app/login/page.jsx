'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function AdminLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleLogin = async () => {
    const res = await fetch('/api/auth/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
    });
    if (res.ok) router.push('/admin');
    else alert('Invalid credentials');
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-black text-white">
      <div className="bg-zinc-900 p-10 rounded-xl shadow-lg w-full max-w-md space-y-6">
        <h2 className="text-3xl font-bold text-center">Admin Login</h2>
        <input
          className="w-full p-2 rounded bg-zinc-800 border border-zinc-700"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="w-full p-2 rounded bg-zinc-800 border border-zinc-700"
          placeholder="Password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleLogin} className="w-full bg-yellow-500 text-black font-bold py-2 rounded hover:bg-yellow-400">
          Login
        </button>
      </div>
    </main>
  );
}
