import { cities } from '../../const/city';
import { CitiesItem } from '../cities-item/cities-item';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { changeCity } from '../../store/action';

function CitiesList(): JSX.Element {
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
            }}
            activeClass={city === currentCity ? 'tabs__item--active' : null}
          />
        ))}
      </ul>
    </section>
  );
}
export { CitiesList };
