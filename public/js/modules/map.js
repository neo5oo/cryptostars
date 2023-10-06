const ZOOM = 8;
const PIN_WIDTH = 36;
const PIN_HEIGHT = 46;
const BASE_COORDS = {
  lat: 59.92749,
  lng: 30.31127
};

class Map {
  constructor({
    data = [],
    element = null,
    zoom = ZOOM,
    pin = {width: PIN_WIDTH, height: PIN_HEIGHT},
    coords = BASE_COORDS,
    getBaloonTemplate = null
  } = {}) {
    if (!element) {
      return;
    }
    this._getBaloonTemplate = getBaloonTemplate;
    this._data = data;
    this._element = element;
    this._zoom = zoom;
    this._pin = pin;
    this._coords = coords;

    this._map = L.map(this._element, {scrollWheelZoom: false});
    L.tileLayer('http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}', {
      subdomains: ['mt0', 'mt1', 'mt2', 'mt3']
    }).addTo(this._map);
    this._markersGroup = L.layerGroup().addTo(this._map);
  }

  addMarkers(data = this._data) {
    this._markersGroup.clearLayers();
    if (!this._getBaloonTemplate) {
      if (isDev()) {
        console.error('Отсутствует метод _getBaloonTemplate');
      }
      return;
    }
    data.forEach((item) => {
      const pinIcon = L.marker(item.coords, {
        icon: L.icon({
          iconUrl: 'img/pin.svg',
          iconSize: [this._pin.width, this._pin.height],
          iconAnchor: [this._pin.width / 2, this._pin.height]
        })
      });
      pinIcon.bindPopup(this._getBaloonTemplate(item)).addTo(this._markersGroup);
    });
    return this;
  }

  closePopup() {
    this._map.closePopup();
    return this;
  }

  render() {
    this.addMarkers();
    this._map.addLayer(this._markersGroup).setView(this._coords, this._zoom);
    return this;
  }
}

export {Map};
