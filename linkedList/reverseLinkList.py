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


# using recursion
class Solution:
    def reverseList(self, head: Optional[ListNode]) -> Optional[ListNode]:

        if not head or not head.next:  # empty or one element present , return
            return head

        # create dummy link to the new head
        dummy = ListNode()
        dummy.next = head
        self.reverseNodes(head, dummy)
        return dummy.next

    def reverseNodes(self, head, dummy):

        if head.next == None:
            dummy.next = head
            return head

        prev = self.reverseNodes(head.next, dummy)

        prev.next = head
        head.next = None
        return head
