// https://leetcode.com/problems/search-a-2d-matrix/

// Approach uses binary search twice , First in order to eleminate Rows and once only one Row is found , Binary search on that

// O (Log (m*n))

var searchMatrix = function (matrix, target) {
  // preliminary test to check if target lies in range
  if (
    target < matrix[0][0] ||
    target > matrix[matrix.length - 1][matrix[0].length - 1]
  ) {
    return false;
  }
  const targetRow = findTargetRow(matrix, target);

  return (isPresent = binarySearch(matrix, target, targetRow));
};

const findTargetRow = (matrix, target) => {
  let topRow = 0;
  let bottomRow = matrix.length - 1;
  const last = matrix[0].length - 1;

  while (topRow <= bottomRow) {
    let mid = Math.floor((topRow + bottomRow) / 2);

    if (target === matrix[mid][last]) {
      return mid;
    }

    if (topRow === bottomRow) {
      return topRow;
    }

    if (target < matrix[mid][last]) {
      bottomRow = mid;
    } else if (target > matrix[mid][last]) {
      topRow = mid + 1;
    }
  }
};

const binarySearch = (matrix, target, row) => {
  let s = 0;
  let e = matrix[row].length - 1;

  while (s <= e) {
    let mid = Math.floor((s + e) / 2);
    let midValue = matrix[row][mid];

    if (target === midValue) {
      return true;
    }

    if (target < midValue) {
      e = mid - 1;
    } else {
      s = mid + 1;
    }
  }

  return false;
};
