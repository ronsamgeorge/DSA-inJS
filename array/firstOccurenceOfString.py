class SolutionRecursive:
    def strStr(self, haystack: str, needle: str) -> int:
        return self.needle_present(haystack, needle, 0)

    def needle_present(self, haystack, needle,  index):

        if len(needle) > len(haystack):
            return -1

        if needle == haystack[:len(needle)]:
            return index

        # remove first element and compare needle in the next iteration
        return self.needle_present(haystack[1:], needle, index+1)


class SolutionSlidingWindow:
    def strStr(self, haystack: str, needle: str) -> int:

        index = 0
        while len(haystack[index:]) >= len(needle):
            sub_string = haystack[index:index+len(needle)]
            print(sub_string)
            if sub_string == needle:
                return index

            index += 1

        return -1
