# https://leetcode.com/problems/merge-strings-alternately/description/

class Solution:
    def mergeAlternately(self, word1: str, word2: str) -> str:

        count1 = 0
        count2 = 0
        res = ""
        while count1 < len(word1) and count2 < len(word2):
            res += (word1[count1])
            res += (word2[count2])

            count1 += 1
            count2 += 1

        res += word1[count1:] if count1 < len(word1) else word2[count2:]

        return res
