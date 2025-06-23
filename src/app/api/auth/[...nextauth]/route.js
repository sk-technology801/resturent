// /app/api/auth/[...nextauth]/route.js
import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { connectDB } from '@/lib/mongodb';
import Admin from '@/models/Admin';
import bcrypt from 'bcryptjs';

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        await connectDB();
        const admin = await Admin.findOne({ email: credentials.email });

        if (!admin) throw new Error('Invalid credentials');
        const isValid = await bcrypt.compare(credentials.password, admin.password);
        if (!isValid) throw new Error('Invalid credentials');

        return { id: admin._id, email: admin.email };
      },
    }),
  ],
  pages: {
    signIn: '/admin/login',
  },
  session: {
    strategy: 'jwt',
  },
  secret: process.env.NEXTAUTH_SECRET,
});

export { handler as GET, handler as POST };
