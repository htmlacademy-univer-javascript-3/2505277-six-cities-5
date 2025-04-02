import { createReducer } from '@reduxjs/toolkit';
import { fillingOfferList } from './action';
import { changeCity } from './action';
import { OfferData } from '../types/offers';

type State = {
  city: string;
  offersList: OfferData[];
};
const initialState: State = {
  city: 'Paris',
  offersList: [],
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(fillingOfferList, (state, action) => {
      state.offersList = action.payload;
    });
});

export { reducer };
