import { Card } from '../card/сard';
import { appendSForPlural } from '../../utils/common';
import { OfferData } from '../../types/offers';
import { useState } from 'react';
import { Map } from '../map/map';

type CitiesProps = {
  offers: OfferData[];
};

function Cities({ offers }: CitiesProps): JSX.Element {
  const [isHoveredID, setIsHoveredID] = useState('');

  return (
    <div className="cities">
      <div className="cities__places-container container">
        <section className="cities__places places">
          <h2 className="visually-hidden">Places</h2>
          <b className="places__found">
            {' '}
            {offers.length} place{appendSForPlural(offers.length)} to stay in
            Amsterdam
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
                onMouseLeave={() => setIsHoveredID('')}
                onMouseEnter={() => setIsHoveredID(offer.id)}
              />
            ))}
          </div>
        </section>
        <div className="cities__right-section">
          <Map
            offers={offers}
            cityLocation={offers[0].location}
            isHoveredID={isHoveredID}
          />
        </div>
      </div>
    </div>
  );
}

export { Cities };
