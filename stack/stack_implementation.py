class Stack:

    def __init__(self) -> None:
        self.data = []
        self.size = 0

    def push(self, val):
        self.data.append(val)
        self.size += 1

    def peek(self):
        if self.size == 0:
            return "No Elements in stack"

        return (self.data[self.size - 1])

    def pop(self):

        if self.size == 0:
            return "Stack Empty, No elements to Pop"

        temp = self.data[self.size - 1]
        del self.data[self.size - 1]
        self.size -= 1
        return temp


st = Stack()
st.push(1)
st.push(2)
st.push(3)
print(st.pop())
print(st.pop())
print(st.pop())
print(st.peek())
