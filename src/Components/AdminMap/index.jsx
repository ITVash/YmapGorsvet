import React, { useState } from 'react'
import { YMaps, Map, Placemark, GeoObject } from 'react-yandex-maps';
const AdminMap = props => {
  const [ coordinats, setCoordinats ] = useState({lat:'', lng:''});
  const geocode = ymaps => {
    ymaps.geocode('Донецк').then(result => {console.log('coords', result.geoObjects.get(0)); setCoordinats({Geo : result.geoObjects.get(0).geometry.getCoordinates() })});
  };
  const mapData = {
    center: [48.015875, 37.801341],
    zoom: 12,
  };
  return (
    <YMaps onApiAvaliable={ymaps => console.log('Maping', ymaps)} >
      <Map state={mapData} width="100%" height="100vh" modules={['geocode']}
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
