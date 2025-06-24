import { connectDB } from '@/lib/mongodb';
import Contact from '@/models/Contact';

export async function POST(req) {
  const { name, email, message } = await req.json();
  await connectDB();
  const contact = await Contact.create({ name, email, message });
  return Response.json(contact);
}
