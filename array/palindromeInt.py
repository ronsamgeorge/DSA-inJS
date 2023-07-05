class Solution:
    def isPalindrome(self, x: int) -> bool:
        print(self.reverseInt(x, 0))

    def reverseInt(self, y: int, revInt: int) -> int:
        if (y == 0):
            return revInt

        revInt = (revInt*10) + (y % 10)
        return self.reverseInt(y//10, revInt)


sol = Solution()

sol.isPalindrome(32145)
