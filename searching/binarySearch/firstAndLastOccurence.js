// https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/description/

// the brute force way would be to seach using two pointers, one at the start and the other at the end

// optimal approach will take O(log N)

const searchRangeOptiomal = function (num, target) {
  let start = search(nums, target, true);
  let end = search(nums, target, false);

  return [start, end];
};

const search = (nums, target, startIndex) => {
  let start = 0;
  let end = nums.length - 1;
  let ans = -1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    if (nums[mid] < target) {
      start = mid + 1;
    } else if (nums[mid] > target) {
      end = mid - 1;
    } else {
      ans = mid;
      // if target found , it could be a potential answer, run binary search again depending on which index we are looking for
      if (startIndex) {
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    }
  }

  return ans;
};

// the approach below was a mix of two pointer and binary search, which passed the solution but would not be 0(log N) precisely,
var searchRangeNonOptimal = function (nums, target) {
  let s = 0;
  let e = nums.length - 1;

  while (s <= e) {
    // if s and e pointers are target, we have reached the answer
    if (nums[s] === target && nums[e] === target) {
      return [s, e];
    }

    let mid = Math.floor((s + e) / 2);

    //  if mid element is target , move the s and e pointers if they aren't target
    if (nums[mid] === target) {
      if (nums[s] !== target) {
        s += 1;
      }

      if (nums[e] !== target) {
        e += 1;
      }
    }

    // divide the search array

    if (nums[mid] < target && nums[s] !== target) {
      s = mid + 1;
    }
    if (nums[mid] > target && nums[e] !== target) {
      e = mid - 1;
    }
  }

  return [-1, -1];
};
