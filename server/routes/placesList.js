import express from 'express';
import Place from '../models/place.js';
import Review from '../models/review.js';
import User from '../models/user.js';
import Raiting from '../models/raiting.js';

const router = express.Router();

router.get('/', async (req, res) => {
  const { id } = req.session.user;
console.log(req.session.user);
  try {
    const userInfo = await User.findById(req.session.user).populate('places');
    const list = userInfo.places;

    if (list.length) {
      res.status(200).json(list);
    } else {
      res.sendStatus('List is empty');
    }
  } catch (error) {
    console.log(error);
  }
});

router.get('/:id/reviews', async (req, res) => {
  const place = await Place.findById(req.params.id);
  const reviews = await place.getReviews();

  res.json(reviews);
});

router.post('/:id/reviews', async (req, res) => {
  const { review, pecularities, id } = req.body;
  const user = await User.findById(id);
  const findReview = await user.findReview(req.params.id);

  if (findReview) {
    await Review.findOneAndDelete({ _id: findReview._id });
  } else {
    user.points += 3;
    await user.save();
  }

  if (review) {
    const newReview = new Review({
      author: id,
      placeName: req.params.id,
      review,
      pecularities,
    });
    try {
      await newReview.save();
      user.checkScore();
    } catch (err) {
      console.log(err);
    }

    res.status(200).json(newReview);
  }
});

router.patch('/:id/share', async (req, res) => {
  const { friend, user } = req.body;
  const { id } = req.params;
  const findUser = await User.findById(user);

  try {
    const usersFriend = await User.findOne({ username: friend });
    const result = usersFriend.places.find((item) => item == id);
    if (result) {
      return res
        .status(400)
        .json({ message: 'Пользователю уже доступно данное заведение' });
    }
    usersFriend.places.push(id);
    await usersFriend.save();

    findUser.points += 10;
    findUser.invitations--;
    await findUser.save();
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
  const { latitude, longitude } = req.body;

  const fixLat = latitude.toFixed(6);
  const minLat = Number((+fixLat - 0.01).toFixed(6));
  const maxLat = Number((+fixLat + 0.01).toFixed(6));

  const fixLong = longitude.toFixed(6);
  const minLong = Number((+fixLong - 0.01).toFixed(6));
  const maxLong = Number((+fixLong + 0.01).toFixed(6));

  if (req.body) {
    // Поиск мета с учетом погрешности
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

    if (place.length === 1) {
      try {
        const curUser = await User.findById(req.session.user);
        const visitedPlace = curUser.visitedPlaces.find((el) => {
          if (el) {
            return el.toString() === place[0]._id.toString();
          }
        });
        if (visitedPlace === undefined) {
          await User.findByIdAndUpdate(req.session.user, {
            $push: { visitedPlaces: place[0]._id },
          });
          res.json({ message: 'Посещение засчитано' });

          const shareNewPlaceArr = await Place.find({
            secrecy: {
              $lte: curUser.rating,
            },
          });
          const Arr1 = curUser.places.map((el) => el.toString());
          const Arr2 = shareNewPlaceArr.map((el) => el._id.toString());
          const compArr = Arr1.filter((x) => !Arr2.includes(x)).concat(
            Arr2.filter((x) => !Arr1.includes(x))
          );

          const addRandomSharePlace =
            compArr[Math.floor(Math.random() * compArr.length)];
          await User.findByIdAndUpdate(req.session.user, {
            $push: { places: addRandomSharePlace },
          }).exec();
        } else res.json({ message: 'Вы уже посещали это место' });
      } catch (error) {
        console.log(error);
      }
    }
  } else {
    res.json({ message: 'Не можем точно определить ваше местоположение' });
  }
});

export default router;
