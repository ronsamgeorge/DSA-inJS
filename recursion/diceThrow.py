class Die:

    def getCombination(self, faces, target ):

        result = []
        def combinations(processed, unprocessed):

            if unprocessed == 0:
                result.append(processed)
                return
            
            for i in range(1,int(faces)) :
                if i <= unprocessed :
                    combinations(processed + str(i), unprocessed - i)


        combinations("",target)
        return result
    
d = Die()

print(d.getCombination("6",4))