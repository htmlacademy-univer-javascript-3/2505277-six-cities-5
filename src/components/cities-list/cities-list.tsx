import { cities } from '../../const/city';
import { CitiesItem } from '../cities-item/cities-item';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { changeCity } from '../../store/action';
import { OfferData } from '../../types/offers';
import { fillingOfferList } from '../../store/action';
type CitiesListProps = {
  offers: OfferData[];
};
function CitiesListComponent({ offers }: CitiesListProps): JSX.Element {
  const dispatch = useAppDispatch();
  const currentCity = useAppSelector((state) => state.city);

  return (
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {Object.keys(cities).map((city) => (
          <CitiesItem
            key={city}
            city={cities[city]}
            onClick={() => {
              dispatch(changeCity(city));
              const offersFiltered = offers.filter(
                (offer) => offer.city.name === city
              );
              dispatch(fillingOfferList(offersFiltered));
            }}
            activeClass={city === currentCity ? 'tabs__item--active' : null}
          />
        ))}
      </ul>
    </section>
  );
}
export { CitiesListComponent };
