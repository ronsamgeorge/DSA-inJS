# https://leetcode.com/problems/next-greater-element-i/description/

# use monotonic decreasing stack

class Solution:
    def nextGreaterElement(self, nums1: List[int], nums2: List[int]) -> List[int]:

        map_num1 = {}
        mono_stack = []
        res = [-1 for x in range(len(nums1))]  # initialize res with -1

        # create hash map with num1 value as key  and index has value
        for index, num in enumerate(nums1):
            map_num1[num] = index

        for num in nums2:
            # as long as the current element is greater pop()
            while mono_stack and num > mono_stack[-1]:
                temp = mono_stack.pop()
                if temp in map_num1:
                    # if what was popped is in num1 update res at that index
                    res[map_num1[temp]] = num
            mono_stack.append(num)             # insert num at the top of stack

        return res
