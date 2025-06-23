// app/api/auth/logout/route.js
import { NextResponse } from 'next/server';

export async function POST() {
  const res = NextResponse.json({ message: 'Logged out' });
  res.cookies.set('admin-token', '', { maxAge: 0 });
  return res;
}
