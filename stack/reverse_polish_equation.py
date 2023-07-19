# https://leetcode.com/problems/evaluate-reverse-polish-notation/

class Solution:
    def evalRPN(self, tokens: List[str]) -> int:

        stack = []
        res = 0
        for token in tokens:
            res = 0
            if token == "+":
                res = stack.pop() + stack.pop()
                stack.append(res)
            elif token == "-":
                first = stack.pop()
                second = stack.pop()
                res = second-first
                stack.append(res)
            elif token == "*":
                res = stack.pop() * stack.pop()
                stack.append(res)
            elif token == "/":
                divisor = stack.pop()
                dividend = stack.pop()
                res = int(float(dividend) / divisor)
                stack.append(res)
            else:
                stack.append(int(token))

        return stack.pop()
