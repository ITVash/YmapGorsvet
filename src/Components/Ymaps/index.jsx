import React from 'react';
import { YMaps, Map } from 'react-yandex-maps';
//import { InfoBox, InfoOpora } from '../../Components';


import './style.scss';


const mapData = {
  center: [48.015875, 37.801341],
  zoom: 12,
};
const Ymap = (props) => {
  //const { coups, onSelectCoup, onSelectOpora, uppCoup , opora, uppOpora} = props;
  //const [ setCoup, setSelectCoup ] = useState(null);
  //const [ setOpora, setSelectOpora ] = useState(null);
  
  return (
    <YMaps>
      <Map defaultState={mapData} width="100%" height="100vh">
        {/*coups.map(item => <Placemark key={item.id} geometry={[item.lat, item.lng]} 
          onClick={ () => {
            setSelectCoup(item); 
            onSelectCoup(item.id); 
            const Info = document.querySelector('.info-box');
            Info.classList.add("open");
          }}
          modules={['geoObject.addon.hint']}
          properties={{
            hintContent: `${item.title}`,
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
        />)*/}
        {/*opora.map(item => <Placemark key={item.id} geometry={[item.lat, item.lng]}
          onClick={ () => {
            setSelectOpora(item);
            //coupInfo(item);
            onSelectOpora(item.id);
            const InfoOpora = document.querySelector('.info-opora');
            InfoOpora.classList.add("open");
          }}
          modules={['geoObject.addon.hint']}
          properties={{
            hintContent: `${item.title}`,
          }}
          options={{
            // Options. You must specify this type of layout.
            iconLayout: 'default#image',
            // Custom image for the placemark icon.
            iconImageHref: `./img/${item.areaID}_opora_${item.func}.png`,
            // The size of the placemark.
            iconImageSize: [10, 10],
            // The offset of the upper left corner of the icon relative
            // to its "tail" (the anchor point).
            iconImageOffset: [0, -15],
          }}
        />
        )*/}
        {/*setCoup && (
          <InfoBox
            items={ setCoup }
            editItems={ setSelectCoup }
            uppCoup={ uppCoup } />
        )*/}
        {/*setOpora && (
          <InfoOpora 
            items={ setOpora }
            editItems={ setSelectOpora }
            infoCoup={ infoCoup }
            uppOpora={ uppOpora }
            setCoup={ setSelectCoup }
            coup={ setCoup }
            uppCoup={ uppCoup }
            onSelectCoup={ onSelectCoup }
          />
        )*/}
      </Map>
    </YMaps>
  )
}

export default Ymap;
