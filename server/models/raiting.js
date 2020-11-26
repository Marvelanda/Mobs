import mongoose from 'mongoose';

const RaitingSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  place: { type: mongoose.Schema.Types.ObjectId, ref: 'Place' },
  value: Number,
});

export default mongoose.model('Raiting', RaitingSchema);
