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

function MainPage() {
  const dispatch = useDispatch();

  const message = useSelector((state) => state.places.message)

  const user = useSelector((state) => state.auth.status);
  const fivePlaces = useSelector((state) => state.fivePlaces.fivePlaces);

  useEffect(() => {
    dispatch(getFivePlacesSaga());
  }, []);

  const [isOpen, setIsOpen] = useState(false);
  const [modalClass, setClass] = useState('');
  const [modalInfo, setModalInfo] = useState({});

  const history = useHistory();

  const onClosePlaceMark = () => {
    setClass('animate__animated animate__rollOut');
    setTimeout(() => setIsOpen(false), 500);
  };

  const onOpenPlaceMark = (el) => {
    setClass('animate__animated animate__rollIn');
    setIsOpen(true);
    setModalInfo(el);
    (() => console.log(modalInfo.info?.workingHours))();
  };

  const onOpenPlaceMessage = () => {
    setClass('animate__animated animate__rollIn');
    setIsOpen(true);
  }

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
            <Modal open={isOpen} onClose={onClosePlaceMark}>
              {user ? (
                <div className={modalClass}>
                  <h2>{modalInfo.placeName}</h2>
                  <p className={style.description}>Часы работы:</p>
                  <p className={style.description}>
                    {modalInfo.info?.workingHours}
                  </p>
                  <img src={modalInfo.placePhotoUrl} alt='foto' width='250px' />
                </div>
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
