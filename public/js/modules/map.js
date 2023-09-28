import {getBaloonTemplate} from './get-baloon-template.js';

function addMap(contractors) {
  const ZOOM = 8;
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

  contractors.forEach((contractor) => {
    const pinIcon = L.marker(contractor.coords, {
      icon: L.icon({
        iconUrl: 'img/pin.svg',
        iconSize: [PIN_WIDTH, PIN_HEIGHT],
        iconAnchor: [PIN_WIDTH_HALF, PIN_HEIGHT]
      })
    });
    pinIcon.bindPopup(getBaloonTemplate(contractor)).addTo(markersGroup);
  });
  map.addLayer(markersGroup).setView(BASE_COORDS, ZOOM);
  return map;
}

export {addMap};
