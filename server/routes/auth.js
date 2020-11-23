import express from 'express';
import User from '../models/user.js';
import bcrypt from 'bcrypt';

const router = express.Router();

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
    });
    await newUser.save();
    const againNewUser = await User.findOne({ email: req.body.email });
    res.json({ exist: false, done: true, userid: againNewUser.id });
  }
});

router.post('/signin', async (req, res) => {
  if (req.body.email && req.body.password) {
    const UserByEmail = await User.findOne({ email: req.body.email });
    if (UserByEmail) {
      const userPassword = UserByEmail.password;
      if (
        UserByEmail.email == req.body.email &&
        (await bcrypt.compare(req.body.password, userPassword))
      ) {
        res.json({ auth: true, userid: UserByEmail.id });
      } else {
        res.json({ auth: false });
      }
    } else {
      res.json({ auth: false })
    }

  } else {
    res.json({ auth: false })
  }
});

export default router;
