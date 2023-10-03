const randomArray = [1, 2, 4, 4, 4, 5, 6, 7, 8, 9];

const binarySearch = (array: number[], item: number) => {
  let lowIndex = 0,
    highIndex = array.length - 1;

  while (lowIndex <= highIndex) {
    const midIndex = Math.floor(lowIndex + highIndex / 2);
    const guess = array[midIndex];

    if (lowIndex === highIndex && guess !== item) {
      return null;
    }

    if (guess === item) {
      return midIndex;
    } else if (guess > item) {
      highIndex = midIndex - 1;
    } else {
      lowIndex = midIndex + 1;
    }
  }

  return null;
};

console.log(binarySearch(randomArray, 3));
console.log(binarySearch(randomArray, 2));
