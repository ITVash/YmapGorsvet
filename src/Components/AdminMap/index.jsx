import React, { useState } from 'react'
import { YMaps, Map, Placemark, SearchControl } from 'react-yandex-maps';
import { InfoBox, InfoOpora } from '../../Components';
const AdminMap = props => {
  const { items, opora, editItems, editOpora, type, coupID, oporaID } = props;
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
          type === 'coup' ? editItems({...items, ID: coupID, pos: poson}) : editOpora({...opora, ID: oporaID, pos: poson})
          setCoordinats({...coordinats, pos : poson})
          console.log('Кликнули по карте', poson)
          console.log('Клик', items)
        } }
      >
        <SearchControl />
        { !items.pos ? null :
          <Placemark geometry={[items.pos.lat, items.pos.lng]}
            onClick={ () => {
              const Info = document.querySelector('.info-box');
              Info.classList.add("open");
            }}
            options={{
              // Options. You must specify this type of layout.
              iconLayout: 'default#image',
              // Custom image for the placemark icon.
              iconImageHref: `./img/coup.png`,
              // The size of the placemark.
              iconImageSize: [30, 30],
              // The offset of the upper left corner of the icon relative
              // to its "tail" (the anchor point).
              iconImageOffset: [-15, -30],
            }}
          />
        }
        { !opora.pos ? null :
          <Placemark geometry={[opora.pos.lat, opora.pos.lng]}
            onClick={ () => {
              const InfoOpora = document.querySelector('.info-opora');
              InfoOpora.classList.add("open");
            }}
            options={{
              // Options. You must specify this type of layout.
              iconLayout: 'default#image',
              // Custom image for the placemark icon.
              iconImageHref: `./img/opora.png`,
              // The size of the placemark.
              iconImageSize: [30, 30],
              // The offset of the upper left corner of the icon relative
              // to its "tail" (the anchor point).
              iconImageOffset: [-15, -30],
            }}
          />
        }
        {items && <InfoBox 
          items={ items }
          editItems={ editItems }
        />}
        {opora && <InfoOpora 
          items={ opora }
          editItems={ editOpora }
          infoCoup={ "1523" }
        />}
      </Map>
    </YMaps>
  )
}
export default AdminMap;
