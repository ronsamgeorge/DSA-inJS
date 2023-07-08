# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next

# use the TWO POINTER Method since the linked list is sorted
# TWO POINTER : slow and fast pointer
class Solution:
    def deleteDuplicates(self, head: Optional[ListNode]) -> Optional[ListNode]:

        if head == None:
            return head

        s = head
        f = head.next

        while f:
            if s.val != f.val:
                s.next = f
                s = f
            f = f.next

        s.next = f

        return head
