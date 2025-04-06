import { cities } from '../../const/city';
import { CitiesItem } from '../cities-item/cities-item';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { changeCity } from '../../store/action';
import { OfferData } from '../../types/offers';
import { fillingOfferList } from '../../store/action';
import { useEffect } from 'react';

type CitiesListProps = {
  offers: OfferData[];
};
function CitiesList({ offers }: CitiesListProps): JSX.Element {
  const dispatch = useAppDispatch();
  const currentCity = useAppSelector((state) => state.city);
  useEffect(()=>{
    const offersFiltered = offers.filter(
      (offer) => offer.city.name === currentCity
    );
    dispatch(fillingOfferList(offersFiltered));
  },[offers, currentCity, dispatch]);
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
