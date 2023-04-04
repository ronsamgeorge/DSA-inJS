// https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/description/

// ues cyclic sort and then return array by of disappeared numbers

var findDisappearedNumbers = function (nums) {
  cyclicSort(nums);
  return getMissing(nums);
};

const cyclicSort = (arr) => {
  let i = 0;
  while (i < arr.length) {
    const correct = arr[i] - 1;

    if (arr[i] !== arr[correct]) {
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
  const missing = [];
  for (i = 0; i < nums.length; i++) {
    if (nums[i] !== i + 1) {
      missing.push(i + 1);
    }
  }
  return missing;
};
