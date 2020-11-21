import express from 'express';
import Place from '../models/place.js';
import { getRandomFive } from '../helpers/randomFive.js';
const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const list = await Place.find().lean().exec();
    const geometryArr = [];
    list.forEach((el) => {
      geometryArr.push(el.geometry);
    });
    const fivePlaces = getRandomFive(geometryArr);
    console.log(fivePlaces);
    res.status(200).json(fivePlaces);
  } catch (error) {
    res.sendStatus(503);
  }
});

export default router;
