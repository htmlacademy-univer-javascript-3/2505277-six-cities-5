import { createReducer } from '@reduxjs/toolkit';
import { changeCity } from './action';
import { OfferData } from '../types/offers';
import { initialCityOffers } from '../mock/offers';
import {
  changeSortingType,
  fillingOfferList,
  requireAuthorization,
} from './action';
import { AuthorizationStatus } from '../const/auth';

type State = {
  city: string;
  offersList: OfferData[];
  sortingBy: string;
  authorizationStatus: AuthorizationStatus;
};
const initialState: State = {
  city: 'Paris',
  offersList: initialCityOffers,
  sortingBy: 'Popular',
  authorizationStatus: AuthorizationStatus.Unknown,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(fillingOfferList, (state, action) => {
      state.offersList = action.payload;
    })
    .addCase(changeSortingType, (state, action) => {
      state.sortingBy = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    });
});

export { reducer };
