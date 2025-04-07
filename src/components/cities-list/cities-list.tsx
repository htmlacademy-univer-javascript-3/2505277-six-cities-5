import { cities } from '../../const/city';
import { CitiesItem } from '../cities-item/cities-item';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { changeCity } from '../../store/action';
import { OfferData } from '../../types/offers';
import { fillingOfferList } from '../../store/action';
import { useEffect } from 'react';
import { sortingByType } from '../../utils/common';

type CitiesListProps = {
  offers: OfferData[];
};

function CitiesList({ offers }: CitiesListProps): JSX.Element {
  const dispatch = useAppDispatch();
  const currentCity = useAppSelector((state) => state.city);
  const sortingType = useAppSelector((state) => state.sortingBy);

  useEffect(() => {
    let offersFiltered = offers.filter(
      (offer) => offer.city.name === currentCity
    );
    offersFiltered = sortingByType(sortingType, offersFiltered);
    dispatch(fillingOfferList(offersFiltered));
  }, [offers, currentCity, dispatch, sortingType]);
  return (
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {Object.keys(cities).map((city) => (
          <CitiesItem
            key={city}
            city={cities[city]}
            onClick={() => {
              dispatch(changeCity(city));
            }}
            activeClass={city === currentCity ? 'tabs__item--active' : null}
          />
        ))}
      </ul>
    </section>
  );
}
export { CitiesList };
