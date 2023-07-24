# https://leetcode.com/problems/add-two-numbers/description/a

# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def addTwoNumbers(self, l1: ListNode, l2: ListNode) -> ListNode:
        temp1 = l1
        temp2 = l2
        carry = 0
        dummy = ListNode()
        temp = dummy

        while temp1 or temp2 or carry > 0:
            num1 = num2 = 0
            if temp1:
                num1 = temp1.val
                temp1 = temp1.next

            if temp2:
                num2 = temp2.val
                temp2 = temp2.next

            # get the total sum
            res = num1 + num2 + carry
            # value to be stored in new node
            ones_digit = res % 10
            # carry value
            carry = res // 10

            # create new node and append to dummy list
            node = ListNode(val=ones_digit)
            temp.next = node
            temp = temp.next

        return dummy.next
