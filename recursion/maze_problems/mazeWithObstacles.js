const mazeWithObstacles = (matrix, path, row, col) => {
  if (row === matrix.length - 1 && col === matrix[0].length - 1) {
    console.log(path)
    return
  }

  if (matrix[row][col] === false) {
    return
  }

  if (row < matrix.length - 1) {
    mazeWithObstacles(matrix, path + 'D', row + 1, col)
  }

  if (col < matrix[0].length - 1) {
    mazeWithObstacles(matrix, path + 'R', row, col + 1)
  }
}

let twoDMatrix = [
  [true, true, true],
  [true, false, true],
  [true, true, true],
]

mazeWithObstacles(twoDMatrix, '', 0, 0)
