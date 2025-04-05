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
  offersList: [
    {
      id: '5',
      title: 'Cozy studio with Eiffel Tower view',
      type: 'apartment',
      price: 150,
      city: {
        name: 'Paris',
        location: {
          latitude: 48.8566,
          longitude: 2.3522,
          zoom: 8,
        },
      },
      location: {
        latitude: 48.8584,
        longitude: 2.2945,
        zoom: 8,
      },
      isFavorite: false,
      isPremium: true,
      rating: 4.8,
      previewImage: 'https://picsum.photos/200/301',
    },
    {
      id: '6',
      title: 'Modern flat in the heart of Paris',
      type: 'apartment',
      price: 180,
      city: {
        name: 'Paris',
        location: {
          latitude: 48.8566,
          longitude: 2.3522,
          zoom: 8,
        },
      },
      location: {
        latitude: 48.8656,
        longitude: 2.3212,
        zoom: 8,
      },
      isFavorite: true,
      isPremium: false,
      rating: 4.5,
      previewImage: 'https://picsum.photos/200/302',
    },
    {
      id: '7',
      title: 'Charming studio near Montmartre',
      type: 'apartment',
      price: 130,
      city: {
        name: 'Paris',
        location: {
          latitude: 48.8566,
          longitude: 2.3522,
          zoom: 8,
        },
      },
      location: {
        latitude: 48.8867,
        longitude: 2.3431,
        zoom: 8,
      },
      isFavorite: false,
      isPremium: false,
      rating: 4.1,
      previewImage: 'https://picsum.photos/200/303',
    },
    {
      id: '8',
      title: 'Luxury apartment near Louvre',
      type: 'apartment',
      price: 200,
      city: {
        name: 'Paris',
        location: {
          latitude: 48.8566,
          longitude: 2.3522,
          zoom: 8,
        },
      },
      location: {
        latitude: 48.8606,
        longitude: 2.3376,
        zoom: 8,
      },
      isFavorite: true,
      isPremium: true,
      rating: 4.9,
      previewImage: 'https://picsum.photos/200/304',
    },
  ],
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
