/* eslint-disable arrow-body-style */
import { createAction } from '@reduxjs/toolkit';
import { OfferData } from '../types/offers';
import { AuthorizationStatus } from '../const/auth';

const changeCity = createAction<string>('offers/changeCity');

const fillingOfferSortingList = createAction<OfferData[]>('offers/fillingOfferSortingList');

const changeSortingType = createAction<string>('sorting/chanfeSortingType');

const loadOffers = createAction<OfferData[]>('offers/loadOffers');

const loadFavorites = createAction<OfferData[]>('offers/loadFavorites');

const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');

const setOffersDataLoadingStatus = createAction<boolean>('data/setOffersDataLoadingStatus');

const setError = createAction<string|null>('setError');
export { setError,loadFavorites,setOffersDataLoadingStatus,requireAuthorization,changeCity, fillingOfferSortingList, changeSortingType, loadOffers };
