import { useState, useEffect } from 'react';
import { YMaps, Map, Placemark, ZoomControl } from 'react-yandex-maps';
import style from './style.module.css';
import { getRandomFive, myArray } from '../../helpers/randomFive';
import Modal from './Modal';
import { useHistory } from 'react-router-dom';
import image from '../../img/5003977.jpeg';
import { useDispatch, useSelector } from 'react-redux';
import {
  getFivePlacesSaga,
} from '../../redux/features/Places/fivePlacesSlice';
import { question, coin } from './placemarks'

// const newFive = getRandomFive(myArray);

function MainPage() {
  
  const dispatch = useDispatch();

  const fivePlaces = useSelector(state => state.fivePlacesArray);
  console.log('>>>>>>>>>>>', fivePlaces);

  useEffect(() => {
    console.log('!!!!!!!!!!!!1');
    dispatch(getFivePlacesSaga())
  }, [])

  const [isOpen, setIsOpen] = useState(false);
  const history = useHistory();

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
                'CtrlZoom',
                'rightMouseButtonMagnifier',
                'multiTouch',
              ],
            }}
          >
            <Modal open={isOpen}>
              <h2>Coyote Ugly</h2>

              <p className={style.description}>Часы работы:</p>
              <p className={style.description}>С 19:00 до 04:00</p>
              <img src={image} alt='foto' width='250px' />
            </Modal>

            <ZoomControl options={{ float: 'right' }} />

            {fivePlaces.map((el, i) => (
              <Placemark
                className='placeMark'
                onClick={() => history.push('/signin')}
                onMouseEnter={() => setIsOpen(() => !isOpen)}
                onMouseLeave={() => setIsOpen(() => !isOpen)}
                key={i}
                geometry={el}
                options={{
                  iconLayout: 'default#image',
                  iconImageHref: question,
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

export default MainPage
