/* Print the following Patter

        *
        **
        ***
        ****
*/

// the pattern argument is required to save the patter a particular row
// console.log always prints a new line

const printPattern = (row, column, pattern, currentRow) => {
  if (row < currentRow) {
    return;
  }

  if (currentRow === column) {
    console.log(pattern);
    printPattern(row, 0, "", currentRow + 1);
  } else {
    printPattern(row, column + 1, pattern + "* ", currentRow);
  }
};

printPattern(4, 0, "", 1);
