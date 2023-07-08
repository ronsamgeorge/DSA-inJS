class Node:
    def __init__(self, val) -> None:
        self.val = val
        self.next = None
        self.prev = None


class LinkedList:

    def __init__(self) -> None:
        self.head = None
        self.tail = None
        self.size = 0

    def add_node(self, val):
        node = Node(val)

        if self.head == None:
            self.head = node
            self.tail = node
            self.size += 1
            return

        temp = self.head
        while temp.next:
            temp = temp.next

        node.prev = temp
        temp.next = node
        self.tail = node
        self.size += 1

    def print_list(self):
        temp_node = self.head

        while temp_node:
            print(temp_node.val, end=" -> ")
            temp_node = temp_node.next

        print("END")

    def print_from_tail(self):
        temp = self.tail

        while temp:
            print(temp.val, end=" <- ")
            temp = temp.prev

        print("START")


ll = LinkedList()
ll.add_node(1)
ll.add_node(2)
print(ll.head.val)
print(ll.tail.val)
ll.print_from_tail()
