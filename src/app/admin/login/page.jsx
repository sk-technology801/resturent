// app/admin/login/page.jsx
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

    if (res.ok) router.push('/admin/dashboard');
    else alert('Invalid credentials');
  };

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="bg-zinc-800 p-8 rounded shadow-xl w-96">
        <h2 className="text-2xl mb-4 font-bold">Admin Login</h2>
        <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email"
          className="w-full mb-3 p-2 rounded bg-zinc-900 border border-gray-600" />
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password"
          className="w-full mb-4 p-2 rounded bg-zinc-900 border border-gray-600" />
        <button onClick={handleLogin} className="bg-yellow-500 text-black px-4 py-2 rounded w-full hover:bg-yellow-400">
          Login
        </button>
      </div>
    </div>
  );
}
