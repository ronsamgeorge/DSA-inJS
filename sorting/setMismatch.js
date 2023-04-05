// https://leetcode.com/problems/set-mismatch/

// cyclic sort and linear search for element at index !== index+1 , return [arr[index], index]
var findErrorNums = function (nums) {
  let i = 0;

  while (i < nums.length) {
    const correct = nums[i] - 1;

    if (nums[i] !== nums[correct]) {
      [nums[i], nums[correct]] = [nums[correct], nums[i]];
    } else {
      i += 1;
    }
  }

  for (let j = 0; j < nums.length; j++) {
    if (nums[j] !== j + 1) {
      return [nums[j], j + 1];
    }
  }
};
