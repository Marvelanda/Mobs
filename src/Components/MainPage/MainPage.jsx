import { useState } from 'react';
import { YMaps, Map, Placemark, ZoomControl } from 'react-yandex-maps';
import style from './style.module.css';
import { getRandomFive, myArray } from '../../helpers/randomFive';
import Modal from './Modal';
import { useHistory } from 'react-router-dom';
import image from '../../img/5003977.jpeg';

const newFive = getRandomFive(myArray);

function MainPage() {
  const [isOpen, setIsOpen] = useState(false);
  const history = useHistory();

  const question =
    'https://psv4.userapi.com/c856532/u17278978/docs/d1/ca429eca48f4/new_qsymb.gif?extra=Qig3hBJor4aZYSnBga7yMDgjgyVEwkLHZVlt7CNaRHNFrDfsOcvhIDGsG3-D6RdVlSxALtlNWFXrYWY2N-puzrktvNnrST6lfDvWcJjr0Ostb7D9Gr1vBnXpTVlZLeA6usdwPzkTBjk5uzSInFRYIg';
  const coin =
    'https://psv4.userapi.com/c856224/u17278978/docs/d15/a0d04a1fa2d9/ezgif_com-gif-maker_1.gif?extra=tSnENC1OUQQ6tfX7CS-qFADOz_GQNg-2my74cpBIGk8Tpt-gTltXkAYAwoMPhYz7BFR0rzIqQJXY_Ig9t8NWo8IA4OxJqrKhop8E3DGTV_AF_3BuUvhib75gohD-HQYP-3Rpv71qkWwq_yz5ZrrXMg';

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

            {newFive.map((el, i) => (
              <Placemark
                className='placeMark'
                onClick={() => history.push('/signin')}
                onMouseEnter={() => setIsOpen(() => !isOpen)}
                onMouseLeave={() => setIsOpen(() => !isOpen)}
                key={i}
                geometry={el}
                options={{
                  iconLayout: 'default#image',
                  iconImageHref: coin,
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
