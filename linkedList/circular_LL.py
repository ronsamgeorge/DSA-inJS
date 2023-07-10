class Node:

    def __init__(self, val) -> None:
        self.val = val
        self.next = None


class CircularLL:
    def __init__(self) -> None:
        self.head = None
        self.tail = None

    def insert_node(self, val):

        node = Node(val)
        if (self.head == None):
            self.head = node
            self.tail = node
            return

        self.tail.next = node
        node.next = self.head
        self.tail = node

    def delete_val(self, val):

        if self.head.val == val:
            self.head = self.head.next
            self.tail.next = self.head
            return

        temp = self.head
        while temp.next != self.head:
            if (temp.next.val == val):
                temp.next = temp.next.next

            temp = temp.next

    def display_list(self):

        if self.head == None:
            return

        temp = self.head
        print(temp.val, end="->")
        temp = temp.next

        while temp != self.head and temp != None:
            print(temp.val, end="->")
            temp = temp.next
        print("end")


cll = CircularLL()

cll.insert_node(1)
cll.insert_node(2)
cll.insert_node(3)
cll.display_list()
cll.delete_val(1)
cll.display_list()
print(cll.tail.val)
print(cll.head.val)
