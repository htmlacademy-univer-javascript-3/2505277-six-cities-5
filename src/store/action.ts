/* eslint-disable arrow-body-style */
import { createAction } from '@reduxjs/toolkit';
import { AuthorizationStatus } from '../const/auth';
import { OfferData } from '../types/offers';

const changeCity = createAction<string>('changeCity');

const fillingOfferList = createAction<OfferData[]>('fillingOfferList');
const changeSortingType = createAction<string>('sorting/chanfeSortingType');
const requireAuthorization = createAction<AuthorizationStatus>(
  'user/requireAuthorization'
);
const loadOffers = createAction<OfferData[]>('data/loadOffers');
export {
  changeCity,
  fillingOfferList,
  changeSortingType,
  requireAuthorization,
  loadOffers,
};
