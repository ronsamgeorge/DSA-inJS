// https://leetcode.com/problems/peak-index-in-a-mountain-array/description/

// brute force : linear search : time complexity : O(N)

// optimized way : binary search : time complexity  : O(log N)

var peakIndexInMountainArray = function (arr) {
  let s = 0;
  let e = arr.length - 1;

  while (s <= e) {
    let mid = Math.floor((s + e) / 2);

    if (s === e) {
      return s;
    }

    if (arr[mid] > arr[mid + 1]) {
      // in descending part of array and mid might be a potential answer
      // hence e != mid - 1, as it might be a possible answer
      e = mid;
      continue;
    }

    if (arr[mid] < arr[mid + 1]) {
      // in the ascending part of the array
      // next element (m+1) is greater, hence its not possible peak, make s = mid + 1
      s = mid + 1;
    }
  }
};
