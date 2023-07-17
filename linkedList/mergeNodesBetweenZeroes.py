# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def mergeNodes(self, head: Optional[ListNode]) -> Optional[ListNode]:

        res = dummy = ListNode()
        count = 0
        curr = head

        while curr != None:
            if curr.val == 0 and count != 0:
                temp = ListNode(val=count)
                res.next = temp
                res = res.next
                count = 0

            count += curr.val
            curr = curr.next

        return dummy.next
