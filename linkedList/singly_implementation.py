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

    def insert_at_beginning(self, value):
        node = Node(value)

        node.next = self.head
        self.head = node

        if self.tail == None:
            self.tail = node

    def addNode(self, val):
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


linkedList = LL()

linkedList.addNode("Hello")
linkedList.addNode("World")
linkedList.insert_at_beginning("Hello")


linkedList.printList()
