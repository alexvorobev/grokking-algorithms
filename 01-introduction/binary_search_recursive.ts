// random array with more than 10 items
(() => {
  const randomArray = Array.from({ length: 9 }, () =>
    Math.floor(Math.random() * 1000)
  ).sort((a, b) => a - b);

  function recursiveBinarySearch(
    array: number[],
    item: number,
    min?: number,
    max?: number
  ): number | null {
    const minIndex = min || 0;
    const maxIndex = max || array.length;
    const mid = Math.round((maxIndex + minIndex) / 2);
    const guess = array[mid];

    if (guess === item) {
      return mid;
    }

    if (guess > item) {
      return recursiveBinarySearch(array, item, minIndex, mid);
    }

    if (guess < item) {
      return recursiveBinarySearch(array, item, mid, maxIndex);
    }

    return null;
  }

  console.log(recursiveBinarySearch(randomArray, randomArray[4]));
  console.log(recursiveBinarySearch(randomArray, randomArray[2]));
  console.log(recursiveBinarySearch(randomArray, randomArray[6]));
})();
