/* eslint-disable arrow-body-style */
import { createAction } from '@reduxjs/toolkit';

import { OfferData } from '../types/offers';

const changeCity = createAction<string>('changeCity'
);

const fillingOfferList =
  createAction<OfferData[]>('fillingOfferList');

export { changeCity, fillingOfferList };
