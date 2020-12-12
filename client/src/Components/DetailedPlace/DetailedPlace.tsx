import style from './style.module.css';
import React, { FormEvent, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getPlacesListSaga,
  addPlaceRatingSaga,
} from '../../redux/features/Places/placeSlice';
import { getReviewsListSaga } from '../../redux/features/Places/reviewSlice';
import {
  sharePlaceSaga,
  changeShareStatus,
} from '../../redux/features/Places/sharePlaceSlice';
import { Link, useParams } from 'react-router-dom';
import Review from '../Review/Review';
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  EffectCoverflow,
} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import 'swiper/components/effect-coverflow/effect-coverflow.scss';
import StarRatingComponent from 'react-star-rating-component';
import ModalDetails from './ModalDetails';
import { RootState } from '../../redux/store';
import { IPlace, IReview } from '../../redux/types/placesTypes';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, EffectCoverflow]);

const DetailedPlace: React.FC = () => {
  const [value, setValue] = useState<string>('');
  const [stars, setStars] = useState<number>(0);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [modalClass, setClass] = useState<string>('');

  const dispatch = useDispatch();
  const { id } = useParams<{ id: string }>();

  // Для формы-делёжки с другом

  const onClose = (): void => {
    setClass('animate__animated animate__rollOut');
    setIsOpen(false);
  };

  const onOpen = (): void => {
    setClass('animate__animated animate__rollIn');
    setIsOpen(true);
  };

  const place: IPlace | undefined = useSelector(
    (state: RootState) => state.places.places
  ).find((item) => {
    return item._id === id;
  });

  const visited: string | undefined = useSelector(
    (state: RootState) => state.places.visited
  ).find((item) => {
    return item === id;
  });

  const reviews: IReview[] = useSelector(
    (state: RootState) => state.reviews.reviews
  );

  useEffect(() => {
    dispatch(getPlacesListSaga());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getReviewsListSaga(id));
  }, [dispatch, id, reviews.length]);

  // для формы-делёжки
  const submitHandler = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    dispatch(sharePlaceSaga(value.trim(), id));

    setTimeout(() => onOpen(), 200);
    dispatch(changeShareStatus(''));
    setValue('');
  };

  const starsHandler = () => {
    dispatch(addPlaceRatingSaga(id, stars));
    setStars(0);
  };

  return (
    <>
      <div className={style.section}>
        {place && (
          <>
            <div className={style.container}>
              <div className={`${style.description} ${style.blur}`}>
                <h1 className={`${style.heading}`}>{place.placeName}</h1>

                {visited ? (
                  <div className={style['rating-container']}>
                    <p className={style.rating}>Рейтинг: {place.rating} </p>
                    <div className={style.stars}>
                      <StarRatingComponent
                        name='rating'
                        starCount={5}
                        editing={true}
                        value={stars}
                        starColor={'yellow'}
                        onStarClick={(nextValue, prevValue, name) =>
                          setStars(nextValue)
                        }
                      />
                    </div>
                    <button
                      className={`${style.button}`}
                      onClick={starsHandler}
                    >
                      Поставить оценку
                    </button>
                  </div>
                ) : (
                  <div className={style['rating-container']}>
                    <p className={style.rating}>Рейтинг: {place.rating} </p>
                  </div>
                )}

                <div className={style.images}>
                  <Swiper
                    spaceBetween={25}
                    slidesPerView={3}
                    centeredSlides={true}
                    loop={true}
                    effect='coverflow'
                    coverflowEffect={{
                      rotate: 50,
                      stretch: 0,
                      depth: 80,
                      modifier: 4,
                      slideShadows: false,
                    }}
                  >
                    {place.placePhotoUrl && (
                      <>
                        <SwiperSlide>
                          <img
                            className={style.swiper}
                            src={place.placePhotoUrl[0]}
                            alt='img'
                          />
                        </SwiperSlide>
                        <SwiperSlide>
                          <img
                            className={style.swiper}
                            src={place.placePhotoUrl[1]}
                            alt='img'
                          />
                        </SwiperSlide>
                        <SwiperSlide>
                          <img
                            className={style.swiper}
                            src={place.placePhotoUrl[2]}
                            alt='img'
                          />
                        </SwiperSlide>
                      </>
                    )}
                  </Swiper>
                </div>
              </div>
              <div className={`${style.description} ${style.text}`}>
                <h3 className={style['small-headers']}>Описание:</h3>
                <p className={style.about}>{place.description}</p>
                <h3 className={style['small-headers']}>
                  Контактная информация:
                </h3>
                <p>{place.info.address}</p>
                <p>{place.info.phone}</p>
                <a href={place.placeUrl} target='_blank' rel='noreferrer'>
                  <img
                    alt='img'
                    className={style.instagram}
                    width='35px'
                    src='/img/instagram.svg'
                  />
                </a>
                <h3 className={style['small-headers']}>Часы работы:</h3>
                <p>{place.info.workingHours}</p>
                <form
                  className={style['add-friend-form']}
                  onSubmit={submitHandler}
                >
                  <input
                    type='text'
                    className={style['share-input']}
                    onChange={(e) => setValue(e.target.value)}
                    value={value}
                    placeholder='Введите username друга'
                  ></input>
                  <button className='button' type='submit'>
                    Поделиться местом
                  </button>
                </form>
              </div>

              <ModalDetails open={isOpen} onClose={onClose} />
            </div>

            <div className={`${style.container}`}>
              <div className={`${style.reviews_container}`}>
                <h2 className={`${style.review_heading} text`}>Отзывы</h2>
                {visited && (
                  <Link to={`/places/${id}/reviews`}>
                    <button className={`button ${style.margin}`}>
                      Написать отзыв
                    </button>
                  </Link>
                )}
              </div>
            </div>
            <div className={`${style.container}`}>
              <ul className={style.center}>
                {reviews.length ? (
                  reviews.map((item) => {
                    return (
                      <Review
                        key={item._id}
                        author={item.author}
                        review={item.review}
                      />
                    );
                  })
                ) : (
                  <li className={`text`}>No reviews</li>
                )}
              </ul>
            </div>
          </>
        )}
      </div>
      <div className={style['section-first-overlay']}></div>
    </>
  );
};

export default DetailedPlace;
