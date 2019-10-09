import React, { useState } from 'react';
import { YMaps, Map, Placemark, GeoObject } from 'react-yandex-maps';
import { InfoBox } from '../../Components';

import './style.scss';


const mapData = {
  center: [48.015875, 37.801341],
  zoom: 12,
};
const Ymap = (props) => {
  const { coups, onSelectCoup, uppCoup } = props;
  const [ setCoup, setSelectCoup ] = useState(null);
  console.log("hernja", props);
  return (
    <YMaps onApiAvaliable={ymaps => console.log('Maps', ymaps)}>
      <Map defaultState={mapData} width="100%" height="100vh">
        {coups.map(item => <Placemark key={item.ID} geometry={[item.pos.lat, item.pos.lng]} 
          onClick={() => {setSelectCoup(item); onSelectCoup(item.ID); 
            const Info = document.querySelector('.info-box');
            Info.classList.add("open");
          }}
          options={{
          // Options. You must specify this type of layout.
          iconLayout: 'default#image',
          // Custom image for the placemark icon.
          iconImageHref: `./img/${item.areaID}_control_${item.func}.png`,
          // The size of the placemark.
          iconImageSize: [20, 20],
          // The offset of the upper left corner of the icon relative
          // to its "tail" (the anchor point).
          iconImageOffset: [0, 0],
        }}
        />)}
        <GeoObject 
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
        {setCoup && (
          <InfoBox items={setCoup} uppCoup={ uppCoup } />
        )}
      </Map>
    </YMaps>
  )
}

export default Ymap
