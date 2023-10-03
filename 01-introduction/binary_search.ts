// random array with more than 10 items
() => {
  const randomArray = Array.from({ length: 9 }, () =>
    Math.floor(Math.random() * 1000)
  ).sort((a, b) => a - b);
  console.log(randomArray);

  const binarySearch = (array: number[], item: number) => {
    let lowIndex = 0,
      highIndex = array.length - 1;
    console.log({
      array,
      item,
    });

    while (lowIndex <= highIndex) {
      const midIndex = Math.round(lowIndex + highIndex / 2) - 1;
      const guess = array[midIndex];

      console.log({
        lowIndex,
        highIndex,
        midIndex,
        guess,
      });

      if (lowIndex === highIndex) {
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

  console.log(binarySearch(randomArray, randomArray[4]));
  console.log(binarySearch(randomArray, randomArray[2]));
  console.log(binarySearch(randomArray, randomArray[6]));
};
