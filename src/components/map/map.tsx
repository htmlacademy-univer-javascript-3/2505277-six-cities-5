import { useMap } from '../../hooks/useMap';
import { useEffect, useRef } from 'react';
import { LocationData, OfferData } from '../../types/offers';
import { defaulCustomIcon, activeCustomIcon } from '../../const/map';
import leaflet from 'leaflet';
import { useAppSelector } from '../../hooks';

type MapProps = {
  nearestOffers ?:OfferData[];
  cityLocation: LocationData;
  hoveredID: string;
  height: string;
  width: string;
  marginBottom: string;
};
function Map({
  nearestOffers ,
  height = '794px',
  width = '500px',
  cityLocation,
  hoveredID,
  marginBottom = '',
}: MapProps): JSX.Element {
  const mapRef = useRef<HTMLDivElement>(null);
  const map = useMap(mapRef, cityLocation);
  const offers = useAppSelector((state) => state.offersList);
  useEffect(() => {
    if (!map) {
      return;
    }
    const markers = leaflet.layerGroup();
    const dataToRender = nearestOffers ?.length ? nearestOffers : offers;

    dataToRender.forEach((offer) => {
      leaflet
        .marker(
          {
            lat: offer.location.latitude,
            lng: offer.location.longitude,
          },
          {
            icon: offer.id === hoveredID ? activeCustomIcon : defaulCustomIcon,
          }
        )
        .addTo(markers);
    });

    markers.addTo(map);

    return () => {
      markers.clearLayers();
      map.removeLayer(markers);
    };
  }, [map,nearestOffers , offers, hoveredID]);

  useEffect(()=>{
    if(map){
      map.setView(
        [offers[0].location.latitude, offers[0].location.longitude],
        offers[0].location.zoom
      );
    }
  },[map,offers]);
  return (
    <div
      style={{ height, width, margin: 'auto', marginBottom }}
      ref={mapRef}
    >
    </div>
  );
}
export { Map, type MapProps };
