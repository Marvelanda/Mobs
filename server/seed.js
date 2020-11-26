import mongoose from 'mongoose';
import Place from './models/place.js';
import dotenv from 'dotenv';

dotenv.config();

mongoose.connect(process.env.DB, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

async function seedPlaces() {
  const m1 = new Place({
    placeName: 'Мутабор',
    placeUrl: 'https://www.instagram.com/muta.bor/',
    placePhotoUrl: ['/img/places/mut1.jpeg', '/img/places/mut2.jpeg', '/img/places/mut3.jpeg'],
    description: 'Одно из самых популярных московских арт-пространств с техно-музыкой на территории бывшего завода',
    info: {
      address: 'Шарикоподшипниковская ул., 13, с32, Москва, 115088',
      tel: 'Не указано',
      workingHours: '21:00 - 06:00',
    },
    rating: 4,
    secrecy: 1,
    review: [],
    visitors: 1,
    geometry: [55.719541, 37.68632],
    latitude: 55.719541,
    longitude: 37.68632,
  });
  const m2 = new Place({
    placeName: 'Бар Голова',
    placeUrl: 'https://www.instagram.com/golovabar/',
    placePhotoUrl: ['/img/places/gol1.jpg', '/img/places/gol2.jpg', '/img/places/gol3.jpg'],
    description: 'Уютный веселый бар с качественной выпивкой',
    info: {
      address: 'Трубная ул., 15, Москва, 127051',
      tel: 'Не указано',
      workingHours: '21:00 - 06:00',
    },
    rating: 4,
    secrecy: 2,
    review: [],
    visitors: 1,
    geometry: [55.769352, 37.624903],
    latitude: 55.769352,
    longitude: 37.624903,
  });

  const m3 = new Place({
    placeName: 'Happy end bar',
    placeUrl: 'https://www.instagram.com/happyendmoscow/',
    placePhotoUrl: ['/img/places/he.jpg', '/img/places/h3.jpg', '/img/places/h4.jpeg'],
    description: 'Нежный бар в стиле 80-ых',
    info: {
      address: 'Спиридоньевский пер., 9/1, Москва, 123001',
      tel: '8-(499)-704-69-69',
      workingHours: 'пн-вт, вс 12.00–0.00, ср-чт 12.00–3.00, пт-сб 12.00–5.00',
    },
    rating: 4,
    secrecy: 2,
    review: [],
    visitors: 1,
    geometry: [55.762424, 37.594117],
    latitude: 55.762424,
    longitude: 37.594117,
  });
  const m4 = new Place({
    placeName: 'Дом култур',
    placeUrl: 'https://www.instagram.com/dom.kultur/',
    placePhotoUrl: ['/img/places/dk1.jpg', '/img/places/dk2.jpg', '/img/places/dk3.jpg'],
    description: 'Утром еда, а вечером техно, чувачок',
    info: {
      address: 'ул. Сретенка, 25, Москва, 107045',
      tel: '+7-(495)-748-89-28',
      workingHours: 'Пн-Чт 12:00-0:00, Пт-Вс 12:00-05:00',
    },
    rating: 3,
    secrecy: 1,
    review: [],
    visitors: 1,
    geometry: [55.770851, 37.632161],
    latitude: 55.770851,
    longitude: 37.632161,
  });

  const m5 = new Place({
    placeName: 'Делай Культуру',
    placeUrl: 'https://www.instagram.com/delaikulturu/',
    placePhotoUrl: ['/img/places/dek1.jpg', '/img/places/dek2.jpg', '/img/places/dek3.jpg'],
    description: 'Идейный бар бар с неформальными културными мероприятиями',
    info: {
      address: 'Милютинский пер., 15, Москва, 101000',
      tel: 'Не указано',
      workingHours: '21:00 - 06:00',
    },
    rating: 3,
    secrecy: 2,
    review: [],
    visitors: 1,
    geometry: [55.76526, 37.631829],
    latitude: 55.719541,
    longitude: 37.631829,
  });
  const m6 = new Place({
    placeName: 'Зинзивер',
    placeUrl: 'https://www.instagram.com/zin.ziver/',
    placePhotoUrl: ['/img/places/zz1.jpg', '/img/places/zz2.jpeg', '/img/places/zz3.jpg'],
    description: 'Рюмочная на Покровке с нестандартными настойками и «уголком мизантропа»',
    info: {
      address: 'Покровский б-р, 2/14, Москва, 101000',
      tel: 'Не указано',
      workingHours: 'пн. — чт.: 14:00–02:00 пт. — сб.: 14:00–04:00; вс.: 14:00–02:00',
    },
    rating: 4,
    secrecy: 1,
    review: [],
    visitors: 1,
    geometry: [55.758889, 37.645384],
    latitude: 55.758889,
    longitude: 37.645384,
  });

  const m7 = new Place({
    placeName: 'Ровесник бар',
    placeUrl: 'https://www.instagram.com/rovesnik.bar/',
    placePhotoUrl: ['/img/places/br1.jpg', '/img/places/br2.jpg', '/img/places/br3.jpg'],
    description: 'Демократичный бар с хорошей музыкой',
    info: {
      address: 'ул. Палиха, 14/33 строение 1 Москва, 127055',
      tel: '+7-(495)-032-17-00',
      workingHours: '09:00-01:00',
    },
    rating: 4,
    secrecy: 1,
    review: [],
    visitors: 1,
    geometry: [55.784592, 37.600783],
    latitude: 55.784592,
    longitude: 37.600783,
  });

  const m8 = new Place({
    placeName: 'Южная Рюмочная',
    placeUrl: 'https://www.instagram.com/yuzhnaya.rumka/',
    placePhotoUrl: ['/img/places/ur.jpg', '/img/places/ur2.jpg', '/img/places/ur3.jpg'],
    description: 'Люксовая и лаунжевая версия Зинзивера ',
    info: {
      address: 'ул. Большая Татарская, 5 Москва, 115184',
      tel: '+7-(925)-296-70-65',
      workingHours: 'с 19:00 до 05:00',
    },
    rating: 4,
    secrecy: 2,
    review: [],
    visitors: 1,
    geometry: [55.742453, 37.631406],
    latitude: 55.742453,
    longitude: 37.631406,
  });


  const m9 = new Place({
    placeName: 'Барка',
    placeUrl: 'https://www.instagram.com/rumka.barka/',
    placePhotoUrl: ['/img/places/brk1.jpg', '/img/places/brk2.jpg', '/img/places/brk3.jpg'],
    description: 'Зеркальная рюмочная с демократичными ценами',
    info: {
      address: 'ул. Ильинка, 4 Москва, 109012',
      tel: '+7-(926)-402-52-68',
      workingHours: '12:00-02:00',
    },
    rating: 4,
    secrecy: 2,
    review: [],
    visitors: 1,
    geometry: [55.753625, 37.625873],
    latitude: 55.753625,
    longitude: 37.625873,
  });

  const m11 = new Place({
    placeName: 'Фудкорт Смена',
    placeUrl: 'https://www.instagram.com/smena.foodcourt/',
    placePhotoUrl:
      ['/img/places/smn1.jpg', '/img/places/smn2.jpg', '/img/places/smn3.jpg'],
    description: 'На любой вкус',
    info: {
      address: 'Товарищеский пер., 4 стр. 5, Москва, 109004',
      tel: '+7-(977)-664-04-02',
      workingHours: 'Ежедневно 11:00-22:00',
    },
    rating: 3,
    secrecy: 1,
    review: [],
    visitors: 1,
    geometry: [55.741526, 37.659973],
    latitude: 55.741526,
    longitude: 37.659973,
  });


  const m12 = new Place({
    placeName: 'Eggselent',
    placeUrl: 'https://www.instagram.com/eggsellent.ru/',
    placePhotoUrl:
      ['/img/places/egg1.jpg', '/img/places/egg2.jpg', '/img/places/egg3.jpg'],
    description: 'Вкусные завтраки, место встречи для друзей и семьи с простой и вкусной едой.',
    info: {
      address: 'Большая Садовая ул., 5 корпус 1, Москва, 125047',
      tel: 'Не указано',
      workingHours: 'Ежедневно 08:00-17:00',
    },
    rating: 4,
    secrecy: 1,
    review: [],
    visitors: 1,
    geometry: [55.769104, 37.591701],
    latitude: 55.769104,
    longitude: 37.591701,
  });

  const m13 = new Place({
    placeName: 'Тото',
    placeUrl: 'https://www.instagram.com/toto.moscow/',
    placePhotoUrl:
      ['/img/places/tt1.jpg', '/img/places/tt2.jpg', '/img/places/tt3.jpg'],
    description: 'wine • coffee • food',
    info: {
      address: 'пер. Столешников, 7 строение 3 Москва, 107031',
      tel: '+7-(915)-090-33-29',
      workingHours: 'Ежедневно 09:00 — 23:00',
    },
    rating: 5,
    secrecy: 3,
    review: [],
    visitors: 1,
    geometry: [55.76365, 37.613916],
    latitude: 55.76365,
    longitude: 37.613916,
  });


  const m14 = new Place({
    placeName: 'The Nest Moscow',
    placeUrl: 'https://www.instagram.com/thenest.moscow/',
    placePhotoUrl:
      ['/img/places/nst1.jpg', '/img/places/nst2.jpg', '/img/places/nst3.jpg'],
    description: 'Люксовый коктейльный бар в центре Москвы',
    info: {
      address: 'Сретенский б-р, 1, Москва, 107045',
      tel: '8-(916)-158-69-44',
      workingHours: 'Ежедневно 19:00 — 02:00',
    },
    rating: 4,
    secrecy: 3,
    review: [],
    visitors: 1,
    geometry: [55.766947, 37.632404],
    latitude: 55.766947,
    longitude: 37.632404,
  });


  const m15 = new Place({
    placeName: '«САЛЮТ» вело-кафе',
    placeUrl: 'https://www.instagram.com/salutecoffee/',
    placePhotoUrl:
      ['/img/places/sal1.jpg', '/img/places/sal2.jpg', '/img/places/sal3.jpg'],
    description: 'Вкусные завтраки целый дент',
    info: {
      address: 'Страстной б-р, 12 строение 5 Москва, 125009',
      tel: 'Не указан',
      workingHours: 'Ежедневно 11:00-22:00',
    },
    rating: 4,
    secrecy: 2,
    review: [],
    visitors: 1,
    geometry: [55.766942, 37.612506],
    latitude: 55.766942,
    longitude: 37.612506,
  });


  const m16 = new Place({
    placeName: 'Cтарик и Море',
    placeUrl: 'https://www.instagram.com/starikmore/',
    placePhotoUrl:
      ['/img/places/sim1.jpg', '/img/places/sim2.jpg', '/img/places/sim3.jpeg'],
    description: 'Демократичные цены на морепродукты и вино на любой вкус',
    info: {
      address: 'Чистопрудный бул., 12А, Москва, 101000',
      tel: '8-(963)-652-32-61',
      workingHours: 'Ежедневно 11:00 - 23:00',
    },
    rating: 3,
    secrecy: 1,
    review: [],
    visitors: 1,
    geometry: [55.760499, 37.643695],
    latitude: 55.760499,
    longitude: 37.643695,
  });



  const m17 = new Place({
    placeName: 'Пицца 22 см',
    placeUrl: 'https://www.instagram.com/pizza22msk/',
    placePhotoUrl:
      ['/img/places/22p1.jpg', '/img/places/22p2.jpeg', '/img/places/22p3.jpg'],
    description: 'Неаполитанская пицца в центре Москвы',
    info: {
      address: 'ул. Солянка, 1/2 строение 1 Москва, 109028',
      tel: '+7-(926)-429-72-22',
      workingHours: 'Ежедневно 12.00–23.00',
    },
    rating: 4,
    secrecy: 1,
    review: [],
    visitors: 1,
    geometry: [55.753899, 37.637982],
    latitude: 55.753899,
    longitude: 37.637982,
  });

  const m18 = new Place({
    placeName: 'Pipndrop',
    placeUrl: 'https://www.instagram.com/pipndrop/',
    placePhotoUrl:
      ['/img/places/ppn1.jpg', '/img/places/ppn2.jpg', '/img/places/ppn3.jpg'],
    description: 'Вино и авторская кухня на территории Товарищества Рябовской Мануфактуры',
    info: {
      address: 'Холодильный пер., 3к1с2, Москва, 115191',
      tel: '+7-(925)-727-04-54',
      workingHours: 'Ежедневно 12:00-23:00',
    },
    rating: 3,
    secrecy: 2,
    review: [],
    visitors: 1,
    geometry: [55.709236, 37.625091],
    latitude: 55.709236,
    longitude: 37.625091,
  });



  const m19 = new Place({
    placeName: 'Underdog',
    placeUrl: 'https://www.instagram.com/underdog_moscow/',
    placePhotoUrl:
      ['/img/places/ud1.jpg', '/img/places/ud2.jpg', '/img/places/ud3.jpeg'],
    description: 'Delicious junkfood for locals',
    info: {
      address: 'ул. Маросейка, 6/8 строение 1 Москва, 101000',
      tel: '+7-(985)-420-0-228',
      workingHours: 'Ежедневно 13:00-00:00',
    },
    rating: 5,
    secrecy: 1,
    review: [],
    visitors: 1,
    geometry: [55.757501,37.635332],
    latitude: 55.757501,
    longitude: 37.635332,
  });


  const m20 = new Place({
    placeName: 'НИИ',
    placeUrl: 'https://www.instagram.com/niimoscow/',
    placePhotoUrl:
      ['/img/places/nii1.jpg', '/img/places/nii2.jpg', '/img/places/nii3.jpg'],
    description: 'Multifunctional space for cross-cultural experimentation.',
    info: {
      address: 'Наставнический пер., 13/15 строение 3, Москва, 105120',
      tel: '+7-(977)-664-04-02',
      workingHours: 'Ежедневно 11:00-22:00',
    },
    rating: 3,
    secrecy: 2,
    review: [],
    visitors: 1,
    geometry: [55.750018,37.665264],
    latitude: 55.750018,
    longitude: 37.665264,
  });


  const m21 = new Place({
    placeName: 'Veladora',
    placeUrl: 'https://www.instagram.com/veladora.moscu/',
    placePhotoUrl:
      ['/img/places/vel1.jpeg', '/img/places/vel2.jpeg', '/img/places/vel3.jpeg'],
    description: 'Мескаль, тако, коктейли и хип-хоп',
    info: {
      address: 'ул. Покровка, 2/1с1, Москва, 101000',
      tel: ' 8-(495)-357-85-48',
      workingHours: 'Ежедневно 12:00-23:00',
    },
    rating: 3,
    secrecy: 2,
    review: [],
    visitors: 1,
    geometry: [55.757992,37.639051],
    latitude: 55.757992,
    longitude: 37.639051,
  });



  const m22 = new Place({
    placeName: 'Slow Wine',
    placeUrl: 'https://www.instagram.com/slow_wine_bar/',
    placePhotoUrl:
      ['/img/places/sw1.jpg', '/img/places/sw2.jpg', '/img/places/sw3.jpg'],
    description: 'Вкусная еда и вечеринки',
    info: {
      address: 'Спартаковская пл., 16/15 строение 4 Москва, 105005',
      tel: '+7-(915)-391-70-18',
      workingHours: 'Ежедневно 11:00-22:00',
    },
    rating: 3,
    secrecy: 3,
    review: [],
    visitors: 1,
    geometry: [55.776016,37.678146],
    latitude: 55.776016,
    longitude: 37.678146,
  });



  const m23 = new Place({
    placeName: 'Ладо',
    placeUrl: 'https://www.instagram.com/ladomoscow/',
    placePhotoUrl:
      ['/img/places/lad1.jpg', '/img/places/lad2.jpg', '/img/places/lad3.jpg'],
    description: 'Бистро в старом особняке XVII века',
    info: {
      address: 'Спартаковская пл., 16/15 строение 3 Москва, 105005',
      tel: '+7-(495)-784-82-26',
      workingHours: 'пн-чт, вс 10:00-00:00 / пт-сб 10:00-02:00',
    },
    rating: 3,
    secrecy: 2,
    review: [],
    visitors: 1,
    geometry: [55.775884,37.677742],
    latitude: 55.775884,
    longitude: 37.677742,
  });



  const m24 = new Place({
    placeName: 'Casa Corona',
    placeUrl: 'https://www.instagram.com/casacorona.moscow/',
    placePhotoUrl:
      ['/img/places/сс11.jpg', '/img/places/сс2.jpg', '/img/places/сс3.jpg'],
    description: 'Летний бар на крыше универмага «Цветной»',
    info: {
      address: 'Цветной б-р, 15 стр. 1, Москва, 127051',
      tel: '+7-(905)-790-80-00',
      workingHours: 'пн-ср 10:00-22:00, чт 10:00-00:00, пт-сб 10:00-03:00, вс 11:00-22:00',
    },
    rating: 3,
    secrecy: 2,
    review: [],
    visitors: 1,
    geometry: [55.741526, 37.659973],
    latitude: 55.771145,
    longitude: 37.620177,
  });



  const m25 = new Place({
    placeName: 'Дом в котором паб',
    placeUrl: 'https://www.instagram.com/domvkotorom_pub/',
    placePhotoUrl:
      ['/img/places/dkv1.jpg', '/img/places/dvk2.jpeg', '/img/places/dvk3.jpeg'],
    description: '«Дом, в котором» - первый руин-паб в России, расположенный на улице Покровка. Находится в неочивдном месте без вывесок',
    info: {
      address: 'Товарищеский пер., 4 стр. 5, Москва, 109004',
      tel: '+7-(977)-664-04-02',
      workingHours: 'пн.,вт.,ср.,чт. с 15:00 до 24:00; пт. с 15:00 до 2:00; сб. с 16:00 до 2:00; вс. с 16:00 до 24:00',
    },
    rating: 3,
    secrecy: 2,
    review: [],
    visitors: 1,
    geometry: [55.741526, 37.659973],
    latitude: 55.741526,
    longitude: 37.659973,
  });



  const m26 = new Place({
    placeName: 'Гастромаркет Балчуг',
    placeUrl: 'https://www.instagram.com/gastromarket_balchug/?hl=ru',
    placePhotoUrl:
      ['/img/places/bal1.jpeg', '/img/places/bal2.jpg', '/img/places/bal3.jpg'],
    description: 'Общественное пространство со вкусом в центре Москвы',
    info: {
      address: 'Балчуг, 5, Москва, 115035',
      tel: '+7-(977)-994-15-52',
      workingHours: 'Ежедневно с 08.00 до 22.00 Пт-Сб и в праздники с 08.00 до 23.00',
    },
    rating: 3,
    secrecy: 2,
    review: [],
    visitors: 1,
    geometry: [55.747241,37.626142],
    latitude: 55.747241,
    longitude: 37.626142,
  });



  const m27 = new Place({
    placeName: 'Рихтер',
    placeUrl: 'https://www.instagram.com/richter.moscow/',
    placePhotoUrl:
      ['/img/places/ri1.jpg', '/img/places/ri2.jpg', '/img/places/ri3.jpg'],
    description: 'Отель, ресторан, библиотека, сад и мастерские.',
    info: {
      address: 'ул. Пятницкая, 42, Москва, 119017',
      tel: '+7-(495)-488-71-42',
      workingHours: 'Пн–Вс: 08:00 — 23:00',
    },
    rating: 3,
    secrecy: 2,
    review: [],
    visitors: 1,
    geometry: [55.737785,37.62784],
    latitude: 55.737785,
    longitude: 37.62784,
  });



  const m28 = new Place({
    placeName: 'Квартира',
    placeUrl: 'https://www.instagram.com/explore/locations/628963013/',
    placePhotoUrl:
      ['/img/places/kv1.jpg'],
    description: 'Тут все не так просто, перед посещением обязательно почитай про это заведение',
    info: {
      address: 'Рочдельская ул., 15 строение 8 Москва, 123022',
      tel: 'Не указан',
      workingHours: 'Известно только членам клуба',
    },
    rating: 5,
    secrecy: 3,
    review: [],
    visitors: 1,
    geometry: [55.756873,37.564886],
    latitude: 55.756873,
    longitude: 37.564886,
  });
  const m29 = new Place({
    placeName: 'Кабинет 3.14',
    placeUrl: 'https://www.instagram.com/kabinet_bar_3.14/',
    placePhotoUrl:
      ['/img/places/kab1.jpg', '/img/places/kab2.jpg', '/img/places/kab3.jpg'],
    description: 'Секретный коктейльный бар на Трубной улице. Попасть внутрь можно через бутик одежды Project 3.14. Одевайся элегантно, друг',
    info: {
      address: 'Трубная ул., 32 строение 3 Москва, 127051',
      tel: '+7-(929)-560-71-65',
      workingHours: 'Ср, чт, пт, сб с 18:00-23:00',
    },
    rating: 5,
    secrecy: 3,
    review: [],
    visitors: 1,
    geometry: [55.771829,37.625828],
    latitude: 55.771829,
    longitude: 37.625828,
  });
  const m30 = new Place({
    placeName: 'Neon Monkey',
    placeUrl: 'https://www.instagram.com/neonmonkeybar/',
    placePhotoUrl:
      ['/img/places/nmk1.jpg', '/img/places/nmk2.jpg', '/img/places/nmk4.jpg'],
    description: 'Неоновый демон: тайский бар «Neon Monkey» с летними коктейлями, недорогой едой и расслабляющей атмосферой.',
    info: {
      address: 'Большая Дмитровка, дом 32 с2, Москва, 107031',
      tel: '+7-(966)-135-10-63',
      workingHours: 'Вт-Чт: с 18.00 до 00.00 Чт-Сб: с 18.00 до 03.00',
    },
    rating: 4,
    secrecy: 3,
    review: [],
    visitors: 1,
    geometry: [55.765422,37.611518],
    latitude: 55.765422,
    longitude: 37.611518,
  });

 


  const placeArr = [
    // m1,
    // m2,
    // m3,
    // m4,
    // m5,
    // m6,
    // m7,
    // m8,
    // m9,
    // m11,
    // m12,
    // m13,
    // m14,
    // m15,
    // m16,
    // m17, 
    // m18,
    // m19,
    // m20,
    // m21,
    // m22,
    // m23,
    // m24,
    // m25,
    // m26,
    m27,
    m28,
    m29,
    m30
  ];
  await Place.insertMany(placeArr);
}
seedPlaces();
