import { OfferData } from '../types/offers';

function appendSForPlural(count: number) {
  return count !== 1 ? 's' : '';
}

function getRandomNum(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function sortingByType(type: string, offersFiltered: OfferData[]) {
  const sorted = [...offersFiltered];
  const sortMap: Record<string, () => OfferData[]> = {
    'Price: low to high': () =>
      sorted.sort((a: OfferData, b: OfferData) => a.price - b.price),
    'Price: high to low': () =>
      sorted.sort((a: OfferData, b: OfferData) => b.price - a.price),
    'Top rated first': () =>
      sorted.sort((a: OfferData, b: OfferData) => b.rating - a.rating),
  };
  return sortMap[type]?.() ?? offersFiltered;
}

export { appendSForPlural, getRandomNum, sortingByType };
