// https://www.geeksforgeeks.org/find-position-element-sorted-array-infinite-numbers/

// find index of element in sorted infinite array

// Brute Force : linear search from the first element : O(N)

// Optimized approach : 1. Check chunks if element lies in that chunk of array  2. once chunk found, apply binary search

const searchChunk = (infArr, target) => {
  let s = 0;
  let e = 1;
  let inRange = false;

  while (!inRange) {
    if (infArr[s] >= target && infArr[e] <= target) {
      inRange = true;
    }

    // grow chunk exponentially
    let chunk = (e - s) * 2;

    s = e + 1;
    e = e + chunk + 1;
  }

  const ans = binarySearch(infArr, s, e, target);
  return ans;
};

const binarySearch = (infArr, s, e, target) => {
  while (s <= e) {
    let mid = Math.floor((s + e) / 2);

    if (infArr[mid] === target) {
      return mid;
    }

    if (infArr[mid] < target) {
      s = mid + 1;
      continue;
    }

    if (infArr(mid) > target) {
      e = mid - 1;
    }
  }
};
