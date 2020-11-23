import express from 'express';
import Place from '../models/place.js';
import Review from '../models/review.js';

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const list = await Place.find();
    if (list.length) {
      res.status(200).json(list);
    } else {
      res.sendStatus('List is empty');
    }
  } catch (error) {
    res.sendStatus(503);
  }
});

router.get('/:id/reviews', async (req, res) => {
  const place = await Place.findOne({ _id: req.params.id });
  const reviews = await place.getReviews();

  res.json(reviews);
});

router.post('/:id/reviews', async (req, res) => {
  const { review, stars, pecularities, userId } = req.body;

  if (review) {
    const newReview = new Review({
      author: userId,
      placeName: req.params.id,
      review,
      pecularities,
    });
    try {
      await newReview.save();
    } catch (err) {
      console.log(err);
    }

    res.status(200).json(newReview);
  }
});

router.put('/new', async (req, res) => {
  const {
    placeName,
    placeUrl,
    placePhotoUrl,
    address,
    tel: phone,
    workingHours,
    category,
    rating,
    geometry,
    description,
  } = req.body;

  const addNewPlace = new Place({
    placeName,
    placeUrl,
    placePhotoUrl,
    info: { address, tel: phone, workingHours },
    category,
    rating,
    geometry,
    description,
  });
  try {
    await addNewPlace.save();
    const places = await Place.find();
    res.status(200).json(places);
  } catch (error) {
    console.log(error);
  }
});

router.post('/check', (req, res) => {
  res.send('ответ по ручке checkPlace').end();
})

export default router;
