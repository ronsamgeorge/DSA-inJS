// optimized solution : sort using cyclic sort and find missing number by running loop on that sorted arr

var missingNumber = function (nums) {
  const arr = cyclicSort(nums);
  return getMissing(arr);
};

const cyclicSort = (nums) => {
  let i = 0;
  while (i < nums.length) {
    if (nums[i] === i || nums[i] === nums.length) {
      // wont work with duplicates
      // if element is length of array ignore and move to next value
      i += 1;
      continue;
    }
    let temp = nums[i];
    nums[i] = nums[temp];
    nums[temp] = temp;
  }

  return nums;
};

const cyclicSortOptimized = (arr) => {
  let i = 0;
  while (i < arr.length) {
    const correct = arr[i] - 1;
    if (arr[i] !== arr[correct]) {
      // check if the number at the index and element itself are same, this helps in duplicate
      let temp = arr[i];
      arr[i] = arr[temp - 1];
      arr[temp - 1] = temp;
    } else {
      i += 1;
    }
  }
  return arr;
};

const getMissing = (nums) => {
  for (i = 0; i < nums.length; i++) {
    if (nums[i] !== i) {
      return i;
    }
  }
  return i;
};
