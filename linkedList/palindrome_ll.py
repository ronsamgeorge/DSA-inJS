# naive approach
# run the fast and slow pointer approach, save both the halfs, reverse one and
# compare


# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next


# O(n) time , O(1) space
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def isPalindrome(self, head: Optional[ListNode]) -> bool:

        if not head or not head.next:
            return True

        mid = self.findMid(head)
        tail = self.reverseHalf(mid)
        mid.next = None  # endpoint for comparison
        return self.checkPalindrome(head, tail, mid)

    def checkPalindrome(self, head, tail, mid):
        temp = head
        while temp != None:
            if temp.val != tail.val:
                return False
            temp = temp.next
            tail = tail.next

        return True

    def findMid(self, head):
        slow = head
        fast = head
        while fast.next and fast.next.next:
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


# takes O(n) space
class SolutionNotOptimized:
    def isPalindrome(self, head) -> bool:

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
