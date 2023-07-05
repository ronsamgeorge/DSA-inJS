# uses the two pointer method: slow and fast
#

class Solution:
    def removeDuplicates(self, nums: List[int]) -> int:
        slow, fast = 0, 1    # starting point of the pointers

        # run till the end of the array
        while fast < len(nums):
            # both elements same means we can skip the intermediate ones
            if nums[slow] == nums[fast]:
                fast += 1

            # if not then fast has found a unique element, swap with slow+1 and
            # increment both pointers
            else:
                nums[slow+1] = nums[fast]
                slow += 1
                fast += 1

        return slow+1
