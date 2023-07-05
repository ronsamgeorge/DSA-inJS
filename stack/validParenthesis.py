class Solution:
    def isValid(self, s: str) -> bool:

        # if len(s) % 2 != 0:
        #     return False

        paren_stack = []
        for ch in s:
            if (ch == '(') or (ch == '{') or (ch == '['):
                paren_stack.append(ch)
            elif not paren_stack:
                return False
            elif (ch == ")"):
                if (paren_stack[len(paren_stack) - 1] != "("):
                    return False
                paren_stack.pop()
            elif (ch == "}"):
                if (paren_stack[len(paren_stack) - 1] != "{"):
                    return False
                paren_stack.pop()
            elif (ch == "]"):
                if (paren_stack[len(paren_stack) - 1] != "["):
                    return False
                paren_stack.pop()

        return not paren_stack
