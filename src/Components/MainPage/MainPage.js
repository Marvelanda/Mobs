import { YMaps, Map, Placemark, ZoomControl } from 'react-yandex-maps';

function MainPage() {


  return(
        <YMaps>
    <div>
      My awesome application with maps!
      <Map style={{width: 1000, height: 800}} defaultState={{ center: [55.684758, 37.738521], zoom: 13
       }}>
        <ZoomControl options={{ float: 'right' }} />
        <Placemark geometry={[55.684758, 37.738521]} options={{iconLayout: 'default#image', iconImageHref: 'https://psv4.userapi.com/c856424/u17278978/docs/d10/aa7b8c36443d/qsymb-unscreen.gif?extra=xp4TcXt4hEbEHagyQRgBy9EbMbpdTWLszKUCVJQ1C1_kTyfQX3vGMvrhQ9LFJCQLaHpwf3zl3UZOxnbIPWv8QkWLZ0HjEe-djBNBRSsLbcPkpVLb_0onm63CXTDLfmjniLmzmYLOA0kHEeDiAl1P_w', iconImageSize: [96, 90], iconImageOffset: [-5, -38]}} />
      </Map>
      </div>
  </YMaps>
  )
    
}

export default MainPage
