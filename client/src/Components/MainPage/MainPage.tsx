import React from 'react';
import { useEffect } from 'react';
import { YMaps, Map, Placemark, ZoomControl } from 'react-yandex-maps';
import firstCoin from '../../images/mapIcons/bronzeCoin.gif';
import secondCoin from '../../images/mapIcons/silverCoin.gif';
import thirdCoin from '../../images/mapIcons/mainCoin.gif';
import mainQuestion from '../../images/mapIcons/brightQuestion.gif';
import style from './style.module.css';
import Modal from './Modal';
import { useDispatch, useSelector } from 'react-redux';
import { getFivePlacesSaga } from '../../redux/features/Places/fivePlacesSlice';
import {
  openPlaceMark,
  setModalClass,
  setModalPlaceMarkInfo,
} from '../../redux/features/Places/placeSlice';
import { RootState } from '../../redux/store';
import { ModalState } from '../../redux/types/placesTypes';

const MainPage: React.FC = () => {
  const dispatch = useDispatch();

  const user: boolean = useSelector((state: RootState) => state.auth.status);
  const fivePlaces: ModalState[] = useSelector(
    (state: RootState) => state.fivePlaces.fivePlaces
  );

  useEffect(() => {
    dispatch(getFivePlacesSaga());
  }, [dispatch, user]);

  const isOpenPlaceMark: boolean = useSelector(
    (state: RootState) => state.places.isOpenPlaceMark
  );
  const modalPlaceMarkInfo: ModalState = useSelector(
    (state: RootState) => state.places.modalPlaceMarkInfo
  );

  const onClosePlaceMark = (): void => {
    dispatch(setModalClass('animate__animated animate__rollOut'));
    setTimeout(() => dispatch(openPlaceMark(false)), 500);
  };

  const onOpenPlaceMark = (el: ModalState): void => {
    dispatch(setModalClass('animate__animated animate__rollIn'));
    dispatch(openPlaceMark(true));
    dispatch(setModalPlaceMarkInfo(el));
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
            <Modal
              open={isOpenPlaceMark}
              onClose={onClosePlaceMark}
              info={modalPlaceMarkInfo}
            />
            <ZoomControl options={{ float: 'right' }} />

            {fivePlaces.map((el: ModalState, i) => (
              <Placemark
                className='placeMark'
                onClick={() => onOpenPlaceMark(el)}
                key={i}
                geometry={el.geometry}
                options={{
                  iconLayout: 'default#image',
                  iconImageHref: localStorage.length
                    ? el.secrecy === 1
                      ? firstCoin
                      : el.secrecy === 2
                      ? secondCoin
                      : thirdCoin
                    : mainQuestion,
                  iconImageSize: [72, 67.5],
                  iconImageOffset: [-5, -38],
                }}
              />
            ))}
          </Map>
        </div>
      </div>
    </YMaps>
  );
};

export default MainPage;
