import express from 'express';
import Place from '../models/place.js'

const router = express.Router();

router.get('/', async (req, res) => {
  console.log('>>>>>>>>>>> Загрузка lista');
  try {
    const list = await Place.find();
    if(list.length) {
      console.log('>>>>>>>>>>> list отправлен');
      res.status(200).json(list)
    } else {
      res.sendStatus('List is empty')
    }
  } catch (error) {
    res.sendStatus(503)
  }
})

export default router;
