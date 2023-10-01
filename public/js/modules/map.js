// import {getBaloonTemplate} from './get-baloon-template.js';
// import {initContractors} from './contractors.js';

class Map {
  constructor(contractors) {
    this._ZOOM = 8;
    this._PIN_WIDTH = 36;
    this._PIN_WIDTH_HALF = 18;
    this._PIN_HEIGHT = 46;
    this._BASE_COORDS = {
      lat: 59.92749,
      lng: 30.31127
    };

    this._contractors = contractors;
    this._element = document.getElementById('map');

    this._map = L.map(this._element, {scrollWheelZoom: false}).setView(this._BASE_COORDS, this._ZOOM);
    L.tileLayer('http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}', {
      subdomains: ['mt0', 'mt1', 'mt2', 'mt3']
    }).addTo(this._map);
    this._markersGroup = L.layerGroup().addTo(this._map);
  }

  _addMarkers() {
    this._contractors.forEach((contractor) => {
      const pinIcon = L.marker(contractor.coords, {
        icon: L.icon({
          iconUrl: 'img/pin.svg',
          iconSize: [this._PIN_WIDTH, this._PIN_HEIGHT],
          iconAnchor: [this._PIN_WIDTH_HALF, this._PIN_HEIGHT]
        })
      });
      pinIcon.bindPopup(this.getBaloonTemplate(contractor)).addTo(this._markersGroup);
    });
    this._map.addLayer(this._markersGroup).setView(this._BASE_COORDS, this._ZOOM);
  }

  render() {
    this._markersGroup.clearLayers();
    this._addMarkers();
    return this._map;
  }
}

// function addMap(contractors) {
//   const ZOOM = 8;
//   const PIN_WIDTH = 36;
//   const PIN_WIDTH_HALF = 18;
//   const PIN_HEIGHT = 46;
//   const BASE_COORDS = {
//     lat: 59.92749,
//     lng: 30.31127
//   };

//   const element = document.getElementById('map');

//   // Добавляем карту
//   const map = L.map(element, {scrollWheelZoom: false}).setView(BASE_COORDS, ZOOM);

//   // Добавляем слой с нужной картой
//   L.tileLayer('http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}', {
//     subdomains: ['mt0', 'mt1', 'mt2', 'mt3']
//   }).addTo(map);

//   const markersGroup = L.layerGroup().addTo(map);

//   contractors.forEach((contractor) => {
//     const pinIcon = L.marker(contractor.coords, {
//       icon: L.icon({
//         iconUrl: 'img/pin.svg',
//         iconSize: [PIN_WIDTH, PIN_HEIGHT],
//         iconAnchor: [PIN_WIDTH_HALF, PIN_HEIGHT]
//       })
//     });
//     pinIcon.bindPopup(getBaloonTemplate(contractor)).addTo(markersGroup);
//   });
//   map.addLayer(markersGroup).setView(BASE_COORDS, ZOOM);
//   return map;
// }

const addMap = (contractors) => new Map(contractors);

export {addMap};
