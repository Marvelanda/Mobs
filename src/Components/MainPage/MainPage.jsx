import { useState } from 'react';
import { YMaps, Map, Placemark, ZoomControl } from 'react-yandex-maps';
import style from './style.module.css';
import Modal from './Modal';
import { useHistory } from 'react-router-dom';
import image from '../../img/5003977.jpeg';

function MainPage() {
  const [isOpen, setIsOpen] = useState(false);
  const [isPushed, setIsPushed] = useState(false);
  const history = useHistory();
  return (
    <>
      <YMaps>
        <div
          onMouseDown={() => setIsPushed((prev) => !prev)}
          className={`${style.map}`}
        >
          <Map
            className={`${style.map} ${style.myMaps} `}
            defaultState={{
              center: [55.684758, 37.738521],
              zoom: 12,
              behaviors: [
                'drag',
                'dblClickZoom',
                'rightMouseButtonMagnifier',
                'multiTouch',
              ],
            }}
            // modules={['geoObject.addon.balloon']}
          >
            <ZoomControl options={{ float: 'left' }} />
            <Modal open={isOpen}>
              <h2>Coyote Ugly</h2>

              <p className={style.description}>Часы работы:</p>
              <p className={style.description}>С 19:00 до 04:00</p>
              <img src={image} alt='foto' width='250px' />
            </Modal>
            <Placemark
              onClick={() => history.push('/signin')}
              onMouseEnter={() => setIsOpen(() => !isOpen)}
              onMouseLeave={() => setIsOpen(() => !isOpen)}
              // properties={{
              //   balloonContentHeader: 'Coyote Ugly',
              //   balloonContentBody: [
              //     '<div className=`background`>',
              //     'Часы работы:</br>',
              //     ' С 19:00 до 04:00</div>',
              //   ].join(' '),
              //   balloonContentLayout: BalloonContentLayout(
              //     ymaps.templateLayoutFactory,
              //     <Balloon />
              //   ),
              // }}
              geometry={[55.684758, 37.738521]}
              options={{
                iconLayout: 'default#image',
                iconImageHref:
                  'https://psv4.userapi.com/c856424/u17278978/docs/d10/aa7b8c36443d/qsymb-unscreen.gif?extra=xp4TcXt4hEbEHagyQRgBy9EbMbpdTWLszKUCVJQ1C1_kTyfQX3vGMvrhQ9LFJCQLaHpwf3zl3UZOxnbIPWv8QkWLZ0HjEe-djBNBRSsLbcPkpVLb_0onm63CXTDLfmjniLmzmYLOA0kHEeDiAl1P_w',
                iconImageSize: [96, 90],
                iconImageOffset: [-5, -38],
              }}
            />
          </Map>
        </div>
      </YMaps>
    </>
  );
}

export default MainPage;
