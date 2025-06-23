// /app/api/admin/register/route.js
import { connectDB } from '@/lib/mongodb';
import Admin from '@/models/Admin';
import bcrypt from 'bcryptjs';

export async function POST(req) {
  await connectDB();

  const { email, password } = await req.json();

  const existingAdmin = await Admin.findOne({ email });
  if (existingAdmin) {
    return Response.json({ message: 'Admin already exists' }, { status: 400 });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const newAdmin = await Admin.create({ email, password: hashedPassword });

  return Response.json({ message: 'Admin registered', admin: newAdmin }, { status: 201 });
}
