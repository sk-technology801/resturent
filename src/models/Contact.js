import mongoose from 'mongoose';

const contactSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
}, {
  timestamps: true,
});

export default mongoose.models.Contact || mongoose.model('Contact', contactSchema);
