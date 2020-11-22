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
    unique: true,
  },
  placePhotoUrl: {
    type: String,
    unique: true,
  },
  description: {
    type: String,
  },
  info: {
    address: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
    },
    workingHours: {
      type: String,
    }
  },
  category: String,
  rating: Number,
  review: Array,
  visitors: Number,
  geometry: Array
});

export default mongoose.model('Place', PlaceSchema);
