import {getBaloonTemplate} from './get-baloon-template.js';

function addMap(contractors) {
  const ZOOM = 9;
  const PIN_WIDTH = 36;
  const PIN_WIDTH_HALF = 18;
  const PIN_HEIGHT = 46;
  const BASE_COORDS = {
    lat: 59.92749,
    lng: 30.31127
  };

  const element = document.getElementById('map');

  // Добавляем карту
  const map = L.map(element, {scrollWheelZoom: false}).setView(BASE_COORDS, ZOOM);

  // Добавляем слой с нужной картой
  L.tileLayer('http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}', {
    subdomains: ['mt0', 'mt1', 'mt2', 'mt3']
  }).addTo(map);

  const markersGroup = L.layerGroup().addTo(map);

  for (let i = 0; i < contractors.length; i++) {
    const marker = L.marker(contractors[i].coords, {
      icon: L.icon({
        iconUrl: 'img/pin.svg',
        iconSize: [PIN_WIDTH, PIN_HEIGHT],
        iconAnchor: [PIN_WIDTH_HALF, PIN_HEIGHT]
      })
    });
    markersGroup.addLayer(marker);
  }

  map.addLayer(markersGroup).setView(BASE_COORDS, 10);

  // contractors.forEach(({coords}) => {
  //   const pinIcon = L.marker(coords, {
  //     icon: L.icon({
  //       iconUrl: 'img/pin.svg',
  //       iconSize: [PIN_WIDTH, PIN_HEIGHT],
  //       iconAnchor: [PIN_WIDTH_HALF, PIN_HEIGHT]
  //     })
  //   });
  //   pinIcon.addTo(map);
  // });
  getBaloonTemplate();
}

export {addMap};
