// https://leetcode.com/problems/single-number/description/

var singleNumber = function (nums) {
  let res = 0;

  // XOR of two numbers will be zero
  // Since only a single number is not repeated, that number will be returned
  for (let i = 0; i < nums.length; i++) {
    res = res ^ nums[i];
  }

  return res;
};
