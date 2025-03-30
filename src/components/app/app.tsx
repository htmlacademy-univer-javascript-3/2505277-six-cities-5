import { Main } from '../../pages/main/main';
import { Login } from '../../pages/login/login';
import { Favorites } from '../../pages/favorites/favorites';
import { Offer } from '../../pages/offer/offer';
import { NotFoundScreen } from '../../pages/not-found-screen/not-found-screen';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AuthorizationStatus } from '../../const/auth';
import { AppRoute } from '../../const/routes';
import { PrivateRouteComponent } from '../private-route/private-route';
import { OfferData } from '../../types/offers';
import { MapProps } from '../map/map';
type AppScreenProps = {
  offers: OfferData[];
};

function App(
  { offers }: AppScreenProps,
  { hoveredID, cityLocation }: MapProps
): JSX.Element {
  const favoriteOffers = offers.filter((offer) => offer.isFavorite === true);

  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Main} element={<Main offers={offers} />} />
        <Route path={AppRoute.Login} element={<Login />} />
        <Route
          path={AppRoute.Favorites}
          element={
            <PrivateRouteComponent
              authorizationStatus={AuthorizationStatus.NoAuth}
            >
              <Favorites offers={favoriteOffers} />
            </PrivateRouteComponent>
          }
        />
        <Route
          path={AppRoute.Offer}
          element={
            <Offer
              offers={offers}
              hoveredID={hoveredID}
              cityLocation={cityLocation}
              height=""
              width=""
              marginBottom=""
            />
          }
        />
        <Route path="*" element={<NotFoundScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export { App };
