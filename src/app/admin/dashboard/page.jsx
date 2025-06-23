// /app/admin/dashboard/page.jsx
'use client';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function AdminDashboard() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === 'unauthenticated') router.push('/admin/login');
  }, [status]);

  if (status === 'loading') return <p>Loading...</p>;

  return (
    <div className="p-10 text-white bg-black">
      <h1 className="text-4xl font-bold mb-6">Admin Dashboard</h1>
      <p className="text-yellow-400">Welcome, {session?.user?.email}</p>
    </div>
  );
}
