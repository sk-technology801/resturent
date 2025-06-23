import mongoose from 'mongoose';

const DishSchema = new mongoose.Schema({
  name: { type: String, required: true },
  desc: { type: String, required: true },
  img: { type: String, required: true },
});

export default mongoose.models.Dish || mongoose.model('Dish', DishSchema);
