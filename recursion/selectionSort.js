// implementation of Selection Sort using recursion

const selectionSort = (arr, checkIndex, range, largestIndex) => {
  // range starts at the last element and decreases by 1 after each iteration
  // hence when it reaches 0, only that element is left and so its sorted, end algorithm
  if (range === 0) {
    return arr;
  }

  // currentIndex greater than range , swap largest with last element, that iteration is done
  if (checkIndex > range) {
    [arr[largestIndex], arr[range]] = [arr[range], arr[largestIndex]];
    return selectionSort(arr, 0, range - 1, 0);
  } else {
    if (arr[checkIndex] > arr[largestIndex]) {
      largestIndex = checkIndex;
    }

    return selectionSort(arr, checkIndex + 1, range, largestIndex);
  }
};

const array = [53, 44, 0, -12, 11, -1, 1];
console.log(selectionSort(array, 0, array.length - 1, 0));
