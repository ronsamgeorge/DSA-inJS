# https://leetcode.com/problems/happy-number/description/

# Hash Map solution : keep track of all the value calculated. O(n) extra space

class SolutionHashMap:
    def isHappy(self, n: int) -> bool:

        list_of_results = {}
        while n != 1:
            if n in list_of_results:
                return False

            list_of_results[n] = True
            n = self.squareDigits(n, 0)
        return True

    def squareDigits(self, n, ans):

        if n == 0:
            return ans

        digit = n % 10
        ans += (digit*digit)
        return self.squareDigits(n//10, ans)
