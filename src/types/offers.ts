type OfferData = {
  id: string;
  title: string;
  type: string;
  price: number;
  city: OffersCity;
  location: LocationData;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
  previewImage: string;
};
type LocationData = {
  latitude: number;
  longitude: number;
  zoom: number;
};
type OffersCity = {
  name: string;
  location: LocationData;
};

type ReviewItem ={
  rating: number;
  text: string;
  date: string;
  id: string;
  name: string;
}
export type { OfferData, LocationData,ReviewItem };
