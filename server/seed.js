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
    placeName: 'Пупочная',
    placeUrl: 'https://upochnaya.ru',
    placePhotoUrl: 'https://peterburg2.ru/uploads/20/02/25/a_1_21.jpg',
    description: 'Это секретное место для нормальных типов',
    info: {
      address: 'Площадь Ильича',
      tel: '777-77-77',
      workingHours: 'от заказта и до рассвета'
    },
    rating: 5,
    review: [{visitor777: 'норм заведение'}, {visitor111: 'дешовое бухло'}],
    visitors: 50,
    geometry:[55.684758, 37.738521]
  });

    const m2 = new Place({
    placeName: 'SimonDreams',
    placeUrl: 'https://simon.simon',
    placePhotoUrl: 'https://commondatastorage.googleapis.com/comslider/target/users/1530028052xdb4668343955a27004db2be9d18b76fc/img/180626191824130.jpg?1530030439',
    description: 'Это секретное место для нормальных типов',
    info: {
      address: 'Площадь Ильича',
      tel: '777-77-77',
      workingHours: 'от заказта и до рассвета'
    },
    rating: 5,
    review: [{visitor777: 'норм заведение'}, {visitor111: 'дешовое бухло'}],
    visitors: 50,
    geometry: [55.68, 37.5]
  });

    const m3 = new Place({
    placeName: 'бабуй_плэйс',
    placeUrl: 'https://babui.ru',
    placePhotoUrl: 'https://regions.kidsreview.ru/sites/default/files/styles/oww/public/08/09/2017-1438/tridevyatoe.jpg',
    description: 'Это секретное место для нормальных типов',
    info: {
      address: 'Площадь Ильича',
      tel: '777-77-77',
      workingHours: 'от заказта и до рассвета'
    },
    rating: 5,
    review: [{visitor777: 'норм заведение'}, {visitor111: 'дешовое бухло'}],
    visitors: 50,
    geometry: [55.833436, 37.715175]
  });

    const m4 = new Place({
    placeName: 'HumusForDima',
    placeUrl: 'https://humusfordima.il',
    placePhotoUrl: 'https://st3.restorating.ru/upload/images/2018/03/27/41d0482e04.jpg',
    description: 'Это секретное место для нормальных типов',
    info: {
      address: 'Площадь Ильича',
      tel: '777-77-77',
      workingHours: 'от заказта и до рассвета'
    },
    rating: 5,
    review: [{visitor777: 'норм заведение'}, {visitor111: 'дешовое бухло'}],
    visitors: 50,
    geometry: [55.787086, 37.529789]
  });

    const m5 = new Place({
    placeName: 'MadMAx',
    placeUrl: 'https://madmax.ch',
    placePhotoUrl: 'https://cafe-nn.ru/files/kontent/otlichie/4125.jpg',
    description: 'Это секретное место для нормальных типов',
    info: {
      address: 'Площадь Ильича',
      tel: '777-77-77',
      workingHours: 'от заказта и до рассвета'
    },
    rating: 5,
    review: [{visitor777: 'норм заведение'}, {visitor111: 'дешовое бухло'}],
    visitors: 50,
    geometry: [55.80, 37.40]
  });

    const m6 = new Place({
    placeName: 'Marvelanda',
    placeUrl: 'https://marvelanda.ru',
    placePhotoUrl: 'https://api.parkseason.ru/images/styles/690_auto/bd/b5/51c588232772f75eee96d6e9e6616a5c575aa85098aa8657507145.jpg',
    description: 'Это секретное место для нормальных типов',
    info: {
      address: 'Площадь Ильича',
      tel: '777-77-77',
      workingHours: 'от заказта и до рассвета'
    },
    rating: 5,
    review: [{visitor777: 'норм заведение'}, {visitor111: 'дешовое бухло'}],
    visitors: 50,
    geometry: [55.70, 37.40]
  });

    const m7 = new Place({
    placeName: 'Daynusic',
    placeUrl: 'https://daynusic.denchick',
    placePhotoUrl: 'https://roomester.ru/wp-content/uploads/2018/04/dizajn-kafe.jpg',
    description: 'Это секретное место для нормальных типов',
    info: {
      address: 'Площадь Ильича',
      tel: '777-77-77',
      workingHours: 'от заказта и до рассвета'
    },
    rating: 5,
    review: [{visitor777: 'норм заведение'}, {visitor111: 'дешовое бухло'}],
    visitors: 50,
    geometry: [55.81, 37.65]
  });

    const m8 = new Place({
    placeName: 'IgorGodOfVerstka',
    placeUrl: 'https://igorgodofverstka.com',
    placePhotoUrl: 'https://rosakhutor.com/upload/iblock/6b3/6b3184c36d18fc1beaabcd63d97b5d44.jpg',
    description: 'Это секретное место для нормальных типов',
    info: {
      address: 'Площадь Ильича',
      tel: '777-77-77',
      workingHours: 'от заказта и до рассвета'
    },
    rating: 5,
    review: [{visitor777: 'норм заведение'}, {visitor111: 'дешовое бухло'}],
    visitors: 50,
    geometry: [55.73, 37.65]
  });

    const m9 = new Place({
    placeName: 'LovelyTapac',
    placeUrl: 'https://lovelytapac.ru',
    placePhotoUrl: 'https://piteronline.tv/images/2017/09/18/11_large.jpg',
    description: 'Это секретное место для нормальных типов',
    info: {
      address: 'Площадь Ильича',
      tel: '777-77-77',
      workingHours: 'от заказта и до рассвета'
    },
    rating: 5,
    review: [{visitor777: 'норм заведение'}, {visitor111: 'дешовое бухло'}],
    visitors: 50,
    geometry: [55.81, 37.75]
  });

    const m10 = new Place({
    placeName: 'GeorgeBBQ',
    placeUrl: 'https://georgebbq.ru',
    placePhotoUrl: 'https://www.shopsart.ru/wp-content/uploads/2019/02/mebel-dlya-kafe-barov-restoranov-0003.jpg',
    description: 'Это секретное место для нормальных типов',
    info: {
      address: 'Площадь Ильича',
      tel: '777-77-77',
      workingHours: 'от заказта и до рассвета'
    },
    rating: 5,
    review: [{visitor777: 'норм заведение'}, {visitor111: 'дешовое бухло'}],
    visitors: 50,
    geometry: [55.76, 37.64]
  });

    const m11 = new Place({
    placeName: 'SalmanTandir',
    placeUrl: 'https://salmantandir.ru',
    placePhotoUrl: 'https://www.regberry.ru/sites/default/files/content/images/node/skolko-stoit-otkryt-kafe-s-nulya.png',
    description: 'Это секретное место для нормальных типов',
    info: {
      address: 'Площадь Ильича',
      tel: '777-77-77',
      workingHours: 'от заказта и до рассвета'
    },
    rating: 5,
    review: [{visitor777: 'норм заведение'}, {visitor111: 'дешовое бухло'}],
    visitors: 50,
    geometry: [55.8, 37.8]
  });

    const m12 = new Place({
    placeName: 'Vitya\'s vape room',
    placeUrl: 'https://vvr.ru',
    placePhotoUrl: 'https://gcdn.tomesto.ru/img/place/000/021/367/kafe-ermak-na-prospekte-imeni-gazety-krasnoyarskiy-rabochiy_6c249_full-111585.jpg',
    description: 'Это секретное место для нормальных типов',
    info: {
      address: 'Площадь Ильича',
      tel: '777-77-77',
      workingHours: 'от заказта и до рассвета'
    },
    rating: 5,
    review: [{visitor777: 'норм заведение'}, {visitor111: 'дешовое бухло'}],
    visitors: 50,
    geometry: [55.847, 37.6]
  });

    const m13 = new Place({
    placeName: 'ElbrusBar',
    placeUrl: 'https://eb.eb',
    placePhotoUrl: 'https://image2.yell.ru/imager/ODUwODBiODBmNWQyNmNhYThmM/480x240/responses/7/6/0/r_karaoke-klub-7-sky-12053137-i1g86mxzev_1598637768.jpg',
    description: 'Это секретное место для нормальных типов',
    info: {
      address: 'Площадь Ильича',
      tel: '777-77-77',
      workingHours: 'от заказта и до рассвета'
    },
    rating: 5,
    review: [{visitor777: 'норм заведение'}, {visitor111: 'дешовое бухло'}],
    visitors: 50,
    geometry: [55.751574, 37.573856]
  });

    const m14 = new Place({
    placeName: 'SudokuHaters',
    placeUrl: 'https://sh.com',
    placePhotoUrl: 'https://www.container-logistic.ru/files/images/kafe2.jpg',
    description: 'Это секретное место для нормальных типов',
    info: {
      address: 'Площадь Ильича',
      tel: '777-77-77',
      workingHours: 'от заказта и до рассвета'
    },
    rating: 5,
    review: [{visitor777: 'норм заведение'}, {visitor111: 'дешовое бухло'}],
    visitors: 50,
    geometry: [55.661574, 37.573856]
  });

    const m15 = new Place({
    placeName: 'Kicker&&Beer',
    placeUrl: 'https://kandb.com',
    placePhotoUrl: 'https://media-cdn.tripadvisor.com/media/photo-s/09/48/05/11/caption.jpg',
    description: 'Это секретное место для нормальных типов',
    info: {
      address: 'Площадь Ильича',
      tel: '777-77-77',
      workingHours: 'от заказта и до рассвета'
    },
    rating: 5,
    review: [{visitor777: 'норм заведение'}, {visitor111: 'дешовое бухло'}],
    visitors: 50,
    geometry: [55.73, 37.75]
  });
   const placeArr = [m1, m2, m3, m4, m5, m6, m7, m8, m9, m10, m11, m12, m13, m14, m15];
   await Place.insertMany(placeArr);
}
seedPlaces();
