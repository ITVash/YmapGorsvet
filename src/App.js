import React from 'react';
import { YMaps, Map, Placemark } from 'react-yandex-maps';

const mapData = {
  center: [48.015875, 37.801341],
  zoom: 12,
};
const coordinates = [
  [47.97452, 37.75697],
  [47.97525, 37.75098]
];
const App = () => {
  return (
    <>
      <YMaps>
        <Map defaultState={mapData} width="100%" height="100vh">
          {coordinates.map((coordinate, i) => <Placemark key={i} geometry={coordinate} />)}
        </Map>
      </YMaps>
    </>
  )
}

export default App
