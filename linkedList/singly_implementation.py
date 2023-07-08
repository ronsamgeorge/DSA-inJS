class Node:
    def __init__(self, value) -> None:
        self.value = value
        self.next = None

    def __repr__(self) -> str:
        return self.value


class LL:

    def __init__(self) -> None:
        self.head = None
        self.tail = None
        self.size = 0

    def insert_at_beginning(self, value):
        node = Node(value)

        node.next = self.head
        self.head = node
        self.size += 1

        if self.tail == None:
            self.tail = node

    def addNode(self, val):
        ''' Adds node to the end of the linked list'''
        node = Node(val)
        if self.head == None:
            self.head = node
            self.tail = node
        else:
            tempNode = self.head
            while tempNode.next != None:
                tempNode = tempNode.next
            tempNode.next = node
            self.tail = node
        self.size += 1

    def insert_at_index(self, val, index):
        ''' 0 indexed linked list '''
        if index == 0:
            self.insert_at_beginning(val)
            return

        if index == self.size:
            self.addNode(val)
            return

        node = Node(val)
        temp = self.head
        count = 0
        while count < index-1:
            temp = temp.next
            count += 1

        node.next = temp.next
        temp.next = node
        self.size += 1

    def printList(self):
        tempNode = self.head
        while tempNode.next:
            print(tempNode.value, end=" -> ")
            tempNode = tempNode.next
        print(tempNode.value)

    def findNode(self, search_val):
        tempNode = self.head

        while tempNode:
            if tempNode.value == search_val:
                return True
            tempNode = tempNode.next

        return False

    def delete_head(self):
        temp = self.head
        self.head = self.head.next
        temp.next = None

        if self.head == None:
            self.tail = None
        self.size -= 1

    def delete_tail(self):
        temp = self.head
        while temp.next.next:
            temp = temp.next

        temp.next = None
        self.size -= 1


linkedList = LL()

linkedList.addNode("1")
linkedList.addNode("2")
linkedList.addNode("4")

print(linkedList.size)
linkedList.insert_at_index(3, 2)
linkedList.printList()
linkedList.insert_at_index(5, 3)
linkedList.printList()
linkedList.delete_head()
linkedList.printList()
linkedList.delete_tail()
linkedList.printList()
linkedList.delete_tail()
linkedList.printList()
