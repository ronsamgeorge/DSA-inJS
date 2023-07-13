# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def sortList(self, head: Optional[ListNode]) -> Optional[ListNode]:

        if not head or not head.next:
            return head

        # get mid and break the list on that point
        mid = self.getMid(head)
        temp_mid = mid.next
        mid.next = None

        left = self.sortList(head)
        right = self.sortList(temp_mid)

        return self.merge(left, right)

    # will merge in sorted manner the two lists given
    def merge(self, left, right):
        curr = dummy = ListNode()

        while left != None and right != None:
            if left.val < right.val:
                curr.next = left
                left = left.next
            else:
                curr.next = right
                right = right.next
            curr = curr.next

        if left != None:
            curr.next = left

        if right != None:
            curr.next = right

        return dummy.next

    def getMid(self, head):
        slow = head
        fast = head
        temp = slow
        while fast and fast.next:
            temp = slow
            slow = slow.next
            fast = fast.next.next
        # return the prev one
        return temp
