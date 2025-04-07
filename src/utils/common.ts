import { OfferData } from '../types/offers';

function appendSForPlural(count: number) {
  return count !== 1 ? 's' : '';
}

function getRandomNum(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function sortingByType(type: string, offersFiltered: OfferData[]) {
  const sorted = [...offersFiltered];
  if (type === 'Price: low to high') {
    return sorted.sort((a: OfferData, b: OfferData) => a.price - b.price);
  } else if (type === 'Price: high to low') {
    return sorted.sort((a: OfferData, b: OfferData) => b.price - a.price);
  } else if (type === 'Top rated first') {
    return sorted.sort((a: OfferData, b: OfferData) => b.rating - a.rating);
  }
  return offersFiltered;
}
export { appendSForPlural, getRandomNum, sortingByType };
