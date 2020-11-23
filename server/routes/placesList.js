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
  const place = await Place.findOne({
    _id: req.params.id
  });
  const reviews = await place.getReviews();

  res.json(reviews);
});

router.post('/:id/reviews', async (req, res) => {
  const {
    review,
    stars,
    pecularities,
    userId
  } = req.body;

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
    info: {
      address,
      tel: phone,
      workingHours
    },
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

router.post('/check', async (req, res) => {
  const {
    latitude,
    longitude
  } = req.body;

  const fixLat = latitude.toFixed(6)
  const minLat = Number((+fixLat - 0.01).toFixed(6));
  const maxLat = Number((+fixLat + 0.01).toFixed(6));

  const fixLong = longitude.toFixed(6)
  const minLong = Number((+fixLong - 0.01).toFixed(6));
  const maxLong = Number((+fixLong + 0.01).toFixed(6));

  console.log(latitude.toFixed(6), minLat, maxLat);

  if (req.body) {
    const placeLat = await Place.find({
      $elemMatch: {
        'geometry[0]': {
          $gte: minLat,
          $lte: maxLat
        },
        'geometry[1]': {
          $gte: minLong,
          $lte: maxLong
        },
      }
    });
    // const placeLong = await Place.find({
    //   geometry: { $elemMatch: {
    //     $gte: minLong,
    //     $lte: maxLong
    //   }
    // }})
    console.log(placeLat);


  }




  res.send('ответ по ручке checkPlace').end();
})

export default router;
