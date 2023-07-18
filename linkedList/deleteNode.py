# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None


class SolutionOptimized:
    def deleteNode(self, node):
        """
        :type node: ListNode
        :rtype: void Do not return anything, modify node in-place instead.
        """
        # VICTIM NODE APPROACH, change val of curr and upgrade next to next.next
        curr = node
        curr.val = curr.next.val
        curr.next = curr.next.next
        return


class Solution:
    def deleteNode(self, node):
        """
        :type node: ListNode
        :rtype: void Do not return anything, modify node in-place instead.
        """
        curr = node

        while curr.next.next != None:
            curr.val = curr.next.val
            curr = curr.next

        curr.val = curr.next.val
        curr.next = None
        return
