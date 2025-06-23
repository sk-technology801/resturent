// lib/auth.js
import { NextResponse } from 'next/server';

export function isAuthenticated(req) {
  const token = req.cookies.get('admin-token');
  return token === process.env.ADMIN_SECRET;
}
