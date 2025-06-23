// app/admin/dashboard/page.jsx
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { isAuthenticated } from '@/lib/auth';

export default function Dashboard() {
  const cookieStore = cookies();
  if (!isAuthenticated(cookieStore)) redirect('/admin/login');

  return (
    <div className="min-h-screen bg-black text-white p-10">
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
      <ul className="space-y-4">
        <li><a href="/admin/dashboard/dishes" className="text-yellow-400">🍽 Manage Dishes</a></li>
        <li><a href="/admin/dashboard/contacts" className="text-yellow-400">📨 View Contact Messages</a></li>
        <li><a href="/admin/dashboard/reservations" className="text-yellow-400">📅 View Reservations</a></li>
      </ul>
    </div>
  );
}
