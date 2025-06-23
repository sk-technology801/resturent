import { connectDB } from '@/lib/mongodb';
import Dish from '@/models/Dish';

export async function GET() {
  await connectDB();
  const dishes = await Dish.find();
  return Response.json(dishes);
}

export async function POST(req) {
  await connectDB();
  const body = await req.json();
  const dish = await Dish.create(body);
  return Response.json(dish);
}
