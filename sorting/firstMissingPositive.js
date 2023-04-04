// https://leetcode.com/problems/first-missing-positive/description/

// Since it is asking for first missing positive, we can sort array and then linear search to find the missing number : O(N^2);

// Use cyclic sort instead assuming for 1-n range, the first index will start with 1 to positive if present, run linear search to get first missing
// O(N)

var firstMissingPositive = function (nums) {
  let i = 0;

  // cyclic sort
  while (i < nums.length) {
    let correct = nums[i] - 1;
    // if element value is more than length or less than zero, ignore, the present positives will make their way to their positions
    if (!(nums[i] >= nums.length || nums[i] < 0) && nums[i] != nums[correct]) {
      let temp = nums[i];
      nums[i] = nums[temp - 1];
      nums[temp - 1] = temp;
    } else {
      i += 1;
    }
  }

  // linear search to find first missing positive
  for (let j = 0; j < nums.length; j++) {
    if (nums[j] !== j + 1) {
      return j + 1;
    }
  }
  return nums.length + 1;
};
