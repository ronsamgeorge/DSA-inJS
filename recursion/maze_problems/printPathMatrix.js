const pathMatrix = (matrix, row, col, step, res) => {
  // check if at target
  if (row === matrix.length - 1 && col === matrix[0].length - 1) {
    res[row][col] = step
    console.log(res)
    console.log('\n')
    return
  }

  if (!matrix[row][col]) {
    return
  }

  res[row][col] = step
  matrix[row][col] = false

  if (row < matrix.length - 1) {
    pathMatrix(matrix, row + 1, col, step + 1, res)
  }

  if (row > 0) {
    pathMatrix(matrix, row - 1, col, step + 1, res)
  }

  if (col < matrix[0].length - 1) {
    pathMatrix(matrix, row, col + 1, step + 1, res)
  }

  if (col > 0) {
    pathMatrix(matrix, row, col - 1, step + 1, res)
  }

  res[row][col] = 0
  matrix[row][col] = true
}

let inputArr = Array(3)
  .fill()
  .map(() => Array(3).fill(true))

let result = Array(3)
  .fill()
  .map(() => Array(3).fill(0))

pathMatrix(inputArr, 0, 0, 1, result)
