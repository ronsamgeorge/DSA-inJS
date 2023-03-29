// https://www.geeksforgeeks.org/search-in-row-wise-and-column-wise-sorted-matrix/

// the matrix (n x n) is sorted in row and column manner

const search = (num, target) => {
  let rowIndex = 0;
  let columnIndex = num.length - 1;

  while (columnIndex > 0 && rowIndex < num.length) {
    if (target === num[rowIndex][columnIndex]) {
      return [rowIndex, columnIndex];
    }

    if (target < num[rowIndex][columnIndex]) {
      columnIndex -= 1;
    } else {
      rowIndex += 1;
    }
  }

  return -1;
};

const matrix = [
  [10, 20, 30, 40],
  [15, 25, 35, 45],
  [27, 29, 37, 48],
  [32, 33, 39, 50],
];

console.log(search(matrix, 37));
