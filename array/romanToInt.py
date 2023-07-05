class Solution:
    def romanToInt(self, s: str) -> int:
        romanNum = {
            "I" : 1,
            "V" : 5,
            "X" : 10,
            "L" : 50,
            "C" : 100,
            "D" : 500,
            "M" : 1000
        }

        sum1 = 0
        for index in range(0,len(s)-1):
            if romanNum[s[index]] >= romanNum[s[index+1]]:
                sum1+= romanNum[s[index]]
            else:
                sum1 -= romanNum[s[index]]


        return sum1 + romanNum[s[len(s)-1]]