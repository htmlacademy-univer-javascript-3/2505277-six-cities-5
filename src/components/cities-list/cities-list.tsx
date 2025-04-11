import { cities } from '../../const/city';
import { CitiesItem } from '../cities-item/cities-item';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { changeCity, fillingOfferSortingList } from '../../store/action';
import { useEffect } from 'react';
import { sortingByType } from '../../utils/common';

function CitiesList(): JSX.Element {
  const dispatch = useAppDispatch();
  const currentCity = useAppSelector((state) => state.city);
  const sortingType = useAppSelector((state) => state.sortingBy);
  const offers = useAppSelector((state) => state.offers);
  useEffect(() => {
    let offersFiltered = offers.filter(
      (offer) => offer.city.name === currentCity
    );
    offersFiltered = sortingByType(sortingType, offersFiltered);
    dispatch(fillingOfferSortingList(offersFiltered));
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
