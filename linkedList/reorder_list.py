# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def reorderList(self, head: Optional[ListNode]) -> None:
        """
        Do not return anything, modify head in-place instead.
        """

        if not head or not head.next:
            return head

        mid = self.findMid(head)
        tail = self.reverseHalf(mid)
        mid.next = None
        return self.reorderLinks(head, tail)

    def reorderLinks(self, head, tail):

        temp = dummy = ListNode()
        first = head

        while first.next != None:
            temp.next = first
            first = first.next
            temp = temp.next

            temp.next = tail
            tail = tail.next
            temp = temp.next

        return dummy.next

    def findMid(self, head):
        slow = head
        fast = head

        while fast != None and fast.next != None:
            slow = slow.next
            fast = fast.next.next

        return slow

    def reverseHalf(self, mid):

        prev = mid
        curr = mid.next

        while curr != None:
            forw = curr.next
            curr.next = prev
            prev = curr
            curr = forw

        return prev
