export function getRandomElementsFromArray<T = any>(
  arr: Array<T>,
  numElements: number,
) {
  if (numElements >= arr.length) {
    return arr.slice();
  }

  const shuffledArray = arr.slice();
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }

  return shuffledArray.slice(0, numElements);
}