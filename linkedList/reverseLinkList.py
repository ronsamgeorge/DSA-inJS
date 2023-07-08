# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next

class Solution:
    def reverseList(self, head):

        if (head == None):
            return head

        prev = None
        curr = head
        forw = curr.next

        while curr.next:
            curr.next = prev
            prev = curr
            curr = forw
            forw = forw.next

        curr.next = prev
        head = curr
        return head
