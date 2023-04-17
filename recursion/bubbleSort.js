// Implement bubbleSort using  Recursion

const bubbleSort = (arr, currentIndex, lastIndex, iteration) => {
  if (iteration === arr.length - 1) {
    return arr;
  }

  // reached end of unsorted portion, begin next iteration
  if (currentIndex === lastIndex) {
    return bubbleSort(arr, 0, lastIndex - 1, iteration + 1);
  } else {
    //swap if current is greater than next element
    if (arr[currentIndex] > arr[currentIndex + 1]) {
      [arr[currentIndex], arr[currentIndex + 1]] = [
        arr[currentIndex + 1],
        arr[currentIndex],
      ];
    }
    // move comparison index to the next element
    return bubbleSort(arr, currentIndex + 1, lastIndex, iteration);
  }
};

const array = [53, 44, 0, -12, 1];
console.log(bubbleSort(array, 0, array.length - 1, 1));
