import express from 'express';
import Place from '../models/place.js';
import User from '../models/user.js';
import { getRandomFive } from '../helpers/randomFive.js';
const router = express.Router();

router.post('/', async (req, res) => {
  const { userId } = req.body;

  if (userId) {
    const user = await User.findById(userId);

    res.status(200).json(user.geometry);
  } else {
    const list = await Place.find().lean().exec();
    const fivePlaces = getRandomFive(list);
    console.log('Random', fivePlaces);
    res.status(200).json(fivePlaces);
  }
});

export default router;
