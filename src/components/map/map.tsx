import { useMap } from '../../hooks/useMap';
import { useEffect, useRef } from 'react';
import { LocationData, OfferData } from '../../types/offers';
import { defaulCustomIcon, activeCustomIcon } from '../../const/map';
import leaflet from 'leaflet';

type MapProps = {
  cityLocation: LocationData;
  offers: OfferData[];
  hoveredID: string;
  height: string;
  width: string;
  marginBottom: string;
};
function Map({
  height = '794px',
  width = '500px',
  cityLocation,
  offers,
  hoveredID,
  marginBottom = '',
}: MapProps): JSX.Element {
  const mapRef = useRef<HTMLDivElement>(null);

  const map = useMap(mapRef, cityLocation);

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
                offer.id === hoveredID ? activeCustomIcon : defaulCustomIcon,
            }
          )
          .addTo(map);
      });
    }
  }, [map, offers, hoveredID]);
  return (
    <div
      style={{ height, width, margin: 'auto', marginBottom }}
      ref={mapRef}
    >
    </div>
  );
}
export { Map, type MapProps };
