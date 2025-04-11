import { APIRoute } from '../const/routes';
import { OfferData } from '../types/offers';
import { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { State, AppDispatch } from '../types/state';
import { loadOffers } from './action';
import { setOffersDataLoadingStatus } from './action';

const fetchOffersAction = createAsyncThunk<
  void,
  undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('data/fetchOffers', async (_arg, { dispatch, extra: api }) => {
  dispatch(setOffersDataLoadingStatus(true));
  const { data } = await api.get<OfferData[]>(APIRoute.Offers);
  dispatch(setOffersDataLoadingStatus(false));
  dispatch(loadOffers(data));
});

export { fetchOffersAction };
