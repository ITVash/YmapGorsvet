import React, { useState } from 'react'
import { YMaps, Map, Placemark, GeoObject } from 'react-yandex-maps';
const AdminMap = props => {
  const [ coordinats, setCoordinats ] = useState(null);
  const geocode = ymaps => {
    ymaps.geocode('Донецк').then(result => {console.log('coords', result.geoObjects.get(0)); setCoordinats({Geo : result.geoObjects.get(0).geometry.getCoordinates() })});
  };
  const mapData = {
    center: [48.015875, 37.801341],
    zoom: 12,
  };
  return (
    <YMaps onApiAvaliable={ymaps => console.log('Maping', ymaps)} >
      <Map state={mapData} width="100%" height="100vh" modules={['geocode']} onLoad={ymaps => {geocode(ymaps); console.log('Map as Map', ymaps)}}
      onClick={ e => {
        let coords = e.get('coords');
        console.log('Кликнули по карте', coords)
      } }
      >
      { !coordinats ? null :
            <Placemark geometry={{ coordinates: coordinats}} onLoad={ymaps => console.log('Place', ymaps)} />
          }
      {console.log('coordinats', coordinats)}
      <GeoObject
          modules={['geolocation']}
          onLoad={ymaps => console.log('ymaps', ymaps)}
          onDrag={ymaps => {console.log('ymapss', ymaps.geolocation); console.log('coordinats', coordinats)}}
          // The geometry description.
          geometry={{
            type: 'Point',
            coordinates: [48.015875, 37.801341],
          }}
          // Properties.
          properties={{
            // The placemark content.
            iconContent: 'Я тащусь',
            hintContent: 'Ну давай уже тащи',
          }}
          // Options.
          options={{
            // The placemark's icon will stretch to fit its contents.
            preset: 'islands#blackStretchyIcon',
            // The placemark can be moved.
            draggable: true,
          }}
        />
      </Map>
    </YMaps>
  )
}
export default AdminMap;
