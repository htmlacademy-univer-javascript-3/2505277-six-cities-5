import leaflet from 'leaflet';

const URL_MARKER_DEFAULT = 'public/img/pin.svg';
const URL_MARKER_ACTIVE = 'public/img/pin-active.svg';

const defaulCustomIcon = leaflet.icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [27, 39],
  iconAnchor: [20, 40],
});

const activeCustomIcon = leaflet.icon({
  iconUrl: URL_MARKER_ACTIVE,
  iconSize: [27, 39],
  iconAnchor: [20, 40],
});
export { activeCustomIcon, defaulCustomIcon };
