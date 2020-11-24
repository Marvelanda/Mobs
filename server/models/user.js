import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  // Имя пользователя
  username: {
    type: String,
    required: true,
    unique: true,
    minlength: 2,
    match: /^[A-Z]\w+$/i,
  },
  // Мы не храним пароль, а только его хэш
  password: {
    type: String,
    required: true,
    minlength: 6,
  },
  // Email
  email: {
    type: String,
    required: true,
    unique: true,
    minlength: 3,
    match: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
  },
  places: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Place',
    },
  ],
  visitedPlaces: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Place',
    },
  ],
  rating: { type: Number, default: 1 },
  points: { type: Number, default: 0 },
});

UserSchema.methods.checkScore = async function () {
  if (this.points > 99) {
    this.rating = 2;
  } else if (this.points > 249) {
    this.rating = 3;
  } else {
    this.rating = 1;
  }
  return await this.save();
};

export default mongoose.model('User', UserSchema);
