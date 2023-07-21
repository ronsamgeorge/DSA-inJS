class Solution:
    def nextGreaterElement(self, nums1: List[int], nums2: List[int]) -> List[int]:

        next_greater = {}
        mono_stack = []
        res = []

        for i in range(len(nums2)-1, -1, -1):

            if len(mono_stack) == 0:
                next_greater[nums2[i]] = -1
                mono_stack.append(nums2[i])

            elif mono_stack[-1] > nums2[i]:
                next_greater[nums2[i]] = mono_stack[-1]
                while len(mono_stack) > 0 and not mono_stack[-1] < nums2[i]:
                    mono_stack.pop()
                mono_stack.append(nums2[i])

            else:
                next_greater[nums2[i]] = -1
                while len(mono_stack) != 0:
                    mono_stack.pop()

                mono_stack.append(nums2[i])

        for num in nums1:
            res.append(next_greater[num])

        return res
