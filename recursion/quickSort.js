// implementation of quick sort in JS

const quickSort = (arr, low, high) => {
  if (low >= high) {
    return;
  }

  let start = low;
  let end = high;
  let pivot = Math.floor(start + (end - start) / 2);

  while (start <= end) {
    while (arr[start] < arr[pivot]) {
      start += 1;
    }

    while (arr[end] > arr[pivot]) {
      end -= 1;
    }

    if (start <= end) {
      [arr[start], arr[end]] = [arr[end], arr[start]];
      start += 1;
      end -= 1;
    }
  }

  // pivot is placed at the right position
  // sort the other two halves

  quickSort(arr, low, end);
  quickSort(arr, start, high);
};

const array = [53, 44, 0, -12, 1];
quickSort(array, 0, array.length - 1);

console.log(array);
