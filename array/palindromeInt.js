var isPalindrome = function (x) {
  if (reverseInt(x, 0) === x) {
    return true
  }
  return false
}

const reverseInt = (y, revInt) => {
  if (y === 0) {
    return revInt
  }
  return reverseInt(Math.floor(y / 10), revInt * 10 + (y % 10))
}

console.log(isPalindrome(121))
