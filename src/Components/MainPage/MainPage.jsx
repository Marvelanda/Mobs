import { useState, useEffect } from 'react';
import { YMaps, Map, Placemark, ZoomControl } from 'react-yandex-maps';
import mainCoin from '../../images/mapIcons/mainCoin.gif';
import mainQuestion from '../../images/mapIcons/brightQuestion.gif';
import style from './style.module.css';
import Modal from './Modal';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getFivePlacesSaga } from '../../redux/features/Places/fivePlacesSlice';
import { Link } from 'react-router-dom';
import {
  checkPlaceOpenModal,
  openPlaceMark,
  setModalClass,
  setModalPlaceMarkInfo,
} from '../../redux/features/Places/placeSlice';

function MainPage() {
  const dispatch = useDispatch();

  const checkPlaceModalIsOpened = useSelector(
    (state) => state.places.checkPlaceModalOpened
  );

  const message = useSelector((state) => state.places.message);

  const user = useSelector((state) => state.auth.status);
  const fivePlaces = useSelector((state) => state.fivePlaces.fivePlaces);

  useEffect(() => {
    dispatch(getFivePlacesSaga());
  }, [user]);

  const isOpenPlaceMark = useSelector((state) => state.places.isOpenPlaceMark);
  const modalClass = useSelector((state) => state.places.modalClass);
  const modalPlaceMarkInfo = useSelector(
    (state) => state.places.modalPlaceMarkInfo
  );
  console.log('HEY', modalPlaceMarkInfo);
  const onClosePlaceMark = () => {
    dispatch(setModalClass('animate__animated animate__rollOut'));
    setTimeout(() => dispatch(openPlaceMark(false)), 500);
  };

  const onOpenPlaceMark = (el) => {
    dispatch(setModalClass('animate__animated animate__rollIn'));
    dispatch(openPlaceMark(true));
    dispatch(setModalPlaceMarkInfo(el));
  };

  const onOpenPlaceMessage = () => {
    dispatch(setModalClass('animate__animated animate__rollIn'));
    dispatch(openPlaceMark(true));
  };

  const onCloseCheckUserPlace = () => {
    dispatch(setModalClass('animate__animated animate__rollOut'));
    setTimeout(() => dispatch(checkPlaceOpenModal(false)), 500);
  };

  return (
    <YMaps>
      <div className={style.map}>
        <div className={`${style.map}`}>
          <Map
            className={`${style.map} ${style.myMaps} `}
            defaultState={{
              center: [55.75222, 37.61556],
              zoom: 11,
              behaviors: [
                'drag',
                'dblClickZoom',
                'rightMouseButtonMagnifier',
                'multiTouch',
              ],
            }}
          >
            <Modal open={isOpenPlaceMark} onClose={onClosePlaceMark}>
              {user ? (
                modalPlaceMarkInfo && (
                  <div className={modalClass}>
                    <h2>{modalPlaceMarkInfo.placeName}</h2>
                    <p className={style.description}>Часы работы:</p>
                    <p className={style.description}>
                      {modalPlaceMarkInfo.info?.workingHours}
                    </p>
                    <p className={style.description}>Aдрес:</p>
                    <p className={style.description}>
                      {modalPlaceMarkInfo.info?.address}
                    </p>
                    <Link to={`/places/${modalPlaceMarkInfo._id}`}>
                      <p>Подробнее</p>
                    </Link>
                    {modalPlaceMarkInfo.placePhotoUrl && (
                      <img
                        src={modalPlaceMarkInfo.placePhotoUrl[0]}
                        alt='foto'
                        width='400px'
                        height='267px'
                      />
                    )}
                  </div>
                )
              ) : (
                <div className={modalClass}>
                  <h2>
                    <Link to='/signin'>Войдите</Link>
                  </h2>
                  <h2>или</h2>
                  <h2>
                    <Link to='/signup'> зарегистрируйтесь</Link>
                  </h2>
                </div>
              )}
            </Modal>

            {/* <Modal open={checkPlaceModalIsOpened} onClose={onCloseCheckUserPlace}>
              {
                <div className={modalClass}>
                <h2>{message}</h2>
                </div>
              }
            </Modal> */}

            <ZoomControl options={{ float: 'right' }} />

            {fivePlaces.map((el, i) => (
              <Placemark
                className='placeMark'
                onClick={() => onOpenPlaceMark(el)}
                key={i}
                geometry={el.geometry}
                options={{
                  iconLayout: 'default#image',
                  iconImageHref: localStorage.length ? mainCoin : mainQuestion,
                  iconImageSize: [96, 90],
                  iconImageOffset: [-5, -38],
                }}
              />
            ))}
          </Map>
        </div>
      </div>
    </YMaps>
  );
}

export default MainPage;
