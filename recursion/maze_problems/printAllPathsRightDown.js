const printAllPath = (pathProcessed, row, column) => {
  let result = []
  if (row === 1 && column === 1) {
    result.push(pathProcessed)
    return result
  }

  // move down
  if (row > 1) {
    result = result.concat(printAllPath(pathProcessed + 'D', row - 1, column))
  }

  // move right
  if (column > 1) {
    result = result.concat(printAllPath(pathProcessed + 'R', row, column - 1))
  }

  // move diagonally
  if (row > 1 && column > 1) {
    result = result.concat(
      printAllPath(pathProcessed + 'd', row - 1, column - 1)
    )
  }

  return result
}

console.log(printAllPath('', 3, 3))
