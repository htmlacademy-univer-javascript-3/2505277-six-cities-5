import { createReducer } from '@reduxjs/toolkit';
import { changeCity } from './action';
import { OfferData } from '../types/offers';
import { AuthorizationStatus } from '../const/auth';
import {setOffersDataLoadingStatus,requireAuthorization, changeSortingType, fillingOfferSortingList, loadOffers } from './action';

type State = {
  city: string;
  offerSortingList: OfferData[];
  sortingBy: string;
  offers: OfferData[];
  authorizationStatus: AuthorizationStatus;
  isOffersDataLoading:boolean;
};
const initialState: State = {
  city: 'Paris',
  offerSortingList: [],
  sortingBy: 'Popular',
  offers: [],
  authorizationStatus: AuthorizationStatus.Unknown,
  isOffersDataLoading:false,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(fillingOfferSortingList, (state, action) => {
      state.offerSortingList = action.payload;
    })
    .addCase(changeSortingType, (state, action) => {
      state.sortingBy = action.payload;
    })
    .addCase(loadOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setOffersDataLoadingStatus, (state, action) => {
      state.isOffersDataLoading = action.payload;
    });
});

export { reducer };
