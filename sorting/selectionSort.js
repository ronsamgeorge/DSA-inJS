// take the max/min element and place them at their respective place

// Best case : O(n^2)   Worst case : O(n^2)

const selectionSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let max = 0;

    for (let j = 0; j < arr.length - i; j++) {
      if (arr[j] > arr[max]) {
        max = j;
      }
    }

    // swap max element with the last element for that iteration
    [arr[max], arr[arr.length - 1 - i]] = [arr[arr.length - 1 - i], arr[max]];

    console.log(`${i} iteration : ${arr}`);
  }

  return arr;
};

const arr = [7, 6, 8, 1, 3, 4];
console.log("initial : ", arr);
console.log("final : ", selectionSort(arr));
