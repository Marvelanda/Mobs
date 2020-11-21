import express from 'express';
import Place from '../models/place.js';

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

router.post('/:id/reviews', async (req, res) => {
  const { review } = req.body;
  const place = await Place.findById(req.params.id);

  if (review) {
    place.review.push({
      ['Ya']: review,
    });

    await place.save();
    res.status(200).json({ author: 'Ya', review });
  }
  // try {

  //   if (list.length) {
  //     res.status(200).json(list);
  //   } else {
  //     res.sendStatus('List is empty');
  //   }
  // } catch (error) {
  //   res.sendStatus(503);
  // }
});

export default router;
