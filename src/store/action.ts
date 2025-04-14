/* eslint-disable arrow-body-style */
import { createAction } from '@reduxjs/toolkit';
import { OfferData } from '../types/offers';
import { AuthorizationStatus } from '../const/auth';

const changeCity = createAction<string>('offers/changeCity');

const changeSortingType = createAction<string>('sorting/chanfeSortingType');

const loadOffers = createAction<OfferData[]>('offers/loadOffers');

const loadFavorites = createAction<OfferData[]>('offers/loadFavorites');

const requireAuthorization = createAction<AuthorizationStatus>(
  'user/requireAuthorization'
);

const setOffersDataLoadingStatus = createAction<boolean>(
  'data/setOffersDataLoadingStatus'
);

const setUserEmail = createAction<string>('user/setEmail');

const setError = createAction<string | null>('setError');

export {
  setError,
  loadFavorites,
  setOffersDataLoadingStatus,
  requireAuthorization,
  changeCity,
  changeSortingType,
  loadOffers,
  setUserEmail,
};
