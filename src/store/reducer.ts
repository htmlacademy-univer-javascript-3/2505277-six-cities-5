import { createReducer } from '@reduxjs/toolkit';
import { changeCity } from './action';
import { OfferData } from '../types/offers';

import {
  changeSortingType,
  fillingOfferList,
  requireAuthorization,
  setError,
} from './action';
import { AuthorizationStatus } from '../const/auth';

type State = {
  city: string;
  offersList: OfferData[];
  sortingBy: string;
  authorizationStatus: AuthorizationStatus;
  error: string | null;
};
const initialState: State = {
  city: 'Paris',
  offersList: [],
  sortingBy: 'Popular',
  authorizationStatus: AuthorizationStatus.Unknown,
  error: null,
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
    })
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    });
});

export { reducer };
