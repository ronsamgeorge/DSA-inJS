// https://leetcode.com/problems/search-in-rotated-sorted-array/description/

// brute force/non optimized approach would be to use linear search and return first occurence of the target, else -1
// Complexity would be O log(N)

// Since its a sorted array : better approach would be trying binary search
// The problem can be divied into two major parts:
// 1. Finding the pivot  2. search both parts of the array using binary search.

// This will not work with duplicate values

var search = function (nums, target) {
  const pivot = findPivot(nums)
  let ans = binarySearch(nums, target, 0, pivot)

  // since we need to find the lowest index of target, if first half doesnt have the element , only then check second hald
  if (ans === -1) {
    ans = binarySearch(nums, target, pivot + 1, nums.length - 1)
  }

  return ans
}

const findPivot = (nums) => {
  let s = 0
  let e = nums.length - 1

  while (s <= e) {
    let mid = Math.floor((s + e) / 2)

    // Pivot point is the only point where two subsequent values are in decreasing order
    if (nums[mid] > nums[mid + 1]) {
      return mid
    }

    if (nums[mid] < nums[mid - 1]) {
      return mid - 1
    }

    // if elememnt at s is less than element at m, that means largest will lie on the right of the mid, update s
    if (nums[s] < nums[mid]) {
      s = mid + 1
    }
    // if elememnt at s is greater than element at m, that means largest will lie on the right of the mid, update s
    else if (nums[s] > nums[mid]) {
      e = mid - 1
    }
    // if s and mid are equal, that means less than two elements in array, compare element at s and e
    // return index of greater element
    else if (s === mid) {
      return nums[s] >= nums[e] ? s : e
    }
  }
}

const binarySearch = (nums, target, s, e) => {
  while (s <= e) {
    let mid = Math.floor((s + e) / 2)

    if (nums[mid] === target) {
      return mid
    }

    if (nums[mid] < target) {
      s = mid + 1
    } else if (nums[mid] > target) {
      e = mid - 1
    }
  }

  return -1
}

console.log(search([1], 1))
