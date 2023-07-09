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

    def add_at_head(self, val):
        node = Node(val)

        temp = self.head
        node.next = temp
        self.head = node
        self.size += 1

    def add_at_index(self, val, index):

        if index == 0:
            self.add_at_head(val)
            return

        if index == self.size:
            self.add_node(val)
            return

        new_node = Node(val)
        lastNode = self.head
        curr = self.head.next
        count = 1

        while count != index:
            lastNode = curr
            curr = curr.next
            count += 1

        new_node.next = curr
        new_node.prev = lastNode

        curr.prev = new_node
        lastNode.next = new_node

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
ll.add_node(3)
print(ll.head.val)
print(ll.tail.val)
ll.print_list()

ll.add_at_index(10, 2)
ll.print_list()
ll.add_at_index(20, 4)
ll.print_list()
