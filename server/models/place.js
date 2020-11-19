import mongoose from 'mongoose';

const PlaceSchema = new mongoose.Schema({
  // Имя пользователя
  placeName: {
    type: String,
    required: true,
    unique: true,
    minlength: 2,
  },
  placeUrl: {
    type: String,
    required: true,
    unique: true,
  },
  placePhotoUrl: {
    type: String,
    required: true,
    unique: true,
  },
  description: {
    type: String,
    required: true,
  },
  rating: Number,
  review: String,
  visitors: Number,
  geometry: Array
});

export default mongoose.model('Place', PlaceSchema);
