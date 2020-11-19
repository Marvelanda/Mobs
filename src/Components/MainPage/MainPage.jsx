import { YMaps, Map, Placemark, ZoomControl } from 'react-yandex-maps';
import style from './style.module.css';
import {getRandomFive, myArray} from '../../helpers/randomFive'

function MainPage() {
  const question = 'https://psv4.userapi.com/c856424/u17278978/docs/d10/aa7b8c36443d/qsymb-unscreen.gif?extra=xp4TcXt4hEbEHagyQRgBy9EbMbpdTWLszKUCVJQ1C1_kTyfQX3vGMvrhQ9LFJCQLaHpwf3zl3UZOxnbIPWv8QkWLZ0HjEe-djBNBRSsLbcPkpVLb_0onm63CXTDLfmjniLmzmYLOA0kHEeDiAl1P_w'
  const coin = 'https://psv4.userapi.com/c856228/u17278978/docs/d8/bab88fe07f5b/coin-unscreen.gif?extra=T6qR3NtPI4Ak8oXATz8Iga6F09Yjbx9LA08iv1-_fhOgpzCYkoHGBtEVN77fMomh4SGOsEgX8gsjFGxpvZAtL2UZOJjX0gU3QITsVPl0OYZnIpEzUaJyUi6xpWvWJoCCZT8xiI2fqTdKg4VfCL4JlQ'


  const newFive = getRandomFive(myArray)
console.log(newFive);
  return (

    <YMaps>
      <div className={style.map}>
        My awesome application with maps!
        <div
          className={`${style.map} ${style.myMaps} animate__animated animate__fadeInDown`}
        >
          <Map
            style={{ width: 1000, height: 800 }}
            defaultState={{ center: [55.76, 37.64], zoom: 10 }}
          >
            <ZoomControl options={{ float: 'right' }} />
            {
              newFive.map((el, i) => (
                <Placemark
                key={i}
                  geometry={el}
                  options={{
                    iconLayout: 'default#image',
                    iconImageHref:
                      coin,
                    iconImageSize: [96, 90],
                    iconImageOffset: [-5, -38],
                  }}
                />
              ))
            }
          </Map>
        </div>
      </div>
    </YMaps>
  );
}

export default MainPage;
