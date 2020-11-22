import express from 'express';
import Place from '../models/place.js';
import { getRandomFive } from '../helpers/randomFive.js';
const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const list = await Place.find().lean().exec();
    const fivePlaces = getRandomFive(list);
    console.log(fivePlaces);
    res.status(200).json(fivePlaces);
  } catch (error) {
    console.log(error.message);
    res.sendStatus(503);
  }
});

export default router;
