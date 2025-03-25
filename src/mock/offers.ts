import { OfferData } from '../types/offers';

const offers: OfferData[] = [
  {
    id: '1',
    title: 'Beautiful & luxurious studio at great location.',
    type: 'apartment',
    price: 120,
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.35514938496378,
        longitude: 4.673877537499948,
        zoom: 8,
      },
    },
    location: {
      latitude: 52.35514938496378,
      longitude: 4.673877537499948,
      zoom: 8,
    },
    isFavorite: true,
    isPremium: false,
    rating: 4,
    previewImage: 'https://picsum.photos/200/300',
  },
  {
    id: '2',
    title: 'Elegant & stylish loft in the vibrant center of City.',
    type: 'apartment',
    price: 130,
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 50.850346,
        longitude: 4.351721,
        zoom: 9,
      },
    },
    location: {
      latitude: 50.850346,
      longitude: 4.351721,
      zoom: 9,
    },
    isFavorite: true,
    isPremium: false,
    rating: 3,
    previewImage: 'https://picsum.photos/200/300',
  },
  {
    id: '3',
    title: 'Cozy & enchanting flat in a prime City location.',
    type: 'apartment',
    price: 250,
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 48.856613,
        longitude: 2.352222,
        zoom: 6,
      },
    },
    location: {
      latitude: 48.856613,
      longitude: 2.352222,
      zoom: 6,
    },
    isFavorite: false,
    isPremium: true,
    rating: 5,
    previewImage: 'https://picsum.photos/200/300',
  },
  {
    id: '4',
    title:
      'Charming & modern apartment in the heart of city with stunning views of the harbor.',
    type: 'room',
    price: 100,
    city: {
      name: 'Hamburg',
      location: {
        latitude: 53.551086,
        longitude: 9.993682,
        zoom: 5,
      },
    },
    location: {
      latitude: 53.551086,
      longitude: 9.993682,
      zoom: 5,
    },
    isFavorite: false,
    isPremium: true,
    rating: 4,
    previewImage: 'https://picsum.photos/200/300',
  },
];

export { offers };
