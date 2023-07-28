# https://leetcode.com/problems/binary-search
class Solution:
    def search(self, nums, target: int) -> int:
        return self.binarySearch(nums, target, 0, len(nums)-1)

    def binarySearch(self, nums, target, start, end):

        if start > end:
            return -1

        mid = (start+end) // 2

        if nums[mid] == target:
            return mid

        if nums[mid] < target:
            return self.binarySearch(nums, target, mid+1, end)
        else:
            return self.binarySearch(nums, target, start, mid-1)
