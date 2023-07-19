class Solution:
    def calPoints(self, operations) -> int:

        stack = []
        for operation in operations:
            if operation == "C":
                stack.pop()
            elif operation == "D":
                temp = stack.pop()
                stack.append(temp)
                stack.append(2 * temp)
            elif operation == "+":
                first = stack.pop()
                second = stack.pop()
                stack.append(second)
                stack.append(first)
                stack.append(first + second)
            else:
                stack.append(int(operation))

        sum = 0
        while len(stack) > 0:
            sum += stack.pop()

        return sum
