import React, { useState } from 'react'
import { YMaps, Map, Placemark, SearchControl } from 'react-yandex-maps';
const AdminMap = props => {
  const { items, opora, editItems, editOpora } = props;
  const [ coordinats, setCoordinats ] = useState({lat:'', lng:'', pos: null});
  /*const geocode = ymaps => {
    ymaps.geocode('Украина, г. Донецк, ул. Лазника, 19')
      .then(res => {
        let obj = res.geoObjects.get(0);
        let coords = obj.geometry.getCoordinates();
        console.log('Адерс поиска: ', coords );
      })
  };*/
  const mapData = {
    center: [48.015875, 37.801341],
    zoom: 12,
  };
  return (
    <YMaps onApiAvaliable={ymaps => console.log('Maping', ymaps)} >
      <Map state={!coordinats.pos ? mapData : { center : [coordinats.pos.lat, coordinats.pos.lng], zoom: 12 }} width="100%" height="100vh" modules={['geocode']}
        onClick={ e => {
          let coords = e.get('coords');
          let poson = {lat: coords[0], lng: coords[1]}
          setCoordinats({...coordinats, pos : poson})
          console.log('Кликнули по карте', poson)
          console.log('Клик', coordinats)
        } }
      >
        <SearchControl />
      { !coordinats.pos ? null :
            <Placemark geometry={[coordinats.pos.lat, coordinats.pos.lng]} />
      }
      </Map>
    </YMaps>
  )
}
export default AdminMap;
