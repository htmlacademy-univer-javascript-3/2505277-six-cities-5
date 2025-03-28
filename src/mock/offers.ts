import { LocationData, OfferData } from '../types/offers';

const offers: OfferData[] = [
  {
    id: '1',
    title: 'Beautiful & luxurious studio at great location.',
    type: 'apartment',
    price: 120,
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.3909553943508,
        longitude: 4.85309666406198,
        zoom: 8,
      },
    },
    location: {
      latitude: 52.3909553943508,
      longitude: 4.85309666406198,
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
        latitude: 52.3609553943508,
        longitude: 4.85309666406198,
        zoom: 8,
      },
    },
    location: {
      latitude: 52.3609553943508,
      longitude: 4.85309666406198,
      zoom: 8,
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
        latitude: 52.3909553943508,
        longitude: 4.929309666406198,
        zoom: 8,
      },
    },
    location: {
      latitude: 52.3909553943508,
      longitude: 4.929309666406198,
      zoom: 8,
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
      name: 'Amsterdam',
      location: {
        latitude: 52.3809553943508,
        longitude: 4.939309666406198,
        zoom: 8,
      },
    },
    location: {
      latitude: 52.3809553943508,
      longitude: 4.939309666406198,
      zoom: 8,
    },
    isFavorite: false,
    isPremium: true,
    rating: 4,
    previewImage: 'https://picsum.photos/200/300',
  },
];
const cityLocation: LocationData = {
  latitude: 52.3909553943508,
  longitude: 4.939309666406198,
  zoom: 8,
};
export { offers, cityLocation };
