import mongoose from 'mongoose';
import Place from './models/place.js';
import dotenv from "dotenv";

dotenv.config();




mongoose.connect(process.env.DB, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});


async function seedPlaces() {

  const m1 = new Place({
    placeName: 'TopForTop',
    placeUrl: 'https://topfortop.test',
    placePhotoUrl: 'https://topfortop.test/photo',
    description: 'Самое крутое место на местности',
    info: {
      address: 'Всегда рядом',
      tel: '111-11-11',
      workingHours: 'от заказта и до рассвета без перерывов'
    },
    rating: 55,
    review: [{visitor222: 'ОГОНЬ!!!'}, {visitor333: 'взорвал танцпол'}],
    visitors: 505050,
    geometry: [[55.111111, 37.222222]]
  });

  const m2 = new Place({
    placeName: 'SecretCafe',
    placeUrl: 'https://secrestcafe.test',
    placePhotoUrl: 'https://secrestcafe.test/photo',
    description: 'Это секретное место для нормальных типов',
    info: {
      address: 'Площадь Ильича',
      tel: '777-77-77',
      workingHours: 'от заказта и до рассвета'
    },
    rating: 5,
    review: [{visitor777: 'норм заведение'}, {visitor111: 'дешовое бухло'}],
    visitors: 50,
    geometry: [[55.666666, 37.555555]]
  });

  
   const placeArr = [m2, m1];
   await Place.insertMany(placeArr);
}
seedPlaces();
