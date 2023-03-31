// Time complexity = O(n)
// Use two pointers, start and end element, compare squares of each other, insert bigger one into the end of the result arr

var sortedSquares = function (nums) {
  let s = 0;
  let e = nums.length - 1;
  let res = [];
  let resInd = nums.length - 1;

  while (s <= e) {
    let eSquare = nums[e] * nums[e];
    let sSquare = nums[s] * nums[s];

    if (eSquare > sSquare) {
      res[resInd] = eSquare;
      e -= 1;
    } else if (eSquare === sSquare) {
      res[resInd] = eSquare;
      e -= 1;
    } else if (sSquare > eSquare) {
      res[resInd] = sSquare;
      s += 1;
    }

    resInd -= 1;
  }

  return res;
};
