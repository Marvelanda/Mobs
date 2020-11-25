import mongoose from 'mongoose';

const ReviewSchema = new mongoose.Schema({
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  placeName: { type: mongoose.Schema.Types.ObjectId, ref: 'Place' },
  review: String,
  pecularities: String,
});

export default mongoose.model('Review', ReviewSchema);
