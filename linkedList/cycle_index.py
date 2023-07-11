# https://leetcode.com/problems/linked-list-cycle-ii/description/


# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None

class SolutionOptimized:
    def detectCycle(self, head: Optional[ListNode]) -> Optional[ListNode]:

        slow = head
        fast = head

        while fast != None and fast.next != None:
            slow = slow.next
            fast = fast.next.next

            if (slow == fast):
                # keep fast as it is and move slow
                slow = head
                while True:
                    if (slow == fast):
                        return slow
                    slow = slow.next
                    fast = fast.next

        return None


class SolutionOg:
    def detectCycle(self, head: Optional[ListNode]) -> Optional[ListNode]:

        slow = head
        fast = head
        length_chain = 0

        while fast != None and fast.next != None:
            slow = slow.next
            fast = fast.next.next

            if (slow == fast):
                # keep fast as it is and move slow
                while True:
                    slow = slow.next
                    length_chain += 1

                    if (slow == fast):
                        return self.getIndex(head, length_chain)

        return None

    def getIndex(self, head, length_chain):

        p1 = head
        while length_chain > 0:
            p1 = p1.next
            length_chain -= 1

        p2 = head
        index = 0
        while p2 != p1:
            p2 = p2.next
            p1 = p1.next
            index += 1

        return p2
