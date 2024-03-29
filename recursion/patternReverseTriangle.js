/* Print the following Patter

        * * * *
        * * *
        * *
        * 
*/

// the pattern argument is required to save the patter a particular row
// console.log always prints a new line

const printPattern = (row, column, pattern) => {
  if (row === 0) {
    return;
  }

  if (row === column) {
    printPattern(row - 1, 0, "");
    console.log(pattern);
  } else {
    printPattern(row, column + 1, pattern + "* ");
  }
};

printPattern(4, 0, "");
