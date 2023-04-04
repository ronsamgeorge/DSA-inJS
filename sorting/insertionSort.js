// Best case : O(n) ; worst case : O(n^2)

// Works best on small data(partially sorted), hence used in hybrid sorting algorithm

const insertionSort = (arr) => {
  for (let i = 0; i <= arr.length - 2; i++) {
    for (let j = i + 1; j > 0; j--) {
      if (arr[j] >= arr[j - 1]) {
        break;
      }
      [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];
    }
    console.log(`${i} iteration : ${arr}`);
  }

  return arr;
};

const arr = [1, 6, 2, 7, 5, 8];
console.log("initial : ", arr);
console.log("final : ", insertionSort(arr));
