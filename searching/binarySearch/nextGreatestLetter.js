// https://leetcode.com/problems/find-smallest-letter-greater-than-target/description/

var nextGreatestLetter = function (letters, target) {
  // check if there is an actual greater solution

  if (letters[letters.length - 1] <= target) {
    return letters[0];
  }

  // use binary search since its a sorted array - ascending order
  let s = 0;
  let e = letters.length - 1;

  while (s <= e) {
    let mid = Math.floor((s + e) / 2);

    if (letters[mid] <= target) {
      s = mid + 1;
    } else {
      e = mid - 1;
    }
  }

  return letters[s];
};
