import mongoose from 'mongoose';
import User from './user.js';
import Place from './place.js';

const RaitingSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  place: { type: mongoose.Schema.Types.ObjectId, ref: 'Place' },
  value: Number,
});

export default mongoose.model('Raiting', RaitingSchema);
