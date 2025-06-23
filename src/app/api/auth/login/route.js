// app/api/auth/login/route.js
import { NextResponse } from 'next/server';
import Admin from '@/models/Admin';
import { connectDB } from '@/lib/mongodb';
import bcrypt from 'bcryptjs';

export async function POST(req) {
  await connectDB();
  const { email, password } = await req.json();
  const admin = await Admin.findOne({ email });

  if (!admin || !await bcrypt.compare(password, admin.password)) {
    return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
  }

  const res = NextResponse.json({ message: 'Logged in' });
  res.cookies.set('admin-token', process.env.ADMIN_SECRET, { httpOnly: true });
  return res;
}
