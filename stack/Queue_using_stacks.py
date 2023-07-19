class MyQueue:

    def __init__(self):
        """
        Initialize your data structure here.
        """
        self.stack_main = []
        self.stack_backup = []
        self.size = 0

    def push(self, x: int) -> None:
        """
        Push element x to the back of queue.
        """
        self.stack_main.append(x)
        self.size += 1

    def pop(self) -> int:
        """
        Removes the element from in front of queue and returns that element.
        """
        first_ele = self.transferToBackup()
        self.stack_main.pop()
        self.size -= 1
        self.transferToMain()
        return first_ele

    def peek(self) -> int:
        """
        Get the front element.
        """
        first_ele = self.transferToBackup()
        self.transferToMain()
        return first_ele

    def empty(self) -> bool:
        """
        Returns whether the queue is empty.
        """
        if self.size == 0:
            return True
        return False

    def transferToBackup(self):

        while self.size > 1:
            self.stack_backup.append(self.stack_main.pop())
            self.size -= 1

        return self.stack_main[self.size - 1]

    def transferToMain(self):
        while len(self.stack_backup) != 0:
            self.stack_main.append(self.stack_backup.pop())
            self.size += 1


# Your MyQueue object will be instantiated and called as such:
# obj = MyQueue()
# obj.push(x)
# param_2 = obj.pop()
# param_3 = obj.peek()
# param_4 = obj.empty()
