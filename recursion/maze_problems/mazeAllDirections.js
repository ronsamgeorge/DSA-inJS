const mazeAllPaths = (matrix, path, row, col) => {
  // return when path reaches target
  if (row === matrix.length - 1 && col === matrix[0].length - 1) {
    console.log(path)
    return
  }

  // check if current path is traversable
  if (matrix[row][col] === false) {
    return
  }

  // mark current spot as false, so future iteration dont come back to the same one
  matrix[row][col] = false

  if (row < matrix.length - 1) {
    mazeAllPaths(matrix, path + 'D', row + 1, col)
  }

  if (row > 0) {
    mazeAllPaths(matrix, path + 'U', row - 1, col)
  }

  if (col < matrix[0].length - 1) {
    mazeAllPaths(matrix, path + 'R', row, col + 1)
  }

  if (col > 0) {
    mazeAllPaths(matrix, path + 'L', row, col - 1)
  }

  // since the iteration is ending, change the matrix to its original state,
  // for the use of iteration higher above in the recursion tree
  matrix[row][col] = true
}

let twoDMatrix = [
  [true, true, true],
  [true, true, true],
  [true, true, true],
]

mazeAllPaths(twoDMatrix, '', 0, 0)
