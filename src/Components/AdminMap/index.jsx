import React, { useState } from 'react'
import { YMaps, Map, Placemark } from 'react-yandex-maps';
const AdminMap = props => {
  const [ coordinats, setCoordinats ] = useState({lat:'', lng:''});
  const geocode = ymaps => {
    ymaps.geocode('Украина, г. Донецк, ул. Лазника, 19')
      .then(res => {
        let obj = res.geoObjects.get(0);
        let coords = obj.geometry.getCoordinates();
        console.log('Адерс поиска: ', coords );
      })
  };
  const mapData = {
    center: [48.015875, 37.801341],
    zoom: 12,
  };
  const mapData2 = {
    center: [coordinats.lat, coordinats.lng],
    zoom: 12,
  };
  return (
    <YMaps onApiAvaliable={ymaps => console.log('Maping', ymaps)} >
      <Map state={coordinats.lat === '' ? mapData : mapData2 } width="100%" height="100vh" modules={['geocode']}
        onLoad={ymaps => geocode(ymaps)}
        onClick={ e => {
          let coords = e.get('coords');
          setCoordinats({lat: coords[0], lng: coords[1]})
          console.log('Кликнули по карте', coords)
          console.log('Клик', coordinats)
        } }
      >
      { !coordinats ? null :
            <Placemark geometry={[coordinats.lat, coordinats.lng]} />
      }
      </Map>
    </YMaps>
  )
}
export default AdminMap;
