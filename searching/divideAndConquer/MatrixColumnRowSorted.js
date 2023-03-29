// https://www.geeksforgeeks.org/search-in-row-wise-and-column-wise-sorted-matrix/

// the matrix (n x n) is sorted in row and column manner

// Brute force way would be to linear search all the element, leading to O(n^2) complexity

// Optimal way : All compare with the top right element with the index, and reduce the search space depending on the comparison

// if Target is smaller than value, then reduce the column since all elements will be larger than value,  else reduce row as all element will be smaller on that row before the value element

// O(n) solution

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
