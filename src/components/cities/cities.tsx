import { Card } from '../card/сard';
import { appendSForPlural } from '../../utils/common';

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
          <form className="places__sorting" action="#" method="get">
            <span className="places__sorting-caption">Sort by</span>
            <span className="places__sorting-type" tabIndex={0}>
              Popular
              <svg className="places__sorting-arrow" width="7" height="4">
                <use xlinkHref="#icon-arrow-select"></use>
              </svg>
            </span>
            <ul className="places__options places__options--custom places__options--opened">
              <li
                className="places__option places__option--active"
                tabIndex={0}
              >
                Popular
              </li>
              <li className="places__option" tabIndex={0}>
                Price: low to high
              </li>
              <li className="places__option" tabIndex={0}>
                Price: high to low
              </li>
              <li className="places__option" tabIndex={0}>
                Top rated first
              </li>
            </ul>
          </form>
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
