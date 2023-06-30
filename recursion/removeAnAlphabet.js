// remove occurences of a given character from string using recursion

const removeAnAlphabet = (str, character, currentIndex, result) => {
  // base condition
  if (currentIndex >= str.length) {
    return result;
  }

  if (str[currentIndex] !== character) {
    result += str[currentIndex];
  }

  return removeAnAlphabet(str, character, currentIndex + 1, result);
};

console.log(removeAnAlphabet("abbaba", "a", 0, ""));
