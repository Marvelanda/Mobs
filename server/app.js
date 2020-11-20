import express from 'express';
import cors from 'cors';
import mongoose  from "mongoose";
import connectMongo from 'connect-mongo';
import mainRouter from './routes/main.js';
import authRouter from './routes/auth.js';
import listRouter from './routes/placesList.js';
import dotenv from "dotenv";

dotenv.config();

mongoose.connect(process.env.DB, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});



const app = express();
app.use(cors());
app.use(express.urlencoded({
  extended: true,
}));
app.use(express.json());

app.use('/', mainRouter);
app.use('/auth', authRouter);
app.use('/list', listRouter);


app.listen(process.env.port ?? 8080);
