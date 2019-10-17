import React, { useState } from 'react'
import { YMaps, Map, Placemark, SearchControl } from 'react-yandex-maps';
const AdminMap = props => {
  const { items, opora, editItems, editOpora, type } = props;
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
          {type === 'coup' ? editItems({...items, pos: poson}) : editOpora({...opora, pos: poson})}
          setCoordinats({...coordinats, pos : poson})
          console.log('Кликнули по карте', poson)
          console.log('Клик', coordinats)
        } }
      >
        <SearchControl />
        { !items.pos ? null :
          <Placemark geometry={[items.pos.lat, items.pos.lng]} 
            options={{
              // Options. You must specify this type of layout.
              iconLayout: 'default#image',
              // Custom image for the placemark icon.
              iconImageHref: `./img/coup.png`,
              // The size of the placemark.
              iconImageSize: [30, 30],
              // The offset of the upper left corner of the icon relative
              // to its "tail" (the anchor point).
              iconImageOffset: [0, 0],
            }}
          />
        }
        { !opora.pos ? null :
          <Placemark geometry={[opora.pos.lat, opora.pos.lng]} 
            options={{
              // Options. You must specify this type of layout.
              iconLayout: 'default#image',
              // Custom image for the placemark icon.
              iconImageHref: `./img/opora.png`,
              // The size of the placemark.
              iconImageSize: [30, 30],
              // The offset of the upper left corner of the icon relative
              // to its "tail" (the anchor point).
              iconImageOffset: [0, 0],
            }}
          />
        }
      </Map>
    </YMaps>
  )
}
export default AdminMap;
