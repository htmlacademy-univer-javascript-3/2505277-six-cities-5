import { useMap } from '../../hooks/useMap';
import { useEffect, useRef } from 'react';
import { LocationData, OfferData } from '../../types/offers';
import { defaulCustomIcon, activeCustomIcon } from '../../const/map';
import leaflet from 'leaflet';
type MapProps = {
  cityLocation: LocationData;
  offers: OfferData[];
  isHoveredID: string;
};
function Map({ cityLocation, offers, isHoveredID }: MapProps): JSX.Element {
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
                offer.id === isHoveredID ? activeCustomIcon : defaulCustomIcon,
            }
          )
          .addTo(map);
      });
    }
  }, [map, offers, isHoveredID]);
  return <div style={{ height: '794px', width: '500px' }} ref={mapRef}></div>;
}
export { Map };
