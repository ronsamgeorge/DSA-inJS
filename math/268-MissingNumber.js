const missingNumber = (nums) => {
  let arrSum = 0;
  const totalSum = Math.floor((nums.length * (nums.length + 1)) / 2);
  for (let i = 0; i < nums.length; i++) {
    arrSum += nums[i];
  }

  return totalSum - arrSum;
};

console.log(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1]));
