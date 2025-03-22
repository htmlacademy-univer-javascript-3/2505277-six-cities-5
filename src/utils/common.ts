function appendSForPlural(count: number) {
  return count !== 1 ? 's' : '';
}

function getRandomNum(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
export { appendSForPlural, getRandomNum };
