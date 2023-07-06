# https://leetcode.com/problems/climbing-stairs/description/

class Solution:
    def climbStairs(self, n: int) -> int:

        sol_list = {}
        sol_list[0] = 0
        sol_list[1] = 1
        sol_list[2] = 2
        return self.numberOfSteps(n, sol_list)

    def numberOfSteps(self, up, sol_list):

        if up in sol_list:
            return sol_list[up]

        leftRes, rightRes, res = 0, 0, 0
        if (up - 1 >= 0):
            leftRes += self.numberOfSteps(up-1, sol_list)

        if (up - 2 >= 0):
            rightRes += self.numberOfSteps(up-2, sol_list)

        sol_list[up] = rightRes + leftRes

        return sol_list[up]
