// pattern : when given numbers of range 1 to n in array of length n

// time complexity : O(n) , space complexity : O(1)

const cyclicSort = (arr) => {
  let i = 0;
  while (i < arr.length) {
    if (arr[i] - 1 === i) {
      i += 1;
      continue;
    }

    let temp = arr[i];
    arr[i] = arr[temp - 1];
    arr[temp - 1] = temp;
  }

  return arr;
};

const arr = [3, 4, 2, 1, 5, 6];
console.log("initial : ", arr);
console.log("final : ", cyclicSort(arr));
