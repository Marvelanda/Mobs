import { YMaps, Map, Placemark, ZoomControl } from 'react-yandex-maps';
import style from './style.module.css';
import {getRandomFive, myArray} from '../../helpers/randomFive'

function MainPage() {
  const question = 'https://psv4.userapi.com/c856532/u17278978/docs/d1/ca429eca48f4/new_qsymb.gif?extra=Qig3hBJor4aZYSnBga7yMDgjgyVEwkLHZVlt7CNaRHNFrDfsOcvhIDGsG3-D6RdVlSxALtlNWFXrYWY2N-puzrktvNnrST6lfDvWcJjr0Ostb7D9Gr1vBnXpTVlZLeA6usdwPzkTBjk5uzSInFRYIg'
  const coin = 'https://psv4.userapi.com/c856224/u17278978/docs/d15/a0d04a1fa2d9/ezgif_com-gif-maker_1.gif?extra=tSnENC1OUQQ6tfX7CS-qFADOz_GQNg-2my74cpBIGk8Tpt-gTltXkAYAwoMPhYz7BFR0rzIqQJXY_Ig9t8NWo8IA4OxJqrKhop8E3DGTV_AF_3BuUvhib75gohD-HQYP-3Rpv71qkWwq_yz5ZrrXMg'


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
            defaultState={{ center: [55.76, 37.62], zoom: 11 }}
          >
            <ZoomControl options={{ float: 'right' }} />
            {
              newFive.map((el, i) => (
                <Placemark
                className="placeMark"
                key={i}
                  geometry={el}
                  options={{
                    iconLayout: 'default#image',
                    iconImageHref:
                      question,
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
