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
    type: Array,
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
    },
  },
  category: String,
  rating: Number,
  votesNumber: { type: Number, default: 1 },
  votesSum: { type: Number, default: 5 },
  secrecy: Number,
  visitors: Number,
  geometry: Array,
  latitude: Number,
  longitude: Number,
});

PlaceSchema.methods.getReviews = async function () {
  const reviews = await this.model('Review')
    .find({ placeName: this._id })
    .populate('author')
    .lean();

  const mappedReviews = reviews.map((item) => {
    if (item) {
      return {
        _id: item._id,
        author: item.author.username,
        review: item.review,
        pecularities: item.pecularities,
      };
    }
  });

  return mappedReviews;
};

export default mongoose.model('Place', PlaceSchema);
