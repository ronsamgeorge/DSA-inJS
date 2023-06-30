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

// without taking a result variable in the function calls
const removeAlphabet = (str, ch) => {
  if (str === "") {
    return "";
  }

  console.log(str[0]);
  if (str[0] !== ch) {
    return str[0] + removeAlphabet(str.slice(1), ch);
  } else {
    return "" + removeAlphabet(str.slice(1), ch);
  }
};

console.log(removeAnAlphabet("baccad", "a", 0, ""));
console.log(removeAlphabet("baccad", "a"));
