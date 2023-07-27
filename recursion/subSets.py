# https://leetcode.com/problems/subsets/description/

class Solution:
    def subsets(self, nums: List[int]) -> List[List[int]]:

        def getSubSets(processed, unprocessed):
            res = []
            if len(unprocessed) == 0:
                res.append(processed)
                return res

            left = getSubSets(processed + [unprocessed[0]], unprocessed[1:])
            right = getSubSets(processed, unprocessed[1:])

            res.extend(left)
            res.extend(right)

            return res

        processed = []
        return getSubSets(processed, nums)
