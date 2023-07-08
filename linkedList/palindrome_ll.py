# naive approach
# run the fast and slow pointer approach, save both the halfs, reverse one and
# compare


# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def isPalindrome(self, head: Optional[ListNode]) -> bool:

        slow = head
        fast = head
        halfway = str(slow.val)
        while fast.next and fast.next.next:
            slow = slow.next
            halfway += str(slow.val)
            fast = fast.next.next

        slow = slow.next
        tillEnd = ""
        while slow:
            tillEnd += str(slow.val)
            slow = slow.next

        return self.check(halfway, tillEnd)

    def check(self, halfway, tillEnd):
        return halfway[-2::-1] == tillEnd if (len(halfway) + len(tillEnd)) % 2 != 0 else halfway[::-1] == tillEnd
