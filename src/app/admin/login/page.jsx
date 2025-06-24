'use client';
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    const res = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (!res?.error) router.push("/admin/dashboard");
    else alert("Invalid credentials");
  };

  return (
    <div className="min-h-screen bg-black text-white flex justify-center items-center">
      <form onSubmit={handleLogin} className="bg-zinc-900 p-8 rounded-xl shadow-md space-y-4">
        <h2 className="text-2xl font-bold text-yellow-400">Admin Login</h2>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className="w-full px-4 py-2 bg-black border border-yellow-500 rounded text-white"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className="w-full px-4 py-2 bg-black border border-yellow-500 rounded text-white"
        />
        <button
          type="submit"
          className="bg-yellow-500 px-4 py-2 font-bold text-black rounded hover:bg-yellow-400"
        >
          Login
        </button>
      </form>
    </div>
  );
}
