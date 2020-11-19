import { YMaps, Map, Placemark, ZoomControl } from 'react-yandex-maps';

function MainPage() {
const cords = [55.684758, 37.738521]

  return(
        <YMaps>
    <div>
      My awesome application with maps!
      <Map defaultState={{ center: [55.684758, 37.738521], zoom: 16 }}>
        <ZoomControl options={{ float: 'right' }} />
        <Placemark geometry={cords} options={{iconLayout: 'default#image', iconImageHref: 'https://cloclo4.cloud.mail.ru/inline/mapMarks/qsymb-unscreen.gif?etag=7A1BA6F4D1655E577B6C7B90DD7DA8A3D4114DF4&x-email=call69%40bk.ru', iconImageSize: [96, 90], iconImageOffset: [-5, -38]}} />
      </Map>
      </div>
  </YMaps>
  )
    
}

export default MainPage
