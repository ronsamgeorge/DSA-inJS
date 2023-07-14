# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def reverseBetween(self, head: Optional[ListNode], left: int, right: int) -> Optional[ListNode]:

        if head == None or head.next == None or left == right:
            return head

        slow = None
        curr = head
        fast = head.next
        temp = None

        count = 1
        while count < right and fast:
            print(curr.val)
            if count >= left:
                if count == left:
                    temp = slow

                curr.next = slow
            slow = curr
            curr = fast
            fast = fast.next
            count += 1

        curr.next = slow
        if temp == None:
            head.next = fast
            head = curr
        else:

            temp_back = temp.next
            temp_back.next = fast
            temp.next = curr

        return head
