import { useMap } from '../../hooks/useMap';
import { useEffect, useRef } from 'react';
import { LocationData, OfferData } from '../../types/offers';
import { URL_MARKER_ACTIVE, URL_MARKER_DEFAULT } from '../../const';
import leaflet from 'leaflet';
type MapProps = {
  cityLocation: LocationData;
  offers: OfferData[];
  isHovered: string;
};
function Map({ cityLocation, offers, isHovered }: MapProps): JSX.Element {
  const mapRef = useRef<HTMLDivElement>(null);

  const map = useMap(mapRef, cityLocation);
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

  useEffect(() => {
    if (map) {
      offers.forEach((offer) => {
        leaflet
          .marker(
            {
              lat: offer.location.latitude,
              lng: offer.location.longitude,
            },
            {
              icon:
                offer.id === isHovered ? activeCustomIcon : defaulCustomIcon,
            }
          )
          .addTo(map);
      });
    }
  }, [map, offers, isHovered]);
  return <div style={{ height: '794px', width: '500px' }} ref={mapRef}></div>;
}
export { Map };
