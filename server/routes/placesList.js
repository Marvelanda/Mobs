import express from 'express';
import isAuth from '../middleware/auth.js';
import Place from '../models/place.js';
import Review from '../models/review.js';
import User from '../models/user.js';

const router = express.Router();

router.post('/', async (req, res) => {
  const { userID } = req.body;
  try {
    const userInfo = await User.findById(userID).populate('places');
    const list = userInfo.places;

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
  const place = await Place.findById(req.params.id);
  const reviews = await place.getReviews();

  res.json(reviews);
});

router.post('/:id/reviews', async (req, res) => {
  const { review, pecularities, userId } = req.body;

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

router.patch('/:id/share', async (req, res) => {
  const { username } = req.body;
  const { id } = req.params;
  try {
    const user = await User.findOne({ username });
    const result = user.places.find((item) => item == id);
    if (result) {
      return res
        .status(400)
        .json({ message: 'Пользователю уже доступно данное заведение' });
    }
    user.places.push(id);
    await user.save();
    res
      .status(200)
      .json({ message: 'Теперь это заведение доступно вашему другу' });
  } catch (error) {
    res
      .status(400)
      .json({ message: 'Пользователя с таким username не существует' });
  }
});
router.post('/:id/ratings', async (req, res) => {
  const { stars } = req.body;

  const place = await Place.findById(req.params.id);
  place.votesSum = place.votesSum + stars;
  place.votesNumber = place.votesNumber + 1;
  place.rating = (place.votesSum / place.votesNumber).toFixed(2);
  await place.save();

  res.status(200).json({ rating: place.rating, id: place._id });
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
      workingHours,
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
  console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>..');
  const { latitude, longitude } = req.body;

  const fixLat = latitude.toFixed(6);
  const minLat = Number((+fixLat - 0.01).toFixed(6));
  const maxLat = Number((+fixLat + 0.01).toFixed(6));

  const fixLong = longitude.toFixed(6);
  const minLong = Number((+fixLong - 0.01).toFixed(6));
  const maxLong = Number((+fixLong + 0.01).toFixed(6));

  if (req.body) {
    const place = await Place.find({
      latitude: {
        $gte: minLat,
        $lte: maxLat,
      },
      longitude: {
        $gte: minLong,
        $lte: maxLong,
      },
    });
    console.log(place);

    //   if(place.length === 1){

    //     res.sendStatus(200)
    //   }
    // } else{
    //   res.send('Не можем точно определить ваше местоположение')
  }

  res.send('ответ по ручке checkPlace').end();
});

export default router;
