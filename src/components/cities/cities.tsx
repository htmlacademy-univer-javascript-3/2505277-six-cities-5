import { Card } from '../card/сard';
import { appendSForPlural } from '../../utils/common';
import { SortingOptionsList } from '../sorting-options-list/sorting-options-list';
import { useState } from 'react';
import { Map } from '../map/map';
import { useAppSelector } from '../../hooks';

function Cities(): JSX.Element {
  const [hoveredID, setHoveredID] = useState('');
  const city = useAppSelector((state) => state.city);
  const offers = useAppSelector((state) => state.offersList);
  return (
    <div className="cities">
      <div className="cities__places-container container">
        <section className="cities__places places">
          <h2 className="visually-hidden">Places</h2>
          <b className="places__found">
            {' '}
            {offers.length} place{appendSForPlural(offers.length)} to stay in{' '}
            {city}
          </b>
          <SortingOptionsList />
          <div className="cities__places-list places__list tabs__content">
            {offers.map((offer) => (
              <Card
                key={offer.id}
                offer={offer}
                onMouseLeave={() => setHoveredID('')}
                onMouseEnter={() => setHoveredID(offer.id)}
                classPrefix="cities"
              />
            ))}
          </div>
        </section>
        <div className="cities__right-section">
          <Map
            cityLocation={offers[0].location}
            hoveredID={hoveredID}
            height="794px"
            width="500px"
            marginBottom="0px"
          />
        </div>
      </div>
    </div>
  );
}

export { Cities };
