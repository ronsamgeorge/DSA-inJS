// https://leetcode.com/problems/arranging-coins/description/

// the brute force way would be to substract as we go through each step, O(N)

// Better approach would be to use binary search with formula : (n*(n+1))/2

var arrangeCoins = function (n) {
  let s = 1;
  let e = n;

  while (s <= e) {
    let mid = Math.floor((s + e) / 2);
    let value = Math.floor((mid * (mid + 1)) / 2); // get total coins used until that step

    if (value === n) {
      return mid;
    }

    if (value < n) {
      s = mid + 1;
    } else {
      e = mid - 1;
    }
  }
  return e;
};
