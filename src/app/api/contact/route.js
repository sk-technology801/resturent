import { connectDB } from '@/lib/mongodb';
import Contact from '@/models/Contact';

export async function POST(req) {
  try {
    await connectDB();
    const body = await req.json();
    const contact = await Contact.create(body);
    return Response.json({ success: true, contact }, { status: 201 });
  } catch (err) {
    console.error('POST /api/contact error:', err);
    return Response.json({ error: 'Server error' }, { status: 500 });
  }
}
