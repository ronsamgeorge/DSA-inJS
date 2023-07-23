# https://leetcode.com/problems/excel-sheet-column-number/

class Solution:
    def titleToNumber(self, columnTitle: str) -> int:

        res = 0
        for ch in columnTitle:
            res = (26*res) + (ord(ch) - 64)

        return res
