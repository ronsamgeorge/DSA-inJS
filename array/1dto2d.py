class Solution:
    def construct2DArray(self, original: List[int], m: int, n: int) -> List[List[int]]:

        if m*n != len(original):
            return []

        m_track = 0
        n_track = 0
        res = []
        temp = []

        for num in original:
            if n == n_track:
                res.append(temp)
                m_track += 1
                n_track = 0
                temp = []

            temp.append(num)
            n_track += 1

        res.append(temp)
        return res
