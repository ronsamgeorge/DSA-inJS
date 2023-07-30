# https://leetcode.com/problems/contains-duplicate-ii

class Solution:
    def containsNearbyDuplicate(self, nums: List[int], k: int) -> bool:
        res_hash = {}
        for index in range(len(nums)):
            if nums[index] in res_hash:
                if abs(res_hash[nums[index]] - index) <= k:
                    return True

            res_hash[nums[index]] = index

        return False
