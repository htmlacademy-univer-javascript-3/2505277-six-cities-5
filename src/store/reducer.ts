import { createReducer } from '@reduxjs/toolkit';
import { changeCity } from './action';
import { OfferData } from '../types/offers';
import { AuthorizationStatus } from '../const/auth';
import {
  setError,
  loadFavorites,
  setOffersDataLoadingStatus,
  requireAuthorization,
  changeSortingType,
  loadOffers,
  setUserEmail
} from './action';

type State = {
  city: string;
  userEmail:string;
  sortingBy: string;
  offers: OfferData[];
  favorite: OfferData[];
  authorizationStatus: AuthorizationStatus;
  isOffersDataLoading: boolean;
  error: string | null;
};
const initialState: State = {
  city: 'Paris',
  userEmail:'',
  sortingBy: 'Popular',
  offers: [],
  favorite: [],
  authorizationStatus: AuthorizationStatus.Unknown,
  isOffersDataLoading: false,
  error: null,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload;
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
    })
    .addCase(loadFavorites, (state, action) => {
      state.favorite = action.payload;
    })
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    })
    .addCase(setUserEmail, (state, action) => {
      state.userEmail = action.payload;
    });
});

export { reducer };
