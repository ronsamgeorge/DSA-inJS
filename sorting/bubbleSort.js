// Implementation of BubbleSort : compare adjacent elements

// After each iteration, the largest element will be at their respective position at the end of the array

// Best Case : O(N) , Worst Case : O(N^2)

const bubbleSort = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    let swapped = false;

    //  j < arr.length-i because the latter part of the array will be in sorted order
    for (j = 0; j < arr.length - i; j++) {
      if (arr[j] > arr[j + 1]) {
        swapped = true;
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
    if (!swapped) {
      console.log("Array already sorted");
      break;
    }
    console.log(`${i} iteration : ${arr}`);
  }

  return arr;
};

const arr = [3, 2, 1, 4];
console.log("initial : ", arr);
console.log("final : ", bubbleSort(arr));
