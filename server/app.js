// dotenv.config();

import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import connectMongo from 'connect-mongo';
import mainRouter from './routes/main.js';
import authRouter from './routes/auth.js';
import placesRouter from './routes/placesList.js';
// import session from 'express-session';
// import sessionFileStore from 'session-file-store';

import dotenv from 'dotenv';

dotenv.config();

mongoose.connect(process.env.DB, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const app = express();

// app.set('session cookie name', 'sid');
// const FileStore = sessionFileStore(session);
// app.use(
//   session({
//     name: app.get('session cookie name'),
//     secret: process.env.SESSION_SECRET,
//     store: new FileStore({
//       secret: process.env.SESSION_SECRET,
//     }),
//     resave: false,
//     saveUninitialized: false,
//     cookie: {
//       httpOnly: false,
//       maxAge: 7000 * 60 * 60 * 24,
//     },
//   })
// );
app.use(express.static('public'));
app.use(cors());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());

app.use('/', mainRouter);
app.use('/auth', authRouter);
app.use('/places', placesRouter);

app.listen(process.env.port ?? 8080);
