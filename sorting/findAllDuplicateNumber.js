// https://leetcode.com/problems/find-all-duplicates-in-an-array/description/

// cyclic sort then linear search for elements not at index+1  position

var findDuplicates = function (nums) {
  let i = 0;
  let res = [];

  while (i < nums.length) {
    let correct = nums[i] - 1;

    if (nums[i] !== nums[correct]) {
      [nums[i], nums[correct]] = [nums[correct], nums[i]];
    } else {
      i += 1;
    }
  }

  for (let j = 0; j < nums.length; j++) {
    //if number is not at correct position, means its a duplicate
    if (nums[j] !== j + 1) {
      res.push(nums[j]);
    }
  }

  return res;
};
