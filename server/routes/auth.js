import express from 'express';
import User from '../models/user.js';
import Place from '../models/place.js';
import bcrypt from 'bcrypt';
import { getRandomFive } from '../helpers/randomFive.js';

const router = express.Router();

const serializeUser = (user) => {
  return {
    username: user.username,
    id: user._id,
    email: user.email,
  };
};

router.post('/signup', async (req, res) => {
  const UserByUsername = await User.findOne({ username: req.body.username });
  const UserByEmail = await User.findOne({ email: req.body.email });

  if (UserByUsername || UserByEmail) {
    
    res.json({ exist: true, done: false });
  } else {
    let newUser = new User({
      email: req.body.email,
      username: req.body.username,
      password: await bcrypt.hash(req.body.password, 10),
      places: req.body.fivePlaces,
    });
    await newUser.save();

    // req.session.user = serializeUser(newUser);
    const againNewUser = await User.findOne({ email: req.body.email });
    res.json({ exist: false, done: true, userid: againNewUser.id });
  }
});

router.post('/signin', async (req, res) => {
  if (req.body.email && req.body.password) {
    const UserByEmail = await User.findOne({ email: req.body.email });
    if (UserByEmail) {
      const userPassword = UserByEmail.password;
      const validPass = await bcrypt.compare(req.body.password, userPassword);
      if (validPass) {

        // req.session.user = UserByEmail._id;

        res.json({ status: true, userid: UserByEmail.id });
      } else {
        res.json({ error: 'Неправильный логин или пароль!', status: false });
      }
    } else {
      res.json({
        error: 'Пользователь не найден. Пожалуйста, зарегистрируйтесь!',
        status: false,
      });
    }
  } else {
    res.json({ error: 'Пожалуйста, заполните все поля!', status: false });
  }
});

export default router;
