# https://leetcode.com/problems/first-unique-character-in-a-string/description/

class Solution:
    def firstUniqChar(self, s: str) -> int:

        mapping = {}

        for ch in s:
            if ch not in mapping:
                mapping[ch] = 0
            mapping[ch] += 1

        for index in range(len(s)):
            if mapping[s[index]] == 1:
                return index

        return -1
