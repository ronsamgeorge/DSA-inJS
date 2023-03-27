// https://www.geeksforgeeks.org/ceiling-in-a-sorted-array/

// Brute Force would be to linear search = O(N) time complexity
// Since its sorted, better approach would be Binary sort = O(logN)
const ceiling = (arr, s, e, target) => {
  let result = Math.max() * -1;

  while (s <= e) {
    let mid = Math.floor((s + e) / 2);

    // if equal just return the number
    if (arr[mid] == target) {
      result = arr[mid];
      break;
    }

    // if smaller than target, just update counter not result
    if (arr[mid] < target) {
      s = mid + 1;
      continue;
    }

    // if greater, update end, and update result if arr[mid] is smaller than result
    if (arr[mid] > target) {
      e = mid - 1;

      if (arr[mid] < result) {
        result = arr[mid];
      }
    }
  }
  return result;
};

const array = [2, 3, 5, 9, 14, 16, 14];
console.log(ceiling(array, 0, array.length - 1, 14));
