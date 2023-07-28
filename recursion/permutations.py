# https://leetcode.com/problems/permutations/s

class Solution:
    def permute(self, nums: List[int]) -> List[List[int]]:
        return self.getPermute([], nums)

    def getPermute(self, processed, unprocessed):
        res = []
        if len(unprocessed) == 0:
            res.append(processed)
            return res

        for index in range(len(unprocessed)):
            res.extend(self.getPermute(
                processed + [unprocessed[index]], unprocessed[:index] + unprocessed[index+1:]))

        return res
