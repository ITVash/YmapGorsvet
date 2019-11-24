import React, { useState } from 'react'
import { YMaps, Map, Placemark, SearchControl } from 'react-yandex-maps';
import { InfoBoxA, InfoOporaA } from '../../Components';
const AdminMap = props => {
  const { items, opora, editItems, editOpora, type, coupID, oporaID, addCoup, infoCoup, addOpora } = props;
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
      <Map defaultState={!coordinats.pos ? mapData : { center : [coordinats.pos.lat, coordinats.pos.lng], zoom: 12 }} width="100%" height="100vh" modules={['geocode']}
        onClick={ e => {
          let coords = e.get('coords');
          let poson = {lat: coords[0], lng: coords[1]}
          let lat =  coords[0];
          let lng =  coords[1];
          type === 'coup' ? editItems({...items, ID: coupID, lat: lat, lng: lng}) : type === 'opora' ? editOpora({...opora, ID: oporaID, lat: lat, lng: lng}) : setCoordinats({...coordinats, pos : poson})
        } }
      >
        <SearchControl />
        { !items.pos ? null :
          <Placemark geometry={[items.lat, items.lng]}
            onClick={ () => {
              const Info = document.querySelector('.info-box');
              Info.classList.add("open");
            }}
            options={{
              iconLayout: 'default#image',
              iconImageHref: `./img/coup.png`,
              iconImageSize: [30, 30],
              iconImageOffset: [-15, -30],
            }}
          />
        }
        { !opora.pos ? null :
          <Placemark geometry={[opora.lat, opora.lng]}
            onClick={ () => {
              const InfoOpora = document.querySelector('.info-opora');
              InfoOpora.classList.add("open");
            }}
            options={{
              iconLayout: 'default#image',
              iconImageHref: `./img/opora.png`,
              iconImageSize: [30, 30],
              iconImageOffset: [-15, -30],
            }}
          />
        }
        {items && <InfoBoxA
          items={ items }
          editItems={ editItems }
          uppCoup={ addCoup }
        />}
        {opora && <InfoOporaA
          items={ opora }
          editItems={ editOpora }
          infoCoup={ infoCoup }
          uppOpora={ addOpora }
        />}
      </Map>
    </YMaps>
  )
}
export default AdminMap;
