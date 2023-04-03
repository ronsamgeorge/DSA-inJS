// https://leetcode.com/problems/valid-perfect-square/description/

// brute force way would be to start search if squares of current element is less or equal to num : O(N);
// Optimal approach would be to use Binary search between 1 to num, if mid^2 is smaller or greater, adjust search range,

var isPerfectSquare = function (num) {
  let s = 1;
  let e = num;

  while (s <= e) {
    let mid = Math.floor((s + e) / 2);

    // perfect square return true
    if (mid * mid === num) {
      return true;
    }

    if (mid * mid > num) {
      e = mid - 1;
    } else {
      s = mid + 1;
    }
  }

  // it is not a perfect square
  return false;
};
