import { createReducer } from '@reduxjs/toolkit';
import { fillingOfferList } from './action';
import { changeCity } from './action';
import { OfferData } from '../types/offers';
import { initialCityOffers } from '../mock/offers';
import { changeSortingType } from './action';

type State = {
  city: string;
  offersList: OfferData[];
  sortingBy: string;
};
const initialState: State = {
  city: 'Paris',
  offersList: initialCityOffers,
  sortingBy: 'Popular',
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
    });
});

export { reducer };
