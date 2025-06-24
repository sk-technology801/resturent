'use client';
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginPage() {
  const router = useRouter();
  const [form, setForm] = useState({ email: '', password: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await signIn('credentials', {
      email: form.email,
      password: form.password,
      redirect: false,
    });
    if (res.ok) router.push("/admin");
    else alert("Invalid credentials");
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-black text-white">
      <form onSubmit={handleSubmit} className="bg-zinc-900 p-8 rounded shadow-md space-y-4">
        <h1 className="text-2xl font-bold text-yellow-400">Admin Login</h1>
        <input type="email" name="email" placeholder="Email" className="w-full px-3 py-2" onChange={e => setForm({ ...form, email: e.target.value })} />
        <input type="password" name="password" placeholder="Password" className="w-full px-3 py-2" onChange={e => setForm({ ...form, password: e.target.value })} />
        <button type="submit" className="bg-yellow-500 w-full py-2 font-semibold hover:bg-yellow-400">Login</button>
      </form>
    </main>
  );
}
