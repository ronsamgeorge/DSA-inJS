// Ques : Find possible paths from starting position to target position in matrix

const totalPath = (row, column) => {
  // base condition : if its the end row or column return 1
  if (row === 1 || column === 1) {
    return 1
  }
  /* create local variable count to get all the value from downwards recursion
   trees */
  let count = 0
  count = count + totalPath(row - 1, column)
  count = count + totalPath(row, column - 1)
  return count
}

console.log(totalPath(4, 3))
