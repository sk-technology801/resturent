'use client';
import { useState } from 'react';

export default function AdminLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    const res = await fetch('/api/auth/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();
    if (res.ok) {
      alert("✅ Logged in");
      window.location.href = "/admin-dashboard";
    } else {
      alert(data.message);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center">
      <h2 className="text-2xl mb-4">Admin Login</h2>
      <input
        className="mb-2 p-2 border bg-black border-gray-600 rounded"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        className="mb-4 p-2 border bg-black border-gray-600 rounded"
        placeholder="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        className="bg-yellow-400 px-4 py-2 rounded text-black font-bold"
        onClick={handleLogin}
      >
        Login
      </button>
    </div>
  );
}
